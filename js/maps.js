//google maps initialisation
function initMap() {
    var mapDiv = document.getElementById('map');
    var myWeddingVenueLatLng = {
        lat: 51.806100,
        lng: 0.6891120
    };
    var myCenterLatLng = {
        lat: 51.806100,
        lng: 0.6621120
    };
    var holidayInnBraintree = {
        lat: 51.8682915,
        lng: 0.5345573
    }
    var map = new google.maps.Map(mapDiv, {
        center: myCenterLatLng,
        zoom: 12,
        disableDefaultUI: true,
        draggable: false,
        scrollwheel: false,
        styles: [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#B8CDC2"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]
    });

    var marker = new google.maps.Marker({
        position: myWeddingVenueLatLng,
        map: map,
        title: 'The party!',
        icon: {
            url: "img/like-black-heart-button.svg",
            scaledSize: new google.maps.Size(40, 48)
        }
    });

    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var icons = {
      hotel: {
        icon: iconBase + 'lodging.png'
      }
    };

    var features = [
      {
        position: new google.maps.LatLng(51.8682915, 0.5345573),
        type: 'hotel',
        title: 'Holiday Inn Braintree'
      },
      {
        position: new google.maps.LatLng(51.8811211,0.7880804),
        type: 'hotel',
        title: 'Best Western Marks Tey'
      },
      {
        position: new google.maps.LatLng(51.8925726,0.8220193),
        type: 'hotel',
        title: 'Holiday Inn Colchester'
      },
      {
        position: new google.maps.LatLng(51.7848346,0.8120422),
        type: 'hotel',
        title: 'Crowne Plaza Resort Colchester Five Lakes'
      },
      {
        position: new google.maps.LatLng(51.8799535,0.5490725),
        type: 'hotel',
        title: 'White Hart Hotel'
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