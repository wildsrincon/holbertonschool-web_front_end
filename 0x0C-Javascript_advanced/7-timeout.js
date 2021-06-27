console.log("Start of the execution queue");
setTimeout(() => {
  console.log("Final code block to be executed");
}, 0);
range(100).forEach((index) => console.log(index));
console.log("End of the loop printing");

function range(size) {
  return [...Array(size).keys()];
}
