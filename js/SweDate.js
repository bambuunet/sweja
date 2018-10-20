class SweDate{
  constructor(){
    this.sw =  new SwissData;
    this.SUNDAY = 0;
    this.MONDAY = 1,
    this.TUESDAY = 2;
    this.WEDNESDAY = 3;
    this.THURSDAY = 4;
    this.FRIDAY = 5;
    this.SATURDAY = 6;
    this.SE_JUL_CAL = false;
    this.SE_GREG_CAL = true;
    this.SE_KEEP_DATE = true;
    this.SE_KEEP_JD = false;
    this.init_leapseconds_done = false;

    this.JD0 = 2440587.5;//1970 January 1.0
    this.tid_acc  = Swe.SE_TIDAL_DEFAULT;

    this.is_tid_acc_manual  = false;
    this.init_dt_done = false;
    this.jd = 0.0;
    this.jdCO  = 2299160.5;// JD for the start of the Gregorian calendar system (October 15, 1582) =
    this.calType = false;
    this.year = 0;
    this.month = 0;
    this.day = 0;
    this.hour = 0.0;
    this.deltaT = null;
    this.deltatIsValid = false;

    this.TABSTART =1620;
    this.TABEND = 2019;
    this.TABSIZ = this.TABEND - this.TABSTART + 1;

    /* we make the table greater for additional values read from external file */
    this.TABSIZ_SPACE = this.TABSIZ + 100;

    this.dt = [
      /* 1620.0 thru 1659.0 */
      124.00, 119.00, 115.00, 110.00, 106.00, 102.00, 98.00, 95.00, 91.00, 88.00,
      85.00, 82.00, 79.00, 77.00, 74.00, 72.00, 70.00, 67.00, 65.00, 63.00,
      62.00, 60.00, 58.00, 57.00, 55.00, 54.00, 53.00, 51.00, 50.00, 49.00,
      48.00, 47.00, 46.00, 45.00, 44.00, 43.00, 42.00, 41.00, 40.00, 38.00,
      /* 1660.0 thru 1699.0 */
      37.00, 36.00, 35.00, 34.00, 33.00, 32.00, 31.00, 30.00, 28.00, 27.00,
      26.00, 25.00, 24.00, 23.00, 22.00, 21.00, 20.00, 19.00, 18.00, 17.00,
      16.00, 15.00, 14.00, 14.00, 13.00, 12.00, 12.00, 11.00, 11.00, 10.00,
      10.00, 10.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00,
      /* 1700.0 thru 1739.0 */
      9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 9.00, 10.00, 10.00,
      10.00, 10.00, 10.00, 10.00, 10.00, 10.00, 10.00, 11.00, 11.00, 11.00,
      11.00, 11.00, 11.00, 11.00, 11.00, 11.00, 11.00, 11.00, 11.00, 11.00,
      11.00, 11.00, 11.00, 11.00, 12.00, 12.00, 12.00, 12.00, 12.00, 12.00,
      /* 1740.0 thru 1779.0 */
      12.00, 12.00, 12.00, 12.00, 13.00, 13.00, 13.00, 13.00, 13.00, 13.00,
      13.00, 14.00, 14.00, 14.00, 14.00, 14.00, 14.00, 14.00, 15.00, 15.00,
      15.00, 15.00, 15.00, 15.00, 15.00, 16.00, 16.00, 16.00, 16.00, 16.00,
      16.00, 16.00, 16.00, 16.00, 16.00, 17.00, 17.00, 17.00, 17.00, 17.00,
      /* 1780.0 thru 1799.0 */
      17.00, 17.00, 17.00, 17.00, 17.00, 17.00, 17.00, 17.00, 17.00, 17.00,
      17.00, 17.00, 16.00, 16.00, 16.00, 16.00, 15.00, 15.00, 14.00, 14.00,
      /* 1800.0 thru 1819.0 */
      13.70, 13.40, 13.10, 12.90, 12.70, 12.60, 12.50, 12.50, 12.50, 12.50,
      12.50, 12.50, 12.50, 12.50, 12.50, 12.50, 12.50, 12.40, 12.30, 12.20,
      /* 1820.0 thru 1859.0 */
      12.00, 11.70, 11.40, 11.10, 10.60, 10.20, 9.60, 9.10, 8.60, 8.00,
      7.50, 7.00, 6.60, 6.30, 6.00, 5.80, 5.70, 5.60, 5.60, 5.60,
      5.70, 5.80, 5.90, 6.10, 6.20, 6.30, 6.50, 6.60, 6.80, 6.90,
      7.10, 7.20, 7.30, 7.40, 7.50, 7.60, 7.70, 7.70, 7.80, 7.80,
      /* 1860.0 thru 1899.0 */
      7.88, 7.82, 7.54, 6.97, 6.40, 6.02, 5.41, 4.10, 2.92, 1.82,
      1.61, .10, -1.02, -1.28, -2.69, -3.24, -3.64, -4.54, -4.71, -5.11,
      -5.40, -5.42, -5.20, -5.46, -5.46, -5.79, -5.63, -5.64, -5.80, -5.66,
      -5.87, -6.01, -6.19, -6.64, -6.44, -6.47, -6.09, -5.76, -4.66, -3.74,
      /* 1900.0 thru 1939.0 */
      -2.72, -1.54, -.02, 1.24, 2.64, 3.86, 5.37, 6.14, 7.75, 9.13,
      10.46, 11.53, 13.36, 14.65, 16.01, 17.20, 18.24, 19.06, 20.25, 20.95,
      21.16, 22.25, 22.41, 23.03, 23.49, 23.62, 23.86, 24.49, 24.34, 24.08,
      24.02, 24.00, 23.87, 23.95, 23.86, 23.93, 23.73, 23.92, 23.96, 24.02,
      /* 1940.0 thru 1979.0 */
       24.33, 24.83, 25.30, 25.70, 26.24, 26.77, 27.28, 27.78, 28.25, 28.71,
       29.15, 29.57, 29.97, 30.36, 30.72, 31.07, 31.35, 31.68, 32.18, 32.68,
       33.15, 33.59, 34.00, 34.47, 35.03, 35.73, 36.54, 37.43, 38.29, 39.20,
       40.18, 41.17, 42.23, 43.37, 44.49, 45.48, 46.46, 47.52, 48.53, 49.59,
      /* 1980.0 thru 1999.0 */
       50.54, 51.38, 52.17, 52.96, 53.79, 54.34, 54.87, 55.32, 55.82, 56.30,
       56.86, 57.57, 58.31, 59.12, 59.98, 60.78, 61.63, 62.30, 62.97, 63.47,
      /* 2000.0 thru 2009.0 */
       63.83, 64.09, 64.30, 64.47, 64.57, 64.69, 64.85, 65.15, 65.46, 65.78,      
      /* 2010.0 thru 2015.0 */
       66.07, 66.32, 66.60, 66.907,67.281,67.644,
      /* Extrapolated values, 2016 - 2019 */
                                                 68.01, 68.50, 69.00, 69.50,
      // JAVA ONLY: add 100 empty elements, see constant TABSIZ_SPACE above!
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    ];
    /*#define DELTAT_ESPENAK_MEEUS_2006 TRUE*/
    this.TAB2_SIZ     =  27;
    this.TAB2_START   =  -1000;
    this.TAB2_END     =  1600;
    this.TAB2_STEP    =  100;
    this.LTERM_EQUATION_YSTART  =  1820;
    this.LTERM_EQUATION_COEFF  =  32;
    /* Table for -1000 through 1600, from Morrison & Stephenson (2004).  */
    this.dt2 = [
      /*-1000  -900  -800  -700  -600  -500  -400  -300  -200  -100*/
        25400,23700,22000,21000,19040,17190,15530,14080,12790,11640,
      /*    0   100   200   300   400   500   600   700   800   900*/
        10580, 9600, 8640, 7680, 6700, 5710, 4740, 3810, 2960, 2200,
      /* 1000  1100  1200  1300  1400  1500  1600,                 */
         1570, 1090,  740,  490,  320,  200,  120,
    ];

  };

  getJulDay(year, month, day, hour, calType) {
    if(year === null){
      return this.jd;
    }

    if(calType === null){
      return this.swe_julday(year, month, day, hour, this.SE_GREG_CAL);
    }

    return this.swe_julday(year, month, day, hour, calType);
  };


  ////////////////////////////////////////////////////////////////////////////
  /// deltaT
  ////////////////////////////////////////////////////////////////////////////
  /* DeltaT = Ephemeris Time - Universal Time, in days.
   *
   * 1620 - today + a couple of years:
   * ---------------------------------
   * The tabulated values of deltaT, in hundredths of a second,
   * were taken from The Astronomical Almanac 1997, page K8.  The program
   * adjusts for a value of secular tidal acceleration ndot = -25.7376.
   * arcsec per century squared, the value used in JPL's DE403 ephemeris.
   * ELP2000 (and DE200) used the value -23.8946.
   * To change ndot, one can
   * either redefine SE_TIDAL_DEFAULT in swephexp.h
   * or use the routine swe_set_tid_acc() before calling Swiss
   * Ephemeris.
   * Bessel's interpolation formula is implemented to obtain fourth
   * order interpolated values at intermediate times.
   *
   * -1000 - 1620:
   * ---------------------------------
   * For dates between -500 and 1600, the table given by Morrison &
   * Stephenson (2004; p. 332) is used, with linear interpolation.
   * This table is based on an assumed value of ndot = -26.
   * The program adjusts for ndot = -25.7376.
   * For 1600 - 1620, a linear interpolation between the last value
   * of the latter and the first value of the former table is made.
   *
   * before -1000:
   * ---------------------------------
   * For times before -1100, a formula of Morrison & Stephenson (2004)
   * (p. 332) is used:
   * dt = 32 * t * t - 20 sec, where t is centuries from 1820 AD.
   * For -1100 to -1000, a transition from this formula to the Stephenson
   * table has been implemented in order to avoid a jump.
   *
   * future:
   * ---------------------------------
   * For the time after the last tabulated value, we use the formula
   * of Stephenson (1997; p. 507), with a modification that avoids a jump
   * at the end of the tabulated period. A linear term is added that
   * makes a slow transition from the table to the formula over a period
   * of 100 years. (Need not be updated, when table will be enlarged.)
  */

  /**
  * Queries the delta T value for the date of this object.
  * @return delta T
  */
  getDeltaT(){
    if(!this.deltatIsValid){
      this.deltaT = this.calc_deltaT(this.getJulDay());
    }
    return this.deltaT;
  };

  /* returns DeltaT (ET - UT) in days
   * double tjd   =   julian day in UT
   */
  calc_deltaT(tjd){
    var ans = 0;
    var B, Y, Ygreg, dd;
    var iy;
    var deltat_model = this.sw.astro_models[Swe.SE_MODEL_DELTAT];

    if (deltat_model == 0) deltat_model = Swe.SEMOD_DELTAT_DEFAULT;
    /* read additional values from swedelta.txt */
    /* AS_BOOL use_espenak_meeus = DELTAT_ESPENAK_MEEUS_2006;*/
    Y = 2000.0 + (tjd - Swe.SwephData.J2000)/365.25;
    Ygreg = 2000.0 + (tjd - Swe.SwephData.J2000)/365.2425;
    /* Before 1633 AD, if the macro DELTAT_ESPENAK_MEEUS_2006 is TRUE: 
     * Polynomials by Espenak & Meeus 2006, derived from Stephenson & Morrison 
     * 2004. 
     * Note, Espenak & Meeus use their formulae only from 2000 BC on.
     * However, they use the long-term formula of Morrison & Stephenson,
     * which can be used even for the remoter past.
     */
    /*if (use_espenak_meeus && tjd < 2317746.13090277789) {*/
    if (deltat_model == Swe.SEMOD_DELTAT_ESPENAK_MEEUS_2006 && tjd < 2317746.13090277789) {
      return this.deltat_espenak_meeus_1620(tjd);
    }
    /* If the macro DELTAT_ESPENAK_MEEUS_2006 is FALSE:
     * Before 1620, we follow Stephenson & Morrsion 2004. For the tabulated 
     * values 1000 BC through 1600 AD, we use linear interpolation.
     */
    if (Y < this.TABSTART) {
      if (Y < this.TAB2_END) {
        return this.deltat_stephenson_morrison_1600(tjd);
      } else {
        /* between 1600 and 1620:
         * linear interpolation between 
         * end of table dt2 and start of table dt */
        if (Y >= this.TAB2_END) { 
    B = this.TABSTART - this.TAB2_END;
    iy = (this.TAB2_END - this.TAB2_START) / this.TAB2_STEP;
    dd = (Y - TAB2_END) / B;
    /*ans = dt2[iy] + dd * (dt[0] / 100.0 - dt2[iy]);*/
    ans = this.dt2[iy] + dd * (dt[0] - this.dt2[iy]);
    ans = this.adjust_for_tidacc(ans, Ygreg);
    return ans / 86400.0;
        }
      }
    }
    /* 1620 - today + a few years (tabend):
     * Besselian interpolation from tabulated values in table dt.
     * See AA page K11.
     */
    if (Y >= this.TABSTART) {
      return this.deltat_aa(tjd);
    }

    return ans / 86400.0;
  };


  deltat_aa(tjd) {
    var ans = ans2 = ans3 = 0;
    var p, B, B2, Y, dd;
    var d = [];
    var i, iy, k;

    /* read additional values from swedelta.txt */
    var tabsiz = Swe.TABSIZ;
    var tabend = Swe.TABSTART + tabsiz - 1;
    /*Y = 2000.0 + (tjd - J2000)/365.25;*/
    Y = 2000.0 + (tjd - Swe.SwephData.J2000)/365.2425;
    if (Y <= tabend) {
      /* Index into the table.
       */
      p = Math.floor(Y);
      iy = parseInt(p - Swe.TABSTART, 10);
      /* Zeroth order estimate is value at start of year */
      ans = this.dt[iy];
      k = iy + 1;
      if( k >= tabsiz )
        return this.deltat_aa_label_done(ans, Y); /* No data, can't go on. */
      /* The fraction of tabulation interval */
      p = Y - p;
      /* First order interpolated value */
      ans += p*(this.dt[k] - this.dt[iy]);
      if( (iy-1 < 0) || (iy+2 >= tabsiz) )
        return this.deltat_aa_label_done(ans, Y); /* can't do second differences */
      /* Make table of first differences */
      k = iy - 2;
      for( i=0; i<5; i++ ) {
        if( (k < 0) || (k+1 >= tabsiz) )
          d[i] = 0;
        else
          d[i] = this.dt[k+1] - this.dt[k];
        k += 1;
      }
      /* Compute second differences */
      for( i=0; i<4; i++ )
        d[i] = d[i+1] - d[i];
      B = 0.25*p*(p-1.0);
      ans += B*(d[1] + d[2]);

      if( iy+2 >= tabsiz )
        return this.deltat_aa_label_done(ans, Y);
      /* Compute third differences */
      for( i=0; i<3; i++ )
        d[i] = d[i+1] - d[i];
      B = 2.0*B/3.0;
      ans += (p-0.5)*B*d[1];

      if( (iy-2 < 0) || (iy+3 > tabsiz) )
        return this.deltat_aa_label_done(ans, Y);
      /* Compute fourth differences */
      for( i=0; i<2; i++ )
        d[i] = d[i+1] - d[i];
      B = 0.125*B*(p+1.0)*(p-2.0);
      ans += B*(d[0] + d[1]);

      return this.deltat_aa_label_done(ans, Y); /* No data, can't go on. */
    }
    /* today - :
     * Formula Stephenson (1997; p. 507),
     * with modification to avoid jump at end of AA table,
     * similar to what Meeus 1998 had suggested.
     * Slow transition within 100 years.
     */
    B = 0.01 * (Y - 1820);
    ans = -20 + 31 * B * B;
    /* slow transition from tabulated values to Stephenson formula: */
    if (Y <= tabend+100) {
      B2 = 0.01 * (tabend - 1820);
      ans2 = -20 + 31 * B2 * B2;
      ans3 = this.dt[tabsiz-1];
      dd = (ans2 - ans3);
      ans += dd * (Y - (tabend + 100)) * 0.01;
    }
    return ans / 86400.0;
  };

  deltat_longterm_morrison_stephenson(tjd) {
    var Ygreg =  2000.0 + (tjd - Swe.SwephData.J2000)/365.2425;
    var u = (Ygreg  - 1820) / 100.0;
    return (-20 + 32 * u * u);
  };

  deltat_stephenson_morrison_1600(tjd) {
    var ans = ans2 = ans3 = 0;
    var p, B, dd, tjd0, iy;
    var Y = 2000.0 + (tjd - Swe.SwephData.J2000)/365.2425;

    /* before -1000:
     * formula by Stephenson&Morrison (2004; p. 335) but adjusted to fit the 
     * starting point of table dt2. */
    if( Y < this.TAB2_START ) {
      /*B = (Y - LTERM_EQUATION_YSTART) * 0.01;
      ans = -20 + LTERM_EQUATION_COEFF * B * B;*/
      ans = this.deltat_longterm_morrison_stephenson(tjd);
      ans = this.adjust_for_tidacc(ans, Y);
      /* transition from formula to table over 100 years */
      if (Y >= this.TAB2_START - 100) {
        /* starting value of table dt2: */
        ans2 = this.adjust_for_tidacc(this.dt2[0], this.TAB2_START);
        /* value of formula at epoch TAB2_START */
        /* B = (TAB2_START - LTERM_EQUATION_YSTART) * 0.01;
        ans3 = -20 + LTERM_EQUATION_COEFF * B * B;*/
        tjd0 = (this.TAB2_START - 2000) * 365.2425 + Swe.SwephData.J2000;
        ans3 = this.deltat_longterm_morrison_stephenson(tjd0);
        ans3 = this.adjust_for_tidacc(ans3, Y);
        dd = ans3 - ans2;
        B = (Y - (this.TAB2_START - 100)) * 0.01;
        /* fit to starting point of table dt2. */
        ans = ans - dd * B;
      }
    }
    /* between -1000 and 1600: 
     * linear interpolation between values of table dt2 (Stephenson&Morrison 2004) */
    if (Y >= this.TAB2_START && Y < this.TAB2_END) { 
      var Yjul = 2000 + (tjd - 2451557.5) / 365.25;
      p = Math.floor(Yjul);
      iy = parseInt((p - this.TAB2_START) / this.TAB2_STEP, 10);
      dd = (Yjul - (this.TAB2_START + this.TAB2_STEP * iy)) / this.TAB2_STEP;
      ans = this.dt2[iy] + (this.dt2[iy+1] - this.dt2[iy]) * dd;
      /* correction for tidal acceleration used by our ephemeris */
      ans = this.adjust_for_tidacc(ans, Y);
    }
    ans /= 86400.0;
    return ans;
  };

  deltat_espenak_meeus_1620(tjd) {
    var ans = 0;
    var Ygreg;
    var u;
    Ygreg = 2000.0 + (tjd - SwephData.J2000)/365.2425;
    if (Ygreg < -500) {
      ans = this.deltat_longterm_morrison_stephenson(tjd);
    } else if (Ygreg < 500) {
      u = Ygreg / 100.0;
      ans = (((((0.0090316521 * u + 0.022174192) * u - 0.1798452) * u - 5.952053) * u+ 33.78311) * u - 1014.41) * u + 10583.6;
    } else if (Ygreg < 1600) {
      u = (Ygreg - 1000) / 100.0;
      ans = (((((0.0083572073 * u - 0.005050998) * u - 0.8503463) * u + 0.319781) * u + 71.23472) * u - 556.01) * u + 1574.2;
    } else if (Ygreg < 1700) {
      u = Ygreg - 1600;
      ans = 120 - 0.9808 * u - 0.01532 * u * u + u * u * u / 7129.0;
    } else if (Ygreg < 1800) {
      u = Ygreg - 1700;
      ans = (((-u / 1174000.0 + 0.00013336) * u - 0.0059285) * u + 0.1603) * u + 8.83;
    } else if (Ygreg < 1860) {
      u = Ygreg - 1800;
      ans = ((((((0.000000000875 * u - 0.0000001699) * u + 0.0000121272) * u - 0.00037436) * u + 0.0041116) * u + 0.0068612) * u - 0.332447) * u + 13.72;
    } else if (Ygreg < 1900) {
      u = Ygreg - 1860;
      ans = ((((u / 233174.0 - 0.0004473624) * u + 0.01680668) * u - 0.251754) * u + 0.5737) * u + 7.62;
    } else if (Ygreg < 1920) {
      u = Ygreg - 1900;
      ans = (((-0.000197 * u + 0.0061966) * u - 0.0598939) * u + 1.494119) * u -2.79;
    } else if (Ygreg < 1941) {
      u = Ygreg - 1920;
      ans = 21.20 + 0.84493 * u - 0.076100 * u * u + 0.0020936 * u * u * u;
    } else if (Ygreg < 1961) {
      u = Ygreg - 1950;
      ans = 29.07 + 0.407 * u - u * u / 233.0 + u * u * u / 2547.0;
    } else if (Ygreg < 1986) {
      u = Ygreg - 1975;
      ans = 45.45 + 1.067 * u - u * u / 260.0 - u * u * u / 718.0;
    } else if (Ygreg < 2005) {
      u = Ygreg - 2000;
      ans = ((((0.00002373599 * u + 0.000651814) * u + 0.0017275) * u - 0.060374) * u + 0.3345) * u + 63.86;
    }
    ans = this.adjust_for_tidacc(ans, Ygreg);
    ans /= 86400.0;
    return ans;
  };

  deltat_aa_label_done(ans, Y) {
    ans = this.adjust_for_tidacc(ans, Y);
    return ans / 86400.0;
  };

  /* Astronomical Almanac table is corrected by adding the expression
   *     -0.000091 (ndot + 26)(year-1955)^2  seconds
   * to entries prior to 1955 (AA page K8), where ndot is the secular
   * tidal term in the mean motion of the Moon.
   *
   * Entries after 1955 are referred to atomic time standards and
   * are not affected by errors in Lunar or planetary theory.
   */
  adjust_for_tidacc(ans, Y) {
    var B;
    if( Y < 1955.0 ) {
      B = (Y - 1955.0);
      ans += -0.000091 * (this.tid_acc + 26.0) * B * B;
    }
    return ans;
  };



  swe_julday(year, month, day, hour, calType) {
    var jd, u, u0, u1, u2;
    u = year;
    if (month < 3) { u -=1; }
    u0 = u + 4712.0;
    u1 = month + 1.0;
    if (u1 < 4) { u1 += 12.0; }
    jd = Math.floor(u0*365.25)
       + Math.floor(30.6*u1+0.000001)
       + day + hour/24.0 - 63.5;
    if (calType == this.SE_GREG_CAL) {
      u2 = Math.floor(Math.abs(u) / 100) - Math.floor(Math.abs(u) / 400);
      if (u < 0.0) {
        u2 = -u2;
      }
      jd = jd - u2 + 2;
      if ((u < 0.0) && (u/100 == Math.floor(u/100)) &&
                          (u/400 != Math.floor(u/400))) {
        jd -=1;
      }
    }
    return jd;
  }


};