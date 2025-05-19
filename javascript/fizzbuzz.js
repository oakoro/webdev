
var fizzlist= []
var count = 1

while (count <= 100) {
  addlist(count) 
  if (count%3 === 0 && count%5 === 0){
    fizzlist.push("FizzBuzz")
  }
  else if (count % 3 === 0 ){
    fizzlist.push("Fizz")
}
else if (count % 5 === 0) {
    fizzlist.push("Buzz")
}else{
  fizzlist.push(count)
}
  count ++
}





console.log(fizzlist)


