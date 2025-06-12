let spinCount = 0;
const maxSpins = 3;
let wheel;

fetch('movies.json')
  .then(res => res.json())
  .then(movies => {
    const selected = movies.sort(() => 0.5 - Math.random()).slice(0, 10);

    const segments = selected.map(movie => ({
      text: movie.title,
      fillStyle: getDarkColor(),
      movie
    }));

    wheel = new Winwheel({
      canvasId: 'movieWheel',
      numSegments: segments.length,
      outerRadius: 180,
      textFontSize: 14,
      textAlignment: 'outer',
      textMargin: 10,
      segments: segments,
      animation: {
        type: 'spinToStop',
        duration: 6,
        spins: 8,
        callbackFinished: displayWinner
      }
    });
  })
  .catch(err => {
    document.getElementById('posterDisplay').innerHTML = '⚠️ Could not load movies.';
    console.error(err);
  });

function spinWheel() {
  if (!wheel || spinCount >= maxSpins) return;
  wheel.stopAnimation(false);
  wheel.rotationAngle = 0;
  wheel.draw();
  wheel.startAnimation();
  spinCount++;
  document.getElementById('spinCount').textContent = `Spin ${spinCount} of ${maxSpins}`;
}

function displayWinner(indicatedSegment) {
  const movie = indicatedSegment.movie;
  document.getElementById('posterDisplay').innerHTML = `
    <p>🎉 You landed on:</p>
    <h2>${movie.title}</h2>
    <img src="${movie.poster}" alt="${movie.title}" />
  `;

  if (spinCount === maxSpins) {
    document.getElementById('spinBtn').disabled = true;
    document.getElementById('spinBtn').textContent = "🎬 Final Pick Locked";
  }
}

function getDarkColor() {
  const colors = ['#6b3e49', '#7b4f52', '#803c3b', '#4d2c3d', '#692f4b', '#5e1f33', '#51242a'];
  return colors[Math.floor(Math.random() * colors.length)];
}
