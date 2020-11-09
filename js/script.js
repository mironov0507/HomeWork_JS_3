////// Zadanie 1 ///////////////////////////////////////////

let i = 1;

while(i <= 50){
    console.log(i);
    i++;
}

let i1 = 35;

while(i1 >= 8){
    console.log(i1);
    i1--;
}

////// Zadanie 2 ///////////////////////////////////////////

let i2 = 89;

while(i2 >= 11){
    document.write(`${i2} <br/>`);
    i2--;
}

////// Zadanie 3 ///////////////////////////////////////////

let a = 100;
let sum = 0;

for(let i3 = 0; i3 <= a; i3++){
    sum +=i3;
}
console.log(`Сумма чисел равна ${sum}`);

////// Zadanie 4 ///////////////////////////////////////////

let a1 = 5;
sum1 = 0;

for(let i4 = 1; i4 <= a1; i4++){
    sum1 = 0;
    console.log(`Сумма числа ${i4}`);
    for(let j = 1; j <= i4; j++){
        sum1 +=j;
        console.log(sum1);
    }
}