<template>
  <h1>Hello I'm post</h1>
  <useDataPost @update:post="setposts" />
  <div>
    <pre>{{ posts }}</pre> <!-- 打印获取的 posts 数据 -->
  </div>

  <div class="posts-box" v-for="post in posts">
    <h2>{{post.title}}</h2>
    <textarea name="" id="" readonly>{{post.content}}</textarea>
  </div>
</template>

<script setup>
import useDataPost from '@/components/useDataPost.vue'; // 引入子组件
import { ref } from 'vue';

const posts = ref([]); // 用来存储从子组件获取的数据

const setposts = (newposts) => {
  posts.value = newposts; // 更新 posts 数据
};
</script>
<style scoped>
.posts-box{
  width: 100px;
  height: 150px;
  border: 1px solid #000;
  overflow: hidden;
  margin: 15px;
}
.posts-box textarea{
width: 100%;
height: 50%;
overflow: auto;
border: 0px solid #000;
resize: none;
}

</style>
