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
              { label: 'Customer Review', value: 'customerReview' },
              // { label: 'Others', value: 'others' },
            ]"
            class="custom-tabs"
          />

          <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-if="tab === 'heroSection'" name="heroSection">
              <div class="work-area q-px-lg">
                <h4 class="q-pt-lg">Section One</h4>
                <q-card class="q-pa-lg" style="max-width: 500px; margin: auto;">
                  <video
                    v-if="videoPreview"
                    controls
                    class="q-mt-lg"
                    style="width: 100%; border-radius: 8px;"
                  >
                    <source :src="videoPreview" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                  <q-file
                    outlined
                    label="Select a video"
                    accept="video/*"
                    @update:model-value="handleFileChange"
                  >
                    <template v-slot:append>
                      <q-icon name="movie" />
                    </template>
                  </q-file>

                  <q-btn
                    label="Upload Video"
                    color="primary"
                    class="q-mt-md full-width"
                    :disable="!videoFile || uploading"
                    @click="uploadVideo"
                  />
                  <q-btn
                    v-if="videoFile"
                    label="remove"
                    color="negative"
                    class="q-mt-md full-width"
                    :disable="!videoFile || uploading"
                    @click="removeVideo"
                  />

                  <q-linear-progress
                    v-if="uploading"
                    :value="progress / 100"
                    color="blue"
                    size="10px"
                    class="q-mt-md"
                    stripe
                    animation-speed="1000"
                  />

                  <div v-if="progress > 0" class="text-subtitle2 q-mt-sm text-center">
                    {{ progress }}%
                  </div>
                </q-card>

                <q-form @submit="handleBannerForm">
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
                <!-- <div class="flex justify-center">
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
                </q-form> -->
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
          <q-tab-panels v-model="tab" animated>
            <q-tab-panel v-if="tab === 'customerReview'" name="customerReview">
                <div class="work-area">
                  <div class="row justify-between items-center">
                    <h4 class=" q-pt-lg">Customer Reviews</h4>
                    <q-btn color="primary" class="" @click="openModal()"  label="Add Customer Review"/>
                  </div>
                <q-dialog v-model="isModalOpen" full-width>
                  <q-card>
                    <q-card-section>
                      <div class="text-h6">Customer Reviews</div>
                    </q-card-section>

                    <q-separator />

                    <q-card-section>
                      <q-form @submit="handleFaqForm">
                        <input type="hidden" v-model="crId" />
                        <div class="q-mt-md">
                          <h5 style="margin: 0%;">Author Name</h5>
                          <q-editor
                          style="font-size: 16px;" min-height="3rem" :rules=[validateRequired] outlined v-model="author"
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
                          style="font-size: 16px;" min-height="3rem" :rules=[validateRequired] outlined v-model="author"
                          /> -->
                        </div>
                        <div class="q-mt-md">
                          <h5 style="margin: 0%;">message</h5>
                          <q-editor
                            :rules=[validateRequired]
                            v-model="message"
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
                    <q-list class="faq-list">
                      <q-expansion-item
                        v-for="(item, index) in testimonials"
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
                            <!-- <strong>{{ item.author }}</strong> -->
                            <span v-html="item.comment"></span>

                        </q-item-section>
                        </template>
                        <q-card>
                          <q-card-section>
                            <p class="text-desc" style="font-size: 20px; width: 500;">
                              <span v-html="item.name"></span>
                              <!-- {{ item.message }} -->
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
          <q-tab-panel v-if="tab === 'others'" name="others">
            <div class="work-area q-px-lg">
              <h4 class=" q-pt-lg">Others</h4>

              <div class="">
                <div class="">
                  <h4 class=" q-pt-lg">Update Truck Stop Image</h4>
                  <div class="flex justify-center">
                    <q-img :src="findTruckImg" width="500px" style="object-fit: cover;"/>
                  </div>
                  <q-form @submit="handleFindTruckForm">
                    <div class="q-mt-md">
                      <h5 style="margin: 0%;">Change Logo</h5>
                      <q-file
                      outlined
                      v-model="findTruckImgFile"
                      label="Upload Image"
                      accept="image/*"
                      @update:model-value="handleFindTruckUpload"
                      class="q-mb-md"
                      />
                    </div>
                    <q-btn label="update" class="q-mt-sm" color="primary" type="submit"/>
                  </q-form>
                </div>
                <div class="">
                  <h4 class=" q-pt-lg">Update Locate Service Image</h4>
                  <div class="flex justify-center">
                    <q-img :src="serviceLocateImg" width="500px" style="object-fit: cover;"/>
                  </div>
                  <q-form @submit="handleServiceLocateForm">
                    <div class="q-mt-md">
                      <h5 style="margin: 0%;">Change Logo</h5>
                      <q-file
                      outlined
                      v-model="serviceLocateImgFile"
                      label="Upload Image"
                      accept="image/*"
                      @update:model-value="handleServiceLocateUpload"
                      class="q-mb-md"
                      />
                    </div>
                    <q-btn label="update" class="q-mt-sm" color="primary" type="submit"/>
                  </q-form>
                </div>
                <div class="">
                  <h4 class=" q-pt-lg">Update Download Image</h4>
                  <div class="flex justify-center">
                    <q-img :src="downloadAppImg" width="500px" style="object-fit: cover;"/>
                  </div>
                  <q-form @submit="handledownloadAppForm">
                    <div class="q-mt-md">
                      <h5 style="margin: 0%;">Change Logo</h5>
                      <q-file
                      outlined
                      v-model="downloadAppImgFile"
                      label="Upload Image"
                      accept="image/*"
                      @update:model-value="handleDownloadAppUpload"
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

    const testimonials = ref([]);

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
    const progress = ref(0)
    const uploading = ref(false)
    const videoPreview = ref(null)
    const handleFileChange = (fileList) => {
      const file = fileList ? fileList : null
      if (file && file instanceof File) {
        videoFile.value = file
        videoPreview.value = URL.createObjectURL(file)
      } else if (Array.isArray(fileList) && fileList.length > 0) {
        videoFile.value = fileList[0]
        videoPreview.value = URL.createObjectURL(fileList[0])
      } else {
        videoFile.value = null
        videoPreview.value = null
      }
    }
    const removeVideo = () => {
    videoFile.value = null
    videoPreview.value = null
    progress.value = 0
    }

    const uploadVideo = async () => {
      if (!videoFile.value) return

      const formData = new FormData()
      formData.append('video', videoFile.value)

      uploading.value = true
      progress.value = 0

      try {
        await api.post('upload-video', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          },
          onUploadProgress: (event) => {
            if (event.lengthComputable) {
              progress.value = Math.round((event.loaded / event.total) * 100)
            }
          }
        })
        .then((response)=>{
          console.log(response);
          showSuccessNotification(response.data.message);
        })

        uploading.value = false

      } catch (error) {
        console.log(error);
        showErrorNotification('Upload failed:');
        uploading.value = false
      }
    }

    const handleBannerForm = ()=>{
      const formData = new FormData()
      formData.append('page_type','home');
      formData.append('section_name','banner_section');
      formData.append('title',videoText.value);
      formData.append('description', labelText.value);
      if (newsImage.value) {
        formData.append('image', newsImage.value)
      }
      submitForms(formData);
    }

    // customer review
    const isModalOpen = ref(false);
    const crId = ref();
    const author = ref("");
    const message = ref("");
    const formBtn = ref('Create');

    const openModal = () => {
    formBtn.value = 'Create';
    crId.value = '';
    author.value = "";
    message.value = "";
    isModalOpen.value = true;
    };

    const handleUpdateBtn = (item)=>{
      console.log(item);
      formBtn.value = 'Update';
      crId.value = item.id;
      author.value = item.name;
      message.value = item.comment;
      isModalOpen.value = true;
    }

    const handleFaqForm = ()=>{
      const formData = new FormData();
      formData.append('id',crId.value);
      formData.append('author',author.value);
      formData.append('message',message.value);
      api.post('handle-customer-review',formData)
      .then((response)=>{
        console.log(response);
        showSuccessNotification(response.data.message);
      })
      .catch((error)=>{
        console.log(error);
        showErrorNotification(error.response.data.message || error.message)
      })

      isModalOpen.value = false;
      getHomePageDetails();
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

  //  const findTruckImg = ref('');
  //  const findTruckImgFile = ref('');

  //  const serviceLocateImg = ref('');
  //  const serviceLocateImgFile = ref('');

  //  const downloadAppImg = ref('');
  //  const downloadAppImgFile = ref('');

  //  const handleFindTruckUpload = (file) =>{
  //     if (!file) return
  //     findTruckImgFile.value = file;
  //     const reader = new FileReader()
  //     reader.onload = () => {
  //       findTruckImg.value = reader.result
  //     }
  //     reader.readAsDataURL(file)
  //  }

  //  const handleFindTruckForm = () =>{
  //   const formData = new FormData()
  //     formData.append('page_type','home');
  //     formData.append('section_name','service_section_one');
  //     formData.append('title',"service_section");
  //     formData.append('description',"Service Section");
  //     if (findTruckImgFile.value) {
  //       formData.append('image', findTruckImgFile.value)
  //     }
  //     submitForms(formData);
  //  }

  //  const handleServiceLocateUpload = (file) =>{
  //     if (!file) return
  //     serviceLocateImgFile.value = file;
  //     const reader = new FileReader()
  //     reader.onload = () => {
  //       serviceLocateImg.value = reader.result
  //     }
  //     reader.readAsDataURL(file)
  //  }

  //  const handleServiceLocateForm = () =>{
  //     const formData = new FormData()
  //     formData.append('page_type','home');
  //     formData.append('section_name','service_section_two');
  //     formData.append('title',"service_section");
  //     formData.append('description',"Service Section");
  //     if (serviceLocateImgFile.value) {
  //       formData.append('image', serviceLocateImgFile.value)
  //     }
  //     submitForms(formData);
  //   }

  //  const handleDownloadAppUpload = (file) =>{
  //     if (!file) return
  //     downloadAppImgFile.value = file;
  //     const reader = new FileReader()
  //     reader.onload = () => {
  //       downloadAppImg.value = reader.result
  //     }
  //     reader.readAsDataURL(file)
  //  }

  //  const handledownloadAppForm = () =>{
  //     const formData = new FormData()
  //     formData.append('page_type','home');
  //     formData.append('section_name','service_section_three');
  //     formData.append('title',"service_section");
  //     formData.append('description',"Service Section");
  //     if (downloadAppImgFile.value) {
  //       formData.append('image', downloadAppImgFile.value)
  //     }
  //     submitForms(formData);
  //   }



  //  get home page details
    const getHomePageDetails = () =>{
      api.get('get-home-page-details')
      .then((response)=>{
        console.log(response);
        let val = response.data.data;
        testimonials.value = val.customer_reviews;
        aboutImageFile.value = storage_url(val.about_section.img_url);
        aboutText.value = val.about_section.description;
        newsImageFile.value = storage_url(val.news_section.img_url);
        NewsText.value = val.news_section.description;
        iconsTitle.value = val.icons_section.title;
        iconsSubTitle.value = val.icons_section.sub_title;
        iconsDesc.value = val.icons_section.description;

        // findTruckImg.value = storage_url(val.service_section_one.img_url);
        // serviceLocateImg.value = storage_url(val.service_section_two.img_url);
        // downloadAppImg.value = storage_url(val.service_section_three.img_url);
      })
      .catch((error)=>{
        showErrorNotification(error.message || error.message)
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
      // handleVideoUpload,
      videoPreview,
      videoFile,
      handleFileChange,
      progress,
      uploading,
      removeVideo,
      uploadVideo,
      handleBannerForm,


      testimonials,
      isModalOpen,
      crId,
      author,
      message,
      handleFaqForm,
      handleUpdateBtn,
      openModal,
      formBtn,

      // findTruckImg,
      // findTruckImgFile,
      // handleFindTruckUpload,
      // handleFindTruckForm,

      // serviceLocateImg,
      // serviceLocateImgFile,
      // handleServiceLocateUpload,
      // handleServiceLocateForm,

      // downloadAppImg,
      // downloadAppImgFile,
      // handleDownloadAppUpload,
      // handledownloadAppForm,

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
