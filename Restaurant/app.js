let dishUL = document.getElementById("dishUL")

let liItems = dishes.map(function(dish) {

  return `<li>
          <img src =${dish.imageURL}>
          <h1> ${dish.title} </h1>
          <p> ${dish.description}</p>
          <h3>Price: ${dish.price} </h3>
          </li>`
})

dishUL.innerHTML = liItems.join('')

let startersbutton = document.getElementById("startersbutton")
let entreesbutton = document.getElementById("entreesbutton")
let dessertsbutton = document.getElementById("dessertsbutton")
let menucategory = document.getElementById("menucategory")

// Starters

let starters = dishes.map(function(dish) {
    if (dish.course == "Starters"){
        return `<li>
                <img src =${dish.imageURL}>
                <h1> ${dish.title} </h1>
                <p> ${dish.description}</p>
                <h3> ${dish.price} </h3>
                </li>`
}})

startersbutton.addEventListener("click", function() {
  dishUL.innerHTML = starters.join('')
  menucategory.innerHTML = "Starters"
})

// Entrees

let entrees = dishes.map(function(dish){
    if (dish.course == "Entrees"){
      return `<li>
              <img src =${dish.imageURL}>
              <h1> ${dish.title} </h1>
              <p> ${dish.description}</p>
              <h3> ${dish.price} </h3>
              </li>`

}})

entreesbutton.addEventListener("click", function() {
  dishUL.innerHTML = entrees.join('')
  menucategory.innerHTML = "Entrees"

})

// Desserts

let desserts = dishes.map(function(dish) {
    if (dish.course == "Desserts") {
      return `<li>
              <img src =${dish.imageURL}>
              <h1> ${dish.title} </h1>
              <p> ${dish.description}</p>
              <h3> ${dish.price} </h3>
              </li>`
}})

dessertsbutton.addEventListener("click", function() {
  dishUL.innerHTML = desserts.join('')
  menucategory.innerHTML = "Desserts"
})
