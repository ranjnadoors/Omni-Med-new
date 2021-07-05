$(document).ready(function () {

    $('.items').slick({
        dots: true,
        infinite: true,
        speed: 800,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
    //home page animation///
    AOS.init({
        offset: 300,
        duration: 1000
    });
    // Add active class to the current button (highlight it)
    var header = document.getElementById("medicine-box");
    var btns = header.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
});

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if ($(window).width() > 768) {
            if (scroll > 300) {
                $(".nav-position").css("background", "rgba(0, 0, 0, 0.5)");
            } else {
                $(".nav-position").css("background", "transparent");
            }
        }
    })
  
    if ($(window).width() < 769) {
        $('.nav-bg').css("background", "rgba(0, 0, 0, 0.5)");
        $('.nav-link').css("color","white");
        $(window).scroll(function () {
            var scrolls = $(window).scrollTop();
            if (scrolls > 300) {
                $(".nav-position").css("background", "rgba(0, 0, 0, 0.5)");
                $('.nav-bg').css("background", "rgba(0, 0, 0, 0.0)" + "color" , "white")
            }
        })
    }
  })