// Soal 1:
// Buat sebuah arrow function bernama multiplyByTwo yang menerima satu parameter num dan mengembalikan nilai num dikalikan 2.
const multiplyByTwo=(num)=>{
    return num*2
}
console.log(multiplyByTwo(2))

// Soal 2:
// Buat sebuah arrow function bernama isEven yang menerima satu parameter num dan mengembalikan true jika num adalah bilangan genap, dan false jika tidak.

const isEven=(num)=>{
    if (num%2===0) {
        return `${num} genap`
    }else{
        return `${num} ganjil`
    }
}

console.log(isEven(2)) //genap
console.log(isEven(3)) //ganjil

// Buat sebuah arrow function bernama getFullName yang menerima dua parameter firstName dan lastName, kemudian mengembalikan nama lengkap dalam format Nama Lengkap: firstName lastName.

const getFullName =(fristName,lastName)=>{
    return `Nama Lengkap : ${fristName} ${lastName}`
}

console.log(getFullName("muhammad","ega"))

// Soal 4:
// Buat sebuah arrow function bernama filterNumbers yang menerima sebuah array numbers dan mengembalikan array baru yang hanya berisi angka-angka lebih dari 10.
const filterNumbers=(numbers)=>{
    return numbers.filter((cek=>cek >10))
}
const myNumbers = [3, 7, 12, 5, 18, 9];
const filter = filterNumbers(myNumbers)
console.log(filter)

// Soal 5:
// Buat sebuah arrow function bernama sumArray yang menerima sebuah array numbers dan mengembalikan jumlah semua elemen dalam array tersebut.
const sumArray = (numbers) => {
    return numbers.reduce((total, current) => total + current, 0);
};
const dataArray = [1, 2, 3, 4, 5]; // Pastikan ini adalah array
const total = sumArray(dataArray);
console.log(total); // Output: 15

// Soal 6:
// Studi Kasus:
// Buat sebuah arrow function bernama multiplyByThree yang menerima satu parameter num dan mengembalikan nilai num dikalikan 3.
const multiplyByThree=(num)=>{
    return num *3
}
console.log(multiplyByThree(4))

// Soal 7:
// Studi Kasus:
// Buat sebuah arrow function bernama isOdd yang menerima satu parameter num dan mengembalikan true jika num adalah bilangan ganjil, dan false jika tidak.

const isOdd =(num)=>{
    if (num%2===0) {
        return `${num} genap`
    } else {
        return `${num} ganjil`
    }
}
console.log(isOdd(2))
console.log(isOdd(3))

// Soal 8:
// Buat sebuah arrow function bernama getInitials yang menerima dua parameter firstName dan lastName, kemudian mengembalikan inisial dalam format "Inisial: F.L" (misalnya "Inisial: M.E" untuk Muhammad Ega).
const getInitials =(fristName,lastName)=>{
    return `inisial ${fristName[0]}.${lastName[0]} adalah : ${fristName} ${lastName} `
}
console.log(getInitials("muhammad","ega"))

// Soal 9:
// Studi Kasus:
// Buat sebuah arrow function bernama filterStrings yang menerima sebuah array items dan mengembalikan array baru yang hanya berisi string dari array tersebut.
const filterStrings =(items)=>{
    return items.filter((cek=> typeof cek ==="string"))
}
const data=["2","4","10"]
const filternomor=filterStrings(data)
console.log(filternomor)

// Soal 10:
// Studi Kasus:
// Buat sebuah arrow function bernama sumNumbers yang menerima sebuah array numbers dan mengembalikan jumlah semua elemen dalam array tersebut.
const sumNumbers=(numbers)=>{
    return numbers.reduce((hasil,cerunt)=>hasil+cerunt,0)
}
const nomorarray=[1,2,3,4,5,6]
const ceknomor=sumNumbers(nomorarray)
console.log(ceknomor)