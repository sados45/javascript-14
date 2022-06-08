
//örnek calisma;

let arrayOfStrings=['', 'a', 'bc', 'def', 'ghij','klmno', 'pqrstu', 'vwxyz12']

function filterStrings(arr, minLength, maxLength){
    arrayOfStrings= arrayOfStrings.filter(str => str.length >= (minLength ?? 0))
    arrayOfStrings= arrayOfStrings.filter(str => str.length <= (maxLength ?? str.length))
    return arrayOfStrings
}

console.log(filterStrings(arrayOfStrings))

//nullishCoalescing ÖNEMLI
let left='a'
let right='b'

const res= left ?? right
console.log(res)

//diger örnek; Find Max Number (reduce); reduce konusundaki prevValue, currentValue önemini anlatiyor. 

const numbers2= [1,12,5,8,37,86,54,33,96]
const maxNumber= numbers2.reduce((prev,curr)=>prev> curr? prev: curr)
console.log(maxNumber)//sayilarin birbiyle olan büyüklük ve kücüklüklerine bakiliyor. tabiki büyük olan 96 sonuc bu cikiyor. 