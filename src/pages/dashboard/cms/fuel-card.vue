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
              { label: 'Section Four', value: 'sectionFour' },
            ]"
            class="custom-tabs"
          />
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-if="tab === 'sectionOne'" name="sectionOne">
              <div class="work-area q-px-lg">
                <h4 class=" q-pt-lg">Section One</h4>
                <q-form @submit="handleSectionOneForm">
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
                <q-form @submit="handleSectionThreeForm">
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

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-if="tab === 'sectionFour'" name="sectionFour">
              <div class="work-area q-px-lg">
                <h4 class=" q-pt-lg">Section Four</h4>
                <q-form @submit="handleSectionThreeForm">
                  <div id="big-table" class="cards-section">
                    <table width="100%">
                      <tr>
                        <td class="" style="width: 5%;">
                        </td>
                        <td class="border-left q-pl-lg" style="width: 20%;">
                          <q-img src="/images/EFS-Direct-Card-Web.png" class="card-image" fit="cover"
                            width="50%"  />
                          <q-card-section>
                            <p class="chart-title text-primary" style="font-weight: 800; margin:10px 0%;">EFS Direct Card</p>
                            <p class="text-subtitle2 text-desc">
                              Ideal for businesses with multiple vehicles looking for customizable controls and detailed reporting.
                            </p>
                          </q-card-section>
                        </td>
                        <td class="border-left text-desc q-pl-lg" style="width: 20%;">
                          <q-img src="/images/card.png" class="card-image" fit="cover"
                            width="50%"  />
                          <q-card-section>
                            <p class="chart-title  text-primary" style="font-weight: 800; margin:10px 0%;">EFS Preferred Card</p>
                            <p class="text-subtitle2 text-desc">
                              Perfect for individual drivers or small fleets seeking straightforward savings, flexibility, and convenience with easy management.
                            </p>
                          </q-card-section>
                        </td>
                      </tr>
                      <tr class="table-row-bg">
                        <td class="text-desc text-primary text-bold q-pl-lg">Best For</td>
                        <td class="border-left text-desc q-pl-lg">Businesses managing multiple vehicles</td>
                        <td class="border-left text-desc q-pl-lg">Individual drivers and small fleets</td>
                      </tr>
                      <tr>
                        <td class="text-desc text-primary text-bold q-pl-lg">Discounts</td>
                        <td class="border-left text-desc q-pl-lg">Aggressive discounts at AMBEST locations</td>
                        <td class="border-left text-desc q-pl-lg">Competitive discounts at AMBEST locations & affiliates</td>
                      </tr>
                      <tr class="table-row-bg">
                        <td class="text-desc text-primary text-bold q-pl-lg">Fuel Controls</td>
                        <td class="border-left text-desc q-pl-lg">Customizable spending limits and controls</td>
                        <td class="border-left text-desc q-pl-lg">Simple, hassle-free purchasing</td>
                      </tr>
                      <tr>
                        <td class="text-desc text-primary text-bold q-pl-lg">Accepted At</td>
                        <td class="border-left text-desc q-pl-lg">Nationwide fuel and maintenance locations</td>
                        <td class="border-left text-desc q-pl-lg">Nationwide fuel and maintenance locations</td>
                      </tr>
                      <tr class="table-row-bg">
                        <td class="text-desc text-primary text-bold q-pl-lg">Reporting</td>
                        <td class="border-left text-desc q-pl-lg">Detailed Reports for tracking expenses</td>
                        <td class="border-left text-desc q-pl-lg">Detailed Reports for tracking expenses</td>
                      </tr>
                    </table>
                  </div>
                  <!-- <q-btn label="update" class="q-mt-sm" color="primary" type="submit"/> -->
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

    const sectionOneText = ref('');

    const sectionTwoImg = ref('');
    const sectionTwoImgFile = ref('');
    const sectionTwoText = ref('');

    const sectionThreeText = ref('');


    const handleSectionOneForm = () =>{
      const formData = new FormData();
      formData.append('page_type','fuelCard');
      formData.append('section_name','top_section');
      formData.append('title',"fuel card");
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
      formData.append('page_type','fuelCard');
      formData.append('section_name','second_section');
      formData.append('title',"fuel card");
      if (sectionTwoImgFile.value) {
        formData.append('image',sectionTwoImgFile.value);
      }
      formData.append('description',sectionTwoText.value);
      submitForms(formData);
    }

    const handleSectionThreeForm = () =>{
      const formData = new FormData();
      formData.append('page_type','fuelCard');
      formData.append('section_name','third_section');
      formData.append('title',"fuel card details");
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
      api.get('get-fuel-card-page-details')
      .then((response)=>{
        console.log(response);
        let val = response.data.data;

        sectionOneText.value = val.top_section.description;
        // storage_url('he')
        sectionTwoImg.value = storage_url(val.second_section.img_url);
        sectionTwoText.value = val.second_section.description;

        sectionThreeText.value = val.third_section.description;
      })
    }

    onMounted(()=>{
      getTravelCenterDetails();
    })
    return {
      q,
      tab,

      sectionOneText,
      handleSectionOneForm,

      sectionTwoImg,
      sectionTwoImgFile,
      sectionTwoText,

      handleSectionTwoImg,
      handleSectionTwoForm,

      sectionThreeText,
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

table{
  border-spacing: 0 !important;
}
td{
  height: 50px !important;
}
.border-left{
  border-left: 2px solid #0056b3;
}
.table-row-bg{
  background-color: #F2F7FA;
}
.q-pa-xl {
    padding: 48px 0px !important;
}
.q-pa-xl[data-v-9cbf88a2] {
    padding: 48px 25px !important;
}
.q-px-xl {
    padding-left: 10px;
    padding-right: 10px;
}
</style>
