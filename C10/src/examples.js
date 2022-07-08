function one(x) { // daca dati valori lui x (fie primitive, fie functii o sa puteti testa sa vedeti cum se comporta - valabil peste tot in exemple)
  console.log(x);
}

function two(x, cb) {
  setTimeout(function () {
    console.log(x);
    cb(x);
  }, 1000);
}

// function three(x) {
//   return new Promise((resolve, reject) => {
//     setTimeout(function () {
//       resolve(x);
//     }, 1000);
//   });
// }

// function four(x) {
//   return new Promise((resolve, reject) => {
//     if (x > 5) {
//       resolve(x);
//     } else {
//       reject(x);
//     }
//   });
// }

// function five(x) {
//   return Promise.resolve(x);
// }

// function six(x) {
//   return Promise.reject(x);
// }

// function seven(x) {
//   return five(x).then(console.log);
// }

// function eight(x) {
//   return six(x).then(console.log, (error) => console.log("error", error));
// }

// function nine(x) {
//   return five(x).then(
//     () => {
//       throw new Error("error");
//     },
//     (error) => console.log("error", error)
//   );
// }

// function ten(x) {
//   return five(x)
//     .then(() => {
//       throw new Error("error");
//     })
//     .catch((error) => console.log("error", error));
// }

// function eleven(x) {
//   console.log(x);
//   return new Promise((resolve, reject) => {
//     resolve(x);
//   });
// }

// function twelve(x) {
//   console.log(x);
//   return new Promise((resolve, reject) => {
//     if (x >= 2) {
//       console.log("larger");
//     } else {
//       console.log("smaller");
//     }
//     resolve(x);
//   });
// }

// function thirteen(x) {
//   return Promise.all([twelve(1), twelve(2)]).then(console.log);
// }

// function fourteen(x) {
//   twelve(1).then(console.log);
//   twelve(3).then(console.log);
// }

// function fifteen(x) {
//   return Promise.resolve(
//     Promise.resolve(Promise.resolve(Promise.resolve(1)))
//   ).then(console.log);
// }

// function sixteen(x) {
//   Promise.resolve(1)
//     .then((x) => {
//       console.log(x);
//       return x + 1;
//     })
//     .then((x) => {
//       console.log(x);
//       throw x + 1;
//     })
//     .catch((x) => {
//       console.log(x);
//       return x + 1;
//     })
//     .then((x) => {
//       console.log(x);
//       return Promise.resolve(x + 1);
//     })
//     .then((x) => {
//       console.log(x);
//       return Promise.reject(x + 1);
//     })
//     .catch((x) => {
//       console.log(x);
//     });
// }

// async function seventeen(x) {
//   return await Promise.resolve(1);
// }

// async function eighteen(x) {
//   return await Promise.reject(1);
// }

// async function nineteen(x) {
//   try {
//     throw 1;
//   } catch (e) {
//     return 2;
//   }
// }

// async function twenty(x) {
//   try {
//     throw 1;
//   } catch (e) {
//     throw 2;
//   }
// }

// async function twentyone(x) {
//   try {
//     const response = await fetch("http://google.com");
//     const html = response.text();
//     return html;
//   } catch (e) {
//     return e;
//   }
// }

// async function twentytwo(x) {
//   return await twentyone()
//     .then((x) => x.slice(0, 15))
//     .then(console.log);
// }

// function twentythree(x) {
//   let b = 0;
//   return new Promise((resolve, reject) => {
//     resolve(b++);
//   });
// }

// function twentyfour() {
//   const x = twentythree();
//   x.then(console.log);
//   x.then(console.log);
// }
