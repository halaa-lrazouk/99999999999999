 // إظهار القائمة الجانبية عند الضغط على زر الفتح
const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');

navbarShowBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.add('navbar-show'); // إضافة الكلاس لإظهار القائمة
});

navbarHideBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.remove('navbar-show'); // إزالة الكلاس لإخفاء القائمة
});

// تغيير صورة أيقونة البحث عند تغيير حجم النافذة
window.addEventListener('resize', changeSearchIcon);
function changeSearchIcon(){
    let winSize = window.matchMedia("(min-width: 1200px)");
    if(winSize.matches){
        document.querySelector('.search-icon img').src = "images/search-icon.png"; 
        // إذا كان عرض النافذة أكبر من 1200px، يتم استخدام صورة أيقونة البحث العادية
    } else {
        document.querySelector('.search-icon img').src = "images/search-icon-dark.png";
        // إذا كان العرض أقل من 1200px، يتم استخدام صورة أيقونة البحث الداكنة
    }
}
changeSearchIcon(); // استدعاء الدالة فوراً لضبط الأيقونة بناءً على الحجم الحالي

// إيقاف جميع الأنيميشن والانتقالات عند تغيير حجم النافذة
let resizeTimer;
window.addEventListener('resize', () =>{
    document.body.classList.add('resize-animation-stopper'); // إضافة كلاس لتعطيل الأنيميشن
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper'); // إزالة الكلاس بعد 400 مللي ثانية
    }, 400);
});
