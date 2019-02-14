class AstroCalculator{
  constructor(opt){
    this.swe = new SwissEph();
    this.sd;
    this.swe.init();

    this.julian_utc;
    this.timezone = 0;

    this.longitude;
    this.latitude;

    this.planets = {
      Sun: Swe.SE_SUN,
      Moon: Swe.SE_MOON,
      Mercury: Swe.SE_MERCURY,
      Venus: Swe.SE_VENUS,
      Mars: Swe.SE_MARS,
      Jupiter: Swe.SE_JUPITER,
      Saturn: Swe.SE_SATURN,
      Uranus: Swe.SE_URANUS,
      Neptune: Swe.SE_NEPTUNE,
      Pluto: Swe.SE_PLUTO,
      //MeanNode: Swe.SE_MEAN_NODE,
      //TrueNode: Swe.SE_TRUE_NODE,
      //Chiron: Swe.SE_CHIRON, 
      //Lilith: Swe.SE_MEAN_APOG,
    };

    if(opt === undefined) opt = {};
    if(opt.timezone) this.timezone = opt.timezone;
    this.setDate(opt);

    this.swe.swe_set_topo(88.2,43,200);
  }

  setDate(opt){
    if(opt.timezone){
      this.timezone = parseFloat(opt.timezone);
    }

    if(opt.year === undefined && opt.month === undefined && opt.day === undefined){
      this.sd = new SweDate();
      this.julian_utc = this.sd.getJulDay() - this.timezone / 24;
      return;
    }
    else if(opt.year === undefined){
      console.error("Input year!");
      return;
    }
    else if(opt.month === undefined){
      console.error("Input month!");
      return;
    }
    else if(opt.day === undefined){
      console.error("Input day!");
      return;
    }  

    if(opt.hour === undefined) opt.hour = 12;
    if(opt.minute === undefined) opt.minute = 0;
    this.sd = new SweDate(parseInt(opt.year), parseInt(opt.month), parseInt(opt.day), parseFloat(opt.hour) + parseFloat(opt.minute) / 60);
    this.julian_utc = this.sd.getJulDay() - this.timezone / 24;
    return;
  }

  getPlanetPosition(){
    var ret = {};
    var iflag = Swe.SEFLG_MOSEPH|Swe.SEFLG_SPEED;//|Swe.SEFLG_SIDEREAL;
    var ret_matrix = new Array(6);

    for(var planet in this.planets){
      this.swe.calc(this.julian_utc, this.planets[planet], iflag, ret_matrix);
      ret[planet] = {
        longitude: ret_matrix[0],
        latitude: ret_matrix[1],
        distance: ret_matrix[2],
        longitude_speed: ret_matrix[3],
      }
    }
    return ret;
  }

  setGeographicPosition(){

  }

  getHouse(){

  }

  getSolarReturn(longitude, year){

  }

  getLunarReturn(longitude, year){

  }

  getSaturnReturn(longitude, year, times){

  }
}