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
  var top = $('#blackOverlay').offset().top - $('#blackOverlay').parent().position().top;
  $(window).bind('touchmove DOMMouseScroll MouseScrollEvent MozMousePixelScroll wheel scroll', function() {
    var id = '#blackOverlay';
    dimOverlay(id, top);
    setTimeout(dimOverlay, 150, id, top);
    setTimeout(dimOverlay, 300, id, top);
    setTimeout(dimOverlay, 550, id, top);
    setTimeout(dimOverlay, 700, id, top);
    setTimeout(dimOverlay, 850, id, top);
    setTimeout(dimOverlay, 1000, id, top);
  });
});

function dimOverlay(id, top) {
  var currentScrollTop = $('.parallax').scrollTop();
  var temp = currentScrollTop-top
  console.log(temp);
  console.log(top);

if (temp >= 0)
  {
  $(id).css('opacity',temp/($(id).height()*1.2));
  }
}