// Get the current year
const currentYearSpan = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
currentYearSpan.textContent = currentYear;

// Get the last modified date
const lastModified = document.lastModified;
const lastModifiedParagraph = document.getElementById("lastModified");
lastModifiedParagraph.textContent = `Last Modified: ${lastModified}`;
