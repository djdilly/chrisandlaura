      /**
       * The CenterControl adds a control to the map that recenters the map on
       * Chicago.
       * This constructor takes the control DIV as an argument.
       * @constructor
       */
      function CenterControl(controlDiv, map) {

        // Set CSS for the control border.
        var controlUI = document.createElement('div');
        controlUI.style.backgroundColor = '#fff';
        controlUI.style.border = '2px solid #fff';
        controlUI.style.borderRadius = '3px';
        controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
        controlUI.style.cursor = 'pointer';
        controlUI.style.marginBottom = '22px';
        controlUI.style.textAlign = 'center';
        controlUI.title = 'Click to recenter the map';
        controlDiv.appendChild(controlUI);

        // Set CSS for the control interior.
        var controlText = document.createElement('div');
        controlText.style.color = 'rgb(25,25,25)';
        controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
        controlText.style.fontSize = '16px';
        controlText.style.lineHeight = '38px';
        controlText.style.paddingLeft = '5px';
        controlText.style.paddingRight = '5px';
        controlText.innerHTML = 'Center Map';
        controlUI.appendChild(controlText);

        // Setup the click event listeners: simply set the map to Chicago.
        controlUI.addEventListener('click', function() {
          // one(drop)
          drop()
        });

      }

      var map
      var markers = []
        // var features = [{
        //   position: new google.maps.LatLng(55.0066605, -7.3467505),
        //   type: 'blue',
        //   title: 'Chris Lived here'
        // }, {
        //   position: new google.maps.LatLng(54.4176703, -8.4850056),
        //   type: 'horse',
        //   title: 'Chris fell off a horse here, the day he proposed.'
        // }, {
        //   position: new google.maps.LatLng(54.3470806, -7.6398836),
        //   type: 'pink',
        //   title: 'Laura Lived here'
        // }, {
        //   position: new google.maps.LatLng(54.6019787, -7.3299775),
        //   type: 'orange',
        //   title: 'Chris and Laura now live here'
        // }, {
        //   position: new google.maps.LatLng(51.806100, -0.6891120),
        //   type: 'orange',
        //   title: 'Wedding venue'
        // }]
      var features = []
      var iconBase
      var icons

      //google maps initialisation
      function initMap() {
        var mapDiv = document.getElementById('map');
        var myCenterLatLng = {
          lat: 54.5945324,
          lng: -7.66945572
        };

        map = new google.maps.Map(mapDiv, {
          center: myCenterLatLng,
          zoom: 9,
          disableDefaultUI: true,
          draggable: false,
          scrollwheel: false,
          styles: [{
            "featureType": "landscape",
            "stylers": [{
              "hue": "#FFBB00"
            }, {
              "saturation": 43.400000000000006
            }, {
              "lightness": 37.599999999999994
            }, {
              "gamma": 1
            }]
          }, {
            "featureType": "road.highway",
            "stylers": [{
              "hue": "#FFC200"
            }, {
              "saturation": -61.8
            }, {
              "lightness": 45.599999999999994
            }, {
              "gamma": 1
            }]
          }, {
            "featureType": "road.arterial",
            "stylers": [{
              "hue": "#FF0300"
            }, {
              "saturation": -100
            }, {
              "lightness": 51.19999999999999
            }, {
              "gamma": 1
            }]
          }, {
            "featureType": "road.local",
            "stylers": [{
              "hue": "#FF0300"
            }, {
              "saturation": -100
            }, {
              "lightness": 52
            }, {
              "gamma": 1
            }]
          }, {
            "featureType": "water",
            "stylers": [{
              "hue": "#0078FF"
            }, {
              "saturation": -13.200000000000003
            }, {
              "lightness": 2.4000000000000057
            }, {
              "gamma": 1
            }]
          }, {
            "featureType": "poi",
            "stylers": [{
              "hue": "#B8CDC2"
            }, {
              "saturation": -1.0989010989011234
            }, {
              "lightness": 11.200000000000017
            }, {
              "gamma": 1
            }]
          }]
        });

        features = [{
          position: new google.maps.LatLng(55.0066605, -7.3467505),
          type: 'blue',
          title: 'Chris Lived here'
        }, {
          position: new google.maps.LatLng(54.4176703, -8.4850056),
          type: 'horse',
          title: 'Chris fell off a horse here, the day he proposed.'
        }, {
          position: new google.maps.LatLng(54.3470806, -7.6398836),
          type: 'pink',
          title: 'Laura Lived here'
        }, {
          position: new google.maps.LatLng(54.6019787, -7.3299775),
          type: 'orange',
          title: 'Chris and Laura now live here'
        }, {
          position: new google.maps.LatLng(51.806100, 0.6891120),
          type: 'orange',
          title: 'Wedding venue'
        }]

        // var marker = new google.maps.Marker({
        //   position: myWeddingVenueLatLng,
        //   map: map,
        //   title: 'Chris proposed here',
        //   icon: {
        //     url: "img/like-black-heart-button.svg",
        //     scaledSize: new google.maps.Size(40, 48)
        //   }
        // });

        var paddleBase = 'https://maps.google.com/mapfiles/kml/paddle/';
        iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
        icons = {
          horse: {
            icon: iconBase + 'horsebackriding.png'
          },
          pink: {
            icon: paddleBase + 'pink-blank.png'
          },
          blue: {
            icon: paddleBase + 'blu-blank.png'
          },
          green: {
            icon: paddleBase + 'grn-blank.png'
          },
          orange: {
            icon: paddleBase + 'orange-blank.png'
          }
        };

        // for (var i = 0, feature; feature = features[i]; i++) {
        //   var marker = new google.maps.Marker({
        //     position: feature.position,
        //     icon: {
        //       url: icons[feature.type].icon,
        //       scaledSize: new google.maps.Size(40, 48)
        //     },
        //     title: feature.title,
        //     map: map
        //   });
        // }

        // Create the DIV to hold the control and call the CenterControl()
        // constructor passing in this DIV.
        var centerControlDiv = document.createElement('div');
        var centerControl = new CenterControl(centerControlDiv, map);

        centerControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);

        // var contentString = '<div id="content">' +
        //   '<div id="siteNotice">' +
        //   '</div>' +
        //   '<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
        //   '<div id="bodyContent">' +
        //   '<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
        //   'sandstone rock formation in the southern part of the ' +
        //   'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
        //   'south west of the nearest large town, Alice Springs; 450&#160;km ' +
        //   '(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
        //   'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
        //   'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
        //   'Aboriginal people of the area. It has many springs, waterholes, ' +
        //   'rock caves and ancient paintings. Uluru is listed as a World ' +
        //   'Heritage Site.</p>' +
        //   '<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
        //   'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
        //   '(last visited June 22, 2009).</p>' +
        //   '</div>' +
        //   '</div>';


        // var infowindow = new google.maps.InfoWindow({
        //   content: contentString
        // });

        // infowindow.open(map, marker);

        // google.maps.event.addListener(map, 'idle', function() {
        //   // google.maps.event.addListener(map, 'zoom_changed', function() {

        //   if (!userMove && userZoom) {
        //     userZoom = false
        //     map.setZoom(9);
        //   }
        //   if (userMove) {
        //     userMove = false
        //     drop()
        //   }
        // });
      }

      function drop() {
        // remove previous marker
        clearMarkers();

        var currentMarker = document.getElementById("currentMarker")
        var feature = features[parseInt(currentMarker.value)]

        //move to new marker position
        panTo(feature.position.lat(), feature.position.lng());
        // map.panTo(feature.position);

        // add new marker to page
        markers.push(new google.maps.Marker({
          position: feature.position,
          icon: {
            url: icons[feature.type].icon,
            scaledSize: new google.maps.Size(40, 48)
          },
          title: feature.title,
          map: map,
          animation: google.maps.Animation.BOUNCE
        }));

        // increment next marker index
        currentMarker.value = parseInt(currentMarker.value) + 1
      }
      var userZoom = false
      var userMove = false

      function one(callback) {
        userZoom = true
        userMove = true

        map.setZoom(7);
      }

      function clearMarkers() {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(null);
        }
        markers = [];
      }

      var panPath = []; // An array of points the current panning action will use
      var panQueue = []; // An array of subsequent panTo actions to take
      var STEPS = 25; // The number of steps that each panTo action will undergo

      function panTo(newLat, newLng) {
        if (panPath.length > 0) {
          // We are already panning...queue this up for next move
          panQueue.push([newLat, newLng]);
        }
        else {
          // Lets compute the points we'll use
          panPath.push("LAZY SYNCRONIZED LOCK"); // make length non-zero - 'release' this before calling setTimeout
          var curLat = map.getCenter().lat();
          var curLng = map.getCenter().lng();
          var dLat = (newLat - curLat) / STEPS;
          var dLng = (newLng - curLng) / STEPS;

          for (var i = 0; i < STEPS; i++) {
            panPath.push([curLat + dLat * i, curLng + dLng * i]);
          }
          panPath.push([newLat, newLng]);
          panPath.shift(); // LAZY SYNCRONIZED LOCK
          setTimeout(doPan, 20);
        }
      }

      function doPan() {
        var next = panPath.shift();
        if (next != null) {
          // Continue our current pan action
          map.panTo(new google.maps.LatLng(next[0], next[1]));
          setTimeout(doPan, 20);
        }
        else {
          // We are finished with this pan - check if there are any queue'd up locations to pan to
          var queued = panQueue.shift();
          if (queued != null) {
            panTo(queued[0], queued[1]);
          }
        }
      }
