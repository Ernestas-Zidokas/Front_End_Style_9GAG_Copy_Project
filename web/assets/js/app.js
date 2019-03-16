$(function() {

    $('.star-hover svg').on('click', function() {
        $(this).toggleClass('star');
        $('.star-hover').hover(function () {
            $(this).toggleClass('star-hover');
        })
    })
})
