  const url = "https://openlibrary.org/search.json?q=test";
  const headers = new Headers({
    "User-Agent": "MyAppName/1.0 (yannokra01@gmail.com)",
  });
  const options = {
    method: "GET",
    headers: headers,
  };
  fetch(url, options)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error("Error:", error));