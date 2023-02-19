function getAllServices() {
  console.log("Getting all services...(Test)")
    fetch("https://zoeyvid.de/assets/services.json")
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        Object.keys(json).forEach(element => {
          document.getElementById("Services").innerHTML += "<a href='" + json[element].link  + "' class='text-white'><div class='bg-gray-800 rounded-lg p-4 m-2'><h1 class='text-2xl font-bold hover:underline'>" + element + "</h1><p class='text-gray-300'>" + json[element].description + "</p><div id='" + element  + "Topics' class='pt-2'></div></div></a>"
        })
        return json
      })
  }