$(document).ready(function() {
    // toggle btn
    $('.navbar-toggler').click(function () {
        $('.navbar-toggler').toggleClass('change');
    });
    // sticky navbar less padding
    $(window).scroll(function () {

       let position = $(this).scrollTop();
       if (position >= 970) {
           $('.navbar').addClass('navbar-background');
           $('.navbar').addClass('fixed-top');
       }else{
           $('.navbar').removeClass('navbar-background');
           $('.navbar').removeClass('fixed-top');
       }


    });
    // smooth scroll
    $('.nav-item a, .header-link').click(function (link) {
       link.preventDefault();

       let target = $(this).attr('href');

       $('html, body').stop().animate({scrollTop: $(target).offset().top - 50}, 1000);
    });
// back to top
    $(window).scroll(function () {

        let position = $(this).scrollTop();
        if (position >= 718) {
            $('#back-to-top').addClass('scrollTop');
        }else{
            $('#back-to-top').removeClass('scrollTop');
        }
    });
    $('#back-to-top').click(function (link) {
        link.preventDefault();
        $('html, body').animate({scrollTop: 0}, 2000);
    });

    // Magnific popup
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
        gallery:{
            enabled:true
        }
        // other options

    });
});