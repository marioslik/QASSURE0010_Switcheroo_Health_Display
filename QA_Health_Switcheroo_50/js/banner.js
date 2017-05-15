// JavaScript Document
var container;
var content;
var dcLogo;
var bgExit;
var tl;
var preload;

$(document).ready(function () {

    var i = [
        "base-image-01.jpg",
        "base-image-02.jpg",
        "logo-qantas-assure.svg",
        "logos-partners.svg",
        "shape-blue.svg",
        "shape-mask.svg",
        "shape-red.svg",
        "shape-white.svg"
    ];

    preloadimages(i).done(function (images) {
        console.log("loaded");
        initCSS();
    });
});

function initCSS() {

    //SET STARTING POSITIONS FOR ELEMENTS

    TweenLite.set($("#blue-shape"), {alpha: 1, rotation: 50, scaleX: 0.4, scaleY: 0.4, x: 60, y: 80, overwrite: "none", force3D: false});
    TweenLite.set($("#blue-shape-small"), {alpha: 1, rotation: -20, scaleX: 0.2, scaleY: 0.2, x: 140, y: 83, overwrite: "none", force3D: false});
    TweenLite.set($("#mask-shape"), {rotation: 30, scaleX: 0.3, scaleY: 0.3, x: -2235, y: -1270, overwrite: "none", force3D: false});
    TweenLite.set($(".shapes"), {rotation: 160, transformOrigin: "50% 50%", overwrite: "none", force3D: false});

    TweenLite.set($(".qantas-logo-white"), {alpha:0});
    // TweenLite.set($(".bg-image-02"), {alpha:0});
    TweenLite.set($("#red-gradient"), {autoAlpha:0, rotation:70, x:-210, y: 60, scale:0.8});
    TweenLite.set($("#partnership-white-shape-small"), {y:-5})
    TweenLite.set($("#logos-container"), {y:-4});

    TweenLite.set(".bg-wrapper", {perspective:800});
    TweenLite.set(".back", {rotationY:180, });
    TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden", transformStyle:"preserve-3d"});
    TweenLite.set("#messaging-frame-02 p", {rotationY:180});


    $( ".banner" ).hover(
        function() {
            $("#cta-button").addClass('hover');
        }, function() {
            $("#cta-button").removeClass('hover');
        }
    );


    if($('.overlay').length)
    {
        $('.terms').click(function(){
          console.log('extended terms');
          $('.overlay').fadeIn();
          $('.terms').fadeOut();
      });

        $('.overlay-close').click(function(){
          $('.overlay').fadeOut();
          $('.terms').fadeIn();
      });
    }else{
        $('.terms').click(function(){
          console.log('clicktag invoked');
          window.open(clickTag);
      });
    }

    $('.clicktag').click(function(){
        console.log('clicktag invoked');
        window.open(clickTag);
    });

    startAnimation();
}

//------------------------------- MAIN ANIMATION -------------------------------



var percentFill = 80, /* in %, ie. this is 10% */
    duration    = 1.5;

function startAnimation() {

    console.log("startAnimation");

    $(".container").show();
    $(".loader").hide();

    bannerWidth = $(".container").width();
    bannerHeight = $(".container").height();

    // split text
    var mySplitText = new SplitText(".switcheroo-text", {type:"words,chars"});
    var chars = mySplitText.chars;


    tl = new TimelineLite();



    //FRAME 01/INTRO ------------------------------------------------


    tl.from(".bg-image-01", 1, {alpha: 0, ease: Power1.easeIn}, "0");

    //Base Gradient
    tl.to("#red-grad-values", 2.5, {attr:{cx:0, cy:295, r:450}, ease:Power2.easeInOut}, "0");
    tl.to("#base-grad-stop-01", 1, {stopOpacity:0, ease:Power2.easeOut}, ".2");
    tl.to("#base-grad-stop-02", 2, {stopOpacity:0, ease:Power2.easeInOut}, ".4");
    tl.to("#base-grad-stop-03", 3, {stopOpacity:0, ease:Power2.easeInOut}, ".4");
    tl.to("#red-gradient", 3, {rotation:-30, autoAlpha:0, x:0, y:-290, scale:1, ease: Power2.easeInOut}, "0");

    //Shape Reveal Intro
    tl.to(".shapes", 2, {alpha:1, rotation: -9, transformOrigin: "50% 50%"}, "0");
    tl.to("#mask-shape", 1.2, {rotation: 0, scaleX: 1, scaleY: 1, x: -2140, y: -1315,  ease: Sine.easeInOut}, "0");
    tl.to("#blue-shape-small", 1, {alpha:1, rotation: 90, scaleX: 0.2, scaleY: 0.2, x: 221, y: 35, ease: Sine.easeInOut}, ".3");
    tl.to("#blue-shape", 1, {rotation: -90, scaleX: 1, scaleY: 1, x: 5, y: 130, ease: Sine.easeInOut}, ".3");

    tl.to("#mask-shape", 0.5, {rotation: 0, scaleX: 2.2, scaleY: 2.2, x: -1950, y: -1315, ease: Power2.easeIn}, "1.1");
    tl.to("#blue-shape", 0.4, {rotation: -180, scaleX: 1.3, scaleY: 1.3, x: -100, y: 240, ease: Power2.easeIn}, "1.3");
    tl.to("#blue-shape-small", 0.4, {rotation: 150, scaleX: 0.7, scaleY: 0.7, x: 330, y: -95, ease: Power2.easeIn}, "1.3");


    tl.from("#messaging-frame-01, .copy-gradient", 2, {alpha: 0, ease: Power1.easeOut}, "1.4");
    tl.to("#white-grad-small-stop-01", 2, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "1.3");
    tl.to("#white-grad-small-stop-02", 2, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "1.3");
    tl.to("#white-grad-small-stop-03", 1.5, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "1");

    tl.from("#partnership-white-shape-small", 2.5, {autoAlpha:0.4, rotation:90, x:55, scaleY:1.2, ease: Power1.easeOut}, "0.2");
    tl.from(".qantas-logo-colour", 1.8, {alpha:0, y:-10, ease: Power1.easeInOut}, "1.3");



    //FRAME 02  ------------------------------------------------
    tl.add("frame02", 5);
    tl.from("#messaging-frame-02", 1.5, {alpha: 0, y: 20, ease: Power1.easeInOut}, "frame02");
    tl.to("#messaging-frame-01", 0.8, {alpha: 0, ease: Power1.easeOut}, "frame02+=.3");

    tl.to(".flip", 1.1, {rotationY:180, ease:Power2.easeInOut}, "frame02");
    tl.to(".back", 1.1, {rotationY:0, ease:Power2.easeInOut}, "frame02");

    // tl.to(".bg-Wrapper", 0.5, {scale:0.8, yoyo:true, repeat:1, transformOrigin:"50% 50%", ease:Power1.easeInOut}, "5");


    tl.staggerFrom(chars, 1, {alpha:0, x:-10, rotationY:360, transformOrigin:"50% 50%", ease:Back.easeOut}, 0.05, "frame02+=0.8");

    //FRAME 03  ------------------------------------------------
    tl.add("frame03", 8.5);

    tl.to(".copy-gradient", 0.8, {alpha: 0, ease: Power1.easeOut}, "frame03+=1");
    tl.to("#messaging-frame-02", 0.5, {alpha: 0, y: 0, ease: Power1.easeOut}, "frame03");
    tl.from("#messaging-frame-03", 2, {alpha: 0, y: 20, ease: Power1.easeInOut}, "frame03");
    tl.from(".stagger-copy", 1, {alpha:0, ease:Power1.easeInOut}, "frame03+=1");
    tl.fromTo(".terms", 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut}, "frame03+=.6");

    tl.to("#red-gradient", 3.5, {autoAlpha:1, rotation:34, x:-160, y: -178, scale:0.8, ease: Power1.easeInOut}, "frame03-=.2"); //rotation:70,

    //FADE TO FULL RED BASE
    tl.to("#red-grad-values", 3, {attr:{cx:150, cy:125, r:90}, ease:Power2.easeInOut}, "frame03+=.2");
    tl.to("#base-grad-stop-01", 4, {stopOpacity:0.8, stopColor:"#F70500", ease:Power1.easeInOut}, "frame03+=.2");
    tl.to("#base-grad-stop-02", 3.5, {stopOpacity:0.5, stopColor:"#F70500", ease:Power1.easeInOut}, "frame03+=.2");
    tl.to("#base-grad-stop-03", 3, {stopOpacity:1, stopColor:"#d00914", ease:Power1.easeInOut}, "frame03+=.2");
    tl.to("#base-red", 1, {autoAlpha:0, ease:Power1.easeOut}, "frame03+=.3");
    tl.to(".bg-image", 1, {alpha:0, ease:Power1.easeInOut}, "frame03+=.2");


    //END FRAME  ------------------------------------------------
    tl.add("endFrame", 12.5);
    tl.to("#partnership-white-shape-small", 2, {autoAlpha:1, x:-100, y:-20, scaleX:2.2, ease: Power1.easeIn}, "endFrame");

    tl.from("#partnership-white-shape", 2, {x:40, y:35, rotation:20, ease: Power2.easeInOut}, "endFrame+=.3");

    tl.to("#white-grad-stop-01", 1.5, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "endFrame+=.5");
    tl.to("#white-grad-stop-02", 1.5, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "endFrame+=1");
    tl.to("#white-grad-stop-03", 1.5, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "endFrame+=1.7");

    tl.to("#white-grad-small-stop-02", 1, {stopOpacity:0, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "endFrame+=1");

    tl.to("#messaging-frame-03", 0.8, {alpha: 0, y: 0, ease: Power1.easeOut}, "endFrame+=1");
    tl.from("#messaging-end-frame", 2, {alpha: 0, y: 30, ease: Power1.easeInOut}, "endFrame+=1.4");

    tl.from(".price-left-copy", 2, {alpha: 0, ease: Power2.easeInOut}, "endFrame+=1");
    tl.from(".price-inner-content", 2.5, {y: 55, ease: Power2.easeInOut}, "endFrame+=.9");
    tl.from(".price-right-copy", 2, {alpha: 0, ease: Power2.easeInOut}, "endFrame+=1");
    tl.from("#cta-button", 2, {alpha: 0, ease: Power2.easeInOut}, "endFrame+=1.7");
    tl.to("#messaging-frame-03", 2, {y: -20, ease: Power2.easeInOut}, "endFrame+=1.1");

    tl.to("#red-gradient", 4, {rotation:-156, x:-440, y: -240, scale:0.8, ease: Power1.easeInOut}, "endFrame+=.5");

    tl.from(".partner-logo", 2, {alpha:0, ease: Power1.easeInOut}, "endFrame+=1");
    tl.from(".logo-divider-line", 2, {alpha: 0, scaleY:0, transformOrigin: "50% 100%", ease: Power1.easeInOut}, "endFrame+=.4");

    tl.to("#logos-container", 1.2, {y: -16, ease: Power1.easeInOut}, "endFrame+=1");




    //TESTING - goto specific time of animation
    // tl.seek(5);
    // tl.pause(17);

}

function preloadimages(arr) {

    var newimages = [],
        loadedimages = 0;
    var postaction = function () {};
        arr = (typeof arr != "object") ? [arr] : arr;

    function imageloadpost() {
        loadedimages++;
        if (loadedimages == arr.length) {
            postaction(newimages); //call postaction and pass in newimages array as parameter
        }
    }
    for (var i = 0; i < arr.length; i++) {
        newimages[i] = new Image();
        newimages[i].src = arr[i];
        newimages[i].onload = function () {
            imageloadpost();
        };
        newimages[i].onerror = function () {
            imageloadpost();
        };
    }
    return { //return blank object with done() method
        done: function (f) {
            postaction = f || postaction; //remember user defined callback functions to be called when images load
        }
    };
}

bgExitHandler = function (e) {
    //Call Exits
    //	Enabler.exit('HTML5_Background_Clickthrough');
};
