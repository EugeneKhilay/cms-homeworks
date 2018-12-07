var canvas = document.getElementById('fractal');
var ctx = canvas.getContext('2d');
ctx.fillStyle = 'rgb(255, 0, 0)';

function random() {
  return Math.floor(Math.random() * Math.floor(6) + 1)
}

function newPos(angle, dotPos) {
  angle.forEach(function (element, i) {
    let diff = angle[i] - dotPos[i]
    let halfWay = Math.abs(diff) / 2
    if ( diff <= 0 ) {
      dotPos[i] -= halfWay
    } else {
      dotPos[i] += halfWay
    }
  })
  ctx.fillRect(dotPos[0], dotPos[1], 1, 1);
  return dotPos;
}

function fractal (iteration, dotPos) {
  let triangle = {
    a: [10, 10],
    b: [50, 140],
    c: [140, 20]
  }
  for (let i = 0; i < iteration; i++) {
    let randomNum = random()
    if ( randomNum <= 2 ) {
      dotPos = newPos(triangle.a, dotPos)
    } else if ( randomNum >= 5 ) {
      dotPos = newPos(triangle.c, dotPos)
    } else {
      dotPos = newPos(triangle.b, dotPos)
    }
  }
}