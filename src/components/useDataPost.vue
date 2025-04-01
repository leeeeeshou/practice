<template></template>
<script setup>
import { ref, onMounted, defineEmits } from 'vue';
import { db } from './firebase/config';
import { collection, getDocs } from 'firebase/firestore';

const post = ref([]); // 用来存储数据
const emit = defineEmits(); // 用于向父组件发送事件

const fetchposts = async () => {
  const postColl = collection(db, 'post'); // 获取 `post` 集合
  const postDoc = await getDocs(postColl);
  post.value = []; // 清空数组，避免旧数据

  postDoc.forEach((e) => {
    post.value.push({ ...e.data(), id: e.id }); // 将数据添加到数组
  });

  emit('update:post', post.value); // 向父组件发送事件，传递数据
};

onMounted(() => {
  fetchposts(); // 在组件挂载后获取数据
});
</script>
