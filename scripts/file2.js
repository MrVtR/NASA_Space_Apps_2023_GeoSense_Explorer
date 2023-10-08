function makePostRequest() {
  const url = 'https://nasa-api-sij3k2u3xa-rj.a.run.app'; // Replace with your desired API endpoint URL

  const data = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  };

  axios
    .get(url)
    .then((response) => {
      console.log('Response:', response);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}

function test() {
  const button = document.getElementById('post-btn');

  button.addEventListener('click', async (_) => {
    try {
      const response = await fetch('yourUrl', {
        method: 'post',
        body: {
          // Your body
        },
      });
      console.log('Completed!', response);
    } catch (err) {
      console.error(`Error: ${err}`);
    }
  });
}
