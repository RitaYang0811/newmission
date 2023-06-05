$(document).ready(function () {
  console.log('bbb');
    // 參考每日任務
    $('.backtotop').click(function (e) {
      e.preventDefault();
      $('html,body').animate(
        {
          scrollTop: 0,
        },
        2000
      );
    });

    $('.QA-list').click(function(e) {
      console.log('aaaaaa');

      $(this).toggleClass('active');
      $(this).find('.add-icon').toggleClass('d-none');
      $(this).find('.remove-icon').toggleClass('d-block');
      $(this).find('.QA-list-content p').toggleClass('show');
    });


          // 開起選單
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
        376:{
            slidesPerView:3,
            slidesPerGroup:3,
        },
    },
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    },
});










