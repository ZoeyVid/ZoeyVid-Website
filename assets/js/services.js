function getAllServices() {
  fetch("https://zoeyvid.de/assets/services.json")
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      const template = document.getElementById("servicetemplate");
      const servicesElement = document.getElementById("Services");
      Object.keys(json).forEach(element => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".service-title").textContent = element;
        clone.querySelector(".service-description").textContent = json[element].description;
        clone.querySelector(".service-link").href = json[element].link;
        servicesElement.appendChild(clone);
      })
      return json
    })
}