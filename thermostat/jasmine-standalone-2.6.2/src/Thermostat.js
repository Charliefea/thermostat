function Thermostat(temperature = 20) {
  this.temperature = temperature;
  this.powerSavingMode = false;
}

Thermostat.prototype.up = function(temp) {
  if(this.powerSavingMode && this.temperature + temp > 25) {
    throw Error("PSM - max temp exceeded")
  }
  this.temperature += temp;
}

Thermostat.prototype.down = function(temp) {
  if(this.temperature - temp < 11) {
  throw Error("It is too cold!");
};
   this.temperature -= temp;
}

Thermostat.prototype.powerSavingModeOn = function() {
  this.powerSavingMode = true;
}
