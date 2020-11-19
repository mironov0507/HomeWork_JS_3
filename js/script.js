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

let a = 100,
    sum = 0;

for(let i = 0; i <= a; i++){
    sum +=i;
}
console.log(`Сумма чисел равна ${sum}`);

////// Zadanie 4 ///////////////////////////////////////////

let a1 = 5,
    sum1 = 0;

for(let i = 1; i <= a1; i++){
    sum1 = 0;
    console.log(`Число ${i}`);
    for(let j = 1; j <= i; j++){
        sum1 +=j;
        console.log(`Сумма числа ${j} = ${sum1}`);
    }
}

////// Zadanie 5 ///////////////////////////////////////////

////решение через WHile /////

/*let i5 = 8;

while(i5 <= 56) {

    if(i5 % 2 == 0) console.log(i5);
    i5++;

}*/

////решение через FOR /////

for(let i = 8; i <= 56; i++){
    if(i%2 != 0)continue;
    console.log(i);

}

////// Zadanie 6 ///////////////////////////////////////////

let p = 0;

for(let i = 2; i <= 10; i++){
    document.write(`<br/> <strong>${i}</strong>`);
    document.write(`<br/>`);

    for(let j = 1; j <= 10; j++){
        p = i*j;
        document.write(`<br/> ${i} * ${j} = ${p}`);

    }
    document.write(`<br/>`);

}

////// Zadanie 7 ///////////////////////////////////////////

let n = 1000,
    del = n,
    num = 0;

for(let i = 0; ; i++){
    del /= 2;
    num ++;

    if(del <= 50)break;

}

console.log(`${del}  Количество итераций: ${num}`);

////// Zadanie 8 ///////////////////////////////////////////

let sum2 = 0,
    count = 0,
    avg;

while(true){
    let value = prompt('Введите число');
    if(value == 0 || value == ''){
        break;
    }else if(!+value){
        console.log('Ошибка!');
        break;
    }else{
        count++;
        sum2 += +value;
        console.log(`Сумма на шаге${count} = ${sum2}`);

    }
}
avg = sum2/count;
console.log(`Итог ${sum2} и среднее ${avg}`);
