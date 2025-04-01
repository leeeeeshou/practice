<template>
    <div>
      <input type="file" @change="handleFileChange" accept="image/*" :disabled="isUploading">
  
      <button @click="uploadImage" :disabled="!selectedFile || isUploading">
        {{ isUploading ? '上傳中...' : '上傳圖片' }}
      </button>
  
      <div v-if="isUploading">
        <progress :value="uploadProgress" max="100"></progress>
        <span>{{ Math.round(uploadProgress) }}%</span>
      </div>
  
      <div v-if="errorMessage" style="color: red;">
        錯誤：{{ errorMessage }}
      </div>
  
      <div v-if="downloadURL">
        <p>上傳成功！</p>
        <p>
          圖片網址：<a :href="downloadURL" target="_blank">{{ downloadURL }}</a>
        </p>
        <img :src="downloadURL" alt="Uploaded Image" style="max-width: 300px; margin-top: 10px;">
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
  import { storage } from './firebase/config'; 
  
  const selectedFile = ref(null); // 用於存儲用戶選擇的檔案
  const isUploading = ref(false); // 標記是否正在上傳
  const uploadProgress = ref(0); // 上傳進度百分比
  const downloadURL = ref(''); // 上傳成功後的圖片下載 URL
  const errorMessage = ref(''); // 存儲錯誤訊息
  
  // --- Functions ---
  
  // 處理檔案選擇變更事件
  const handleFileChange = (event) => {
    // event.target.files 是一個 FileList，我們取第一個檔案
    const file = event.target.files[0];
    if (file) {
      selectedFile.value = file;
      // 重置狀態以便重新上傳
      downloadURL.value = '';
      errorMessage.value = '';
      uploadProgress.value = 0;
    } else {
      selectedFile.value = null;
    }
  };
  
  // 處理圖片上傳邏輯
  const uploadImage = async () => {
    // 檢查是否已選擇檔案
    if (!selectedFile.value) {
      errorMessage.value = '請先選擇一個圖片檔案。';
      return;
    }
  
    // 開始上傳，設置狀態
    isUploading.value = true;
    errorMessage.value = '';
    downloadURL.value = '';
    uploadProgress.value = 0;

    const fileRef = storageRef(storage, `images/${selectedFile.value.name}`);
  
    const uploadTask = uploadBytesResumable(fileRef, selectedFile.value);
  
    uploadTask.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        uploadProgress.value = progress;
        console.log('Upload is ' + progress + '% done');
      },
      (error) => {
        console.error("Upload failed:", error);
        switch (error.code) {
          case 'storage/unauthorized':
            errorMessage.value = '您沒有權限上傳檔案，請檢查 Firebase Storage 的規則設定。';
            break;
          case 'storage/canceled':
            errorMessage.value = '上傳已被取消。';
            break;
          default:
            errorMessage.value = `上傳失敗：${error.message}`;
        }
        isUploading.value = false; 
        selectedFile.value = null; 
      },
      async () => {
        console.log('Upload successful!');
        try {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          downloadURL.value = url;
          console.log('File available at', url);
        } catch (error) {
           console.error("Failed to get download URL:", error);
           errorMessage.value = `無法獲取圖片 URL：${error.message}`;
        } finally {
           isUploading.value = false; 
        }
      }
    );
  };
  </script>
  
  <style scoped>
  /* 您可以在這裡添加一些樣式 */
  button {
    margin-left: 10px;
    padding: 5px 10px;
    cursor: pointer;
  }
  button:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
  progress {
    width: 200px;
    margin-right: 10px;
  }
  div {
    margin-top: 15px;
  }
  </style>