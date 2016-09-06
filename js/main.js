//google maps initialisation
function initMap() {
    var mapDiv = document.getElementById('map');
    var myLatLng = {
        lat: 51.806100,
        lng: 0.6891120
    };
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
