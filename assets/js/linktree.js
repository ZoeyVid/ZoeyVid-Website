function loadView() {
    const urlParams = new URLSearchParams(window.location.search);
    //https://zoeyvid.de/social/view/?person=david
    if (urlParams.get("person") !== "zoey" || urlParams.get("person") !== "zoeyvid" || urlParams.get("person") !== "david") alert(urlParams.get("person"))
    document.getElementsByTagName('body')[0].classList.add("bg-gradient-to-r");
    document.getElementsByTagName('body')[0].classList.add("from-cyan-500");
    document.getElementsByTagName('body')[0].classList.add("to-blue-500");
}