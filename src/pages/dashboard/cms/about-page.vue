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
              { label: 'Our Mission', value: 'mission' },
              { label: 'Our Story', value: 'story' },
              { label: 'Others', value: 'others' },
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

                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Intro Text</h5>
                    <q-editor v-model="introText"
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
            <q-tab-panel v-if="tab === 'mission'" name="mission">
              <div class="work-area q-px-lg">
                <h4 class=" q-pt-lg">Our Mission</h4>
                <div class="flex justify-center">
                  <q-img :src="missionImg" class="image-size"/>
                </div>
                <q-form @submit="handleMissionForm">
                  <!-- <div class="q-mt-md">
                    <h5 style="margin: 0%;">Title</h5>
                    <q-input
                    type="text" style="font-size: 16px;" :rules=[validateRequired] outlined v-model="missionTitle"
                    />
                  </div> -->
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Image</h5>
                    <q-file
                      v-model="missionImg"
                      label="Choose an image"
                      accept="image/*"
                      @update:model-value="handleMissionImg"
                      outlined
                    />
                  </div>
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Description</h5>
                    <q-editor

                      v-model="missionText"
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
            <q-tab-panel v-if="tab === 'story'" name="story">
              <div class="work-area q-px-lg">
                <h4 class=" q-pt-lg">Our Story</h4>
                <div class="flex justify-center">
                  <q-img :src="storyImg" class="image-size"/>
                </div>
                <q-form @submit="handleStoryForm">
                  <!-- <div class="q-mt-md">
                    <h5 style="margin: 0%;">Title</h5>
                    <q-input
                    type="text" style="font-size: 16px;" :rules=[validateRequired] outlined v-model="storyTitle"
                    />
                  </div> -->
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Image</h5>
                    <q-file
                      v-model="storyImg"
                      label="Choose an image"
                      accept="image/*"
                      @update:model-value="handleStoryImg"
                      outlined
                    />
                  </div>
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Description</h5>
                    <q-editor

                      v-model="storyText"
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
            <q-tab-panel v-if="tab === 'others'" name="others">
              <div class="work-area q-px-lg">
                <h4 class=" q-pt-lg">Others</h4>
                <q-form @submit="handleDrivenService">
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Title</h5>
                    <q-input
                    type="text" style="font-size: 16px;" :rules=[validateRequired] outlined v-model="othersOneTitle"
                    />
                  </div>
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Description</h5>
                    <q-editor

                      v-model="othersOneText"
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
                <q-form @submit="handlewhyJoin">
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Title</h5>
                    <q-input
                    type="text" style="font-size: 16px;" :rules=[validateRequired] outlined v-model="othersTwoTitle"
                    />
                  </div>
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Description</h5>
                    <q-editor

                      v-model="othersTwoText"
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

                <h4>Update Form Image</h4>
                <q-form>
                  <q-file
                  v-model="FormImg"
                  label="Choose an image"
                  accept="image/*"
                  outlined />
                  <q-btn label="update" class="q-mt-sm" color="primary" type="submit"/>
                </q-form>
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
    const tab = ref('banner');
    const FormImg = ref('');
    const validateRequired =(val)=>{
    return (val && val.trim() !== "") || "This field is required";
    }
    // Banner section
    const bannerImgFile = ref('');
    const bannerImg = ref('');
    const introText = ref('');

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
      formData.append('page_type','about');
      formData.append('section_name','banner_section');
      if (bannerImgFile.value) {
        formData.append('image',bannerImgFile.value);
      }
      formData.append('title','banner');
      formData.append('description',introText.value);
      submitForms(formData);
    }

    // mission section
    const missionImg = ref('');
    const missionImgFile = ref('');
    const missionTitle = ref('Our Mission');
    const missionText = ref('');
    const handleMissionImg = (file)=>{

      if (!file) return
      missionImgFile.value = file;
      const reader = new FileReader()
      reader.onload = () => {
        missionImg.value = reader.result
      }
      reader.readAsDataURL(file)
    }
    const handleMissionForm = ()=>{
      console.log("inside function");

      const formData = new FormData();
      formData.append('page_type','about');
      formData.append('section_name','mission_section');
      if (missionImgFile.value) {
        formData.append('image',missionImgFile.value);
      }
      formData.append('title',missionTitle.value);
      formData.append('description',missionText.value);
      submitForms(formData);
    }

    // story area
    const storyImg = ref('');
    const storyImgFile = ref('');
    const storyTitle = ref('Our Story');
    const storyText = ref('');
    const handleStoryImg = (file)=>{
      if (!file) return
      storyImgFile.value = file;
      const reader = new FileReader()
      reader.onload = () => {
        storyImg.value = reader.result
      }
      reader.readAsDataURL(file)
    }
    const handleStoryForm = () =>{
      const formData = new FormData();
      formData.append('page_type','about');
      formData.append('section_name','story_section');
      if (storyImgFile.value) {
        formData.append('image',storyImgFile.value);
      }
      formData.append('title',storyTitle.value);
      formData.append('description',storyText.value);
      submitForms(formData);
    }
    // others area
    const othersOneTitle = ref("");
    const othersOneText = ref("");
    const othersTwoTitle = ref("");
    const othersTwoText = ref("");

    const handleDrivenService = ()=>{
      const formData = new FormData();
      formData.append('page_type','about');
      formData.append('section_name','driven_section');
      formData.append('title',othersOneTitle.value);
      formData.append('description',othersOneText.value);
      submitForms(formData);
    }

    const handlewhyJoin = () =>{
      const formData = new FormData();
      formData.append('page_type','about');
      formData.append('section_name','whyjoin_section');
      formData.append('title',othersTwoTitle.value);
      formData.append('description',othersTwoText.value);
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
    const getPageDetails = ()=>{
      api.get('get-about-page-details')
      .then((response)=>{
        console.log(response);
        let val = response.data.data;
        bannerImg.value = storage_url(val.banner_section.img_url);
        introText.value = val.banner_section.description;
        missionImg.value = storage_url(val.mission_section.img_url);
        missionTitle.value = val.mission_section.title;
        missionText.value = val.mission_section.description;
        storyImg.value = storage_url(val.story_section.img_url);
        storyTitle.value = val.story_section.title;
        storyText.value = val.story_section.description;
        othersOneTitle.value = val.driven_section.title;
        othersOneText.value = val.driven_section.description;
        othersTwoTitle.value = val.whyjoin_section.title;
        othersTwoText.value = val.whyjoin_section.description;
      })
    }

    onMounted(()=>{
      getPageDetails();
    })
    return {
      tab,
      FormImg,
      missionImg,
      missionImgFile,
      missionTitle,
      missionText,
      handleMissionImg,
      handleMissionForm,
      storyImg,
      storyTitle,
      storyText,
      handleStoryImg,
      handleStoryForm,
      validateRequired,
      othersOneText,
      othersOneTitle,
      handleDrivenService,
      othersTwoText,
      othersTwoTitle,
      handlewhyJoin,
      bannerImg,
      bannerImgFile,
      introText,
      handleBannerImg,
      handleBannerForm,
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
