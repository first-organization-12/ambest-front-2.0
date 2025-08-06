<template>
    <div v-if="content" style="min-height: 100vh;padding-inline: 50px;">
      <div v-html="content"></div>
    </div>
</template>
<script>
import { api } from 'src/boot/axios';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
export default{
  setup(){
    const route = useRoute();
    const router = useRouter();
    const slug = Array.isArray(route.params.route)
      ? route.params.route.join('/')
      : route.params.route;

    const title = ref('title');
    const content = ref('content');
    const getData = () =>{
      api.get(`/page/${slug}`)
      .then((res)=>{
        let val = res.data.data;
        title.value = val.title;
        content.value = val.content;
      }).catch((error)=>{
        console.log('faild to fetch data'+error);
        router.replace({ name: 'NotFound' });
      })
    }
    onMounted(()=>{
      getData();
    });
    return{
      title,
      content,
    }
  }
}
</script>
