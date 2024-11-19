let points = 0;
let pointsPerClick = 1;
let upgradeCost = 10;
let autoPoints = 0; // Points generated per second
let autoUpgradeCost = 500; // Initial cost for the auto-generator upgrade

const pointsDisplay = document.getElementById('points');
const clickerButton = document.getElementById('clicker');
const upgradeButton = document.getElementById('upgrade');
const autoUpgradeButton = document.getElementById('basic-auto-upgrade');

// Click event for the main button
clickerButton.addEventListener('click', () => {
  points += pointsPerClick;
  updateDisplay();
});

// Click event for the upgrade button
upgradeButton.addEventListener('click', () => {
  if (points >= upgradeCost) {
    points -= upgradeCost;
    pointsPerClick++;
    upgradeCost *= 2; // Increase cost for the next upgrade
    upgradeButton.textContent = `Upgrade Manual Click (Cost: ${upgradeCost})`;
    updateDisplay();
  } else {
    alert('Not enough points for upgrade!');
  }
});

// Click event for the auto-generator upgrade
autoUpgradeButton.addEventListener('click', () => {
  if (points >= autoUpgradeCost) {
    points -= autoUpgradeCost;
    autoPoints++; // Increase auto-generated points per second
    autoUpgradeCost *= 2; // Increase cost for the next upgrade
    autoUpgradeButton.textContent = `Upgrade Basic Auto-Clicker (Cost: ${autoUpgradeCost})`;
    updateDisplay();
  } else {
    alert('Not enough points for auto-upgrade!');
  }
});

setInterval(() => {
  points += autoPoints;
  updateDisplay();
}, 100);

// Update the displayed points
function updateDisplay() {
  pointsDisplay.textContent = points;
}
