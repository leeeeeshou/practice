<template>
<div class="page bd">
    <!--報紙title-->
    <div class="w-full bd h-40 flex">
        <div class="w-1/6 h-full relative">
            <div class="w-0 h-3/4 bd absolute right-0 top-1/2 -translate-y-1/2"></div>
        </div>
        <div class="w-4/6 h-full ">
            <div class="newspaper-title w-full h-5/6 text-8xl content-center">NEWSPAPER</div>
            <div class="w-full h-1/6"></div>
        </div>
        <div class="w-1/6 h-full relative">
            <div class="w-0 h-3/4 bd absolute left-0 top-1/2 -translate-y-1/2"></div>
        </div>
    </div>


</div>
</template>


<style scoped>
.bd{
    border: 1px solid #000;
}
.page{
    width: 100%;
    height: fit-content;
    margin-top: 20px;
    padding: 5px;
}
.content-center{
    display: flex;
    justify-content: center;
    align-items: center;
}
.newspaper-title{
    letter-spacing: 12px;
    font-weight: 550;
}
</style>