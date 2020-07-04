const days = document.querySelector(".updateDays");
const hours = document.querySelector(".updateHours");
const minutes = document.querySelector(".updateMinutes");
const seconds = document.querySelector(".updateSeconds");
const year = document.querySelector(".year");

// Getting the current year
const currentYear = new Date().getFullYear();

// Adding +1 to get the next year
const newYear = new Date(`January 01 ${currentYear + 1} 00:00:00`);

// Updating the year
year.innerHTML = currentYear + 1;

// Function to calculate and update ui
const updateYear = () => {
  const currentYearTime = new Date();
  const newYearTime = newYear - currentYearTime;
  console.log(currentYear);
  // Calculating days,hours,minutes,seconds

  const daysLeft = Math.floor(newYearTime / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor((newYearTime / 1000 / 60 / 60) % 24);
  const minutesLeft = Math.floor((newYearTime / 1000 / 60) % 60);
  const secondsLeft = Math.floor((newYearTime / 1000) % 60);

  // Updating UI

  days.innerHTML = daysLeft;
  hours.innerHTML = hoursLeft;
  minutes.innerHTML = minutesLeft;
  seconds.innerHTML = secondsLeft;
};

// To update the values dynamically
setInterval(updateYear, 1000);
