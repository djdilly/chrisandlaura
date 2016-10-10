//google maps initialisation
function initMap() {
    var mapDiv = document.getElementById('map');
    var myWeddingVenueLatLng = {
      lat: 54.4736062,
      lng: -7.6459937
     };
    var myCenterLatLng = {
        lat: 54.6156122,
        lng: -6.309496
    };

    var map = new google.maps.Map(mapDiv, {
        center: myCenterLatLng,
        zoom: 9,
        disableDefaultUI: true,
        draggable: false,
        scrollwheel: false,
        styles: [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#B8CDC2"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]
    });

    var marker = new google.maps.Marker({
        position: myWeddingVenueLatLng,
        map: map,
        title: 'Chris proposed here',
        icon: {url: "img/like-black-heart-button.svg",
            scaledSize: new google.maps.Size(40, 48)
        }
    });

    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var paddleBase = 'https://maps.google.com/mapfiles/kml/paddle/';
    var icons = {
      horse: {
        icon: iconBase + 'horsebackriding.png'
      },
      pink: {
        icon: paddleBase + 'pink-blank.png'
      },
      blue: {
        icon: paddleBase + 'blu-blank.png'
      },
      green:{
        icon: paddleBase + 'grn-blank.png'
      },
      orange:{
        icon: paddleBase + 'orange-blank.png'
      }
    };

    var features = [
      {
        position: new google.maps.LatLng(55.0066605, -7.3467505),
        type: 'blue',
        title: 'Chris Lived here'
      },
      {
        position: new google.maps.LatLng(54.4176703,-8.4850056),
        type: 'horse',
        title: 'Chris fell off a horse here, the day he proposed.'
      },
      {
        position: new google.maps.LatLng(54.3470806,-7.6398836),
        type: 'pink',
        title: 'Laura Lived here'
      },

      {
        position: new google.maps.LatLng(54.6019787,-7.3299775),
        type: 'orange',
        title: 'Chris and Laura now live here'
      }
    ]

    for (var i = 0, feature; feature = features[i]; i++) {
      var marker = new google.maps.Marker({
        position: feature.position,
        icon: {url: icons[feature.type].icon,
            scaledSize: new google.maps.Size(40, 48)},
        title: feature.title,
        map: map
        });
    }

}