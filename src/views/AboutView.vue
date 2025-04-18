<template>
    <useDataPost @update:post="setposts" />
  <div class="about">
    <h1>Hello There</h1>
    <button @click="showTest">show</button>  
   <view_pages :postsData="posts" v-show="showtestpage"/>
  </div>

</template>

<style scoped>
button{
  padding: 5px;
  border: 1px solid #000;
  border-radius: 5px;
}

</style>
<script setup>
import view_pages from '@/components/view_pages.vue';
import useDataPost from '@/components/useDataPost.vue';
import { ref } from 'vue';

const posts = ref([]); 

const setposts = (newposts) => {
    posts.value = newposts; 
}; 



const showtestpage=ref(false)
const showTest=()=>{
  showtestpage.value=!showtestpage.value
}

</script>
