function makePostRequest() {
  console.log('Fazendo requisição');
  const url = 'https://nasa-api-sij3k2u3xa-rj.a.run.app/nasa/values'; // Replace with your API endpoint URL

  const data = {
    lon: -47.0616,
    lat: -22.9064,
  };

  const xhr = new XMLHttpRequest();
  xhr.open('POST', url, true);
  xhr.setRequestHeader('Content-Type', 'application/json');

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log('Response:', response);
        // Handle the response data here
      } else {
        console.error('Error:', xhr.status, xhr.statusText);
        // Handle errors here
      }
    }
  };

  xhr.send(JSON.stringify(data));
}
