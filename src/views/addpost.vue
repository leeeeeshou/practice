<template>
    <useDataPost @update:post="setposts" />
    <div class="post-box">
      <div class="row">Name: <input type="text" v-model="addName"></div>
      <div class="row">Title: <input type="text" v-model="addTitle"></div>
      <div class="row">
        <textarea v-model="addContent"></textarea>
      </div>
      <div class="row">
        <input type="file" @change="handleFileChange" />
      </div>
      <div v-if="previewUrl" class="image-preview">
            <img :src="previewUrl" alt="Image Preview" />
        </div>
      <!-- 进度条 -->
      <div v-if="progress !== null" class="progress-container">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
  
      <div class="row">
        <button @click="addData">Post</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { db, storage } from '@/components/firebase/config'; // 引入 Firestore 和 Storage
  import { collection, addDoc } from 'firebase/firestore';
  import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
  
  const addName = ref('');
  const addTitle = ref('');
  const addContent = ref('');
  const addpic = ref(null); // 这个用于存储选择的文件
  const progress = ref(null); // 存储上传进度
  const previewUrl = ref(null);//預視圖
  
  // 处理文件选择
  const handleFileChange = (event) => {
    const file = event.target.files[0]; // 获取选择的文件
    addpic.value = file; // 存储文件
    previewUrl.value = URL.createObjectURL(file); // 创建文件的临时 URL 用于预览
  };
  
  // 上传图像并获取下载 URL
  const uploadImage = async (file) => {
    const storageReference = storageRef(storage, `images/${file.name}`);
    const uploadTask = uploadBytesResumable(storageReference, file);
  
    return new Promise((resolve, reject) => {
      // 监听上传状态
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          // 计算上传进度
          const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          progress.value = percent; // 更新进度条
  
        },
        (error) => {
          reject(error); // 上传失败
        },
        async () => {
          // 上传成功，获取下载 URL
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL); // 返回图像的下载 URL
        }
      );
    });
  };
  
  // 添加数据到 Firestore
  const addData = async () => {
    const date = new Date();
    const dayWeek = date.getDay(),
      month = date.getMonth() + 1, // 月份从0开始，应该加1
      day = date.getDate(),
      year = date.getFullYear(),
      hh = date.getHours(),
      mm = date.getMinutes();
  
    try {
      let imageURL = '';
      if (addpic.value) {
        imageURL = await uploadImage(addpic.value); // 上传图片并获取 URL
      }
  
      // 将数据添加到 Firestore
      await addDoc(collection(db, 'post'), {
        name: addName.value,
        title: addTitle.value,
        content: addContent.value,
        pic: imageURL, // 将图像的 URL 存储到 Firestore
        post_time: `${year}-${month}-${day} ${hh}:${mm}` // 格式化日期
      });
  
      // 成功后清空输入框
      alert('新增成功');
      addName.value = '';
      addTitle.value = '';
      addContent.value = '';
      addpic.value = null; // 清空图像文件
      progress.value = null; // 清空进度条
      previewUrl.value = null//預視圖清空
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('新增失败');
    }
  };
  </script>
  
  <style>
  .post-box {
    width: 400px;
    height: fit-content;
    min-height: 500px;
    border: 1px solid #000;
    padding: 20px;
  }
  
  .row {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  
  textarea {
    width: 100%;
    height: 80px;
    padding: 5px;
  }
  
  input {
    width: 100%;
    padding: 5px;
  }
  
  .progress-container {
    width: 100%;
    height: 20px;
    background-color: #f3f3f3;
    border-radius: 5px;
    margin-top: 10px;
  }
  
  .progress-bar {
    height: 100%;
    background-color: #4caf50;
    border-radius: 5px;
  }
  .image-preview{
    width: 100%;
  }
  .image-preview img{
    width: 100%;
  }
  </style>
  