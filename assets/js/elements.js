function elementLoad() {
document.getElementById("navbar").classList.add("pb-4");
document.getElementsByTagName('noscript')[0].remove();
if(document.location.pathname == "/"){
  document.getElementById("navbar").classList.remove("pb-4");
  document.getElementById("navbarStartseite").classList.add("bg-gray-900");
  document.getElementById("navbarStartseite").classList.replace("text-gray-300", "text-white");
  document.getElementById("navbarStartseite").classList.remove("hover:bg-gray-700");
  document.getElementById("navbarStartseite").classList.remove("hover:text-white");
  document.getElementById("navbarStartseiteMobile").classList.add("bg-gray-900");
  document.getElementById("navbarStartseiteMobile").classList.replace("text-gray-300", "text-white");
  document.getElementById("navbarStartseiteMobile").classList.remove("hover:bg-gray-700");
  document.getElementById("navbarStartseiteMobile").classList.remove("hover:text-white");
}
document.getElementById("footer").classList.add("pt-4");
}

function toggleMobile(){
  var mobileMenu = document.getElementById("mobile-menu");
  if(mobileMenu.classList.contains("hidden")){
    mobileMenu.classList.remove("hidden");
  }else{
    mobileMenu.classList.add("hidden");
  }
}

function git() {
  window.location.href =
    "https://github.com/ZoeyVid/ZoeyVid-Webseite/edit/main" +
    window.location.pathname +
    "index.html";
}