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
        document.getElementById("name").innerHTML = json.name;
        document.getElementById("bild").src = json.profilbild;
        json.links.forEach(element => {
          document.getElementById("links").innerHTML += '<a href="' + element.url + '"><div class="text-center text-white text-2xl font-bold flex items-center justify-center p-6 rounded-md hover:bg-gray-700"><svg class="pre-2"><use href="https://zoeyvid.de/assets/bootstrap-icons/' + element.icon + '.svg" style="--color_fill: #fffff;"></use></svg>' + element.name + '</div></a>';
          console.log(element)
        });
        console.log(json)
    })
}
 
