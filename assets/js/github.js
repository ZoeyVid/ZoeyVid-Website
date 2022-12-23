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
          console.log(element)
        }
      })
    })
    if(!urlParams.get("projekt")) window.location.href = "https://zoeyvid.de/"
    readHTML("Projekt", "https://zoeyvid.de/assets/repos/" + urlParams.get("projekt") + ".html")
}