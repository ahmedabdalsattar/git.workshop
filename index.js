//assiment4
//1//
const express = require("express");
const app = express();
const port = 3000;

app.listen(port ,()=>{
    console.log("app is running on port" , port);  
})




// let users = [];

// app.post("/user", (req, res) => {
//   let body = "";
//   req.on("data", (chunk) => {
//     body += chunk;
//   });
//   req.on("end", () => {
//     body = JSON.parse(body);
//     const exists = users.find(user => user.email === body.email);
//     if (exists) {
//       return res.send({
//         message: "email already exists."
//       });
//     }
//     users.push(body);

//     res.send({
//       message: "user added successufly.",
//       success: true,
//       data: body
//     });
//   });
// });

///////////////////////////////////////////////////////////////////////////

// //2

// app.patch("/user/:id", (req, res) => {
//   const id = req.params.id;
//   let body = "";

//   req.on("data", chunk => {
//     body += chunk;
//   });

//   req.on("end", () => {
//     body = JSON.parse(body);

//     fs.readFile("users.json", "utf8", (err, data) => {
//       let users = [];
//       if (!err && data) {
//         users = JSON.parse(data);
//       }

//       const user = users.find(u => u.id == id);
//       if (!user) {
//         return res.send({ message: "user id not found." });
//       }

//       for (let key in body) {
//         user[key] = body[key];
//       }

//       fs.writeFile("users.json", JSON.stringify(users, null, 2), () => {
//         res.send({
//           message: `user ${Object.keys(body)[0]} updated successufly`
//         });
//       });
//     });
//   });
// });
//////////////////////////////////////////////////////////////////////////////////////


// //3

// app.delete("/user/:id", (req, res) => {
//   const id = req.params.id;
//   fs.readFile("users.json", "utf8", (err, data) => {
//     let users = [];
//     if (!err && data) {
//       users = JSON.parse(data);
//     }
//     const userIndex = users.findIndex(u => u.id == id);
//     if (userIndex === -1) {
//       return res.send({ message: "user Id not found." });
//     }
//     users.splice(userIndex, 1);
//     fs.writeFile("users.json", JSON.stringify(users, null, 2), () => {
//       res.send({ message: "user deleted successufly." });
//     });
//   });
// });
//////////////////////////////////////////////////////////////////////////////////
// //4

// app.get("/user/getByName", (req, res) => {
//   const name = req.query.name;

//   fs.readFile("users.json", "utf8", (err, data) => {
//     let users = [];

//     if (!err && data) {
//       users = JSON.parse(data);
//     }

//     const user = users.find(user => user.name === name);

//     if (!user) {
//       return res.send({
//         message: "user Name not found."
//       });
//     }

//     res.send(user);
//   });
// });


/////////////////////////////////////////////////////////////////////////////////////////////////


// //5


// app.get("/user", (req, res) => {
//   fs.readFile("users.json", "utf8", (err, data) => {
//     let users = [];
//     if (!err && data) {
//       users = JSON.parse(data);
//     }

//     res.send(users);
//   });
// });

//////////////////////////////////////////////////////////////////

// //6

// app.get("/user/filter", (req, res) => {
//   const minAge = parseInt(req.query.minAge);

//   fs.readFile("users.json", "utf8", (err, data) => {
//     let users = [];
//     if (!err && data) {
//       users = JSON.parse(data);
//     }

//     const filteredUsers = users.filter(user => parseInt(user.age) >= minAge);

//     if (filteredUsers.length === 0) {
//       return res.send({ message: "no user found." });
//     }

//     res.send(filteredUsers);
//   });
// });

////////////////////////////////////////////////////////////////////////////

// //7

// app.get("/user/:id", (req, res) => {
//   const id = req.params.id;

//   fs.readFile("users.json", "utf8", (err, data) => {
//     let users = [];
//     if (!err && data) {
//       users = JSON.parse(data);
//     }

//     const user = users.find(u => u.id == id);

//     if (!user) {
//       return res.send({ message: "user not found." });
//     }

//     res.send(user);
//   });
// });


// ///////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////// 








