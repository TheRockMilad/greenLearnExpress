const fs = require("fs");
const readStream = fs.createReadStream("./other/file.txt");

readStream.on("ready", () => {
  console.log("Stream is ready to read ...");
});
readStream.on("data", (chunk) => {
  console.log("chunk -> ", chunk);
});
readStream.on("error", (error) => {
  console.log("error -> ", error);
});
readStream.on("end", () => {
  console.log("end of stream");
});
