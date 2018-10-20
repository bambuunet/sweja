class Epsilon{
  constructor(){
    this.teps = 0.0;
    this.eps = 0.0;
    this.seps = 0.0;
    this.ceps = 0.0;
  }
};

class FileData{

};

class PlanData{

};

class SarosData{
  constructor(series_no, tstart){
    this.series_no = series_no;
    this.tstart = tstart;

    if(series_no === null) this.series_no = 0;
    if(tstart === null) this.tstart = 0.0;
  }
}


class SavePositions{
  constructor(){
    this.ipl = 0;
    this.tsave = 0.0;
    this.iflgsave = 0;
    this.xsaves = new Array(24);
  }
};
