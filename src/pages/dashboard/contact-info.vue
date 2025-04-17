<template>
  <!-- <h4>Welcome to Your Dashboard</h4> -->
  <q-card class="q-mt-md">
      <q-card-section style="height:100vh;">
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
        :loading="loading"
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

        <!-- Make Message Column Larger -->
        <template v-slot:body-cell-message="props">
          <q-td :props="props" class="message-column">
            {{ props.row.message }}
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

      </q-table>

      <div class="q-mt-md flex justify-end">
        <q-pagination
          v-model="pagination.page"
          :max="Math.ceil(rows.length / pagination.rowsPerPage)"
          direction-links
        />
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import { ref, onMounted } from "vue";
import { api } from "src/boot/axios";
import { date } from "quasar";
export default {
  setup() {
    const rows = ref([]);
    const loading = ref(true);
    const search = ref("");
    const pagination = ref({ page: 1, rowsPerPage: 10 });
    const tableData = ref([]);

    // Table column definitions
    const columns = [
        { name: "fname", label: "First Name", align: "left", field: "first_name", sortable: true },
        { name: "lname", label: "Last Name", align: "left", field: "last_name", sortable: true },
        { name: "email", label: "Email", align: "left", field: "email", sortable: true },
        { name: "phone", label: "Phone", align: "left", field: "phone", sortable: true },
        { name: "service", label: "Service Name", align: "left", field: "service_name", sortable: true },
        { name: "message", label: "Message", align: "left", field: "message" },
        { name: "date", label: "Date", align: "left", field: "created_at", sortable: true }
    ];

    const formatDate = (rawDate) => {
      if (!rawDate) return "-";
      return date.formatDate(rawDate, "MM/DD/YYYY");
    };

    // Fetch data from API
    const fetchData = () => {
      api.get('get-submited-contact-info')
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

    onMounted(fetchData);

    return { rows, columns, pagination, search, loading, formatDate,tableData };
  }
};
</script>
<style>
.q-table__control .q-btn{
  display: none;
}
</style>
