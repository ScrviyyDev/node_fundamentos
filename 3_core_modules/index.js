const path = require("path");

let extension = path.extname("arquivo.php");
console.log(extension);

extension = path.extname("file.txt");
console.log(extension);

extension = path.extname("index.js");
console.log(extension);