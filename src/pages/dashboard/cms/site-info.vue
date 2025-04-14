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
              { label: 'Site Logo', value: 'logo' },
              { label: 'Site Information', value: 'information' },
              { label: 'Office & Address', value: 'address' },
              { label: 'Social Media', value: 'socialmedia' },
            ]"
            class="custom-tabs"
          />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-if="tab === 'logo'" name="logo">
              <div class="work-area q-px-lg">
                <h4 class=" q-pt-lg">Update Logo</h4>
                <div class="row col-12">
                  <div v-if="logoImage" class="col-12 col-md-6">
                    <q-img :src="`http://127.0.0.1:8000/storage/${logoImage}`" width="500px" style="object-fit: cover;" />
                  </div>
                  <div v-else class="col-12 col-md-6">
                    <q-img src="/images/ambest-logo.png" width="500px" style="object-fit: cover;" />
                  </div>
                  <div class="col-12 col-md-6">
                    <q-form @submit="handleLogoForm">
                      <div class="q-mt-md">
                        <h5 style="margin: 0%;">Change Logo</h5>
                        <q-file
                        outlined
                        v-model="logoFile"
                        label="Upload Image"
                        accept="image/*"
                        @update:model-value="handleLogoFile"
                        class="q-mb-md"
                        />
                      </div>
                      <q-btn label="update" class="q-mt-sm" color="primary" type="submit"/>
                    </q-form>
                  </div>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-if="tab === 'information'" name="information">
              <div class="work-area q-px-lg">
              <h4 class=" q-pt-lg">Update Information</h4>
                <q-form @submit="handleInformationForm">
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Title</h5>
                    <q-input type="text" style="font-size: 16px;" :rules=[validateRequired] outlined v-model="infoTitle" />
                  </div>
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Contact</h5>
                    <q-input type="number" style="font-size: 16px;" :rules=[validateRequired,validatePhone] outlined v-model="infoContact" />
                  </div>
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Email</h5>
                    <q-input type="text" style="font-size: 16px;" :rules=[validateRequired,validateEmail] outlined v-model="infoEmail" />
                  </div>

                    <q-btn label="update" class="q-mt-sm" color="primary" type="submit"/>
                </q-form>
              </div>
            </q-tab-panel>
          </q-tab-panels>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-if="tab === 'address'" name="address">
              <div class="work-area q-px-lg">
                <h4 class=" q-pt-lg">Update Address</h4>
                <q-form @submit="handleOfficeForm">
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Office Name</h5>
                    <q-input
                    type="text" style="font-size: 16px;" :rules=[validateRequired] outlined v-model="officeName"
                    />
                  </div>
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Address</h5>
                    <q-input
                      type="textarea" style="font-size: 16px;" :rules=[validateRequired] outlined v-model="officeAddress"
                    />
                  </div>
                  <q-btn label="update" class="q-mt-sm" color="primary" type="submit"/>
                </q-form>
              </div>
            </q-tab-panel>
          </q-tab-panels>

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-if="tab === 'socialmedia'" name="socialmedia">
              <div class="work-area q-px-lg">
                <h4 class=" q-pt-lg">Update Social Media</h4>
                <q-form @submit="handleSocialLinks">
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">facebook URL</h5>
                    <q-input type="text" style="font-size: 16px;" :rules=[validateRequired] outlined v-model="facebookLink" />
                  </div>
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">Instagram URL</h5>
                    <q-input type="text" style="font-size: 16px;" :rules=[validateRequired] outlined v-model="instagramLink" />
                  </div>
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">X.COM URL</h5>
                    <q-input type="text" style="font-size: 16px;" :rules=[validateRequired] outlined v-model="xLink" />
                  </div>
                  <div class="q-mt-md">
                    <h5 style="margin: 0%;">LinkedIn URL</h5>
                    <q-input type="text" style="font-size: 16px;" :rules=[validateRequired] outlined v-model="LinkedInLink" />
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
import { api } from 'src/boot/axios';
import { ref,onMounted } from 'vue';

export default{
 setup(){
    const q = useQuasar();
    const tab = ref('logo');

    // logo update
    const logoFile = ref('');
    const logoImage = ref('');

    const handleLogoFile = (selectedFile) =>{
      logoImage.value = selectedFile;
    }

    const handleLogoForm = ()=>{
      const formData = new FormData();
      formData.append('logo',logoImage.value);
      api.post('update-logo',formData,{
        headers: {
        'Content-Type': 'multipart/form-data'
        }
      }).then((response)=>{
        console.log(response);
        showSuccessNotification(response.data.message)
      }).catch((error)=>{
        console.log(error);
        showErrorNotification(error.response.data.message || error.message);
      })
    }

    // office section
    const officeName = ref('');
    const officeAddress = ref('');

    const handleOfficeForm = () =>{
      const formData = new FormData();
      formData.append('office_name',officeName.value);
      formData.append('address',officeAddress.value);
      api.post('update-address',formData)
      .then((response)=>{
        // console.log(response);
        showSuccessNotification(response.data.message);
      })
      .catch((error)=>{
        // console.log(error);
        showErrorNotification(error.response.data.message || error.message);
      })
    }

    // social media links
    const facebookLink = ref('');
    const instagramLink = ref('');
    const xLink = ref('');
    const LinkedInLink = ref('');

    const handleSocialLinks = () =>{
      const formData = new FormData();
      formData.append('facebook_link',facebookLink.value);
      formData.append('instagram_link',instagramLink.value);
      formData.append('tweeter_link',xLink.value);
      formData.append('store_link',LinkedInLink.value);

      api.post('update-social-media',formData)
      .then((response)=>{
        console.log(response);
        showSuccessNotification(response.data.message);
      })
      .catch((error)=>{
        console.log(error);
        showErrorNotification(error.response.data.message || error.message);
      })
    }

    // information section
    const infoTitle = ref('');
    const infoContact = ref('');
    const infoEmail = ref('');

    const validateRequired =(val)=>{
    return (val && val.trim() !== "") || "This field is required";
    }
    const validatePhone =(val)=>{
      const phonePattern = /^[0-9]{10}$/; // Accepts only 10-digit numbers
      return phonePattern.test(val) || "Invalid phone number (must be 10 digits)";
    }
    const validateEmail =(val)=>{
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return emailPattern.test(val) || "Invalid email address";
    }

    const handleInformationForm = () =>{
      if ( !infoTitle.value || !infoContact.value || !infoEmail.value ) {
        showErrorNotification("info title , contact, email are required");
        return
      }
      const formData = new FormData();
      formData.append('title',infoTitle.value);
      formData.append('contact',infoContact.value);
      formData.append('email',infoEmail.value);

      api.post('update-info',formData)
      .then((response)=>{
        console.log(response);
        showSuccessNotification(response.data.message);
      })
      .catch((error)=>{
        console.log(error);
        showErrorNotification(error.response.data.message || error.message);
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

    const getSiteDetails=()=>{
      api.get('get-site-details')
      .then((response)=>{
        // showSuccessNotification(response.data.message);
        console.log(response.data.data);
        let val = response.data.data;
        officeAddress.value = val.address;
        officeName.value = val.office_name;
        facebookLink.value = val.facebook_link;
        instagramLink.value = val.instagram_link;
        LinkedInLink.value = val.store_link;
        xLink.value = val.tweeter_link;
        infoTitle.value = val.title;
        infoContact.value = val.contact_no;
        infoEmail.value = val.email;
        logoImage.value = val.logo;
      })
      .catch((error)=>{
        showErrorNotification(error.response.data.message || error.message);
      })
    }
    onMounted(()=>{
      getSiteDetails();
    })
    return {
      tab,
      infoTitle,
      infoContact,
      infoEmail,
      validateRequired,
      validatePhone,
      validateEmail,
      handleInformationForm,
      showSuccessNotification,
      showErrorNotification,
      facebookLink,
      LinkedInLink,
      instagramLink,
      xLink,
      handleSocialLinks,
      officeAddress,
      officeName,
      handleOfficeForm,
      logoFile,
      logoImage,
      handleLogoFile,
      handleLogoForm,
    }
  }

}
</script>
<style>
.work-area{
  min-height: 100vh;
}
</style>
