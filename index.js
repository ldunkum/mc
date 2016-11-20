var clicked = true;
$(".one").on('click', function () {
    if (clicked) {
        clicked = false;
        $(".two").css({"top": 0});
    } else {
        clicked = true;
        $(".two").css({"top": "-40px"});
    }
});