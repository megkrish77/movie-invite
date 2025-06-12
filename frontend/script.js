// Set your movie date/time here (in UTC to ensure time zone correctness)
const movieTime = new Date('2025-06-14T00:00:00Z');

function updateCountdown() {
  const now = new Date().getTime();
  const distance = movieTime - now;

  if (distance <= 0) {
    document.getElementById('countdown').innerText = "It's movie time!";
    return;
  }

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById('countdown').innerText =
    `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Button logic placeholder
document.getElementById('pickMovieBtn').onclick = () => {
  window.location.href = 'pick-movie.html'; // we'll build this soon
};
document.getElementById('orderFoodBtn').onclick = () => {
  window.location.href = 'order-food.html'; // we'll build this soon
};
