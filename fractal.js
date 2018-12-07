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
  return dotPos;
}

function fractal (iteration, dotPos) {
  let triangle = {
    a: [0, 0],
    b: [50, 100],
    c: [100, 10]
  }
  for (let i = 0; i < iteration; i++) {
    let randomNum = random()
    console.log('random: ', randomNum)
    if ( randomNum <= 2 ) {
      dotPos = newPos(triangle.a, dotPos)
    } else if ( randomNum >= 5 ) {
      dotPos = newPos(triangle.c, dotPos)
    } else {
      dotPos = newPos(triangle.b, dotPos)
    }
  }
  // return dotPos;
}