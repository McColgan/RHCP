$(document).ready(function(){
    // Nav-Icon Animation
    $('#nav_icon').click(function(){
        $('.nav_container').toggleClass('nav_container--open', 300);
        $(this).toggleClass('open');
    });
});