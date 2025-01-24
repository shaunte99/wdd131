// Footer: Current year and last modified date
const year = new Date().getFullYear();
document.getElementById("year").textContent = year;
document.getElementById("last-modified").textContent = document.lastModified;

// Calculate Wind Chill
function calculateWindChill(temp, windSpeed) {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temp * Math.pow(windSpeed, 0.16)
  ).toFixed(1);
}

// Static values for weather
const temperature = 12; // Celsius
const windSpeed = 15; // km/h

const windChillElement = document.getElementById("wind-chill");
if (temperature <= 10 && windSpeed > 4.8) {
  windChillElement.textContent = `${calculateWindChill(temperature, windSpeed)}°C`;
} else {
  windChillElement.textContent = "N/A";
}
