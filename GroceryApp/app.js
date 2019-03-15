let btnadd = document.getElementById("btnadd")
let btndelete = document.getElementById("btndelete")
let storenameinput = document.getElementById("storenameinput")
let btnicon = document.getElementById("btnicon")
let allstoresUL = document.getElementById("allstoresUL")
let database = firebase.database()

let stores = []
let storesRef = database.ref("store")

database.ref("store")
.on("child_removed",function(snapshot){
  stores = stores.filter((store) => {
    return store.key != snapshot.key
  })
  displayStores()
})

database.ref("store")
.on("child_added",function(snapshot){
  let store = new Store(snapshot.key,snapshot.val().name,snapshot.val().item)
  stores.push(store)
})

database.ref("items")
.on("child_added",function(snapshot){
  let item = new Item(snapshot.key,snapshot.val().name,snapshot.val().item)
  items.push(item)
  displayItems()
})

database.ref("items")
.on("child_removed",function(snapshot){
    items = items.filter((item) => {
      return item.key != snapshot.key
    })
    displayItems()
})

// Add Store Button //

btnadd.addEventListener("click", function() {

  let storename = storenameinput.value
  let storesRef = database.ref("store")
  let storeRef = storesRef.push({
    name: storename,
  })
  displayStores()
})

// View All Stores //

btnicon.addEventListener('click', function(){
  displayStores()
})

// Display Stores Function //

function displayStores() {

  let storesLI = stores.map((store) => {
    return `<li>
        ${store.name}
        <button onclick="deleteStore('${store.key}')">Delete Store</button>
        <input id = "additem" type="text" placeholder="Item Name">
        <button id = "addItemButton"> Add</button>
    </li>`
  })
  allstoresUL.innerHTML = storesLI.join("")

  let addItemButton = document.getElementById("addItemButton")
  let additem = document.getElementById("additem")

  // Add Item to Store //

  addItemButton.addEventListener('click', function() {
  let itemsRef = storesRef.child("Items")
  let itemRef = itemsRef.push({
    item: additem.value
})
})
}

// Delete Store Function //

function deleteStore(key) {
  database.ref("store").child(key).remove()
}

// Add Item to Store //
