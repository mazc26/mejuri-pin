export const apiParser = (route, method) => {
  const BASE_URL = "http://mejuri-fe-challenge.s3-website-us-east-1.amazonaws.com";
  const url = !route ? 
  `${BASE_URL}/shop_all.json` :
  `${BASE_URL}/${route === "necklaces" ? 'pendants' : route}.json`;

  return (
    fetch(url , {
      method,
        headers: {
          "Content-Type": "text/plain"
        },
    })
    .then((response) => response.json())
    .then(data => data)
    .catch()
  )
};