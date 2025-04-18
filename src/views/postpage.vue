<template>
    
    <link rel="preconnect" href="https://fonts.googleapis.com">
    
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&display=swap" rel="stylesheet">
    
    
    
    <div class="container w-full mx-auto sm:px-6">
    <!---詳細的文章展示--->
        <div class="postcanva w-full h-full fixed left-0 top-0 z-30" v-show="isDteailPostOpen" @click="detailToggle"></div>
        <!---詳細的文章上方，PO文者、時間--->
        <div class="w-1/2 h-2/3 fixed bg-white rounded-lg top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 overflow-hidden z-50" v-show="isDteailPostOpen">
                <div class="w-full h-16 relative pl-5">
                    <div class="w-full h-full flex justify-start items-center gap-3"> <div class="post-user w-10 h-10 rounded-full"></div><p>@{{ detailName }}</p><p>{{ detailtime }}</p></div>
                    <div class="w-4/5 h-0 bd absolute bottom-0 left-1/2 -translate-x-1/2 opacity-10"></div>
                    <div class="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-lg" v-show="IsChangPost">文章修改中....</div>
                </div>
                <!---詳細的文章下方--->
                <div class="detail-content w-full flex p-3">
                    <!---詳細的文章圖片展示--->
                <label for="changfile" class="w-1/2 h-full overflow-hidden shadow-black shadow-md rounded-md cursor-pointer relative">
                    <input name="changfile" id="changfile" type="file" accept="image" class="w-0 h-0 opacity-0" @change="FileChange" v-if="IsChangPost">

                        
                    <div class="w-full h-full bg-center":style="{ backgroundImage: 'url(' + detailPic + ')' }"></div>
                </label>
                <!---詳細的文章內文--->
                    <div class="w-1/2 h-full p-5">
                        <h3 class="w-full h-1/6 text-2xl pl-5" v-show="!IsChangPost">{{ detailTitle }}</h3>
                        <input type="text" class="w-full h-1/6 text-2xl pl-5" placeholder="title" v-show="IsChangPost" v-model="detailTitle">

                        <textarea class="w-full h-4/6 resize-none p-5" :readonly="!IsChangPost" v-model="detailContent"></textarea>
                        <div class="w-full h-1/6 flex justify-around items-center">
                            <button class="w-1/3 h-1/2 bd" @click="startChangPost" v-show="!IsChangPost">修改文章</button>
                            <button class="w-1/3 h-1/2 bd" @click="comfirmcChange" v-show="IsChangPost">確認修改</button>
                            <button class="w-1/3 h-1/2 bd"@click="startChangPost" v-show="IsChangPost" >取消修改</button>
                            <button class="w-1/3 h-1/2 bd" @click="deletePost" v-show="!IsChangPost">刪除文章</button>
                        </div>
                    </div>
                </div>

            </div>
    
    
    
        <div class="post-detail w-2/3 h-2/3 bg-slate-50 fixed left-1/2 top-1/2 flex items-center overflow-hidden z-50" v-show="IsOpenPost">
    
            <div class="post-detail-pic w-1/2 h-full"></div>
    
            <div class="post-detail-textarea w-1/2 h-full bg-fuchsia-100 flex flex-col justify-around">
    
                <h2 class="text-lg">This is a Title</h2>
    
                <textarea name="" id="" class="w-full h-48 overflow-auto resize-none" readonly>這是文章詳情</textarea>
    
                <div class="messageArea w-full h-40 bg-slate-400 ">
    
                    <div class="messageRow h-20 flex justify-start items-center gap-3">
    
                        <div class="post-user w-10 h-10 rounded-full"></div>
                        <div class="message bg-white w-4/5 h-full">
                          <a href="">OOXX</a>
                          <textarea name="" id="" class="w-full h-20 resize-none"></textarea>
                        </div>
    
                    </div>
    
    
    
    
    
                    <div class="messageInputRow w-full h-20 flex justify-around items-center bg-orange-100 relative">
    
                        <div class="post-user w-14 h-14 rounded-full"></div>
    
                        <textarea type="text" name="" id="" class="w-4/5 h-2/3 bg-transparent rounded-full pl-5 pt-4 resize-none" placeholder="留個言吧"></textarea>
    
                        <button class="w-12 h-12 absolute bg-white rounded-full right-8 flex items-center justify-center">
    
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
    
                            <line x1="22" y1="2" x2="11" y2="13"></line>
    
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
    
                          </svg>
    
                        </button>
    
                    </div>
    
                </div>
    
            </div>
    
    
    
    
    
        </div>
    
    
    
    
    
        <div class="flex flex-col md:flex-row md:gap-10 max-w-screen-2xl justify-center pt-5">
    
    
    
            <!-- ========== 左側：個人資訊 ========== -->
    
            <aside class="w-full md:w-64 flex-shrink-0 mb-6 md:mb-0">
    
                <div class="bg-stone-100 p-5 border-2 border-stone-400 rounded-lg sticky top-8">
    
                    <div class="flex flex-col items-center mb-4">
    
                        <!-- 替換成實際圖片路徑 -->
    
                        <img class="w-24 h-24 rounded-full border-4 border-stone-700 mb-3 object-cover" src="https://via.placeholder.com/150/A98D73/FFFFFF?text=頭像" alt="個人頭像">
    
                        <h2 class="text-xl font-bold text-stone-900">用戶名稱</h2>
    
                        <p class="text-sm text-stone-600">@yonghu_zhanghao</p>
    
                    </div>
    
                    <hr class="border-t-2 border-stone-300 my-4">
    
                    <div class="space-y-2 text-center text-sm">
    
                        <p><strong class="text-stone-800">1,234</strong> <span class="text-stone-600">追蹤者</span></p>
    
                        <p><strong class="text-stone-800">567</strong> <span class="text-stone-600">正在追蹤</span></p>
    
                        <p><strong class="text-stone-800">890</strong> <span class="text-stone-600">文章</span></p>
    
                    </div>
    
                    <hr class="border-t-2 border-stone-300 my-4">
    
                    <p class="text-sm text-stone-700 text-center mt-4">
    
                        這裡放置個人簡介。扁平化風格，線條加粗，以褐色為主色調。
    
                    </p>
    
    
    
                </div>
    
    
    
                <!--左邊下面-->
    
                <!-- ... (個人頭像、名稱、統計數據、簡介) ... -->
    
    
    
                <nav class="space-y-2 border-2 border-stone-400 rounded-lg bg-stone-100 mt-16">
    
                    <ul>

                        <li @click="showPosts">
    
                            <a href="#" class="flex items-center space-x-2 text-stone-700 hover:text-stone-900 hover:bg-stone-200 p-2 rounded-md transition duration-150">

        <!-- 可選：圖示 -->

                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">

                                    <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4"></path> 
                                    <path d="M12 18h6"></path> 
                                    <path d="M12 14h6"></path> <path d="M12 10h6"></path> <path d="M12 6h6"></path>  <path d="M8 6h1"></path>  
                                    <path d="M8 10h1"></path> 
                                    <path d="M8 14h1"></path> 
                                    <path d="M8 18h1"></path>

                                </svg>

                                <span class="font-semibold">文章列表</span>

                            </a>

                        </li>
    
                        <li>
    
                            <a href="#" class="flex items-center space-x-2 text-stone-700 hover:text-stone-900 hover:bg-stone-200 p-2 rounded-md transition duration-150">
    
                                <!-- 可選：圖示 -->
    
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    
                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    
                  </svg>
    
                                <span class="font-semibold">我的設定</span>
    
                            </a>
    
                        </li>
    
                        <li>
    
                            <a href="#" class="flex items-center space-x-2 text-stone-700 hover:text-stone-900 hover:bg-stone-200 p-2 rounded-md transition duration-150">
    
                                <!-- 可選：圖示 -->
    
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
    
                  </svg>
    
                                <span class="font-semibold">我的珍藏</span>
    
                            </a>
    
                        </li>
    
                        <li>
    
                            <a href="#" class="flex items-center space-x-2 text-stone-700 hover:text-stone-900 hover:bg-stone-200 p-2 rounded-md transition duration-150">
    
                                <!-- 數據分析圖示 -->
    
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
    
                  </svg>
    
                                <span class="font-semibold">內容數據分析</span>
    
                            </a>
    
                        </li>
    
                        <li>
    
                            <a href="#" class="flex items-center space-x-2 text-stone-700 hover:text-stone-900 hover:bg-stone-200 p-2 rounded-md transition duration-150">
    
                                <!-- 意見回饋圖示 -->
    
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    
                    <path stroke-linecap="round" stroke-linejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    
                  </svg>
    
                                <span class="font-semibold">意見回饋</span>
    
                            </a>
    
                        </li>
    
                        <li>
    
                            <a href="#" class="flex items-center space-x-2 text-stone-700 hover:text-stone-900 hover:bg-stone-200 p-2 rounded-md transition duration-150">
    
                                <!-- 可選：圖示 -->
    
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    
                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
    
                  </svg>
    
                                <span class="font-semibold">登出</span>
    
                            </a>
    
                        </li>
    
                    </ul>
    
                </nav>
    
    
    
            </aside>
    
    
    
            <!-- ========== 中間：文章列表 & 發文 ========== -->
    
            <main class="w-full md:flex-1 md:max-w-xl lg:max-w-2xl space-y-6 mb-6 md:mb-0">
                <view_pages :postsData="posts" v-show="IsShowPosts" @detail-visibility="detailToggle"/>

    
            </main>
    
    
    
            <!-- ========== 右側：其他資訊 ========== -->
    
            <aside class="w-full md:w-64 flex-shrink-0 hidden md:block">
    
                <div class="bg-stone-100 p-5 border-2 border-stone-400 rounded-lg sticky top-8 space-y-6">
    
    
    
                    <div>
    
                        <h3 class="text-lg font-bold text-stone-900 border-b-2 border-stone-300 pb-2 mb-4">您可能認識的朋友</h3>
    
                        <ul class="space-y-4">
    
                            <!-- 建議用戶 1 -->
    
                            <li class="flex items-center justify-between">
    
                                <div class="flex items-center space-x-3">
    
                                    <img class="w-10 h-10 rounded-full border-2 border-stone-600 object-cover" src="https://via.placeholder.com/40/A98D73/FFFFFF?text=C" alt="建議用戶頭像">
    
                                    <div>
    
                                        <p class="font-semibold text-stone-800 text-sm">建議用戶C</p>
    
                                        <p class="text-xs text-stone-500">共同朋友 5 人</p>
    
                                    </div>
    
                                </div>
    
                                <button class="text-xs bg-stone-600 hover:bg-stone-700 text-white font-semibold py-1 px-3 rounded-md transition duration-150">追蹤</button>
    
                            </li>
    
                            <!-- 建議用戶 2 -->
    
                            <li class="flex items-center justify-between">
    
                                <div class="flex items-center space-x-3">
    
                                    <img class="w-10 h-10 rounded-full border-2 border-stone-600 object-cover" src="https://via.placeholder.com/40/CDBAAB/FFFFFF?text=D" alt="建議用戶頭像">
    
                                    <div>
    
                                        <p class="font-semibold text-stone-800 text-sm">建議用戶D</p>
    
                                        <p class="text-xs text-stone-500">來自您的聯絡人</p>
    
                                    </div>
    
                                </div>
    
                                <button class="text-xs bg-stone-600 hover:bg-stone-700 text-white font-semibold py-1 px-3 rounded-md transition duration-150">追蹤</button>
    
                            </li>
    
                            <!-- 建議用戶 3 -->
    
                            <li class="flex items-center justify-between">
    
                                <div class="flex items-center space-x-3">
    
                                    <img class="w-10 h-10 rounded-full border-2 border-stone-600 object-cover" src="https://via.placeholder.com/40/B0A091/FFFFFF?text=E" alt="建議用戶頭像">
    
                                    <div>
    
                                        <p class="font-semibold text-stone-800 text-sm">建議用戶E</p>
    
                                        <p class="text-xs text-stone-500">熱門創作者</p>
    
                                    </div>
    
                                </div>
    
                                <button class="text-xs bg-stone-600 hover:bg-stone-700 text-white font-semibold py-1 px-3 rounded-md transition duration-150">追蹤</button>
    
                            </li>
    
                        </ul>
    
                    </div>
    
    
    
                    <div>
    
                        <h3 class="text-lg font-bold text-stone-900 border-b-2 border-stone-300 pb-2 mb-4">熱門話題</h3>
    
                        <ul class="space-y-2 text-sm">
    
                            <li class="text-stone-700 hover:text-stone-900 cursor-pointer transition duration-150">#科技新知</li>
    
                            <li class="text-stone-700 hover:text-stone-900 cursor-pointer transition duration-150">#扁平化設計</li>
    
                            <li class="text-stone-700 hover:text-stone-900 cursor-pointer transition duration-150">#週末去哪兒</li>
    
                            <li class="text-stone-700 hover:text-stone-900 cursor-pointer transition duration-150">#Tailwind學習</li>
    
                        </ul>
    
                    </div>
    
                </div>
    
            </aside>
    
    
    
        </div>
    
    </div>
</template>
  
<style scoped>
* {
    box-sizing: border-box;
    font-family: "Noto Sans TC", sans-serif;
}

.bd{
    border: 1px solid #000;
}
.container {
    border: 0px solid #000;
}

.bg-stone-100 {
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    transition: 0.2s;
}

.bg-stone-100:hover {
    transform: translate(-5px, -5px);
    box-shadow: 7px 7px 7px rgba(0, 0, 0, 0.6);
}

/*文章詳情*/

.postcanva {
    background-color: rgba(0, 0, 0, 0.6);
}

.post-detail {
    transform: translate(-50%, -50%);
    border-radius: 0px 20px 0px 0px;
}




.post-user {
    background-image: url("https://picsum.photos/seed/post1/400/300");
}

.post-row span {
    opacity: 0.6;
    cursor: pointer;
}

.post-row span:hover {
    opacity: 1;
}

.detail-content{
    height: calc(100% - 64px);
}
.bg-center{
    background-size: contain;
    background-position: 50% 50%;
    background-repeat: no-repeat;
}

</style>
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'; // 引入 onMounted 和 onUnmounted
import { db,storage } from '@/components/firebase/config'; // 確保路徑正確
import { collection, query, orderBy, onSnapshot,doc,updateDoc,deleteDoc } from 'firebase/firestore'; // 引入所需函數
import view_pages from '@/components/view_pages.vue';
import { ref as storageRef, uploadBytesResumable, getDownloadURL } from 'firebase/storage';



const posts = ref([]);
let unsubscribe = null;

onMounted(() => {
  const postsCollection = collection(db, 'post');
  const q = query(postsCollection, orderBy('post_time', 'desc'));

  console.log("Setting up Firestore listener...");
  unsubscribe = onSnapshot(q, (querySnapshot) => {
    const updatedPosts = [];
    querySnapshot.forEach((doc) => {
      updatedPosts.push({ id: doc.id, ...doc.data() });
    });
    posts.value = updatedPosts; // 直接更新 posts ref
    console.log("Posts updated via onSnapshot:", posts.value.length);
  }, (error) => {
    console.error("Error listening to posts collection: ", error);
    // 可以在這裡添加一些錯誤處理邏輯，比如用戶提示
  });
});

// 在組件卸載時取消監聽
onUnmounted(() => {
  if (unsubscribe) {
    console.log("Unsubscribing from Firestore listener.");
    unsubscribe(); // 調用取消函數
  }
});




/*用左側的按鈕打開文章列表*/ 
const IsShowPosts=ref(false)
const showPosts=()=>{
    IsShowPosts.value=!IsShowPosts.value
}

/*打開文章詳情*/ 
const isDteailPostOpen=ref(false)
const detailToggle = (post) => {
    isDteailPostOpen.value = !isDteailPostOpen.value;
    if (post) {
    detailPic.value = post.pic; 
    detailTitle.value = post.title; 
    detailContent.value = post.content; 
    detailtime.value=post.post_time;
    detailName.value=post.name
    detailid.value=post.id
  }
}

/*文章詳情展示*/ 
const detailPic=ref(),
        detailTitle=ref(),
        detailContent=ref(),
        detailid=ref(),
        detailtime=ref(),
        detailName=ref()

/*修改文章*/
const IsChangPost=ref(false)
    /*開始修改*/
const startChangPost=()=>{
    IsChangPost.value=!IsChangPost.value
}



const selectedFile = ref(null);
const FileChange = (event) => {
    const file = event.target.files[0]; // 获取选择的文件
    if (file) {
    selectedFile.value = file; // 儲存實際的檔案物件
    detailPic.value = URL.createObjectURL(file); // 仍然建立 URL 用於預覽
  } else {
    selectedFile.value = null;
  }
  };



  const uploadChangImage = async (file) => {
     const storageReference = storageRef(storage, `images/${file.name}`);
         const uploadTask = uploadBytesResumable(storageReference, file);

         return new Promise((resolve, reject) => {
            uploadTask.on(
              // 注意：這裡省略了 state_changed 回呼函式

              (error) => {
                   // 第二個參數是錯誤處理函式 (必要)
                   console.error("圖片上傳失敗:", error); // 可以加上 console.error 幫助除錯
                   reject(error);
              },
              async () => {
                   // 第三個參數是完成處理函式 (必要)
                   const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    console.log("圖片上傳成功，下載 URL:", downloadURL); // 成功提示
                   resolve(downloadURL);
              }
            );
         });
     };


const comfirmcChange=async()=>{
const docRef=doc(db,'post',detailid.value)

try {
    let imageURL = detailPic.value; 

   
    if (selectedFile.value) {
      console.log("正在上傳新圖片...");
      imageURL = await uploadChangImage(selectedFile.value); 
      console.log("新圖片上傳完成。URL:", imageURL);
    } else {
         console.log("沒有選擇新圖片，使用現有 URL。");
    }

await updateDoc(docRef,{
    title:detailTitle.value,
    content:detailContent.value,
    pic: imageURL,
}).then(
    alert('修改成功喔'),
    IsChangPost.value=!IsChangPost.value
)
} catch (error) {
      console.error('Error adding document: ', error);
      alert('變更失败');
    } finally {
      selectedFile.value = null; 
  }
}
/*刪除資料*/
const deletePost=async()=>{
await deleteDoc(doc(db,'post',detailid.value)).then(()=>{
    alert('文章已刪除')
    isDteailPostOpen.value = !isDteailPostOpen.value;
})
}




  
</script>