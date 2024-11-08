// JavaScript to display the current year
const yearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearSpan.textContent = currentYear;

// JavaScript to display the last modified date
const lastModified = document.getElementById("lastModified");
lastModified.textContent = "Last Modified: " + document.lastModified;
