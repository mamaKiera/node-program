//import fs module
const fs = require("fs");

// Check if a filename is provided
if (process.argv.length < 3) {
  console.error("Please provide a filename as a command-line argument");
  return;
}

const fileName = process.argv[2];

//buitin read file method with syntax >> fs.readFile( filename, encoding, callback_function )
fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file");
    return;
  }

  console.log(data);
});
