function Car(cname,cmodel,ctype) {
  this.name = (typeof cname === 'undefined' ) ? "General": cname;
  this.model =(typeof cmodel === 'undefined') ? 'GM' : cmodel;
  this.type = ctype;
  this.numOfDoors = (this.name === 'Porshe' || this.name === 'Koenigsegg') ? 2 : 4;
  this.numOfWheels =(this.type === 'trailer') ? 8 : 4;
  this.speed = '0 km/h';
  this.isSaloon = (this.type !== 'trailer') ? true : false;
}

Car.prototype.drive = function(cspeed) {
  if(cspeed === 7){this.speed = '77 km/h';}
  else if(cspeed === 5){this.speed = '250 km/h';}
  return this;
};