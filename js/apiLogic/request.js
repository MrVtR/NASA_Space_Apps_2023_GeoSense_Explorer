function makePostRequest(event) {
  event.preventDefault();
  const element = document.getElementById('loading');
  element.classList.remove('hidden-element');
  element.classList.add('visible-element');

  console.log('Fazendo requisição');
  const url = 'https://nasa-api-sij3k2u3xa-rj.a.run.app/nasa/writeTif';

  var longitude = document.getElementById('longitude').value;
  var latitude = document.getElementById('latitude').value;

  // Set the variable in localStorage
  localStorage.setItem('latitude', latitude);
  localStorage.setItem('longitude', longitude);

  const data = {
    lon: parseFloat(longitude),
    lat: parseFloat(latitude),
  };

  axios
    .post(url, data)
    .then((response) => {
      console.log('Response:', response.data);
      window.location.href = 'dashboard.html';
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function makePostRequestExploration() {
  const dataForex = document.getElementById('dataforex');

  if (!dataForex.classList.contains('active')) {
    const element = document.getElementById('loading2');
    element.classList.remove('hidden-element');
    element.classList.add('visible-element');

    console.log('Fazendo requisição');
    const url = 'https://nasa-api-sij3k2u3xa-rj.a.run.app/nasa/values';
    const latitude = document.getElementById('latitude').value;
    const longitude = document.getElementById('longitude').value;

    const data = {
      lon: parseFloat(longitude),
      lat: parseFloat(latitude),
    };

    axios
      .post(url, data)
      .then((response) => {
        const panel = document.getElementById('panel-details');
        console.log('Response:', response.data);
        element.classList.remove('visible-element');
        element.classList.add('hidden-element');
        panel.classList.remove('hidden-element');
        panel.classList.add('visible-element');

        var value = response.data.FADI;
        console.log(value);
        const indicator = document.querySelector('.indicator');
        indicator.style.left = value * 10 + '%';

        if (!response.data.temperature.low_temperatures) {
          const icon = document.getElementById('icon0');
          icon.classList.add('hidden-element');
          icon.classList.remove('visible-element');
        } else {
          const icon = document.getElementById('icon0');
          icon.classList.add('visible-element');
          icon.classList.remove('hidden-element');
        }

        if (!response.data.temperature.high_temperatures) {
          const icon = document.getElementById('icon1');
          icon.classList.add('hidden-element');
          icon.classList.remove('visible-element');
        } else {
          const icon = document.getElementById('icon1');
          icon.classList.add('visible-element');
          icon.classList.remove('hidden-element');
        }

        if (!response.data.radiation.high_uv_radiation) {
          const icon = document.getElementById('icon2');
          icon.classList.add('hidden-element');
          icon.classList.remove('visible-element');
        } else {
          const icon = document.getElementById('icon2');
          icon.classList.add('visible-element');
          icon.classList.remove('hidden-element');
        }

        if (!response.data.rain.heavy_rain) {
          const icon = document.getElementById('icon3');
          icon.classList.add('hidden-element');
          icon.classList.remove('visible-element');
        } else {
          const icon = document.getElementById('icon3');
          icon.classList.add('visible-element');
          icon.classList.remove('hidden-element');
        }

        if (!response.data.terrain.steep_terrain) {
          const icon = document.getElementById('icon4');
          icon.classList.add('hidden-element');
          icon.classList.remove('visible-element');
        } else {
          const icon = document.getElementById('icon4');
          icon.classList.add('visible-element');
          icon.classList.remove('hidden-element');
        }

        if (!response.data.volcan.volcanic_activity) {
          const icon = document.getElementById('icon5');
          icon.classList.add('hidden-element');
          icon.classList.remove('visible-element');
        } else {
          const icon = document.getElementById('icon5');
          icon.classList.add('visible-element');
          icon.classList.remove('hidden-element');
        }

        if (!response.data.earthquake.earthquakes) {
          const icon = document.getElementById('icon6');
          icon.classList.add('hidden-element');
          icon.classList.remove('visible-element');
        } else {
          const icon = document.getElementById('icon6');
          icon.classList.add('visible-element');
          icon.classList.remove('hidden-element');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  } else {
    const panel = document.getElementById('panel-details');
    panel.classList.remove('visible-element');
    panel.classList.add('hidden-element');

    const element = document.getElementById('loading2');
    element.classList.remove('visible-element');
    element.classList.add('hidden-element');

    const icons = document.querySelectorAll('.icon');
    icons.forEach((icon) => {
      icon.classList.remove('visible-element');
      icon.classList.remove('hidden-element');
    });
  }
}

function makePostRequestExplorationDashboard() {
  const latitude = localStorage.getItem('latitude');
  const longitude = localStorage.getItem('longitude');

  const element = document.getElementById('loading3');
  element.classList.remove('hidden-element');
  element.classList.add('visible-element');

  console.log('Fazendo requisição');
  const url = 'https://nasa-api-sij3k2u3xa-rj.a.run.app/nasa/values';

  const data = {
    lon: parseFloat(longitude),
    lat: parseFloat(latitude),
  };

  axios
    .post(url, data)
    .then((response) => {
      const meter = document.getElementById('meter');
      const icons = document.getElementById('icons');

      console.log('Response:', response.data);

      element.classList.remove('visible-element');
      element.classList.add('hidden-element');

      meter.classList.remove('hidden-element');
      meter.classList.add('visible-element');

      icons.classList.remove('hidden-element');
      icons.classList.add('visible-element');

      var value = response.data.FADI;
      console.log(value);
      const indicator = document.querySelector('.indicator');
      indicator.style.left = value * 10 + '%';

      if (!response.data.temperature.low_temperatures) {
        const icon = document.getElementById('icon0');
        icon.classList.add('hidden-element');
        icon.classList.remove('visible-element');
      } else {
        const icon = document.getElementById('icon0');
        icon.classList.add('visible-element');
        icon.classList.remove('hidden-element');
      }

      if (!response.data.temperature.high_temperatures) {
        const icon = document.getElementById('icon1');
        icon.classList.add('hidden-element');
        icon.classList.remove('visible-element');
      } else {
        const icon = document.getElementById('icon1');
        icon.classList.add('visible-element');
        icon.classList.remove('hidden-element');
      }

      if (!response.data.radiation.high_uv_radiation) {
        const icon = document.getElementById('icon2');
        icon.classList.add('hidden-element');
        icon.classList.remove('visible-element');
      } else {
        const icon = document.getElementById('icon2');
        icon.classList.add('visible-element');
        icon.classList.remove('hidden-element');
      }

      if (!response.data.rain.heavy_rain) {
        const icon = document.getElementById('icon3');
        icon.classList.add('hidden-element');
        icon.classList.remove('visible-element');
      } else {
        const icon = document.getElementById('icon3');
        icon.classList.add('visible-element');
        icon.classList.remove('hidden-element');
      }

      if (!response.data.terrain.steep_terrain) {
        const icon = document.getElementById('icon4');
        icon.classList.add('hidden-element');
        icon.classList.remove('visible-element');
      } else {
        const icon = document.getElementById('icon4');
        icon.classList.add('visible-element');
        icon.classList.remove('hidden-element');
      }

      if (!response.data.volcan.volcanic_activity) {
        const icon = document.getElementById('icon5');
        icon.classList.add('hidden-element');
        icon.classList.remove('visible-element');
      } else {
        const icon = document.getElementById('icon5');
        icon.classList.add('visible-element');
        icon.classList.remove('hidden-element');
      }

      if (!response.data.earthquake.earthquakes) {
        const icon = document.getElementById('icon6');
        icon.classList.add('hidden-element');
        icon.classList.remove('visible-element');
      } else {
        const icon = document.getElementById('icon6');
        icon.classList.add('visible-element');
        icon.classList.remove('hidden-element');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function teste() {
  // Retrieve the variable from localStorage
  const lat = localStorage.getItem('latitude');
  const lon = localStorage.getItem('longitude');

  console.log('Lat:' + lat);
  console.log('Lat:' + lon);
}

function makePostRequestBody() {
  // event.preventDefault();
  const element = document.getElementById('loading');
  console.log(element);

  console.log('Fazendo requisição');
  const url = 'https://nasa-api-sij3k2u3xa-rj.a.run.app/nasa/writePngImage';

  const data = {
    type: 'normal',
  };

  axios
    .post(url, data, { responseType: 'arraybuffer' })
    .then((response) => {
      element.classList.remove('visible-element');
      element.classList.add('hidden-element');
      const imgData = new Uint8Array(response.data);
      const blob = new Blob([imgData], { type: 'image/png' });
      const imgUrl = URL.createObjectURL(blob);

      // Display the image in an <img> element
      const imgElement = document.createElement('img');
      imgElement.src = imgUrl;

      // Apply CSS styles for resizing
      imgElement.style.maxHeight = '400px';

      // Append the image element to an HTML element with id "image-container"
      const imageContainer = document.getElementById('image-container');

      // Clear all existing children
      imageContainer.textContent = '';

      imageContainer.appendChild(imgElement);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function makePostRequestImage(typeImage) {
  // event.preventDefault();
  const element = document.getElementById('loading');
  element.classList.remove('hidden-element');
  element.classList.add('visible-element');
  console.log(element);

  console.log('Fazendo requisição');
  const url = 'https://nasa-api-sij3k2u3xa-rj.a.run.app/nasa/writePngImage';

  const data = {
    type: typeImage,
  };
  console.log(data);

  axios
    .post(url, data, { responseType: 'arraybuffer' })
    .then((response) => {
      element.classList.remove('visible-element');
      element.classList.add('hidden-element');
      const imgData = new Uint8Array(response.data);
      const blob = new Blob([imgData], { type: 'image/png' });
      const imgUrl = URL.createObjectURL(blob);

      // Display the image in an <img> element
      const imgElement = document.createElement('img');
      imgElement.src = imgUrl;

      // Apply CSS styles for resizing
      imgElement.style.maxHeight = '400px';

      // Append the image element to an HTML element with id "image-container"
      const imageContainer = document.getElementById('image-container');

      // Clear all existing children
      imageContainer.textContent = '';

      imageContainer.appendChild(imgElement);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
