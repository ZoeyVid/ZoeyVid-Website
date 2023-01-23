function loadView() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get("person") !== "zoey" && urlParams.get("person") !== "zoeyvid" && urlParams.get("person") !== "david") window.location.href = "https://zoeyvid.de/"
    fetch("https://zoeyvid.de/assets/socials/" + urlParams.get("person") + ".json")
    .then((response) => {
      return response.json()
    })
    .then((json) => {
        console.log(json)
        console.log(json[0])
        document.getElementsByTagName('body')[0].classList.add("bg-gradient-to-r");
        document.getElementsByTagName('body')[0].classList.add("from-" + json[0].colorFrom);
        document.getElementsByTagName('body')[0].classList.add("to-" + json[0].colorTo);
        alert(document.getElementsByTagName('body')[0].classList)
    })
}
