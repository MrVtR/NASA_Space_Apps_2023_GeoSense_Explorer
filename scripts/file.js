function makePostRequest() {
  console.log('Fazendo requisição');
  const url = '127.0.0.1:8080/nasa/values'; // Replace with your API endpoint URL

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
