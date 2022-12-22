function navbarLoad() {
document.getElementById("navbar").classList.add("pb-4");
document.getElementsByTagName('noscript')[0].remove();
console.log(document.location.pathname)
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
}

function toggleMobile(){
  var mobileMenu = document.getElementById("mobile-menu");
  if(mobileMenu.classList.contains("hidden")){
    mobileMenu.classList.remove("hidden");
  }else{
    mobileMenu.classList.add("hidden");
  }
}