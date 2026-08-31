//MIT A-TASK

  // ======> 1-usul

 function countLetter1(harf, soz) {
    let count = 0; 
    for (let x of soz) {
    if ( x === harf) 
        count = count + 1;
    }
    return count;
 }
  console.log("Natija: ", countLetter1("l", "Alisher")); 


  console.log("===============================");
  
  // ======> 2-usul

    const countLetter2 = (harf, soz) => {
        let count = 0;
        for (let x of soz) {
            if (x === harf)
                count++;
        }
        return count;
    };
    console.log("Natija: ", countLetter2("o", "Kodirjonov"));



// 21-22. NodeJS event loop va Callback functionlarni o'rganamiz,  Asynchronous functionlarni qo'llash

// console.log("Jack Ma maslahatlari");
// const list = [
// "yahshi talaba boling", // 0-20
// "togri boshliq tanlang va koproq hato qiling", // 20-30
// "uzingizga ishlashingizni boshlang", // 30-40
// "siz kuchli bo'lgan narsalarni qiling", // 40-50
// "yoshlarga investitsiya qiling", // 50-60
// "endi dam oling, foydasi yoq endi", // 60
// ]

//=========> Callback functionlar

// function maslahatBering(a, callback) {
//     if (typeof a !== "number") callback("Iltimos, raqam kiriting", null);
//     else if (a <= 20) callback(null, list[0]);
//     else if (a > 20 && a <= 30) callback(null, list[1]);
//     else if (a > 30 && a <= 40) callback(null, list[2]);
//     else if (a > 40 && a <= 50) callback(null, list[3]);
//     else if (a > 50 && a <= 60) callback(null, list[4]);
//     else { 
//         setInterval(function() {
//          callback(null, list[5]);
//         },1000);
//      }
// }
//     console.log("Passed here 0");

//     maslahatBering(65, (err, data) => {
//         if (err) console.log("Xatolik:", err);
//         else console.log("Javob:", data);
//     });

//     console.log("Passed here 1");




// ============> Asyncronous functionlar bilan ishlash

//     async function maslahatBering(a) {
//     if (typeof a !== "number") throw new Error("Iltimos, raqam kiriting");
//     else if (a <= 20) return list[0];
//     else if (a > 20 && a <= 30) return list[1];
//     else if (a > 30 && a <= 40) return list[2];
//     else if (a > 40 && a <= 50) return list[3];
//     else if (a > 50 && a <= 60) return list[4];
//     else { 
//         return new Promise((resolve, reject) => {
//             setTimeout(function() {
//                 resolve(list[5]);
//             },5000);
//         });

//         // setTimeout(function() {
//         //  return list[5];
//         // },5000);
//      }
// }

// call via ===> then va catch bilan ishlash
    // console.log("Passed here 0");

    // maslahatBering(25)
    // .then(data => {
    //     console.log("Javob:", data);
    // }).catch(err => {
    //     console.log("Xatolik:", err);
    // });

    // console.log("Passed here 1");


// call via ===> async va await bilan ishlash
    // async function run() {
    //     let javob = await maslahatBering(65);
    //     console.log("Javob:", javob);
    //     javob = await maslahatBering(31);
    //     console.log("Javob:", javob);
    //     javob = await maslahatBering(40);
    //     console.log("Javob:", javob);
        
    // }
    // run();