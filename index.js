const phone1 = ["samsung","iphone","oppo","xiaomi","LG"]

const ambildata = phone[4]
const length = phone.length
const X= phone.slice(2,4)
console.log(X);

const secondCars = ["honda", "toyota", "suzuki", ["almaz", "confero", "airev"]];

const data1 = secondCars.unshift("bmw")
console.log(secondCars)

const phone = ["samsung","iphone","oppo"]
const cars = ["bmw", "hyundai", "alphard"]

const newArray = cars.concat("phone");

console.log(newArray)



const motor = ["legenda","astrea","supra","rx king"]
for(let i = 0; i<=3; i++){
    console.log(motor[3]);
}

const newdata = car.includes("esemka");
const data2 = car.indexOf("xenia")
console.log(data2)

const data3 = [80,50,20,10,0]
let temp = []
for (let i=0; i<=1; i++) {
   if(data[i]>40) {
   temp.push(data3[i])
   
   }

   console.log(temp)
}
const data = [80,50,20,10,0]
function result(par1) {
  par1 = data[2]
  return par1
}

const number = [1,2,3,4,5,6,7,8,9]
const x = number.map((item) => {
    return item
})

console.log(x)

const number1 = [80,50,70,60,50,true,'Daffa']
 const Y = number1.filter((item) => {
    return item
 })

 console.log(Y)

const my = {
    name: "Daffa surya arrayan",
    addres: "Rungkut asri tengah",
    parent: ["itna", "arfan"],
    hobby: "coding",
    city: "surabaya",
}

console.log(my.parent[1])

const me = {
    name: "haki",
    parents: ["devi", "miko"],
    address: "bogor",
    hobby: "coding",
    olderBrother: {
      name: "altaf",
      address: "bogor",
      hobby: ["coding", "sleeping"],
    },
  };
  me.address = 'bandung'
  console.log(me)

//   new object

//let kyky = new Object {}


const NFTStore = {
    artPieces: [
      {
        pieceName: "Emo Flamingos",
        price: 30,
        ownerList: [
          {
            name: "Fida Ernest",
            userID: 23849,
            purchaseDate: "09/13/2021",
          },
          {
            name: "Eric Karger",
            userID: 23510,
            purchaseDate: "09/13/2021",
          },
        ],
      },
      {
        pieceName: "Where is my bit wallet",
        price: 100,
        ownerList: [],
      },
    ],
    storeCredits: 1000,
  };

  const getPurchase = NFTStore.artPieces[0].ownerList[0].purchaseDate
   const create = NFTStore.artPieces[1].ownerList.push('dadang', 'dudung')
  

  console.log(create)
 
  




