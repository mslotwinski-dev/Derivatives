const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const img = document.getElementById("arrows")

const range = 10
const dx = 1/1000

ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

const f = (x) => {
  const y = x*Math.log(x) - x**(4/3)
  return y
}

const df = (x) => {
  const dx = 0.01
  const dy = f(x + dx) - f(x)
  return dy / dx
}

const draw = (y, c) => {
  ctx.fillStyle = c;
  for (x = -range; x < range; x += dx) {
    ctx.fillRect( canvas.width / 2 + canvas.width * x / range, canvas.height / 2 -canvas.height * y(x)  / range - 3.5 , 3.5 , 3.5 );
  }
  
}

draw(f, "#00647d")
draw(df, "orange")


