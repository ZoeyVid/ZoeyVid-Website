function countAllRepos() {
  fetch("https://zoeyvid.de/assets/repos/index.json")
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      console.log(Object.keys(json).length)
    })
}

function getAllRepos() {
  fetch("https://zoeyvid.de/assets/repos/index.json")
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      const projects = document.getElementById("Projekte")
      const projectsTemplate = document.getElementById("repoTemplate")
      const topicsTemplate = document.getElementById("topicTemplate")
      Object.keys(json).forEach(element => {
        const data = json[element]
        const clone = projectsTemplate.content.cloneNode(true)
        clone.querySelector(".repo-link").href = "https://zoeyvid.de/project?project=" + element
        clone.querySelector(".repo-title").textContent = data.name + (Boolean(data.fork) ? " (Fork)" : "")
        clone.querySelector(".repo-description").textContent = data.description
        clone.querySelector(".repo-spdx-id").textContent = data.spdx_id
        data.topics.forEach(topic => {
          const topicClone = topicsTemplate.content.cloneNode(true)
          topicClone.querySelector(".topic").textContent = topic
          clone.querySelector(".repo-topics").appendChild(topicClone)
        })
        projects.appendChild(clone)
      })
    })
}

function getProjekt() {
  const urlParams = new URLSearchParams(window.location.search);
  fetch("https://zoeyvid.de/assets/repos/index.json")
    .then((response) => {
      return response.json()
    })
    .then((json) => {
      const data = json[urlParams.get("project")]
      if (!data) {
          window.location.href = "https://zoeyvid.de/"
          return null;
        }
      document.title = data.name + " - ZoeyVid"
      var description = document.createElement('meta'); description.setAttribute('name', 'description'); description.content = data.description; document.getElementsByTagName('head')[0].appendChild(description);
      return data

    }).then((data) => {
      if (!data) return;
      readHTML("Projekt", "https://zoeyvid.de/assets/repos/" + encodeURIComponent(data.name) + ".html")
      document.getElementById("github").innerHTML += "<a href=" + data.html_url + ">View on GitHub</a>"
    })
}
