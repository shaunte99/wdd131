// Calculate Wind Chill
function calculateWindChill(temp, windSpeed) {
    if (temp <= 10 && windSpeed > 4.8) {
      return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16)
      ).toFixed(1);
    } else {
      return "N/A";
    }
  }
  
  // Set Wind Chill on Page Load
  const temp = 18; // Static temperature value in Celsius
  const windSpeed = 20; // Static wind speed in km/h
  document.getElementById("windChill").textContent = calculateWindChill(temp, windSpeed);
  
  // Set Last Modified Date in Footer
  document.getElementById("lastModified").textContent = document.lastModified;
  