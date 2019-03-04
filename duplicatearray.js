let duplicatenames = ["John", "Mary", "Alex", "Steve", "Mary", "John"]
let correctednames = []
let length = duplicatenames.length

for (let index = 0; index < length; index++){
  if(correctednames.indexOf(duplicatenames[index]) === -1){
    correctednames.push(duplicatenames[index]);
  }
}
console.log(correctednames)
