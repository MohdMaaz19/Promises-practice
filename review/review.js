// function printer(callback, num, delay) {
//     setTimeout(() => {
//         callback(num);
//     }, delay);
// }

// let delay = 0;

// for (let i = 1; i < 11; i++) {
//     delay += i * 1000;  
//     printer((num) => {
//         console.log(num);
//     }, i, delay);
// }


// // const func1 = (value) => {
// //     return new Promise((resolve) => {
// //         setTimeout(() => {
// //             resolve(First: ${value});
// //         }, 8000);
// //     })
// // }

// // const func2 = (value) => {
// //     return new Promise((resolve) => {
// //         setTimeout(() => {
// //             resolve(Second: ${value});
// //         }, 5000);
// //     })
// // }

const main = () => {
    func1(1)
    .then((value) => {
        console.log(value);
        return func2(2);
    })
    .then((value) => {
        console.log(value);
    })
    func1()
return Promise.all([func1(1), func2(2)]);
}

// main().then((result)=>{
//     console.log(result[0] , " ", result[1])
// });

// // const print = (num, i) => {
// //     return new Promise((res) => {
// //         setTimeout(() => {
// //             res(i);
// //         }, num * 1000);
// //     })
// // }
// // let delay = 0;
// // const res = () => {
// //     for(let i=1; i<=10; i++){
// //         delay += i;
// //         print(delay, i).then((data) => console.log(data));
// //     }
// // }
// // res()

function greet1(fname) {
  return new Promise((resolve, _reject) => {
    setTimeout(() => {
      resolve(fname);
    }, 2000);
  });
}

function greet2(lname) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(lname);
    }, 5000);
  });
}

greet1("Shubh")
  .then((firstName) => {
    return greet2(" Bodalkar").then((lastName) => {
      return firstName + lastName;
    });
  })
  .then((newname) => {
    console.log(newname);
  });