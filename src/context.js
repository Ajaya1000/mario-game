const canvas = document.querySelector("canvas");
console.log(canvas);
canvas.width = innerWidth;
canvas.height = innerHeight;

const c = canvas.getContext("2d");

export { c, canvas };
