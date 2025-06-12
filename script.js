// Set your movie date/time here (in UTC to ensure time zone correctness)
const movieTime = new Date('2025-06-17T04:00:00Z'); // 12AM EST / 9PM PST
console.log("Countdown target (UTC):", movieTime.toUTCString());
console.log("MOVIE TIME:", movieTime.toUTCString());

function updateCountdown() {
  const now = Date.now();
  const distance = movieTime.getTime() - now;

  if (distance <= 0) {
    document.getElementById('countdown').innerText = "It's movie time!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const display = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

  document.getElementById('countdown').innerText = display;
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Button click logic
document.getElementById('pickMovieBtn').onclick = () => {
  window.location.href = 'pick-movie.html'; // coming soon
};

document.getElementById('orderFoodBtn').onclick = () => {
  window.location.href = 'order-food.html'; // coming soon
};

// Modal toggle logic
function toggleModal() {
  const modal = document.getElementById('instructionsModal');
  if (modal.style.display === 'flex') {
    modal.style.display = 'none';
  } else {
    modal.style.display = 'flex';
  }
}
