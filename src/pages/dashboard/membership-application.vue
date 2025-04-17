<template>
  <q-card class="q-mt-md">
        <q-card-section style="height:100vh;">
            <q-table
            flat
            bordered
            title="Membership Applications"
            :rows="tableData"
            :columns="columns"
            row-key="id"
            v-model:pagination="pagination"
            :filter="search"
            :rows-per-page-options="[5, 10, 15]"
            :loading="loading"
            loading-label="Fetching data..."
            >

            <!-- Search -->
            <template v-slot:top-right>
              <q-input v-model="search" debounce="300" placeholder="Search..." outlined dense>
                <template v-slot:append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </template>

            <!-- Customizing message field width -->
            <template v-slot:body-cell-messages="props">
              <q-td :props="props">
                <q-item>
                  <q-item-section>
                    <q-item-label class="text-wrap">{{ props.row.messages }}</q-item-label>
                  </q-item-section>
                </q-item>
              </q-td>
            </template>

            <template v-slot:body-cell-email="props">
              <q-td :props="props" class="email-column">
                <a :href="`mailto:${props.row.email}`">{{  props.row.email }}</a>
              </q-td>
            </template>

            <template v-slot:body-cell-phone="props">
              <q-td :props="props" class="phone-column">
                <a :href="`tel:${props.row.phone}`">{{ props.row.phone }}</a>
              </q-td>
            </template>

            <template v-slot:body-cell-actions="props">
              <q-td :props="props">
                <q-btn color="primary" flat icon="people" @click="openModal(props.row)" />
              </q-td>
            </template>
          </q-table>
          <div class="q-mt-md flex justify-end">
            <q-pagination
              v-model="pagination.page"
              :max="Math.ceil(rows.length / pagination.rowsPerPage)"
              direction-links
            />
          </div>

          <q-dialog v-model="isModalOpen">
            <q-card style="width: 500px">
              <q-card-section>
                <div class="text-h6">Membership Application Details</div>
              </q-card-section>

              <q-separator />

              <q-card-section>
                <q-table
                  :rows="modalRows"
                  :columns="modalColumns"
                  v-model:pagination="modelPagination"
                  hide-bottom
                  flat
                  bordered
                />
              </q-card-section>

              <q-separator />

              <q-card-actions align="right">
                <q-btn flat label="Close" color="primary" v-close-popup />
              </q-card-actions>
            </q-card>
          </q-dialog>

        </q-card-section>
      </q-card>
  </template>
  <script>
  import { ref, computed, onMounted } from "vue";
  import { api } from "src/boot/axios";
  import { date } from "quasar";
  export default {
    setup() {
      const rows = ref([]);
      const loading = ref(true);
      const search = ref("");
      const pagination = ref({ page: 1, rowsPerPage: 10 });
      const modelPagination =ref({page:1, rowsPerPage:15})
      const tableData = ref([]);
      const isModalOpen = ref(false);
      const selectedRow = ref({});
      // Table column definitions
      const columns = [
        { name: "contact_name", label: "Name", align: "left", field: "contact_name", sortable: true },
        { name: "position", label: "Position", align: "left", field: "position", sortable: true },
        { name: "phone", label: "Phone", align: "left", field: "phone", sortable: true },
        { name: "email", label: "Email", align: "left", field: "email", sortable: true },
        { name: "location_name", label: "Location Name", align: "left", field: "location_name", sortable: true },
        { name: "location_address", label: "Location Address", align: "left", field: "location_address", sortable: true },
        { name: "city", label: "City", align: "left", field: "city", sortable: true },
        { name: "country", label: "Country", align: "left", field: "country", sortable: true },
        { name: "created_at", label: "Date (MM/DD/YYYY)", align: "left", field: "created_at", sortable: true },
        { name: "actions", label: "Actions", align: "center" },
      ];

      const formatDate = (rawDate) => {
        if (!rawDate) return "-";
        return date.formatDate(rawDate, "MM/DD/YYYY");
      };

      // Fetch data from API
      const fetchData = () => {
        api.get('get-membership-application')
        .then((response)=>{
          rows.value = response.data.data;
          // this.rows = response.data.data;
          tableData.value = response.data.data.map(item => ({
            ...item,
            created_at: formatDate(item.created_at)
          }));
        })
        .catch((error)=>{
          console.log(error.message);
          //this.showErrorNotification(error.message);
        })
        loading.value = false;
      };

      // Modal Table Columns
      const modalColumns = [
        { name: "field", label: "Field", align: "left", field: "field" },
        { name: "value", label: "Value", align: "left", field: "value" }
      ];

      // Generate Modal Table Data
      const modalRows = computed(() => {
        if (!selectedRow.value) return [];
        return [
          { field: "Date (MM/DD/YYYY)", value:selectedRow.value.created_at },
          { field: "Name", value: selectedRow.value.contact_name },
          { field: "positon", value: selectedRow.value.position },
          { field: "Email", value: selectedRow.value.email },
          { field: "Phone", value: selectedRow.value.phone },
          { field: "Location Name", value: selectedRow.value.location_name },
          { field: "Location Address", value: selectedRow.value.location_address },
          { field: "City", value: selectedRow.value.city },
          { field: "State", value: selectedRow.value.state },
          { field: "Zip/Postal Code", value: selectedRow.value.zip },
          { field: "Country", value: selectedRow.value.country },
          { field: "Number of Drivers", value: selectedRow.value.number_of_drivers },
          { field: "Number of Trucks", value: selectedRow.value.number_of_trucks }
        ];
      });

      const openModal = (row) => {
        selectedRow.value = row;
        isModalOpen.value = true;
      };

      onMounted(fetchData);

      return { rows,selectedRow, modelPagination, isModalOpen, columns, pagination, search, loading, formatDate, tableData, openModal, modalRows, modalColumns };
    }
  };
  </script>
  <style>
  .q-table__control .q-btn{
    display: none;
  }
  </style>
