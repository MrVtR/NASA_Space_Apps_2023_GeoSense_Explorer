function makePostRequest(lon, lat) {
  console.log('Fazendo requisição');
  const url = 'http://localhost:8080/nasa/values';

  const data = {
    lon: -47.0616,
    lat: -22.9064,
  };

  axios
    .post(url, data)
    .then((response) => {
      console.log('Response:', response.data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
