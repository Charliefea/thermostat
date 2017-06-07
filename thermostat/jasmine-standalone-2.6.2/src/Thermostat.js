function Thermostat(temperature = 20) {
  this.temperature = temperature;
}

Thermostat.prototype.up = function(temp) {
  this.temperature += temp;
}

Thermostat.prototype.down = function(temp) {
  if(this.temperature - temp < 11) {
  throw Error("It is too cold!");
};
   this.temperature -= temp;
}
