// Lactation curve parameters
const a = 25; // Scale factor for the peak
const b = 0.2; // Controls the rise to peak
const c = 0.003; // Controls the decay after peak

// Helper function to scale values to a specific range
const scaleToRange = (value, originalMin, originalMax, targetMin, targetMax) => {
  const normalizedValue = (value - originalMin) / (originalMax - originalMin); // Normalize to [0, 1]
  return normalizedValue * (targetMax - targetMin) + targetMin; // Scale to target range
};

// Helper function to generate dates between two specified dates
const generateDateLabels = (startDate, endDate) => {
  const labels = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  const dayInMs = 24 * 60 * 60 * 1000;

  for (let current = start; current <= end; current = new Date(current.getTime() + dayInMs)) {
    const day = String(current.getDate()).padStart(2, '0');
    const month = String(current.getMonth() + 1).padStart(2, '0'); // Months are 0-based
    const year = String(current.getFullYear()).slice(-2); // Last two digits of the year
    labels.push(`${day}/${month}/${year}`);
  }
  return labels;
};

// Generate dense data for a smooth curve within the range 60–160
const generateSmoothLactationData = () => {
  const data = [];
  const step = 1; // Daily step size for accurate data
  const targetMin = 60; // Minimum value in the range (start at 60)
  const targetMax = 160; // Maximum value in the range

  // Date range for 10 months (from 08/08/23 to 31/05/24)
  const dateLabels = generateDateLabels('2023-08-08', '2024-05-31');

  // Find the approximate range of the original lactation values
  let originalMin = Infinity;
  let originalMax = -Infinity;
  for (let t = 1; t <= dateLabels.length; t += step) {
    const lactationValue = a * Math.pow(t, b) * Math.exp(-c * t);
    if (lactationValue < originalMin) originalMin = lactationValue;
    if (lactationValue > originalMax) originalMax = lactationValue;
  }

  // Generate scaled data with corresponding dates
  const switchPoint = Math.floor(dateLabels.length * 0.6); // Point where predicter starts
  for (let t = 1; t <= dateLabels.length; t += step) {
    const label = dateLabels[t - 1];
    const baseLactationValue = a * Math.pow(t, b) * Math.exp(-c * t); // Generate base value
    const scaledLactationValue = scaleToRange(baseLactationValue, originalMin, originalMax, targetMin, targetMax); // Scale to range

    // Handle the logic for sumweight and predicter
    let sumweight = null;
    let predicter = 0;

    if (t < switchPoint) {
      sumweight = Math.round(scaledLactationValue); // Before switchPoint: Actual sumweight
    } else if (t === switchPoint) {
      sumweight = Math.round(scaledLactationValue); // The last sumweight gets a value
      predicter = Math.round(scaledLactationValue); // PredictMilk matches sumweight for this point
    } else {
      predicter = Math.round(scaledLactationValue); // Predicter values after switchPoint
    }

    data.push({
      label,
      sumweight,
      predicter,
    });
  }

  return data;
};

// Generate and export data
const milkData = generateSmoothLactationData();

export default milkData;
