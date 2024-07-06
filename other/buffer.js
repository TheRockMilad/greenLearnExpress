// const text = "JS";
// const buffer = Buffer.from(text);
// console.log("JS".charCodeAt(0));
// console.log("JS".charCodeAt(0).toString(16))  // مبنای 16
// console.log(buffer);
// console.log(buffer.toString());

const text = "JavaScript"
const buffer = Buffer.alloc(4)
buffer.write(text)
console.log(buffer); // => Java به تعداد انتخابی ما میاره