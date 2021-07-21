$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.go_to_top').css({
                'transform': 'translateY(0)'
            });
        } else {
            $('.go_to_top').css({
                'transform': 'translateY(80px)'
            });
        }
    });
    $(window).scroll(() => {
        let document_height = $(document).height();
        let window_height = $(window).height();
        let view_port = document_height - window_height;
        let scroll_position = $(window).scrollTop();
        let scrol_precent = (scroll_position / view_port) * 100;
        $('.indicator').css('width', scrol_precent + '%');
    });
    $(".p").not(":first").slideUp(0);
    $(".h1:first").addClass("acaredon_active");
    $(".h1:first").addClass(".border-top");
    $(".p:last-child").addClass("border-bottom ")
    $(".h1").click(function () {
        $(this).toggleClass("acaredon_active").siblings(".h1").removeClass("acaredon_active");
        $(this).next(".p").slideToggle("slow").siblings(".p").slideUp("slow");
    });







});


var slide = document.getElementsByClassName('slide');
var dot = document.getElementsByClassName('dot');
var prev = document.querySelector('.prev');
var next = document.querySelector('.next');
var n = 0;
var i;

function disno() {
    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = 'none';
    }
}

function no_active() {
    for (i = 0; i < dot.length; i++) {
        dot[i].classList.remove('active');
    }
}
next.addEventListener('click', function (e) {
    e.preventDefault();
    n++;
    if (n > slide.length - 1) {
        n = 0;
    }
    disno();
    no_active();
    slide[n].style.display = 'block';
    dot[n].classList.add('active');
});
prev.addEventListener('click', function (e) {
    e.preventDefault();
    n--;
    if (n < 0) {
        n = slide.length - 1;
    }
    disno();
    no_active();
    slide[n].style.display = 'block';
    dot[n].classList.add('active');
});
setInterval(function () {
    n++;
    if (n > slide.length - 1) {
        n = 0;
    }
    disno();
    no_active();
    slide[n].style.display = 'block';
    dot[n].classList.add('active');
}, 7000);


$(document).ready(function () {
    $(".dot").click(function () {
        disno();
        no_active();
        slide[$(this).index()].style.display = 'block';
        dot[$(this).index()].classList.add('active');
        n = $(this).index();
    });
});




















