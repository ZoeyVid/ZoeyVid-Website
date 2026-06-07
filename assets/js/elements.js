function elementLoad() {
  document.getElementById("navbar").classList.add("pb-4");
  document.getElementById("footer").classList.add("pt-4", "mt-auto");
  document.getElementsByTagName('noscript')[0].remove();
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("git").href = git();

  const paths = {
    "/": "navbarStartseite",
    "/socials": "navbarTeam",
    "/services": "navbarServices"
  };

  if (paths[document.location.pathname]) {
    const element = document.getElementById(paths[document.location.pathname]);
    const mobileElement = document.getElementById(paths[document.location.pathname] + "Mobile");
    element.classList.add("bg-gray-900");
    element.classList.replace("text-gray-300", "text-white");
    element.classList.remove("hover:bg-gray-700", "hover:text-white");
    mobileElement.classList.add("bg-gray-900");
    mobileElement.classList.replace("text-gray-300", "text-white");
    mobileElement.classList.remove("hover:bg-gray-700", "hover:text-white");
  }
}

function toggleMobile() {
  var mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
}

function git() {
  return "https://github.com/ZoeyVid/ZoeyVid-Webseite/blob/main" +
    window.location.pathname +
    "index.html";
}

function changeExternalLinks() {
  const links = document.querySelectorAll("a");
  links.forEach(link => {
    if (new URL(link.href).hostname !== 'zoeyvid.de') {
      link.onclick = function () {
        if (confirm("Do you want to leave zoeyvid.de and go to " + link.href + "?") == true) {
          return true;
        } else {
          return false;
        }
      };
    };
  });
}
