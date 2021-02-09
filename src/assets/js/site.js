// Write your Javascript code.
var cSpeed = 9;
var cWidth = 64;
var cHeight = 57;
var cTotalFrames = 19;
var cFrameWidth = 64;
var cImageSrc = 'assets/images/sprites.png';

var cImageTimeout = false;
var cIndex = 0;
var cXpos = 0;
var cPreloaderTimeout = false;
var SECONDS_BETWEEN_FRAMES = 0;

function startAnimation() {

    document.getElementById('preloaderInit').style.backgroundImage = 'url(' + cImageSrc + ')';
    document.getElementById('preloaderInit').style.width = cWidth + 'px';
    document.getElementById('preloaderInit').style.height = cHeight + 'px';
    document.getElementById('preloaderInit').style.background = '#ff6666x';

    document.getElementById('preloaderInit').style.position = 'absolute';
    document.getElementById('preloaderInit').style.top = '0';
    document.getElementById('preloaderInit').style.bottom = '0';
    document.getElementById('preloaderInit').style.left = '0';
    document.getElementById('preloaderInit').style.right = '0';
    document.getElementById('preloaderInit').style.margin = 'auto';

    //FPS = Math.round(100/(maxSpeed+2-speed));
    FPS = Math.round(100 / cSpeed);
    SECONDS_BETWEEN_FRAMES = 1 / FPS;

    cPreloaderTimeout = setTimeout('continueAnimation()', SECONDS_BETWEEN_FRAMES / 1000);

}

function continueAnimation() {

    cXpos += cFrameWidth;
    //increase the index so we know which frame of our animation we are currently on
    cIndex += 1;

    //if our cIndex is higher than our total number of frames, we're at the end and should restart
    if (cIndex >= cTotalFrames) {
        cXpos = 0;
        cIndex = 0;
    }

    if (document.getElementById('preloaderInit'))
        document.getElementById('preloaderInit').style.backgroundPosition = (-cXpos) + 'px 0';

    cPreloaderTimeout = setTimeout('continueAnimation()', SECONDS_BETWEEN_FRAMES * 1000);
}

function stopAnimation() { //stops animation
    clearTimeout(cPreloaderTimeout);
    cPreloaderTimeout = false;
}

function imageLoader(s, fun) //Pre-loads the sprites image
{
    clearTimeout(cImageTimeout);
    cImageTimeout = 0;
    genImage = new Image();
    genImage.onload = function() { cImageTimeout = setTimeout(fun, 0) };
    genImage.onerror = new Function('alert(\'Could not load the image\')');
    genImage.src = s;
}

//The following code starts the animation
new imageLoader(cImageSrc, 'startAnimation()');

var swiper;

window.onload = function() {

    InitSwiperAndFacebook();

    setTimeout(function() { $('#preloadBody').hide(); }, 1000);

    window.scrollTo(0, 0);
    //console.log("Ejecutado onload");
};

function InitButtonFace() {

    var id = 'facebook-jssdk';
    var s = 'script';

    var js, fjs = document.getElementsByTagName(s)[0];
    //if (document.getElementById(id)) return;
    js = document.createElement(s);
    js.id = id;
    js.async = false;
    js.src = "//connect.facebook.net/es_ES/sdk.js#xfbml=1&version=v2.9";
    fjs.parentNode.insertBefore(js, fjs);

    //console.log(js);
    //console.log(fjs);
}

InitSwiperAndFacebook = function() {

    swiper = new Swiper('.swiper-container', {
        //spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'progressbar'
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        }
    })

    try {

        InitButtonFace();

        if (typeof(FB) != 'undefined' && FB != null) {
            FB.XFBML.parse();
        }
    } catch (error) {
        console.log(error);
    }
}