$(document).ready(function () {
    //蓋板menu
    $('.header-icon').click(function(e) {
      console.log('icon');
      // $(this).toggleClass('active');
      $(this).find('.icn-menu').toggleClass('d-none');
      $(this).find('.icn-close').toggleClass('d-block');
      $('.menu').find('.menu-xl').toggleClass('show');
      $('body').find('main').toggleClass('d-none');
      $('.header-banner').toggleClass('none');
      $('.start-btn').toggleClass('none');
      $('.footer-cta').toggleClass('none');
      $('.footer-btn').toggleClass('none');
      $('.footer-menu-top').toggleClass('none');
      $('.backtotop').toggleClass('none');


      
      
      
    });


    
    // 回到上方
    $('.backtotop').click(function (e) {
      console.log('bttop');
      e.preventDefault();
      $('html,body').animate(
        {
          scrollTop: 0,
        },
        2000
      );
    });

    // QA列表展開
    $('.QA-list').click(function(e) {
      console.log('QA');
      $(this).toggleClass('active');
      $(this).find('.add-icon').toggleClass('d-none');
      $(this).find('.remove-icon').toggleClass('d-block');
      $(this).find('.QA-list-content p').toggleClass('show');
    });
    //左邊開啟選單
    $('.select-btn').click(function(e) {
      $('.select-menu').toggleClass('show');
    });


    // 右邊開起選單
    $('.dropdown-btn').click(function(e) {
      $('.dropdown-menu').toggleClass('show');
    });
    // 切換按鈕文字
    $('.new-to-old').click(function(e) {
      e.preventDefault();
      $('.dropdown-menu').toggleClass('show');
      $('.dropdown-btnText').text('由新到舊');
    });
    $('.old-to-new').click(function(e) {
      e.preventDefault();
      $('.dropdown-menu').toggleClass('show');
      $('.dropdown-btnText').text('由舊到新');
    });
      // .text() 運用：https://www.w3schools.com/jquery/html_text.asp


});
  
const swiper = new Swiper('.swiper', {
    slidesPerView:1,
    spaceBetween:24,
    breakpoints:{
        769:{
            slidesPerView:3,
            slidesPerGroup:3,
        },
    },
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },
});










