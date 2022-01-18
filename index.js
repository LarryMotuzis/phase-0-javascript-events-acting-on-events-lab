document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  } else if (e.key === 'ArrowRight') {
    moveDodgerRight();
  }
});

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  dodger.style.left = `${left - 1}px`
}

function moveDodgerRight () {
  const rightNumbers = dodger.style.left.replace('px', '');
  const right = parseInt(rightNumbers, 10)

  dodger.style.left = `${right + 1}px`
}
