      function initMap() {
        var mapDiv = document.getElementById('map');
        var myLatLng = {lat: 51.804299, lng: 0.6837479};
        var map = new google.maps.Map(mapDiv, {
            center: myLatLng,
            zoom: 15,
            disableDefaultUI: true
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