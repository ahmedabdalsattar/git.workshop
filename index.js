////Assignment 1 
// Part_1_1
// let x ="123"
// let y =  7
// console.log(+x+y);
//////////////////////////////////////////////////////////////////////
// Part_1_2
// function checkFalsy(x) {
//   if (!x) {
//     return "Invalid";
//   }
//   return x;
// }
// console.log(checkFalsy(0));
//////////////////////////////////////////////////////////////////////
// Part_1_3
// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     continue; 
//   }
//   console.log(i);
// }
//////////////////////////////////////////////////////////////////////
// Part_1_4
// function getEvenNumbers(numbers) {
//   return numbers.filter((num) => num % 2 === 0);
// }
// let input = [1, 2, 3, 4, 5];
// let output = getEvenNumbers(input);
// console.log(output);
//////////////////////////////////////////////////////////////////////
// Part_1_5
// function merArray(arr1, arr2) {
//     return [...arr1, ...arr2];
// }
// let array1 = [1, 2, 3];
// let array2 = [4, 5, 6];
// let mergedArray = merArray(array1, array2);
// console.log(mergedArray);
//////////////////////////////////////////////////////////////////////
// Part_1_6
// function getDayOfWeek(n) {
//   switch (n) {
//     case 1: return "Sunday";
//     case 2: return "Monday";
//     case 3: return "Tuesday";
//     case 4: return "Wednesday";
//     case 5: return "Thursday";
//     case 6: return "Friday";
//     case 7: return "Saturday";
//     default:
//       return "Invalid day";
//   }
// }
// console.log(getDayOfWeek(2));
//////////////////////////////////////////////////////////////////////
// Part_1_7
// function getStringLengths(strings) {
//   return strings.map((str) => str.length);
// }
// const input = ["a", "ab", "abc"];
// const output = getStringLengths(input);
// console.log(output);
//////////////////////////////////////////////////////////////////////
// Part_1_8
// function checkDivisible(n) {
//   if (n % 3 === 0 && n % 5 === 0) return "Divisible by both";
//   else return "Not divisible";
// }
// console.log(checkDivisible(15));
//////////////////////////////////////////////////////////////////////
// Part_1_9
// let square = (n) => n * n;
// console.log(square(5));
//////////////////////////////////////////////////////////////////////
// Part_1_10
// function formatPerson(person) {
//   let { name, age } = person;
//   return `${name} is ${age} years old`;
// }
// let person = { name: "John", age: 25 };
// console.log(formatPerson(person));
//////////////////////////////////////////////////////////////////////
// Part_1_11
// function sumNumbers(...nums) {
//   return nums.reduce((acc, n) => acc + n, 0);
// }
// console.log(sumNumbers(1, 2, 3, 4, 5));
//////////////////////////////////////////////////////////////////////
// Part_1_12
// function delayedSuccess() {
//   return new Promise((resolve) => {
//     setTimeout(() => resolve("Success"), 3000);
//   });
// }
// delayedSuccess().then((msg) => console.log(msg));
//////////////////////////////////////////////////////////////////////
// Part_1_13
// function maxnumber(arr) {
//   return Math.max(...arr);
// }
// console.log(maxnumber([1, 3, 7, 2, 4]));
//////////////////////////////////////////////////////////////////////
// Part_1_14
// function getObjectKeys(obj) {
//   return Object.keys(obj);
// }
// let person = { name: "John", age: 30 };
// console.log(getObjectKeys(person));
//////////////////////////////////////////////////////////////////////
// Part_1_15
// function splitAndReturnToArray(str) {
//   return str.split(" ");
// }
// console.log(splitAndReturnToArray("The quick brown fox"));
//////////////////////////////////////////////////////////////////////
//part_2_1
// forEach is an array method that runs a callback on each element and cannot be stopped early.
// for...of is a loop that works on all iterables and can be broken.
// Use forEach when:
//  want functional, clean iteration. do not need to break early.
// Use for of when:
//  need break, continue, or return. want to use await inside the loop. readable control flow.
//////////////////////////////////////////////////////////////////////
//part_2_2
// Hoisting = JS moves declarations to the top of their scope.
// TDZ = the time between entering a block and the moment let/const are initialized — accessing them here throws an error.
//////////////////////////////////////////////////////////////////////
//part_2_3
// ==  checking the value
// ===  checking the key and the value
//////////////////////////////////////////////////////////////////////
//part_2_4
// try runs code. If it throws, control jumps to catch.
// In async code, errors happen later, so try-catch (with await) is crucial for catching those async failures.
//////////////////////////////////////////////////////////////////////
//part_2_5
//  conversion = you convert the type on purpose.
//  String(70);      // "70"
//  coercion = JavaScript converts the type automatically.
// "5" + 1;   // "51" 


///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////Assignment 2
// Q1
// function logPath() {
//   console.log({ File: __filename, Dir: __dirname });
// }
// logPath();
//////////////////////////////////////////////////////////////////////
// Q2
// const path = require("path");
// function getFileName(filePath) {
//   return path.basename(filePath);
// }
// console.log(getFileName("/user/files/report.pdf"));
//////////////////////////////////////////////////////////////////////
// Q3
// const path = require("path");
// function buildPath(obj) {
//   return path.format(obj);
// }
// console.log(buildPath({ dir: "/folder", name: "app", ext: ".js" }));
//////////////////////////////////////////////////////////////////////
// Q4
// const path = require("path");
// function getExtension(filePath) {
//   return path.extname(filePath);
// }
// console.log(getExtension("/docs/readme.md"));
//////////////////////////////////////////////////////////////////////
// Q5
// const path = require("path");
// function parsePath(filePath) {
//   const parsed = path.parse(filePath);
//   return { Name: parsed.name, Ext: parsed.ext };
// }
// console.log(parsePath("/home/app/main.js"));
//////////////////////////////////////////////////////////////////////
// Q6
// const path = require("path");
// function isAbsolutePath(filePath) {
//   return path.isAbsolute(filePath);
// }
// console.log(isAbsolutePath("/home/user/file.txt"));
//////////////////////////////////////////////////////////////////////
// Q7
// const path = require("path");
// function joinPaths(...segments) {
//   return path.join(...segments);
// }
// console.log(joinPaths("src", "components", "App.js"));
//////////////////////////////////////////////////////////////////////
// Q8
// const path = require("path");
// function resolvePath(relPath) {
//   return path.resolve(relPath);
// }
// console.log(resolvePath("./index.js"));
//////////////////////////////////////////////////////////////////////
// Q9
// const path = require("path");
// function joinTwo(base, add) {
//   return path.join(base, add);
// }
// console.log(joinTwo("/folder1", "folder2/file.txt"));
//////////////////////////////////////////////////////////////////////
// Q10
// const fs = require("fs");
// function deleteFile(filePath) {
//   fs.unlink(filePath, err => {
//     if (err) return console.log(err.message);
//     console.log("The file.txt is deleted.");
//   });
// }
//////////////////////////////////////////////////////////////////////
// Q11
// const fs = require("fs");
// function createFolder(dir) {
//   fs.mkdirSync(dir, { recursive: true });
//   console.log("Success");
// }
//////////////////////////////////////////////////////////////////////
// Q12
// const EventEmitter = require("events");
// const emitter = new EventEmitter();
// emitter.on("start", () => console.log("Welcome event triggered!"));
// emitter.emit("start");
//////////////////////////////////////////////////////////////////////
// Q13
// const EventEmitter = require("events");
// const emitter = new EventEmitter();
// emitter.on("login", user => console.log(`User logged in: ${user}`));
// emitter.emit("login", "Ahmed");
//////////////////////////////////////////////////////////////////////
// Q14
// const fs = require("fs");
// function readFileSyncFunc(path) {
//   const data = fs.readFileSync(path, "utf8");
//   console.log("the file content =>", data);
// }
//////////////////////////////////////////////////////////////////////
// Q15
// const fs = require("fs");
// function writeAsync(path, content) {
//   fs.writeFile(path, content, err => {
//     if (err) return console.log(err.message);
//     console.log("File written successfully");
//   });
// }
//////////////////////////////////////////////////////////////////////
// Q16
// const fs = require("fs");
// function checkExists(path) {
//   return fs.existsSync(path);
// }
// console.log(checkExists("./notes.txt"));
//////////////////////////////////////////////////////////////////////
// Q17
// const os = require("os");
// function getOSInfo() {
//   return { Platform: os.platform(), Arch: os.arch() };
// }
// console.log(getOSInfo());



///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////Assignment 3

//Q1
// const fs = require ('node:fs')
// const readStream  = fs.createReadStream('test.txt')
// readStream .on('data', (chunk)=>{
//     console.log("--------");
//     console.log({chunk});   
// })
// console.log(readStream);
/////////////////////////////////////////////////////////////////////
//Q2
// const fs = require ('node:fs')
// const readStream = fs.createReadStream('test.txt');
// const writeStream = fs.createWriteStream('dest.txt');
// readStream.on('data' , (chunk)=>{
// writeStream.write(chunk)
// })
// readStream.on('end', () => {
//     writeStream.end()
// })
////////////////////////////////////////////////////////////////
//Q3
// const fs = require ('node:fs')
// const readStream = fs.createReadStream('test.txt');
// const writeStream = fs.createWriteStream('dest.txt');
// readStream.pipe(writeStream)
/////////////////////////////////////////////////////////////////
//PART 2
//1
// const http = require("http");
// const fs = require("fs");
// const path = require("path");

// const filePath = path.join(__dirname, "users.json");

// function readUsers() {
//   return JSON.parse(fs.readFileSync(filePath, "utf8") || "{}");
// }

// function writeUsers(data) {
//   fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
// }

// const server = http.createServer((req, res) => {
//   const urlParts = req.url.split("/");
//   const method = req.method;
//   const id = urlParts[2];

//   //ADD USER
//   if (req.url === "/user" && method === "POST") {
//     let body = "";
//     req.on("data", (chunk) => (body += chunk));
//     req.on("end", () => {
//       const user = JSON.parse(body);
//       const users = readUsers();

//       // email must be unique
//       for (let key in users) {
//         if (users[key].email === user.email) {
//           res.writeHead(400);
//           return res.end("Email already exists");
//         }
//       }

//       const userId = Date.now().toString();
//       users[userId] = { id: userId, ...user };
//       writeUsers(users);

//       res.writeHead(201, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(users[userId]));
//     });
//   }

//   //UPDATE USER
//   else if (urlParts[1] === "user" && method === "PATCH") {
//     const users = readUsers();

//     if (!users[id]) {
//       res.writeHead(404);
//       return res.end("User not found");
//     }

//     let body = "";
//     req.on("data", (chunk) => (body += chunk));
//     req.on("end", () => {
//       const updates = JSON.parse(body);
//       users[id] = { ...users[id], ...updates };
//       writeUsers(users);

//       res.writeHead(200, { "Content-Type": "application/json" });
//       res.end(JSON.stringify(users[id]));
//     });
//   }

//   //DELETE USER
//   else if (urlParts[1] === "user" && method === "DELETE") {
//     const users = readUsers();

//     if (!users[id]) {
//       res.writeHead(404);
//       return res.end("User not found");
//     }

//     delete users[id];
//     writeUsers(users);

//     res.writeHead(200);
//     res.end("User deleted");
//   }

//   //GET ALL USERS
//   else if (req.url === "/user" && method === "GET") {
//     const users = readUsers();
//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(users));
//   }

//   //GET USER BY ID
//   else if (urlParts[1] === "user" && method === "GET") {
//     const users = readUsers();

//     if (!users[id]) {
//       res.writeHead(404);
//       return res.end("User not found");
//     }

//     res.writeHead(200, { "Content-Type": "application/json" });
//     res.end(JSON.stringify(users[id]));
//   }

//   //NOT FOUND
//   else {
//     res.writeHead(404);
//     res.end("Route not found");
//   }
// });
// server.listen(3000, () => console.log("Server running on port 3000"));


//part3-1
// It continuously checks the call stack & callback queue and decides when to execute pending callbacks.
// It enables Node.js to handle asynchronous, non-blocking operations in a single thread.

//part3-2
// Libuv is a C library used by Node.js to:
// Handle async I/O
// Manage thread pool
// Manage event loop
// Handle timers, filesystem, DNS, networking

//part3-3
//  JS call goes to Node APIs
//  Libuv registers the async task
//  When finished → callback pushed to queue
//  Event loop picks it and executes

//part3-4
// Call Stack → executes JS code
// Event Queue → stores callbacks waiting to run
// Event Loop → bridge that moves callbacks to stack when stack is empty

//part3-5
// Node has 4 threads by default
// File system
// Crypto
// Compression

//part3-6
// Blocking
// Stops execution until task finishes (fs.readFileSync)
// Non-Blocking
// Task runs in background, Node continues other work (fs.readFile)

//////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
