function countAllRepos() {
  fetch("https://zoeyvid.de/assets/repos/index.json")
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      console.log(Object.keys(json).length)
    })
}

function getAllRepos() {
  fetch("https://zoeyvid.de/assets/repos/index.json")
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      json.forEach(element => {
        console.log(element)
      });
    })
}

function getProjekt() {
  const urlParams = new URLSearchParams(window.location.search);
  var exist = false
  fetch("https://zoeyvid.de/assets/repos/index.json")
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      Object.keys(json).forEach(element => {
        if(element == urlParams.get("projekt")){
          exist = true
          document.title = element + " - ZoeyVid"
          var description = document.createElement('meta');  description.setAttribute('name', 'description');  description.content = "TEST";  document.getElementsByTagName('head')[0].appendChild(description);
          // Set Description
        }
      })
    }).then(() => {
      if(!exist) window.location.href = "https://zoeyvid.de/"
      readHTML("Projekt", "https://zoeyvid.de/assets/repos/" + urlParams.get("projekt") + ".html")
    })
}