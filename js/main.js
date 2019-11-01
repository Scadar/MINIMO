$(function(){

  $('.load-more').on('click', function(){
    const btn = $(this);
    const loader = btn.find('span');
    $.ajax({
      url: '/data.html',
      type: "POST",
      beforeSend: function(){
        btn.attr('disabled', true);
        loader.addClass('d-inline-block');
      },
      success: function(responce){
        setTimeout(function(){
          loader.removeClass('d-inline-block');
          btn.attr('disabled',false);
          $('.after-posts').before(responce);
        }, 1000);
      },
      error:function(){
        btn.attr('disabled',false);
        loader.removeClass('d-inline-block');
        alert('Error!');
      }
    });
  });
});
// $(document).on('scroll',function(){
//   if($(window).scrollTop() === 0){
//     $("header").removeClass("fixed");
//   }else{
//     $("header").attr("class", "fixed");
//   }
// });
