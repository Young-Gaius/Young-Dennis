function catAndMouse(x, y, z) {
  let catAPos = Math.abs(z - x);
  let catBPos = Math.abs(z - y);
  if (catAPos < catBPos) {
    return "Cat A";
  } else if (catBPos < catAPos) {
    return "Cat B";
  } else {
    return "Mouse C";
  }
}

function breakingRecords(scores) {
  let min = scores[0];
  let max = scores[0];
  let minCounter = 0;
  let maxCounter = 0;
  scores.forEach((value) => {
    if (min > value) {
      minCounter++;
      min = value;
    }
    if (max < value) {
      maxCounter++;
      max = value;
    }
  });
  return [maxCounter, minCounter];
}
