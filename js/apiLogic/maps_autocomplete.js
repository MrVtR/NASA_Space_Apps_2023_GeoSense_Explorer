function initAutocomplete() {
    var input = document.getElementById('location');
    var autocomplete = new google.maps.places.Autocomplete(input);
    
    const latitudeInput = document.getElementById('latitude');
    const longitudeInput = document.getElementById('longitude');

    autocomplete.addListener('place_changed', function() {
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        window.alert("No details available for entry: '" + place.name + "'");
        return;
      }
      
      var lat = place.geometry.location.lat();
      var lng = place.geometry.location.lng();

      console.log(lat);
      console.log(lng);
      
      latitudeInput.value = lat;
      longitudeInput.value = lng;
      
      addPoint.click();
    });
    
    input.placeholder = '';
  }
  
  google.maps.event.addDomListener(window, 'load', initAutocomplete);

  