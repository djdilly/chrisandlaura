$(window).load(function() {

  //relative borders on polaroids
  var el = $(".square");
  var borderWidth = el.width() / 32 | 0; // calculate & trim decimals
  var borderBottomWidth = borderWidth * 5
  el.css("border-width", borderWidth + "px");
  el.css("border-bottom-width", borderBottomWidth + "px");
  var el2 = $(".sq-footer");
  el2.css("bottom", "-" + borderWidth * 4 + "px");
  el2.css("font", borderWidth * 1 + "px 'Kaushan Script', cursive");

  // animation initialization
  var height = $(window).height() / 2;
  //initialize scrollreveal
  window.sr = ScrollReveal({
    // 'bottom', 'left', 'top', 'right'
    origin: 'bottom',

    // Can be any valid CSS distance, e.g. '5rem', '10%', '20vw', etc.
    distance: '5vw',

    // Time in milliseconds.
    duration: 300,
    delay: 0,

    // Starting angles in degrees, will transition from these values to 0 in all axes.
    rotate: { x: 0, y: 0, z: 0 },

    // Starting opacity value, before transitioning to the computed opacity.
    opacity: 0,

    // Starting scale value, will transition from this value to 1
    scale: 1,

    // Accepts any valid CSS easing, e.g. 'ease', 'ease-in-out', 'linear', etc.
    easing: 'cubic-bezier(0.075, 0.82, 0.165, 1)',

    // `<html>` is the default reveal container. You can pass either:
    // DOM Node, e.g. document.querySelector('.fooContainer')
    // Selector, e.g. '.fooContainer'
    container: window.document.documentElement,

    // true/false to control reveal animations on mobile.
    mobile: true,

    // true:  reveals occur every time elements become visible
    // false: reveals occur once as elements become visible
    reset: true,

    // 'always' — delay for all reveal animations
    // 'once'   — delay only the first time reveals occur
    // 'onload' - delay only for animations triggered by first load
    useDelay: 'always',

    // Change when an element is considered in the viewport. The default value
    // of 0.20 means 20% of an element must be visible for its reveal to occur.
    viewFactor: 0.2,

    // Pixel values that alter the container boundaries.
    // e.g. Set `{ top: 48 }`, if you have a 48px tall fixed toolbar.
    // --
    // Visual Aid: https://scrollrevealjs.org/assets/viewoffset.png
    viewOffset: { top: -1000, right: 0, bottom: height, left: 0 },

    // Callbacks that fire for each triggered element reveal, and reset.
    beforeReveal: function (domEl) {},
    beforeReset: function (domEl) {},

    // Callbacks that fire for each completed element reveal, and reset.
    afterReveal: function (domEl) {},
    afterReset: function (domEl) {}
  });

  // #parallax will be the main container
  var parallaxDiv = document.getElementById('parallax');

  sr.reveal('.sr', { container: parallaxDiv, duration: "4000" });
  $(".sr").css("visibility","visible");

//   window.onresize = function(){ location.reload(); }

});


