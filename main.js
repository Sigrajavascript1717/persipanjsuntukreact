// Soal:
// Buat fungsi getUserData() yang mensimulasikan permintaan data pengguna dari API menggunakan Promise. Fungsi ini harus mengembalikan objek yang berisi name, age, dan email setelah 1 detik.

// Kemudian buat fungsi Async/Await bernama fetchUserData() untuk memanggil getUserData(). Tampilkan hasil data pengguna di console. Jika ada error, tampilkan pesan "Error fetching user data".

function getUserData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ok = true
            if (ok) {
                resolve({
                    name:"ega",
                    age:23,
                    email:"get@gmail.com"
                })
            }else{
                reject("error geting data")
            }
        }, 1000);
    })
}
async function fetchUserData() {
    try {
        console.log("menapilkan data dari getuserdata")
        const Data= await getUserData()
        console.log("sukses",Data)
    } catch (error) {
        console.error("error fetch",error)
    }
}

fetchUserData()

// Soal 1: Studi Kasus Pengiriman Pesanan
// Buatlah dua fungsi:

// checkOrderStatus(orderId) yang mensimulasikan pengecekan status pesanan dari API menggunakan Promise. Fungsi ini menerima orderId sebagai parameter dan mengembalikan salah satu dari dua status: shipped atau pending setelah 2 detik.

// fetchOrderStatus() yang memanggil checkOrderStatus() dengan menggunakan Async/Await dan menampilkan status pesanan di console. Jika statusnya shipped, tampilkan pesan "Pesanan sudah dikirim!", jika pending, tampilkan pesan "Pesanan masih dalam proses.".

// Jika terjadi error (misalnya, pesanan tidak ditemukan), tampilkan pesan "Error: Pesanan tidak ditemukan.".

function checkOrderStatus(orderId) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const status=Math.random()<0.5 ? "shipped" : "pending"
            if (orderId==="invalid") {
                reject(new Error ("pesanan tidak di temukan"))
            }else{
                resolve(status)
            }
        },2000)
    })
}
async function fetchOrderStatus(orderId) {
   try {
    const status = await checkOrderStatus(orderId)
    console.log(status=== "shipped" ? "pesanan sudah di kirim" :"pesanan dalam proses")
   } catch (error) {
    console.log(error,"eror fetch")
   }
}
fetchOrderStatus(11)



// Soal 2: Studi Kasus Cuaca Kota
// Buatlah dua fungsi:

// getCityWeather(city) yang mensimulasikan pengambilan data cuaca dari API menggunakan Promise. Fungsi ini menerima parameter city (nama kota) dan mengembalikan objek berisi informasi cuaca seperti temperature, condition (sunny, rainy, cloudy) setelah 1.5 detik. Jika kota tidak ditemukan, reject promise dengan pesan error "City not found".

// fetchCityWeather() yang menggunakan Async/Await untuk mengambil cuaca kota dari fungsi getCityWeather(). Tampilkan hasil cuaca di console dalam format "Cuaca di [city]: [temperature] derajat, kondisi [condition]". Jika terjadi error, tampilkan pesan "Error: [error message]".

function getCityWeather(city) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const cities = {
          jakarta: { temperature: 30, condition: 'sunny' },
          bandung: { temperature: 25, condition: 'cloudy' }
        };
  
        const weatherData = cities[city.toLowerCase()];
  
        if (weatherData) {
          resolve(weatherData);
        } else {
          reject(new Error("City not found"));
        }
      }, 1500);
    });
  }
  
  async function fetchCityWeather(city) {
    try {
      const weatherData = await getCityWeather(city);
      console.log(`Cuaca di ${city}: ${weatherData.temperature} derajat, kondisi ${weatherData.condition}`);
    } catch (error) {
      console.error(`Error: ${error.message}`);
    }
  }
  
  // Call the fetchCityWeather function with the desired city name
  fetchCityWeather("jakarta");

//   getCurrencyRate(currency) yang mensimulasikan pengambilan data kurs mata uang dari API menggunakan Promise. Fungsi ini menerima parameter currency (misalnya "USD", "EUR") dan mengembalikan objek yang berisi nilai tukar seperti rate setelah 2 detik. Jika mata uang tidak ditemukan, reject promise dengan pesan error "Currency not found".

// fetchCurrencyRate() yang menggunakan Async/Await untuk mengambil kurs mata uang dari fungsi getCurrencyRate(). Tampilkan hasil kurs di console dalam format "Nilai tukar [currency]: [rate] IDR". Jika terjadi error, tampilkan pesan "Error: [error message]".

function getCurrencyRate(currency) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            const mataUang={
                USD :1500,
                EUR:75000,
            }
            const koversi = mataUang[currency]
            if (koversi) {
                resolve(koversi)
            } else {
                reject(new Error("fail koversi data itu blm ada" +" "+currency))
            }
        },2000)
    })
}
async function fetchCurrencyRate(currency) {
    try {
        const API =await getCurrencyRate(currency)
        console.log(`mata uang nya ${currency} dan ${API} Idr`)
    } catch (error) {
        console.error(error)
    }
}

fetchCurrencyRate("USD")

fetchCurrencyRate("DOler")

// Soal: Studi Kasus Cek Stok Buku
// Buatlah dua fungsi:

// getBookStock(book) yang mensimulasikan pengambilan data stok buku dari API menggunakan Promise. Fungsi ini menerima parameter book (misalnya "Harry Potter", "Lord of the Rings") dan mengembalikan objek yang berisi jumlah stok seperti stock setelah 1.5 detik. Jika buku tidak ditemukan, reject promise dengan pesan error "Book not found".

// fetchBookStock() yang menggunakan Async/Await untuk mengambil stok buku dari fungsi getBookStock(). Tampilkan hasil stok di console dalam format "Stok [book]: [stock] buku". Jika terjadi error, tampilkan pesan "Error: [error message]".

function getBookStock(book) {
  return new Promise((resolve, reject) => {
     setTimeout(()=>{
      const buku ={
          "harry potter":2,
          "lord of the rigns":4
      }
      const stockBuku= buku[book.toLowerCase()]
      if (!stockBuku) {
          reject(new Error("stock buku tidak ada"))
      } else {
          resolve(stockBuku)
      }
     },1500)
  })
}

async function fetchBookStock(book) {
  try {
      const PanggilApi= await getBookStock(book)
      const json =  PanggilApi
      console.log(`stock buku ${book} : ${json}`)
  } catch (error) {
      console.error(`erorr ${error.message}`)
  }
}

fetchBookStock("harry potter")
fetchBookStock("harry potte")

// getItemQuantity(item) yang mensimulasikan pengambilan data jumlah inventaris barang dari API menggunakan Promise. Fungsi ini menerima parameter item (misalnya "apples", "oranges") dan mengembalikan objek yang berisi jumlah barang seperti quantity setelah 1.5 detik. Jika barang tidak ditemukan, reject promise dengan pesan error "Item not found".

// fetchItemQuantity() yang menggunakan Async/Await untuk mengambil jumlah barang dari fungsi getItemQuantity(). Tampilkan hasil jumlah barang di console dalam format "Jumlah [item]: [quantity] unit". Jika terjadi error, tampilkan pesan "Error: [error message]".

function getItemQuantity(item) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const buah = {
                apple:2,
                orange:40
            }
            const status = buah[item]
            if (status) {
                resolve(status)
            } else {
                reject(`buah ${item} belum ada stock`)
            }
        }, 1500);
    })
}

async function fetchItemQuantity(item) {
    try {
        const fetch = await getItemQuantity(item)
        console.log(`stock buah ${item} sebanyak ${fetch}`)
    } catch (error) {
        console.error(error)
    }
}

fetchItemQuantity("apple")
fetchItemQuantity("jeruk")