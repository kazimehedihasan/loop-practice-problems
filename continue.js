var numbers = [45, 87, 89, 56, 32, 51, 25, 188, 41, 25, 98];
for(var i = 0; i < 7; i++){
    var number = numbers[i];
    if(number > 50){
        continue;
    }
    console.log(number);
}