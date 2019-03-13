let COFFEEURL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"
let btnicon = document.getElementById("btnicon")
let btnneworder = document.getElementById("btnneworder")
let allordersUL = document.getElementById("allordersUL")

function reload() {
  location.reload();
}

// Show All Orders //


btnicon.addEventListener('click',function(){

  fetch(COFFEEURL)
    .then(function(response) {
      return response.json()
    }).then(function(json) {
      (Object.keys(json)).forEach(function(info) {
          let orderinfo =   `<li>
                            <p> Email: ${json[info].emailAddress}</p>
                            <p> Coffee: ${json[info].coffee} </p>
                            </li>`

          allordersUL.innerHTML += orderinfo
      })
    })
  })

//Add A New Order //

btnneworder.addEventListener('click',function() {

  let neworderemail = document.getElementById("neworderemail")
  let newordercoffee = document.getElementById("newordercoffee")

    let neworder = {emailAddress: neworderemail.value, coffee: newordercoffee.value}

    console.log(JSON.stringify(neworder))

    fetch('http://dc-coffeerun.herokuapp.com/api/coffeeorders/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(neworder)
  }).then(function(response){
    return response.json()
  }).then(function(info){
    alert("Your Order has been Added!")
    reload()
 })
})


// Search for an Order //

btnsearch.addEventListener('click',function() {

  let btnsearch = document.getElementById("btnsearch")
  let searchresultUL = document.getElementById("searchresultUL")
  search = searchemail.value

  fetch(`http://dc-coffeerun.herokuapp.com/api/coffeeorders/${search}`)
  .then(function(response){
    return response.json()
  }).then(function(json){
    let coffeeInfo = `<li> Email: ${json.emailAddress}  Coffee: ${json.coffee}</li>`

    searchresultUL.innerHTML += coffeeInfo

  })
})

// Delete an Order //

btndelete.addEventListener('click',function() {

  let btndelete = document.getElementById("btndelete")
  search = searchemail.value

  fetch(`http://dc-coffeerun.herokuapp.com/api/coffeeorders/${search}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
  }).then(function(response){
    return response.json()
  }).then(function(DeleteInfo){
    alert("Order Deleted")
    reload()
  })
})
