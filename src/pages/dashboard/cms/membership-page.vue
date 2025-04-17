<template>
  <q-card class="q-mt-md">
    <q-card-section>
      <q-btn-toggle
            v-model="tab"
            toggle-color="primary"
            color="grey-2"
            text-color="black"
            no-caps
            spread
            :options="[
              { label: 'Section One', value: 'sectionOne' },
              { label: 'Section Two', value: 'sectionTwo' },
              { label: 'Section Three', value: 'sectionThree' },
            ]"
            class="custom-tabs"
          />
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-if="tab === 'sectionOne'" name="sectionOne">
              <div class="work-area q-px-lg">
                <h4 class=" q-pt-lg">Section One</h4>
                <div class="flex justify-center">
                  <q-img :src="sectionOneImg" class="image-size"/>
                </div>
                <q-form @submit="handleSectionOneForm">
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Image</h5>
                    <q-file
                      v-model="sectionOneImgFile"
                      label="Choose an image"
                      accept="image/*"
                      @update:model-value="handleSectionOneImg"
                      outlined
                    />
                  </div>
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Description</h5>
                    <q-editor

                      v-model="sectionOneText"
                      :dense="$q.screen.lt.md"
                      :toolbar="[
                        [
                          {
                            label: $q.lang.editor.align,
                            icon: $q.iconSet.editor.align,
                            fixedLabel: true,
                            options: ['left', 'center', 'right', 'justify']
                          }
                        ],
                        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
                        ['token', 'hr', 'link', 'custom_btn'],
                        ['print', 'fullscreen'],
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
                      style="font-size: 16px;"
                    />
                  </div>
                  <q-btn label="update" class="q-mt-sm" color="primary" type="submit"/>
                </q-form>
              </div>
            </q-tab-panel>
          </q-tab-panels>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-if="tab === 'sectionTwo'" name="sectionTwo">
              <div class="work-area q-px-lg">
                <h4 class=" q-pt-lg">Section Two</h4>
                <div class="flex justify-center">
                  <q-img :src="sectionTwoImg" class="image-size"/>
                </div>
                <q-form @submit="handleSectionTwoForm">
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Image</h5>
                    <q-file
                      v-model="sectionTwoImgFile"
                      label="Choose an image"
                      accept="image/*"
                      @update:model-value="handleSectionTwoImg"
                      outlined
                    />
                  </div>
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Description</h5>
                    <q-editor

                      v-model="sectionTwoText"
                      :dense="$q.screen.lt.md"
                      :toolbar="[
                        [
                          {
                            label: $q.lang.editor.align,
                            icon: $q.iconSet.editor.align,
                            fixedLabel: true,
                            options: ['left', 'center', 'right', 'justify']
                          }
                        ],
                        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
                        ['token', 'hr', 'link', 'custom_btn'],
                        ['print', 'fullscreen'],
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
                      style="font-size: 16px;"
                    />
                  </div>
                  <q-btn label="update" class="q-mt-sm" color="primary" type="submit"/>
                </q-form>
              </div>
            </q-tab-panel>
          </q-tab-panels>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-if="tab === 'sectionThree'" name="sectionThree">
              <div class="work-area q-px-lg">
                <h4 class=" q-pt-lg">Section three</h4>
                <div class="flex justify-center">
                  <q-img :src="sectionThreeImg" class="image-size"/>
                </div>
                <q-form @submit="handleSectionThreeForm">
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Image</h5>
                    <q-file
                      v-model="sectionThreeImgFile"
                      label="Choose an image"
                      accept="image/*"
                      @update:model-value="handleSectionThreeImg"
                      outlined
                    />
                  </div>
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Description</h5>
                    <q-editor

                      v-model="sectionThreeText"
                      :dense="$q.screen.lt.md"
                      :toolbar="[
                        [
                          {
                            label: $q.lang.editor.align,
                            icon: $q.iconSet.editor.align,
                            fixedLabel: true,
                            options: ['left', 'center', 'right', 'justify']
                          }
                        ],
                        ['bold', 'italic', 'strike', 'underline', 'subscript', 'superscript'],
                        ['token', 'hr', 'link', 'custom_btn'],
                        ['print', 'fullscreen'],
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
                      style="font-size: 16px;"
                    />
                  </div>
                  <q-btn label="update" class="q-mt-sm" color="primary" type="submit"/>
                </q-form>
              </div>
            </q-tab-panel>
          </q-tab-panels>
    </q-card-section>
  </q-card>
</template>
<script>
import { useQuasar } from 'quasar';
import { api, storage_url } from 'src/boot/axios';
import { onMounted, ref } from 'vue';
export default{
  setup(){
    const q = useQuasar();
    const tab = ref('sectionOne');
    const sectionOneImg = ref('');
    const sectionOneImgFile = ref('');
    const sectionOneText = ref('');

    const sectionTwoImg = ref('');
    const sectionTwoImgFile = ref('');
    const sectionTwoText = ref('');

    const sectionThreeImg = ref('');
    const sectionThreeImgFile = ref('');
    const sectionThreeText = ref('');

    const handleSectionOneImg =(file)=>{
      if (!file) return
      sectionOneImgFile.value = file;
      const reader = new FileReader()
      reader.onload = () => {
        sectionOneImg.value = reader.result
      }
      reader.readAsDataURL(file)
    }

    const handleSectionOneForm = () =>{
      const formData = new FormData();
      formData.append('page_type','membership');
      formData.append('section_name','top_section');
      formData.append('title',"memberhsip section");
      if (sectionOneImgFile.value) {
        formData.append('image',sectionOneImgFile.value);
      }
      formData.append('description',sectionOneText.value);
      submitForms(formData);
    }

    const handleSectionTwoImg =(file)=>{
      if (!file) return
      sectionTwoImgFile.value = file;
      const reader = new FileReader()
      reader.onload = () => {
        sectionTwoImg.value = reader.result
      }
      reader.readAsDataURL(file)
    }
    const handleSectionTwoForm = () =>{
      const formData = new FormData();
      formData.append('page_type','membership');
      formData.append('section_name','second_section');
      formData.append('title',"fuel card details");
      if (sectionTwoImgFile.value) {
        formData.append('image',sectionTwoImgFile.value);
      }
      formData.append('description',sectionTwoText.value);
      submitForms(formData);
    }

    const handleSectionThreeImg =(file)=>{
      if (!file) return
      sectionThreeImgFile.value = file;
      const reader = new FileReader()
      reader.onload = () => {
        sectionThreeImg.value = reader.result
      }
      reader.readAsDataURL(file)
    }
    const handleSectionThreeForm = () =>{
      const formData = new FormData();
      formData.append('page_type','membership');
      formData.append('section_name','third_section');
      formData.append('title',"fuel card details");
      if (sectionThreeImgFile.value) {
        formData.append('image',sectionThreeImgFile.value);
      }
      formData.append('description',sectionThreeText.value);
      submitForms(formData);
    }


    const submitForms = (formData)=>{
      api.post('common-content-menagement-form',formData,{
        headers: {
        'Content-Type': 'multipart/form-data'
        }
      })
      .then((response)=>{
        console.log(response);
        showSuccessNotification(response.data.message);
      })
      .catch((error)=>{
        console.log(error);

        showErrorNotification(error.response.message || error.message);

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
    const getTravelCenterDetails =()=>{
      api.get('get-membership-page-details')
      .then((response)=>{
        console.log(response);
        let val = response.data.data;
        sectionOneImg.value = storage_url(val.top_section.img_url);
        sectionOneText.value = val.top_section.description;

        sectionTwoImg.value = storage_url(val.second_section.img_url);
        sectionTwoText.value = val.second_section.description;

        // sectionThreeImg.value = storage_url(val.third_section.img_url);
        // sectionThreeText.value = val.third_section.description;
      })
    }

    onMounted(()=>{
      getTravelCenterDetails();
    })
    return {
      q,
      tab,

      sectionOneImg,
      sectionOneImgFile,
      sectionOneText,
      handleSectionOneImg,
      handleSectionOneForm,

      sectionTwoImg,
      sectionTwoImgFile,
      sectionTwoText,
      handleSectionTwoImg,
      handleSectionTwoForm,

      sectionThreeImg,
      sectionThreeImgFile,
      sectionThreeText,
      handleSectionThreeImg,
      handleSectionThreeForm,
    }
  }
}
</script>
<style scoped>
.work-area{
  min-height: 100vh;
}
.image-size{
  width: 400px;
}
@media(max-width:1024px){
  .image-size{
    width: 300px;
  }
}
</style>

