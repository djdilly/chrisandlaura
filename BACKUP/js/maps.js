      var map
      var markers = []
      var features = []
      var iconBase
      var icons

      //google maps initialisation
      function initMap() {
        var mapDiv = document.getElementById('map');
        var myCenterLatLng = {
          lat: 54.5945324,
          lng: -4.5
        };

        map = new google.maps.Map(mapDiv, {
          center: myCenterLatLng,
          zoom: 6,
          disableDefaultUI: true,
          draggable: false,
          scrollwheel: false,
          styles: mapStyles
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

        icons = mapIcons;

        // Setup the slider event listener
        $("#loveStorySlider").change(function() {
          $("#floating-inner").attr("hidden","hidden")
          
          var currentMarkerIndex = document.getElementById("loveStorySlider").value
          
          //sloppy lazy coding for displaying correct map label
          for (var i = 0; i < document.getElementById("loveStorySlider").max; i++) {
            $("#" + i).attr("hidden", "hidden");
          }
          $("#" + currentMarkerIndex).removeAttr("hidden");
          
          var currentZoom = map.getZoom()
          var newZoom, newLat, newLng

          if (currentMarkerIndex == 0) {
            newLat = 54.5945324
            newLng = -4.5
            newZoom = 7
            smoothZoomOut(map, newZoom, currentZoom)
            setTimeout(function() {
              panTo(newLat, newLng)
            }, 1000);
            drop()
          }
          else if (currentMarkerIndex == 1 || currentMarkerIndex == 2 || currentMarkerIndex == 3 || currentMarkerIndex == 4)  {
            newLat = 54.5945324
            newLng = -7.66945572
            newZoom = 9
            if (currentZoom > newZoom) {
              smoothZoomOut(map, newZoom, currentZoom)
            }
            else {
              smoothZoom(map, newZoom, currentZoom)
            }
            setTimeout(function() {
              panTo(newLat, newLng)
            }, 1000);
            drop()
          }
          else if (currentMarkerIndex == 5) {
            newLat = 51.806100
            newLng = 0.6891120
            panTo(newLat, newLng)
            setTimeout(function() {
              currentMarkerIndex = document.getElementById("loveStorySlider").value
              newZoom = 14
              smoothZoom(map, newZoom, currentZoom)
            }, 2000);
            drop()
          }
          else {
            $("#floating-inner").removeAttr("hidden")
          }

        });
      }

      function isLocationFree(search) {
        for (var i = 0; i < markers.length; i++) {
          if (markers[i].position.lat() === search.lat() && markers[i].position.lng() === search.lng()) {
            return false
          }
        }
        return true;
      }

      function drop() {
        deleteMarkers()
        
        var newMarkerIndex = document.getElementById("loveStorySlider").value - 1

        if (newMarkerIndex > -1) { //avoid out of bounds exception
          var feature = features[parseInt(newMarkerIndex)]

          // if (isLocationFree(feature.position)) { //don't add a marker more than once
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
          // }
        }
      }

      // the smooth zoom function
      function smoothZoom(map, max, cnt) {
        if (cnt >= max) {
          return;
        }
        else {
          z = google.maps.event.addListener(map, 'zoom_changed', function(event) {
            google.maps.event.removeListener(z);
            smoothZoom(map, max, cnt + 1);
          });
          setTimeout(function() {
            map.setZoom(cnt)
          }, 150); // 80ms is what I found to work well on my system -- it might not work well on all systems
        }
      }
      // the smooth zoom function
      function smoothZoomOut(map, min, cnt) {
        if (cnt < min - 1) {
          return;
        }
        else {
          z = google.maps.event.addListener(map, 'zoom_changed', function(event) {
            google.maps.event.removeListener(z);
            smoothZoomOut(map, min, cnt - 1);
          });
          setTimeout(function() {
            map.setZoom(cnt)
          }, 80); // 80ms is what I found to work well on my system -- it might not work well on all systems
        }
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
      
      // Sets the map on all markers in the array.
      function setMapOnAll(map) {
        for (var i = 0; i < markers.length; i++) {
          markers[i].setMap(map);
        }
      }
      
      // Removes the markers from the map, but keeps them in the array.
      function clearMarkers() {
        setMapOnAll(null);
      }
      
      // Deletes all markers in the array by removing references to them.
      function deleteMarkers() {
        clearMarkers();
        markers = [];
      }

      ////////////////MAP STYLE RESOURCES//////////////////
      var mapStyles = [{
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

      var paddleBase = 'https://maps.google.com/mapfiles/kml/paddle/';
      iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
      var mapIcons = {
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
      }
      