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
              { label: 'Section One', value: 'sectionOne' },
              { label: 'Section Two', value: 'sectionTwo' },
              { label: 'Section Three', value: 'sectionThree' },
              { label: 'Section Four', value: 'sectionFour' },
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
                <h4 class="q-pt-lg">Section Four</h4>
                <!-- <q-form @submit="handleSectionThreeForm"> -->
                  <div class="col-12 row">
                    <div class="col-4">
                    </div>
                    <div class="col-4" style="border-left: 1px solid #0056b3;">
                      <div class="q-pa-md">
                      <q-img :src="cardOneImg" class="card-image" fit="cover"
                            width="50%"  />
                        <q-form @submit="handlecardOneForm">
                          <div class="">
                            <q-file
                            v-model="cardOneImgFile"
                            label="Choose an image"
                            accept="image/*"
                            @update:model-value="handlecardOneImg"
                            outlined
                            />
                          </div>
                          <div class="q-mt-md">
                            <q-input outlined v-model="cardOneTitle" label="Card Name"/>
                          </div>
                          <div class="q-mt-md">
                            <q-editor outlined v-model="cardTwoDesc" label="Card Desc"/>
                          </div>
                          <div class="q-mt-md">
                            <q-btn color="primary" type="submit" label="submit"/>
                          </div>
                        </q-form>
                      </div>
                    </div>
                    <div class="col-4" style="border-left: 1px solid #0056b3;">
                      <div class="q-pa-md">
                      <q-img :src="cardTwoImg" class="card-image" fit="cover"
                            width="50%"  />
                        <q-form @submit="handlecardTwoForm">
                          <div class="">
                            <q-file
                            v-model="cardTwoImgFile"
                            label="Choose an image"
                            accept="image/*"
                            @update:model-value="handlecardTwoImg"
                            outlined
                            />
                          </div>
                          <div class="q-mt-md">
                            <q-input outlined v-model="cardTwoTitle" label="Card Name"/>
                          </div>
                          <div class="q-mt-md">
                            <q-editor outlined v-model="cardTwoDesc" label="Card Desc"/>
                          </div>
                          <div class="q-mt-md">
                            <q-btn type="submit" color="primary" label="submit"/>
                          </div>
                        </q-form>
                      </div>
                    </div>
                  </div>

                    <h4 class="q-pt-lg">Card Details</h4>
                    <q-form @submit="handleCardCompairForm">
                      <div class="col-12 row " style="border-bottom: 1px solid #0056b3;">
                        <div class="col-12 col-md-2">
                          <h5 class="text-desc text-primary text-bold q-pl-lg" style="margin: 0%;">Best For</h5>
                        </div>
                        <input type="hidden" v-model="cardTitleOne" />
                        <q-input class="col-12 col-md-5 q-pa-md" v-model="bestFor.cardOne" label="card one" outlined/>
                        <q-input class="col-12 col-md-5 q-pa-md" v-model="bestFor.cardTwo" label="card two" outlined/>
                        <div class="q-ma-md">
                        <q-btn color="primary" type="submit" label="submit"/>
                        </div>
                      </div>
                    </q-form>
                    <q-form @submit="handleCardCompairForm">
                      <div class="col-12 row " style="border-bottom: 1px solid #0056b3;">
                        <div class="col-12 col-md-2">
                          <h5 class="text-desc text-primary text-bold q-pl-lg" style="margin: 0%;">Discounts</h5>
                        </div>
                        <input type="hidden" v-model="cardTitleTwo" />
                        <q-input class="col-12 col-md-5 q-pa-md" v-model="discounts.cardOne" label="card one" outlined/>
                        <q-input class="col-12 col-md-5 q-pa-md" v-model="discounts.cardTwo" label="card two" outlined/>
                        <div class="q-ma-md">
                          <q-btn color="primary" type="submit" label="submit"/>
                        </div>
                      </div>
                    </q-form>
                    <q-form @submit="handleCardCompairForm">
                      <div class="col-12 row " style="border-bottom: 1px solid #0056b3;">
                        <div class="col-12 col-md-2">
                          <h5 class="text-desc text-primary text-bold q-pl-lg" style="margin: 0%;">Fuel Controls</h5>
                        </div>
                        <input type="hidden" v-model="cardTitleThree" />
                        <q-input class="col-12 col-md-5 q-pa-md" v-model="fuelControls.cardOne" label="card one" outlined/>
                        <q-input class="col-12 col-md-5 q-pa-md" v-model="fuelControls.cardTwo" label="card two" outlined/>
                        <div class="q-ma-md">
                          <q-btn color="primary" type="submit" label="submit"/>
                        </div>
                      </div>
                    </q-form>
                    <q-form @submit="handleCardCompairForm">
                      <div class="col-12 row " style="border-bottom: 1px solid #0056b3;">
                        <div class="col-12 col-md-2">
                          <h5 class="text-desc text-primary text-bold q-pl-lg" style="margin: 0%;">Accepted At</h5>
                        </div>
                          <input type="hidden" v-model="cardTitleFour" />
                        <q-input class="col-12 col-md-5 q-pa-md" v-model="acceptedAt.cardOne" label="card one" outlined/>
                        <q-input class="col-12 col-md-5 q-pa-md" v-model="acceptedAt.cardTwo" label="card two" outlined/>
                        <div class="q-ma-md">
                          <q-btn color="primary" type="submit" label="submit"/>
                        </div>
                      </div>
                    </q-form>
                    <q-form @submit="handleCardCompairForm">
                      <div class="col-12 row " style="border-bottom: 1px solid #0056b3;">
                        <div class="col-12 col-md-2">
                          <h5 class="text-desc text-primary text-bold q-pl-lg" style="margin: 0%;">Reporting</h5>
                        </div>
                          <input type="hidden" v-model="cardTitleFive" />
                        <q-input class="col-12 col-md-5 q-pa-md" v-model="reporting.cardOne" label="card one" outlined/>
                        <q-input class="col-12 col-md-5 q-pa-md" v-model="reporting.cardTwo" label="card two" outlined/>
                        <div class="q-ma-md">
                        <q-btn color="primary" type="submit" label="submit"/>
                      </div>
                    </div>
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
      formData.append('page_type','fuelCard');
      formData.append('section_name','banner_section');
      if (bannerImgFile.value) {
        formData.append('image',bannerImgFile.value);
      }
      formData.append('title','banner');
      formData.append('description',introText.value);
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

        if(val.banner_section){
          bannerImg.value = storage_url(val.banner_section.img_url);
          introText.value = val.banner_section.description;
        }

        sectionOneText.value = val.top_section.description;
        // storage_url('he')
        sectionTwoImg.value = storage_url(val.second_section.img_url);
        sectionTwoText.value = val.second_section.description;

        sectionThreeText.value = val.third_section.description;
      })
    }

    // card section
    const cardOneImg = ref('/images/EFS-Direct-Card-Web.png');
    const cardOneImgFile = ref('');
    const cardOneTitle = ref('EFS Direct Card');
    const cardOneDesc = ref('Ideal for businesses with multiple vehicles looking for customizable controls and detailed reporting.');

    const cardTwoImg = ref('/images/card.png');
    const cardTwoImgFile = ref('');
    const cardTwoTitle = ref('EFS Preferred Card');
    const cardTwoDesc = ref('Perfect for individual drivers or small fleets seeking straightforward savings, flexibility, and convenience with easy management.');

    const cardTitleOne = ref('Best For');
    const cardTitleTwo = ref('Discounts');
    const cardTitleThree = ref('Fuel Controls');
    const cardTitleFour = ref('Accepted At');
    const cardTitleFive = ref('Reporting');

    const bestFor = ref({cardOne:'Businesses managing multiple vehicles',cardTwo:'Individual drivers and small fleets'},);
    const discounts = ref({cardOne:'Aggressive discounts at AMBEST locations',cardTwo:'Competitive discounts at AMBEST locations & affiliates'},);
    const fuelControls = ref({cardOne:'Customizable spending limits and controls',cardTwo:'Simple, hassle-free purchasing'},);
    const acceptedAt = ref({cardOne:'Nationwide fuel and maintenance locations',cardTwo:'Nationwide fuel and maintenance locations'},);
    const reporting = ref({cardOne:'Detailed Reports for tracking expenses',cardTwo:'Detailed Reports for tracking expenses'},);


    const handlecardOneImg =(file)=>{
      if (!file) return
      cardOneImgFile.value = file;
      const reader = new FileReader()
      reader.onload = () => {
        cardOneImg.value = reader.result
      }
      reader.readAsDataURL(file)
    }
    const handlecardTwoImg =(file)=>{
      if (!file) return
      cardTwoImgFile.value = file;
      const reader = new FileReader()
      reader.onload = () => {
        cardTwoImg.value = reader.result
      }
      reader.readAsDataURL(file)
    }

    const handleCardCompairForm = (val)=>{
      // console.log(val.target[0].value);
      // console.log(val.target[1].value);
      // console.log(val.target[2].value);
      const formData = new FormData();
      formData.append('title',val.target[0].value);
      formData.append('cardOne',val.target[1].value);
      formData.append('cardTwo',val.target[2].value);
      api.post('update-card-compair',formData)
      .then((response)=>{
        console.log(response);
        showSuccessNotification(response.data.message);
      })
      .catch((error)=>{
        console.log(error);
        showErrorNotification(error.response.message || error.message);
      })
    }

    const handlecardOneForm = ()=>{
      const formData = new FormData();
      formData.append('page_type','fuelCard');
      formData.append('section_name','compair_section_one');
      if (cardOneImgFile.value) {
        formData.append('image',cardOneImgFile.value);
      }
      formData.append('title',cardOneTitle.value);
      formData.append('description',cardOneDesc.value);
      submitForms(formData);
    }
    const handlecardTwoForm = ()=>{
      const formData = new FormData();
      formData.append('page_type','fuelCard');
      formData.append('section_name','compair_section_two');
      if (cardTwoImgFile.value) {
        formData.append('image',cardTwoImgFile.value);
      }
      formData.append('title',cardTwoTitle.value);
      formData.append('description',cardTwoDesc.value);
      submitForms(formData);
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

      bannerImg,
      bannerImgFile,
      introText,
      handleBannerImg,
      handleBannerForm,

      cardOneImg,
      cardOneImgFile,
      cardOneTitle,
      cardOneDesc,

      cardTwoImg,
      cardTwoImgFile,
      cardTwoTitle,
      cardTwoDesc,

      bestFor,
      discounts,
      acceptedAt,
      fuelControls,
      reporting,

      cardTitleOne,
      cardTitleTwo,
      cardTitleThree,
      cardTitleFour,
      cardTitleFive,

      handlecardOneImg,
      handlecardTwoImg,
      handleCardCompairForm,
      handlecardOneForm,
      handlecardTwoForm,
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
