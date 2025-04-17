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
              { label: 'Hero section', value: 'heroSection' },
              { label: 'Icons Section', value: 'iconsSection' },
              { label: 'About Section', value: 'aboutSection' },
              { label: 'News Section', value: 'newsSection' },
            ]"
            class="custom-tabs"
          />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-if="tab === 'heroSection'" name="heroSection">
              <div class="work-area q-px-lg">
                <h4 class=" q-pt-lg">Section One</h4>
                <div class="flex justify-center">
                  <!-- <q-img :src="aboutImageFile" class="image-size"/> -->
                       <!-- Optional Preview -->
                    <video
                      v-if="videoPreview"
                      autoplay loop muted playsinline style="height: auto; width: 500px;"
                    >
                      <source :src="videoPreview" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                </div>
                <q-form @submit="handleAboutForm">
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Upload Video</h5>
                    <q-input
                      filled
                      label="Upload Video"
                      type="file"
                      accept="video/*"
                      @change="handleVideoChange"
                      standout
                    />
                    <!-- <input
                        type="file"
                        accept="video/*"
                        @change="handleVideoUpload"
                        class="q-mb-md"
                      /> -->
                    <!-- <q-file
                      outlined
                      v-model="aboutImageFile"
                      label="Upload Video"
                      accept="video/*"
                       @change="handleVideoUpload"
                      class="q-mb-md"
                      /> -->
                  </div>
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Video Text</h5>
                    <q-editor
                      v-model="videoText"
                      :dense="$q.screen.lt.md"
                      style="font-size: 16px;"
                    />
                  </div>
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Label Text</h5>
                    <q-editor
                      v-model="labelText"
                      :dense="$q.screen.lt.md"
                      style="font-size: 16px;"
                    />
                  </div>
                  <q-btn label="update" class="q-mt-sm" color="primary" type="submit"/>
                </q-form>
                <!-- <div class="" style="height: 40%;">
                  <h4 class=" q-pt-lg">video preview</h4>
                  <div class="q-px-lg flex items-center justify-evenly">
                    <div class="video-preview">
                      <video autoplay loop muted playsinline style="height: auto; width: 500px;">
                        <source src="/videos/new-intro.mp4" type="video/mp4">
                      </video>
                    </div>
                    <div class="form">
                      <h5 style="margin: 0%;">Change Video</h5>
                      <q-form>
                        <q-input outlined type="file"  label=""/>
                        <q-btn label="update" class="q-mt-sm" color="primary" type="submit"/>
                      </q-form>
                    </div>
                  </div>
                </div>
                <div class="" style="height: 30%;">
                  <h4 class=" q-pt-lg">Video Text</h4>
                  <h5 style="margin: 0%;">Change Text</h5>
                      <q-form>
                        <q-input type="text" style="font-size: 16px;" outlined v-model="videoText" />
                        <q-btn label="update" class="q-mt-sm" color="primary" type="submit"/>
                      </q-form>
                </div>
                <div class="" style="height: 30%;">
                  <h4 class="q-pt-lg">label Text</h4>
                  <h5 style="margin: 0%;">Change Text</h5>
                      <q-form>
                        <q-input type="text" style="font-size: 16px;" outlined v-model="labelText" />
                        <q-btn label="update" class="q-mt-sm" color="primary" type="submit"/>
                      </q-form>
                </div> -->
              </div>
            </q-tab-panel>
          </q-tab-panels>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-if="tab === 'iconsSection'" name="iconsSection">
              <div class="work-area q-px-lg">
                 <h4 class=" q-pt-lg">Icons Text Section</h4>
                <q-form @submit="handleIconsForm">
                  <!-- <div class="q-mt-md">
                    <h5 style="margin: 0%;">Title</h5>
                    <q-input type="text" style="font-size: 16px;" :rules=[validateRequired] outlined v-model="iconsTitle" />
                  </div>
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Sub Title</h5>
                    <q-input type="text" style="font-size: 16px;" :rules=[validateRequired] outlined v-model="iconsSubTitle" />
                  </div>
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Description</h5>
                    <q-input type="textarea" style="font-size: 16px;" :rules=[validateRequired] outlined v-model="iconsDesc" />
                  </div> -->
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Description</h5>
                    <q-editor

                      v-model="iconsDesc"
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
            <q-tab-panel v-if="tab === 'aboutSection'" name="aboutSection">
              <div class="work-area q-px-lg">
                <!-- <h4 class=" q-pt-lg">About section</h4>
                <q-form @submit="handleAboutForm" class="row col-12">
                  <div v-if="aboutImageFile" class="col-12 col-md-6">
                      <q-img :src="aboutImageFile" class="image-size" alt="about image"/>
                  </div>
                  <div v-else class="col-12 col-md-6">
                      <q-img src="/images/image.png" class="image-size" alt="about image"/>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="q-mt-sm">
                      <h5 style="margin: 0%;">Change Image</h5>
                      <q-file
                      outlined
                      v-model="aboutImageFile"
                      label="Upload Image"
                      accept="image/*"
                      @update:model-value="handleAboutFileUpload"
                      class="q-mb-md"
                      />
                    </div>
                    <div class="q-mt-sm">
                      <h5 style="margin: 0%;">Change Text</h5>
                      <q-input type="textarea" style="font-size: 16px;" :rules=[validateRequired] outlined v-model="aboutText" />
                    </div>
                    <q-btn label="update" class="q-mt-sm" color="primary" type="submit"/>
                  </div>
                </q-form> -->
                <h4 class=" q-pt-lg">Section One</h4>
                <div class="flex justify-center">
                  <q-img :src="aboutImageFile" class="image-size"/>
                </div>
                <q-form @submit="handleAboutForm">
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Image</h5>
                    <q-file
                      outlined
                      v-model="aboutImageFile"
                      label="Upload Image"
                      accept="image/*"
                      @update:model-value="handleAboutFileUpload"
                      class="q-mb-md"
                      />
                  </div>
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Description</h5>
                    <q-editor

                      v-model="aboutText"
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
            <q-tab-panel v-if="tab === 'newsSection'" name="newsSection">
              <div class="work-area q-px-lg">
                <!-- <h4 class=" q-pt-lg">News section</h4> -->
                <!-- <q-form class="row col-12" @submit="handleNewsForm" ref="newsForm">
                  <div v-if="newsImageFile" class="col-12 col-md-6">
                      <q-img :src="newsImageFile" class="image-size" alt="about image"/>
                  </div>
                  <div v-else class="col-12 col-md-6">
                      <q-img src="/images/top-view-fuel-station.png" class="image-size" alt="about image"/>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="q-mt-sm">
                      <h5 style="margin: 0%;">Change Image</h5>
                      <q-file
                      outlined
                      v-model="newsImageFile"
                      label="Upload Image"
                      accept="image/*"
                      @update:model-value="handleNewsFileUpload"
                      class="q-mb-md"
                      />
                    </div>
                    <div class="q-mt-sm">
                      <h5 style="margin: 0%;">Change Text</h5>
                      <q-input type="textarea" style="font-size: 16px;" :rules=[validateRequired] outlined v-model="NewsText" />
                    </div>
                    <q-btn label="update" class="q-mt-sm" color="primary" type="submit"/>
                  </div>
                </q-form> -->
                <h4 class=" q-pt-lg">Section One</h4>
                <div class="flex justify-center">
                  <q-img :src="newsImageFile" class="image-size"/>
                </div>
                <q-form @submit="handleNewsForm">
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Image</h5>
                    <q-file
                      outlined
                      v-model="newsImageFile"
                      label="Upload Image"
                      accept="image/*"
                      @update:model-value="handleNewsFileUpload"
                      class="q-mb-md"
                      />
                  </div>
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Description</h5>
                    <q-editor

                      v-model="NewsText"
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
import { ref,onMounted } from 'vue';
import { api, storage_url } from 'src/boot/axios';
import { useQuasar } from "quasar";
export default{
  setup(){
    const q = useQuasar();
    const tab = ref('heroSection');
    const videoText =ref('Where America Stops for Service and Value');
    const labelText =ref('Where Drivers and Fleets Thrive on the Road!');


    // Icons section
    const iconsTitle =ref('');
    const iconsSubTitle =ref('');
    const iconsDesc =ref("");

    const handleIconsForm = () =>{
      if (!iconsTitle.value || !iconsSubTitle.value || !iconsDesc.value) {
        showErrorNotification(" title, sub title, and description are required !");
        return
      }
      const formData = new FormData();
      formData.append('page_type','home');
      formData.append('section_name','icons_section');
      formData.append('title',"icons section");
      formData.append('description',iconsDesc.value);
      submitForms(formData);
    }

    // about section
    const aboutImage = ref(null);
    const aboutImageFile = ref(null);
    const aboutText =ref("");

    const handleAboutFileUpload = (file) =>{
      // aboutImage.value = selectedFile;
      if (!file) return
      aboutImage.value = file;
      const reader = new FileReader()
      reader.onload = () => {
        aboutImageFile.value = reader.result
      }
      reader.readAsDataURL(file)
    }

    const handleAboutForm = () =>{
      if (!aboutText.value) {
        showErrorNotification('about text is required.');
        return
      }
      const formData = new FormData();
      formData.append('page_type','home');
      formData.append('section_name','about_section');
      formData.append('title',"ABOUT AMBEST");
      formData.append('description', aboutText.value);
      if (aboutImage.value) {
        formData.append('image', aboutImage.value);
      }
      submitForms(formData);
    }

    // news section
    const newsImageFile = ref(null);
    const newsImage = ref(null);
    const NewsText = ref("");
    const validateRequired =(val)=>{
    return (val && val.trim() !== "") || "This field is required";
    }
    // File handler
    const handleNewsFileUpload = (file) => {
      // newsImage.value = selectedFile;

      if (!file) return
      newsImage.value = file;
      const reader = new FileReader()
      reader.onload = () => {
        newsImageFile.value = reader.result
      }
      reader.readAsDataURL(file)
    }
    const handleNewsForm = ()=>{
      if (!NewsText.value) {
        showErrorNotification('about text is required.');
        return
      }
      const formData = new FormData()
      formData.append('page_type','home');
      formData.append('section_name','news_section');
      formData.append('title',"AMBEST NEWS");
      formData.append('description', NewsText.value)
      if (newsImage.value) {
        formData.append('image', newsImage.value)
      }
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

    //video upload
    const videoFile = ref(null)
    const videoPreview = ref(null)
    let oldPreviewUrl = null;
    const handleVideoUpload = (event) => {
      const file = event.target.files[0]

      if (file && file.type.startsWith('video/')) {
        // Revoke previous preview if exists
        if (oldPreviewUrl) {
          URL.revokeObjectURL(oldPreviewUrl)
        }

        videoFile.value = file
        oldPreviewUrl = URL.createObjectURL(file)
        videoPreview.value = oldPreviewUrl
      } else {
        videoFile.value = null
        videoPreview.value = null
      }
    }

    
    // notifications

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
  //  get home page details
    const getHomePageDetails = () =>{
      api.get('get-home-page-details')
      .then((response)=>{
        console.log(response);
        let val = response.data.data;
        aboutImageFile.value = storage_url(val.about_section.img_url);
        aboutText.value = val.about_section.description;
        newsImageFile.value = storage_url(val.news_section.img_url);
        NewsText.value = val.news_section.description;
        iconsTitle.value = val.icons_section.title;
        iconsSubTitle.value = val.icons_section.sub_title;
        iconsDesc.value = val.icons_section.description;
      })
      .catch((error)=>{
        showErrorNotification(error.response.data.message || error.message)
        console.log(error);
      })
    }

    onMounted(()=>{
      getHomePageDetails();
    })
    return {
      q,
      tab,
      videoText,
      labelText,
      iconsTitle,
      iconsSubTitle,
      iconsDesc,
      aboutImage,
      aboutImageFile,
      aboutText,
      newsImageFile,
      newsImage,
      NewsText,
      validateRequired,
      handleNewsForm,
      handleNewsFileUpload,
      handleAboutFileUpload,
      handleAboutForm,
      handleIconsForm,
      showErrorNotification,
      showSuccessNotification,
      handleVideoUpload,
      videoPreview,
      videoFile,
    }
  }
}
</script>
<style>
.work-area{
  min-height: 100vh;
}
.video-preview{
  height: auto;
  /* border: 5px solid gray; */
}
.image-size{
  width: 500px;
}
@media(max-width:1024px){
  .image-size{
    width: 350px;
  }
}
</style>
