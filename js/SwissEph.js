class SwissEph{
  constructor(){
    //this.smosh = new SwephMosh;
    this.sl = new SwissLib;
    this.sm = new Swemmoon;
    //this.sh = new SweHouse;
    //this.ext = new Extensions;
    this.lastLat = 0.0;
    this.lastLong = 0.0;
    this.lastHSys = -1;
    this.swe_calc_epheflag_sv = 0;

    this.chck_nut_nutflag = 0;

    this.eff_arr = [

        new MeffEle(1.000, 1.000000),
        new MeffEle(0.990, 0.999979),
        new MeffEle(0.980, 0.999940),
        new MeffEle(0.970, 0.999881),
        new MeffEle(0.960, 0.999811),
        new MeffEle(0.950, 0.999724),
        new MeffEle(0.940, 0.999622),
        new MeffEle(0.930, 0.999497),
        new MeffEle(0.920, 0.999354),
        new MeffEle(0.910, 0.999192),
        new MeffEle(0.900, 0.999000),
        new MeffEle(0.890, 0.998786),
        new MeffEle(0.880, 0.998535),
        new MeffEle(0.870, 0.998242),
        new MeffEle(0.860, 0.997919),
        new MeffEle(0.850, 0.997571),
        new MeffEle(0.840, 0.997198),
        new MeffEle(0.830, 0.996792),
        new MeffEle(0.820, 0.996316),
        new MeffEle(0.810, 0.995791),
        new MeffEle(0.800, 0.995226),
        new MeffEle(0.790, 0.994625),
        new MeffEle(0.780, 0.993991),
        new MeffEle(0.770, 0.993326),
        new MeffEle(0.760, 0.992598),
        new MeffEle(0.750, 0.991770),
        new MeffEle(0.740, 0.990873),
        new MeffEle(0.730, 0.989919),
        new MeffEle(0.720, 0.988912),
        new MeffEle(0.710, 0.987856),
        new MeffEle(0.700, 0.986755),
        new MeffEle(0.690, 0.985610),
        new MeffEle(0.680, 0.984398),
        new MeffEle(0.670, 0.982986),
        new MeffEle(0.660, 0.981437),
        new MeffEle(0.650, 0.979779),
        new MeffEle(0.640, 0.978024),
        new MeffEle(0.630, 0.976182),
        new MeffEle(0.620, 0.974256),
        new MeffEle(0.610, 0.972253),
        new MeffEle(0.600, 0.970174),
        new MeffEle(0.590, 0.968024),
        new MeffEle(0.580, 0.965594),
        new MeffEle(0.570, 0.962797),
        new MeffEle(0.560, 0.959758),
        new MeffEle(0.550, 0.956515),
        new MeffEle(0.540, 0.953088),
        new MeffEle(0.530, 0.949495),
        new MeffEle(0.520, 0.945741),
        new MeffEle(0.510, 0.941838),
        new MeffEle(0.500, 0.937790),
        new MeffEle(0.490, 0.933563),
        new MeffEle(0.480, 0.928668),
        new MeffEle(0.470, 0.923288),
        new MeffEle(0.460, 0.917527),
        new MeffEle(0.450, 0.911432),
        new MeffEle(0.440, 0.905035),
        new MeffEle(0.430, 0.898353),
        new MeffEle(0.420, 0.891022),
        new MeffEle(0.410, 0.882940),
        new MeffEle(0.400, 0.874312),
        new MeffEle(0.390, 0.865206),
        new MeffEle(0.380, 0.855423),
        new MeffEle(0.370, 0.844619),
        new MeffEle(0.360, 0.833074),
        new MeffEle(0.350, 0.820876),
        new MeffEle(0.340, 0.808031),
        new MeffEle(0.330, 0.793962),
        new MeffEle(0.320, 0.778931),
        new MeffEle(0.310, 0.763021),
        new MeffEle(0.300, 0.745815),
        new MeffEle(0.290, 0.727557),
        new MeffEle(0.280, 0.708234),
        new MeffEle(0.270, 0.687583),
        new MeffEle(0.260, 0.665741),
        new MeffEle(0.250, 0.642597),
        new MeffEle(0.240, 0.618252),
        new MeffEle(0.230, 0.592586),
        new MeffEle(0.220, 0.565747),
        new MeffEle(0.210, 0.537697),
        new MeffEle(0.200, 0.508554),
        new MeffEle(0.190, 0.478420),
        new MeffEle(0.180, 0.447322),
        new MeffEle(0.170, 0.415454),
        new MeffEle(0.160, 0.382892),
        new MeffEle(0.150, 0.349955),
        new MeffEle(0.140, 0.316691),
        new MeffEle(0.130, 0.283565),
        new MeffEle(0.120, 0.250431),
        new MeffEle(0.110, 0.218327),
        new MeffEle(0.100, 0.186794),
        new MeffEle(0.090, 0.156287),
        new MeffEle(0.080, 0.128421),
        new MeffEle(0.070, 0.102237),
        new MeffEle(0.060, 0.077393),
        new MeffEle(0.050, 0.054833),
        new MeffEle(0.040, 0.036361),
        new MeffEle(0.030, 0.020953),
        new MeffEle(0.020, 0.009645),
        new MeffEle(0.010, 0.002767),
        new MeffEle(0.000, 0.000000)
      ];

  };

  swe_calc_ut(tjd_ut, ipl, iflag, xx){
    var sd = new SweDate;
    var deltat = sd.getDeltaT(tjd_ut);
    return this.swe_calc(tjd_ut + deltat, ipl, iflag, xx);
  };

  swe_calc(tjd, ipl, iflag, xx) {
    var ret = 0;
    try {
      ret = this._calc(tjd, ipl, iflag, xx);
    } catch (e) {
      console.error(e);
    }
    return ret;
  };

  calc(jdET, ipl, iflag, xx){
    return this._calc(jdET, ipl, iflag, xx);
  };

  _calc(tjd, ipl, iflag, xx){
    var i, j;
    var iflgcoor;
    var iflgsave = iflag;
    var epheflag;
    var sd = new SavePositions();
    var x = new Array(6);
    var xs = new Array();
    var x0 = new Array(24);
    var x2 = new Array(24);
    var dt;

    if (ipl == Swe.SE_AST_OFFSET + 134340) {
      ipl = Swe.SE_PLUTO;
    }
console.log(tjd, ipl, iflag, xx)
    epheflag = iflag & Swe.SEFLG_EPHMASK;
    if ((epheflag & Swe.SEFLG_DEFAULTEPH)!=0) {
      epheflag = 0;
    }
    if (this.swe_calc_epheflag_sv != epheflag && ipl != Swe.SE_ECL_NUT) {
      this.free_planets();
      this.swe_calc_epheflag_sv = epheflag;
    }
    if ((iflag & Swe.SEFLG_SPEED3)!=0 && (iflag & Swe.SEFLG_SPEED)!=0) {
      iflag = iflag & ~Swe.SEFLG_SPEED3;
    }
    if (((iflag & Swe.SEFLG_XYZ)!=0) &&
         ((iflag & Swe.SEFLG_RADIANS)!=0)) {
      iflag = iflag & ~Swe.SEFLG_RADIANS;
    }
    if (ipl < Swe.SE_NPLANETS && ipl >= Swe.SE_SUN) {
      sd = Swe.SwissData.savedat[ipl];
    } else {
      sd = Swe.SwissData.savedat[Swe.SE_NPLANETS];
    }

    iflgcoor = Swe.SEFLG_EQUATORIAL | Swe.SEFLG_XYZ | Swe.SEFLG_RADIANS;

    try {
      if (sd.tsave != tjd || tjd == 0 || ipl != sd.ipl ||
        ((sd.iflgsave & ~iflgcoor) != (iflag & ~iflgcoor))) {

        if ((iflag & Swe.SEFLG_SPEED3) == 0) {
          sd.tsave = tjd;
          sd.ipl = ipl;

console.log(tjd, sd, sd.tsave)
/* けしちゃだめ！！！！
          if ((sd.iflgsave = this.swecalc(tjd, ipl, iflag, sd.xsaves)) == Swe.ERR) {
            return this.swe_calc_error(xx);
          }
*/
console.log(tjd, ipl, iflag, xx, sd)
        } else {
          sd.tsave = tjd;
          sd.ipl = ipl;
          switch(ipl) {
            case Swe.SE_MOON:
              dt = Swe.SwephData.MOON_SPEED_INTV;
              break;
            case Swe.SE_OSCU_APOG:
            case Swe.SE_TRUE_NODE:

              dt = Swe.SwephData.NODE_CALC_INTV_MOSH;
              break;
            default:
              dt = Swe.SwephData.PLAN_SPEED_INTV;
              break;
          }

          sd.iflgsave = this.swecalc(tjd-dt, ipl, iflag, x0);
          if (sd.iflgsave == Swe.ERR) {
            return this.swe_calc_error(xx);
          }
          sd.iflgsave = this.swecalc(tjd+dt, ipl, iflag, x2);
          if (sd.iflgsave == Swe.ERR) {
            return this.swe_calc_error(xx);
          }
          sd.iflgsave = this.swecalc(tjd, ipl, iflag, sd.xsaves);
          if (sd.iflgsave == Swe.ERR) {
            return this.swe_calc_error(xx);
          }
          this.denormalize_positions(x0, sd.xsaves, x2);
          this.calc_speed(x0, sd.xsaves, x2, dt);
        }
      }
    } catch (e) {
      console.error(e);
    }

    var xsOffset=0;
    xs=sd.xsaves;
console.log(tjd, sd, sd.tsave, xs)
    if ((iflag & Swe.SEFLG_EQUATORIAL) != 0) {
      xsOffset=12;
    }
    if ((iflag & Swe.SEFLG_XYZ)!=0) {
      xsOffset+=6;
    }
    if (ipl == Swe.SE_ECL_NUT) {
      i = 4;
    } else {
      i = 3;
    }
    for (j = 0; j < i; j++){
      x[j] = xs[j+xsOffset]; 
console.log(x[i], xs,j+xsOffset)
    }
    for (j = i; j < 6; j++) {
      x[j] = 0;
    }
    if ((iflag & (Swe.SEFLG_SPEED3 | Swe.SEFLG_SPEED))!=0) {
      for (j = 3; j < 6; j++) { x[j] = xs[j+xsOffset]; }
    }

    if ((iflag & Swe.SEFLG_RADIANS)!=0) {
      if (ipl == Swe.SE_ECL_NUT) {
        for (j = 0; j < 4; j++)
          x[j] *= Swe.SwissData.DEGTORAD;
      } else {
        for (j = 0; j < 2; j++)
          x[j] *= Swe.SwissData.DEGTORAD;
        if ((iflag & (Swe.SEFLG_SPEED3 | Swe.SEFLG_SPEED))!=0) {
          for (j = 3; j < 5; j++)
            x[j] *= Swe.SwissData.DEGTORAD;
        }
      }  
    } 
console.log(tjd, sd, sd.tsave)
    for (i = 0; i <= 5; i++) {
      xx[i] = x[i];
console.log(x[i], xx[i])
    }
    iflag = sd.iflgsave;
    if ((iflgsave & Swe.SEFLG_EPHMASK) == 0) {
      iflag = iflag & ~Swe.SEFLG_DEFAULTEPH;
    }

    return iflag;
  };

  free_planets() {
    var i;
    try {
      /* free planets data space */
      for(i=0;i<Swe.SwephData.SEI_NPLANETS;i++) {
        Swe.SwissData.pldat[i].clearData();
      }
      for (i=0; i <= Swe.SE_NPLANETS; i++) {/* "<=" is correct! see decl.*/
        Swe.SwissData.savedat[i].clearData();
      }
      /* clear node data space */
      for(i=0;i<Swe.SwephData.SEI_NNODE_ETC;i++) {
        Swe.SwissData.nddat[i].clearData();
      }
      Swe.SwissData.oec.clearData();
      Swe.SwissData.oec2000.clearData();
      Swe.SwissData.nut.clearData();
      Swe.SwissData.nut2000.clearData();
      Swe.SwissData.nutv.clearData();
    } catch (e) {
      console.error(e);
    }
  }

  swe_close() {
    var i;
    this.free_planets();
    Swe.SwissData.oec.clearData();
    Swe.SwissData.oec2000.clearData();
    Swe.SwissData.nut.clearData();
    Swe.SwissData.nut2000.clearData();
    Swe.SwissData.nutv.clearData();
    // memset((void *) &Swe.SwissData.astro_models, SEI_NMODELS, sizeof(int32));
    for(var a = 0; a < Swe.SwephData.SEI_NMODELS; a++) {
      Swe.SwissData.astro_models[a] = 0;
    }
    Swe.SwissData.jpldenum = 0;
    var sd = new SweDate;
    sd.swe_set_tid_acc(Swe.SE_TIDAL_AUTOMATIC);
    Swe.SwissData.geopos_is_set = false;
    Swe.SwissData.ayana_is_set = false;
    Swe.SwissData.is_old_starfile = false;
    Swe.SwissData.i_saved_planet_name = 0;
    Swe.SwissData.saved_planet_name = "";
    Swe.SwissData.topd.clearData();
    Swe.SwissData.sidd.clearData();
    Swe.SwissData.timeout = 0;
    Swe.SwissData.dpsi = null;
    Swe.SwissData.deps = null;
  }

  swe_set_ephe_path(path) {
    var i, iflag;
    var s="";
    var xx = new Array(6);
    Swe.SwissData.ephe_path_is_set=true;
    /* close all open files and delete all planetary data */
    this.swe_close();
    if (path == null || path.length() == 0) {
      s=Swe.SE_EPHE_PATH;
    } else if (path.length() <= Swe.SwissData.AS_MAXCH-1-13) {
      s=path;
    } else {
      s=Swe.SE_EPHE_PATH;
    }

    Swe.SwissData.ephepath=s;
  }

  load_dpsi_deps() {
  }

  swe_set_sid_mode(sid_mode) {
    this.swe_set_sid_mode(sid_mode, 0, 0);
  }

  swe_set_sid_mode(sid_mode, t0, ayan_t0) {
    if (sid_mode < 0)
      sid_mode = 0;
    var sip = Swe.SwissData.sidd;
    sip.sid_mode = sid_mode;
    if (sid_mode >= Swe.SE_SIDBITS) {
      sid_mode %= Swe.SE_SIDBITS;
    }
    /* standard equinoxes: positions always referred to ecliptic of t0 */
    if (sid_mode == Swe.SE_SIDM_J2000
            || sid_mode == Swe.SE_SIDM_J1900
            || sid_mode == Swe.SE_SIDM_B1950) {
      sip.sid_mode &= ~Swe.SE_SIDBIT_SSY_PLANE;
      sip.sid_mode |= Swe.SE_SIDBIT_ECL_T0;
    }
    if (sid_mode >= Swe.SwissData.SE_NSIDM_PREDEF && sid_mode != Swe.SE_SIDM_USER)
      sip.sid_mode = sid_mode = Swe.SE_SIDM_FAGAN_BRADLEY;
    Swe.SwissData.ayana_is_set = true;
    if (sid_mode == Swe.SE_SIDM_USER) {
      sip.t0 = t0;
      sip.ayan_t0 = ayan_t0;
    } else {
      sip.t0 = Swe.SwephData.ayanamsa[sid_mode].t0;
      sip.ayan_t0 = Swe.SwephData.ayanamsa[sid_mode].ayan_t0;
    }
    this.swi_force_app_pos_etc();
  }

  swe_get_ayanamsa(tjd_et) {
    var x=new Array(6), eps;
    var sip = Swe.SwissData.sidd;
    var star = new StringBuffer(Swe.SwissData.AS_MAXCH);
    if (!Swe.SwissData.ayana_is_set) {
      this.swe_set_sid_mode(Swe.SE_SIDM_FAGAN_BRADLEY, 0, 0);
    }
    /* vernal point (tjd), cartesian */
    x[0] = 1;
    x[1] = x[2] = 0;
    /* to J2000 */
    if (tjd_et != Swe.SwephData.J2000) {
      this.sl.swi_precess(x, tjd_et, 0, Swe.SwephData.J_TO_J2000);
    }
    /* to t0 */
    this.sl.swi_precess(x, sip.t0, 0, Swe.SwephData.J2000_TO_J);
    /* to ecliptic */
    eps = this.sl.swi_epsiln(sip.t0, 0);
    this.sl.swi_coortrf(x, x, eps);
    /* to polar */
    this.sl.swi_cartpol(x, x);
    /* subtract initial value of ayanamsa */
    x[0] = x[0] * Swe.SwissData.RADTODEG - sip.ayan_t0;
    /* get ayanamsa */
    return this.sl.swe_degnorm(-x[0]);
  }

  swe_get_ayanamsa_ut(tjd_ut) {
    return this.swe_get_ayanamsa(tjd_ut + SweDate.getDeltaT(tjd_ut));
  }

  preloadFixstarsFile() {
    if (Swe.SwissData.fixfp == null) {
      try {
        Swe.SwissData.fixfp = this.swi_fopen(Swe.SwephData.SEI_FILE_FIXSTAR, Swe.SE_STARFILE,
                                  Swe.SwissData.ephepath);
      } catch (e) {
        console.error(e);
        return false;
      }
    }

    var s, name1, name2;
    var line = 0, fline = 0;
    try {
      Swe.SwissData.fixstarsHash = new java.util.Hashtable(5000);
      Swe.SwissData.fixfp.seek(0);
      while ((s = Swe.SwissData.fixfp.readLine())!= null) {
        fline++;
        if (s.startsWith("#")) { continue; }
        line++;
        name1 = s.substring(0, s.indexOf(',')).trim();
        name2 = s.substring(s.indexOf(','));
        if (name2.indexOf(',',1) > 0) {
          name2 = name2.substring(0,name2.indexOf(',',1)).trim();
        } else {
          name2 = "";
        }
        s = line + "@" + s;
        if (name1.length() > 0) {
          Swe.SwissData.fixstarsHash.put(name1.toLowerCase(), s);
        }
        if (name2.length() > 0) {
          Swe.SwissData.fixstarsHash.put(name2, s);
        }
        Swe.SwissData.fixstarsHash.put("" + line, s);
      }
    } catch (e) {
      console.error(e);
    }
    return true;
  }

  ////////////////////////////////////////////////////////////////////////////
  // Methods from SweHouse.java: /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////
  swe_house_name(hsys) {
    if (sh==null) {
      sh=new SweHouse(sl, this, Swe.SwissData);
    }
    return sh.swe_house_name(Math.float(hsys));
  }

  swe_house_pos(armc, geolat, eps, hsys, xpin) {
    if (sh==null) {
      sh=new SweHouse(sl, this, Swe.SwissData);
    }
    if (xpin.length != 6) {
      xpin = [xpin[0], xpin[1], 0, 0, 0, 0];
    }
    return sh.swe_house_pos(armc, geolat, eps, hsys, xpin);
  }

  swe_houses_armc(armc, geolat, eps, hsys, cusp, ascmc) {
    if (sh==null) {
      sh=new SweHouse(sl, this, Swe.SwissData);
    }
    return sh.swe_houses_armc(armc, geolat, eps, hsys, cusp, ascmc, 0);
  }

  swe_houses(tjd_ut, iflag, geolat, geolon, hsys, cusp, ascmc) {
    return this.swe_houses(tjd_ut, iflag, geolat, geolon, hsys, cusp, ascmc, 0);
  }
  swe_houses(tjd_ut, iflag, geolat, geolon, hsys, cusp, ascmc, aOffs) {
    if (sh==null) {
      sh=new SweHouse(sl, this, Swe.SwissData);
    }
    return sh.swe_houses(tjd_ut, iflag, geolat, geolon, hsys, cusp, ascmc, aOffs);
  }

  getIterateCount() {
    if (ext==null) { ext=new Extensions(this); }
    return ext.getIterateCount();
  }

  setTransitSpeedsfile(fname,writeable){
  }

  getTransitET(tc, jdET, backwards){
    return getTransitET(tc,
                        jdET,
                        backwards,
                        (backwards?-Double.MAX_VALUE:Double.MAX_VALUE));
  }

  getTransitET(tc, jdET, backwards, jdLimit){
    if (ext==null) { ext=new Extensions(this); }
    var calcUT = (tc instanceof TCHouses);
    return ext.getTransit(tc, jdET - (calcUT ? SweDate.getDeltaT(jdET) : 0), backwards, jdLimit) +
            (calcUT ? SweDate.getDeltaT(jdET) : 0);
  }
 
  getTransitUT(tc, jdUT, backwards){
    if (ext==null) { ext=new Extensions(this); } calcUT = (tc instanceof TCHouses);
    var jdET = ext.getTransit(
                          tc,
                          jdUT + (calcUT ? 0 : SweDate.getDeltaT(jdUT)),
                          backwards,
                          (backwards?-Double.MAX_VALUE:Double.MAX_VALUE));
    return jdET - (calcUT ? 0 : SweDate.getDeltaT(jdET));
  }

  getTransitUT(tc, jdUT, backwards, jdLimit){
    if (ext==null) { ext=new Extensions(this); }
    var jdET = ext.getTransit(
                          tc,
                          jdUT + SweDate.getDeltaT(jdUT),
                          backwards,
                          jdLimit + SweDate.getDeltaT(jdLimit));
    return jdET - SweDate.getDeltaT(jdET);
  }

//////////////////////////////////////////////////////////////////////////////
// End of public methods /////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////
  swe_calc_error(xx) {
    for(var i = 0; i < xx.length; i++) {
      xx[i] = 0;
    }
    return Swe.ERR;
  }


  swecalc(tjd, ipl, iflag, x) {
    var i;
    var ipli, ipli_ast, ifno;
    var retc;
    var epheflag = Swe.SEFLG_DEFAULTEPH;
    var pdp;
    var pedp = Swe.SwissData.pldat[Swe.SwephData.SEI_EARTH];
    var psdp = Swe.SwissData.pldat[Swe.SwephData.SEI_SUNBARY];
    var ndp;
    var xp, xp2;

    /******************************************
     * iflag plausible?                       *
     ******************************************/
    iflag = this.plaus_iflag(iflag, ipl, tjd);
 
    if ((iflag & Swe.SEFLG_MOSEPH)!=0) {
      epheflag = Swe.SEFLG_MOSEPH;
    }
    /* no barycentric calculations with Moshier ephemeris */
    if (((iflag & Swe.SEFLG_BARYCTR)!=0) &&
        ((iflag & Swe.SEFLG_MOSEPH)!=0)) {
      console.error("barycentric Moshier positions are not supported.");
    }

    if (epheflag != Swe.SEFLG_MOSEPH && !Swe.SwissData.ephe_path_is_set) {
      this.swe_set_ephe_path(null);
    }
    if ((iflag & Swe.SEFLG_SIDEREAL)!=0 && !Swe.SwissData.ayana_is_set) {
      this.swe_set_sid_mode(Swe.SE_SIDM_FAGAN_BRADLEY, 0, 0);
    }
    /******************************************
     * obliquity of ecliptic 2000 and of date *
     ******************************************/
    this.swi_check_ecliptic(tjd, iflag);
    /******************************************
     * nutation                               *
     ******************************************/
    this.swi_check_nutation(tjd, iflag);
    /******************************************
     * select planet and ephemeris            *
     *                                        *
     * ecliptic and nutation                  *
     ******************************************/

    if (ipl == Swe.SE_ECL_NUT) {
      x[0] = Swe.SwissData.oec.eps + Swe.SwissData.nut.nutlo[1];  /* true ecliptic */
      x[1] = Swe.SwissData.oec.eps;      /* mean ecliptic */
      x[2] = Swe.SwissData.nut.nutlo[0];   /* nutation in longitude */
      x[3] = Swe.SwissData.nut.nutlo[1];   /* nutation in obliquity */
      /*if ((iflag & Swe.SEFLG_RADIANS) == 0)*/
      for (i = 0; i <= 3; i++){
        x[i] *= Swe.SwissData.RADTODEG;
      }
      return(iflag);
    /******************************************
     * moon                                   *
     ******************************************/
    } else if (ipl == Swe.SE_MOON) {

      /* internal planet number */
      ipli = Swe.SwephData.SEI_MOON;
      pdp = Swe.SwissData.pldat[ipli];
      xp = pdp.xreturn;
      switch(epheflag) {
        case Swe.SEFLG_MOSEPH:
          retc = moshier_moon(tjd, Swe.SwephData.DO_SAVE, null);
          if (retc == Swe.ERR) {
            return this.swecalc_error(x);
          }
          break;
        default:
          break;
      }
      /* heliocentric, lighttime etc. */
      if ((retc = this.app_pos_etc_moon(iflag))!=Swe.OK) {
        return this.swecalc_error(x); // retc may be wrong with sidereal calculation
      }
    /**********************************************
     * barycentric sun                            *
     * (SWISSEPH ephemerises)        *
     **********************************************/
    } else if (ipl == Swe.SE_SUN &&
      ((iflag & Swe.SEFLG_BARYCTR)!=0)) {

      ipli = Swe.SwephData.SEI_SUN; /* = SEI_EARTH ! */
      xp = pedp.xreturn;
      switch (epheflag) {
        default:
          return Swe.ERR;
      }

    } else if (ipl == Swe.SE_SUN 
      || ipl == Swe.SE_MERCURY
      || ipl == Swe.SE_VENUS
      || ipl == Swe.SE_MARS
      || ipl == Swe.SE_JUPITER
      || ipl == Swe.SE_SATURN
      || ipl == Swe.SE_URANUS
      || ipl == Swe.SE_NEPTUNE
      || ipl == Swe.SE_PLUTO
      || ipl == Swe.SE_EARTH) {

      if ((iflag & Swe.SEFLG_HELCTR)!=0) {
        if (ipl == Swe.SE_SUN) {
          for (i = 0; i < 24; i++) {
            x[i] = 0;
          }
          return iflag;
        }
      } else if ((iflag & Swe.SEFLG_BARYCTR)!=0) {
console.log('a')
      } else {    /* geocentric */
        if (ipl == Swe.SE_EARTH) {
          for (i = 0; i < 24; i++) {
            x[i] = 0;
          }
          return iflag;
        }
      }
      /* internal planet number */
      ipli = Swe.SwissData.pnoext2int[ipl];
      pdp = Swe.SwissData.pldat[ipli];
      xp = pdp.xreturn;
      retc = this.main_planet(tjd, ipli, epheflag, iflag);
console.log('a')
      if (retc == Swe.ERR) {
        return this.swecalc_error(x);
      }

      iflag = pdp.xflgs;

    } else if (ipl == Swe.SE_MEAN_NODE) {
      if (((iflag & Swe.SEFLG_HELCTR)!=0) ||
          ((iflag & Swe.SEFLG_BARYCTR)!=0)) {
        for (i = 0; i < 24; i++) {
          x[i] = 0;
        }
        return iflag;
      }
      ndp = Swe.SwissData.nddat[Swe.SwephData.SEI_MEAN_NODE];
      xp = ndp.xreturn;
      xp2 = ndp.x;
      retc = sm.swi_mean_node(tjd, xp2);
      if (retc == Swe.ERR) {
        return this.swecalc_error(x);
      }

      retc = sm.swi_mean_node(tjd - Swe.SwephData.MEAN_NODE_SPEED_INTV, xp2, 3);
      if (retc == Swe.ERR) {
        return this.swecalc_error(x);
      }
      xp2[3] = this.sl.swe_difrad2n(xp2[0], xp2[3]) / Swe.SwephData.MEAN_NODE_SPEED_INTV;
      xp2[4] = xp2[5] = 0;
      ndp.teval = tjd;
      ndp.xflgs = -1;
      /* lighttime etc. */
      retc = this.app_pos_etc_mean(Swe.SwephData.SEI_MEAN_NODE, iflag);
      if (retc != Swe.OK) {
        return this.swecalc_error(x);
      }
      /* to avoid infinitesimal deviations from latitude = 0
       * that result from conversions */
      if ((iflag & Swe.SEFLG_SIDEREAL)==0 &&
          (iflag & Swe.SEFLG_J2000)==0) {
        ndp.xreturn[1] = 0.0; /* ecl. latitude       */
        ndp.xreturn[4] = 0.0; /*               speed */
        ndp.xreturn[5] = 0.0; /*      radial   speed */
        ndp.xreturn[8] = 0.0; /* z coordinate        */
        ndp.xreturn[11] = 0.0;  /*               speed */
      }
      if (retc == Swe.ERR) {
        return this.swecalc_error(x);
      }
    /**********************************************
     * mean lunar apogee ('dark moon', 'lilith')  *
     * for comment s. moshmoon.c, swi_mean_apog() *
     **********************************************/
console.log('a')
    } else if (ipl == Swe.SE_MEAN_APOG) {
      if (((iflag & Swe.SEFLG_HELCTR)!=0) ||
          ((iflag & Swe.SEFLG_BARYCTR)!=0)) {

        for (i = 0; i < 24; i++) {
          x[i] = 0;
        }
        return iflag;
      }
      ndp = Swe.SwissData.nddat[Swe.SwephData.SEI_MEAN_APOG];
      xp = ndp.xreturn;
      xp2 = ndp.x;
      retc = sm.swi_mean_apog(tjd, xp2);
      if (retc == Swe.ERR) {
        return this.swecalc_error(x);
      }

      retc = sm.swi_mean_apog(tjd - Swe.SwephData.MEAN_NODE_SPEED_INTV, xp2, 3);
      if (retc == Swe.ERR) {
        return this.swecalc_error(x);
      }
      for(i = 0; i <= 1; i++) {
        xp2[3+i] = this.sl.swe_difrad2n(xp2[i], xp2[3+i]) / Swe.SwephData.MEAN_NODE_SPEED_INTV;
      }
      xp2[5] = 0;
      ndp.teval = tjd;
      ndp.xflgs = -1;
      /* lighttime etc. */
      if ((retc = this.app_pos_etc_mean(Swe.SwephData.SEI_MEAN_APOG, iflag)) !=
                                                                  Swe.OK) {
        return this.swecalc_error(x);
      }

      ndp.xreturn[5] = 0.0; /*               speed */
      if (retc == Swe.ERR) {
        return this.swecalc_error(x);
      }
    /***********************************************
     * osculating lunar node ('true node')         *
     ***********************************************/
    } else if (ipl == Swe.SE_TRUE_NODE) {
      if (((iflag & Swe.SEFLG_HELCTR)!=0) ||
          ((iflag & Swe.SEFLG_BARYCTR)!=0)) {
        /* heliocentric/barycentric lunar node not allowed */
        for (i = 0; i < 24; i++) {
          x[i] = 0;
        }
        return iflag;
      }
      ndp = Swe.SwissData.nddat[Swe.SwephData.SEI_TRUE_NODE];
      xp = ndp.xreturn;
      retc = this.lunar_osc_elem(tjd, Swe.SwephData.SEI_TRUE_NODE, iflag);
      iflag = ndp.xflgs;

      if ((iflag & Swe.SEFLG_SIDEREAL)==0 &&
          (iflag & Swe.SEFLG_J2000)==0) {
        ndp.xreturn[1] = 0.0; /* ecl. latitude       */
        ndp.xreturn[4] = 0.0; /*               speed */
        ndp.xreturn[8] = 0.0; /* z coordinate        */
        ndp.xreturn[11] = 0.0;  /*               speed */
      }
      if (retc == Swe.ERR) {
        return this.swecalc_error(x);
      }

console.log('a')
    /***********************************************
     * osculating lunar apogee                     *
     ***********************************************/
    } else if (ipl == Swe.SE_OSCU_APOG) {
      if (((iflag & Swe.SEFLG_HELCTR)!=0) ||
          ((iflag & Swe.SEFLG_BARYCTR)!=0)) {

        for (i = 0; i < 24; i++) {
          x[i] = 0;
        }
        return iflag;
      }
      ndp = Swe.SwissData.nddat[Swe.SwephData.SEI_OSCU_APOG];
      xp = ndp.xreturn;
      retc = this.lunar_osc_elem(tjd, Swe.SwephData.SEI_OSCU_APOG, iflag);
      iflag = ndp.xflgs;
      if (retc == Swe.ERR) {
        return this.swecalc_error(x);
      }

console.log('a')
    /***********************************************
     * interpolated lunar apogee                   *    
     ***********************************************/
    } else if (ipl == Swe.SE_INTP_APOG) {
      if ((iflag & Swe.SEFLG_HELCTR)!=0 ||
          (iflag & Swe.SEFLG_BARYCTR)!=0) {
        for (i = 0; i < 24; i++) {
          x[i] = 0;
        }
        return iflag;
      }
      if (tjd < Swe.SwephData.MOSHLUEPH_START || tjd > Swe.SwephData.MOSHLUEPH_END) {
        for (i = 0; i < 24; i++){
          x[i] = 0;
        }
        console.error("Interpolated apsides are restricted to JD " + Swe.SwephData.MOSHLUEPH_START + " - JD " + Swe.SwephData.MOSHLUEPH_END);
        return Swe.ERR;
      }
      ndp = Swe.SwissData.nddat[Swe.SwephData.SEI_INTP_APOG];
      xp = ndp.xreturn;
      retc = this.intp_apsides(tjd, Swe.SwephData.SEI_INTP_APOG, iflag); 
      iflag = ndp.xflgs;
      if (retc == Swe.ERR)
        return this.swecalc_error(x);
    /*********************************************** 
     * interpolated lunar perigee                  *    
     ***********************************************/
    } else if (ipl == Swe.SE_INTP_PERG) {
      if ((iflag & Swe.SEFLG_HELCTR)!=0 ||
          (iflag & Swe.SEFLG_BARYCTR)!=0) {

        for (i = 0; i < 24; i++) {
          x[i] = 0;
        }
        return iflag;
      }
      if (tjd < Swe.SwephData.MOSHLUEPH_START || tjd > Swe.SwephData.MOSHLUEPH_END) {
        for (i = 0; i < 24; i++){
          x[i] = 0;
        }
        console.error("Interpolated apsides are restricted to JD " +Swe.SwephData.MOSHLUEPH_START + " - JD " + Swe.SwephData.MOSHLUEPH_END);
        return Swe.ERR;
      }
      ndp = Swe.SwissData.nddat[Swe.SwephData.SEI_INTP_PERG];
      xp = ndp.xreturn;
      retc = intp_apsides(tjd, Swe.SwephData.SEI_INTP_PERG, iflag); 
      iflag = ndp.xflgs;

      if (retc == Swe.ERR)
        return this.swecalc_error(x);
    /*********************************************** 
     * minor planets                               *
     ***********************************************/
    } else if (ipl == Swe.SE_CHIRON
      || ipl == Swe.SE_PHOLUS
      || ipl == Swe.SE_CERES   /* Ceres - Vesta */
      || ipl == Swe.SE_PALLAS
      || ipl == Swe.SE_JUNO
      || ipl == Swe.SE_VESTA
      || ipl > Swe.SE_AST_OFFSET) {

      if (ipl < Swe.SE_NPLANETS) {
        ipli = Swe.SwissData.pnoext2int[ipl];
      } else if (ipl <= Swe.SE_AST_OFFSET + Swe.SwephData.MPC_VESTA) {
        ipli = Swe.SwephData.SEI_CERES + ipl - Swe.SE_AST_OFFSET - 1;
        ipl = Swe.SE_CERES + ipl - Swe.SE_AST_OFFSET - 1;
      } else {
        ipli = Swe.SwephData.SEI_ANYBODY;
      }
      if (ipli == Swe.SwephData.SEI_ANYBODY) {
        ipli_ast = ipl;
      } else {
        ipli_ast = ipli;
      }
      pdp = Swe.SwissData.pldat[ipli];
      xp = pdp.xreturn;
      if (ipli_ast > Swe.SE_AST_OFFSET) {
        ifno = Swe.SwephData.SEI_FILE_ANY_AST;
      } else {
        ifno = Swe.SwephData.SEI_FILE_MAIN_AST;
      }
      if (ipli == Swe.SwephData.SEI_CHIRON && (tjd < Swe.SwephData.CHIRON_START || tjd > Swe.SwephData.CHIRON_END)) {
        console.error("Chiron's ephemeris is restricted to JD " +
                      Swe.SwephData.CHIRON_START + " - JD " + Swe.SwephData.CHIRON_EN);
        return Swe.ERR;
      }
      if (ipli == Swe.SwephData.SEI_PHOLUS && (tjd < Swe.SwephData.PHOLUS_START || tjd > Swe.SwephData.PHOLUS_END)) {
        console.error("Pholus's ephemeris is restricted to JD " +
                  Swe.SwephData.PHOLUS_START + " - JD " + Swe.SwephData.PHOLUS_END);
        return Swe.ERR;
      }

      while (true) {

        retc = this.main_planet(tjd, Swe.SwephData.SEI_EARTH, epheflag, iflag);
        if (retc == Swe.ERR) {
          return this.swecalc_error(x);
        }

        iflag = Swe.SwissData.pldat[Swe.SwephData.SEI_EARTH].xflgs;

        return this.swecalc_error(x);
      }

    } else if (ipl >= Swe.SE_FICT_OFFSET && ipl <= Swe.SE_FICT_MAX) {

      ipli = Swe.SwephData.SEI_ANYBODY;
      pdp = Swe.SwissData.pldat[ipli];
      xp = pdp.xreturn;
      while (true) {

        retc = this.main_planet(tjd, Swe.SwephData.SEI_EARTH, epheflag, iflag);
        iflag = Swe.SwissData.pldat[Swe.SwephData.SEI_EARTH].xflgs;
        if (smosh.swi_osc_el_plan(tjd, pdp.x, ipl-Swe.SE_FICT_OFFSET,
                                  ipli, pedp.x, psdp.x) != Swe.OK) {
          return this.swecalc_error(x);
        }
        if (retc == Swe.ERR) {
          return this.swecalc_error(x);
        }
        retc = this.app_pos_etc_plan_osc(ipl, ipli, iflag);
        if (retc == Swe.ERR) {
          return this.swecalc_error(x);
        }

        if (retc == Swe.SwephData.NOT_AVAILABLE ||
            retc == Swe.SwephData.BEYOND_EPH_LIMITS) {

          if (epheflag != Swe.SEFLG_MOSEPH) {
            iflag = (iflag & ~Swe.SEFLG_EPHMASK) | Swe.SEFLG_MOSEPH;
            epheflag = Swe.SEFLG_MOSEPH;
            console.error("using Moshier eph.; ");
            continue;
          } else
            return this.swecalc_error(x);
        }
        break;
      }
    /***********************************************
     * invalid body number                         *
     ***********************************************/
    } else {
      console.error("illegal planet number "+ipl+".");
      return this.swecalc_error(x);
    }
    for (i = 0; i < 24; i++) {
      x[i] = xp[i];
    }
    return(iflag);
  }

  moshier_moon(tjd, do_save, xpmret) {
    var retc = sm.swi_moshmoon(tjd, do_save, null);/**/
    if (retc == Swe.ERR) {
      return Swe.ERR;
    }
    /* for hel. position, we need earth as well */
    retc = smosh.swi_moshplan(tjd, Swe.SwephData.SEI_EARTH, do_save, null, null);/**/
    if (retc == Swe.ERR) {
      return Swe.ERR;
    }
    return Swe.OK;
  }

  swecalc_error(x) {
    /***********************************************
     * return error                                *
     ***********************************************/
    for(var i = 0; i < 24; i++) {
      x[i] = 0.;
    }
    return Swe.ERR;
  }


  sweph_sbar(tjd, iflag, psdp, pedp) {
    var retc;
    /* sweplan() provides barycentric sun as a by-product in save area;
     * it is saved in Swe.SwissData.pldat[SEI_SUNBARY].x */
    retc = sweplan(tjd, Swe.SwephData.SEI_EARTH, Swe.SwephData.SEI_FILE_PLANET, iflag,
                   Swe.SwephData.DO_SAVE, null, null, null, null);
    if (retc == Swe.ERR || retc == Swe.SwephData.NOT_AVAILABLE) {
      return Swe.ERR;
    }
    psdp.teval = tjd;
    /* pedp.teval = tjd; */
    return Swe.OK;
  }

  sweph_moon(tjd, ipli, iflag) {
    var retc;

        retc = sweplan(tjd, ipli, Swe.SwephData.SEI_FILE_MOON, iflag, Swe.SwephData.DO_SAVE,
                        null, null, null, null);
    if (retc == Swe.ERR) {
      return Swe.ERR;
    }
    /* if sweph file not found, switch to moshier */
    if (retc == Swe.SwephData.NOT_AVAILABLE) {
      return Swe.ERR;
    }
    return Swe.OK;
  }

  calc_epsilon(tjd, iflag, e) {
    e.teps = tjd;
    e.eps = this.sl.swi_epsiln(tjd, iflag);
    e.seps = Math.sin(e.eps);
    e.ceps = Math.cos(e.eps);
  }

  main_planet(tjd, ipli, epheflag, iflag){
    var retc;
    var calc_swieph=false;
    var calc_moshier=false;

    if (calc_swieph) {

      /* compute barycentric planet (+ earth, sun, moon) */
      retc = sweplan(tjd, ipli, Swe.SwephData.SEI_FILE_PLANET, iflag, Swe.SwephData.DO_SAVE,
                     null, null, null, null);
      if (retc == Swe.ERR) {
        return Swe.ERR;
      }
      if (retc == Swe.SwephData.NOT_AVAILABLE) {
        return Swe.ERR;
      }
      if (!calc_moshier) {
        /* geocentric, lighttime etc. */
        if (ipli == Swe.SwephData.SEI_SUN) {
          retc = this.app_pos_etc_sun(iflag)/**/;
        } else {
          retc = this.app_pos_etc_plan(ipli, iflag);
        }
        if (retc == Swe.ERR) {
          return Swe.ERR;
        }
        /* if sweph file for t(lighttime) not found, switch to moshier */
        if (retc == Swe.SwephData.NOT_AVAILABLE) {
          return Swe.ERR;
        }
      } // Swe.SEFLG_SWIEPH
    } // !calc_moshier
    return Swe.OK;
  }


  main_planet_bary(tjd, ipli, epheflag, iflag, do_save, xp, xe, xs, xm) {
    return Swe.OK;
  }

  sweplan(tjd, ipli, ifno, iflag, do_save,
              xpret, xperet, xpsret,
              xpmret) {
    var i, retc;
    var do_earth = false, do_moon = false, do_sunbary = false;
    var pdp = Swe.SwissData.pldat[ipli];
    var pebdp = Swe.SwissData.pldat[Swe.SwephData.SEI_EMB];
    var psbdp = Swe.SwissData.pldat[Swe.SwephData.SEI_SUNBARY];
    var pmdp = Swe.SwissData.pldat[Swe.SwephData.SEI_MOON];
    var xxp=new Array(6), xxm=new Array(6),
           xxs=new Array(6), xxe=new Array(6);
    var xp, xpe, xpm, xps;
    var speedf1, speedf2;
    /* xps (barycentric sun) may be necessary because some planets on sweph
     * file are heliocentric, other ones are barycentric. without xps,
     * the heliocentric ones cannot be returned barycentrically.
     */
    if (do_save || ipli == Swe.SwephData.SEI_SUNBARY
        || (pdp.iflg & Swe.SwephData.SEI_FLG_HELIO)!=0
        || xpsret != null || (iflag & Swe.SEFLG_HELCTR)!=0) {
      do_sunbary = true;
    }
    if (do_save || ipli == Swe.SwephData.SEI_EARTH || xperet != null) {
      do_earth = true;
    }
    if (ipli == Swe.SwephData.SEI_MOON) {
        do_earth = true;
        do_sunbary = true;
    }
    if (do_save || ipli == Swe.SwephData.SEI_MOON || ipli == Swe.SwephData.SEI_EARTH ||
        xperet != null || xpmret != null) {
      do_moon = true;
    }
    if (do_save) {
      xp = pdp.x;
      xpe = pebdp.x;
      xps = psbdp.x;
      xpm = pmdp.x;
    } else {
      xp = xxp;
      xpe = xxe;
      xps = xxs;
      xpm = xxm;
    }
    speedf2 = iflag & Swe.SEFLG_SPEED;
    /* barycentric sun */
    if (do_sunbary) {
      speedf1 = psbdp.xflgs & Swe.SEFLG_SPEED;
        retc = sweph(tjd, Swe.SwephData.SEI_SUNBARY, Swe.SwephData.SEI_FILE_PLANET, iflag,
                     null, do_save, xps);/**/
        if (retc != Swe.OK) {
          return(retc);
        }
      if (xpsret != null) {
        for (i = 0; i <= 5; i++) {
          xpsret[i] = xps[i];
        }
      }
    }
    /* moon */
    if (do_moon) {
      speedf1 = pmdp.xflgs & Swe.SEFLG_SPEED;
        retc = sweph(tjd, Swe.SwephData.SEI_MOON, Swe.SwephData.SEI_FILE_MOON, iflag, null,
                     do_save, xpm);
        if (retc == Swe.ERR) {
          return(retc);
        }
          return Swe.ERR;

      if (xpmret != null) {
        for (i = 0; i <= 5; i++) {
          xpmret[i] = xpm[i];
        }
      }
    }
    /* barycentric earth */
    if (do_earth) {
      speedf1 = pebdp.xflgs & Swe.SEFLG_SPEED;
        retc = sweph(tjd, Swe.SwephData.SEI_EMB, Swe.SwephData.SEI_FILE_PLANET, iflag, null,
                     do_save, xpe);
        if (retc != Swe.OK) {
          return(retc);
        }
        /* earth from emb and moon */
        embofs(xpe, 0, xpm, 0);
        /* speed is needed, if
         * 1. true position is being computed before applying light-time etc.
         *    this is the position saved in pdp->x.
         *    in this case, speed is needed for light-time correction.
         * 2. the speed flag has been specified.
         */
        if (xpe == pebdp.x || ((iflag & Swe.SEFLG_SPEED)!=0)) {
          embofs(xpe, 3, xpm, 3);
        }

      if (xperet != null) {
        for (i = 0; i <= 5; i++) {
          xperet[i] = xpe[i];
        }
      }
    }
    if (ipli == Swe.SwephData.SEI_MOON) {
      for (i = 0; i <= 5; i++) {
        xp[i] = xpm[i];
      }
    } else if (ipli == Swe.SwephData.SEI_EARTH) {
      for (i = 0; i <= 5; i++) {
        xp[i] = xpe[i];
      }
    } else if (ipli == Swe.SwephData.SEI_SUN) {
      for (i = 0; i <= 5; i++) {
        xp[i] = xps[i];
      }
    } else {
      /* planet */
      speedf1 = pdp.xflgs & Swe.SEFLG_SPEED;
        retc = sweph(tjd, ipli, ifno, iflag, null, do_save, xp);
        if (retc != Swe.OK) {
          return(retc);
        }
        /* if planet is heliocentric, it must be transformed to barycentric */
        if ((pdp.iflg & Swe.SwephData.SEI_FLG_HELIO)!=0) {
          /* now barycentric planet */
          for (i = 0; i <= 2; i++) {
            xp[i] += xps[i];
          }
          if (do_save || ((iflag & Swe.SEFLG_SPEED)!=0)) {
            for (i = 3; i <= 5; i++) {
              xp[i] += xps[i];
            }
          }
        }
    }
    if (xpret != null) {
      for (i = 0; i <= 5; i++) {
        xpret[i] = xp[i];
      }
    }
    return Swe.OK;
  }

  sweph(tjd, ipli, ifno, iflag, xsunb, do_save, xpret) {
    var i, ipl, retc, subdirlen;
    var s="", subdirnam, fname;
    var t, tsv;
    var xemb=new Array(6), xx=new Array(6), xp;
    var pdp;
    var pedp = Swe.SwissData.pldat[Swe.SwephData.SEI_EARTH];
    var psdp = Swe.SwissData.pldat[Swe.SwephData.SEI_SUNBARY];
    var fdp = Swe.SwissData.fidat[ifno];
    var speedf1, speedf2;
    var need_speed;
    ipl = ipli;
    if (ipli > Swe.SE_AST_OFFSET) {
      ipl = Swe.SwephData.SEI_ANYBODY;
    }
    pdp = Swe.SwissData.pldat[ipl];
    if (do_save) {
      xp = pdp.x;
    } else {
      xp = xx;
    }
    /* if planet has already been computed for this date, return.
     * if speed flag has been turned on, recompute planet */
    speedf1 = pdp.xflgs & Swe.SEFLG_SPEED;
    speedf2 = iflag & Swe.SEFLG_SPEED;

    return(Swe.SwephData.NOT_AVAILABLE);
  }

  app_pos_etc_plan(ipli, iflag) {
    var i, j, niter, retc = Swe.OK;
    var ifno, ibody;
    var flg1, flg2;
    var xx=new Array(6), dx=new Array(3), dt, t, dtsave_for_defl;
    var xobs=new Array(6), xobs2=new Array(6);
    var xearth=new Array(6), xsun=new Array(6);
    var xxsp=new Array(6), xxsv=new Array(6);
    var pedp = Swe.SwissData.pldat[Swe.SwephData.SEI_EARTH];
    var pdp;
    var oe = Swe.SwissData.oec2000;
    var epheflag = iflag & Swe.SEFLG_EPHMASK;
    t = dtsave_for_defl = 0;      /* dummy assignment to silence gcc */
    /* ephemeris file */
    if (ipli > Swe.SE_AST_OFFSET) {
      ifno = Swe.SwephData.SEI_FILE_ANY_AST;
      ibody = Swe.SwephData.IS_ANY_BODY;
      pdp = Swe.SwissData.pldat[Swe.SwephData.SEI_ANYBODY];
    } else if (ipli == Swe.SwephData.SEI_CHIRON
        || ipli == Swe.SwephData.SEI_PHOLUS
        || ipli == Swe.SwephData.SEI_CERES
        || ipli == Swe.SwephData.SEI_PALLAS
        || ipli == Swe.SwephData.SEI_JUNO
        || ipli == Swe.SwephData.SEI_VESTA) {
      ifno = Swe.SwephData.SEI_FILE_MAIN_AST;
      ibody = Swe.SwephData.IS_MAIN_ASTEROID;
      pdp = Swe.SwissData.pldat[ipli];
    } else {
      ifno = Swe.SwephData.SEI_FILE_PLANET;
      ibody = Swe.SwephData.IS_PLANET;
      pdp = Swe.SwissData.pldat[ipli];
    }

    /* if the same conversions have already been done for the same
     * date, then return */
    flg1 = iflag & ~Swe.SEFLG_EQUATORIAL & ~Swe.SEFLG_XYZ;
    flg2 = pdp.xflgs & ~Swe.SEFLG_EQUATORIAL & ~Swe.SEFLG_XYZ;
    if (flg1 == flg2) {
      pdp.xflgs = iflag;
      pdp.iephe = iflag & Swe.SEFLG_EPHMASK;
      return Swe.OK;
    }
    /* the conversions will be done with xx. */
    for (i = 0; i <= 5; i++) {
      xx[i] = pdp.x[i];
    }
    /* if heliocentric position is wanted */
    if ((iflag & Swe.SEFLG_HELCTR)!=0) {
        for (i = 0; i <= 5; i++) {
          xx[i] -= Swe.SwissData.pldat[Swe.SwephData.SEI_SUNBARY].x[i];
        }
    }
    /************************************
     * observer: geocenter or topocenter
     ************************************/
    /* if topocentric position is wanted  */
    if ((iflag & Swe.SEFLG_TOPOCTR)!=0) {
      if (Swe.SwissData.topd.teval != pedp.teval
        || pedp.teval == 0) {
        if (this.swi_get_observer(pedp.teval, iflag | Swe.SEFLG_NONUT, Swe.SwephData.DO_SAVE, xobs)
                                                               != Swe.OK) {
          return Swe.ERR;
        }
      } else {
        for (i = 0; i <= 5; i++) {
          xobs[i] = Swe.SwissData.topd.xobs[i];
        }
      }
      /* barycentric position of observer */
      for (i = 0; i <= 5; i++) {
        xobs[i] = xobs[i] + pedp.x[i];
      }
    } else {
      /* barycentric position of geocenter */
      for (i = 0; i <= 5; i++) {
        xobs[i] = pedp.x[i];
      }
    }
    /*******************************
     * light-time geocentric       *
     *******************************/
    if ((iflag & Swe.SEFLG_TRUEPOS)==0) {
      /* number of iterations - 1 */
      niter = 0;
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        /*
         * Apparent speed is influenced by the fact that dt changes with
         * motion. This makes a difference of several hundredths of an
         * arc second. To take this into account, we compute
         * 1. true position - apparent position at time t - 1.
         * 2. true position - apparent position at time t.
         * 3. the difference between the two is the part of the daily motion
         * that results from the change of dt.
         */
        for (i = 0; i <= 2; i++) {
          xxsv[i] = xxsp[i] = xx[i] - xx[i+3];
        }
        for (j = 0; j <= niter; j++) {
          for (i = 0; i <= 2; i++) {
            dx[i] = xxsp[i];
            if (((iflag & Swe.SEFLG_HELCTR)==0) &&
                 (iflag & Swe.SEFLG_BARYCTR)==0) {
              dx[i] -= (xobs[i] - xobs[i+3]);
            }
          }
          /* new dt */
          dt = Math.sqrt(this.sl.square_sum(dx)) * Swe.AUNIT / Swe.SwephData.CLIGHT /
                                                                       86400.0;
          for (i = 0; i <= 2; i++) {      /* rough apparent position at t-1 */
            xxsp[i] = xxsv[i] - dt * pdp.x[i+3];
          }
        }
        /* true position - apparent position at time t-1 */
        for (i = 0; i <= 2; i++) {
          xxsp[i] = xxsv[i] - xxsp[i];
        }
      }
      /* dt and t(apparent) */
      for (j = 0; j <= niter; j++) {
        for (i = 0; i <= 2; i++) {
          dx[i] = xx[i];
          if ((iflag & Swe.SEFLG_HELCTR)==0 &&
              (iflag & Swe.SEFLG_BARYCTR)==0) {
            dx[i] -= xobs[i];
          }
        }
        dt = Math.sqrt(this.sl.square_sum(dx)) *Swe.AUNIT / Swe.SwephData.CLIGHT / 86400.0;
        /* new t */
        t = pdp.teval - dt;
        dtsave_for_defl = dt;
        for (i = 0; i <= 2; i++) {        /* rough apparent position at t*/
          xx[i] = pdp.x[i] - dt * pdp.x[i+3];
        }
      }
      /* part of daily motion resulting from change of dt */
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        for (i = 0; i <= 2; i++) {
          xxsp[i] = pdp.x[i] - xx[i] - xxsp[i];
        }
      }
      /* new position, accounting for light-time (accurate) */
      switch(epheflag) {

      }

      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        /* observer position for t(light-time) */
        if ((iflag & Swe.SEFLG_TOPOCTR)!=0) {
          if (this.swi_get_observer(t, iflag | Swe.SEFLG_NONUT, Swe.SwephData.NO_SAVE, xobs2) !=
                                                                  Swe.OK) {
            return Swe.ERR;
          }
          for (i = 0; i <= 5; i++) {
            xobs2[i] += xearth[i];
          }
        } else {
          for (i = 0; i <= 5; i++) {
            xobs2[i] = xearth[i];
          }
        }
      }
    }
    /*******************************
     * conversion to geocenter     *
     *******************************/
    if ((iflag & Swe.SEFLG_HELCTR)==0 &&
        (iflag & Swe.SEFLG_BARYCTR)==0) {
      /* subtract earth */
      for (i = 0; i <= 5; i++) {
        xx[i] -= xobs[i];
      }

      if ((iflag & Swe.SEFLG_TRUEPOS) == 0 ) {
        /*
         * Apparent speed is also influenced by
         * the change of dt during motion.
         * Neglect of this would result in an error of several 0.01"
         */
        if ((iflag & Swe.SEFLG_SPEED)!=0) {
          for (i = 3; i <= 5; i++) {
            xx[i] -= xxsp[i-3];
          }
        }
      }
    }
    if ((iflag & Swe.SEFLG_SPEED)==0) {
      for (i = 3; i <= 5; i++) {
        xx[i] = 0;
      }
    }
    /************************************
     * relativistic deflection of light *
     ************************************/
    if ((iflag & Swe.SEFLG_TRUEPOS)==0 &&
        (iflag & Swe.SEFLG_NOGDEFL)==0) {
                  /* SEFLG_NOGDEFL is on, if SEFLG_HELCTR or SEFLG_BARYCTR */
      this.swi_deflect_light(xx, 0, dtsave_for_defl, iflag);
    }
    /**********************************
     * 'annual' aberration of light   *
     **********************************/
    if ((iflag & Swe.SEFLG_TRUEPOS)==0 &&
        (iflag & Swe.SEFLG_NOABERR)==0) {
                  /* SEFLG_NOABERR is on, if SEFLG_HELCTR or SEFLG_BARYCTR */
      this.swi_aberr_light(xx, xobs, iflag);
      /*
       * Apparent speed is also influenced by
       * the difference of speed of the earth between t and t-dt.
       * Neglecting this would involve an error of several 0.1"
       */
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        for (i = 3; i <= 5; i++) {
          xx[i] += xobs[i] - xobs2[i];
        }
      }
    }
    if ((iflag & Swe.SEFLG_SPEED) == 0) {
      for (i = 3; i <= 5; i++) {
        xx[i] = 0;
      }
    }

    /* ICRS to J2000 */
    if ((iflag & Swe.SEFLG_ICRS) == 0 && Swe.SwissData.jpldenum >= 403) {
      this.sl.swi_bias(xx, t, iflag, false);
    }/**/
    /* save J2000 coordinates; required for sidereal positions */
    for (i = 0; i <= 5; i++) {
      xxsv[i] = xx[i];
    }
    /************************************************
     * precession, equator 2000 -> equator of date *
     ************************************************/
    if ((iflag & Swe.SEFLG_J2000)==0) {
      this.sl.swi_precess(xx, pdp.teval, iflag, Swe.SwephData.J2000_TO_J);
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        this.swi_precess_speed(xx, pdp.teval, iflag, Swe.SwephData.J2000_TO_J);
      }
      oe = Swe.SwissData.oec;
    } else {
      oe = Swe.SwissData.oec2000;
    }
    return this.app_pos_rest(pdp, iflag, xx, xxsv, oe);
  }

  app_pos_rest(pdp, iflag, xx, x2000, oe) {
    var i;
    /************************************************
     * nutation                                     *
     ************************************************/
    if ((iflag & Swe.SEFLG_NONUT)==0) {
      this.swi_nutate(xx, 0, iflag, false);
    }
    /* now we have equatorial cartesian coordinates; save them */
    for (i = 0; i <= 5; i++) {
      pdp.xreturn[18+i] = xx[i];
    }
    /************************************************
     * transformation to ecliptic.                  *
     * with sidereal calc. this will be overwritten *
     * afterwards.                                  *
     ************************************************/
    this.sl.swi_coortrf2(xx, xx, oe.seps, oe.ceps);
    if ((iflag & Swe.SEFLG_SPEED) !=0) {
      this.sl.swi_coortrf2(xx, 3, xx, 3, oe.seps, oe.ceps);
    }
    if ((iflag & Swe.SEFLG_NONUT)==0) {
      this.sl.swi_coortrf2(xx, xx, Swe.SwissData.nut.snut, Swe.SwissData.nut.cnut);
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        this.sl.swi_coortrf2(xx, 3, xx, 3, Swe.SwissData.nut.snut, Swe.SwissData.nut.cnut);
      }
    }
    /* now we have ecliptic cartesian coordinates */
    for (i = 0; i <= 5; i++) {
      pdp.xreturn[6+i] = xx[i];
    }
    /************************************
     * sidereal positions               *
     ************************************/
    if ((iflag & Swe.SEFLG_SIDEREAL)!=0) {
      /* project onto ecliptic t0 */

      if ((Swe.SwissData.sidd.sid_mode & Swe.SE_SIDBIT_ECL_T0)!=0) {
        if (swi_trop_ra2sid_lon(x2000, pdp.xreturn, 6, pdp.xreturn, 18, iflag) != Swe.OK) {
          return Swe.ERR;
        }
      /* project onto solar system equator */
      } else if ((Swe.SwissData.sidd.sid_mode & Swe.SE_SIDBIT_SSY_PLANE)!=0) {
        if (swi_trop_ra2sid_lon_sosy(x2000, pdp.xreturn, 6, pdp.xreturn, 18,
                                     iflag) != Swe.OK) {
          return Swe.ERR;
        }
      } else {

      /* traditional algorithm */
        this.sl.swi_cartpol_sp(pdp.xreturn, 6, pdp.xreturn, 0);
        pdp.xreturn[0] -= this.swe_get_ayanamsa(pdp.teval) * Swe.SwissData.DEGTORAD;
        this.sl.swi_polcart_sp(pdp.xreturn, 0, pdp.xreturn, 6);

      }
    }
    /************************************************
     * transformation to polar coordinates          *
     ************************************************/
    this.sl.swi_cartpol_sp(pdp.xreturn, 18, pdp.xreturn, 12);
    this.sl.swi_cartpol_sp(pdp.xreturn, 6, pdp.xreturn, 0);
    /**********************
     * radians to degrees *
     **********************/
    /*if ((iflag & SEFLG_RADIANS) == 0) {*/
      for (i = 0; i < 2; i++) {
        pdp.xreturn[i] *= Swe.SwissData.RADTODEG;                /* ecliptic */
        pdp.xreturn[i+3] *= Swe.SwissData.RADTODEG;
        pdp.xreturn[i+12] *= Swe.SwissData.RADTODEG;     /* equator */
        pdp.xreturn[i+15] *= Swe.SwissData.RADTODEG;
      }
/*pdp->xreturn[12] -= (0.053 / 3600.0); */
    /*}*/
    /* save, what has been done */
    pdp.xflgs = iflag;
    pdp.iephe = iflag & Swe.SEFLG_EPHMASK;
    return Swe.OK;
  }


  /*
   * input coordinates are J2000, cartesian.
   * xout         ecliptical sidereal position
   * xoutr        equatorial sidereal position
   */
  swi_trop_ra2sid_lon(xin, xout, xoutr, iflag) {
    return this.swi_trop_ra2sid_lon(xin, xout, 0, xoutr, 0, iflag);
  }
  swi_trop_ra2sid_lon(xin, xout, xoOffs, xoutr, xrOffs, iflag) {
    var x=new Array(6);
    var i;
    var sip = Swe.SwissData.sidd;
    var oectmp=new Epsilon();
    for (i = 0; i <= 5; i++) {
      x[i] = xin[i];
    }
    if (sip.t0 != Swe.SwephData.J2000) {
      /* iflag must not contain SEFLG_JPLHOR here */
      this.sl.swi_precess(x, sip.t0, 0, Swe.SwephData.J2000_TO_J);
      this.sl.swi_precess(x, 3, sip.t0, 0, Swe.SwephData.J2000_TO_J);      /* speed */
    }
    for (i = 0; i <= 5; i++) {
      xoutr[i+xrOffs] = x[i];
    }
    this.calc_epsilon(Swe.SwissData.sidd.t0, iflag, oectmp);
    this.sl.swi_coortrf2(x, x, oectmp.seps, oectmp.ceps);
    if ((iflag & Swe.SEFLG_SPEED)!=0) {
      this.sl.swi_coortrf2(x, 3, x, 3, oectmp.seps, oectmp.ceps);
    }
    /* to polar coordinates */
    this.sl.swi_cartpol_sp(x, x);
    /* subtract ayan_t0 */
    x[0] -= sip.ayan_t0 * Swe.SwissData.DEGTORAD;
    /* back to cartesian */
    this.sl.swi_polcart_sp(x, 0, xout, xoOffs);
    return Swe.OK;
  }

  /*
   * input coordinates are J2000, cartesian.
   * xout         ecliptical sidereal position
   * xoutr        equatorial sidereal position
   */
  swi_trop_ra2sid_lon_sosy(xin, xout, xoutr,
                               iflag) {
    return this.swi_trop_ra2sid_lon_sosy(xin, xout, 0, xoutr, 0, iflag);
  }
  swi_trop_ra2sid_lon_sosy(xin, xout, xoOffs, xoutr, xrOffs, iflag) {
    var x=new Array(6), x0=new Array(6);
    var i;
    var sip = Swe.SwissData.sidd;
    var oe = Swe.SwissData.oec2000;
    var plane_node = Swe.SwephData.SSY_PLANE_NODE_E2000;
    var plane_incl = Swe.SwephData.SSY_PLANE_INCL;
    for (i = 0; i <= 5; i++) {
      x[i] = xin[i];
    }
    /* planet to ecliptic 2000 */
    this.sl.swi_coortrf2(x, x, oe.seps, oe.ceps);
    if ((iflag & Swe.SEFLG_SPEED)!=0) {
      this.sl.swi_coortrf2(x, 3, x, 3, oe.seps, oe.ceps);
    }
    /* to polar coordinates */
    this.sl.swi_cartpol_sp(x, x);
    /* to solar system equator */
    x[0] -= plane_node;
    this.sl.swi_polcart_sp(x, x);
    this.sl.swi_coortrf(x, x, plane_incl);
    this.sl.swi_coortrf(x, 3, x, 3, plane_incl);
    this.sl.swi_cartpol_sp(x, x);
    /* zero point of t0 in J2000 system */
    x0[0] = 1;
    x0[1] = x0[2] = 0;
    if (sip.t0 != Swe.SwephData.J2000) {
      /* iflag must not contain SEFLG_JPLHOR here */
      this.sl.swi_precess(x0, sip.t0, 0, Swe.SwephData.J_TO_J2000);
    }
    /* zero point to ecliptic 2000 */
    this.sl.swi_coortrf2(x0, x0, oe.seps, oe.ceps);
    /* to polar coordinates */
    this.sl.swi_cartpol(x0, x0);
    /* to solar system equator */
    x0[0] -= plane_node;
    this.sl.swi_polcart(x0, x0);
    this.sl.swi_coortrf(x0, x0, plane_incl);
    this.sl.swi_cartpol(x0, x0);
    /* measure planet from zero point */
    x[0] -= x0[0];
    x[0] *= Swe.SwissData.RADTODEG;
    /* subtract ayan_t0 */
    x[0] -= sip.ayan_t0;
    x[0] = this.sl.swe_degnorm(x[0]) * Swe.SwissData.DEGTORAD;
    /* back to cartesian */
    this.sl.swi_polcart_sp(x, 0, xout, xoOffs);
    return Swe.OK;
  }


  /* converts planets from barycentric to geocentric,
   * apparent positions
   * precession and nutation
   * according to flags
   * ipli         planet number
   * iflag        flags
   */
  app_pos_etc_plan_osc(ipl, ipli, iflag) {
    var i, j, niter, retc;
    var xx=new Array(6), dx=new Array(3), dt, dtsave_for_defl;
    var xearth=new Array(6), xsun=new Array(6), xmoon=new Array(6);
    var xxsv=new Array(6), xxsp=[0,0,0],
           xobs=new Array(6), xobs2=new Array(6);
    var t;
    var pdp = Swe.SwissData.pldat[ipli];
    var pedp = Swe.SwissData.pldat[Swe.SwephData.SEI_EARTH];
    var psdp = Swe.SwissData.pldat[Swe.SwephData.SEI_SUNBARY];
    var oe = Swe.SwissData.oec2000;
    var epheflag = Swe.SEFLG_DEFAULTEPH;
    dt = dtsave_for_defl = 0;     /* dummy assign to silence gcc */
    if ((iflag & Swe.SEFLG_MOSEPH)!=0) {
      epheflag = Swe.SEFLG_MOSEPH;
    }
    /* the conversions will be done with xx. */
    for (i = 0; i <= 5; i++) {
      xx[i] = pdp.x[i];
    }
    /************************************
     * barycentric position is required *
     ************************************/
    /* = heliocentric position with Moshier ephemeris */
    /************************************
     * observer: geocenter or topocenter
     ************************************/
    /* if topocentric position is wanted  */
    if ((iflag & Swe.SEFLG_TOPOCTR)!=0) {
      if (Swe.SwissData.topd.teval != pedp.teval
        || Swe.SwissData.topd.teval != 0) {
        if (this.swi_get_observer(pedp.teval, iflag | Swe.SEFLG_NONUT, Swe.SwephData.DO_SAVE, xobs)
                                                              != Swe.OK) {
          return Swe.ERR;
        }
      } else {
        for (i = 0; i <= 5; i++) {
          xobs[i] = Swe.SwissData.topd.xobs[i];
        }
      }
      /* barycentric position of observer */
      for (i = 0; i <= 5; i++) {
        xobs[i] = xobs[i] + pedp.x[i];
      }
    } else if ((iflag & Swe.SEFLG_BARYCTR)!=0) {
      for (i = 0; i <= 5; i++) {
        xobs[i] = 0;
      }
    } else if ((iflag & Swe.SEFLG_HELCTR)!=0) {
      if ((iflag & Swe.SEFLG_MOSEPH)!=0) {
        for (i = 0; i <= 5; i++) {
          xobs[i] = 0;
        }
      } else {
        for (i = 0; i <= 5; i++) {
          xobs[i] = psdp.x[i];
        }
      }
    } else {
      for (i = 0; i <= 5; i++) {
        xobs[i] = pedp.x[i];
      }
    }
    /*******************************
     * light-time                  *
     *******************************/
    if ((iflag & Swe.SEFLG_TRUEPOS)==0) {
      niter = 1;
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        /*
         * Apparent speed is influenced by the fact that dt changes with
         * motion. This makes a difference of several hundredths of an
         * arc second. To take this into account, we compute
         * 1. true position - apparent position at time t - 1.
         * 2. true position - apparent position at time t.
         * 3. the difference between the two is the daily motion resulting from
         * the change of dt.
         */
        for (i = 0; i <= 2; i++) {
          xxsv[i] = xxsp[i] = xx[i] - xx[i+3];
        }
        for (j = 0; j <= niter; j++) {
          for (i = 0; i <= 2; i++) {
            dx[i] = xxsp[i];
            if ((iflag & Swe.SEFLG_HELCTR)==0 &&
                (iflag & Swe.SEFLG_BARYCTR)==0) {
              dx[i] -= (xobs[i] - xobs[i+3]);
            }
          }
          /* new dt */
          dt = Math.sqrt(this.sl.square_sum(dx)) * Swe.AUNIT / Swe.SwephData.CLIGHT /
                                                                      86400.0;
          for (i = 0; i <= 2; i++) {
            xxsp[i] = xxsv[i] - dt * pdp.x[i+3];/* rough apparent position */
          }
        }
        /* true position - apparent position at time t-1 */
        for (i = 0; i <= 2; i++) {
          xxsp[i] = xxsv[i] - xxsp[i];
        }
      }
      /* dt and t(apparent) */
      for (j = 0; j <= niter; j++) {
        for (i = 0; i <= 2; i++) {
          dx[i] = xx[i];
          if ((iflag & Swe.SEFLG_HELCTR)==0 &&
              (iflag & Swe.SEFLG_BARYCTR)==0) {
            dx[i] -= xobs[i];
          }
        }
        /* new dt */
        dt = Math.sqrt(this.sl.square_sum(dx)) *Swe.AUNIT / Swe.SwephData.CLIGHT / 86400.0;
        dtsave_for_defl = dt;
        /* new position: subtract t * speed
         */
        for (i = 0; i <= 2; i++) {
          xx[i] = pdp.x[i] - dt * pdp.x[i+3];/**/
          xx[i+3] = pdp.x[i+3];
        }
      }
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        /* part of daily motion resulting from change of dt */
        for (i = 0; i <= 2; i++) {
          xxsp[i] = pdp.x[i] - xx[i] - xxsp[i];
        }
        t = pdp.teval - dt;
        /* for accuracy in speed, we will need earth as well */
        retc = this.main_planet_bary(t, Swe.SwephData.SEI_EARTH, epheflag, iflag,
                                Swe.SwephData.NO_SAVE, xearth, xearth, xsun,
                                xmoon);
        if (smosh.swi_osc_el_plan(t, xx, ipl-Swe.SE_FICT_OFFSET, ipli,
                                  xearth, xsun) != Swe.OK) {
          return(Swe.ERR);
        }
        if (retc != Swe.OK) {
          return(retc);
        }
        if ((iflag & Swe.SEFLG_TOPOCTR)!=0) {
          if (this.swi_get_observer(t, iflag | Swe.SEFLG_NONUT, Swe.SwephData.NO_SAVE, xobs2) !=
                                                                  Swe.OK) {
            return Swe.ERR;
          }
          for (i = 0; i <= 5; i++) {
            xobs2[i] += xearth[i];
          }
        } else {
          for (i = 0; i <= 5; i++) {
            xobs2[i] = xearth[i];
          }
        }
      }
    }
    /*******************************
     * conversion to geocenter     *
     *******************************/
    for (i = 0; i <= 5; i++) {
      xx[i] -= xobs[i];
    }
    if ((iflag & Swe.SEFLG_TRUEPOS)==0) {
      /*
       * Apparent speed is also influenced by
       * the change of dt during motion.
       * Neglect of this would result in an error of several 0.01"
       */
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        for (i = 3; i <= 5; i++) {
          xx[i] -= xxsp[i-3];
        }
      }
    }
    if ((iflag & Swe.SEFLG_SPEED)==0) {
      for (i = 3; i <= 5; i++) {
        xx[i] = 0;
      }
    }
    /************************************
     * relativistic deflection of light *
     ************************************/
    if ((iflag & Swe.SEFLG_TRUEPOS)==0 &&
        (iflag & Swe.SEFLG_NOGDEFL)==0) {
                  /* SEFLG_NOGDEFL is on, if SEFLG_HELCTR or SEFLG_BARYCTR */
      this.swi_deflect_light(xx, 0, dtsave_for_defl, iflag);
    }
    /**********************************
     * 'annual' aberration of light   *
     **********************************/
    if ((iflag & Swe.SEFLG_TRUEPOS)==0 &&
        (iflag & Swe.SEFLG_NOABERR)==0) {
                  /* SEFLG_NOABERR is on, if SEFLG_HELCTR or SEFLG_BARYCTR */
      this.swi_aberr_light(xx, xobs, iflag);
      /*
       * Apparent speed is also influenced by
       * the difference of speed of the earth between t and t-dt.
       * Neglecting this would involve an error of several 0.1"
       */
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        for (i = 3; i <= 5; i++) {
          xx[i] += xobs[i] - xobs2[i];
        }
      }
    }
    /* save J2000 coordinates; required for sidereal positions */
    for (i = 0; i <= 5; i++) {
      xxsv[i] = xx[i];
    }
    /************************************************
     * precession, equator 2000 -> equator of date *
     ************************************************/
    if ((iflag & Swe.SEFLG_J2000)==0) {
      this.sl.swi_precess(xx, pdp.teval, iflag, Swe.SwephData.J2000_TO_J);
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        this.swi_precess_speed(xx, pdp.teval, iflag, Swe.SwephData.J2000_TO_J);
      }
      oe = Swe.SwissData.oec;
    } else
      oe = Swe.SwissData.oec2000;
    return this.app_pos_rest(pdp, iflag, xx, xxsv, oe);
  }

  /* influence of precession on speed
   * xx           position and speed of planet in equatorial cartesian
   *              coordinates */
  swi_precess_speed(xx, t, iflag, direction) {
    this.swi_precess_speed(xx, 0, t, iflag, direction);
  }
  swi_precess_speed(xx, xOffs, t, iflag, direction) {
    var oe;
    var fac, dpre = new Array(1), dpre2 = new Array(1);
    var tprec = (t - Swe.SwephData.J2000) / 36525.0;
    var prec_model = Swe.SwissData.astro_models[Swe.SE_MODEL_PREC_LONGTERM];
    if (prec_model == 0) prec_model = Swe.SEMOD_PREC_DEFAULT;
    if (direction == Swe.SwephData.J2000_TO_J) {
      fac = 1;
      oe = Swe.SwissData.oec;
    } else {
      fac = -1;
      oe = Swe.SwissData.oec2000;
    }
    /* first correct rotation.
     * this costs some sines and cosines, but neglect might
     * involve an error > 1"/day */
    this.sl.swi_precess(xx, 3+xOffs, t, iflag, direction);
    /* then add 0.137"/day */
    this.sl.swi_coortrf2(xx, xOffs, xx, xOffs, oe.seps, oe.ceps);
    this.sl.swi_coortrf2(xx, 3+xOffs, xx, 3+xOffs, oe.seps, oe.ceps);
    this.sl.swi_cartpol_sp(xx, xOffs, xx, xOffs);
    if (prec_model == Swe.SEMOD_PREC_VONDRAK_2011) {
      this.sl.swi_ldp_peps(t, dpre, null);
      this.sl.swi_ldp_peps(t + 1, dpre2, null);
      xx[3] += (dpre2[0] - dpre[0]) * fac;
    } else {
      xx[3] += (50.290966 + 0.0222226 * tprec) / 3600 / 365.25 * Swe.SwissData.DEGTORAD * fac;
        /* formula from Montenbruck, German 1994, p. 18 */
    }
    this.sl.swi_polcart_sp(xx, xOffs, xx, xOffs);
    this.sl.swi_coortrf2(xx, xOffs, xx, xOffs, -oe.seps, oe.ceps);
    this.sl.swi_coortrf2(xx, 3+xOffs, xx, 3+xOffs, -oe.seps, oe.ceps);
  }

  /* multiplies cartesian equatorial coordinates with previously
   * calculated nutation matrix. also corrects speed.
   */
  swi_nutate(xx, offs, iflag,backward) {
    var i;
    var x=new Array(6), xv=new Array(6);
    for (i = 0; i <= 2; i++) {
      if (backward) {
        x[i] = xx[0+offs] * Swe.SwissData.nut.matrix[i][0] +
               xx[1+offs] * Swe.SwissData.nut.matrix[i][1] +
               xx[2+offs] * Swe.SwissData.nut.matrix[i][2];
      } else {
        x[i] = xx[0+offs] * Swe.SwissData.nut.matrix[0][i] +
               xx[1+offs] * Swe.SwissData.nut.matrix[1][i] +
               xx[2+offs] * Swe.SwissData.nut.matrix[2][i];
      }
    }
    if ((iflag & Swe.SEFLG_SPEED)!=0) {
      /* correct speed:
       * first correct rotation */
      for (i = 0; i <= 2; i++) {
        if (backward) {
          x[i+3] = xx[3+offs] * Swe.SwissData.nut.matrix[i][0] +
                   xx[4+offs] * Swe.SwissData.nut.matrix[i][1] +
                   xx[5+offs] * Swe.SwissData.nut.matrix[i][2];
        } else {
          x[i+3] = xx[3+offs] * Swe.SwissData.nut.matrix[0][i] +
                   xx[4+offs] * Swe.SwissData.nut.matrix[1][i] +
                   xx[5+offs] * Swe.SwissData.nut.matrix[2][i];
        }
      }
      /* then apparent motion due to change of nutation during day.
       * this makes a difference of 0.01" */
      for (i = 0; i <= 2; i++) {
        if (backward) {
          xv[i] = xx[0+offs] * Swe.SwissData.nutv.matrix[i][0] +
                 xx[1+offs] * Swe.SwissData.nutv.matrix[i][1] +
                 xx[2+offs] * Swe.SwissData.nutv.matrix[i][2];
        } else {
          xv[i] = xx[0+offs] * Swe.SwissData.nutv.matrix[0][i] +
                 xx[1+offs] * Swe.SwissData.nutv.matrix[1][i] +
                 xx[2+offs] * Swe.SwissData.nutv.matrix[2][i];
        }
        /* new speed */
        xx[3+i+offs] = x[3+i] + (x[i] - xv[i]) / Swe.SwephData.NUT_SPEED_INTV;
      }
    }
    /* new position */
    for (i = 0; i <= 2; i++) {
      xx[i+offs] = x[i];
    }
  }

  /* computes 'annual' aberration
   * xx           planet's position accounted for light-time
   *              and gravitational light deflection
   * xe           earth's position and speed
   */
  swi_aberr_light(xx, xe, iflag) {
    this.swi_aberr_light(xx, 0, xe, iflag);
  }
  swi_aberr_light(xx, xxOffs, xe, iflag) {
    var i;
    var xxs=new Array(6), v=new Array(6), u=new Array(6), ru;
    var xx2=new Array(6), dx1, dx2;
    var b_1, f1, f2;
    var v2;
    var intv = Swe.SwephData.PLAN_SPEED_INTV;
    for (i = 0; i <= 5; i++) {
      u[i] = xxs[i] = xx[i+xxOffs];
    }
    ru = Math.sqrt(this.sl.square_sum(u));
    for (i = 0; i <= 2; i++) {
      v[i] = xe[i+3] / 24.0 / 3600.0 / Swe.SwephData.CLIGHT * Swe.AUNIT;
    }
    v2 = this.sl.square_sum(v);
    b_1 = Math.sqrt(1 - v2);
    f1 = this.dot_prod(u, v) / ru;
    f2 = 1.0 + f1 / (1.0 + b_1);
    for (i = 0; i <= 2; i++) {
      xx[i+xxOffs] = (b_1*xx[i+xxOffs] + f2*ru*v[i]) / (1.0 + f1);
    }
    if ((iflag & Swe.SEFLG_SPEED)!=0) {
      /* correction of speed
       * the influence of aberration on apparent velocity can
       * reach 0.4"/day
       */
      for (i = 0; i <= 2; i++) {
        u[i] = xxs[i] - intv * xxs[i+3];
      }
      ru = Math.sqrt(this.sl.square_sum(u));
      f1 = this.dot_prod(u, v) / ru;
      f2 = 1.0 + f1 / (1.0 + b_1);
      for (i = 0; i <= 2; i++) {
        xx2[i] = (b_1*u[i] + f2*ru*v[i]) / (1.0 + f1);
      }
      for (i = 0; i <= 2; i++) {
        dx1 = xx[i+xxOffs] - xxs[i];
        dx2 = xx2[i] - u[i];
        dx1 -= dx2;
        xx[i+3+xxOffs] += dx1 / intv;
      }
    }
  }

  /* computes relativistic light deflection by the sun
   * ipli         sweph internal planet number
   * xx           planet's position accounted for light-time
   * dt           dt of light-time
   */
  swi_deflect_light(xx, offs, dt, iflag) {
    var i;
    var xx2=new Array(6);
    var u=new Array(6), e=new Array(6), q=new Array(6);
    var ru, re, rq, uq, ue, qe, g1, g2;
    var xx3=new Array(6), dx1, dx2, dtsp;
    var xsun=new Array(6), xearth=new Array(6);
    var sina, sin_sunr, meff_fact;
    var pedp = Swe.SwissData.pldat[Swe.SwephData.SEI_EARTH];
    var psdp = Swe.SwissData.pldat[Swe.SwephData.SEI_SUNBARY];
    var iephe = pedp.iephe;
    for (i = 0; i <= 5; i++) {
      xearth[i] = pedp.x[i];
    }
    if ((iflag & Swe.SEFLG_TOPOCTR)!=0) {
      for (i = 0; i <= 5; i++) {
        xearth[i] += Swe.SwissData.topd.xobs[i];
      }
    }
    /* U = planetbary(t-tau) - earthbary(t) = planetgeo */
    for (i = 0; i <= 2; i++) {
      u[i] = xx[i+offs];
    }
    /* Eh = earthbary(t) - sunbary(t) = earthhel */
      for (i = 0; i <= 2; i++) {
        e[i] = xearth[i];
      }

    /* Q = planetbary(t-tau) - sunbary(t-tau) = 'planethel' */
    /* first compute sunbary(t-tau) for */
      for (i = 0; i <= 5; i++) {
        xsun[i] = psdp.x[i];
      }
    for (i = 0; i <= 2; i++) {
      q[i] = xx[i+offs] + xearth[i] - xsun[i];
    }
    ru = Math.sqrt(this.sl.square_sum(u));
    rq = Math.sqrt(this.sl.square_sum(q));
    re = Math.sqrt(this.sl.square_sum(e));
    for (i = 0; i <= 2; i++) {
      u[i] /= ru;
      q[i] /= rq;
      e[i] /= re;
    }
    uq = this.dot_prod(u,q);
    ue = this.dot_prod(u,e);
    qe = this.dot_prod(q,e);
    sina = Math.sqrt(1 - ue * ue);      /* sin(angle) between sun and planet */
    sin_sunr = Swe.SwephData.SUN_RADIUS / re;   /* sine of sun radius (= sun radius) */
    if (sina < sin_sunr) {
      meff_fact = meff(sina / sin_sunr);
    } else {
      meff_fact = 1;
    }
    g1 = 2.0 * Swe.SwephData.HELGRAVCONST * meff_fact / Swe.SwephData.CLIGHT / Swe.SwephData.CLIGHT / Swe.AUNIT / re;
    g2 = 1.0 + qe;
    /* compute deflected position */
    for (i = 0; i <= 2; i++) {
      xx2[i] = ru * (u[i] + g1/g2 * (uq * e[i] - ue * q[i]));
    }
    if ((iflag & Swe.SEFLG_SPEED)!=0) {
      dtsp = -Swe.SwephData.DEFL_SPEED_INTV;
      /* U = planetbary(t-tau) - earthbary(t) = planetgeo */
      for (i = 0; i <= 2; i++) {
        u[i] = xx[i+offs] - dtsp * xx[i+3+offs];
      }
      /* Eh = earthbary(t) - sunbary(t) = earthhel */

        for (i = 0; i <= 2; i++) {
          e[i] = xearth[i] - dtsp * xearth[i+3];
        }

      /* Q = planetbary(t-tau) - sunbary(t-tau) = 'planethel' */
      for (i = 0; i <= 2; i++) {
        q[i] = u[i] + xearth[i] - xsun[i] - dtsp * (xearth[i+3] - xsun[i+3]);
      }
      ru = Math.sqrt(this.sl.square_sum(u));
      rq = Math.sqrt(this.sl.square_sum(q));
      re = Math.sqrt(this.sl.square_sum(e));
      for (i = 0; i <= 2; i++) {
        u[i] /= ru;
        q[i] /= rq;
        e[i] /= re;
      }
      uq = this.dot_prod(u,q);
      ue = this.dot_prod(u,e);
      qe = this.dot_prod(q,e);
      sina = Math.sqrt(1 - ue * ue);    /* sin(angle) between sun and planet */
      sin_sunr = Swe.SwephData.SUN_RADIUS / re; /* sine of sun radius (= sun radius) */
      if (sina < sin_sunr) {
        meff_fact = meff(sina / sin_sunr);
      } else {
        meff_fact = 1;
      }
      g1 = 2.0 * Swe.SwephData.HELGRAVCONST * meff_fact / Swe.SwephData.CLIGHT /
           Swe.SwephData.CLIGHT / Swe.AUNIT / re;
      g2 = 1.0 + qe;
      for (i = 0; i <= 2; i++) {
        xx3[i] = ru * (u[i] + g1/g2 * (uq * e[i] - ue * q[i]));
      }
      for (i = 0; i <= 2; i++) {
        dx1 = xx2[i] - xx[i+offs];
        dx2 = xx3[i] - u[i] * ru;
        dx1 -= dx2;
        xx[i+3+offs] += dx1 / dtsp;
      }
    } /* endif speed */
    /* deflected position */
    for (i = 0; i <= 2; i++) {
      xx[i+offs] = xx2[i];
    }
  }

  app_pos_etc_sun(iflag) {
    var i, j, niter, retc = Swe.OK;
    var flg1, flg2;
    var xx=new Array(6), xxsv=new Array(6), dx=new Array(3), dt, t = 0;
    var xearth=new Array(6), xsun=new Array(6), xobs=new Array(6);
    var pedp = Swe.SwissData.pldat[Swe.SwephData.SEI_EARTH];
    var psdp = Swe.SwissData.pldat[Swe.SwephData.SEI_SUNBARY];
    var oe = Swe.SwissData.oec2000;
    /* if the same conversions have already been done for the same
     * date, then return */
    flg1 = iflag & ~Swe.SEFLG_EQUATORIAL & ~Swe.SEFLG_XYZ;
    flg2 = pedp.xflgs & ~Swe.SEFLG_EQUATORIAL & ~Swe.SEFLG_XYZ;
    if (flg1 == flg2) {
      pedp.xflgs = iflag;
      pedp.iephe = iflag & Swe.SEFLG_EPHMASK;
      return Swe.OK;
    }
    /************************************
     * observer: geocenter or topocenter
     ************************************/
    /* if topocentric position is wanted  */
    if ((iflag & Swe.SEFLG_TOPOCTR)!=0) {
      if (Swe.SwissData.topd.teval != pedp.teval
        || Swe.SwissData.topd.teval == 0) {
        if (this.swi_get_observer(pedp.teval, iflag | Swe.SEFLG_NONUT, Swe.SwephData.DO_SAVE, xobs)
                                                              != Swe.OK) {
          return Swe.ERR;
        }
      } else {
        for (i = 0; i <= 5; i++) {
          xobs[i] = Swe.SwissData.topd.xobs[i];
        }
      }
      /* barycentric position of observer */
      for (i = 0; i <= 5; i++) {
        xobs[i] = xobs[i] + pedp.x[i];
      }
    } else {
      /* barycentric position of geocenter */
      for (i = 0; i <= 5; i++) {
        xobs[i] = pedp.x[i];
      }
    }
    /***************************************
     * true heliocentric position of earth *
     ***************************************/
    if (pedp.iephe == Swe.SEFLG_MOSEPH ||
        (iflag & Swe.SEFLG_BARYCTR)!=0) {
      for (i = 0; i <= 5; i++) {
        xx[i] = xobs[i];
      }
    } else {
      for (i = 0; i <= 5; i++) {
        xx[i] = xobs[i] - psdp.x[i];
      }
    }
    /*******************************
     * light-time                  *
     *******************************/
    if ((iflag & Swe.SEFLG_TRUEPOS)==0) {

      if (
          (iflag & Swe.SEFLG_HELCTR)!=0 ||
          (iflag & Swe.SEFLG_BARYCTR)!=0) {
        for (i = 0; i <= 5; i++) {
          xearth[i] = xobs[i];
          if (pedp.iephe == Swe.SEFLG_MOSEPH) {
            xsun[i] = 0;
          } else {
            xsun[i] = psdp.x[i];
          }
        }
        niter = 1;        /* # of iterations */
        for (j = 0; j <= niter; j++) {
          /* distance earth-sun */
          for (i = 0; i <= 2; i++) {
            dx[i] = xearth[i];
            if ((iflag & Swe.SEFLG_BARYCTR)==0) {
              dx[i] -= xsun[i];
            }
          }
          /* new t */
          dt = Math.sqrt(this.sl.square_sum(dx)) * Swe.AUNIT / Swe.SwephData.CLIGHT /
                                                                      86400.0;
          t = pedp.teval - dt;
          /* new position */
          switch(pedp.iephe) {
            /* if geocentric sun, new sun at t'
             * if heliocentric or barycentric earth, new earth at t' */

            default:
              retc = Swe.ERR;
              break;
          }
          if (retc != Swe.OK) {
            return(retc);
          }
        }
        /* apparent heliocentric earth */
        for (i = 0; i <= 5; i++) {
          xx[i] = xearth[i];
          if ((iflag & Swe.SEFLG_BARYCTR)==0) {
            xx[i] -= xsun[i];
          }
        }
      }
    }
    if ((iflag & Swe.SEFLG_SPEED)==0) {
      for (i = 3; i <= 5; i++) {
        xx[i] = 0;
      }
    }
    /*******************************
     * conversion to geocenter     *
     *******************************/
    if ((iflag & Swe.SEFLG_HELCTR)==0 &&
        (iflag & Swe.SEFLG_BARYCTR)==0) {
      for (i = 0; i <= 5; i++) {
        xx[i] = -xx[i];
      }
    }
    /**********************************
     * 'annual' aberration of light   *
     **********************************/
    if ((iflag & Swe.SEFLG_TRUEPOS)==0 &&
        (iflag & Swe.SEFLG_NOABERR)==0) {
                /* SEFLG_NOABERR is on, if SEFLG_HELCTR or SEFLG_BARYCTR */
      this.swi_aberr_light(xx, xobs, iflag);
    }
    if ((iflag & Swe.SEFLG_SPEED) == 0) {
      for (i = 3; i <= 5; i++) {
        xx[i] = 0;
      }
    }
    /* ICRS to J2000 */
    if ((iflag & Swe.SEFLG_ICRS) == 0 && Swe.SwissData.jpldenum >= 403) {
      this.sl.swi_bias(xx, t, iflag, false);
    }/**/
    /* save J2000 coordinates; required for sidereal positions */
    for (i = 0; i <= 5; i++) {
      xxsv[i] = xx[i];
    }
    /************************************************
     * precession, equator 2000 -> equator of date *
     ************************************************/
    if ((iflag & Swe.SEFLG_J2000)==0) {
      this.sl.swi_precess(xx, pedp.teval, iflag, Swe.SwephData.J2000_TO_J);/**/
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        this.swi_precess_speed(xx, pedp.teval, iflag, Swe.SwephData.J2000_TO_J);/**/
      }
      oe = Swe.SwissData.oec;
    } else
      oe = Swe.SwissData.oec2000;
    return this.app_pos_rest(pedp, iflag, xx, xxsv, oe);
  }

  app_pos_etc_moon(iflag) {
    var i;
    var flg1, flg2;
    var xx=new Array(6), xxsv=new Array(6), xobs=new Array(6),
           xxm=new Array(6), xs=new Array(6), xe=new Array(6),
           xobs2=new Array(6), dt;
    var pedp = Swe.SwissData.pldat[Swe.SwephData.SEI_EARTH];
    var psdp = Swe.SwissData.pldat[Swe.SwephData.SEI_SUNBARY];
    var pdp = Swe.SwissData.pldat[Swe.SwephData.SEI_MOON];
    var oe = Swe.SwissData.oec;
    var t = 0;
    var retc;
    /* if the same conversions have already been done for the same
     * date, then return */
    flg1 = iflag & ~Swe.SEFLG_EQUATORIAL & ~Swe.SEFLG_XYZ;
    flg2 = pdp.xflgs & ~Swe.SEFLG_EQUATORIAL & ~Swe.SEFLG_XYZ;
    if (flg1 == flg2) {
      pdp.xflgs = iflag;
      pdp.iephe = (iflag & Swe.SEFLG_EPHMASK);
      return Swe.OK;
    }
    /* the conversions will be done with xx. */
    for (i = 0; i <= 5; i++) {
      xx[i] = pdp.x[i];
      xxm[i] = xx[i];
    }
    /***********************************
     * to solar system barycentric
     ***********************************/
    for (i = 0; i <= 5; i++) {
      xx[i] += pedp.x[i];
    }
    /*******************************
     * observer
     *******************************/
    if ((iflag & Swe.SEFLG_TOPOCTR)!=0) {
      if (Swe.SwissData.topd.teval != pdp.teval
        || Swe.SwissData.topd.teval == 0) {
        if (this.swi_get_observer(pdp.teval, iflag | Swe.SEFLG_NONUT, Swe.SwephData.DO_SAVE, xobs, null) !=
                                                                 Swe.OK) {
          return Swe.ERR;
        }
      } else {
        for (i = 0; i <= 5; i++) {
          xobs[i] = Swe.SwissData.topd.xobs[i];
        }
      }
      for (i = 0; i <= 5; i++) {
        xxm[i] -= xobs[i];
      }
      for (i = 0; i <= 5; i++) {
        xobs[i] += pedp.x[i];
      }
    } else if ((iflag & Swe.SEFLG_BARYCTR)!=0) {
      for (i = 0; i <= 5; i++) {
        xobs[i] = 0;
      }
      for (i = 0; i <= 5; i++) {
        xxm[i] += pedp.x[i];
      }
    } else if ((iflag & Swe.SEFLG_HELCTR)!=0) {
      for (i = 0; i <= 5; i++) {
        xobs[i] = psdp.x[i];
      }
      for (i = 0; i <= 5; i++) {
        xxm[i] += pedp.x[i] - psdp.x[i];
      }
    } else {
      for (i = 0; i <= 5; i++) {
        xobs[i] = pedp.x[i];
      }
    }
    /*******************************
     * light-time                  *
     *******************************/
    if ((iflag & Swe.SEFLG_TRUEPOS) == 0) {
      dt = Math.sqrt(this.sl.square_sum(xxm)) * Swe.AUNIT /
                                                   Swe.SwephData.CLIGHT / 86400.0;
      t = pdp.teval - dt;
      switch(pdp.iephe) {

        case Swe.SEFLG_MOSEPH:
          /* this method results in an error of a milliarcsec in speed */
          for (i = 0; i <= 2; i++) {
            xx[i] -= dt * xx[i+3];
            xe[i] = pedp.x[i] - dt * pedp.x[i+3];
                    xe[i+3] = pedp.x[i+3];
            xs[i] = 0;
            xs[i+3] = 0;
          }
          break;
      }
      if ((iflag & Swe.SEFLG_TOPOCTR)!=0) {
        if (this.swi_get_observer(t, iflag | Swe.SEFLG_NONUT, Swe.SwephData.NO_SAVE, xobs2, null) !=
                                                                 Swe.OK) {
          return Swe.ERR;
        }
        for (i = 0; i <= 5; i++) {
          xobs2[i] += xe[i];
        }
      } else if ((iflag & Swe.SEFLG_BARYCTR)!=0) {
        for (i = 0; i <= 5; i++) {
          xobs2[i] = 0;
        }
      } else if ((iflag & Swe.SEFLG_HELCTR)!=0) {
        for (i = 0; i <= 5; i++) {
          xobs2[i] = xs[i];
        }
      } else {
        for (i = 0; i <= 5; i++) {
          xobs2[i] = xe[i];
        }
      }
    }
    /*************************
     * to correct center
     *************************/
    for (i = 0; i <= 5; i++) {
      xx[i] -= xobs[i];
    }
    /**********************************
     * 'annual' aberration of light   *
     **********************************/
    if ((iflag & Swe.SEFLG_TRUEPOS)==0 &&
        (iflag & Swe.SEFLG_NOABERR)==0) {
                  /* SEFLG_NOABERR is on, if SEFLG_HELCTR or SEFLG_BARYCTR */
      this.swi_aberr_light(xx, xobs, iflag);

      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        for (i = 3; i <= 5; i++) {
          xx[i] += xobs[i] - xobs2[i];
        }
      }
    }
    /* if !speedflag, speed = 0 */
    if ((iflag & Swe.SEFLG_SPEED)==0) {
      for (i = 3; i <= 5; i++) {
        xx[i] = 0;
      }
    }
    /* ICRS to J2000 */
    if ((iflag & Swe.SEFLG_ICRS) == 0 && Swe.SwissData.jpldenum >= 403) {
      this.sl.swi_bias(xx, t, iflag, false);
    }/**/
    /* save J2000 coordinates; required for sidereal positions */
    for (i = 0; i <= 5; i++) {
      xxsv[i] = xx[i];
    }
    /************************************************
     * precession, equator 2000 -> equator of date *
     ************************************************/
    if ((iflag & Swe.SEFLG_J2000) == 0) {
      this.sl.swi_precess(xx, pdp.teval, iflag, Swe.SwephData.J2000_TO_J);
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        this.swi_precess_speed(xx, pdp.teval, iflag, Swe.SwephData.J2000_TO_J);
      }
      oe = Swe.SwissData.oec;
    } else {
      oe = Swe.SwissData.oec2000;
    }
    return this.app_pos_rest(pdp, iflag, xx, xxsv, oe);
  }

  app_pos_etc_sbar(iflag) {
    var i;
    var xx=new Array(6), xxsv=new Array(6), dt;
    var psdp = Swe.SwissData.pldat[Swe.SwephData.SEI_EARTH];
    var psbdp = Swe.SwissData.pldat[Swe.SwephData.SEI_SUNBARY];
    var oe = Swe.SwissData.oec;
    /* the conversions will be done with xx. */
    for (i = 0; i <= 5; i++) {
      xx[i] = psbdp.x[i];
    }
    /**************
     * light-time *
     **************/
    if ((iflag & Swe.SEFLG_TRUEPOS)==0) {
      dt = Math.sqrt(this.sl.square_sum(xx)) * Swe.AUNIT / Swe.SwephData.CLIGHT / 86400.0;
      for (i = 0; i <= 2; i++) {
        xx[i] -= dt * xx[i+3];    /* apparent position */
      }
    }
    if ((iflag & Swe.SEFLG_SPEED)==0) {
      for (i = 3; i <= 5; i++) {
        xx[i] = 0;
      }
    }
    /* ICRS to J2000 */
    if ((iflag & Swe.SEFLG_ICRS) == 0 && Swe.SwissData.jpldenum >= 403) {
      this.sl.swi_bias(xx, psdp.teval, iflag, false);
    }/**/
    /* save J2000 coordinates; required for sidereal positions */
    for (i = 0; i <= 5; i++) {
      xxsv[i] = xx[i];
    }
    /************************************************
     * precession, equator 2000 -> equator of date *
     ************************************************/
    if ((iflag & Swe.SEFLG_J2000)==0) {
      this.sl.swi_precess(xx, psbdp.teval, iflag, Swe.SwephData.J2000_TO_J);
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        this.swi_precess_speed(xx, psbdp.teval, iflag, Swe.SwephData.J2000_TO_J);
      }
      oe = Swe.SwissData.oec;
    } else {
      oe = Swe.SwissData.oec2000;
    }
    return this.app_pos_rest(psdp, iflag, xx, xxsv, oe);
  }


  app_pos_etc_mean(ipl, iflag) {
    var i;
    var flg1, flg2;
    var xx=new Array(6), xxsv=new Array(6);
    var pdp = Swe.SwissData.nddat[ipl];
    var oe;
    /* if the same conversions have already been done for the same
     * date, then return */
    flg1 = iflag & ~Swe.SEFLG_EQUATORIAL & ~Swe.SEFLG_XYZ;
    flg2 = pdp.xflgs & ~Swe.SEFLG_EQUATORIAL & ~Swe.SEFLG_XYZ;
    if (flg1 == flg2) {
      pdp.xflgs = iflag;
      pdp.iephe = iflag & Swe.SEFLG_EPHMASK;
      return Swe.OK;
    }
    for (i = 0; i <= 5; i++) {
      xx[i] = pdp.x[i];
    }
    /* cartesian equatorial coordinates */
    this.sl.swi_polcart_sp(xx, xx);
    this.sl.swi_coortrf2(xx, xx, -Swe.SwissData.oec.seps, Swe.SwissData.oec.ceps);
    this.sl.swi_coortrf2(xx, 3, xx, 3, -Swe.SwissData.oec.seps, Swe.SwissData.oec.ceps);
    if ((iflag & Swe.SEFLG_SPEED)==0) {
      for (i = 3; i <= 5; i++) {
        xx[i] = 0;
      }
    }

    /* J2000 coordinates; required for sidereal positions */
    if (((iflag & Swe.SEFLG_SIDEREAL)!=0
      && (Swe.SwissData.sidd.sid_mode & Swe.SE_SIDBIT_ECL_T0)!=0)
        || (Swe.SwissData.sidd.sid_mode & Swe.SE_SIDBIT_SSY_PLANE)!=0) {
      for (i = 0; i <= 5; i++) {
        xxsv[i] = xx[i];
      }
      /* xxsv is not J2000 yet! */
      if (pdp.teval != Swe.SwephData.J2000) {
        this.sl.swi_precess(xxsv, pdp.teval, iflag, Swe.SwephData.J_TO_J2000);
        if ((iflag & Swe.SEFLG_SPEED)!=0) {
          this.swi_precess_speed(xxsv, pdp.teval, iflag, Swe.SwephData.J_TO_J2000);
        }
      }
    }

    /*****************************************************
     * if no precession, equator of date -> equator 2000 *
     *****************************************************/
    if ((iflag & Swe.SEFLG_J2000)!=0) {
      this.sl.swi_precess(xx, pdp.teval, iflag, Swe.SwephData.J_TO_J2000);
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        this.swi_precess_speed(xx, pdp.teval, iflag, Swe.SwephData.J_TO_J2000);
      }
      oe = Swe.SwissData.oec2000;
    } else {
      oe = Swe.SwissData.oec;
    }
    return this.app_pos_rest(pdp, iflag, xx, xxsv, oe);
  }

  rot_back(ipli) {
    var i;
    var t, tdiff;
    var qav, pav, dn;
    var omtild, com, som, cosih2;
    var x = new Array(Swe.SwephData.MAXORD+1);
    for(var i=0; i<Swe.SwephData.MAXORD+1; i++){
      x[i] = new Array(3).fill(0.0);
    }
    var uix=new Array(3), uiy=new Array(3), uiz=new Array(3);
    var xrot, yrot, zrot;
    var chcfx;
    var refepx;
    var seps2000 = Swe.SwissData.oec2000.seps;
    var ceps2000 = Swe.SwissData.oec2000.ceps;
    var pdp = Swe.SwissData.pldat[ipli];
    var nco = pdp.ncoe;
    var chcfyOffs;
    var chcfzOffs;
    var refepyOffs;
    t = pdp.tseg0 + pdp.dseg / 2;
    chcfx = pdp.segp;
    chcfyOffs = nco;
    chcfzOffs = 2 * nco;
    tdiff= (t - pdp.telem) / 365250.0;
    if (ipli == Swe.SwephData.SEI_MOON) {
      dn = pdp.prot + tdiff * pdp.dprot;
      i = Math.float(dn / Swe.SwephData.TWOPI);
      dn -= i * Swe.SwephData.TWOPI;
      qav = (pdp.qrot + tdiff * pdp.dqrot) * Math.cos(dn);
      pav = (pdp.qrot + tdiff * pdp.dqrot) * Math.sin(dn);
    } else {
      qav = pdp.qrot + tdiff * pdp.dqrot;
      pav = pdp.prot + tdiff * pdp.dprot;
    }
    /*calculate cosine and sine of average perihelion longitude. */
    for (i = 0; i < nco; i++) {
      x[i][0] = chcfx[i];
      x[i][1] = chcfx[i+chcfyOffs];
      x[i][2] = chcfx[i+chcfzOffs];
    }
    if ((pdp.iflg & Swe.SwephData.SEI_FLG_ELLIPSE)!=0) {
      refepx = pdp.refep;
      refepyOffs = nco;
      omtild = pdp.peri + tdiff * pdp.dperi;
      i = Math.float(omtild / Swe.SwephData.TWOPI);
      omtild -= i * Swe.SwephData.TWOPI;
      com = Math.cos(omtild);
      som = Math.sin(omtild);
      /*add reference orbit.  */
      for (i = 0; i < nco; i++) {
        x[i][0] = chcfx[i] + com * refepx[i] - som * refepx[i+refepyOffs];
        x[i][1] = chcfx[i+chcfyOffs] + com * refepx[i+refepyOffs] + som * refepx[i];
      }
    }
    /* construct right handed orthonormal system with first axis along
       origin of longitudes and third axis along angular momentum
       this uses the standard formulas for equinoctal variables
       (see papers by broucke and by cefola).      */
    cosih2 = 1.0 / (1.0 + qav * qav + pav * pav);
    /*     calculate orbit pole. */
    uiz[0] = 2.0 * pav * cosih2;
    uiz[1] = -2.0 * qav * cosih2;
    uiz[2] = (1.0 - qav * qav - pav * pav) * cosih2;
    /*     calculate origin of longitudes vector. */
    uix[0] = (1.0 + qav * qav - pav * pav) * cosih2;
    uix[1] = 2.0 * qav * pav * cosih2;
    uix[2] = -2.0 * pav * cosih2;
    /*     calculate vector in orbital plane orthogonal to origin of
          longitudes.                                               */
    uiy[0] =2.0 * qav * pav * cosih2;
    uiy[1] =(1.0 - qav * qav + pav * pav) * cosih2;
    uiy[2] =2.0 * qav * cosih2;
    /*     rotate to actual orientation in space.         */
    for (i = 0; i < nco; i++) {
      xrot = x[i][0] * uix[0] + x[i][1] * uiy[0] + x[i][2] * uiz[0];
      yrot = x[i][0] * uix[1] + x[i][1] * uiy[1] + x[i][2] * uiz[1];
      zrot = x[i][0] * uix[2] + x[i][1] * uiy[2] + x[i][2] * uiz[2];
      if (Math.abs(xrot) + Math.abs(yrot) + Math.abs(zrot) >= 1e-14) {
        pdp.neval = i;
      }
      x[i][0] = xrot;
      x[i][1] = yrot;
      x[i][2] = zrot;
      if (ipli == Swe.SwephData.SEI_MOON) {
        /* rotate to j2000 equator */
        x[i][1] = ceps2000 * yrot - seps2000 * zrot;
        x[i][2] = seps2000 * yrot + ceps2000 * zrot;
      }
    }
    for (i = 0; i < nco; i++) {
      chcfx[i] = x[i][0];
      chcfx[i+chcfyOffs] = x[i][1];
      chcfx[i+chcfzOffs] = x[i][2];
    }
  }

  /* Adjust position from Earth-Moon barycenter to Earth
   *
   * xemb = hel./bar. position or velocity vectors of emb (input)
   *                                                  earth (output)
   * xmoon= geocentric position or velocity vector of moon
   */
  embofs(xemb, eOffs, xmoon, mOffs) {
    var i;
    for (i = 0; i <= 2; i++) {
      xemb[i+eOffs] -= xmoon[i+mOffs] / (Swe.SwephData.EARTH_MOON_MRAT + 1.0);
    }
  }

  /* calculates the nutation matrix
   * nu           pointer to nutation data structure
   * oe           pointer to epsilon data structure
   */
  nut_matrix(nu, oe) {
    var psi, eps;
    var sinpsi, cospsi, sineps, coseps, sineps0, coseps0;
    psi = nu.nutlo[0];
    eps = oe.eps + nu.nutlo[1];
    sinpsi = Math.sin(psi);
    cospsi = Math.cos(psi);
    sineps0 = oe.seps;
    coseps0 = oe.ceps;
    sineps = Math.sin(eps);
    coseps = Math.cos(eps);
    nu.matrix[0][0] = cospsi;
    nu.matrix[0][1] = sinpsi * coseps;
    nu.matrix[0][2] = sinpsi * sineps;
    nu.matrix[1][0] = -sinpsi * coseps0;
    nu.matrix[1][1] = cospsi * coseps * coseps0 + sineps * sineps0;
    nu.matrix[1][2] = cospsi * sineps * coseps0 - coseps * sineps0;
    nu.matrix[2][0] = -sinpsi * sineps0;
    nu.matrix[2][1] = cospsi * coseps * sineps0 - sineps * coseps0;
    nu.matrix[2][2] = cospsi * sineps * sineps0 + coseps * coseps0;
  }

  lunar_osc_elem(tjd, ipl, iflag) {
    var i, j, istart;
    var epheflag = Swe.SEFLG_DEFAULTEPH;
    var retc = Swe.ERR;
    var flg1, flg2;
    var ndp, ndnp, ndap;
    var oe;
    var speed_intv = Swe.SwephData.NODE_CALC_INTV;   /* to silence gcc warning */
    var a, b;
    var xpos = new Array(3);
    for(var i=0; i<3; i++){
      xpos[i] = new Array(6).fill(0.0);
    }
    var xx = new Array(3);
    for(var i=0; i<3; i++){
      xx[i] = new Array(6).fill(0.0);
    }
    var xxa = new Array(3);
    for(var i=0; i<3; i++){
      xxa[i] = new Array(6).fill(0.0);
    }
    var xnorm=new Array(6), r=new Array(6);
    var rxy, rxyz, t, dt, fac, sgn;
    var sinnode, cosnode, sinincl, cosincl, sinu, cosu, sinE, cosE;
    var uu, ny, sema, ecce, Gmsm, c2, v2, pp;
    var speedf1, speedf2;
    var sip = Swe.SwissData.sidd;
    var oectmp=null;
    if ((iflag & Swe.SEFLG_SIDEREAL)!=0) {
      this.calc_epsilon(sip.t0, iflag, oectmp);
      oe = oectmp;
    } else if ((iflag & Swe.SEFLG_J2000)!=0) {
      oe = Swe.SwissData.oec2000;
    } else
      oe = Swe.SwissData.oec;

    ndp = Swe.SwissData.nddat[ipl];
    /* if elements have already been computed for this date, return
     * if speed flag has been turned on, recompute */
    flg1 = iflag & ~Swe.SEFLG_EQUATORIAL & ~Swe.SEFLG_XYZ;
    flg2 = ndp.xflgs & ~Swe.SEFLG_EQUATORIAL & ~Swe.SEFLG_XYZ;
    speedf1 = ndp.xflgs & Swe.SEFLG_SPEED;
    speedf2 = iflag & Swe.SEFLG_SPEED;
    if (tjd == ndp.teval
          && tjd != 0
          && flg1 == flg2
          && ((speedf2==0) || (speedf1!=0))) {
      ndp.xflgs = iflag;
      ndp.iephe = iflag & Swe.SEFLG_EPHMASK;
      return Swe.OK;
    }

    /*********************************************
     * now three lunar positions with speeds     *
     *********************************************/
    if ((iflag & Swe.SEFLG_MOSEPH)!=0) {
      epheflag = Swe.SEFLG_MOSEPH;
    }
    /* there may be a moon of wrong ephemeris in save area
     * force new computation: */
    Swe.SwissData.pldat[Swe.SwephData.SEI_MOON].teval = 0;
    if ((iflag & Swe.SEFLG_SPEED)!=0) {
      istart = 0;
    } else {
      istart = 2;
    }

    do {
      switch(epheflag) {

      default:
        break;
    }
  } while (retc == Swe.SwephData.NOT_AVAILABLE || retc == Swe.SwephData.BEYOND_EPH_LIMITS);
//    goto three_positions;
    /*********************************************
     * node with speed                           *
     *********************************************/
    /* node is always needed, even if apogee is wanted */
    ndnp = Swe.SwissData.nddat[Swe.SwephData.SEI_TRUE_NODE];
    /* three nodes */
    for (i = istart; i <= 2; i++) {
      if (Math.abs(xpos[i][5]) < 1e-15) {
        xpos[i][5] = 1e-15;
      }
      fac = xpos[i][2] / xpos[i][5];
      sgn = xpos[i][5] / Math.abs(xpos[i][5]);
      for (j = 0; j <= 2; j++) {
        xx[i][j] = (xpos[i][j] - fac * xpos[i][j+3]) * sgn;
      }
    }
    /* now we have the correct direction of the node, the
     * intersection of the lunar plane and the ecliptic plane.
     * the distance is the distance of the point where the tangent
     * of the lunar motion penetrates the ecliptic plane.
     * this can be very large, e.g. j2415080.37372.
     * below, a new distance will be derived from the osculating
     * ellipse.
     */
    /* save position and speed */
    for (i = 0; i <= 2; i++) {
      ndnp.x[i] = xx[2][i];
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        b = (xx[1][i] - xx[0][i]) / 2;
        a = (xx[1][i] + xx[0][i]) / 2 - xx[2][i];
        ndnp.x[i+3] = (2 * a + b) / speed_intv;
      } else
        ndnp.x[i+3] = 0;
      ndnp.teval = tjd;
      ndnp.iephe = epheflag;
    }
    /************************************************************
     * apogee with speed                                        *
     * must be computed anyway to get the node's distance       *
     ************************************************************/
    ndap = Swe.SwissData.nddat[Swe.SwephData.SEI_OSCU_APOG];
    Gmsm = Swe.SwephData.GEOGCONST * (1 + 1 / Swe.SwephData.EARTH_MOON_MRAT) /
                           Swe.AUNIT/Swe.AUNIT/Swe.AUNIT*86400.0*86400.0;
    /* three apogees */
    for (i = istart; i <= 2; i++) {
      /* node */
      rxy =  Math.sqrt(xx[i][0] * xx[i][0] + xx[i][1] * xx[i][1]);
      cosnode = xx[i][0] / rxy;
      sinnode = xx[i][1] / rxy;
      /* inclination */
      this.sl.swi_cross_prod(xpos[i], 0, xpos[i], 3, xnorm, 0);
      rxy =  xnorm[0] * xnorm[0] + xnorm[1] * xnorm[1];
      c2 = (rxy + xnorm[2] * xnorm[2]);
      rxyz = Math.sqrt(c2);
      rxy = Math.sqrt(rxy);
      sinincl = rxy / rxyz;
      cosincl = Math.sqrt(1 - sinincl * sinincl);
      /* argument of latitude */
      cosu = xpos[i][0] * cosnode + xpos[i][1] * sinnode;
      sinu = xpos[i][2] / sinincl;
      uu = Math.atan2(sinu, cosu);
      /* semi-axis */
      rxyz = Math.sqrt(this.sl.square_sum(xpos[i]));
      v2 = this.sl.square_sum(xpos[i], 3);
      sema = 1 / (2 / rxyz - v2 / Gmsm);
      /* eccentricity */
      pp = c2 / Gmsm;
      ecce = Math.sqrt(1 - pp / sema);
      /* eccentric anomaly */
      cosE = 1 / ecce * (1 - rxyz / sema);
      sinE = 1 / ecce / Math.sqrt(sema * Gmsm) * this.dot_prod(xpos[i], xpos[i], 3);
      /* true anomaly */
      ny = 2 * Math.atan(Math.sqrt((1+ecce)/(1-ecce)) * sinE / (1 + cosE));
      /* distance of apogee from ascending node */
      xxa[i][0] = this.sl.swi_mod2PI(uu - ny + Math.PI);
      xxa[i][1] = 0;                      /* latitude */
      xxa[i][2] = sema * (1 + ecce);      /* distance */
      /* transformation to ecliptic coordinates */
      this.sl.swi_polcart(xxa[i], xxa[i]);
      this.sl.swi_coortrf2(xxa[i], xxa[i], -sinincl, cosincl);
      this.sl.swi_cartpol(xxa[i], xxa[i]);
      /* adding node, we get apogee in ecl. coord. */
      xxa[i][0] += Math.atan2(sinnode, cosnode);
      this.sl.swi_polcart(xxa[i], xxa[i]);
      /* new distance of node from orbital ellipse:
       * true anomaly of node: */
      ny = this.sl.swi_mod2PI(ny - uu);
      /* eccentric anomaly */
      cosE = Math.cos(2 * Math.atan(Math.tan(ny / 2) / Math.sqrt((1+ecce) / (1-ecce))));
      /* new distance */
      r[0] = sema * (1 - ecce * cosE);
      /* old node distance */
      r[1] = Math.sqrt(this.sl.square_sum(xx[i]));
      /* correct length of position vector */
      for (j = 0; j <= 2; j++) {
        xx[i][j] *= r[0] / r[1];
      }
    }
    /* save position and speed */
    for (i = 0; i <= 2; i++) {
      /* apogee */
      ndap.x[i] = xxa[2][i];
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        ndap.x[i+3] = (xxa[1][i] - xxa[0][i]) / speed_intv / 2;
      } else {
        ndap.x[i+3] = 0;
      }
      ndap.teval = tjd;
      ndap.iephe = epheflag;
      /* node */
      ndnp.x[i] = xx[2][i];
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        ndnp.x[i+3] = (xx[1][i] - xx[0][i]) / speed_intv / 2;/**/
      } else {
        ndnp.x[i+3] = 0;
      }
    }
    /**********************************************************************
     * precession and nutation have already been taken into account
     * because the computation is on the basis of lunar positions
     * that have gone through this.swi_plan_for_osc_elem.
     * light-time is already contained in lunar positions.
     * now compute polar and equatorial coordinates:
     **********************************************************************/
      var  x=new Array(6);
    for (var j = 0; j <= 1; j++) {
      if (j == 0) {
        ndp = Swe.SwissData.nddat[Swe.SwephData.SEI_TRUE_NODE];
      } else {
        ndp = Swe.SwissData.nddat[Swe.SwephData.SEI_OSCU_APOG];
      }
//  memset((void *) ndp.xreturn, 0, 24 * sizeof(double));
      for(var z=0; z<ndp.xreturn.length; z++) { ndp.xreturn[z]=0.0; }
      /* cartesian ecliptic */
      for(var i = 0; i <= 5; i++) {
        ndp.xreturn[6+i] = ndp.x[i];
      }
      /* polar ecliptic */
      this.sl.swi_cartpol_sp(ndp.xreturn, 6, ndp.xreturn, 0);
      /* cartesian equatorial */
      this.sl.swi_coortrf2(ndp.xreturn, 6, ndp.xreturn, 18, -oe.seps, oe.ceps);
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        this.sl.swi_coortrf2(ndp.xreturn, 9, ndp.xreturn, 21, -oe.seps, oe.ceps);
      }

      /* sideral: we return NORMAL equatorial coordinates, there are no
       * sidereal ones */
      if ((iflag & Swe.SEFLG_SIDEREAL)!=0) {
        /* to J2000 */
        this.sl.swi_precess(ndp.xreturn, 18, sip.t0, iflag, Swe.SwephData.J_TO_J2000);
        if ((iflag & Swe.SEFLG_SPEED)!=0) {
          this.swi_precess_speed(ndp.xreturn, 21, sip.t0, iflag, Swe.SwephData.J_TO_J2000);
        }
        if ((iflag & Swe.SEFLG_J2000)==0) {
          /* to tjd */
          this.sl.swi_precess(ndp.xreturn, 18, tjd, iflag, Swe.SwephData.J2000_TO_J);
          if ((iflag & Swe.SEFLG_SPEED)!=0) {
            this.swi_precess_speed(ndp.xreturn, 21, tjd, iflag, Swe.SwephData.J2000_TO_J);
          }
        }
      }

      if ((iflag & Swe.SEFLG_NONUT) == 0) {
        this.sl.swi_coortrf2(ndp.xreturn, 18, ndp.xreturn, 18, -Swe.SwissData.nut.snut,
                        Swe.SwissData.nut.cnut);
        if ((iflag & Swe.SEFLG_SPEED)!=0) {
          this.sl.swi_coortrf2(ndp.xreturn, 21, ndp.xreturn, 21, -Swe.SwissData.nut.snut,
                          Swe.SwissData.nut.cnut);
        }
      }
      /* polar equatorial */
      this.sl.swi_cartpol_sp(ndp.xreturn, 18, ndp.xreturn, 12);
      ndp.xflgs = iflag;
      ndp.iephe = iflag & Swe.SEFLG_EPHMASK;
      /* node and apogee are already referred to t0;
       * nothing has to be done */
      /**********************
       * radians to degrees *
       **********************/
      /*if (!(iflag & SEFLG_RADIANS)) {*/
        for (i = 0; i < 2; i++) {
          ndp.xreturn[i] *= Swe.SwissData.RADTODEG;              /* ecliptic */
          ndp.xreturn[i+3] *= Swe.SwissData.RADTODEG;
          ndp.xreturn[i+12] *= Swe.SwissData.RADTODEG;   /* equator */
          ndp.xreturn[i+15] *= Swe.SwissData.RADTODEG;
        }
        ndp.xreturn[0] = this.sl.swe_degnorm(ndp.xreturn[0]);
        ndp.xreturn[12] = this.sl.swe_degnorm(ndp.xreturn[12]);
      /*}*/
    }
    return Swe.OK;
  }

  /* lunar osculating elements, i.e.
   */ 
  intp_apsides(tjd, ipl, iflag) {
    var i;
    var flg1, flg2;
    var ndp;
    var oe;
    var nut;
    var speed_intv = 0.1;
    var t, dt;
    var xpos = new Array(3);
    for(var i=0; i<3; i++){
      xpos[i] = new Array(6).fill(0.0);
    }
    var xx = new Array(6), x = new Array(6);
    var speedf1, speedf2;
// TM - temporary inclusion for version 2.00.00 to give an end date to -pg / -pc //
    if (tjd < Swe.SwephData.MOSHLUEPH_START || tjd > Swe.SwephData.MOSHLUEPH_END) {
      var s = "jd "+tjd+" outside Moshier's Moon range "+
          Swe.SwephData.MOSHLUEPH_START+" .. "+
          Swe.SwephData.MOSHLUEPH_END+" ";
      console.error(s);
      return Swe.ERR;
    }
// TM - end of inclusion //////////////////////////////////////////////////////////

    oe = Swe.SwissData.oec;
    nut = Swe.SwissData.nut;
    ndp = Swe.SwissData.nddat[ipl];
    /* if same calculation was done before, return
     * if speed flag has been turned on, recompute */
    flg1 = iflag & ~Swe.SEFLG_EQUATORIAL & ~Swe.SEFLG_XYZ;
    flg2 = ndp.xflgs & ~Swe.SEFLG_EQUATORIAL & ~Swe.SEFLG_XYZ;
    speedf1 = ndp.xflgs & Swe.SEFLG_SPEED;
    speedf2 = iflag & Swe.SEFLG_SPEED;
    if (tjd == ndp.teval 
    && tjd != 0 
    && flg1 == flg2
    && ((speedf2==0) || (speedf1!=0))) {
      ndp.xflgs = iflag;
      ndp.iephe = iflag & Swe.SEFLG_MOSEPH;
      return Swe.OK;
    }
    /*********************************************
     * now three apsides * 
     *********************************************/
    for (t = tjd - speed_intv, i = 0; i < 3; t += speed_intv, i++) {
      if ( ((iflag & Swe.SEFLG_SPEED)==0) && i != 1) continue;
      sm.swi_intp_apsides(t, xpos[i], ipl);
    }
    /************************************************************
     * apsis with speed                                         * 
     ************************************************************/
    for (i = 0; i < 3; i++) {
      xx[i] = xpos[1][i];
      xx[i+3] = 0;
    }
    if ((iflag & Swe.SEFLG_SPEED) != 0) {
      xx[3] = this.sl.swe_difrad2n(xpos[2][0], xpos[0][0]) / speed_intv / 2.0;
      xx[4] = (xpos[2][1] - xpos[0][1]) / speed_intv / 2.0;
      xx[5] = (xpos[2][2] - xpos[0][2]) / speed_intv / 2.0;
    }
    // memset((void *) ndp.xreturn, 0, 24 * sizeof(double));
    for(var p=0;p<24;p++) { ndp.xreturn[p]=0.; }
    /* ecliptic polar to cartesian */
    this.sl.swi_polcart_sp(xx, xx);
    /* light-time */
    if ((iflag & Swe.SEFLG_TRUEPOS) == 0) {
      dt = Math.sqrt(this.sl.square_sum(xx)) * Swe.AUNIT / Swe.SwephData.CLIGHT / 86400.0;     
      for (i = 1; i < 3; i++)
        xx[i] -= dt * xx[i+3];
    }
    for (i = 0; i <= 5; i++) {
      ndp.xreturn[i+6] = xx[i];
    }
    /*printf("%.10f, %.10f, %.10f, %.10f\n", xx[0] /DEGTORAD, xx[1] / DEGTORAD, xx [2], xx[3] /DEGTORAD);*/
    /* equatorial cartesian */
    this.sl.swi_coortrf2(ndp.xreturn, 6, ndp.xreturn, 18, -oe.seps, oe.ceps);
    if ((iflag & Swe.SEFLG_SPEED) != 0)
      this.sl.swi_coortrf2(ndp.xreturn, 9, ndp.xreturn, 21, -oe.seps, oe.ceps);
    ndp.teval = tjd;
    ndp.xflgs = iflag;
    ndp.iephe = iflag & Swe.SEFLG_EPHMASK;
    if ((iflag & Swe.SEFLG_SIDEREAL) != 0) {
      /* apogee is referred to t; 
       * the ecliptic position must be transformed to t0 */
      /* rigorous algorithm */

      if ((Swe.SwissData.sidd.sid_mode & Swe.SE_SIDBIT_ECL_T0) != 0
    || (Swe.SwissData.sidd.sid_mode & Swe.SE_SIDBIT_SSY_PLANE) != 0) {
        for (i = 0; i <= 5; i++)
      x[i] = ndp.xreturn[18+i];
        /* precess to J2000 */
        this.sl.swi_precess(x, tjd, iflag, Swe.SwephData.J_TO_J2000);
        if ((iflag & Swe.SEFLG_SPEED) != 0)
    this.swi_precess_speed(x, tjd, iflag, Swe.SwephData.J_TO_J2000);
        if ((Swe.SwissData.sidd.sid_mode & Swe.SE_SIDBIT_ECL_T0) != 0) 
      this.swi_trop_ra2sid_lon(x, ndp.xreturn, 6, ndp.xreturn, 18, iflag, null);
          /* project onto solar system equator */
        else if ((Swe.SwissData.sidd.sid_mode & Swe.SE_SIDBIT_SSY_PLANE) != 0)
      this.swi_trop_ra2sid_lon_sosy(x, ndp.xreturn, 6, ndp.xreturn, 18, iflag, null);
        /* to polar */
        this.sl.swi_cartpol_sp(ndp.xreturn, 6, ndp.xreturn, 0);
        this.sl.swi_cartpol_sp(ndp.xreturn, 18, ndp.xreturn, 12);
      } else {

      /* traditional algorithm */
        this.sl.swi_cartpol_sp(ndp.xreturn, 6, ndp.xreturn, 0); 
        ndp.xreturn[0] -= this.swe_get_ayanamsa(ndp.teval) * Swe.SwissData.DEGTORAD;
        this.sl.swi_polcart_sp(ndp.xreturn, 0, ndp.xreturn, 6); 
        this.sl.swi_cartpol_sp(ndp.xreturn, 18, ndp.xreturn, 12);

      }

    } else if ((iflag & Swe.SEFLG_J2000) != 0) {
      /* node and apogee are referred to t; 
       * the ecliptic position must be transformed to J2000 */
      for (i = 0; i <= 5; i++)
        x[i] = ndp.xreturn[18+i];
      /* precess to J2000 */
      this.sl.swi_precess(x, tjd, iflag, Swe.SwephData.J_TO_J2000);
      if ((iflag & Swe.SEFLG_SPEED) != 0)
        this.swi_precess_speed(x, tjd, iflag, Swe.SwephData.J_TO_J2000);
      for (i = 0; i <= 5; i++)
        ndp.xreturn[18+i] = x[i];
      this.sl.swi_cartpol_sp(ndp.xreturn, 18, ndp.xreturn, 12);
      this.sl.swi_coortrf2(ndp.xreturn, 18, ndp.xreturn, 6, Swe.SwissData.oec2000.seps, Swe.SwissData.oec2000.ceps);
      if ((iflag & Swe.SEFLG_SPEED) != 0)
        this.sl.swi_coortrf2(ndp.xreturn, 21, ndp.xreturn, 9, Swe.SwissData.oec2000.seps, Swe.SwissData.oec2000.ceps);
      this.sl.swi_cartpol_sp(ndp.xreturn, 6, ndp.xreturn, 0);
    } else {
      /* tropical ecliptic positions */
      /* precession has already been taken into account, but not nutation */
      if ((iflag & Swe.SEFLG_NONUT) == 0) {
        this.swi_nutate(ndp.xreturn, 18, iflag, false);
      }
      /* equatorial polar */
      this.sl.swi_cartpol_sp(ndp.xreturn, 18, ndp.xreturn, 12);
      /* ecliptic cartesian */
      this.sl.swi_coortrf2(ndp.xreturn, 18, ndp.xreturn, 6, oe.seps, oe.ceps);
      if ((iflag & Swe.SEFLG_SPEED) != 0)
        this.sl.swi_coortrf2(ndp.xreturn, 21, ndp.xreturn, 9, oe.seps, oe.ceps);
      if ((iflag & Swe.SEFLG_NONUT) == 0) {
        this.sl.swi_coortrf2(ndp.xreturn, 6, ndp.xreturn, 6, nut.snut, nut.cnut);
        if ((iflag & Swe.SEFLG_SPEED) != 0)
    this.sl.swi_coortrf2(ndp.xreturn, 9, ndp.xreturn, 9, nut.snut, nut.cnut);
      }
      /* ecliptic polar */
      this.sl.swi_cartpol_sp(ndp.xreturn, 6, ndp.xreturn, 0);
    }
    /********************** 
     * radians to degrees *
     **********************/
    /*if ((iflag & Swe.SEFLG_RADIANS)==0) {*/
    for (i = 0; i < 2; i++) {
      ndp.xreturn[i] *= Swe.SwissData.RADTODEG;   /* ecliptic */
      ndp.xreturn[i+3] *= Swe.SwissData.RADTODEG;
      ndp.xreturn[i+12] *= Swe.SwissData.RADTODEG;  /* equator */
      ndp.xreturn[i+15] *= Swe.SwissData.RADTODEG;
    }
    ndp.xreturn[0] = this.sl.swe_degnorm(ndp.xreturn[0]);
    ndp.xreturn[12] = this.sl.swe_degnorm(ndp.xreturn[12]);
    /*}*/
    return Swe.OK;
  }

  swi_plan_for_osc_elem(iflag, tjd, xx) {
    var i;
    var x=new Array(6);
    var nuttmp=new Nut();
    var nutp = nuttmp;   /* dummy assign, to silence gcc warning */
    var oe = Swe.SwissData.oec;
    var oectmp=new Epsilon();
    /* ICRS to J2000 */
    if ((iflag & Swe.SEFLG_ICRS)==0 && Swe.SwissData.jpldenum >= 403) {
      this.sl.swi_bias(xx, tjd, iflag, false);
    }/**/
    /************************************************
     * precession, equator 2000 -> equator of date  *
     * attention: speed vector has to be rotated,   *
     * but daily precession 0.137" may not be added!*/

    var sip = Swe.SwissData.sidd;
    /* For sidereal calculation we need node refered*
     * to ecliptic of t0 of ayanamsa                *
     ************************************************/
    if ((iflag & Swe.SEFLG_SIDEREAL) != 0) {
      tjd = sip.t0;
      this.sl.swi_precess(xx, tjd, iflag, Swe.SwephData.J2000_TO_J);
      this.sl.swi_precess(xx, 3, tjd, iflag, Swe.SwephData.J2000_TO_J);
      this.calc_epsilon(tjd, iflag, oectmp);
      oe = oectmp;
    } else if ((iflag & Swe.SEFLG_J2000)==0) {

      this.sl.swi_precess(xx, tjd, iflag, Swe.SwephData.J2000_TO_J);
      this.sl.swi_precess(xx, 3, tjd, iflag, Swe.SwephData.J2000_TO_J);
      /* epsilon */
      if (tjd == Swe.SwissData.oec.teps) {
        oe = Swe.SwissData.oec;
      } else if (tjd == Swe.SwephData.J2000) {
        oe = Swe.SwissData.oec2000;
      } else {
        this.calc_epsilon(tjd, iflag, oectmp);
        oe = oectmp;
      }

    } else {      /* if SEFLG_J2000 */
      oe = Swe.SwissData.oec2000;
    }
    /************************************************
     * nutation                                     *
     * again: speed vector must be rotated, but not *
     * added 'speed' of nutation                    *
     ************************************************/
    if ((iflag & Swe.SEFLG_NONUT) == 0) {
      if (tjd == Swe.SwissData.nut.tnut) {
        nutp = Swe.SwissData.nut;
      } else if (tjd == Swe.SwephData.J2000) {
        nutp = Swe.SwissData.nut2000;
      } else if (tjd == Swe.SwissData.nutv.tnut) {
        nutp = Swe.SwissData.nutv;
      } else {
        nutp = nuttmp;
        this.sl.swi_nutation(tjd, iflag, nutp.nutlo);
        nutp.tnut = tjd;
        nutp.snut = Math.sin(nutp.nutlo[1]);
        nutp.cnut = Math.cos(nutp.nutlo[1]);
        this.nut_matrix(nutp, oe);
      }
      for (i = 0; i <= 2; i++) {
        x[i] = xx[0] * nutp.matrix[0][i] +
               xx[1] * nutp.matrix[1][i] +
               xx[2] * nutp.matrix[2][i];
      }
      /* speed:
       * rotation only */
      for (i = 0; i <= 2; i++) {
        x[i+3] = xx[3] * nutp.matrix[0][i] +
                 xx[4] * nutp.matrix[1][i] +
                 xx[5] * nutp.matrix[2][i];
      }
      for (i = 0; i <= 5; i++) {
        xx[i] = x[i];
      }
    }
    /************************************************
     * transformation to ecliptic                   *
     ************************************************/
    this.sl.swi_coortrf2(xx, xx, oe.seps, oe.ceps);
    this.sl.swi_coortrf2(xx, 3, xx, 3, oe.seps, oe.ceps);

    if ((iflag & Swe.SEFLG_SIDEREAL)!=0) {
      /* subtract ayan_t0 */
      this.sl.swi_cartpol_sp(xx, xx);
      xx[0] -= sip.ayan_t0;
      this.sl.swi_polcart_sp(xx, xx);
    } else

    if ((iflag & Swe.SEFLG_NONUT) == 0) {
      this.sl.swi_coortrf2(xx, xx, nutp.snut, nutp.cnut);
      this.sl.swi_coortrf2(xx, 3, xx, 3, nutp.snut, nutp.cnut);
    }
    return Swe.OK;
  }

  meff(r) {
    var f, m;
    var i;
    if (r <= 0) {
      return 0.0;
    } else if (r >= 1) {
      return 1.0;
    }
    for (i = 0; eff_arr[i].r > r; i++) {
      ; /* empty body */
    }
    f = (r - eff_arr[i-1].r) / (eff_arr[i].r - eff_arr[i-1].r);
    m = eff_arr[i-1].m + f * (eff_arr[i].m - eff_arr[i-1].m);
    return m;
  }


// Only used with SEFLG_SPEED3
  denormalize_positions(x0, x1, x2) {
    var i;
    /* x*[0] = ecliptic longitude, x*[12] = rectascension */
    for (i = 0; i <= 12; i += 12) {
      if (x1[i] - x0[i] < -180) {
        x0[i] -= 360;
      }
      if (x1[i] - x0[i] > 180) {
        x0[i] += 360;
      }
      if (x1[i] - x2[i] < -180) {
        x2[i] -= 360;
      }
      if (x1[i] - x2[i] > 180) {
        x2[i] += 360;
      }
    }
  }

// Only used with SEFLG_SPEED3
  calc_speed(x0, x1, x2, dt) {
    var i, j, k;
    var a, b;
    for (j = 0; j <= 18; j += 6) {
      for (i = 0; i < 3; i++) {
        k = j + i;
        b = (x2[k] - x0[k]) / 2;
        a = (x2[k] + x0[k]) / 2 - x1[k];
        x1[k+3] = (2 * a + b) / dt;
      }
    }
  }


  swi_check_ecliptic(tjd, iflag) {
    if (Swe.SwissData.oec2000.teps != Swe.SwephData.J2000) {
      this.calc_epsilon(Swe.SwephData.J2000, iflag, Swe.SwissData.oec2000);
    }
    if (tjd == Swe.SwephData.J2000) {
      Swe.SwissData.oec.teps = Swe.SwissData.oec2000.teps;
      Swe.SwissData.oec.eps = Swe.SwissData.oec2000.eps;
      Swe.SwissData.oec.seps = Swe.SwissData.oec2000.seps;
      Swe.SwissData.oec.ceps = Swe.SwissData.oec2000.ceps;
      return;
    }
    if (Swe.SwissData.oec.teps != tjd || tjd == 0) {
      this.calc_epsilon(tjd, iflag, Swe.SwissData.oec);
    }
  }

  /* computes nutation, if it is wanted and has not yet been computed.
   * if speed flag has been turned on since last computation,
   * nutation is recomputed */
  swi_check_nutation(tjd, iflag) {
    var speedf1, speedf2;
    var t;
    speedf1 = this.chck_nut_nutflag & Swe.SEFLG_SPEED;
    speedf2 = iflag & Swe.SEFLG_SPEED;
    if ((iflag & Swe.SEFLG_NONUT) == 0
          && (tjd != Swe.SwissData.nut.tnut || tjd == 0
          || ((speedf1==0) && (speedf2!=0)))) {
      this.sl.swi_nutation(tjd, iflag, Swe.SwissData.nut.nutlo);
      Swe.SwissData.nut.tnut = tjd;
      Swe.SwissData.nut.snut = Math.sin(Swe.SwissData.nut.nutlo[1]);
      Swe.SwissData.nut.cnut = Math.cos(Swe.SwissData.nut.nutlo[1]);
      this.chck_nut_nutflag = iflag;
      this.nut_matrix(Swe.SwissData.nut, Swe.SwissData.oec);
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        /* once more for 'speed' of nutation, which is needed for
         * planetary speeds */
        t = tjd - Swe.SwephData.NUT_SPEED_INTV;
        this.sl.swi_nutation(t, iflag, Swe.SwissData.nutv.nutlo);
        Swe.SwissData.nutv.tnut = t;
        Swe.SwissData.nutv.snut = Math.sin(Swe.SwissData.nutv.nutlo[1]);
        Swe.SwissData.nutv.cnut = Math.cos(Swe.SwissData.nutv.nutlo[1]);
        this.nut_matrix(Swe.SwissData.nutv, Swe.SwissData.oec);
      }
    }
  }

  plaus_iflag(iflag, ipl, tjd) {
    var epheflag = 0;
    var jplhor_model = Swe.SwissData.astro_models[Swe.SE_MODEL_JPLHOR_MODE];
    var jplhora_model = Swe.SwissData.astro_models[Swe.SE_MODEL_JPLHORA_MODE];
    if (jplhor_model == 0) jplhor_model = Swe.SEMOD_JPLHOR_DEFAULT;
    if (jplhora_model == 0) jplhora_model = Swe.SEMOD_JPLHORA_DEFAULT;

    /* either Horizons mode or simplified Horizons mode, not both */
    if ((iflag & Swe.SEFLG_JPLHOR) != 0)
      iflag &= ~Swe.SEFLG_JPLHOR_APPROX;
    /* if topocentric bit, turn helio- and barycentric bits off;
     * also turn JPL Horizons mode off */
    if ((iflag & Swe.SEFLG_TOPOCTR)!=0) {
      iflag = iflag & ~(Swe.SEFLG_HELCTR | Swe.SEFLG_BARYCTR);
      iflag = iflag & ~(Swe.SEFLG_JPLHOR | Swe.SEFLG_JPLHOR_APPROX);
    }
    /* if heliocentric bit, turn aberration and deflection off */
    if ((iflag & Swe.SEFLG_HELCTR)!=0) {
      iflag |= Swe.SEFLG_NOABERR | Swe.SEFLG_NOGDEFL;
                                              /*iflag |= SEFLG_TRUEPOS;*/
    }
    /* same, if barycentric bit */
    if ((iflag & Swe.SEFLG_BARYCTR)!=0) {
      iflag |= Swe.SEFLG_NOABERR | Swe.SEFLG_NOGDEFL;
                                              /*iflag |= SEFLG_TRUEPOS;*/
    }
    /* if no_precession bit is set, set also no_nutation bit */
    if ((iflag & Swe.SEFLG_J2000)!=0) {
      iflag |= Swe.SEFLG_NONUT;
    }
    /* if truepos is set, turn off grav. defl. and aberration */
    if ((iflag & Swe.SEFLG_TRUEPOS)!=0) {
      iflag |= (Swe.SEFLG_NOGDEFL | Swe.SEFLG_NOABERR);
    }

    /* if sidereal bit is set, set also no_nutation bit *
     * also turn JPL Horizons mode off */
    if ((iflag & Swe.SEFLG_SIDEREAL)!=0) {
      iflag |= Swe.SEFLG_NONUT;
      iflag = iflag & ~(Swe.SEFLG_JPLHOR | Swe.SEFLG_JPLHOR_APPROX);
    }

    if (epheflag == 0) {
      epheflag = Swe.SEFLG_DEFAULTEPH;
    }
    iflag = (iflag & ~Swe.SEFLG_EPHMASK) | epheflag;

    if (ipl == Swe.SE_OSCU_APOG || ipl == Swe.SE_TRUE_NODE 
        || ipl == Swe.SE_MEAN_APOG || ipl == Swe.SE_MEAN_NODE
        || ipl == Swe.SE_INTP_APOG || ipl == Swe.SE_INTP_PERG) 
      iflag = iflag & ~(Swe.SEFLG_JPLHOR | Swe.SEFLG_JPLHOR_APPROX);
    if (ipl >= Swe.SE_FICT_OFFSET && ipl <= Swe.SE_FICT_MAX)
      iflag = iflag & ~(Swe.SEFLG_JPLHOR | Swe.SEFLG_JPLHOR_APPROX);
    if ((iflag & Swe.SEFLG_JPLHOR) != 0) {
      if (Swe.SwissData.eop_dpsi_loaded <= 0 
         || ((tjd < Swe.SwissData.eop_tjd_beg || tjd > Swe.SwissData.eop_tjd_end)
         && jplhor_model != Swe.SEMOD_JPLHOR_EXTENDED_1800)) {

        switch (Swe.SwissData.eop_dpsi_loaded) {
          case 0:
            console.error("you did not call swe_set_jpl_file(); default to SEFLG_JPLHOR_APPROX");
            break;
          case -1:
            console.error("file eop_1962_today.txt not found; default to SEFLG_JPLHOR_APPROX");
            break;
          case -2:
            console.error("file eop_1962_today.txt corrupt; default to SEFLG_JPLHOR_APPROX");
            break;
          case -3:
            console.error("file eop_finals.txt corrupt; default to SEFLG_JPLHOR_APPROX");
            break;
        }
        iflag &= ~Swe.SEFLG_JPLHOR;
        iflag |= Swe.SEFLG_JPLHOR_APPROX;
      }
    }
    if ((iflag & Swe.SEFLG_JPLHOR) != 0)
      iflag |= Swe.SEFLG_ICRS;
    if ((iflag & Swe.SEFLG_JPLHOR_APPROX) != 0 && jplhora_model != Swe.SEMOD_JPLHORA_1)
      iflag |= Swe.SEFLG_ICRS;
    return iflag;
  }

  swi_force_app_pos_etc() {
    var i;
    for (i = 0; i < Swe.SwephData.SEI_NPLANETS; i++) {
      Swe.SwissData.pldat[i].xflgs = -1;
    }
    for (i = 0; i < Swe.SwephData.SEI_NNODE_ETC; i++) {
      Swe.SwissData.nddat[i].xflgs = -1;
    }
    for (i = 0; i < Swe.SE_NPLANETS; i++) {
      Swe.SwissData.savedat[i].tsave = 0;
      Swe.SwissData.savedat[i].iflgsave = -1;
    }
  }

  swi_get_observer(tjd, iflag,do_save, xobs) {
    var i;
    var sidt, delt, tjd_ut, eps, nut, nutlo=new Array(2);
    var f = Swe.SwephData.EARTH_OBLATENESS;
    var re = Swe.SwephData.EARTH_RADIUS;
    var cosfi, sinfi, cc, ss, cosl, sinl, h;
    if (!Swe.SwissData.geopos_is_set) {
      console.error("geographic position has not been set");
      return Swe.ERR;
    }
    /* geocentric position of observer depends on sidereal time,
     * which depends on UT.
     * compute UT from ET. this UT will be slightly different
     * from the user's UT, but this difference is extremely small.
     */
    delt = SweDate.getDeltaT(tjd);
    tjd_ut = tjd - delt;
    if (Swe.SwissData.oec.teps == tjd && Swe.SwissData.nut.tnut == tjd) {
      eps = Swe.SwissData.oec.eps;
      nutlo[1] = Swe.SwissData.nut.nutlo[1];
      nutlo[0] = Swe.SwissData.nut.nutlo[0];
    } else {
      eps = this.sl.swi_epsiln(tjd, iflag);
      if ((iflag & Swe.SEFLG_NONUT)==0) {
        this.sl.swi_nutation(tjd, iflag, nutlo);
      }
    }
    if ((iflag & Swe.SEFLG_NONUT)!=0) {
      nut = 0;
    } else {
      eps += nutlo[1];
      nut = nutlo[0];
    }
    /* mean or apparent sidereal time, depending on whether or
     * not SEFLG_NONUT is set */
    sidt = this.sl.swe_sidtime0(tjd_ut, eps, nut);
    sidt *= 15;   /* in degrees */
    /* length of position and speed vectors;
     * the height above sea level must be taken into account.
     * with the moon, an altitude of 3000 m makes a difference
     * of about 2 arc seconds.
     * height is referred to the average sea level. however,
     * the spheroid (geoid), which is defined by the average
     * sea level (or rather by all points of same gravitational
     * potential), is of irregular shape and cannot easily
     * be taken into account. therefore, we refer height to
     * the surface of the ellipsoid. the resulting error
     * is below 500 m, i.e. 0.2 - 0.3 arc seconds with the moon.
     */
    cosfi = Math.cos(Swe.SwissData.topd.geolat * Swe.SwissData.DEGTORAD);
    sinfi = Math.sin(Swe.SwissData.topd.geolat * Swe.SwissData.DEGTORAD);
    cc= 1 / Math.sqrt(cosfi * cosfi + (1-f) * (1-f) * sinfi * sinfi);
    ss= (1-f) * (1-f) * cc;
    /* neglect polar motion (displacement of a few meters), as long as 
     * we use the earth ellipsoid */
    /* ... */
    /* add sidereal time */
    cosl = Math.cos((Swe.SwissData.topd.geolon + sidt) * Swe.SwissData.DEGTORAD);
    sinl = Math.sin((Swe.SwissData.topd.geolon + sidt) * Swe.SwissData.DEGTORAD);
    h = Swe.SwissData.topd.geoalt;
    xobs[0] = (re * cc + h) * cosfi * cosl;
    xobs[1] = (re * cc + h) * cosfi * sinl;
    xobs[2] = (re * ss + h) * sinfi;
    /* polar coordinates */
    this.sl.swi_cartpol(xobs, xobs);
    /* speed */
    xobs[3] = Swe.SwephData.EARTH_ROT_SPEED;
    xobs[4] = xobs[5] = 0;
    this.sl.swi_polcart_sp(xobs, xobs);
    /* to AUNIT */
    for (i = 0; i <= 5; i++) {
      xobs[i] /= Swe.AUNIT;
    }
    /* subtract nutation, set backward flag */
    if ((iflag & Swe.SEFLG_NONUT)==0) {
      this.sl.swi_coortrf2(xobs, xobs, -Swe.SwissData.nut.snut, Swe.SwissData.nut.cnut);
      if ((iflag & Swe.SEFLG_SPEED)!=0) {
        this.sl.swi_coortrf2(xobs, 3, xobs, 3, -Swe.SwissData.nut.snut, Swe.SwissData.nut.cnut);
      }
      this.swi_nutate(xobs, 0, iflag, true);
    }
    /* precess to J2000 */
    this.sl.swi_precess(xobs, tjd, iflag, Swe.SwephData.J_TO_J2000);
    if ((iflag & Swe.SEFLG_SPEED)!=0) {
      this.swi_precess_speed(xobs, tjd, iflag, Swe.SwephData.J_TO_J2000);
    }
    /* neglect frame bias (displacement of 45cm) */
    /* ... */
    /* save */
    if (do_save) {
      for (i = 0; i <= 5; i++) {
        Swe.SwissData.topd.xobs[i] = xobs[i];
      }
      Swe.SwissData.topd.teval = tjd;
      Swe.SwissData.topd.tjd_ut = tjd_ut;  /* -> save area */
    }
    return Swe.OK;
  }

  swe_time_equ(tjd_ut, E) {
    var retval;
    var t, dt, x = new Array(6);
    var sidt = this.sl.swe_sidtime(tjd_ut);
    var iflag = Swe.SEFLG_EQUATORIAL;
    t = tjd_ut + 0.5;
    dt = t - Math.floor(t);
    sidt -= dt * 24;
    sidt *= 15;
    if ((retval = this.swe_calc_ut(tjd_ut, Swe.SE_SUN, iflag, x)) == Swe.ERR)
      return Swe.ERR;
    dt = this.sl.swe_degnorm(sidt - x[0] - 180);
    if (dt > 180)
      dt -= 360;
    dt *= 4;
    E[0] = dt / 1440.0;
    return Swe.OK;
  }

  swe_lmt_to_lat(tjd_lmt, geolon, tjd_lat) {
    var retval;
    var E = new Array(1), tjd_lmt0;
    tjd_lmt0 = tjd_lmt - geolon / 360.0;
    retval = this.swe_time_equ(tjd_lmt0, E);
    tjd_lat[0] = tjd_lmt + E[0];
    return retval;
  }

  swe_lat_to_lmt(tjd_lat, geolon, tjd_lmt) {
    var retval;
    var E = new Array(1), tjd_lmt0;
    tjd_lmt0 = tjd_lat - geolon / 360.0;
    retval = this.swe_time_equ(tjd_lmt0, E);
    /* iteration */
    retval = this.swe_time_equ(tjd_lmt0 - E[0], E);
    retval = this.swe_time_equ(tjd_lmt0 - E[0], E);
    tjd_lmt[0] = tjd_lat - E[0];
    return retval;
  }

  dot_prod(x, y) {
    return x[0]*y[0]+x[1]*y[1]+x[2]*y[2];
  }

  dot_prod(x, y, yOffs) {
    return x[0]*y[yOffs]+x[1]*y[1+yOffs]+x[2]*y[2+yOffs];
  }
};
