const path = require('path')

exports.main = (req, res) => {
  res.sendFile(path.join(__dirname,"..","views","index.html"))
};
exports.about = (req, res) => {
  res.sendFile(path.join(__dirname,"..","views","about.html"))
};
exports.content = (req, res) => {
  res.sendFile(path.join(__dirname,"..","views","content.html"))
};
