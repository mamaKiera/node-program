//import fs module
const fs = require("fs");
const crypto = require("crypto");

// Check if a filename is provided
if (process.argv.length < 3) {
  console.error("Please provide a filename as a command-line argument");
  return;
}

const fileName = process.argv[2];

function calculateChecksum(content) {
  const hash = crypto.createHash("sha256");
  hash.update(content);
  return hash.digest("hex");
}

//buitin read file method with syntax >> fs.readFile( filename, encoding, callback_function )
fs.readFile(fileName, "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file");
    return;
  }

  console.log(calculateChecksum(data));
});
