
$(window).on('load', function (e) {
    $('#navMenu li > a').click(function() {
        $('li').removeClass("active");
        $(this).parent().addClass('active');
    });

})

  $(".nav-link").on('click', function(e) {
     e.preventDefault();
     var target = $(this).attr('href');
     $('html, body').animate({
       scrollTop: ($(target).offset().top)
     }, 2000);
  });