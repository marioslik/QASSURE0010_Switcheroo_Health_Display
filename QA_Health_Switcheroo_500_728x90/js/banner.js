// JavaScript Document
//HTML5 Ad Template JS from DoubleClick by Google
//Declaring elements from the HTML i.e. Giving them Instance Names like in Flash - makes it easier
var container;
var content;
var dcLogo;
var bgExit;
var tl;
var preload;

$(document).ready(function () {

    var i = [
        "base-image-01.jpg",
        "shape-blue.svg",
        "shape-mask.svg",
        "base-image-01.jpg"
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

    TweenLite.set($(".bg-image"), {x:200});
    TweenLite.set($("#red-gradient"), {autoAlpha:0, rotation:50, x:-214, y: -310, transformOrigin:"50% 50%", scale:0.7}); // rotation:35, autoAlpha:1, x:-214, y:-300,

    TweenLite.set($("#text-base-shape"), {rotation:0, autoAlpha:1, x:146, y:-196, scaleX:0.9, scaleY:0.8}); // x:-349,
    TweenLite.set($("#white-shape-small"), {x:137, y:106, scaleX:0.8, scaleY:1});

    TweenLite.set(".bg-wrapper", {perspective:800, backfaceVisibility:"hidden"});
    TweenLite.set(".bg-image-02", {rotationX:180, x:40, y:-20, scale:0.85});
    // /TweenLite.set(".bg-image-01", {backfaceVisibility:"hidden"});
    TweenLite.set(".back", {rotationX:0});
    TweenLite.set([".back", ".front"], {backfaceVisibility:"hidden", transformStyle:"preserve-3d"});
    //TweenLite.set("#messaging-frame-02 p", {rotationX:180});

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

    tl.to(".bg-image", 0.9, {x:-107, force3D:true, ease:Power1.easeInOut}, "1.2")

    //Base Gradient
    tl.to("#red-grad-values", 4, {attr:{cx:364, cy:45, r:450}, ease:Power2.easeInOut}, ".5");
    tl.to("#base-grad-stop-01", 1, {stopOpacity:0, ease:Power2.easeOut}, ".2");
    tl.to("#base-grad-stop-02", 2, {stopOpacity:0, ease:Power2.easeInOut}, ".4");
    tl.to("#base-grad-stop-03", 3, {stopOpacity:0, ease:Power2.easeInOut}, ".4");

    tl.to("#red-gradient", 1.5, {rotation:35, autoAlpha:1, x:-214, y:-300, scale:1, ease: Power1.easeOut}, "1.5"); //-118
    tl.to("#red-grad-stop-02", 2, {stopOpacity:1, ease:Power1.easeIn}, ".5");
    tl.to("#red-grad-stop-03", 1.5, {stopOpacity:1, ease:Power1.easeInOut}, ".5");

    tl.to("#text-base-shape", 2.5, {x:-349, autoAlpha:1, ease: Power1.easeOut}, "0");
    tl.to("#text-base-shape2", 0.1, { autoAlpha:1, ease: Power1.easeOut}, "0"); // rotation:120, scale:.8,
    tl.to("#text-base-grad-stop-01", 1, {stopOpacity:1, ease:Power1.easeInOut}, ".7"); //2
    tl.to("#text-base-grad-stop-02", 1, {stopOpacity:1, ease:Power1.easeIn}, ".7"); //1
    tl.to("#text-base-grad-stop-03", 1, {stopOpacity:1, ease:Power1.easeInOut}, ".7"); // 2.5

    //Shape Reveal Intro
    tl.to(".shapes", 2, {alpha:1, rotation: -20, transformOrigin: "50% 50%"}, "0");
    tl.to("#mask-shape", 1.2, {rotation: 0, scaleX: 1, scaleY: 1, x: -2140, y: -1315,  ease: Power1.easeInOut}, "0");
    tl.to("#blue-shape-small", 1, {alpha:1, rotation: 90, scaleX: 0.2, scaleY: 0.2, x: 251, y: 35, ease: Power1.easeInOut}, ".3");
    tl.to("#blue-shape", 1, {alpha:1, rotation: -90, scaleX: 1.3, scaleY: 1.3, x: -45, y: 100, ease: Power1.easeInOut}, ".3");

    tl.to("#mask-shape", 1, {rotation: 0, scaleX: 3.65, scaleY: 3.65, x: -1756, y: -1315, ease: Power3.easeInOut}, "1.1");
    tl.to("#blue-shape", 0.4, {rotation: -180, scaleX: 1.3, scaleY: 1.3, x: -290, y: 280, ease: Power2.easeIn}, "1.3");

    tl.from("#messaging-frame-01", 2, {alpha: 0, y:0, ease: Power1.easeInOut}, "1.3");

    tl.from("#white-shape-small", 2.5, {autoAlpha:1, x:-70, ease: Power1.easeOut}, "0");
    tl.to("#white-grad-small-stop-01", 2, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, "0");
    tl.to("#white-grad-small-stop-02", 2, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, ".3");
    tl.to("#white-grad-small-stop-03", 2, {stopOpacity:1, stopColor:"#FFFFFF", ease:Power1.easeInOut}, ".7");

    tl.from("#logos-container", 1.5, {alpha:0, x:-15, ease: Power1.easeOut}, "1.2");

    //FRAME 02  ------------------------------------------------
    tl.add("frame02", 5);
    tl.from("#messaging-frame-02", 1.5, {alpha: 0, y: 20, ease: Power1.easeInOut}, "frame02");
    tl.to("#messaging-frame-01", 0.8, {alpha: 0, ease: Power1.easeInOut}, "frame02+=.3");

    tl.to(".flip", 1.1, {rotationX:180, ease:Power2.easeInOut}, "frame02");
    tl.to(".back", 1.1, {rotationX:0, ease:Power2.easeInOut}, "frame02");
    tl.staggerFrom(chars, 1, {alpha:0, x:-10, rotationY:360, transformOrigin:"50% 50%", ease:Back.easeOut}, 0.05, "frame02+=0.8");
    tl.set(".bg-image-01", {autoAlpha:0});


    //FRAME 03  ------------------------------------------------
    tl.add("frame03", 8.5);
    tl.to("#messaging-frame-02", 0.8, {alpha: 0, y: -20, ease: Power1.easeIn}, "frame03+=1");
    tl.from("#messaging-frame-03", 1.5, {alpha: 0, y: 20, ease: Power2.easeInOut}, "frame03+=1.3");

    tl.to(".bg-image", 2, {autoAlpha:0, ease:Power1.easeInOut},"frame03+=4");

    tl.fromTo(".terms", 1, {autoAlpha: 0}, {autoAlpha: 1, ease: Power1.easeInOut}, "frame03+=.4");

    //FADE TO FULL RED BASE
    tl.to("#red-grad-values", 2, {attr:{cx:364, cy:45, r:120}, ease:Power2.easeInOut}, "frame03-=.5");
    tl.to("#base-grad-stop-01", 4, {stopOpacity:0.8, stopColor:"#F70500", ease:Power1.easeInOut}, "frame03-=.5");
    tl.to("#base-grad-stop-02", 3.5, {stopOpacity:0.5, stopColor:"#F70500", ease:Power1.easeInOut}, "frame03-=.5");
    tl.to("#base-grad-stop-03", 3, {stopOpacity:1, stopColor:"#d00914", ease:Power1.easeInOut}, "frame03-=.5");


    //END FRAME  ------------------------------------------------

    tl.add("endFrame", 12.5);
    // tl.to("#messaging-frame-03", 0.8, {alpha: 0, y: -20, ease: Power1.easeIn}, "endFrame+=.3");
    // tl.from("#messaging-end-frame", 1.5, {alpha: 0, y: 20, ease: Power2.easeInOut}, "endFrame+=.4");

    tl.from("#price-left-copy", 2, {alpha: 0, ease: Power2.easeInOut}, "frame03+=.4");
    tl.from(".price-inner-content", 2, {y: 48, ease: Power2.easeInOut}, "frame03+=.2");
    tl.from("#price-right-copy", 2, {alpha: 0, y: 5, ease: Power2.easeInOut}, "frame03+=.8");
    tl.from("#cta-button", 2, {alpha: 0, y: 10, ease: Power2.easeOut}, "frame03+=1.6");

    tl.to("#logos-container", 2, {y:20, ease:Power2.easeInOut}, "frame03+=.3");
    tl.from(".partner-logo", 2, {autoAlpha:0, ease:Power2.easeInOut}, "frame03+=.4");
    tl.to(".qantas-logo-colour", 2, {scale:0.8, ease:Power1.easeInOut}, "frame03+=.4");

    tl.to("#red-grad-values", 3, {attr:{cx:364, cy:45, r:170}, ease:Power2.easeInOut}, "frame03-=1");



    //TESTING - goto specific time of animation
  //  tl.seek(11);
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
