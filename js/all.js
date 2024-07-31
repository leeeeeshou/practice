document.addEventListener("DOMContentLoaded", function() {

    const $target = $('.subbanner')[0];
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
               $('.DocumentImg').css('animation','show 1s forwards')
               
            } else {
                
            }
        });
    }, {
        root: null, // 使用视口作为容器
        rootMargin: '0px',
        threshold: 0.1 // 目标元素可见比例超过10%时触发回调
    });

    // 开始观察目标元素
    observer.observe($target);



    let i = 0 ;
   
$('.ham').click(function(){
    if(i%2==0){
    $('.ham-list').css('display','block');
    i=i+1}
else{
    $('.ham-list').css('display','none');
    i=i+1
}

})

})