$(window).on("load", function () {

    "use strict";

    /* ===================================
            Loading Timeout
     ====================================== */

    setTimeout(function(){
        $('.preloader').fadeOut();

        $('.cd-transition-layer').addClass('closing').delay(1000).queue(function(){
            $(this).removeClass("visible closing opening").dequeue();
        });

    }, 1000);

});

jQuery(function ($) {


    "use strict";

    /* =====================================
                    speaker  carousel
        ====================================== */

        $('#app-slider').owlCarousel({

            loop: true,
            margin: 0,
            slideSpeed: 5000,
            slideTransition: 'linear',
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 8000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                },
                1500: {
                    items: 1
                },
            }
    
        });
    
        $('.app-clips-slider').owlCarousel({
    
            loop: true,
            margin: 20,
            slideSpeed: 5000,
            slideTransition: 'linear',
            nav: false,
            dots: false,
            autoplay: true,
            autoplayTimeout: 8000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 4
                },
                1500: {
                    items: 4
                },
            }
    
        });
    

    /* ===================================
         Scroll
    ====================================== */


    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 220) { // Set position from top to add class
            $('header').addClass('header-appear');
        }
        else {
            $('header').removeClass('header-appear');
        }
    });

    //scroll to appear
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 500)
            $('.scroll-top-arrow').fadeIn('slow');
        else
            $('.scroll-top-arrow').fadeOut('slow');
    });

    //Click event to scroll to top
    $(document).on('click', '.scroll-top-arrow', function () {
        $('html, body').animate({scrollTop: 0}, 800);
        return false;
    });

    $(".scroll").on("click", function (event) {
        event.preventDefault();
        $("html,body").animate({
            scrollTop: $(this.hash).offset().top - 60}, 1200);
    });


    $('.count').each(function () {
        $(this).appear(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 3000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
    });

    /* ===================================
      Rotating Text
      ====================================== */

    if ($(".js-rotating").length) {
        $(".js-rotating").Morphext({
            // The [in] animation type. Refer to Animate.css for a list of available animations.
            animation: "flipInX",
            // An array of phrases to rotate are created based on this separator. Change it if you wish to separate the phrases differently (e.g. So Simple | Very Doge | Much Wow | Such Cool).
            separator: ",",
            // The delay between the changing of each phrase in milliseconds.
            speed: 3000,
            complete: function () {
                // Called after the entrance animation is executed.
            }
        });
    }


    /* ===================================
      Side Menu
     ====================================== */

    $("#full-menu-1").on("click", function () {
        $(this).toggleClass("active");
        $(".nav-holder").toggleClass("active");
        $("body").toggleClass("overflow-hidden");
    }), $(".nav-holder.main,.fullnav-close").on("click", function () {
        $("#full-menu-1.active").removeClass("active");
        $(".nav-holder").removeClass("active");
        $("body").removeClass("overflow-hidden");
    }),$(".nav-holder.alt").on("click", function (e) {
        if(!$(e.target).hasClass('link')){
            $("#full-menu-1.active").removeClass("active");
            $(".nav-holder").removeClass("active");
            $("body").removeClass("overflow-hidden");
        }});

    /* ===================================
      Animated Cursor
   ====================================== */

    function animatedCursor() {

        if ($("#aimated-cursor").length) {

            var e = {x: 0, y: 0}, t = {x: 0, y: 0}, n = .25, o = !1, a =    document.getElementById("cursor"),
                i = document.getElementById("cursor-loader");
            TweenLite.set(a, {xPercent: -50, yPercent: -50}), document.addEventListener("mousemove", function (t) {
                var n = window.pageYOffset || document.documentElement.scrollTop;
                e.x = t.pageX, e.y = t.pageY - n
            }), TweenLite.ticker.addEventListener("tick", function () {
                o || (t.x += (e.x - t.x) * n, t.y += (e.y - t.y) * n, TweenLite.set(a, {x: t.x, y: t.y}))
            }),
                $(".animated-wrap").mouseenter(function (e) {
                    TweenMax.to(this, .3, {scale: 2}), TweenMax.to(a, .3, {
                        scale: 2,
                        borderWidth: "1px",
                        opacity: .2
                    }), TweenMax.to(i, .3, {
                        scale: 2,
                        borderWidth: "1px",
                        top: 1,
                        left: 1
                    }), TweenMax.to($(this).children(), .3, {scale: .5}), o = !0
                }),
                $(".animated-wrap").mouseleave(function (e) {
                    TweenMax.to(this, .3, {scale: 1}), TweenMax.to(a, .3, {
                        scale: 1,
                        borderWidth: "2px",
                        opacity: 1
                    }), TweenMax.to(i, .3, {
                        scale: 1,
                        borderWidth: "2px",
                        top: 0,
                        left: 0
                    }), TweenMax.to($(this).children(), .3, {scale: 1, x: 0, y: 0}), o = !1
                }),
                $(".animated-wrap").mousemove(function (e) {
                    var n, o, i, l, r, d, c, s, p, h, x, u, w, f, m;
                    n = e, o = 2, i = this.getBoundingClientRect(), l = n.pageX - i.left, r = n.pageY - i.top, d = window.pageYOffset || document.documentElement.scrollTop, t.x = i.left + i.width / 2 + (l - i.width / 2) / o, t.y = i.top + i.height / 2 + (r - i.height / 2 - d) / o, TweenMax.to(a, .3, {
                        x: t.x,
                        y: t.y
                    }), s = e, p = c = this, h = c.querySelector(".animated-element"), x = 20, u = p.getBoundingClientRect(), w = s.pageX - u.left, f = s.pageY - u.top, m = window.pageYOffset || document.documentElement.scrollTop, TweenMax.to(h, .3, {
                        x: (w - u.width / 2) / u.width * x,
                        y: (f - u.height / 2 - m) / u.height * x,
                        ease: Power2.easeOut
                    })
                }),
                $(".hide-cursor,.btn,.tp-bullets").mouseenter(function (e) {
                    TweenMax.to("#cursor", .2, {borderWidth: "1px", scale: 2, opacity: 0})
                }), $(".hide-cursor,.btn,.tp-bullets").mouseleave(function (e) {
                TweenMax.to("#cursor", .3, {borderWidth: "2px", scale: 1, opacity: 1})
            }),$(".link").mouseenter(function (e) {
                TweenMax.to("#cursor", .2, {
                    borderWidth: "0px",
                    scale: 3,
                    backgroundColor: "rgba(255, 255, 255, 0.27)",
                    opacity: .15
                })
            }), $(".link").mouseleave(function (e) {
                TweenMax.to("#cursor", .3, {
                    borderWidth: "2px",
                    scale: 1,
                    backgroundColor: "rgba(255, 255, 255, 0)",
                    opacity: 1
                })
            })

        }

    }
    if ($(window).width() > 991) {
        setTimeout(function () {
            animatedCursor();
        }, 1000);
    }


    /* ===================================
        WOW Animation
     ====================================== */

    if ($(window).width() > 991) {
        var wow = new WOW({
            boxClass: 'wow',
            animateClass: 'animated',
            offset: 0,
            mobile: false,
            live: true
        });
        new WOW().init();
    }

    /* ===================================
       Owl Carousel
      ====================================== */

    //Testimonial Slider

    $("#testimonial-slider").owlCarousel({
        items: 1,
        loop: true,
        nav: false,
        autoplay: true,
        dots: true,
        dotsContainer: "#testimonials-avatar",
        autoplayTimeout: 6000,
        responsive: {
            1280: {
                items: 1,
            },
            600: {
                items: 1,
            },
            320: {
                items: 1,
            },
        }
    });


    $('[data-position]').each(function () {
       var position = $(this).data('position').split(',')
      $(this).css({top: position[0], right: position[1], bottom: position[2], left: position[3]})
    });


    $('.partners-slider').owlCarousel({
        items: 5,
        autoplay: 1500,
        smartSpeed: 1500,
        autoplayHoverPause: true,
        slideBy: 1,
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        responsive: {
            1200: {
                items: 4,
            },
            768: {
                items: 3,
            },
            480: {
                items: 2,
            },
            320: {
                items: 1,
            },
        }
    });


function dotCanvas(){
    var $blocks = $('[data-dots]');
    $blocks.each(function() {
        var $block = $(this);
        var block = $block[0];
        var $canvas = $("<canvas/>").appendTo($block);
        var canvas = $canvas[0];
        var width = $block.width();
        var height = $block.height();
        var ctx = canvas.getContext('2d');
        ctx.width = width;
        ctx.height = height;
        var devicePixelRatio = window.devicePixelRatio || 1,
            backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
        var ratio = devicePixelRatio / backingStoreRatio;
        canvas.width = width * ratio;
        canvas.height = height * ratio;
        ctx.scale(ratio, ratio);
        var mouseX = undefined;
        var mouseY = undefined;

        function Circle(x, y) {
            this.x = x;
            this.y = y;
            this.distance = 7;
            this.radians = 0;
            this.draw = function() {
                ctx.beginPath();
                ctx.strokeStyle = 'rgba(151, 151, 151, .28)';
                ctx.moveTo(this.x + 3, this.y);
                ctx.lineTo(this.x + 3, this.y + 6);
                ctx.moveTo(this.x, this.y + 3);
                ctx.lineTo(this.x + 6, this.y + 3);
                ctx.stroke();
            };
            this.update = function() {
                if (mouseX > -1) {
                    var k1 = mouseY - y;
                    var k2 = mouseX - x;
                    var tan = k1 / k2;
                    var yrad = Math.atan(tan);
                    if (mouseX < x) {
                        yrad = Math.PI - Math.atan(-tan);
                    }
                    this.x = x + Math.cos(yrad) * this.distance;
                    this.y = y + Math.sin(yrad) * this.distance;
                }
                this.draw();
            };
        };
        var circlesArray = [];
        var gutter = 35;
        var countW = Math.floor(width / gutter);
        var countH = Math.floor(height / gutter);
        var len = countW * countH;
        for (var i = 0; i < countH; i++) {
            for (var t = 0; t < countW; t++) {
                var x = gutter * t;
                var y = gutter * i;
                circlesArray.push(new Circle(x, y));
            }
        }
        var loop = function() {
            ctx.clearRect(0, 0, ctx.width, ctx.height);
            for (var i = 0; i < circlesArray.length; i++) {
                circlesArray[i].update();
            }
        };
        document.addEventListener('mousemove', function(e) {
            var parentOffset = $(canvas).parent().offset();
            var relX = e.pageX - parentOffset.left;
            var relY = e.pageY - parentOffset.top;
            mouseX = relX;
            mouseY = relY;
            ctx.clearRect(0, 0, ctx.width, ctx.height);
            for (var i = 0; i < circlesArray.length; i++) {
                circlesArray[i].update();
            }
            loop();
        });
        loop();
    });
}

    if ($(window).width() > 991) {

        dotCanvas();
    }



    /*--------------------------------------------------
        Smoke Effect
    ---------------------------------------------------*/

    function smokeeffect () {

        var frameProportion = 1.78, //png frame aspect ratio
            frames = 25, //number of png frames
            resize = false;

        //set transitionBackground dimentions
        var transitionBackground = $('.cd-transition-layer .bg-layer');
        setLayerDimensions();
        $(window).on('resize', function(){
            if( !resize ) {
                resize = true;
                (!window.requestAnimationFrame) ? setTimeout(setLayerDimensions, 300) : window.requestAnimationFrame(setLayerDimensions);
            }
        });

        function setLayerDimensions() {
            var windowWidth = $(window).width(),
                windowHeight = $(window).height(),
                layerHeight, layerWidth;

            if( windowWidth/windowHeight > frameProportion ) {
                layerWidth = windowWidth;
                layerHeight = layerWidth/frameProportion;
            } else {
                layerHeight = windowHeight*1.2;
                layerWidth = layerHeight*frameProportion;
            }

            transitionBackground.css({
                'width': layerWidth*frames+'px',
                'height': layerHeight+'px',
            });

            resize = false;
        }

    }
    smokeeffect();


/* ------ Revolution Slider ------ */


/*animated elements banner*/
$("#rev_single").show().revolution({
    sliderType: "hero",
    jsFileLocation: "revolution/js/",
    sliderLayout: "fullscreen",
    dottedOverlay: "none",
    delay: 9000,
    navigation: {
    },
    responsiveLevels: [1240, 1024, 778, 480],
    visibilityLevels: [1240, 1024, 778, 480],
    gridwidth: [1240, 1024, 778, 480],
    gridheight: [868, 768, 960, 720],
    lazyType: "none",
    parallax: {
        type: "mouse",
        origo: "slidercenter",
        speed: 400,
        levels: [9,10, 15, 20, 25, 30, 35, 40,  -10, -15, -20, -25, -30, -35, -40, -45, 55]
    },
    shadow: 0,
    spinner: "off",
    autoHeight: "off",
    fullScreenAutoWidth: "off",
    fullScreenAlignForce: "off",
    fullScreenOffsetContainer: "",
    disableProgressBar: "on",
    hideThumbsOnMobile: "off",
    hideSliderAtLimit: 0,
    hideCaptionAtLimit: 0,
    hideAllCaptionAtLilmit: 0,
    debugMode: false,
    fallbacks: {
        simplifyAll: "off",
        disableFocusListener: false
    }
});




var tpj=jQuery;

var revapi1071;
tpj(document).ready(function() {
    if(tpj("#blurred_slider").revolution == undefined){
        revslider_showDoubleJqueryError("#blurred_slider");
    }else{
        revapi1071 = tpj("#blurred_slider").show().revolution({
            sliderType:"hero",
            jsFileLocation:"revolution/js/",
            sliderLayout:"fullscreen",
            dottedOverlay:"none",
            delay:20000,
            navigation: {
            },
            responsiveLevels:[1240,1024,778,778],
            visibilityLevels:[1240,1024,778,778],
            gridwidth:[1240,1024,778,480],
            gridheight:[600,500,400,300],
            lazyType:"none",
            parallax: {
                type:"mouse",
                origo:"slidercenter",
                speed:2000,
                levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
            },
            shadow:0,
            spinner:"off",
            autoHeight:"off",
            fullScreenAutoWidth:"off",
            fullScreenAlignForce:"off",
            fullScreenOffsetContainer: "",
            disableProgressBar:"on",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                disableFocusListener:false,
            }
        });
// CHANGE THE API REFERENCE, AND THE ELEMENTS YOU WISH TO BLUR / UNBLUR
// SET START BLUR FACTOR, END BLUR FACTOR AND

        var api = revapi1071,
            ElementsToBlur = api.find('.toblur.tp-caption'),
            ElementsToUnBlur = api.find('.tounblur.tp-caption'),
            UnBlurFactor = 2,
            UnBlurStart = 3,
            UnBlurEnd = 0,
            BlurStart = 0,
            BlurEnd = 5,
            BlurFactor = 3,
            blurCall = new Object();


// SOME CODE FOR BLUR AND UNBLUR ELEMENTS
// EXTEND THE REVOLUTION SLIDER FUNCTION
// CHANGE ONLY IF YOU KNOW WHAT YOU DO

        blurCall.inmodule = "parallax";
        blurCall.atposition = "start";
        blurCall.callback = function() {
            var proc = api.revgetparallaxproc(),
                blur = UnBlurStart+(proc*UnBlurStart*UnBlurFactor)+UnBlurEnd,
                nblur = Math.abs(proc*BlurEnd*BlurFactor)+BlurStart;

            blur = blur<UnBlurEnd?UnBlurEnd:blur;
            nblur = nblur>BlurEnd?BlurEnd:nblur;

            ElementsToUnBlur = jQuery(ElementsToUnBlur.selector);
            punchgs.TweenLite.set(ElementsToUnBlur,{'-webkit-filter':'blur('+(blur)+'px)', 'filter':'blur('+(blur)+'px)'});
            punchgs.TweenLite.set(ElementsToBlur,{'-webkit-filter':'blur('+(nblur)+'px)', 'filter':'blur('+(nblur)+'px)'});
        }

        api.bind("revolution.slide.layeraction",function (e) {
            blurCall.callback();
        });

        api.bind("revolution.slide.onloaded",function (e) {
            revapi1071.revaddcallback(blurCall);
        });				}
});	/*ready*/



if ($("body").hasClass("only_portfolio_variation")){
    var tpj=jQuery;
    var revapi24;
    tpj(document).ready(function() {
        if(tpj("#rev-slider-just-agency").revolution == undefined){
            revslider_showDoubleJqueryError("#rev-slider-just-agency");
        }else{
            revapi24 = tpj("#rev-slider-just-agency").show().revolution({
                sliderType:"standard",
                jsFileLocation:"revolution/js/",
                sliderLayout:"fullscreen",
                dottedOverlay:"none",
                delay:9000,
                navigation: {
                    keyboardNavigation:"off",
                    keyboard_direction: "horizontal",
                    mouseScrollNavigation:"off",
                    mouseScrollReverse:"default",
                    onHoverStop:"on",
                    bullets: {
                        enable:true,
                        hide_onmobile:false,
                        style:"bullet-bar",
                        hide_onleave:false,
                        direction:"horizontal",
                        h_align:"center",
                        v_align:"bottom",
                        h_offset:0,
                        v_offset:50,
                        space:10,
                        tmp:''
                    }
                },
                responsiveLevels:[1240,1024,778,480],
                visibilityLevels:[1240,1024,778,480],
                gridwidth:[1240,1024,778,480],
                gridheight:[868,768,960,720],
                lazyType:"none",
                shadow:0,
                spinner:"off",
                stopLoop:"off",
                stopAfterLoops:-1,
                stopAtSlide:-1,
                shuffle:"off",
                autoHeight:"off",
                fullScreenAutoWidth:"off",
                fullScreenAlignForce:"off",
                fullScreenOffsetContainer: "",
                hideThumbsOnMobile:"off",
                hideSliderAtLimit:0,
                hideCaptionAtLimit:0,
                hideAllCaptionAtLilmit:0,
                debugMode:false,
                fallbacks: {
                    simplifyAll:"off",
                    nextSlideOnWindowFocus:"off",
                    disableFocusListener:false,
                }
            });
        }

        if(revapi24) revapi24.revSliderSlicey();
    });	/*ready*/
}

function setREVStartSize(e){
    try{ var i=$(window).width(),t=9999,r=0,n=0,l=0,f=0,s=0,h=0;
        if(e.responsiveLevels&&($.each(e.responsiveLevels,function(e,f){f>i&&(t=r=f,l=e),i>f&&f>r&&(r=f,n=e)}),t>r&&(l=n)),f=e.gridheight[l]||e.gridheight[0]||e.gridheight,s=e.gridwidth[l]||e.gridwidth[0]||e.gridwidth,h=i/s,h=h>1?1:h,f=Math.round(h*f),"fullscreen"==e.sliderLayout){var u=(e.c.width(),$(window).height());if(void 0!=e.fullScreenOffsetContainer){var c=e.fullScreenOffsetContainer.split(",");if (c) $.each(c,function(e,i){u=$(i).length>0?u-$(i).outerHeight(!0):u}),e.fullScreenOffset.split("%").length>1&&void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0?u-=$(window).height()*parseInt(e.fullScreenOffset,10)/100:void 0!=e.fullScreenOffset&&e.fullScreenOffset.length>0&&(u-=parseInt(e.fullScreenOffset,10))}f=u}else void 0!=e.minHeight&&f<e.minHeight&&(f=e.minHeight);e.c.closest(".rev_slider_wrapper").css({height:f})
    }catch(d){console.log("Failure at Presize of Slider:"+d)}
};

var revapi2,
    tpj=$;
tpj(document).ready(function() {
    if(tpj("#rev_slider_2_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_2_1");
    }else{
        revapi2 = tpj("#rev_slider_2_1").show().revolution({
            sliderType:"standard",
            jsFileLocation:"//localhost/rev_slider/revslider/public/assets/js/",
            sliderLayout:"fullscreen",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"on",
                touch:{
                    touchenabled:"on",
                    touchOnDesktop:"on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                arrows: {
                    style:"hesperiden",
                    enable:true,
                    hide_onmobile:true,
                    hide_under:600,
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    tmp:'',
                    left: {
                        h_align:"left",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0
                    },
                    right: {
                        h_align:"right",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0
                    }
                }
                ,
                bullets: {
                    enable:true,
                    hide_onmobile:true,
                    hide_under:600,
                    style:"hephaistos",
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    direction:"horizontal",
                    h_align:"center",
                    v_align:"bottom",
                    h_offset:0,
                    v_offset:30,
                    space:10,
                    tmp:''
                }
            },
            responsiveLevels:[1200,992,778,480],
            visibilityLevels:[1200,992,778,480],
            gridwidth:[1140,960,668,450],
            gridheight:[600,600,500,400],
            lazyType:"none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 9000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow:0,
            spinner:"on",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            fullScreenAutoWidth:"off",
            fullScreenAlignForce:"off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }

    var $window = $(window);
    var $mainnavBar = $('.bottom_inner');
    var $mainMenutop = $('.bottom_nav_outer');
    if ($('.bottom_nav_outer').length) {
        // Run this on scroll for fixed.
        $window.scroll(function() {
            if ($window.scrollTop() > $mainMenutop.offset().top) {
                // Make the div sticky.
                $mainnavBar.addClass('sticky');
            } else {
                // Unstick the div.
                $mainnavBar.removeClass('sticky');
            }
        });
    }

});	/*ready*/

tpj(document).ready(function() {
    if(tpj("#rev_slider_2_svg").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_2_svg");
    }else{
        revapi2 = tpj("#rev_slider_2_svg").show().revolution({
            sliderType:"standard",
            jsFileLocation:"//localhost/rev_slider/revslider/public/assets/js/",
            sliderLayout:"fullscreen",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"on",
                touch:{
                    touchenabled:"on",
                    touchOnDesktop:"on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                arrows: {
                    style:"hesperiden",
                    enable:true,
                    hide_onmobile:true,
                    hide_under:600,
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    tmp:'',
                    left: {
                        h_align:"left",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0
                    },
                    right: {
                        h_align:"right",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0
                    }
                }
                ,
                bullets: {
                    enable:true,
                    hide_onmobile:true,
                    hide_under:600,
                    style:"hephaistos",
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    direction:"horizontal",
                    h_align:"center",
                    v_align:"bottom",
                    h_offset:0,
                    v_offset:50,
                    space:10,
                    tmp:''
                }
            },
            responsiveLevels:[1200,992,778,480],
            visibilityLevels:[1200,992,778,480],
            gridwidth:[1140,960,668,450],
            gridheight:[600,600,500,400],
            lazyType:"none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 9000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow:0,
            spinner:"on",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            fullScreenAutoWidth:"off",
            fullScreenAlignForce:"off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }

    var $window = $(window);
    var $mainnavBar = $('.bottom_inner');
    var $mainMenutop = $('.bottom_nav_outer');
    if ($('.bottom_nav_outer').length) {
        // Run this on scroll for fixed.
        $window.scroll(function() {
            if ($window.scrollTop() > $mainMenutop.offset().top) {
                // Make the div sticky.
                $mainnavBar.addClass('sticky');
            } else {
                // Unstick the div.
                $mainnavBar.removeClass('sticky');
            }
        });
    }

});	/*ready*/

tpj(document).ready(function() {
    if(tpj("#rev_slider_2_2").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_2_1");
    }else{
        revapi2 = tpj("#rev_slider_2_2").show().revolution({
            sliderType:"standard",
            jsFileLocation:"//localhost/rev_slider/revslider/public/assets/js/",
            sliderLayout:"fullscreen",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"on",
                touch:{
                    touchenabled:"on",
                    touchOnDesktop:"on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                arrows: {
                    style:"hesperiden",
                    enable:false,
                    hide_onmobile:true,
                    hide_under:600,
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    tmp:'',
                    left: {
                        h_align:"left",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0
                    },
                    right: {
                        h_align:"right",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0
                    }
                }
                ,
                bullets: {
                    enable:false,
                    hide_onmobile:true,
                    hide_under:600,
                    style:"hephaistos",
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    direction:"horizontal",
                    h_align:"center",
                    v_align:"bottom",
                    h_offset:0,
                    v_offset:30,
                    space:10,
                    tmp:''
                }
            },
            responsiveLevels:[1200,992,778,480],
            visibilityLevels:[1200,992,778,480],
            gridwidth:[1140,960,668,450],
            gridheight:[600,600,500,400],
            lazyType:"none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 9000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow:0,
            spinner:"on",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            fullScreenAutoWidth:"off",
            fullScreenAlignForce:"off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }

    var $window = $(window);
    var $mainnavBar = $('.bottom_inner');
    var $mainMenutop = $('.bottom_nav_outer');
    if ($('.bottom_nav_outer').length) {
        // Run this on scroll for fixed.
        $window.scroll(function() {
            if ($window.scrollTop() > $mainMenutop.offset().top) {
                // Make the div sticky.
                $mainnavBar.addClass('sticky');
            } else {
                // Unstick the div.
                $mainnavBar.removeClass('sticky');
            }
        });
    }

});	/*ready*/

tpj(document).ready(function() {
    if(tpj("#rev_slider_2_3").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_2_1");
    }else{
        revapi2 = tpj("#rev_slider_2_3").show().revolution({
            sliderType:"standard",
            jsFileLocation:"//localhost/rev_slider/revslider/public/assets/js/",
            sliderLayout:"fullscreen",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"on",
                touch:{
                    touchenabled:"on",
                    touchOnDesktop:"on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                arrows: {
                    style:"hesperiden",
                    enable:true,
                    hide_onmobile:true,
                    hide_under:600,
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    tmp:'',
                    left: {
                        h_align:"left",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0
                    },
                    right: {
                        h_align:"right",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0
                    }
                }
                ,
                bullets: {
                    enable:false,
                    hide_onmobile:true,
                    hide_under:600,
                    style:"hephaistos",
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    direction:"horizontal",
                    h_align:"center",
                    v_align:"bottom",
                    h_offset:0,
                    v_offset:30,
                    space:10,
                    tmp:''
                }
            },
            responsiveLevels:[1200,992,778,480],
            visibilityLevels:[1200,992,778,480],
            gridwidth:[1140,960,668,450],
            gridheight:[600,600,500,400],
            lazyType:"none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 9000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow:0,
            spinner:"on",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            fullScreenAutoWidth:"off",
            fullScreenAlignForce:"off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }

    var $window = $(window);
    var $mainnavBar = $('.bottom_inner');
    var $mainMenutop = $('.bottom_nav_outer');
    if ($('.bottom_nav_outer').length) {
        // Run this on scroll for fixed.
        $window.scroll(function() {
            if ($window.scrollTop() > $mainMenutop.offset().top) {
                // Make the div sticky.
                $mainnavBar.addClass('sticky');
            } else {
                // Unstick the div.
                $mainnavBar.removeClass('sticky');
            }
        });
    }

});	/*ready*/

tpj(document).ready(function() {
    if(tpj("#rev_slider_2_4").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_2_1");
    }else{
        revapi2 = tpj("#rev_slider_2_4").show().revolution({
            sliderType:"standard",
            jsFileLocation:"//localhost/rev_slider/revslider/public/assets/js/",
            sliderLayout:"fullscreen",
            dottedOverlay:"none",
            delay:9000,
            navigation: {
                keyboardNavigation:"off",
                keyboard_direction: "horizontal",
                mouseScrollNavigation:"off",
                mouseScrollReverse:"default",
                onHoverStop:"on",
                touch:{
                    touchenabled:"on",
                    touchOnDesktop:"on",
                    swipe_threshold: 75,
                    swipe_min_touches: 50,
                    swipe_direction: "horizontal",
                    drag_block_vertical: false
                }
                ,
                arrows: {
                    style:"hesperiden",
                    enable:false,
                    hide_onmobile:true,
                    hide_under:600,
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    tmp:'',
                    left: {
                        h_align:"left",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0
                    },
                    right: {
                        h_align:"right",
                        v_align:"center",
                        h_offset:30,
                        v_offset:0
                    }
                }
                ,
                bullets: {
                    enable:false,
                    hide_onmobile:true,
                    hide_under:600,
                    style:"hephaistos",
                    hide_onleave:true,
                    hide_delay:200,
                    hide_delay_mobile:1200,
                    direction:"horizontal",
                    h_align:"center",
                    v_align:"bottom",
                    h_offset:0,
                    v_offset:30,
                    space:10,
                    tmp:''
                }
            },
            responsiveLevels:[1200,992,778,480],
            visibilityLevels:[1200,992,778,480],
            gridwidth:[1140,960,668,450],
            gridheight:[600,600,500,400],
            lazyType:"none",
            parallax: {
                type: "mouse",
                origo: "slidercenter",
                speed: 9000,
                levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50],
            },
            shadow:0,
            spinner:"on",
            stopLoop:"off",
            stopAfterLoops:-1,
            stopAtSlide:-1,
            shuffle:"off",
            autoHeight:"off",
            fullScreenAutoWidth:"off",
            fullScreenAlignForce:"off",
            fullScreenOffsetContainer: "",
            fullScreenOffset: "",
            hideThumbsOnMobile:"off",
            hideSliderAtLimit:0,
            hideCaptionAtLimit:0,
            hideAllCaptionAtLilmit:0,
            debugMode:false,
            fallbacks: {
                simplifyAll:"off",
                nextSlideOnWindowFocus:"off",
                disableFocusListener:false,
            }
        });
    }

    var $window = $(window);
    var $mainnavBar = $('.bottom_inner');
    var $mainMenutop = $('.bottom_nav_outer');
    if ($('.bottom_nav_outer').length) {
        // Run this on scroll for fixed.
        $window.scroll(function() {
            if ($window.scrollTop() > $mainMenutop.offset().top) {
                // Make the div sticky.
                $mainnavBar.addClass('sticky');
            } else {
                // Unstick the div.
                $mainnavBar.removeClass('sticky');
            }
        });
    }

});	/*ready*/


    /*============================================*
            Cube Portfolio
  * ============================================*/


    $('#js-grid-mosaic-flat').cubeportfolio({
        filters: '#js-filters-mosaic-flat',
        layoutMode: 'mosaic',
        sortByDimension: true,
        mediaQueries: [{
            width: 1500,
            cols: 6,
        }, {
            width: 1100,
            cols: 4,
        }, {
            width: 800,
            cols: 3,
        }, {
            width: 480,
            cols: 1,
            options: {
                gapHorizontal: 15,
                gapVertical: 15,
            }
        }],
        defaultFilter: '*',
        animationType: 'fadeOutTop',
        gapHorizontal: 0,
        gapVertical: 0,
        gridAdjustment: 'responsive',
        caption: 'zoom',

        // lightbox
        lightboxDelegate: '.cbp-lightbox',
        lightboxGallery: true,
        lightboxTitleSrc: 'data-title',

        plugins: {
            loadMore: {
                element: '#js-loadMore-mosaic-flat',
                action: 'click',
                loadItems: 3,
            }
        },
    });


    /* ===================================
          Revolution Slider
   ====================================== */

    $("#rev_slider_17_1").show().revolution({
                    sliderType:"standard",
                    jsFileLocation:"../vendor/js/",
                    sliderLayout:"fullscreen",
                    dottedOverlay:"none",
                    delay:9000,
                    responsiveLevels:[1240,1024,778,480],
                    visibilityLevels:[1240,1024,778,480],
                    gridwidth:[1110,990,750,570],
                    gridheight:[1000,768,960,720],
                    lazyType:"none",
                    parallax: {
                        type:"mouse",
                        origo:"enterpoint",
                        speed:400,
                        speedbg:0,
                        speedls:0,
                        levels:[1,2,3,4,5,6,7,8,9,10],
                        disable_onmobile:"on"
                    },
                    shadow:0,
                    spinner:"off",
                    stopLoop:"off",
                    stopAfterLoops:-1,
                    stopAtSlide:-1,
                    shuffle:"off",
                    autoHeight:"off",
                    fullScreenAutoWidth:"off",
                    fullScreenAlignForce:"off",
                    fullScreenOffsetContainer: "",
                    fullScreenOffset: "",
                    disableProgressBar:"on",
                    hideThumbsOnMobile:"off",
                    hideSliderAtLimit:0,
                    hideCaptionAtLimit:0,
                    hideAllCaptionAtLilmit:0,
                    debugMode:false,
                    fallbacks: {
                        simplifyAll:"off",
                        nextSlideOnWindowFocus:"off",
                        disableFocusListener:false,
                    }
                });

});
