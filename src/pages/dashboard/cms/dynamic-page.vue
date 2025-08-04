<template>
  <!-- <p>hello from dynamic pages</p> -->
      <q-card class="q-mt-md">
      <q-card-section style="height: 100vh;">
        <q-btn-toggle
            v-model="tab"
            toggle-color="primary"
            color="grey-2"
            text-color="black"
            no-caps
            spread
            :options="[
              { label: 'All Pages', value: 'allPages' },
              { label: 'Create Page', value: 'createPage' },
            ]"
            class="custom-tabs"
          />
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-if="tab === 'allPages'" name="allPages">
               <q-table
                title="Pages"
                :rows="rows"
                :columns="columns"
                row-key="id"
                flat
                bordered
                :pagination="{ rowsPerPage: 10 }"
              >
              <!-- Slot for URL column -->
                <template v-slot:body-cell-url="props">
                  <q-td :props="props">
                    <span>{{ props.row.route }}</span>
                    <q-btn
                      dense
                      flat
                      round
                      icon="open_in_new"
                      class="q-ml-sm"
                      @click="openInNewTab(props.row.route)"
                    />
                  </q-td>
                </template>
                <template v-slot:body-cell-action="props">
                  <q-td align="center">
                    <q-btn dense flat icon="edit" color="primary" @click="editRow(props.row)" />
                    <q-btn dense flat icon="delete" color="negative" @click="deleteRow(props.row)" />
                  </q-td>
                </template>
              </q-table>
            </q-tab-panel>
          </q-tab-panels>
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-if="tab === 'createPage'" name="createPage">
              <q-form @submit="onSubmit" @reset="onReset" class="q-mt-xl">
                <!-- Title Field -->
                  <div class="form-section">
                        <q-input
                            v-model="form.title"
                            label="Title *"
                            hint="Enter the title of your content"
                            lazy-rules
                            :rules="[val => val && val.length > 0 || 'Title is required']"
                            outlined
                            dense
                            style="font-size: 16px;"
                            class="q-mb-md"
                        >
                            <template v-slot:prepend>
                                <q-icon name="title" />
                            </template>
                        </q-input>
                  </div>
                <!-- Route Field -->
                  <div class="form-section">
                      <q-input
                          v-model="form.route"
                          label="Route *"
                          hint="Enter the URL route (e.g., blog/my-post)"
                          lazy-rules
                          style="font-size: 16px;"
                          :rules="[
                              val => val && val.length > 0 || 'Route is required',
                              val => !val.startsWith('/')|| 'Route should not start with /',
                              val => !/\s/.test(val) || 'Route cannot contain spaces'
                          ]"
                          outlined
                          dense
                          class="q-mb-md"
                      >
                          <template v-slot:prepend>
                              <q-icon name="link" />
                          </template>
                      </q-input>
                  </div>
                <!-- Content WYSIWYG Editor -->
                  <div class="form-section">
                      <h5 style="margin: 0%;" class="text-subtitle2 q-mb-sm block">Content *</h5>
                      <q-editor
                          style="font-size: 16px;"
                          v-model="form.content"
                          :dense="$q.screen.lt.md"
                                                :toolbar="[
                          [
                            {
                              label: $q.lang.editor.align,
                              icon: $q.iconSet.editor.align,
                              fixedLabel: true,
                              list: 'only-icons',
                              options: ['left', 'center', 'right', 'justify']
                            },
                            {
                              label: $q.lang.editor.align,
                              icon: $q.iconSet.editor.align,
                              fixedLabel: true,
                              options: ['left', 'center', 'right', 'justify']
                            }
                          ],
                          ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
                          ['token', 'hr', 'link', 'custom_btn'],
                          ['fullscreen'],
                          [
                            {
                              label: $q.lang.editor.formatting,
                              icon: $q.iconSet.editor.formatting,
                              list: 'no-icons',
                              options: [
                                'p',
                                'h1',
                                'h2',
                                'h3',
                                'h4',
                                'h5',
                                'h6',
                                'code'
                              ]
                            },
                            {
                              label: $q.lang.editor.fontSize,
                              icon: $q.iconSet.editor.fontSize,
                              fixedLabel: true,
                              fixedIcon: true,
                              list: 'no-icons',
                              options: [
                                'size-1',
                                'size-2',
                                'size-3',
                                'size-4',
                                'size-5',
                                'size-6',
                                'size-7'
                              ]
                            },
                            {
                              label: $q.lang.editor.defaultFont,
                              icon: $q.iconSet.editor.font,
                              fixedIcon: true,
                              list: 'no-icons',
                              options: [
                                'default_font',
                                'arial',
                                'arial_black',
                                'comic_sans',
                                'courier_new',
                                'impact',
                                'lucida_grande',
                                'times_new_roman',
                                'verdana'
                              ]
                            },
                            'removeFormat'
                          ],
                          ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

                          ['undo', 'redo'],
                          ['viewsource']
                        ]"
                        :fonts="{
                          arial: 'Arial',
                          arial_black: 'Arial Black',
                          comic_sans: 'Comic Sans MS',
                          courier_new: 'Courier New',
                          impact: 'Impact',
                          lucida_grande: 'Lucida Grande',
                          times_new_roman: 'Times New Roman',
                          verdana: 'Verdana'
                        }"
                          class="editor-container"
                          min-height="300px"
                      />
                      <div class="text-caption text-grey-6 q-mt-sm">
                          Use the toolbar above to format your content
                      </div>
                  </div>
                  <!-- Action Buttons -->
                  <div class="row q-gutter-sm q-mt-lg">
                      <q-btn
                          label="Submit"
                          type="submit"
                          color="primary"
                          unelevated
                          :loading="loading"
                          :disable="loading"
                          class="col-auto"
                      />
                      <q-btn
                          label="Reset"
                          type="reset"
                          color="primary"
                          flat
                          class="col-auto"
                      />
                      <q-btn
                          label="Preview"
                          color="secondary"
                          outline
                          @click="showPreview = true"
                          class="col-auto"
                      />
                  </div>
                </q-form>
                <!-- Preview Dialog -->
                <q-dialog v-model="showPreview" persistent>
                    <q-card style="max-width: 800px; width: 100%;">
                        <q-card-section>
                            <div class="text-h6">Content Preview</div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                            <div class="q-mb-md">
                                <strong>Title:</strong> {{ form.title || 'No title' }}
                            </div>
                            <div class="q-mb-md">
                                <strong>Route:</strong> {{ form.route || 'No route' }}
                            </div>
                            <div class="q-mb-md">
                                <strong>Content:</strong>
                                <div v-html="form.content || 'No content'" class="q-mt-sm q-pa-md" style="border: 1px solid #ddd; border-radius: 4px; min-height: 100px;"></div>
                            </div>
                        </q-card-section>

                        <q-card-actions align="right">
                            <q-btn flat label="Close" color="primary" v-close-popup />
                        </q-card-actions>
                    </q-card>
                </q-dialog>
            </q-tab-panel>
          </q-tab-panels>
          <!-- update form  -->
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-if="tab === 'editPage'" name="editPage">
              <q-form @submit="onUpdateSubmit" class="q-mt-xl">
                <!-- Title Field -->
                  <div class="form-section">
                        <q-input
                            v-model="updateForm.title"
                            label="Title *"
                            hint="Enter the title of your content"
                            lazy-rules
                            :rules="[val => val && val.length > 0 || 'Title is required']"
                            outlined
                            dense
                            style="font-size: 16px;"
                            class="q-mb-md"
                        >
                            <template v-slot:prepend>
                                <q-icon name="title" />
                            </template>
                        </q-input>
                  </div>
                <!-- Route Field -->
                  <div class="form-section">
                      <q-input
                          v-model="updateForm.route"
                          label="Route *"
                          hint="Enter the URL route (e.g., blog/my-post)"
                          lazy-rules
                          style="font-size: 16px;"
                          :rules="[
                              val => val && val.length > 0 || 'Route is required',
                              val => !val.startsWith('/')|| 'Route should not start with /',
                              val => !/\s/.test(val) || 'Route cannot contain spaces'
                          ]"
                          outlined
                          dense
                          class="q-mb-md"
                      >
                          <template v-slot:prepend>
                              <q-icon name="link" />
                          </template>
                      </q-input>
                  </div>
                <!-- Content WYSIWYG Editor -->
                  <div class="form-section">
                      <h5 style="margin: 0%;" class="text-subtitle2 q-mb-sm block">Content *</h5>
                      <q-editor
                          style="font-size: 16px;"
                          v-model="updateForm.content"
                          :dense="$q.screen.lt.md"
                                                :toolbar="[
                          [
                            {
                              label: $q.lang.editor.align,
                              icon: $q.iconSet.editor.align,
                              fixedLabel: true,
                              list: 'only-icons',
                              options: ['left', 'center', 'right', 'justify']
                            },
                            {
                              label: $q.lang.editor.align,
                              icon: $q.iconSet.editor.align,
                              fixedLabel: true,
                              options: ['left', 'center', 'right', 'justify']
                            }
                          ],
                          ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
                          ['token', 'hr', 'link', 'custom_btn'],
                          ['fullscreen'],
                          [
                            {
                              label: $q.lang.editor.formatting,
                              icon: $q.iconSet.editor.formatting,
                              list: 'no-icons',
                              options: [
                                'p',
                                'h1',
                                'h2',
                                'h3',
                                'h4',
                                'h5',
                                'h6',
                                'code'
                              ]
                            },
                            {
                              label: $q.lang.editor.fontSize,
                              icon: $q.iconSet.editor.fontSize,
                              fixedLabel: true,
                              fixedIcon: true,
                              list: 'no-icons',
                              options: [
                                'size-1',
                                'size-2',
                                'size-3',
                                'size-4',
                                'size-5',
                                'size-6',
                                'size-7'
                              ]
                            },
                            {
                              label: $q.lang.editor.defaultFont,
                              icon: $q.iconSet.editor.font,
                              fixedIcon: true,
                              list: 'no-icons',
                              options: [
                                'default_font',
                                'arial',
                                'arial_black',
                                'comic_sans',
                                'courier_new',
                                'impact',
                                'lucida_grande',
                                'times_new_roman',
                                'verdana'
                              ]
                            },
                            'removeFormat'
                          ],
                          ['quote', 'unordered', 'ordered', 'outdent', 'indent'],

                          ['undo', 'redo'],
                          ['viewsource']
                        ]"
                        :fonts="{
                          arial: 'Arial',
                          arial_black: 'Arial Black',
                          comic_sans: 'Comic Sans MS',
                          courier_new: 'Courier New',
                          impact: 'Impact',
                          lucida_grande: 'Lucida Grande',
                          times_new_roman: 'Times New Roman',
                          verdana: 'Verdana'
                        }"
                          class="editor-container"
                          min-height="300px"
                      />
                      <div class="text-caption text-grey-6 q-mt-sm">
                          Use the toolbar above to format your content
                      </div>
                  </div>
                  <!-- Action Buttons -->
                  <div class="row q-gutter-sm q-mt-lg">
                      <q-btn
                          label="Submit"
                          type="submit"
                          color="primary"
                          unelevated
                          :loading="updateLoading"
                          :disable="updateLoading"
                          class="col-auto"
                      />
                      <q-btn
                          label="Preview"
                          color="secondary"
                          outline
                          @click="updateShowPreview = true"
                          class="col-auto"
                      />
                  </div>
                </q-form>
                <!-- Preview Dialog -->
                <q-dialog v-model="updateShowPreview" persistent>
                    <q-card style="max-width: 800px; width: 100%;">
                        <q-card-section>
                            <div class="text-h6">Content Preview</div>
                        </q-card-section>

                        <q-card-section class="q-pt-none">
                            <div class="q-mb-md">
                                <strong>Title:</strong> {{ updateForm.title || 'No title' }}
                            </div>
                            <div class="q-mb-md">
                                <strong>Route:</strong> {{ updateForm.route || 'No route' }}
                            </div>
                            <div class="q-mb-md">
                                <strong>Content:</strong>
                                <div v-html="updateForm.content || 'No content'" class="q-mt-sm q-pa-md" style="border: 1px solid #ddd; border-radius: 4px; min-height: 100px;"></div>
                            </div>
                        </q-card-section>

                        <q-card-actions align="right">
                            <q-btn flat label="Close" color="primary" v-close-popup />
                        </q-card-actions>
                    </q-card>
                </q-dialog>
            </q-tab-panel>
          </q-tab-panels>
      </q-card-section>
      </q-card>
</template>
<script>
  import { ref, onMounted } from 'vue';
  import { useQuasar } from 'quasar';
  import { api } from 'src/boot/axios';
  export default{
    setup(){
      const q = useQuasar();
      const loading = ref(false);
      const tab = ref('allPages');
      // Table columns
      const columns = [
        { name: 'title', label: 'Title', align: 'left', field: 'title', sortable: true },
        { name: 'url', label: 'URL', align: 'left', field: 'route', sortable: true },
        { name: 'action', label: 'Action', align: 'center' }
      ];
      // Example table data
      const rows = ref([]);

      const form = ref({
        title: '',
        route: '',
        content: ''
      });
      const showPreview = ref(false);
      const onReset =()=>{
         form.value = { title: '', route: '', content: '' };
      }
      // create form submit
      const onSubmit =()=>{
        const { title, route, content } = form.value;
        if (!title || !route || !content) {
            showErrorNotification('Please fill in all required fields.');
            return;
        }
        // console.log('Form submitted:', form.value);
        const formData = new FormData();
        formData.append('title',title);
        formData.append('route',route);
        formData.append('content',content);
        submitForms(formData);
      }
      //get content
      const getContent = () =>{
        api.get('dynamic-content')
        .then((response)=>{
        let val = response.data.data;
        rows.value = val;
      })
      }

      // update form code here
      const updateLoading = ref(false);
      const updateShowPreview = ref(false);
      const updateForm = ref({
        id : '',
        title: '',
        route: '',
        content: ''
      });
      const editRow = (row) => {
        updateForm.value = { ...row }; // shallow copy row
        tab.value = 'editPage';
      };
      const deleteRow = (row) => {
        console.log(row);

        q.dialog({
          title: 'Confirm Delete',
          message: `Are you sure you want to delete "${row.title}"?`,
          cancel: true,
          persistent: true
        }).onOk(()=>{
          api.delete('dynamic-content/delete', {
            data: { id: row.id }
          })
          .then((response)=>{
            console.log(response.data.data);
            rows.value = response.data.data;
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



      const onUpdateSubmit = () =>{
        const {id, title, route, content } = updateForm.value;
        const formData = new FormData();
        formData.append('id',id);
        formData.append('title',title);
        formData.append('route',route);
        formData.append('content',content);
        submitForms(formData);
      }
      onMounted(()=>{
        getContent();
      });
      // form submit
      const submitForms = (formData)=>{
        api.post('update/dynamic-content',formData,{
          headers: {
          'Content-Type': 'multipart/form-data'
          }
        })
        .then((response)=>{
          console.log(response.data.data);
          rows.value = response.data.data;
          form.value = { title: '', route: '', content: '' };
          tab.value = 'allPages';
          showSuccessNotification(response.data.message);
        })
        .catch((error)=>{
          console.log(error);
          console.log(error.message);
          console.log(error?.response?.data.message);

          showErrorNotification(error?.response?.data.message || error.response.message || error.message);

        })
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
      const openInNewTab = (url) => {
          const fullUrl = url.startsWith('http') ? url : window.location.origin +'/page/' + url;
          window.open(fullUrl, '_blank');
        };
        return{
        q,
        tab,

        columns,
        rows,

        form,
        showPreview,
        onReset,
        onSubmit,
        loading,

        editRow,
        deleteRow,
        updateForm,
        updateLoading,
        updateShowPreview,
        onUpdateSubmit,
        openInNewTab,
      }
    }
  }
</script>
