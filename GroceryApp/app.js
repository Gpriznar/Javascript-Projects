let btnadd = document.getElementById("btnadd")
let btndelete = document.getElementById("btndelete")
let storenameinput = document.getElementById("storenameinput")
let btnicon = document.getElementById("btnicon")
let allstoresUL = document.getElementById("allstoresUL")
let database = firebase.database()

let stores = []


database.ref("store")
.on("child_removed",function(snapshot){
  stores = stores.filter((store) => {
    return store.key != snapshot.key
  })
  displayStores()
})

database.ref("store")
.on("child_added",function(snapshot){
  let store = new Store(snapshot.key,snapshot.val().name)
  stores.push(store)
})

// Add Button //

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
    </li>`
  })
  allstoresUL.innerHTML = storesLI.join("")
}

// Delete Store Function //

function deleteStore(key) {
  database.ref("store").child(key).remove()
}
