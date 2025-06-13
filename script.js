// Set your movie date/time here (in UTC to ensure time zone correctness)
const movieTime = new Date('2025-06-17T04:00:00Z'); // 12AM EST / 9PM PST
console.log("Countdown target (UTC):", movieTime.toUTCString());

function updateCountdown() {
  const now = Date.now();
  const distance = movieTime.getTime() - now;

  if (distance <= 0) {
    document.getElementById('countdown').innerText = "It's movie time!";
    document.getElementById('pickMovieBtn').disabled = false;
    document.getElementById('orderFoodBtn').disabled = false;
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  const display = `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  document.getElementById('countdown').innerText = display;

  // Enable buttons 3 hours before movie time
  const threeHours = 1000 * 60 * 60 * 3;
  const pickBtn = document.getElementById('pickMovieBtn');
  const foodBtn = document.getElementById('orderFoodBtn');

  if (distance <= threeHours) {
    pickBtn.disabled = false;
    foodBtn.disabled = false;
  } else {
    pickBtn.disabled = true;
    foodBtn.disabled = true;
  }
}

setInterval(updateCountdown, 1000);
updateCountdown();

// Button click logic
document.getElementById('pickMovieBtn').onclick = () => {
  if (!document.getElementById('pickMovieBtn').disabled) {
    window.location.href = 'pick-movie.html';
  }
};

document.getElementById('orderFoodBtn').onclick = () => {
  if (!document.getElementById('orderFoodBtn').disabled) {
    window.location.href = 'order-food.html';
  }
};

// Modal toggle logic
function toggleModal() {
  const modal = document.getElementById('instructionsModal');
  modal.style.display = modal.style.display === 'flex' ? 'none' : 'flex';
}
