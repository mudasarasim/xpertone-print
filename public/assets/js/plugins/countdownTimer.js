function updateTimera() {
  const el = document.getElementById("dealend");
  if (!el) return; // Exit if the element doesn't exist

  const future = Date.parse("Sept 2, 2025 11:30:00");
  const now = new Date();
  const diff = future - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor(diff / (1000 * 60 * 60));
  const mins = Math.floor(diff / (1000 * 60));
  const secs = Math.floor(diff / 1000);

  const d = days;
  const h = hours - days * 24;
  const m = mins - hours * 60;
  const s = secs - mins * 60;

  el.innerHTML =
    '<div class="dealend-timer">' +
    '<div class="time-block"><div class="time">' + d + '</div><span class="day">Days</span></div>' +
    '<div class="time-block"><div class="time">' + h + '</div><span class="dots">:</span></div>' +
    '<div class="time-block"><div class="time">' + m + '</div><span class="dots">:</span></div>' +
    '<div class="time-block"><div class="time">' + s + '</div><span class="dots"></span></div>' +
    '</div>';
}

// Wait for DOM to load, then start the timer safely
document.addEventListener("DOMContentLoaded", () => {
  const intervalId = setInterval(updateTimera, 1000);

  // Optionally stop after a certain time:
  // setTimeout(() => clearInterval(intervalId), 24 * 60 * 60 * 1000); // stop after 1 day
});
