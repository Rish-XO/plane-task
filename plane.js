function minimumPlanes(fuelArray) {
  const n = fuelArray.length;
  let currentFuel = fuelArray[0];
  let planesRequired = 1;
  
  for (let i = 1; i < n; i++) {
    currentFuel--;
    if (currentFuel < 0) {
      return -1; // not enough fuel to reach next airport
    }
    if (currentFuel < fuelArray[i]) {
      currentFuel = fuelArray[i];
      planesRequired++;      // adding planes needed
    }
  }
  
  return planesRequired;
}
