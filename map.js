
      var selection;

                        

      function initialize() {
       
        var curr;
        var mapOptions = {
          center: { lat: -34.397, lng: 150.644},
          zoom: 8
        };


        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
          google.maps.event.addListener(map, 'click', function(e){
            console.log(e);
            var marker = new google.maps.Marker({
              position:e.latLng,
              map:map
              
            });
            curr=e.latLng;

            var elevator = new google.maps.ElevationService();

            var positionalRequest = {
              'locations': [curr]
            }
console.log(positionalRequest);
            elevator.getElevationForLocations(positionalRequest, function (results, status) {
               
                 var infowindow = new google.maps.InfoWindow({
                        content:""

                      });

                       infowindow.open(map, marker);
               
                if (status == google.maps.ElevationStatus.OK) {
                  if (results[0]){
                    console.log(results[0].elevation);
                    if(results[0].elevation < 0) {
                      infowindow.setContent("<img src='http://www.scriptgodsmustdie.com/wp-content/uploads/personal-submarine.jpg'>" + "<br>" + "<a href='http://www.seamagine.com/small-submarines-models.html'>Submarine for Sale</a>");

                       selection = "http://www.seamagine.com/small-submarines-models.html";
           
                        
                    }

                    else if (results[0].elevation > 0 && results[0].elevation < 100){
                      infowindow.setContent("<img src='http://onscreencars.com/wp-content/uploads/2010/04/aa_1961_ferrari_spyder_ferris_buellers_day_off_garage.jpg'>" + "<br>" + "<a href='http://www.ferrari.com/Pages/Gateway.aspx?CountryId=87&CountryTitle=Canada'>Sports Car For Sale</a>");

                        selection = "http://www.ferrari.com/Pages/Gateway.aspx?CountryId=87&CountryTitle=Canada";
                    }

                    else if(results[0].elevation > 100 && results[0].elevation < 1000){
                      infowindow.setContent("<img src='http://image.fourwheeler.com/f/10134149+w660+h440+re0+cr1+ar0/0701or-01-z%2B1989-jeep-cherokee-xj-4x4-chill-pill%2Bdirt-off-roading.jpg'>" + "<br>" + "<a href='http://wwwa.autotrader.ca/cars/jeep/'>Jeeps For Sale</a>");

                        selection = "http://wwwa.autotrader.ca/cars/jeep/";
                    }

                    else if(results[0].elevation > 1000 && results[0].elevation < 4000){
                      infowindow.setContent("<img src='http://moosemountaininn.com/images/atv1_woods.jpg'>" + "<br>" + "<a href='http://ca.arcticcat.com/?gclid=CI-5zLa19sECFUdffgodyQ0Abg'>ATV's For Sale</a>");

                        selection = "http://ca.arcticcat.com/?gclid=CI-5zLa19sECFUdffgodyQ0Abg";
                    }
                    

                  }


                }
            });



          });

       
      }
      google.maps.event.addDomListener(window, 'load', initialize);
    
      