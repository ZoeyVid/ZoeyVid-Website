function readHTML(div, url) {
  fetch(url)
    .then((response) => {
      return response.text()
    })
    .then((text) => {
      document.getElementById(div).innerHTML = text
    })
    .then(() => {
      if (div == "footer") {
        elementLoad()
      }
    })
  changeExternalLinks()
  console.log(changeExternalLinks())
}
