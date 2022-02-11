(function ($) {
    'use strict';

    $('body').scrollspy({
        target: '.shahin_menu_part',
        offset: 81
    });


    //nave top js
    var nav_navbar = $('nav.navbar'),
        $window = $(window),
        navOffset = nav_navbar.offset().top;

    nav_navbar.wrap('<div class="nav-wrapper"></div>');
    $('.nav-wrapper').height(nav_navbar.outerHeight());
    $('.shahin_navbar li a').on('click', function () {
        $('.navbar-collapse').removeClass('in');
    });

    /*back to top js*/
    var offset = 230,
        duration = 1000,
        back_to_top = $('.back-to-top');

    $window.scroll(function () {
        var scrollPos = $window.scrollTop(),
            navbar_right = $('.navbar-right');

        if (scrollPos >= navOffset) {
            nav_navbar.addClass('navbar-fixed-top');
            navbar_right.css('margin-right', '0');
        } else {
            nav_navbar.removeClass('navbar-fixed-top');
            navbar_right.css('margin-right', '-15px');
        }

        if (scrollPos > offset) {
            back_to_top.fadeIn(duration);
        } else {
            back_to_top.fadeOut(duration);
        }

    });
    var html_body = $('html, body');
    back_to_top.on('click', function (event) {
        event.preventDefault();
        html_body.animate({
            scrollTop: 0
        }, duration);
        return false;
    });


    //animation scroll js
    $('a[href*="#"]:not([href="#').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
                return false;
            }
        }
    });

    // portfolio slick

    $('.portfolio-imag').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 2000,
        prevArrow: '.slidPrv2',
        nextArrow: '.slidNext2',
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
	},
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
	},
            {
                breakpoint: 481,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
	}
  ]
    });

    //portfolio lightbox

    $('.venobox').venobox({
        border: '5px',
    });


    //type text pluging

    var TxtRotate = function (el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtRotate.prototype.tick = function () {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

        var that = this;
        var delta = 300 - Math.random() * 100;

        if (this.isDeleting) {
            delta /= 2;
        }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function () {
            that.tick();
        }, delta);
    };

    window.onload = function () {
        var elements = document.getElementsByClassName('txt-rotate');
        for (var i = 0; i < elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-rotate');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
                new TxtRotate(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".txt-rotate > .wrap { border-right: 0.08em solid #f1f1f1 }";
        document.body.appendChild(css);
    };

    //head slider js
    $('#slid_item').skdslider({
        'delay': 5000,
        'animationSpeed': 2000,
        'showNextPrev': false,
        'showPlayButton': false,
        'autoSlide': true,
        'animationType': 'fading'
    });


    //autoplay js
    //slick slider js autoplay resent work//
    $('.auto_team').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerPadding: '50px',
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
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
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
    });

    //play_brand js
    //slick slider js autoplay resent work//
    $('.play_brand').slick({
        dots: false,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        centerPadding: '50px',
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
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
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
	  ]
    });

    //countDown js
    function countDownF(selector, date) {
        selector.countdown(date, function (event) {
            $(this).html(event.strftime('<div class="col-md-3 col-xs-6 col-sm-3"><h6>%D <br> days</h6></div><div class="col-md-3 col-xs-6 ma_r col-sm-3"><h6>%H <br> hours</h6></div><div class="col-md-3 col-xs-6 col-sm-3"><h6>%M <br> min</h6></div><div class="col-sm-3 col-md-3 col-xs-6"><h6>%S<br>sec</h6></div>'));
        });
    }
    countDownF($('.countDown1'), '2018/04/25');
    countDownF($('.countDown2'), '2018/04/24');
    countDownF($('.countDown3'), '2018/04/26');

    var options = {
        videoId: 'PeWXdkEUPbo',
        start: 3
    };
    $('#video_bg').tubular(options);


})(jQuery);