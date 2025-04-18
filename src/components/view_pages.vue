<template>

    <div>
    <!-- 發文區域 -->

    <div class="bg-stone-100 p-5 border-2 border-stone-400 rounded-lg">
        <div class="w-full h-14 flex justify-between items-center gap-3">
            <input type="text" v-model="addName" placeholder="Name"  class="w-1/3 h-2/3 p-3 border border-stone-300 placeholder-stone-500 rounded-md">
            <input type="text" v-model="addTitle" placeholder="Title" class="w-1/3 h-2/3 p-3 border border-stone-300 placeholder-stone-500 rounded-md">
            <input type="file" @change="handleFileChange" accept="image" />
        </div>

        <textarea v-model="addContent" class="w-full p-3 border border-stone-300 rounded-md focus:ring-2 focus:ring-stone-500 focus:border-transparent resize-none mb-3 placeholder-stone-500" rows="3" placeholder="今天想分享些什麼...？"></textarea>

        <button @click="addData" class="w-full bg-stone-700 hover:bg-stone-800 text-white font-bold py-2 px-4 rounded-md border-b-4 border-stone-900 active:border-b-2 active:translate-y-px transition duration-150 ease-in-out">

  發佈文章

</button>
    <div v-if="progress !== null" class="progress-container">
        <div class="progress-bar" :style="{ width: progress + '%' }"></div>
      </div>
    </div>





    <!-- 文章列表 -->

    <div class="post-area">



        <!-- 測試文章 -->



        <article class="post-item bg-stone-100 p-4 border-2 border-stone-400 rounded-lg mb-6 break-inside-avoid cursor-pointer" @click="OpenDetailPost(post)">

            <div class="post-row w-full h-10 flex text-xs justify-start items-center gap-1.5">

                <div class="post-user w-7 h-7 rounded-full bg-cover bg-center"></div>

                <span>@yychou795</span>

            </div>

            <h3 class="text-lg font-bold text-stone-800 mb-2">高效率學習 Tailwind CSS</h3>

            <img src="https://picsum.photos/seed/post4/400/450" alt="文章圖片 4" class="w-full h-auto rounded-md mb-3 object-cover border border-stone-300">



            <div class="post-content text-sm">

                <p class="summary text-stone-600">Tailwind CSS 作為一個 Utility-First 的框架，改變了許多開發者的 CSS 編寫習慣。分享一些高效學習和應用的技巧...</p>



            </div>

            <hr class='my-4'>

            <div class="w-full flex justify-between items-center">

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="愛心圖示">

<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>

</svg>







                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgb(55, 48, 47)" aria-label="留言圖示">

<path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>

</svg>



                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgb(55, 48, 47)" aria-label="分享圖示">

<path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>

</svg>



            </div>

        </article>





        <!--v-for 開始-->

        <article class="post-row post-item bg-stone-100 p-4 border-2 border-stone-400 rounded-lg mt-6 break-inside-avoid cursor-pointer" @click="OpenDetailPost(post)" v-for="post in postsData">

            <div class="w-full h-10 flex text-xs justify-start items-center gap-1.5">

                <div class="post-user w-7 h-7 rounded-full bg-cover bg-center"></div>

                <span>@{{ post.name }}</span>
                <span class="hidden">{{post.post_time}}</span>
            </div>

            <h3 class="text-lg font-bold text-stone-800 mb-2">{{ post.title }}</h3>

            <img :src="post.pic" alt="文章圖片 1" class="w-full h-auto rounded-md mb-3 object-cover border border-stone-300">



            <div class="post-content text-sm">

                <p class="summary text-stone-600">{{ post.content }}</p>

            </div>

            <hr class='my-4'>

            <div class="w-full flex justify-between items-center">

                <div class='svgdiv'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-label="愛心圖示">

<path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>

</svg>



                    <div class="info-circle circle-solid">3</div>

                </div>



                <div class='svgdiv'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgb(55, 48, 47)" aria-label="留言圖示">

<path d="M21.99 4c0-1.1-.89-2-1.99-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h14l4 4-.01-18zM18 14H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>

</svg>

                    <div class="info-circle circle-hollow">9</div>

                </div>





                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="rgb(55, 48, 47)" aria-label="分享圖示">

<path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92z"/>

</svg>



            </div>

        </article>





        <!--v-for 結束-->







    </div>

</div>


</template>

<style scoped>

.bg-stone-100{
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    transition: 0.2s;
}

.bg-stone-100:hover {
    transform: translate(-5px, -5px);
    box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.6);
}

.post-area {
    margin-top: 10px;
    column-count: 1;
    column-gap: 1.5rem;
}

/* 中等螢幕：兩欄 (對應 Tailwind 的 md breakpoint) */

@media (min-width: 868px) {
    .post-area {
        column-count: 2;
    }
}

/* 大型螢幕：三欄 (對應 Tailwind 的 lg breakpoint) */

@media (min-width: 1160px) {
    .post-area {
        column-count: 3;
    }
}
.svgdiv {
    position: relative;
}

.info-circle {
    position: absolute;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 0.6rem;
    font-weight: 800;
    top: -3px;
    right: -3px;
}

.circle-solid {
    background-color: rgb(55, 48, 47);
    color: white;
}

.circle-hollow {
    background-color: #fff;
    border: 2px solid rgb(55, 48, 47);
    color: rgb(55, 48, 47);
}
.post-user {
    background-image: url("https://picsum.photos/seed/post1/400/300");
}

.progress-bar {
    height: 100%;
    background-color: #4caf50;
    border-radius: 5px;
  }
  .progress-container {
    width: 100%;
    height: 20px;
    background-color: #f3f3f3;
    border-radius: 5px;
    margin-top: 10px;
  }
  .post-content{
    max-height: 100px;
    overflow: hidden;
  }
</style>




<script setup>
import { defineProps,defineEmits,ref } from 'vue';
import { db,storage } from './firebase/config';
import { collection,addDoc } from 'firebase/firestore';
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

/*接收父組件傳過來的資料庫*/ 
const props = defineProps({
  postsData: {
    type: Array, // 期望接收的類型是陣列
    required: true, // 這個 prop 是必須的
    default: () => [] // 提供一個預設值，以防萬一父組件還沒傳遞過來
  }
});


/*把按下文章的事件傳到父組件，好用來更新父組件的canva顯示*/ 
const emit = defineEmits(['detail-visibility']);
const OpenDetailPost = (post) => {
  emit('detail-visibility',post);
}

/*上傳文章*/ 
 
const addName = ref('');
  const addTitle = ref('');
  const addContent = ref('');
  const addpic = ref(null); 
  const progress = ref(null); // 上傳進度
  
  

  const handleFileChange = (event) => {
    const file = event.target.files[0]; 
    addpic.value = file; 
  };
  
  
  const uploadImage = async (file) => {
    /*const storageReference = storageRef(storage, `images/${file.name}`);*/
    const storageReference = storageRef(storage, `images/${Date.now()}-${file.name}`);
    const uploadTask = uploadBytesResumable(storageReference, file);
  
    return new Promise((resolve, reject) => {
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const percent = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          progress.value = percent; 
  
        },
        (error) => {
          reject(error); 
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL); 
        }
      );
    });
  };
  

  const addData = async () => {
    const date = new Date();
    const month = date.getMonth() + 1, 
      day = date.getDate(),
      year = date.getFullYear(),
      hh = date.getHours(),
      mm = date.getMinutes();
  
    try {
      let imageURL = '';
      if (addpic.value) {
        imageURL = await uploadImage(addpic.value); 
      }
  
      
      await addDoc(collection(db, 'post'), {
        name: addName.value,
        title: addTitle.value,
        content: addContent.value,
        pic: imageURL, 
        post_time: `${year}-${month}-${day} ${hh}:${mm}` 
      });
  
      // 清空输入框
      alert('新增成功');
      addName.value = '';
      addTitle.value = '';
      addContent.value = '';
      addpic.value = null; 
      progress.value = null; 
    } catch (error) {
      console.error('Error adding document: ', error);
      alert('新增失败');
    }
  };
</script>