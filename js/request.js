function makePostRequest(event) {
  event.preventDefault();
  const element = document.getElementById('loading');
  element.classList.toggle('visible-element');

  console.log('Fazendo requisição');
  const url = 'http://localhost:8080/nasa/values';
  const latitude = document.getElementById('latitude').value;
  const longitude = document.getElementById('longitude').value;

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

function makePostRequest2() {
  console.log('teste' + latitude);
  console.log('aaaa' + longitude);
}