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
            { label: 'Banner', value: 'banner' },
            { label: 'Faqs', value: 'sectionOne' },
          ]"
          class="custom-tabs"
        />

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel v-if="tab === 'banner'" name="banner">
            <div class="work-area q-px-lg">
              <h4 class=" q-pt-lg">Banner</h4>
              <div class="flex justify-center">
                <q-img :src="bannerImg" style="width: 600px;"/>
              </div>
              <q-form @submit="handleBannerForm">
                <div class="q-mt-md">
                  <h5 style="margin: 0%;">Banner Image</h5>
                  <q-file
                    v-model="bannerImgFile"
                    label="Choose an image"
                    accept="image/*"
                    @update:model-value="handleBannerImg"
                    outlined
                  />
                </div>
                <q-btn label="update" class="q-mt-sm" color="primary" type="submit"/>
              </q-form>
            </div>
          </q-tab-panel>
        </q-tab-panels>
        <q-tab-panels v-model="tab" animated>
          <q-tab-panel v-if="tab === 'sectionOne'" name="sectionOne">
            <div class="work-area q-px-lg">
              <div class="row justify-between items-center">
                <h4 class=" q-pt-lg">Faqs</h4>
                <q-btn color="primary" class="" @click="openModal()"  label="Add Faq"/>
              </div>
              <q-dialog v-model="isModalOpen" full-width>
                <q-card>
                  <q-card-section>
                    <div class="text-h6">Frequently Asked Questions</div>
                  </q-card-section>

                  <q-separator />

                  <q-card-section>
                    <q-form @submit="handleFaqForm">
                      <input type="hidden" v-model="FaqId" />
                      <div class="q-mt-md">
                        <h5 style="margin: 0%;">Question</h5>
                        <q-editor
                        style="font-size: 16px;" min-height="3rem" :rules=[validateRequired] outlined v-model="question"
                        :toolbar="[
                            ['bold', 'italic', 'underline'],
                            [{
                              label: $q.lang.editor.formatting,
                              icon: $q.iconSet.editor.formatting,
                              list: 'no-icons',
                              options: ['p', 'h3', 'h4', 'h5', 'h6', 'code']
                            }]
                          ]"
                        />
                        <!-- <q-editor
                        style="font-size: 16px;" min-height="3rem" :rules=[validateRequired] outlined v-model="question"
                        /> -->
                      </div>
                      <div class="q-mt-md">
                        <h5 style="margin: 0%;">Answer</h5>
                        <q-editor
                          :rules=[validateRequired]
                          v-model="answer"
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
                      <q-btn :label="formBtn" class="q-mt-sm" color="primary" type="submit"/>
                    </q-form>
                  </q-card-section>

                  <q-separator />

                  <q-card-actions align="right">
                    <q-btn flat label="Close" color="primary" v-close-popup />
                  </q-card-actions>
                </q-card>
              </q-dialog>
              <div class="faq-container">
                  <h5 class=""><span class="" style="">Answers to Your Frequently Asked Questions...</span></h5>
                  <q-list class="faq-list">
                    <q-expansion-item
                      v-for="(item, index) in faqs"
                      :key="index"
                      expand-separator
                      dense
                      header-class="faq-item"
                    >
                      <template v-slot:header>
                        <q-item-section side>
                          <q-btn color="primary"  @click="handleUpdateBtn(item)" label="Edit"  />
                        </q-item-section>
                        <q-item-section class="text-desc" style="margin-bottom: .5rem; font-size: 22px; width: 500;">
                          <!-- <strong>{{ item.question }}</strong> -->
                           <span v-html="item.question"></span>
                      </q-item-section>
                      </template>
                      <q-card>
                        <q-card-section>
                          <p class="text-desc" style="font-size: 20px; width: 500;">
                            <span v-html="item.answer"></span>
                            <!-- {{ item.answer }} -->
                          </p>
                        </q-card-section>
                      </q-card>
                    </q-expansion-item>
                  </q-list>
              </div>
            </div>

          </q-tab-panel>
        </q-tab-panels>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel v-if="tab === 'story'" name="story">
            <div class="work-area q-px-lg">
            </div>
          </q-tab-panel>
        </q-tab-panels>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel v-if="tab === 'others'" name="others">
            <div class="work-area q-px-lg">
              <h4 class=" q-pt-lg">Others</h4>
            </div>
          </q-tab-panel>
        </q-tab-panels>
    </q-card-section>
  </q-card>
</template>
<script>
import { api, storage_url } from 'src/boot/axios';
import { onMounted, ref } from 'vue';
import { useQuasar } from 'quasar';
export default{
setup(){
  const q = useQuasar();
  const FaqId = ref();
  const question = ref("");
  const answer = ref("");
  const tab = ref('sectionOne');
  const isModalOpen = ref(false);
  const formBtn = ref('Create');
  const faqs = ref([]);


  const openModal = () => {
    formBtn.value = 'Create';
    FaqId.value = '';
    question.value = "";
    answer.value = "";
    isModalOpen.value = true;
  };

  const handleUpdateBtn = (item)=>{
    console.log(item);
    formBtn.value = 'Update';
    FaqId.value = item.id;
    question.value = item.question;
    answer.value = item.answer;
    isModalOpen.value = true;
  }
  const validateRequired =(val)=>{
  return (val && val.trim() !== "") || "This field is required";
  }


  const handleFaqForm = ()=>{
    const formData = new FormData();
    formData.append('id',FaqId.value);
    formData.append('question',question.value);
    formData.append('answer',answer.value);
    submitForms(formData);
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

    // Banner section
    const bannerImgFile = ref('');
    const bannerImg = ref('');

    const handleBannerImg =(file)=>{
      if (!file) return
      bannerImgFile.value = file;
      const reader = new FileReader()
      reader.onload = () => {
        bannerImg.value = reader.result
      }
      reader.readAsDataURL(file)
    }

    const handleBannerForm = ()=>{
      const formData = new FormData();
      formData.append('page_type','contact');
      formData.append('section_name','banner_section');
      if (bannerImgFile.value) {
        formData.append('image',bannerImgFile.value);
      }
      formData.append('title','banner');
      formData.append('description','contacts banner');
      submitBannerForms(formData);
    }
    const submitBannerForms = (formData)=>{
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

  const submitForms = (formData)=>{
    api.post('submit-faq-form',formData)
    .then((response)=>{
      console.log(response);
      showSuccessNotification(response.data.message);
    })
    .catch((error)=>{
      console.log(error);

      showErrorNotification(error.response.message || error.message);

    })
    isModalOpen.value = false;
    getPageDetails();
  }
  const getPageDetails = ()=>{
    console.log("geting details");

    api.get('get-faqs-details')
    .then((response)=>{
      console.log(response);
      let val = response.data.data;
      faqs.value = val.faqs;

      if(val.banner_section){
          bannerImg.value = storage_url(val.banner_section.img_url);
      }
    })
  }

  onMounted(()=>{
    getPageDetails();
  })
  return {
    q,
    tab,
    FaqId,
    question,
    answer,
    validateRequired,
    handleFaqForm,
    faqs,
    isModalOpen,
    openModal,
    handleUpdateBtn,
    formBtn,

    bannerImg,
    bannerImgFile,
    handleBannerForm,
    handleBannerImg,
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
