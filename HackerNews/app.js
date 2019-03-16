let newsUL = document.getElementById("newsUL")

fetch('https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty')
.then(function(response){
  return response.json()
}) .then(function(newsid){
  for(let index = 0;  index < newsid.length; index++)
  fetch(`https://hacker-news.firebaseio.com/v0/item/${newsid[index]}.json?print=pretty`)
.then(function(response){
  return response.json()
}).then(function(newsItems){

  newsUL.innerHTML +=   `<li>
                          <h1> ${newsItems.title} </h1>
                          <a href=${newsItems.url}> Link: ${newsItems.url} </a>
                          <p> Author: ${newsItems.by}</p>
                          <p> ${Date(newsItems.time*1000)} </p>
                          </li>`
    })
  })
