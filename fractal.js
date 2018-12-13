let canvas = document.getElementById('fractal')
let ctx = canvas.getContext('2d')
ctx.fillStyle = 'rgb(255, 0, 0)'
let fieldSizeX = Number(canvas.getAttribute('width'))
let fieldSizeY = Number(canvas.getAttribute('height'))

function canvasClear () {
  ctx.clearRect(0, 0, fieldSizeX, fieldSizeX);
}

function random(value) {
  return Math.floor(Math.random() * Math.floor(value))
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

function fractal (iteration, topsQ, dotPos) {
  canvasClear()
  let topsCoordinates = [];

  for ( let j = topsQ; j > 0; j-- ) {
    topsCoordinates.push([random(fieldSizeX), random(fieldSizeY)]);
  }

  for (let i = 0; i < iteration; i++) {
    let randomNum = random(topsQ)
    dotPos = newPos(topsCoordinates[randomNum], dotPos);
  }
}