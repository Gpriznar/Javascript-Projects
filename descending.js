let numbers = [3,4,56,7,8,1]

function sort(numbers, i, j){
   let temp = numbers[i]
   numbers[i] = numbers[j]
   numbers[j] = temp
}
function sortNumbers(numbers){
   for(let i = 0; i < numbers.length; i++){
       for(let j = 1; j < numbers.length; j++){
           if(numbers[j - 1] < numbers[j]){
               sort(numbers, j - 1, j)
           }
       }
   }
   return numbers
}

console.log(sortNumbers(numbers.slice()))
