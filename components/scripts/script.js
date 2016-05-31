$(function() {
  var topoffset = 0;

  var isTouch = 'ontouchstart' in document.documentElement;

  var $item = $('.carousel-main .item');
  var $wHeight = $(window).height();
  $item.eq(0).addClass('active');
  $item.height($wHeight);
  $item.addClass('fullheight');

  $('.carousel-main img').each(function() {
    var $src = $(this).attr('src');
    var $color = $(this).attr('data-color');
    $(this).parent().css({
      'background-image' : 'url(' + $src + ')',
      'background-color' : $color
    });
    $(this).remove();
  });

  $(window).on('resize', function (){
    $wHeight = $(window).height();
    $item.height($wHeight);
  });

  $('.carousel').carousel({
    interval: 6000,
    pause: "true"
  });


// Animated Scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 1000);
        return false;
      } // target.length
    } //location hostname
  }); //on click

  //set up ScrollMagic
  // var controller = new ScrollMagic({
  //   globalSceneOptions: {
  //     triggerHook: "onLeave"
  //   }
  // });

  // init controller
// var controller = new ScrollMagic.Controller();
//
// // create a scene
// new ScrollMagic.Scene({
//         duration: 100,    // the scene should last for a scroll distance of 100px
//         offset: 50        // start this scene after scrolling for 50px
//     })
//     .setPin("#my-sticky-element") // pins the element for the the scene's duration
//     .addTo(controller); // assign the scene to the controller

  //pin the navigation
  // var pin = new ScrollScene({
  //   triggerElement: '#nav',
  // }).setPin('#nav').addTo(controller);
  //

  // if(!isTouch) {
  //   //program animations
  //   var roomOrigin = {
  //     bottom: -700,
  //     opacity: 0,
  //     scale: 0
  //   }
  //
  //   var roomDest = {
  //     repeat: 1,
  //     yoyo: true,
  //     bottom: 0,
  //     opacity: 1,
  //     scale: 1,
  //     ease: Back.easeOut
  //   }
  //
  //   var roomtween = TweenMax.staggerFromTo(
  //     "#peace .content",
  //     1, roomOrigin, roomDest);
  //
  //   var pin = new ScrollScene({
  //     triggerElement: '#peace',
  //     offset: -topoffset,
  //     duration: 500
  //   }).setPin('#peace')
  //     .setTween(roomtween)
  //     .addTo(controller)
  //
  //
  //   var roomtween = TweenMax.staggerFromTo(
  //     "#spring .content",
  //     1, roomOrigin, roomDest);
  //
  //   var pin = new ScrollScene({
  //     triggerElement: '#spring',
  //     offset: -topoffset,
  //     duration: 500
  //   }).setPin('#spring')
  //     .setTween(roomtween)
  //     .addTo(controller)
  //
  //   var roomtween = TweenMax.staggerFromTo(
  //     "#dream .content",
  //     1, roomOrigin, roomDest);
  //
  //   var pin = new ScrollScene({
  //     triggerElement: '#dream',
  //     offset: -topoffset,
  //     duration: 500
  //   }).setPin('#dream')
  //     .setTween(roomtween)
  //     .addTo(controller)
  //
  // } //not a touch device


  // //atractions animation
  // var attractionstween = TweenMax.staggerFromTo('#donate article', 1, { opacity: 0, scale: 0 },
  //     {delay: 1, opacity: 1, scale: 1,
  //       ease: Back.easeOut});
  //
  //
  // var scene = new ScrollScene({
  //   triggerElement: '#donate',
  //   offset: -topoffset
  // }).setTween(attractionstween)
  //   .addTo(controller);
}); //on load

//
// // PIXGRID FROM SASS COMPASS PROJECT
// var pixGrid = function() {
//   //Selecting our node
//   var myNode = document.querySelector('.pixgrid');
//   myNode.addEventListener("click", function(e) {
//
//     if(e.target.tagName === 'IMG') {
//
//       var myOverlay = document.createElement('div');
//       myOverlay.id = 'overlay';
//       document.body.appendChild(myOverlay);
//
//       //set up overlay styles
//       myOverlay.style.position = 'absolute';
//       myOverlay.style.top = 0;
//       myOverlay.style.backgroundColor = 'rgba(0,0,0,0.7)';
//       myOverlay.style.cursor = 'pointer';
//
//       //resize and position overlay
//       myOverlay.style.width = window.innerWidth + 'px';
//       myOverlay.style.height = window.innerHeight + 'px';
//       myOverlay.style.top = window.pageYOffset + 'px';
//       myOverlay.style.left = window.pageXOffset + 'px';
//
//       //Create image element
//       var imageSrc = e.target.src;
//       var largeImage = document.createElement('img');
//       largeImage.id = 'largeImage';
//       largeImage.src = imageSrc.substr(0, imageSrc.length-7) + '.jpg';
//       largeImage.style.display = 'block';
//       largeImage.style.position = 'absolute';
//
//       //wait until the image has loaded
//       largeImage.addEventListener('load', function() {
//
//         //Resize if taller
//         if (this.height > window.innerHeight) {
//           this.ratio = window.innerHeight / this.height;
//           this.height = this.height * this.ratio;
//           this.width = this.width * this.ratio;
//         }
//
//         //Resize if wider
//         if (this.width > window.innerWidth) {
//           this.ratio = window.innerWidth / this.width;
//           this.height = this.height * this.ratio;
//           this.width = this.width * this.ratio;
//         }
//
//         centerImage(this);
//         myOverlay.appendChild(largeImage);
//
//       }); //image has loaded
//
//       largeImage.addEventListener('click', function() {
//         if (myOverlay) {
//           window.removeEventListener('resize', window, false);
//           window.removeEventListener('scroll', window, false);
//           myOverlay.parentNode.removeChild(myOverlay);
//         }
//       }, false)
//
//       window.addEventListener('scroll', function() {
//         if (myOverlay) {
//           myOverlay.style.top = window.pageYOffset + 'px';
//           myOverlay.style.left = window.pageXOffset + 'px';
//         }
//       }, false);
//
//       window.addEventListener('resize', function() {
//         if (myOverlay) {
//           myOverlay.style.width = window.innerWidth + 'px';
//           myOverlay.style.height = window.innerHeight + 'px';
//           myOverlay.style.top = window.pageYOffset + 'px';
//           myOverlay.style.left = window.pageXOffset + 'px';
//
//           centerImage(largeImage);
//         }
//       }, false)
//
//
//     } // target is an image
//
//   }, false); //image is clicked
//
//   function centerImage(theImage) {
//     var myDifX = (window.innerWidth - theImage.width)/2;
//     var myDifY = (window.innerHeight - theImage.height)/2;
//
//     theImage.style.top = myDifY + 'px';
//     theImage.style.left = myDifX + 'px';
//
//     return theImage;
//   }
//
// }(); //self executing function
//
// // JQUERY EXPANDABLE PLUGIN
// // you can override default options globally, so they apply to every .expander() call
// $.expander.defaults.slicePoint = 80;
//
// $(document).ready(function() {
//   // simple example, using all default options unless overridden globally
//   $('article.expandable p').expander();
//
//   // *** OR ***
//
//   // override default options (also overrides global overrides)
//
//
// });
//
// // PSEUDOCODE
// // function( SELECT .ARTIST.P WITH OVERFLOW:HIDDEN) {
// //   ON CLICK CHANGE TO OVERFLOW:VISIBLE - WHICH IS A CSS CLASS ATTRIBUTE
// // };
