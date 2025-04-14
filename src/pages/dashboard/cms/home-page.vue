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
                <div class="" style="height: 40%;">
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
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-if="tab === 'iconsSection'" name="iconsSection">
              <div class="work-area q-px-lg">
                 <h4 class=" q-pt-lg">Icons Text Section</h4>
                <q-form @submit="handleIconsForm">
                  <div class="q-mt-md">
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
                  </div>
                    <q-btn label="update" class="q-mt-sm" color="primary" type="submit"/>
                </q-form>
              </div>
            </q-tab-panel>
          </q-tab-panels>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-if="tab === 'aboutSection'" name="aboutSection">
              <div class="work-area q-px-lg">
                <h4 class=" q-pt-lg">About section</h4>
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
                      <!-- <q-input type="file" style="font-size: 16px;" outlined /> -->
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
                </q-form>
              </div>
            </q-tab-panel>
          </q-tab-panels>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-if="tab === 'newsSection'" name="newsSection">
              <div class="work-area q-px-lg">
                <h4 class=" q-pt-lg">News section</h4>
                <q-form class="row col-12" @submit="handleNewsForm" ref="newsForm">
                  <div v-if="newsImageFile" class="col-12 col-md-6">
                      <q-img :src="newsImageFile" class="image-size" alt="about image"/>
                  </div>
                  <div v-else class="col-12 col-md-6">
                      <q-img src="/images/top-view-fuel-station.png" class="image-size" alt="about image"/>
                  </div>
                  <div class="col-12 col-md-6">
                    <div class="q-mt-sm">
                      <h5 style="margin: 0%;">Change Image</h5>
                      <!-- <q-input type="file" style="font-size: 16px;" outlined /> -->
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
      formData.append('title',iconsTitle.value);
      formData.append('subTitle',iconsSubTitle.value);
      formData.append('desc',iconsDesc.value);
      api.post('home-page-update-icons-section',formData).then((response)=>{
        console.log(response);
        showSuccessNotification(response.data.message)
      }).catch((error)=>{
        console.log(error);
        showErrorNotification( error.response.data.message ||error.message)
      })
    }

    // about section
    const aboutImage = ref(null);
    const aboutImageFile = ref(null);
    const aboutText =ref("");

    const handleAboutFileUpload = (selectedFile) =>{
      aboutImage.value = selectedFile;
    }

    const handleAboutForm = () =>{
      if (!aboutText.value) {
        showErrorNotification('about text is required.');
        return
      }
      const formData = new FormData();
      formData.append('aboutText', aboutText.value);
      if (aboutImage.value) {
        formData.append('coverImage', aboutImage.value);
      }
      api.post('home-page-update-about-section',formData,{
        headers: {
        'Content-Type': 'multipart/form-data'
        }
      }).then((response)=>{
        // console.log(response);
        showSuccessNotification(response.data.message);
      }).catch((error)=>{
        // console.log(error);
        showErrorNotification( error.response.data.message ||error.message)
      })
    }

    // news section
    const newsImageFile = ref(null);
    const newsImage = ref(null);
    const NewsText = ref("");
    const validateRequired =(val)=>{
    return (val && val.trim() !== "") || "This field is required";
    }
    // File handler
    const handleNewsFileUpload = (selectedFile) => {
      newsImage.value = selectedFile;
    }
    const handleNewsForm = ()=>{
      if (!NewsText.value) {
        showErrorNotification('about text is required.');
        return
      }
      const formData = new FormData()
      formData.append('newsText', NewsText.value)
      if (newsImage.value) {
        formData.append('coverImage', newsImage.value)
      }
      api.post('home-page-update-news-section',formData,{
        headers: {
        'Content-Type': 'multipart/form-data'
        }
      }).then((response)=>{
        // console.log(response);
        showSuccessNotification(response.data.message);
      }).catch((error)=>{
        // console.log(error);
        showErrorNotification(error.response.data.message || error.message)
      })
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
