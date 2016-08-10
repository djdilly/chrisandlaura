      function initMap() {
        var mapDiv = document.getElementById('map');
        var myLatLng = {lat: 51.806100, lng: 0.6891120};
        var map = new google.maps.Map(mapDiv, {
            center: myLatLng,
            zoom: 15,
            disableDefaultUI: true,
            draggable: false,
            scrollwheel: false
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Hello World!',
	icon: {
		url: "img/like-black-heart-button.svg",
		scaledSize: new google.maps.Size(40, 48)
	}
        });
      }

$(function () {
  var top1 = $('#blackOverlay1').offset().top - $('#blackOverlay1').parent().position().top;
  var top2 = $('#blackOverlay2').offset().top - $('#blackOverlay2').parent().position().top;
  var top3 = $('#blackOverlay3').offset().top - $('#blackOverlay3').parent().position().top;
//   $(window).bind('touchmove DOMMouseScroll MouseScrollEvent MozMousePixelScroll wheel scroll', function() {
//     var id = '#blackOverlay';
//     dimOverlay(id, top);
//     setTimeout(dimOverlay, 150, id, top);
//     setTimeout(dimOverlay, 300, id, top);
//     setTimeout(dimOverlay, 550, id, top);
//     setTimeout(dimOverlay, 700, id, top);
//     setTimeout(dimOverlay, 850, id, top);
//     setTimeout(dimOverlay, 1000, id, top);
//   });
  $('.parallax').scroll(function() {
    dimOverlay(top1,top2,top3);
//     setTimeout(dimOverlay, 150, id, top);
//     setTimeout(dimOverlay, 300, id, top);
//     setTimeout(dimOverlay, 550, id, top);
//     setTimeout(dimOverlay, 700, id, top);
//     setTimeout(dimOverlay, 850, id, top);
//     setTimeout(dimOverlay, 1000, id, top);
  });
});

function dimOverlay(top1,top2,top3) {
  var currentScrollTop = $('.parallax').scrollTop();
  var temp1 = currentScrollTop-top1
  var temp2 = currentScrollTop-top2
  var temp3 = currentScrollTop-top3
  var height1 = $('#blackOverlay1').parent().parent().height()
  var height2 = $('#blackOverlay2').parent().parent().height()
  var height3 = $('#blackOverlay3').parent().parent().height()
  console.log(height1)

if ($("#pic1").val() == 'light' && temp1 >= 300)
  {
      $("#pic1").val('dark')

    $('#blackOverlay1').animate({
    opacity: 0.5
  }, 1500);
  }
if ($("#pic1").val() == 'dark' && temp1 < 300)
  {
  $("#pic1").val('light')

    $('#blackOverlay1').animate({
    opacity: 0
  }, 1500);
  }

if ($("#pic2").val() == 'light' && temp2 >= 300)
  {
      $("#pic2").val('dark')

    $('#blackOverlay2').animate({
    opacity: 0.5
  }, 1500);
  }
if ($("#pic2").val() == 'dark' && temp2 < 300)
  {
  $("#pic2").val('light')

    $('#blackOverlay2').animate({
    opacity: 0
  }, 1500);
  }

if ($("#pic3").val() == 'light' && temp3 >= 300)
  {
      $("#pic3").val('dark')

    $('#blackOverlay3').animate({
    opacity: 0.5
  }, 1500);
  }
if ($("#pic3").val() == 'dark' && temp3 < 300)
  {
  $("#pic3").val('light')

    $('#blackOverlay3').animate({
    opacity: 0
  }, 1500);
  }

}