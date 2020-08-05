/*----------ハンバーガーメニューとドロワーメニューの動き-------------*/
 document.addEventListener('DOMContentLoaded', function() {
   document.getElementById("humburger").addEventListener("click", function() {
   	this.classList.toggle("active");
   	document.getElementById("drow").classList.toggle("active");
   })
  });


/*------アンカークリック時×を戻してメニュー閉じる------------------*/
$(function(){
 $('#drow a[href^="#"]').on('click', function() {
 $("#humburger").removeClass("active");
   $("#drow").removeClass("active");
});
});


   /*-------------トップに戻るボタン------------------------*/
$(function() {
    var topBtn = $('.page-top');
    topBtn.hide();
    //スクロールが500に達したらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 500) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    //スクロールしてトップ
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0 }, 600);
        return false;
    });
});


/*----------------ページ内リンク　スムーズスクロール--------------*/
$(function(){
  $('a[href^="#"]').click(function(){
    // 移動先を35px下にずらす
    var adjust = 35;
    //スクロールのスピード
    var speed = 2000;
    //リンク元を取得
    var href= $(this).attr("href");
    //リンク先を取得
    var target = $(href == "#" || href == "" ? 'html' : href);
    //リンク先までの距離を取得
    var position = target.offset().top;
    //スムーススクロール
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});
