$(document).ready(function(){
    // Додати обробник кліку для всіх якорних посилань
    $('a[href^="#"]').on('click', function(event) {
        var target = $(this.getAttribute('href'));
        if( target.length ) {
            event.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000); // Плавна прокрутка триває 1 секунду
        }
    });
});

