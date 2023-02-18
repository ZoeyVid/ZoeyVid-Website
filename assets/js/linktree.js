function loadView() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("person") !== "zoey" && urlParams.get("person") !== "zoeyvid" && urlParams.get("person") !== "david") window.location.href = "https://zoeyvid.de/"
    fetch("https://zoeyvid.de/assets/socials/" + urlParams.get("person") + ".json")
    .then((response) => {
      return response.json()
    })
    .then((json) => {
        document.getElementsByTagName('body')[0].classList.add("bg-gradient-to-r");
        document.getElementsByTagName('body')[0].classList.add(json.colorFrom);
        document.getElementsByTagName('body')[0].classList.add(json.colorTo);
        document.getElementById("bild").src = json.profilbild;
        document.getElementById("name").innerHTML = json.name;
        document.getElementById("bio").innerHTML = json.bio;
        json.links.forEach(element => {
          document.getElementById("links").innerHTML += '<a href="' + element.url + '"><div class="text-center text-white text-2xl font-bold flex items-center justify-center p-6 pt-4 rounded-md hover:bg-gray-700"><img class="p-2 invert" h-4/3 w-auto src="https://zoeyvid.de/assets/bootstrap-icons/' + element.icon + '.svg"></img>' + element.name + '</div></a>';
        });
    })
}
 
function insertTeamDetails() {
    fetch("https://zoeyvid.de/assets/socials/zoey.json")
    .then((response) => {
      return response.json()
    })
    .then((json) => {
        document.getElementById("bildZoey").src = json.profilbild;
        document.getElementById("nameZoey").innerHTML = json.name;
        document.getElementById("bioZoey").innerHTML = json.bio;
    })
    fetch("https://zoeyvid.de/assets/socials/zoeyvid.json")
    .then((response) => {
      return response.json()
    })
    .then((json) => {
        document.getElementById("bildZoeyvid").src = json.profilbild;
        document.getElementById("nameZoeyvid").innerHTML = json.name;
        document.getElementById("bioZoeyvid").innerHTML = json.bio;
    })
    fetch("https://zoeyvid.de/assets/socials/david.json")
    .then((response) => {
      return response.json()
    })
    .then((json) => {
        document.getElementById("bildDavid").src = json.profilbild;
        document.getElementById("nameDavid").innerHTML = json.name;
        document.getElementById("bioDavid").innerHTML = json.bio;
    })
}