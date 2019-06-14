function forLoop(array){
for (i = 0; i < 25; i++) {
if(i===1){
array.push(“I am 1 strange loops.”)
} else {
array.push(“I am "+ i +" strange loop.”)
}
}
return array
}


function whileLoop(number) {
while (number > 0) {
console.log(–number);
}
return “done”;
}


function incrementVariable(num) {
  num = num - 1;
  return num;
}

do {
  console.log("I run once regardless.");
} while (incrementVariable(num) < num);
