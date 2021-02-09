jQuery(document).ready(function($) {

    $(".scroll a, .navbar-brand, .gototop").not('.external').click(function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: $(this.hash).offset().top }, 600, 'swing');
        $(".scroll li").removeClass('active');
        $(this).parents('li').toggleClass('active');
    });
});

var wow = new WOW({
    boxClass: 'wowload', // animated element css class (default is wow)
    animateClass: 'animated', // animation css class (default is animated)
    offset: 0, // distance to the element when triggering the animation (default is 0)
    mobile: true, // trigger animations on mobile devices (default is true)
    live: true // act on asynchronously loaded content (default is true)
});
wow.init();


! function(a) {
    a.fn.removeWhitespace = function() { this.contents().filter(function() { return this.nodeType == 3 && !/\S/.test(this.nodeValue) }).remove(); return this }
}(jQuery);

/*-----------------------------------------------------------------------------------*/
/*	12. GO TO TOP
/*-----------------------------------------------------------------------------------*/
! function(a, b, c) {
    a.fn.scrollUp = function(b) {
        a.data(c.body, "scrollUp") || (a.data(c.body, "scrollUp", !0), a.fn.scrollUp.init(b))
    }, a.fn.scrollUp.init = function(d) {
        var e = a.fn.scrollUp.settings = a.extend({}, a.fn.scrollUp.defaults, d),
            f = e.scrollTitle ? e.scrollTitle : e.scrollText,
            g = a("<a/>", {
                id: e.scrollName,
                href: "#top",
                title: f
            }).appendTo("body");
        e.scrollImg || g.html(e.scrollText), g.css({
            display: "none",
            position: "fixed",
            zIndex: e.zIndex
        }), e.activeOverlay && a("<div/>", {
            id: e.scrollName + "-active"
        }).css({
            position: "absolute",
            top: e.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + e.activeOverlay,
            zIndex: e.zIndex
        }).appendTo("body"), scrollEvent = a(b).scroll(function() {
            switch (scrollDis = "top" === e.scrollFrom ? e.scrollDistance : a(c).height() - a(b).height() - e.scrollDistance, e.animation) {
                case "fade":
                    a(a(b).scrollTop() > scrollDis ? g.fadeIn(e.animationInSpeed) : g.fadeOut(e.animationOutSpeed));
                    break;
                case "slide":
                    a(a(b).scrollTop() > scrollDis ? g.slideDown(e.animationInSpeed) : g.slideUp(e.animationOutSpeed));
                    break;
                default:
                    a(a(b).scrollTop() > scrollDis ? g.show(0) : g.hide(0))
            }
        }), g.click(function(b) {
            b.preventDefault(), a("html, body").animate({
                scrollTop: 0
            }, e.topSpeed, e.easingType)
        })
    }, a.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationInSpeed: 200,
        animationOutSpeed: 200,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    }, a.fn.scrollUp.destroy = function(d) {
        a.removeData(c.body, "scrollUp"), a("#" + a.fn.scrollUp.settings.scrollName).remove(), a("#" + a.fn.scrollUp.settings.scrollName + "-active").remove(), a.fn.jquery.split(".")[1] >= 7 ? a(b).off("scroll", d) : a(b).unbind("scroll", d)
    }, a.scrollUp = a.fn.scrollUp
}(jQuery, window, document);

/*	GO TO TOP
   /*-----------------------------------------------------------------------------------*/
$.scrollUp({
    scrollName: 'scrollUp1',
    // Element ID
    scrollDistance: 300,
    // Distance from top/bottom before showing element (px)
    scrollFrom: 'top',
    // 'top' or 'bottom'
    scrollSpeed: 300,
    // Speed back to top (ms)
    easingType: 'linear',
    // Scroll to top easing (see http://easings.net/)
    animation: 'fade',
    // Fade, slide, none
    animationInSpeed: 200,
    // Animation in speed (ms)
    animationOutSpeed: 200,
    // Animation out speed (ms)
    //scrollText: '<span class="gototop"><i class="fa fa-angle-up fa-3x"></i></span>',
    // Text for element, can contain HTML
    scrollTitle: false,
    // Set a custom <a> title if required. Defaults to scrollText
    activeOverlay: '#00FFFF',
    scrollImg: {
        active: true,
        type: 'background',
        src: 'images/top.png'
    },
    // Set CSS color to display scrollUp active point, e.g '#00FFFF'
    zIndex: 0 // Z-Index for the overlay
});

function InitGallery() {

    $('.light-gallery').lightGallery({
        thumbnail: false,
        selector: '.lgitem',
        animateThumb: true,
        showThumbByDefault: false,
        download: false,
        autoplayControls: false,
        zoom: false,
        fullScreen: false,
        thumbWidth: 100,
        thumbContHeight: 80,
        videoMaxWidth: '1000px'
    });

    function collage() {

        $('#collage-large').removeWhitespace().collagePlus({
            'fadeSpeed': 5000,
            'targetHeight': 400,
            'effect': 'effect-2',
            'direction': 'vertical',
            'allowPartialLastRow': true
        });

        // $('#collage-medium').removeWhitespace().collagePlus({
        //     'fadeSpeed': 5000,
        //     'targetHeight': 300,
        //     'effect': 'effect-2',
        //     'direction': 'vertical',
        //     'allowPartialLastRow': true
        // });
    };

    $('#collage-large').waitForImages(function() {
        collage();
    });

    window.scrollTo(0, 0);
}

$.fn.waitForImages = function(callback) {
    var $img = $('img', this),
        totalImg = $img.length;

    var waitImgLoad = function() {
        totalImg--;
        if (!totalImg) {
            callback();
        }
    };

    $img.each(function() {
        if (this.complete) {
            waitImgLoad();
        }
    })

    $img.load(waitImgLoad)
        .error(waitImgLoad);
};