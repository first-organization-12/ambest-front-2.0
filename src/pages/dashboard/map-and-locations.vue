<template>
  <q-page class="q-pa-md">
    <q-card class="q-pa-md">

    <!-- Button to Open Modal -->
     <div class="text-right q-my-md">
       <q-btn label="Upload CSV File" color="primary" @click="showModal = true" />
     </div>

    <!-- File Upload Modal -->
    <q-dialog v-model="showModal">
      <q-card class="q-pa-md" style="width: 400px">
        <q-card-section>
          <div class="text-h6">Upload File</div>
        </q-card-section>

        <q-card-section>
          <!-- File Input with Validation -->
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
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="cancel" color="negative" @click="resetForm" />
          <q-btn
            flat
            label="Upload"
            color="primary"
            @click="handleUpload"
            :disable="fileError || !selectedFile || loading"
          />
        </q-card-actions>

        <!-- Loading Indicator -->
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

          <template v-slot:body-cell-feedback_mail="props">
          <q-td :props="props" class="feedback_mail">
            <a :href="`mailto:${props.row.feedback_mail}`">{{  props.row.feedback_mail }}</a>
          </q-td>
        </template>

          <template v-slot:body-cell-main_phone="props">
          <q-td :props="props" class="main_phone">
            <a :href="`tel:${props.row.main_phone}`">{{ props.row.main_phone }}</a>
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
        { name: "internal_id", label: "Id", align: "left", field: "internal_id", sortable: true },
        { name: "name", label: "Name", align: "left", field: "name", sortable: true },
        { name: "directory_address", label: "Directory Address", align: "left", field: "directory_address", sortable: true },
        { name: "city", label: "City", align: "left", field: "city", sortable: true },
        { name: "state_in_sort", label: "State", align: "left", field: "state_in_sort", sortable: true },
        { name: "zip", label: "Zip Code", align: "left", field: "zip", sortable: true },
        { name: "main_phone", label: "Main Phone", align: "left", field: "main_phone", },
        { name: "lat", label: "Lat", align: "left", field: "lat", sortable: true },
        { name: "long", label: "Long", align: "left", field: "long", sortable: true },
        { name: "restaurants", label: "Restaurants", align: "left", field: "restaurants", sortable: true },
        { name: "website", label: "Web Site", align: "left", field: "website", sortable: true },
        { name: "retail_diesel", label: "Retail Diesel", align: "left", field: "retail_diesel", sortable: true },
        { name: "hours_of_operation", label: "Hours of Operation", align: "left", field: "hours_of_operation", sortable: true },
        { name: "all_amenities", label: "All Amenities", align: "left", field: "all_amenities", sortable: true },
        { name: "social_media", label: "Social Media", align: "left", field: "social_media", sortable: true },
        { name: "feedback_mail", label: "Feedback Mail", align: "left", field: "feedback_mail", sortable: true },
        { name: "state", label: "State", align: "left", field: "state", sortable: true },
        { name: "website_notes", label: "Website Notes", align: "left", field: "website_notes", sortable: true },
    ];

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

        // Replace with your API URL
        api.post("import-locations-csv", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }).then(()=>{
          // console.log("File uploaded successfully:", response.data);
          showSuccessNotification('File uploaded successfully');
          resetForm();
          getLocations();
        }).catch((error)=>{
          console.error("Upload failed:", error);
          errorMessage.value = "Upload failed! Please try again.";
          fileError.value = true;
        })
        loading.value = false; // Hide loading spinner
      };

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
      pagination

    }
  }
}

</script>
<style>
.q-table__control .q-btn{
  display: none;
}
</style>
