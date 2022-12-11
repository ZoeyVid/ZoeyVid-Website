function test () {
    fetch("https://api.github.com/users/zoeyvid")
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        console.log(json.public_repos)
      })
  }