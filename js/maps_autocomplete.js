function initAutocomplete() {
    var input = document.getElementById('location');
    var autocomplete = new google.maps.places.Autocomplete(input);
    
    const latitudeInput = document.getElementById('latitude');
    const longitudeInput = document.getElementById('longitude');

    // Adicione um ouvinte de evento ao objeto autocomplete
    autocomplete.addListener('place_changed', function() {
      var place = autocomplete.getPlace();
      if (!place.geometry) {
        window.alert("No details available for entry: '" + place.name + "'");
        return;
      }
      
      // Extraia as coordenadas de latitude e longitude
      var lat = place.geometry.location.lat();
      var lng = place.geometry.location.lng();

      console.log(lat);
      console.log(lng);
      
      // Atualize os campos de entrada de latitude e longitude
      latitudeInput.value = lat;
      longitudeInput.value = lng;
      
      // Acione o evento de clique no botão 'addPoint'
      addPoint.click();
    });
    
    input.placeholder = '';
  }
  
  google.maps.event.addDomListener(window, 'load', initAutocomplete);

  