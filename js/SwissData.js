class SwissData{

  constructor(){
    this.ODEGREE_STRING = "Âø";  /* degree as string, utf8 encoding */

    this.ayanamsa_name = [
       "Fagan/Bradley",
       "Lahiri",
       "De Luce",
       "Raman",
       "Ushashashi",
       "Krishnamurti",
       "Djwhal Khul",
       "Yukteshwar",
       "J.N. Bhasin",
       "Babylonian/Kugler 1",
       "Babylonian/Kugler 2",
       "Babylonian/Kugler 3",
       "Babylonian/Huber",
       "Babylonian/Eta Piscium",
       "Babylonian/Aldebaran = 15 Tau",
       "Hipparchos",
       "Sassanian",
       "Galact. Center = 0 Sag",
       "J2000",
       "J1900",
       "B1950",
       "Suryasiddhanta",
       "Suryasiddhanta, mean Sun",
       "Aryabhata",
       "Aryabhata, mean Sun",
       "SS Revati",
       "SS Citra",
       "True Citra",
       "True Revati",
       "True Pushya",
    ];

    this.AS_MAXCH = 256; // used for string declarations,
                                          // allowing 255 char+\0

    this.DEGTORAD = 0.0174532925199433;
    this.RADTODEG = 57.2957795130823;

    this.DEG = 360000;  // degree expressed in centiseconds
    this.DEG7_30 = 2700000; // 7.5 degrees
    this.DEG15 = 15 * this.DEG;
    this.DEG24 = 24 * this.DEG;
    this.DEG30 = 30 * this.DEG;
    this.DEG60 = 60 * this.DEG;
    this.DEG90 = 90 * this.DEG;
    this.DEG120 = 120 * this.DEG;
    this.DEG150 = 150 * this.DEG;
    this.DEG180 = 180 * this.DEG;
    this.DEG270 = 270 * this.DEG;
    this.DEG360 = 360 * this.DEG;

    this.CSTORAD = 4.84813681109536E-08; // centisec to rad:
                                                 // pi / 180 /3600/100
    this.RADTOCS = 2.06264806247096E+07; // rad to centisec
                                                      // 180*3600*100/pi

    this.CS2DEG = 1.0/360000.0;       // centisec to degree

    this.BFILE_R_ACCESS = "r";  // open binary file for reading
    this.BFILE_RW_ACCESS = "r+";// open binary file for writing and reading
    this.BFILE_W_CREATE = "w";  // create/open binary file for write
    this.BFILE_A_ACCESS = "a+"; // create/open binary file for append
    this.FILE_R_ACCESS = "r";   // open text file for reading
    this.FILE_RW_ACCESS = "r+"; // open text file for writing and reading
    this.FILE_W_CREATE = "w";   // create/open text file for write
    this.FILE_A_ACCESS = "a+";  // create/open text file for append
    this.O_BINARY = 0;             // for open(), not defined in Unix
    this.OPEN_MODE = "0666";         // default file creation mode
    // file.separator may be null with JavaME
    this.DIR_GLUE = "/";              // glue string for directory/file
    this.PATH_SEPARATOR = ";:"; // semicolon or colon may be used


    //////////////////////////////////////////////////////////////////////////////
    // swephexp.h: ///////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////
    this.SE_NSIDM_PREDEF          =30;

    //  static final int SE_MAX_STNAME=20;    // maximum size of fixstar name;
    //                                        // the parameter star in swe_fixstar
    //          // must allow twice this space for
    //                // the returned star name.
    //

    this.pnoext2int = [
      Swe.SwephData.SEI_SUN,
      Swe.SwephData.SEI_MOON,
      Swe.SwephData.SEI_MERCURY,
      Swe.SwephData.SEI_VENUS,
      Swe.SwephData.SEI_MARS,
      Swe.SwephData.SEI_JUPITER,
      Swe.SwephData.SEI_SATURN,
      Swe.SwephData.SEI_URANUS,
      Swe.SwephData.SEI_NEPTUNE,
      Swe.SwephData.SEI_PLUTO,
      0, 0, 0, 0,
      Swe.SwephData.SEI_EARTH,
      Swe.SwephData.SEI_CHIRON,
      Swe.SwephData.SEI_PHOLUS,
      Swe.SwephData.SEI_CERES,
      Swe.SwephData.SEI_PALLAS,
      Swe.SwephData.SEI_JUNO,
      Swe.SwephData.SEI_VESTA
    ];

    this.ephe_path_is_set = false; /* ephe_path_is_set = FALSE */
    this.jpl_file_is_open = false; /* jpl_file_is_open = FALSE */
    this.fixfp = null;     /* fixfp, fixed stars file pointer */
    this.fixstarsHash = null;
    this.ephepath = Swe.SE_EPHE_PATH;  /* ephepath, ephemeris path */
    this.jplfnam = Swe.SE_FNAME_DFT; /* jplfnam, JPL file name, default */
    this.jpldenum = 0;     /* jpldenum */
    this.eop_tjd_beg = 0.0;
    this.eop_tjd_beg_horizons = 0.0;
    this.eop_tjd_end = 0.0;
    this.eop_tjd_end_add = 0.0;
    this.eop_dpsi_loaded = 0;
    this.geopos_is_set = false;    /* geopos_is_set, for topocentric */
    this.ayana_is_set = false;   /* ayana_is_set, ayanamsa is set */
    this.is_old_starfile = false;  /* is_old_starfile, fixstars.cat is used (default is sefstars.txt) */

    this.fidat = (new Array(Swe.SEI_NEPHFILES)).fill(new FileData);
    this.gcdat =  null;
    this.pldat = (new Array(Swe.SEI_NPLANETS)).fill(new PlanData);
    this.nddat = (new Array(Swe.SEI_NNODE_ETC)).fill(new PlanData);
    this.savedat = (new Array(Swe.SE_NPLANETS+1)).fill(new SavePositions);
    this.oec = new Epsilon;
    this.oec2000 = new Epsilon;
    this.nut = null;
    this.nut2000 = null;
    this.nutv = null;
    this.topd = null;
    this.sidd = null;
    this.astelem = null;
    this.ast_G = 0.0;
    this.ast_H = 0.0;
    this.ast_diam = 0.0;
    this.i_saved_planet_name = 0;
    this.saved_planet_name = "";
    this.dpsi = null;
    this.deps = null;
    this.astro_models = new Array(Swe.SwephData.SEI_NMODELS);
    this.timeout = 0;

  }
};
