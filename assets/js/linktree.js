function loadView() {
  const urlParams = new URLSearchParams(window.location.search);
  const persons = ["zoey", "zoeyvid", "david"];
  if (!persons.includes(urlParams.get("person"))) window.location.href = "https://zoeyvid.de/"
  fetch("https://zoeyvid.de/assets/socials/" + urlParams.get("person") + ".json")
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      document.getElementsByTagName('body')[0].classList.add("bg-linear-to-r", json.colorFrom, json.colorTo);
      document.getElementById("bild").src = json.profilbild;
      document.getElementById("name").textContent = json.name;
      document.getElementById("bio").textContent = json.bio;
      document.title = json.name + " - Linktree";
      const links = document.getElementById("links");
      const template = document.getElementById("linktemplate");
      json.links.forEach(element => {
        const linkElement = template.content.cloneNode(true);
        linkElement.querySelector(".link").href = element.url;
        linkElement.querySelector(".link-image").src = "https://zoeyvid.de/assets/bootstrap-icons/" + element.icon + ".svg";
        linkElement.querySelector(".link-text").textContent = element.name;
        links.appendChild(linkElement);
      });
    })
}

function fetchTeamDetails() {
  fetch("https://zoeyvid.de/assets/socials/zoey.json")
    .then((response) => {
      return response.json()
    })
    .then((json) => insertTeamDetails("Zoey", json))
  fetch("https://zoeyvid.de/assets/socials/zoeyvid.json")
    .then((response) => {
      return response.json()
    })
    .then((json) => insertTeamDetails("Zoeyvid", json))
  fetch("https://zoeyvid.de/assets/socials/david.json")
    .then((response) => {
      return response.json()
    })
    .then((json) => insertTeamDetails("David", json));
}

function insertTeamDetails(name, json) {
  document.getElementById("bild" + name).src = json.profilbild;
  document.getElementById("name" + name).textContent = json.name;
  document.getElementById("bio" + name).textContent = json.bio;
}