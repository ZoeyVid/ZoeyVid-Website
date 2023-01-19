function elementLoad() {
  document.getElementById("navbar").classList.add("pb-4");
  document.getElementById("footer").classList.add("pt-4");
  document.getElementById("footer").classList.add("mt-auto");
  document.getElementsByTagName('noscript')[0].remove();
  document.getElementById("git").href = git()
  if (document.location.pathname == "/") {
    document.getElementById("navbar").classList.remove("pb-4");
    document.getElementById("footer").classList.remove("pt-4");
    document.getElementById("footer").classList.remove("mt-auto");
    document.getElementById("navbarStartseite").classList.add("bg-gray-900");
    document.getElementById("navbarStartseite").classList.replace("text-gray-300", "text-white");
    document.getElementById("navbarStartseite").classList.remove("hover:bg-gray-700");
    document.getElementById("navbarStartseite").classList.remove("hover:text-white");
    document.getElementById("navbarStartseiteMobile").classList.add("bg-gray-900");
    document.getElementById("navbarStartseiteMobile").classList.replace("text-gray-300", "text-white");
    document.getElementById("navbarStartseiteMobile").classList.remove("hover:bg-gray-700");
    document.getElementById("navbarStartseiteMobile").classList.remove("hover:text-white");
  }
  if (document.location.pathname.startsWith("/projekt")) {
    document.getElementById("navbarProjekte").classList.add("bg-gray-900");
    document.getElementById("navbarProjekte").classList.replace("text-gray-300", "text-white");
    document.getElementById("navbarProjekte").classList.remove("hover:bg-gray-700");
    document.getElementById("navbarProjekte").classList.remove("hover:text-white");
    document.getElementById("navbarProjekteMobile").classList.add("bg-gray-900");
    document.getElementById("navbarProjekteMobile").classList.replace("text-gray-300", "text-white");
    document.getElementById("navbarProjekteMobile").classList.remove("hover:bg-gray-700");
    document.getElementById("navbarProjekteMobile").classList.remove("hover:text-white");
  }
}

function toggleMobile() {
  var mobileMenu = document.getElementById("mobile-menu");
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
  }
}

function git() {
  return "https://github.com/ZoeyVid/ZoeyVid-Webseite/blob/main" +
    window.location.pathname +
    "index.html";
}

function changeExternalLinks() {
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    if (!link.href.startsWith("https://zoeyvid.de")) {
      link.onclick = function () {
         if (confirm("Willst du wirklich zoeyvid.de verlassen, und auf " + link.href + " gehen?") == true) {
          return true;
        } else {
          return false;
        }
      };
    };
  });
}
