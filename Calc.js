
function calculator(str) {
let newStringMas = str.split("")

function deleteSpace(value) {
    if (value != " ") {
        return value
    }
}

let filtMas = newStringMas.filter(deleteSpace)

 let inSign = 0
if (filtMas.includes("+")) {
     inSign = filtMas.indexOf("+")
} 
else if (filtMas.includes("-")){
     inSign = filtMas.indexOf("-")
} 
else if (filtMas.includes("*")){
     inSign = filtMas.indexOf("*")
}
 else if (filtMas.includes("/")){
     inSign = filtMas.indexOf("/")
 }
 else {throw  Error("Ошибка")
}

if (inSign === 0) {return console.log("throws Error")}
else if (inSign === filtMas.length - 1) {throw  Error("Ошибка")}

let strS = filtMas.join('')
let filtMasItog = strS.split(filtMas[inSign])
filtMasItog[2] = filtMasItog[1]
filtMasItog[1] = filtMas[inSign]



let  r1 = 0
let  r2 = 0
let indexRim1 = 0
let indexRim2 = 0
const rimNumber = ["I","II","III","IV","V","VI","VII","VIII","IX", "X"]
const arabNumber = ["1","2","3","4","5","6","7","8","9", "10"]
for (let i = 0; i < rimNumber.length; i++){
    if(filtMasItog[0] === rimNumber[i]){
       r1 = r1 + 1
       indexRim1 = i
    }
    if(filtMasItog[2] === rimNumber[i]){
        r2 = r2 + 1

        indexRim2 = i
     }
       
}
let r3 = r1 + r2

if (r3 == 2){
    filtMasItog[0] = arabNumber[indexRim1]
    filtMasItog[2] = arabNumber[indexRim2]
}
else if (r3 == 1){
    throw  Error("Ошибка")
}
else if (r3 == 0){
    let a1 = 0
    let a2 = 0
    for (let i = 0; i < arabNumber.length; i++){
      if (filtMasItog[0] ===  arabNumber[i]){
          a1 = a1 + 1
         let indexArab1 = 0
         indexArab1 = i
      }
         if (filtMasItog[2] ===  arabNumber[i]){
            a2 = a2 + 1
           let indexArab2 = 0
           indexArab2 = i
        }
      }  
if (a1 + a2 !== 2){throw  Error("Ошибка")}

}
else { throw  Error("Ошибка")}

if (filtMasItog.length !== 3) {
    throw  Error("Ошибка")
}

let strCal = filtMasItog[0]+filtMasItog[1]+filtMasItog[2]
let itog = Math.trunc(eval(strCal))
var font_ar = [1,4,5,9,10,40,50,90,100];
var font_rom = ["I","IV","V","IX","X","XL","L","XC","C"]

function to_roman(text) {
    var rezult = "";
    var n = font_ar.length - 1;
    while (text > 0) {
       if (text >= font_ar[n]) {
           rezult += font_rom[n];
           text -= font_ar[n];
       }
       else n--;
    }
    return rezult
}

if (r3 == 2){
     if (itog < 1) {throw  Error("Ошибка")}
     else {itog = to_roman(itog)}
}
return console.log(itog)

 }


let str1 = prompt('Введите выражение')
calculator(str1)
