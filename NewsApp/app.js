let newsul = document.getElementById("newsul")

let liItems = news.articles.map(function(n) {
      return `<li>
              <h2> ${n.title} </h2>
              <p> ${n.author}</p>
              <p> ${n.description}</p>
              <img src =${n.urlToImage}>
              <br>
              <br>
              <a href = "${n.url}"> ${n.url} </a>
              <p> ${n.publishedAt} </p>
              <hr>
              </li>`

})

newsul.innerHTML = liItems.join('')
