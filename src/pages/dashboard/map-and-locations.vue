<template>
  <q-page class="q-pa-md">
    <q-card class="q-pa-md" style="height:100vh;">

    <!-- Button to Open Modal -->
     <div class="flex justify-end" style="gap:10px">
       <div v-if="selectedDeleteButton" class="text-right q-my-md">
         <q-btn label="Delete Locations" color="red" @click="handleBulkDelete" />
        </div>
       <div class="text-right q-my-md">
         <q-btn label="Add Location" color="primary" @click="handleCreateModel" />
        </div>
        <div class="text-right q-my-md">
          <!-- <q-btn label="Upload CSV File" color="primary" @click="showModal=true" /> -->
          <q-btn label="Upload CSV File" color="primary" @click="handlecsvUpload()" />
        </div>
      </div>

    <!-- File Upload Modal -->
    <q-dialog v-model="showModal">
      <q-card style="min-width: 50vw;">
        <q-card-section>
          <div class="text-h6">Upload Location File</div>
        </q-card-section>

        <q-card-section>

          <q-file
            v-model="selectedFile"
            label="Choose File"
            accept=".csv, .xls, .xlsx"
            filled
            clearable
            :error="fileError"
            @update:model-value="validateFile"
          />
          <q-banner v-if="fileError" class="bg-red text-white q-mt-sm">
            {{ errorMessage }}
          </q-banner>


          <div v-if="preview.invalid_rows?.length" class="q-mt-md">
            <q-banner class="bg-orange text-white">
              {{ preview.invalid_rows.length }} invalid row(s) detected. Confirm to proceed with valid rows only.
              {{ preview.valid_rows_count }} valid row(s).
              {{ preview.duplicate_entries }} duplicate row(s).
            </q-banner>

            <q-markup-table dense flat bordered class="q-mt-sm">
              <thead>
                <tr>
                  <th>Row</th>
                  <th>Errors</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, index) in preview.invalid_rows" :key="index">
                  <td>{{ row.row }}</td>
                  <td>
                    <ul>
                      <li v-for="(err, i) in row.errors" :key="i">{{ err }}</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </q-markup-table>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="negative" @click="resetForm" />

          <q-btn
            v-if="preview.status === 'preview'"
            flat
            label="Confirm Import"
            color="primary"
            :disable="loading"
            @click="confirmImport"
          />

          <q-btn
            v-else
            flat
            label="Upload"
            color="primary"
            :disable="fileError || !selectedFile || loading"
            @click="handleUpload"
          />
        </q-card-actions>

        <q-inner-loading :showing="loading">
          <q-spinner color="primary" size="50px" />
        </q-inner-loading>
      </q-card>
    </q-dialog>


    <q-table
        flat
        bordered
        title="Contact Messages"
        :rows="tableData"
        :columns="columns"
        row-key="id"
        :filter="search"
        v-model:pagination="pagination"
        :rows-per-page-options="[5, 10, 20]"
        :loading="loadingTable"
        loading-label="Fetching data..."
        class="my-table"
        >
        <template v-slot:top-right>
            <q-input v-model="search" debounce="300" placeholder="Search..." outlined dense>
              <template v-slot:append>
                <q-icon name="search" />
              </template>
            </q-input>
        </template>

      <!-- Header checkbox -->
          <template v-slot:header-cell-select="props">
            <q-th :props="props">
              <q-checkbox
                v-model="allSelected"
                @update:model-value="toggleSelectAll"
              />
            </q-th>
          </template>

          <!-- Row checkbox -->
          <template v-slot:body-cell-select="props">
            <q-td :props="props">
              <q-checkbox
                :model-value="selectedLocationsForDelete.includes(props.row.id)"
                @update:model-value="(val) => toggleSelection(val, props.row.id)"
              />
            </q-td>
          </template>

        <template v-slot:body-cell-star_color="props">
          <q-td :props="props" class="star_color">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              :fill="getStarColor(props.row.star_color)"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" stroke="black" stroke-width="1" />
            </svg>
          </q-td>
        </template>

          <template v-slot:body-cell-main_phone="props">
          <q-td :props="props" class="main_phone">
            <a :href="`tel:${props.row.main_phone}`">{{ props.row.main_phone }}</a>
          </q-td>
        </template>

        <template v-slot:body-cell-action="props">
          <q-td align="center">
            <q-btn dense flat icon="edit" color="primary" @click="editRow(props.row)" />
            <q-btn dense flat icon="delete" color="negative" @click="deleteRow(props.row)" />
          </q-td>
        </template>

        </q-table>
        <div class="q-mt-md flex justify-end">
        <q-pagination
          v-model="pagination.page"
          :max="Math.ceil(tableData.length / pagination.rowsPerPage)"
          direction-links
        />
      </div>
  </q-card>
  </q-page>

<q-dialog v-model="addModel" >
<q-card style="min-width: 50vw;">
    <q-card-section>
      <div class="text-h6">{{ modelTitle }}</div>
    </q-card-section>

    <q-separator />

    <q-card-section>
      <q-form @submit="handleCreateForm">
          <q-select
            v-model="form.location_type"
            :options="locationTypeOptions"
            label="Location Type"
            emit-value
            map-options
            style="font-size: 16px; margin-top: 5px;" outlined
          />

          <q-input
            v-model="form.name"
            :rules="[
              val => !val || val.length <= 255 || 'Name must be 255 characters or less'
            ]"
            label="Name" maxlength="255" style="font-size: 16px; margin-top: 5px;" outlined />

          <q-input
          v-model="form.directory_address"
          type="textarea"
          rows="3"
          label="Directory Address" style="font-size: 16px; margin-top: 5px;" outlined />

          <q-input v-model="form.city"
            :rules="[
              val => !val || val.length <= 255 || 'City must be 255 characters or less'
            ]"
            label="City" maxlength="255" style="font-size: 16px; margin-top: 5px;" outlined />

          <q-input v-model="form.state"
            :rules="[
              val => !val || val.length <= 255 || 'State must be 255 characters or less'
            ]"
            label="State" maxlength="255" style="font-size: 16px; margin-top: 5px;" outlined />

          <q-input v-model="form.zip"
            :rules="[
              val => !val || /^\d+$/.test(val) || 'ZIP code must be numeric'
            ]"
           label="Zip Code" type="number" style="font-size: 16px; margin-top: 5px;" outlined />

          <q-input v-model="form.main_phone"
          mask="(###) ###-####"
          hint="Format: (555) 123-4567"
          label="Main Phone" style="font-size: 16px; margin-top: 5px;" outlined />

          <q-input v-model="form.lat"
          :rules="[
            val => !val || /^-?\d+\.?\d*$/.test(val) || 'Please enter a valid latitude'
          ]"
          hint="Example: 40.7128"
          label="Latitude" style="font-size: 16px; margin-top: 5px;" outlined />

          <q-input v-model="form.long"
          :rules="[
            val => !val || /^-?\d+\.?\d*$/.test(val) || 'Please enter a valid longitude'
          ]"
          hint="Example: -74.0060"
          label="Longitude" style="font-size: 16px; margin-top: 5px;" outlined />
        <q-card-actions align="right">
          <q-btn :label="formBtn" class="q-mt-sm" style="margin-top: 5px;" color="primary" type="submit"/>
          <q-btn flat label="Close" color="primary" v-close-popup />
        </q-card-actions>
      </q-form>
    </q-card-section>
  </q-card>
  </q-dialog>
</template>

<script>
import { ref, onMounted } from 'vue';
import { api } from 'src/boot/axios';
import { useQuasar } from 'quasar';
export default {

  setup(){
      const loadingTable = ref(true);
      const search = ref("");
      const pagination = ref({ page: 1, rowsPerPage: 10 });
      const q = useQuasar();
      const showModal = ref(false);
      const selectedFile = ref(null);
      const fileError = ref(false);
      const errorMessage = ref("");
      const loading = ref(false);
      const tableData = ref([]);
      const columns = [
        { name: 'select', label: '', field: 'id' },
        { name: "id", label: "Id", align: "left", field: "id", sortable: true },
        { name: "star_color", label: "Start Color", align: "left", field: "star_color", sortable: true },
        { name: "name", label: "Name", align: "left", field: "name", sortable: true },
        { name: "directory_address", label: "Directory Address", align: "left", field: "directory_address", sortable: true },
        { name: "city", label: "City", align: "left", field: "city", sortable: true },
        { name: "state", label: "State", align: "left", field: "state", sortable: true },
        { name: "zip", label: "Zip Code", align: "left", field: "zip", sortable: true },
        { name: "main_phone", label: "Main Phone", align: "left", field: "main_phone", },
        { name: "lat", label: "Lat", align: "left", field: "lat", sortable: true },
        { name: "long", label: "Long", align: "left", field: "long", sortable: true },
        { name: 'action', label: 'Action', align: 'center' }
    ];
    function getStarColor(color) {
      switch (color) {
        case 'blue':
          return '#027dff';
        case 'red':
          return '#ff0000';
        case 'green':
          return '#008000';
        case 'yellow':
          return '#ffa500';
        case 'white':
          return '#89cff0';
        default:
          return 'gold';
      }
    }

      // Allowed file types
      const allowedTypes = ["text/csv", "application/vnd.ms-excel", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"];

      // Validate File Selection
      const validateFile = () => {
        if (!selectedFile.value) {
          fileError.value = true;
          errorMessage.value = "Please select a file!";
          return;
        }

        const fileType = selectedFile.value.type;

        if (!allowedTypes.includes(fileType)) {
          fileError.value = true;
          errorMessage.value = "Invalid file type! Please upload a CSV, XLS, or XLSX file.";
          selectedFile.value = null;
        } else {
          fileError.value = false;
          errorMessage.value = "";
        }
      };
      const  preview = ref({});
      const handlecsvUpload =()=>{
        // console.log("click");
        showModal.value = true;
        preview.value = {};
      }
      // Handle File Upload via Axios
      const handleUpload = async () => {
        if (!selectedFile.value) {
          fileError.value = true;
          errorMessage.value = "Please select a file before uploading!";
          return;
        }

        loading.value = true; // Show loading spinner
        const formData = new FormData();
        formData.append("csv_file", selectedFile.value);

        try {
            const res = await api.post('import-locations-csv', formData,{
              headers: {
                "Content-Type": "multipart/form-data",
              },
            });
            showSuccessNotification(res.data.message)
            // q.notify({ type: 'positive', message: res.data.message });
            resetForm();
          } catch (err) {
            if (err.response?.status === 422 && err.response.data.status === 'preview') {
              preview.value = err.response.data;
              console.log(preview.value);

            } else {
              showErrorNotification('Upload failed.')
              // q.notify({ type: 'negative', message: 'Upload failed.' });
            }
          } finally {
            loading.value = false;
          }

        // Replace with your API URL
        // api.post("import-locations-csv", formData, {
        //   headers: {
        //     "Content-Type": "multipart/form-data",
        //   },
        // }).then(()=>{
        //   // console.log("File uploaded successfully:", response.data);
        //   showSuccessNotification('File uploaded successfully');
        //   resetForm();
        //   getLocations();
        // }).catch((error)=>{
        //   console.error("Upload failed:", error);
        //   errorMessage.value = "Upload failed! Please try again.";
        //   fileError.value = true;
        // })
        // loading.value = false; // Hide loading spinner
      };

      const confirmImport = async() =>{
        if (!selectedFile.value) return;

        loading.value = true;
        const formData = new FormData();
        formData.append("csv_file", selectedFile.value);;
        formData.append('confirm_import', 1);

        try {
          const res = await api.post('import-locations-csv', formData);
          showSuccessNotification(res.data.message)
          resetForm();
          getLocations();
        } catch (err) {
          console.log(err);
          showErrorNotification('Confirmation failed.')
          // this.$q.notify({ type: 'negative', message: 'Confirmation failed.' });
        } finally {
          loading.value = false;
        }
      }

      // Reset Form
      const resetForm = () => {
        selectedFile.value = null;
        fileError.value = false;
        errorMessage.value = "";
        showModal.value = false;
        loading.value = false;
      };

      const getLocations=()=>{
        api.get('get-locations-and-fuel-price')
        .then((response)=>{
            tableData.value = response.data.data;
        })
        .catch((error)=>{
          console.log(error);
        })
        loadingTable.value = false;
      }

      const deleteRow = (row) => {
        q.dialog({
          title: 'Confirm Delete',
          message: `Are you sure you want to delete "${row.name}"?`,
          cancel: true,
          persistent: true
        }).onOk(()=>{
          api.delete('delete-location', {
            data: { id: row.id }
          })
          .then((response)=>{
            tableData.value = response.data.data;
            showSuccessNotification(response.data.message);
          })
          .catch((error)=>{
            console.log(error);
            console.log(error.message);
            console.log(error?.response?.data.message);

            showErrorNotification(error?.response?.data.message || error.response.message || error.message);

          })
        });
      };

      const showSuccessNotification = (message) => {
        q.notify({
          color: "positive",
          position: "top",
          message: message,
          icon: "check_circle",
        });
      };

        const showErrorNotification = (message) => {
          q.notify({
            color: "negative",
            position: "top",
            message: message,
            icon: "report_problem",
          });
        };

    //location add model
    const addModel = ref(false);
    const selectedDeleteButton = ref(false);
    const modelTitle = ref('');
    const formBtn = ref('');
    const form = ref({
      location_type: '',
      id: '',
      name: '',
      directory_address: '',
      city: '',
      state: '',
      zip: '',
      main_phone: '',
      lat: '',
      long: '',
    })
    const locationTypeOptions = [
      { label: 'Ambest Travel/Service Center', value: 'ambest_travel/service_center' },
      { label: 'Ambest Travel Center', value: 'ambest_travel_center' },
      { label: 'Ambest Fuel Stop', value: 'ambest_fuel_stop' },
      { label: 'Ambest Express', value: 'ambest_express' },
      { label: 'Ambest Service Center', value: 'ambest_service_center' },
      { label: 'Ambest Mobile Location', value: 'ambest_mobile_location' },
    ]
    const onReset = () =>{
      form.value = {
        location_type: '',
        id: '',
        name: '',
        directory_address: '',
        city: '',
        state: '',
        zip: '',
        main_phone: '',
        lat: '',
        long: '',
      };
    }
    const handleCreateModel = ()=>{
      onReset()
      modelTitle.value = "Add New AMBEST Location";
      addModel.value = true;
      formBtn.value = "Add Location";
    }
    const handleCreateForm = ()=>{
      const formData = Object.keys(form.value).reduce((acc, key) => {
        if (form.value[key] !== '' && form.value[key] !== null) {
          acc[key] = form.value[key]
        }
        return acc
      }, {})
      console.log('Form submitted:', formData)
      api.post('store-location',formData)
      .then((res)=>{
        tableData.value = res.data.data;
        showSuccessNotification(res.data.message);
        onReset();
        addModel.value = false;
      })
      .catch((error)=>{
        console.log(error);
        console.log(error.message);
        console.log(error?.response?.data.message);
        showErrorNotification(error?.response?.data.message || error.response.message || error.message);
      })
    }
    function getlocationType(color) {
      switch (color) {
        case 'blue':
          return 'ambest_travel/service_center';
        case 'red':
          return 'ambest_travel_center';
        case 'green':
          return 'ambest_express';
        case 'yellow':
          return 'ambest_fuel_stop';
        case 'white':
          return 'ambest_service_center';
        default:
          return ;
      }
    }
    const editRow = (row) =>{
      modelTitle.value = "Update AMBEST Location";
      addModel.value = true;
      formBtn.value = "Update Location";

      form.value.location_type = getlocationType(row.star_color);
      form.value.id = row.id;
      form.value.name = row.name;
      form.value.directory_address = row.directory_address;
      form.value.city = row.city;
      form.value.state = row.state;
      form.value.zip = row.zip;
      form.value.main_phone = row.main_phone;
      form.value.lat = row.lat;
      form.value.long = row.long;

    }
    // bulk delete
    const selectedLocationsForDelete = ref([]);
    const allSelected = ref(false);
    // Toggle single selection
    const toggleSelection = (val, id) => {
      if (val) {
        selectedLocationsForDelete.value.push(id)
      } else {
        selectedLocationsForDelete.value = selectedLocationsForDelete.value.filter(i => i !== id)
      }
      updateAllSelected()
      if(selectedLocationsForDelete.value.length >= 1){
        deleteBtn(true)
      }else{
        deleteBtn(false)
      }
    }

    // Toggle all
    const toggleSelectAll = (val) => {
      if (val) {
        selectedLocationsForDelete.value = tableData.value.map(loc => loc.id)
      } else {
        selectedLocationsForDelete.value = [];
      }
      allSelected.value = val
      if(selectedLocationsForDelete.value.length >= 1){
        deleteBtn(true)
      }else{
        deleteBtn(false)
      }
    }

    // Update "Select All" state if any item is manually selected/unselected
    const updateAllSelected = () => {
      allSelected.value = selectedLocationsForDelete.value.length === tableData.value.length
      if(selectedLocationsForDelete.value.length >= 1){
        deleteBtn(true)
      }else{
        deleteBtn(false)
      }
    }

    const deleteBtn = (val)=>{
      selectedDeleteButton.value = val;
    }

    const handleBulkDelete =()=>{

      q.dialog({
          title: 'Confirm Bulk Delete',
          message: `Are you sure you want to delete selected "${selectedLocationsForDelete.value.length}" locations ?`,
          cancel: true,
          persistent: true
        }).onOk(()=>{
          const ids = selectedLocationsForDelete.value.map(row => row);
          api.delete('location-bulk-delete',{data:{ ids }})
          .then((res)=>{
            let { message } = res.data;
            allSelected.value = false;
            selectedLocationsForDelete.value = [];
            deleteBtn(false);
            getLocations();
            showSuccessNotification(message);
          })
          .catch((err)=>{
            console.log(err);
            console.log(err.message);
            console.log(err?.response?.data.message);

            showErrorNotification(err?.response?.data.message || err.response.message || err.message);
          })
        });
    }
    onMounted(getLocations);
    return{
      q,
      showModal,
      handleUpload,
      selectedFile,
      validateFile,
      resetForm,
      showSuccessNotification,
      showErrorNotification,
      getLocations,
      columns,
      tableData,
      loadingTable,
      search,
      pagination,
      deleteRow,

      addModel,
      modelTitle,
      formBtn,
      form,
      handleCreateModel,
      locationTypeOptions,
      handleCreateForm,
      editRow,
      getStarColor,

      selectedLocationsForDelete,
      allSelected,
      toggleSelection,
      toggleSelectAll,
      selectedDeleteButton,
      handleBulkDelete,

      preview,
      confirmImport,
      handlecsvUpload,
    }
  }
}

</script>
<style>
.q-table__control .q-btn{
  display: none;
}
</style>
