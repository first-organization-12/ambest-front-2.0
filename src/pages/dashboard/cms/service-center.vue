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
              { label: 'Our Mission', value: 'mission' },
              { label: 'Our Story', value: 'story' },
              { label: 'Others', value: 'others' },
            ]"
            class="custom-tabs"
          />
          service center page
    </q-card-section>
  </q-card>

</template>
<script>
import { ref } from 'vue';
export default{
  setup(){
    const tab = ref('');
    return {
      tab,
    }
  }
}
</script>
