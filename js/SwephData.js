var Swe = Swe || {};
Swe.SwephData = {};

Swe.SwephData.PNOINT2JPL = [
  Swe.J_EARTH,
  Swe.J_MOON,
  Swe.J_MERCURY,
  Swe.J_VENUS,
  Swe.J_MARS,
  Swe.J_JUPITER,
  Swe.J_SATURN, 
  Swe.J_URANUS,
  Swe.J_NEPTUNE,
  Swe.J_PLUTO,
  Swe.J_SUN
  ];
Swe.SwephData.pnoint2jpl = Swe.SwephData.PNOINT2JPL;

/* planetary radii in meters */
Swe.SwephData.NDIAM = (Swe.SE_VESTA + 1);
Swe.SwephData.pla_diam = [1392000000.0, /* Sun */
                         3476300.0, /* Moon */
                         2439000.0 * 2, /* Mercury */
                         6052000.0 * 2, /* Venus */
                         3397200.0 * 2, /* Mars */
                        71398000.0 * 2, /* Jupiter */
                        60000000.0 * 2, /* Saturn */
                        25400000.0 * 2, /* Uranus */
                        24300000.0 * 2, /* Neptune */
                         2500000.0 * 2, /* Pluto */
                         0, 0, 0, 0,    /* nodes and apogees */
                         6378140.0 * 2, /* Earth */
                               0.0, /* Chiron */
                               0.0, /* Pholus */
                          913000.0, /* Ceres */
                          523000.0, /* Pallas */
                          244000.0, /* Juno */
                          501000.0, /* Vesta */
                      ];

Swe.SwephData.J2000 = 2451545.0;        // 2000 January 1.5
Swe.SwephData.B1950 = 2433282.42345905; // 1950 January 0.923
Swe.SwephData.J1900 = 2415020.0;        // 1900 January 0.5

Swe.SwephData.MPC_CERES = 1;
Swe.SwephData.MPC_PALLAS = 2;
Swe.SwephData.MPC_JUNO = 3;
Swe.SwephData.MPC_VESTA = 4;
Swe.SwephData.MPC_CHIRON = 2060;
Swe.SwephData.MPC_PHOLUS = 5145;

Swe.SwephData.SE_NAME_SUN = "Sun";
Swe.SwephData.SE_NAME_MOON = "Moon";
Swe.SwephData.SE_NAME_MERCURY = "Mercury";
Swe.SwephData.SE_NAME_VENUS = "Venus";
Swe.SwephData.SE_NAME_MARS = "Mars";
Swe.SwephData.SE_NAME_JUPITER = "Jupiter";
Swe.SwephData.SE_NAME_SATURN = "Saturn";
Swe.SwephData.SE_NAME_URANUS = "Uranus";
Swe.SwephData.SE_NAME_NEPTUNE = "Neptune";
Swe.SwephData.SE_NAME_PLUTO = "Pluto";
Swe.SwephData.SE_NAME_MEAN_NODE = "mean Node";
Swe.SwephData.SE_NAME_TRUE_NODE = "true Node";
Swe.SwephData.SE_NAME_MEAN_APOG = "mean Apogee";
Swe.SwephData.SE_NAME_OSCU_APOG = "osc. Apogee";
Swe.SwephData.SE_NAME_INTP_APOG = "intp. Apogee";
Swe.SwephData.SE_NAME_INTP_PERG = "intp. Perigee";
Swe.SwephData.SE_NAME_EARTH = "Earth";
Swe.SwephData.SE_NAME_CERES = "Ceres";
Swe.SwephData.SE_NAME_PALLAS = "Pallas";
Swe.SwephData.SE_NAME_JUNO = "Juno";
Swe.SwephData.SE_NAME_VESTA = "Vesta";
Swe.SwephData.SE_NAME_CHIRON = "Chiron";
Swe.SwephData.SE_NAME_PHOLUS = "Pholus";


Swe.SwephData.SE_NAME_CUPIDO = "Cupido";
Swe.SwephData.SE_NAME_HADES = "Hades";
Swe.SwephData.SE_NAME_ZEUS = "Zeus";
Swe.SwephData.SE_NAME_KRONOS = "Kronos";
Swe.SwephData.SE_NAME_APOLLON = "Apollon";
Swe.SwephData.SE_NAME_ADMETOS = "Admetos";
Swe.SwephData.SE_NAME_VULKANUS = "Vulkanus";
Swe.SwephData.SE_NAME_POSEIDON = "Poseidon";
Swe.SwephData.SE_NAME_ISIS = "Isis";
Swe.SwephData.SE_NAME_NIBIRU = "Nibiru";
Swe.SwephData.SE_NAME_HARRINGTON = "Harrington";
Swe.SwephData.SE_NAME_NEPTUNE_LEVERRIER = "Leverrier";
Swe.SwephData.SE_NAME_NEPTUNE_ADAMS = "Adams";
Swe.SwephData.SE_NAME_PLUTO_LOWELL = "Lowell";
Swe.SwephData.SE_NAME_PLUTO_PICKERING = "Pickering";
Swe.SwephData.SE_NAME_VULCAN = "Vulcan";
Swe.SwephData.SE_NAME_WHITE_MOON = "White Moon";

/* Ayanamsas 
 * For each ayanamsa, there are two values:
 * t0       epoch of ayanamsa, TDT (ET)
 * ayan_t0  ayanamsa value at epoch
 */

Swe.SwephData.AyaInit = function(t0, ayan_t0){
  this.t0=t0;
  this.ayan_t0=ayan_t0;
}
Swe.SwephData.ayanamsa = [
  {t0: 2433282.5, ayan_t0: 24.042044444}, /* 0: Fagan/Bradley (Default) */

  {t0: 2435553.5, ayan_t0: 23.250182778 - 0.004660222},   /* 1: Lahiri (derived from:
                         * Indian Astronomical Ephemeris 1989, p. 556;
                         * the subtracted value is nutation) */
  {t0: Swe.SwephData.J1900, ayan_t0: 360 - 333.58695},   /* 2: De Luce (Robert Hand) */
  {t0: Swe.SwephData.J1900, ayan_t0: 360 - 338.98556},   /* 3: Raman (Robert Hand) */
  {t0: Swe.SwephData.J1900, ayan_t0: 360 - 341.33904},   /* 4: Ushashashi (Robert Hand) */
  {t0: Swe.SwephData.J1900, ayan_t0: 360 - 337.636111},  /* 5: Krishnamurti (Robert Hand) */
  {t0: Swe.SwephData.J1900, ayan_t0: 360 - 333.0369024}, /* 6: Djwhal Khool; (Graham Dawson)
                                          *    Aquarius entered on 1 July 2117 */
  {t0: Swe.SwephData.J1900, ayan_t0: 360 - 338.917778},  /* 7: Yukteshwar; (David Cochrane) */
  {t0: Swe.SwephData.J1900, ayan_t0: 360 - 338.634444},  /* 8: JN Bhasin; (David Cochrane) */
  {t0: 1684532.5, ayan_t0: -3.36667},      /* 9: Babylonian, Kugler 1 */
  {t0: 1684532.5, ayan_t0: -4.76667},      /*10: Babylonian, Kugler 2 */
  {t0: 1684532.5, ayan_t0: -5.61667},      /*11: Babylonian, Kugler 3 */
  {t0: 1684532.5, ayan_t0: -4.56667},      /*12: Babylonian, Huber */
  {t0: 1673941, ayan_t0: -5.079167},       /*13: Babylonian, Mercier;
                                          *    eta Piscium culminates with zero point */
  {t0: 1684532.5, ayan_t0: -4.44088389},   /*14: t0 is defined by Aldebaran at 15 Taurus */
  {t0: 1674484, ayan_t0: -9.33333},        /*15: Hipparchos */
  {t0: 1927135.8747793, ayan_t0: 0},       /*16: Sassanian */
  /*{1746443.513, ayan_t0: 0},                     *17: Galactic Center at 0 Sagittarius */
  {t0: 1746447.518, ayan_t0: 0},           /*17: Galactic Center at 0 Sagittarius */
  {t0: Swe.SwephData.J2000, ayan_t0: 0},                 /*18: J2000 */
  {t0: Swe.SwephData.J1900, ayan_t0: 0},                 /*19: J1900 */
  {t0: Swe.SwephData.B1950, ayan_t0: 0},                 /*20: B1950 */
  {t0: 1903396.8128654, ayan_t0: 0},       /*21: Suryasiddhanta, assuming
                                               ingress of mean Sun into Aries at point
                                               of mean equinox of date on
                                               21.3.499, noon, Ujjain (75.7684565 E)
                                               = 7:30:31.57 UT */
  {t0: 1903396.8128654, ayan_t0: -0.21463395},/*22: Suryasiddhanta, assuming
                                               ingress of mean Sun into Aries at
                                               true position of mean Sun at same epoch */
  {t0: 1903396.7895321, ayan_t0: 0},       /*23: Aryabhata, same date, but UT 6:56:55.57
                                               analogous 21 */
  {t0: 1903396.7895321, ayan_t0: -0.23763238},/*24: Aryabhata, analogous 22 */
  {t0: 1903396.8128654, ayan_t0: -0.79167046},/*25: SS, Revati/zePsc at polar long. 359Âø50'*/
  {t0: 1903396.8128654, ayan_t0: 2.11070444},/*26: SS, Citra/Spica at polar long. 180Âø */
  {t0: 0, ayan_t0: 0},                  /*27: True Citra (Spica exactly at 0 Libra) */
  {t0: 0, ayan_t0: 0},                  /*28: True Revati (zeta Psc exactly at 0 Aries) */
  {t0: 0, ayan_t0: 0},      /*29: True Pushya (delta Cnc exactly a 16 Cancer */
  {t0: 0, ayan_t0: 0},                     /*30: - */
];

/*
* earlier content
*/

Swe.SwephData.TWOPI = 2.0 * Math.PI;

Swe.SwephData.SEI_EPSILON = -2;
Swe.SwephData.SEI_NUTATION = -1;
Swe.SwephData.SEI_EMB = 0;
Swe.SwephData.SEI_EARTH = 0;
Swe.SwephData.SEI_SUN = 0;
Swe.SwephData.SEI_MOON = 1;
Swe.SwephData.SEI_MERCURY = 2;
Swe.SwephData.SEI_VENUS = 3;
Swe.SwephData.SEI_MARS = 4;
Swe.SwephData.SEI_JUPITER = 5;
Swe.SwephData.SEI_SATURN = 6;
Swe.SwephData.SEI_URANUS = 7;
Swe.SwephData.SEI_NEPTUNE = 8;
Swe.SwephData.SEI_PLUTO = 9;
Swe.SwephData.SEI_SUNBARY = 10;     // barycentric sun
Swe.SwephData.SEI_ANYBODY = 11;     // any asteroid
Swe.SwephData.SEI_CHIRON = 12;
Swe.SwephData.SEI_PHOLUS = 13;
Swe.SwephData.SEI_CERES = 14;
Swe.SwephData.SEI_PALLAS = 15;
Swe.SwephData.SEI_JUNO = 16;
Swe.SwephData.SEI_VESTA = 17;

Swe.SwephData.SEI_NPLANETS = 18;

Swe.SwephData.SEI_MEAN_NODE = 0;
Swe.SwephData.SEI_TRUE_NODE = 1;
Swe.SwephData.SEI_MEAN_APOG = 2;
Swe.SwephData.SEI_OSCU_APOG = 3;
Swe.SwephData.SEI_INTP_APOG = 4;
Swe.SwephData.SEI_INTP_PERG = 5;

Swe.SwephData.SEI_NNODE_ETC = 6;

Swe.SwephData.SEI_FLG_HELIO = 1;
Swe.SwephData.SEI_FLG_ROTATE = 2;
Swe.SwephData.SEI_FLG_ELLIPSE = 4;
Swe.SwephData.SEI_FLG_EMBHEL = 8; // TRUE, if heliocentric earth is given
                                   // instead of barycentric sun
                                   // i.e. bary sun is computed from
                                   // barycentric and heliocentric earth

Swe.SwephData.SEI_FILE_PLANET = 0;
Swe.SwephData.SEI_FILE_MOON = 1;
Swe.SwephData.SEI_FILE_MAIN_AST = 2;
Swe.SwephData.SEI_FILE_ANY_AST = 3;
Swe.SwephData.SEI_FILE_FIXSTAR = 4;

// Aus swephexph.h:
Swe.SwephData.SEI_FILE_TEST_ENDIAN = 0x616263;   // abc
Swe.SwephData.SEI_FILE_BIGENDIAN = 0;
Swe.SwephData.SEI_FILE_NOREORD = 0;
Swe.SwephData.SEI_FILE_LITENDIAN = 1;
Swe.SwephData.SEI_FILE_REORD = 2;

Swe.SwephData.SEI_FILE_NMAXPLAN = 50;
Swe.SwephData.SEI_FILE_EFPOSBEGIN = 500;

Swe.SwephData.SE_FILE_SUFFIX = "se1";

Swe.SwephData.SEI_NEPHFILES = 7;
Swe.SwephData.SEI_CURR_FPOS = -1;
Swe.SwephData.SEI_NMODELS = 20;

Swe.SwephData.SEI_ECL_GEOALT_MAX =  25000.0;
Swe.SwephData.SEI_ECL_GEOALT_MIN =  (-500.0);

/* Chiron's orbit becomes chaotic
* before 720 AD and after 4606 AD, because of close encounters
* with Saturn. Accepting a maximum error of 5 degrees,
* the ephemeris is good between the following dates:
*/
/*Swe.SwephData.CHIRON_START = 1958470.5;      * 1.1.650 old limit until v. 2.00 */
Swe.SwephData.CHIRON_START = 1967601.5;   /* 1.1.675 */
Swe.SwephData.CHIRON_END = 3419437.5;        // 1.1.4650

/* Pholus's orbit is unstable as well, because he sometimes
* approaches Saturn.
* Accepting a maximum error of 5 degrees,
* the ephemeris is good after the following date:
*/
/* Swe.SwephData.PHOLUS_START = 314845.5;       * 1.1.-3850  old limit until v. 2.00 */
Swe.SwephData.PHOLUS_START = 640648.5;  /* 1.1.-2958 jul */
Swe.SwephData.PHOLUS_END =   4390617.5;   /* 1.1.7309 */

Swe.SwephData.MOSHPLEPH_START =  625000.5;
Swe.SwephData.MOSHPLEPH_END =   2818000.5;
Swe.SwephData.MOSHLUEPH_START =  625000.5;
Swe.SwephData.MOSHLUEPH_END =   2818000.5;
/* Swe.SwephData.MOSHNDEPH_START = -254900.5; // 14 Feb -5410 00:00 ET jul.cal.*/
/* Swe.SwephData.MOSHNDEPH_END =   3697000.5; // 11 Dec 5409 00:00 ET, greg. cal. */
Swe.SwephData.MOSHNDEPH_START = -3100015.5; // 15 Aug -13200 00:00 ET jul.cal.*/
Swe.SwephData.MOSHNDEPH_END =   8000016.5; // 15 Mar 17191 00:00 ET, greg. cal */
/*
#define MOSHPLEPH_START  -225000.5
#define MOSHPLEPH_END   3600000.5
#define MOSHLUEPH_START  -225000.5
#define MOSHLUEPH_END   3600000.5
*/
Swe.SwephData.JPL_DE431_START = -3027215.5;
Swe.SwephData.JPL_DE431_END   =  7930192.5;

Swe.SwephData.MAXORD = 40;

Swe.SwephData.NCTIES = 6.0;    // number of centuries per eph. file

Swe.SwephData.NOT_AVAILABLE = -2;
Swe.SwephData.BEYOND_EPH_LIMITS = -3;

Swe.SwephData.J_TO_J2000 = 1;
Swe.SwephData.J2000_TO_J = -1;


// we always use Astronomical Almanac constants, if available
Swe.SwephData.DEGTORAD = 0.0174532925199433;
Swe.SwephData.MOON_MEAN_DIST = 384400000.0;           // in m, AA 1996, F2
Swe.SwephData.MOON_MEAN_INCL = 5.1453964;             // AA 1996, D2
Swe.SwephData.MOON_MEAN_ECC = 0.054900489;            // AA 1996, F2
// Swe.SwephData.SUN_EARTH_MRAT = 328900.561400;         Su/(Ea+Mo) AA 2006 K7
Swe.SwephData.SUN_EARTH_MRAT = 332946.050895;         // Su / (Ea only) AA 2006 K7
Swe.SwephData.EARTH_MOON_MRAT = (1 / 0.0123000383);   // AA 2006, K7

Swe.SwephData.AUNIT = 1.49597870691e+11;              // au in meters, AA 2006 K6
Swe.SwephData.CLIGHT = 2.99792458e+8;                 // m/s, AA 1996 K6
Swe.SwephData.HELGRAVCONST = 1.32712440017987e+20;    // G * M(sun), m^3/sec^2, AA 2006 K6
Swe.SwephData.GEOGCONST = 3.98600448e+14; // G * M(earth) m^3/sec^2, AA 1996 K6
Swe.SwephData.KGAUSS = 0.01720209895; // Gaussian gravitational constant K6
Swe.SwephData.KGAUSS_GEO = 0.0000298122353216;        // Earth only
// Swe.SwephData.KGAUSS_GEO = 0.0000299502129737        // Earth + Moon
Swe.SwephData.SUN_RADIUS = 959.63 / 3600 * Swe.SwephData.DEGTORAD;  // Meeus germ. p 391
Swe.SwephData.EARTH_RADIUS = 6378136.6;               // AA 2006 K6
/*Swe.SwephData.EARTH_OBLATENESS = (1.0/ 298.257223563); * AA 1998 K13 */
Swe.SwephData.EARTH_OBLATENESS = (1.0/ 298.25642);    // AA 2006 K6
Swe.SwephData.EARTH_ROT_SPEED = 7.2921151467e-5 * 86400; // in rad/day, expl. suppl., p 162

Swe.SwephData.LIGHTTIME_AUNIT = (499.0047838061/3600/24); // 8.3167 minutes (days), AA 2006 K6

/* node of ecliptic measured on ecliptic 2000 */
Swe.SwephData.SSY_PLANE_NODE_E2000 = 107.582569 * Swe.SwephData.DEGTORAD;
/* node of ecliptic measured on solar system rotation plane */
Swe.SwephData.SSY_PLANE_NODE = 107.58883388 * Swe.SwephData.DEGTORAD;
/* inclination of ecliptic against solar system rotation plane */
Swe.SwephData.SSY_PLANE_INCL = 1.578701 * Swe.SwephData.DEGTORAD;

Swe.SwephData.KM_S_TO_AU_CTY = 21.095;           // km/s to AU/century
Swe.SwephData.MOON_SPEED_INTV = 0.00005;         // 4.32 seconds (in days)
Swe.SwephData.PLAN_SPEED_INTV = 0.0001;          // 8.64 seconds (in days)
Swe.SwephData.MEAN_NODE_SPEED_INTV = 0.001;
Swe.SwephData.NODE_CALC_INTV = 0.0001;
Swe.SwephData.NODE_CALC_INTV_MOSH = 0.1;
Swe.SwephData.NUT_SPEED_INTV = 0.0001;
Swe.SwephData.DEFL_SPEED_INTV = 0.0000005;

Swe.SwephData.SE_LAPSE_RATE = 0.0065;  /* deg K / m, for refraction */


/*
* stuff exported from swemplan.c and swemmoon.c
* and constants used inside these functions.
************************************************************/

Swe.SwephData.STR = 4.8481368110953599359e-6;   // radians per arc second

/* dpsi and deps loaded for 100 years after 1962 */
Swe.SwephData.SWE_DATA_DPSI_DEPS = 36525;

Swe.SwephData.IS_PLANET = 0;
Swe.SwephData.IS_MOON = 1;
Swe.SwephData.IS_ANY_BODY = 2;
Swe.SwephData.IS_MAIN_ASTEROID = 3;

Swe.SwephData.DO_SAVE = true;
Swe.SwephData.NO_SAVE = false;

///////////////////////////////////////////////////////////////
// SURYA: /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Swe.SwephData.SURYA_MAX_LON_SPEED = 1.025;
Swe.SwephData.SURYA_MIN_LON_SPEED = 0.946;
Swe.SwephData.SURYA_MAX_LON_ACCEL = 0.000735;
Swe.SwephData.SURYA_MIN_LON_ACCEL = -0.000720;
Swe.SwephData.SURYA_MAX_TOPO_LON_SPEED = 1.04;
Swe.SwephData.SURYA_MIN_TOPO_LON_SPEED = 0.93;
Swe.SwephData.SURYA_MAX_TOPO_LON_ACCEL = 0.06;
Swe.SwephData.SURYA_MIN_TOPO_LON_ACCEL = -0.06;
Swe.SwephData.SURYA_MAX_HELIO_LON_SPEED = 0;
Swe.SwephData.SURYA_MIN_HELIO_LON_SPEED = 0;
Swe.SwephData.SURYA_MAX_HELIO_LON_ACCEL = 0;
Swe.SwephData.SURYA_MIN_HELIO_LON_ACCEL = 0;

Swe.SwephData.SURYA_MAX_LAT_SPEED = 0.0000620;
Swe.SwephData.SURYA_MIN_LAT_SPEED = -0.0000618;
Swe.SwephData.SURYA_MAX_LAT_ACCEL = 0.0000203;
Swe.SwephData.SURYA_MIN_LAT_ACCEL = -0.0000204;
Swe.SwephData.SURYA_MAX_TOPO_LAT_SPEED = 0.0066;
Swe.SwephData.SURYA_MIN_TOPO_LAT_SPEED = -0.0065;
Swe.SwephData.SURYA_MAX_TOPO_LAT_ACCEL = 0.025;
Swe.SwephData.SURYA_MIN_TOPO_LAT_ACCEL = -0.025;
Swe.SwephData.SURYA_MAX_HELIO_LAT_SPEED = 0;
Swe.SwephData.SURYA_MIN_HELIO_LAT_SPEED = 0;
Swe.SwephData.SURYA_MAX_HELIO_LAT_ACCEL = 0;
Swe.SwephData.SURYA_MIN_HELIO_LAT_ACCEL = 0;

Swe.SwephData.SURYA_MAX_DIST_SPEED = 0.000328;
Swe.SwephData.SURYA_MIN_DIST_SPEED = -0.000327;
Swe.SwephData.SURYA_MAX_DIST_ACCEL = 0.00000734;
Swe.SwephData.SURYA_MIN_DIST_ACCEL = -0.00000694;
Swe.SwephData.SURYA_MAX_TOPO_DIST_SPEED = 0.00059;
Swe.SwephData.SURYA_MIN_TOPO_DIST_SPEED = -0.00058;
Swe.SwephData.SURYA_MAX_TOPO_DIST_ACCEL = 0.00104;
Swe.SwephData.SURYA_MIN_TOPO_DIST_ACCEL = -0.0013;
Swe.SwephData.SURYA_MAX_HELIO_DIST_SPEED = 0;
Swe.SwephData.SURYA_MIN_HELIO_DIST_SPEED = 0;
Swe.SwephData.SURYA_MAX_HELIO_DIST_ACCEL = 0;
Swe.SwephData.SURYA_MIN_HELIO_DIST_ACCEL = 0;

// java Swetest -head -bj-3027215.5 -s... -n... -ejplde431.eph -edir./ephe -fPJadss -p0
Swe.SwephData.SURYA_MAX_RECT_SPEED = 1.1192891;
Swe.SwephData.SURYA_MIN_RECT_SPEED = 0.8716103;
Swe.SwephData.SURYA_MAX_RECT_ACCEL = 1./0.;
Swe.SwephData.SURYA_MIN_RECT_ACCEL = 1./0.;
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p0 -s0.7064 -fPJadss -n15511619 -topo0,0,50000 > sun-topo-0-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p0 -s0.7064 -fPJadss -n15511619 -topo11,0,0 > sun-topo-11-0-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p0 -s0.7064 -fPJadss -n15511619 -topo11,0,-6300000 > sun-topo-11-0--6300000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p0 -s0.7064 -fPJadss -n15511619 -topo11,89,0 > sun-topo-11-89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p0 -s0.7064 -fPJadss -n15511619 -topo11,-89,0 > sun-topo-11--89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p0 -s0.7064 -fPJadss -n15511619 -topo11,89,50000 > sun-topo-11-89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p0 -s0.7064 -fPJadss -n15511619 -topo11,0,50000 > sun-topo-11-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p0 -s0.7064 -fPJadss -n15511619 -topo11,-89,50000 > sun-topo-11--89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p0 -s0.7064 -fPJadss -n15511619 -topo179,0,50000 > sun-topo-179-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p0 -s0.7064 -fPJadss -n15511619 -topo-179,0,50000 > sun-topo--179-0-50000 &
// 0.8509551 .. 1.1416163 at -topo0,0,50000   <-- MIN
// 0.8511042 .. 1.1414601 at -topo11,0,0
// 0.8509861 .. 1.1415944 at -topo11,0,50000
// 0.8659616 .. 1.1246064 at -topo11,0,-6300000
// 0.8658840 .. 1.1246951 at -topo11,89,0
// 0.8658840 .. 1.1246951 at -topo11,-89,0
// 0.8658820 .. 1.1246974 at -topo11,89,50000
// 0.8658820 .. 1.1246974 at -topo11,-89,50000
// 0.8509695 .. 1.1416192 at -topo179,0,50000
// 0.8510149 .. 1.1416461 at -topo-179,0,50000  <-- MAX
Swe.SwephData.SURYA_MAX_TOPO_RECT_SPEED = 1.1416461;
Swe.SwephData.SURYA_MIN_TOPO_RECT_SPEED = 0.8509551;
Swe.SwephData.SURYA_MAX_TOPO_RECT_ACCEL = 1./0.;
Swe.SwephData.SURYA_MIN_TOPO_RECT_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.SURYA_MAX_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.SURYA_MIN_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.SURYA_MAX_HELIO_RECT_ACCEL = 1./0.;
Swe.SwephData.SURYA_MIN_HELIO_RECT_ACCEL = 1./0.;

Swe.SwephData.SURYA_MAX_DECL_SPEED = 0.4125450;
Swe.SwephData.SURYA_MIN_DECL_SPEED = -0.3970215;
Swe.SwephData.SURYA_MAX_DECL_ACCEL = 1./0.;
Swe.SwephData.SURYA_MIN_DECL_ACCEL = 1./0.;
// -0.4189250 .. 0.4127358 at -topo0,0,50000
// -0.4189254 .. 0.4127297 at -topo11,0,0
// -0.4189265 .. 0.4127323 at -topo11,0,50000 <-- MIN
// -0.4188348 .. 0.4125894 at -topo11,0,-6300000
// -0.4188344 .. 0.4125897 at -topo11,89,0
// -0.4188346 .. 0.4125903 at -topo11,-89,0
// -0.4188344 .. 0.4125897 at -topo11,89,50000
// -0.4188346 .. 0.4125903 at -topo11,-89,50000
// -0.4189235 .. 0.4128070 at -topo179,0,50000  <-- MAX
// -0.4189249 .. 0.4128064 at -topo-179,0,50000
Swe.SwephData.SURYA_MAX_TOPO_DECL_SPEED = 0.4128070;
Swe.SwephData.SURYA_MIN_TOPO_DECL_SPEED = -0.4189265;
Swe.SwephData.SURYA_MAX_TOPO_DECL_ACCEL = 1./0.;
Swe.SwephData.SURYA_MIN_TOPO_DECL_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.SURYA_MAX_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.SURYA_MIN_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.SURYA_MAX_HELIO_DECL_ACCEL = 1./0.;
Swe.SwephData.SURYA_MIN_HELIO_DECL_ACCEL = 1./0.;


///////////////////////////////////////////////////////////////
// CHANDRA: ///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Swe.SwephData.CHANDRA_MAX_LON_SPEED = 15.41;
Swe.SwephData.CHANDRA_MIN_LON_SPEED = 11.75;
Swe.SwephData.CHANDRA_MAX_LON_ACCEL = 0.522;
Swe.SwephData.CHANDRA_MIN_LON_ACCEL = -0.520;
Swe.SwephData.CHANDRA_MAX_TOPO_LON_SPEED = 22.0;
Swe.SwephData.CHANDRA_MIN_TOPO_LON_SPEED = 6.0;
Swe.SwephData.CHANDRA_MAX_TOPO_LON_ACCEL = 23.5;
Swe.SwephData.CHANDRA_MIN_TOPO_LON_ACCEL = -23.2;
Swe.SwephData.CHANDRA_MAX_HELIO_LON_SPEED = 1.0584;
Swe.SwephData.CHANDRA_MIN_HELIO_LON_SPEED = 0.9155;
Swe.SwephData.CHANDRA_MAX_HELIO_LON_ACCEL = 0.007875;
Swe.SwephData.CHANDRA_MIN_HELIO_LON_ACCEL = -0.007888;

Swe.SwephData.CHANDRA_MAX_LAT_SPEED = 1.44;
Swe.SwephData.CHANDRA_MIN_LAT_SPEED = -1.44;
Swe.SwephData.CHANDRA_MAX_LAT_ACCEL = 0.366;
Swe.SwephData.CHANDRA_MIN_LAT_ACCEL = -0.366;
Swe.SwephData.CHANDRA_MAX_TOPO_LAT_SPEED = 4.2;
Swe.SwephData.CHANDRA_MIN_TOPO_LAT_SPEED = -4.7;
Swe.SwephData.CHANDRA_MAX_TOPO_LAT_ACCEL = 12.5;
Swe.SwephData.CHANDRA_MIN_TOPO_LAT_ACCEL = -12.5;
Swe.SwephData.CHANDRA_MAX_HELIO_LAT_SPEED = 0.003415;
Swe.SwephData.CHANDRA_MIN_HELIO_LAT_SPEED = -0.0034187;
Swe.SwephData.CHANDRA_MAX_HELIO_LAT_ACCEL = 0.0008119;
Swe.SwephData.CHANDRA_MIN_HELIO_LAT_ACCEL = -0.0008069;

Swe.SwephData.CHANDRA_MAX_DIST_SPEED = 0.000044;
Swe.SwephData.CHANDRA_MIN_DIST_SPEED = -0.0000434;
Swe.SwephData.CHANDRA_MAX_DIST_ACCEL = 0.0000140;
Swe.SwephData.CHANDRA_MIN_DIST_ACCEL = -0.00000898;
Swe.SwephData.CHANDRA_MAX_TOPO_DIST_SPEED = 0.00030;
Swe.SwephData.CHANDRA_MIN_TOPO_DIST_SPEED = -0.00031;
Swe.SwephData.CHANDRA_MAX_TOPO_DIST_ACCEL = 0.00099;
Swe.SwephData.CHANDRA_MIN_TOPO_DIST_ACCEL = -0.00098;
Swe.SwephData.CHANDRA_MAX_HELIO_DIST_SPEED = 0.0008899;
Swe.SwephData.CHANDRA_MIN_HELIO_DIST_SPEED = -0.000889;
Swe.SwephData.CHANDRA_MAX_HELIO_DIST_ACCEL = 0.0001394;
Swe.SwephData.CHANDRA_MIN_HELIO_DIST_ACCEL = -0.00013959;

// time ./swetest -head -bj-3027215.5 -ejplde431.eph -edir./ephe -p1 -s0.7064 -fPJadss -n15511619 > moon_jpl
Swe.SwephData.CHANDRA_MAX_RECT_SPEED = 17.5652713;
Swe.SwephData.CHANDRA_MIN_RECT_SPEED = 10.2878798;
Swe.SwephData.CHANDRA_MAX_RECT_ACCEL = 1./0.;
Swe.SwephData.CHANDRA_MIN_RECT_ACCEL = 1./0.;
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p1 -s0.7064 -fPJadss -n15511619 -topo0,0,50000 > moon-topo-0-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p1 -s0.7064 -fPJadss -n15511619 -topo11,0,0 > moon-topo-11-0-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p1 -s0.7064 -fPJadss -n15511619 -topo11,0,50000 > moon-topo-11-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p1 -s0.7064 -fPJadss -n15511619 -topo11,0,-6300000 > moon-topo-11-0--6300000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p1 -s0.7064 -fPJadss -n15511619 -topo11,89,0 > moon-topo-11-89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p1 -s0.7064 -fPJadss -n15511619 -topo11,-89,0 > moon-topo-11--89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p1 -s0.7064 -fPJadss -n15511619 -topo11,89,50000 > moon-topo-11-89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p1 -s0.7064 -fPJadss -n15511619 -topo11,-89,50000 > moon-topo-11--89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p1 -s0.7064 -fPJadss -n15511619 -topo179,0,50000 > moon-topo-179-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p1 -s0.7064 -fPJadss -n15511619 -topo-179,0,50000 > moon-topo--179-0-50000 &
// 4.6573901 .. 24.4157988 at -topo0,0,50000
// 4.7015831 .. 24.3761631 at -topo11,0,0
// 4.6568738 .. 24.4289479 at -topo11,0,50000
// 10.2291999 .. 17.6134294 at -topo11,0,-6300000
// 10.2014613 .. 17.6484812 at -topo11,89,0
// 10.2014710 .. 17.6484522 at -topo11,-89,0
// 10.2007399 .. 17.6493925 at -topo11,89,50000
// 10.2007497 .. 17.6493633 at -topo11,-89,50000
// 4.6586466 .. 24.4699016 at -topo179,0,50000
// 4.6542540 .. 24.4751212 at -topo-179,0,50000 <-- MIN <-- MAX
Swe.SwephData.CHANDRA_MAX_TOPO_RECT_SPEED = 24.4751212;
Swe.SwephData.CHANDRA_MIN_TOPO_RECT_SPEED = 4.6542540;
Swe.SwephData.CHANDRA_MAX_TOPO_RECT_ACCEL = 1./0.;
Swe.SwephData.CHANDRA_MIN_TOPO_RECT_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.CHANDRA_MAX_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.CHANDRA_MIN_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.CHANDRA_MAX_HELIO_RECT_ACCEL = 1./0.;
Swe.SwephData.CHANDRA_MIN_HELIO_RECT_ACCEL = 1./0.;

Swe.SwephData.CHANDRA_MAX_DECL_SPEED = 7.5378600;
Swe.SwephData.CHANDRA_MIN_DECL_SPEED = -7.5244591;
Swe.SwephData.CHANDRA_MAX_DECL_ACCEL = 1./0.;
Swe.SwephData.CHANDRA_MIN_DECL_ACCEL = 1./0.;
// -8.2651440 .. 8.2303963 at -topo0,0,50000    <-- MIN
// -8.2470912 .. 8.2500578 at -topo11,0,0
// -8.2572387 .. 8.2607011 at -topo11,0,50000
// -7.5232524 .. 7.5360846 at -topo11,0,-6300000
// -7.5201675 .. 7.5316452 at -topo11,89,0
// -7.5218851 .. 7.5359995 at -topo11,-89,0
// -7.5201472 .. 7.5316180 at -topo11,89,50000
// -7.5218349 .. 7.5359673 at -topo11,-89,50000
// -8.2478077 .. 8.2804317 at -topo179,0,50000  <-- MAX
// -8.2523501 .. 8.2786299 at -topo-179,0,50000
Swe.SwephData.CHANDRA_MAX_TOPO_DECL_SPEED = 8.2804317;
Swe.SwephData.CHANDRA_MIN_TOPO_DECL_SPEED = -8.2651440;
Swe.SwephData.CHANDRA_MAX_TOPO_DECL_ACCEL = 1./0.;
Swe.SwephData.CHANDRA_MIN_TOPO_DECL_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.CHANDRA_MAX_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.CHANDRA_MIN_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.CHANDRA_MAX_HELIO_DECL_ACCEL = 1./0.;
Swe.SwephData.CHANDRA_MIN_HELIO_DECL_ACCEL = 1./0.;



///////////////////////////////////////////////////////////////
// BUDHA: /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Swe.SwephData.BUDHA_MAX_LON_SPEED = 2.23;
Swe.SwephData.BUDHA_MIN_LON_SPEED = -1.40;
Swe.SwephData.BUDHA_MAX_LON_ACCEL = 0.20;
Swe.SwephData.BUDHA_MIN_LON_ACCEL = -0.199;
Swe.SwephData.BUDHA_MAX_TOPO_LON_SPEED = 2.3;
Swe.SwephData.BUDHA_MIN_TOPO_LON_SPEED = -1.49;
Swe.SwephData.BUDHA_MAX_TOPO_LON_ACCEL = 0.281;
Swe.SwephData.BUDHA_MIN_TOPO_LON_ACCEL = -0.282;
Swe.SwephData.BUDHA_MAX_HELIO_LON_SPEED = 6.358;
Swe.SwephData.BUDHA_MIN_HELIO_LON_SPEED = 2.743;
Swe.SwephData.BUDHA_MAX_HELIO_LON_ACCEL = 0.1547;
Swe.SwephData.BUDHA_MIN_HELIO_LON_ACCEL = -0.1654;

Swe.SwephData.BUDHA_MAX_LAT_SPEED = 0.35;
Swe.SwephData.BUDHA_MIN_LAT_SPEED = -0.31;
Swe.SwephData.BUDHA_MAX_LAT_ACCEL = 0.036;
Swe.SwephData.BUDHA_MIN_LAT_ACCEL = -0.044;
Swe.SwephData.BUDHA_MAX_TOPO_LAT_SPEED = 0.37;
Swe.SwephData.BUDHA_MIN_TOPO_LAT_SPEED = -0.34;
Swe.SwephData.BUDHA_MAX_TOPO_LAT_ACCEL = 0.078;
Swe.SwephData.BUDHA_MIN_TOPO_LAT_ACCEL = -0.10;
Swe.SwephData.BUDHA_MAX_HELIO_LAT_SPEED = 0.7557;
Swe.SwephData.BUDHA_MIN_HELIO_LAT_SPEED = -0.4114;
Swe.SwephData.BUDHA_MAX_HELIO_LAT_ACCEL = 0.05938;
Swe.SwephData.BUDHA_MIN_HELIO_LAT_ACCEL = -0.07986;

Swe.SwephData.BUDHA_MAX_DIST_SPEED = 0.0286;
Swe.SwephData.BUDHA_MIN_DIST_SPEED = -0.0285;
Swe.SwephData.BUDHA_MAX_DIST_ACCEL = 0.00325;
Swe.SwephData.BUDHA_MIN_DIST_ACCEL = -0.00150;
Swe.SwephData.BUDHA_MAX_TOPO_DIST_SPEED = 0.031;
Swe.SwephData.BUDHA_MIN_TOPO_DIST_SPEED = -0.031;
Swe.SwephData.BUDHA_MAX_TOPO_DIST_ACCEL = 0.0045;
Swe.SwephData.BUDHA_MIN_TOPO_DIST_ACCEL = -0.0026;
Swe.SwephData.BUDHA_MAX_HELIO_DIST_SPEED = 0.005831;
Swe.SwephData.BUDHA_MIN_HELIO_DIST_SPEED = -0.005831;
Swe.SwephData.BUDHA_MAX_HELIO_DIST_ACCEL = 0.00064693;
Swe.SwephData.BUDHA_MIN_HELIO_DIST_ACCEL = -0.0002801;

// time ./swetest -head -bj-3027215.5 -ejplde431.eph -edir./ephe -p2 -s0.7064 -fPJadss -n15511619 > mercury_jpl
Swe.SwephData.BUDHA_MAX_RECT_SPEED = 2.4204481;
Swe.SwephData.BUDHA_MIN_RECT_SPEED = -1.5488386;
Swe.SwephData.BUDHA_MAX_RECT_ACCEL = 1./0.;
Swe.SwephData.BUDHA_MIN_RECT_ACCEL = 1./0.;
// -1.5742275 .. 2.4331242 at -topo0,0,50000    MIN(2)
// -1.5742011 .. 2.4333455 at -topo11,0,0   MIN(3)  MAX(3)
// -1.5743958 .. 2.4334422 at -topo11,0,50000 MIN(1)  MAX(2)  <--
// -1.5501068 .. 2.4216002 at -topo11,0,-6300000
// -1.5499773 .. 2.4216610 at -topo11,89,0
// -1.5499775 .. 2.4216610 at -topo11,-89,0
// -1.5499740 .. 2.4216626 at -topo11,89,50000
// -1.5499741 .. 2.4216626 at -topo11,-89,50000
// -1.5738373 .. 2.4333983 at -topo179,0,50000    MAX(4)
// -1.5741371 .. 2.4334617 at -topo-179,0,50000 MIN(4)  MAX(1)
Swe.SwephData.BUDHA_MAX_TOPO_RECT_SPEED = 2.4334617;
Swe.SwephData.BUDHA_MIN_TOPO_RECT_SPEED = -1.5743958;
Swe.SwephData.BUDHA_MAX_TOPO_RECT_ACCEL = 1./0.;
Swe.SwephData.BUDHA_MIN_TOPO_RECT_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.BUDHA_MAX_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.BUDHA_MIN_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.BUDHA_MAX_HELIO_RECT_ACCEL = 1./0.;
Swe.SwephData.BUDHA_MIN_HELIO_RECT_ACCEL = 1./0.;

Swe.SwephData.BUDHA_MAX_DECL_SPEED = 1.0505545;
Swe.SwephData.BUDHA_MIN_DECL_SPEED = -0.8200447;
Swe.SwephData.BUDHA_MAX_DECL_ACCEL = 1./0.;
Swe.SwephData.BUDHA_MIN_DECL_ACCEL = 1./0.;
// time ./swetest -head -bj-3027215.5 -ejplde431.eph -edir./ephe -p2 -s0.7064 -fPJadss -n15511619 -topo0,0,50000 > mercury-topo-0-0-50000
// sort -n -k+6 mercury-topo-0-0-50000 | tail -3; sort -n -k+6 mercury-topo-0-0-50000 | head -6

// -0.8211451 .. 1.0518265 at -topo0,0,50000    MIN(3)
// -0.8211233 .. 1.0518169 at -topo11,0,0   MIN(2)  MAX(3)
// -0.8211220 .. 1.0518169 at -topo11,0,50000   MIN(1)  MAX(3)  <--
// -0.8212869 .. 1.0518181 at -topo11,0,-6300000
// -0.8212894 .. 1.0518181 at -topo11,89,0
// -0.8212826 .. 1.0518182 at -topo11,-89,0   MIN(4)
// -0.8212894 .. 1.0518181 at -topo11,89,50000
// -0.8212826 .. 1.0518182 at -topo11,-89,50000 MIN(4)
// -0.8214798 .. 1.0518089 at -topo179,0,50000      MAX(1)
// -0.8214764 .. 1.0518107 at -topo-179,0,50000   MAX(2)
Swe.SwephData.BUDHA_MAX_TOPO_DECL_SPEED = 1.0518265;
Swe.SwephData.BUDHA_MIN_TOPO_DECL_SPEED = -0.8214798;
Swe.SwephData.BUDHA_MAX_TOPO_DECL_ACCEL = 1./0.;
Swe.SwephData.BUDHA_MIN_TOPO_DECL_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.BUDHA_MAX_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.BUDHA_MIN_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.BUDHA_MAX_HELIO_DECL_ACCEL = 1./0.;
Swe.SwephData.BUDHA_MIN_HELIO_DECL_ACCEL = 1./0.;



///////////////////////////////////////////////////////////////
// SHUKRA: ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Swe.SwephData.SHUKRA_MAX_LON_SPEED = 1.266;
Swe.SwephData.SHUKRA_MIN_LON_SPEED = -1.22;
Swe.SwephData.SHUKRA_MAX_LON_ACCEL = 0.0427;
Swe.SwephData.SHUKRA_MIN_LON_ACCEL = -0.0432;
Swe.SwephData.SHUKRA_MAX_TOPO_LON_SPEED = 1.28;
Swe.SwephData.SHUKRA_MIN_TOPO_LON_SPEED = -0.70;
Swe.SwephData.SHUKRA_MAX_TOPO_LON_ACCEL = 0.246;
Swe.SwephData.SHUKRA_MIN_TOPO_LON_ACCEL = -0.245;
Swe.SwephData.SHUKRA_MAX_HELIO_LON_SPEED = 1.635;
Swe.SwephData.SHUKRA_MIN_HELIO_LON_SPEED = 1.565;
Swe.SwephData.SHUKRA_MAX_HELIO_LON_ACCEL = 0.0009600;
Swe.SwephData.SHUKRA_MIN_HELIO_LON_ACCEL = -0.001066;

Swe.SwephData.SHUKRA_MAX_LAT_SPEED = 0.264;
Swe.SwephData.SHUKRA_MIN_LAT_SPEED = -0.251;
Swe.SwephData.SHUKRA_MAX_LAT_ACCEL = 0.0167;
Swe.SwephData.SHUKRA_MIN_LAT_ACCEL = -0.0170;
Swe.SwephData.SHUKRA_MAX_TOPO_LAT_SPEED = 0.29;
Swe.SwephData.SHUKRA_MIN_TOPO_LAT_SPEED = -0.27;
Swe.SwephData.SHUKRA_MAX_TOPO_LAT_ACCEL = 0.13;
Swe.SwephData.SHUKRA_MIN_TOPO_LAT_ACCEL = -0.113;
Swe.SwephData.SHUKRA_MAX_HELIO_LAT_SPEED = 0.096175;
Swe.SwephData.SHUKRA_MIN_HELIO_LAT_SPEED = -0.09549;
Swe.SwephData.SHUKRA_MAX_HELIO_LAT_ACCEL = 0.002635;
Swe.SwephData.SHUKRA_MIN_HELIO_LAT_ACCEL = -0.00275;

Swe.SwephData.SHUKRA_MAX_DIST_SPEED = 0.00806;
Swe.SwephData.SHUKRA_MIN_DIST_SPEED = -0.0083;
Swe.SwephData.SHUKRA_MAX_DIST_ACCEL = 0.000316;
Swe.SwephData.SHUKRA_MIN_DIST_ACCEL = -0.0000625;
Swe.SwephData.SHUKRA_MAX_TOPO_DIST_SPEED = 0.0084;
Swe.SwephData.SHUKRA_MIN_TOPO_DIST_SPEED = -0.0086;
Swe.SwephData.SHUKRA_MAX_TOPO_DIST_ACCEL = 0.0015;
Swe.SwephData.SHUKRA_MIN_TOPO_DIST_ACCEL = -0.00108;
Swe.SwephData.SHUKRA_MAX_HELIO_DIST_SPEED = 0.0002173;
Swe.SwephData.SHUKRA_MIN_HELIO_DIST_SPEED = -0.0002172;
Swe.SwephData.SHUKRA_MAX_HELIO_DIST_ACCEL = 0.000006264;
Swe.SwephData.SHUKRA_MIN_HELIO_DIST_ACCEL = -0.000005947;

// time ./swetest -head -bj-3027215.5 -ejplde431.eph -edir./ephe -p3 -s0.7064 -fPJadss -n15511619 > venus_jpl
Swe.SwephData.SHUKRA_MAX_RECT_SPEED = 1.4037654;
Swe.SwephData.SHUKRA_MIN_RECT_SPEED = -0.7297440;
Swe.SwephData.SHUKRA_MAX_RECT_ACCEL = 1./0.;
Swe.SwephData.SHUKRA_MIN_RECT_ACCEL = 1./0.;
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p3 -s0.7064 -fPJadss -n15511619 -topo0,0,50000 > venus-topo-0-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p3 -s0.7064 -fPJadss -n15511619 -topo11,0,0 > venus-topo-11-0-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p3 -s0.7064 -fPJadss -n15511619 -topo11,0,50000 > venus-topo-11-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p3 -s0.7064 -fPJadss -n15511619 -topo11,0,-6300000 > venus-topo-11-0--6300000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p3 -s0.7064 -fPJadss -n15511619 -topo11,89,0 > venus-topo-11-89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p3 -s0.7064 -fPJadss -n15511619 -topo11,-89,0 > venus-topo-11--89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p3 -s0.7064 -fPJadss -n15511619 -topo11,89,50000 > venus-topo-11-89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p3 -s0.7064 -fPJadss -n15511619 -topo11,-89,50000 > venus-topo-11--89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p3 -s0.7064 -fPJadss -n15511619 -topo179,0,50000 > venus-topo-179-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p3 -s0.7064 -fPJadss -n15511619 -topo-179,0,50000 > venus-topo--179-0-50000 &
// -0.7922448 .. 1.4149243 at -topo0,0,50000
// -0.7912426 .. 1.4148820 at -topo11,0,0
// -0.7917265 .. 1.4149614 at -topo11,0,50000 <-- MAX
// -0.7304503 .. 1.4050099 at -topo11,0,-6300000
// -0.7307662 .. 1.4050596 at -topo11,89,0
// -0.7307661 .. 1.4050596 at -topo11,-89,0
// -0.7307744 .. 1.4050609 at -topo11,89,50000
// -0.7307743 .. 1.4050609 at -topo11,-89,50000
// -0.7923691 .. 1.4147885 at -topo179,0,50000
// -0.7927519 .. 1.4148072 at -topo-179,0,50000 <-- MIN
Swe.SwephData.SHUKRA_MAX_TOPO_RECT_SPEED = 1.4149614;
Swe.SwephData.SHUKRA_MIN_TOPO_RECT_SPEED = -0.7927519;
Swe.SwephData.SHUKRA_MAX_TOPO_RECT_ACCEL = 1./0.;
Swe.SwephData.SHUKRA_MIN_TOPO_RECT_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.SHUKRA_MAX_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.SHUKRA_MIN_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.SHUKRA_MAX_HELIO_RECT_ACCEL = 1./0.;
Swe.SwephData.SHUKRA_MIN_HELIO_RECT_ACCEL = 1./0.;

Swe.SwephData.SHUKRA_MAX_DECL_SPEED = 0.5540340;
Swe.SwephData.SHUKRA_MIN_DECL_SPEED = -0.5498661;
Swe.SwephData.SHUKRA_MAX_DECL_ACCEL = 1./0.;
Swe.SwephData.SHUKRA_MIN_DECL_ACCEL = 1./0.;
// -0.5513874 .. 0.5551877 at -topo0,0,50000    <-- MAX
// -0.5513890 .. 0.5551763 at -topo11,0,0
// -0.5513894 .. 0.5551766 at -topo11,0,50000 <-- MIN
// -0.5513546 .. 0.5551627 at -topo11,0,-6300000
// -0.5513562 .. 0.5551689 at -topo11,89,0
// -0.5513531 .. 0.5551568 at -topo11,-89,0
// -0.5513562 .. 0.5551689 at -topo11,89,50000
// -0.5513531 .. 0.5551567 at -topo11,-89,50000
// -0.5513435 .. 0.5551473 at -topo179,0,50000
// -0.5513430 .. 0.5551476 at -topo-179,0,50000
Swe.SwephData.SHUKRA_MAX_TOPO_DECL_SPEED = 0.5551877;
Swe.SwephData.SHUKRA_MIN_TOPO_DECL_SPEED = -0.5513894;
Swe.SwephData.SHUKRA_MAX_TOPO_DECL_ACCEL = 1./0.;
Swe.SwephData.SHUKRA_MIN_TOPO_DECL_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.SHUKRA_MAX_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.SHUKRA_MIN_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.SHUKRA_MAX_HELIO_DECL_ACCEL = 1./0.;
Swe.SwephData.SHUKRA_MIN_HELIO_DECL_ACCEL = 1./0.;



///////////////////////////////////////////////////////////////
// MANGALA: ///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Swe.SwephData.MANGALA_MAX_LON_SPEED = 0.794;
Swe.SwephData.MANGALA_MIN_LON_SPEED = -0.720;
Swe.SwephData.MANGALA_MAX_LON_ACCEL = 0.0146;
Swe.SwephData.MANGALA_MIN_LON_ACCEL = -0.0152;
Swe.SwephData.MANGALA_MAX_TOPO_LON_SPEED = 0.81;
Swe.SwephData.MANGALA_MIN_TOPO_LON_SPEED = -0.425;
Swe.SwephData.MANGALA_MAX_TOPO_LON_ACCEL = 0.16;
Swe.SwephData.MANGALA_MIN_TOPO_LON_ACCEL = -0.159;
Swe.SwephData.MANGALA_MAX_HELIO_LON_SPEED = 0.6390;
Swe.SwephData.MANGALA_MIN_HELIO_LON_SPEED = 0.4337;
Swe.SwephData.MANGALA_MAX_HELIO_LON_ACCEL = 0.0010154;
Swe.SwephData.MANGALA_MIN_HELIO_LON_ACCEL = -0.0010040;

Swe.SwephData.MANGALA_MAX_LAT_SPEED = 0.084;
Swe.SwephData.MANGALA_MIN_LAT_SPEED = -0.0839;
Swe.SwephData.MANGALA_MAX_LAT_ACCEL = 0.0035;
Swe.SwephData.MANGALA_MIN_LAT_ACCEL = -0.00209;
Swe.SwephData.MANGALA_MAX_TOPO_LAT_SPEED = 0.095;
Swe.SwephData.MANGALA_MIN_TOPO_LAT_SPEED = -0.099;
Swe.SwephData.MANGALA_MAX_TOPO_LAT_ACCEL = 0.0805;
Swe.SwephData.MANGALA_MIN_TOPO_LAT_ACCEL = -0.074;
Swe.SwephData.MANGALA_MAX_HELIO_LAT_SPEED = 0.01994;
Swe.SwephData.MANGALA_MIN_HELIO_LAT_SPEED = -0.02097;
Swe.SwephData.MANGALA_MAX_HELIO_LAT_ACCEL = 0.00023610;
Swe.SwephData.MANGALA_MIN_HELIO_LAT_ACCEL = -0.0001698;

Swe.SwephData.MANGALA_MAX_DIST_SPEED = 0.0101;
Swe.SwephData.MANGALA_MIN_DIST_SPEED = -0.01028;
Swe.SwephData.MANGALA_MAX_DIST_ACCEL = 0.000234;
Swe.SwephData.MANGALA_MIN_DIST_ACCEL = -0.0000695;
Swe.SwephData.MANGALA_MAX_TOPO_DIST_SPEED = 0.0103;
Swe.SwephData.MANGALA_MIN_TOPO_DIST_SPEED = -0.0105;
Swe.SwephData.MANGALA_MAX_TOPO_DIST_ACCEL = 0.00123;
Swe.SwephData.MANGALA_MIN_TOPO_DIST_ACCEL = -0.0011;
Swe.SwephData.MANGALA_MAX_HELIO_DIST_SPEED = 0.0013516;
Swe.SwephData.MANGALA_MIN_HELIO_DIST_SPEED = -0.0013516;
Swe.SwephData.MANGALA_MAX_HELIO_DIST_ACCEL = 0.000015148;
Swe.SwephData.MANGALA_MIN_HELIO_DIST_ACCEL = -0.000010287;

// time ./swetest -head -bj-3027215.5 -ejplde431.eph -edir./ephe -p4 -s0.7064 -fPJadss -n15511619 > mars_jpl
Swe.SwephData.MANGALA_MAX_RECT_SPEED = 0.8706997;
Swe.SwephData.MANGALA_MIN_RECT_SPEED = -0.4557325;
Swe.SwephData.MANGALA_MAX_RECT_ACCEL = 1./0.;
Swe.SwephData.MANGALA_MIN_RECT_ACCEL = 1./0.;
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p4 -s0.7064 -fPJadss -n15511619 -topo0,0,50000 > mars-topo-0-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p4 -s0.7064 -fPJadss -n15511619 -topo11,0,0 > mars-topo-11-0-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p4 -s0.7064 -fPJadss -n15511619 -topo11,0,50000 > mars-topo-11-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p4 -s0.7064 -fPJadss -n15511619 -topo11,0,-6300000 > mars-topo-11-0--6300000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p4 -s0.7064 -fPJadss -n15511619 -topo11,89,0 > mars-topo-11-89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p4 -s0.7064 -fPJadss -n15511619 -topo11,-89,0 > mars-topo-11--89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p4 -s0.7064 -fPJadss -n15511619 -topo11,89,50000 > mars-topo-11-89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p4 -s0.7064 -fPJadss -n15511619 -topo11,-89,50000 > mars-topo-11--89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p4 -s0.7064 -fPJadss -n15511619 -topo179,0,50000 > mars-topo-179-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p4 -s0.7064 -fPJadss -n15511619 -topo-179,0,50000 > mars-topo--179-0-50000 &
// -0.4842397 .. 0.8803327 at -topo0,0,50000    <-- MAX
// -0.4835498 .. 0.8801316 at -topo11,0,0
// -0.4837636 .. 0.8801872 at -topo11,0,50000
// -0.4570783 .. 0.8733273 at -topo11,0,-6300000
// -0.4571120 .. 0.8733617 at -topo11,89,0
// -0.4571120 .. 0.8733617 at -topo11,-89,0
// -0.4571133 .. 0.8733626 at -topo11,89,50000
// -0.4571132 .. 0.8733626 at -topo11,-89,50000
// -0.4843882 .. 0.8800615 at -topo179,0,50000
// -0.4843898 .. 0.8800073 at -topo-179,0,50000 <-- MIN
Swe.SwephData.MANGALA_MAX_TOPO_RECT_SPEED = 0.8803327;
Swe.SwephData.MANGALA_MIN_TOPO_RECT_SPEED = -0.4843898;
Swe.SwephData.MANGALA_MAX_TOPO_RECT_ACCEL = 1./0.;
Swe.SwephData.MANGALA_MIN_TOPO_RECT_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.MANGALA_MAX_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.MANGALA_MIN_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.MANGALA_MAX_HELIO_RECT_ACCEL = 1./0.;
Swe.SwephData.MANGALA_MIN_HELIO_RECT_ACCEL = 1./0.;

Swe.SwephData.MANGALA_MAX_DECL_SPEED = 0.3208319;
Swe.SwephData.MANGALA_MIN_DECL_SPEED = -0.3337168;
Swe.SwephData.MANGALA_MAX_DECL_ACCEL = 1./0.;
Swe.SwephData.MANGALA_MIN_DECL_ACCEL = 1./0.;
// -0.3359842 .. 0.3225565 at -topo0,0,50000    <-- MIN
// -0.3359780 .. 0.3225492 at -topo11,0,0
// -0.3359780 .. 0.3225501 at -topo11,0,50000
// -0.3359714 .. 0.3224426 at -topo11,0,-6300000
// -0.3359715 .. 0.3224438 at -topo11,89,0
// -0.3359714 .. 0.3224412 at -topo11,-89,0
// -0.3359715 .. 0.3224438 at -topo11,89,50000
// -0.3359714 .. 0.3224412 at -topo11,-89,50000
// -0.3359696 .. 0.3226173 at -topo179,0,50000  <-- MAX
// -0.3359694 .. 0.3226168 at -topo-179,0,50000
Swe.SwephData.MANGALA_MAX_TOPO_DECL_SPEED = 0.3226173;
Swe.SwephData.MANGALA_MIN_TOPO_DECL_SPEED = -0.3359842;
Swe.SwephData.MANGALA_MAX_TOPO_DECL_ACCEL = 1./0.;
Swe.SwephData.MANGALA_MIN_TOPO_DECL_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.MANGALA_MAX_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.MANGALA_MIN_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.MANGALA_MAX_HELIO_DECL_ACCEL = 1./0.;
Swe.SwephData.MANGALA_MIN_HELIO_DECL_ACCEL = 1./0.;



///////////////////////////////////////////////////////////////
// GURU: //////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Swe.SwephData.GURU_MAX_LON_SPEED = 0.244;
Swe.SwephData.GURU_MIN_LON_SPEED = -0.1369;
Swe.SwephData.GURU_MAX_LON_ACCEL = 0.00354;
Swe.SwephData.GURU_MIN_LON_ACCEL = -0.00341;
Swe.SwephData.GURU_MAX_TOPO_LON_SPEED = 0.247;
Swe.SwephData.GURU_MIN_TOPO_LON_SPEED = -0.1405;
Swe.SwephData.GURU_MAX_TOPO_LON_ACCEL = 0.0167;
Swe.SwephData.GURU_MIN_TOPO_LON_ACCEL = -0.0167;
Swe.SwephData.GURU_MAX_HELIO_LON_SPEED = 0.09287;
Swe.SwephData.GURU_MIN_HELIO_LON_SPEED = 0.074689;
Swe.SwephData.GURU_MAX_HELIO_LON_ACCEL = 0.000036229;
Swe.SwephData.GURU_MIN_HELIO_LON_ACCEL = -0.000036650;

Swe.SwephData.GURU_MAX_LAT_SPEED = 0.0063;
Swe.SwephData.GURU_MIN_LAT_SPEED = -0.0062;
Swe.SwephData.GURU_MAX_LAT_ACCEL = 0.000164;
Swe.SwephData.GURU_MIN_LAT_ACCEL = -0.000144;
Swe.SwephData.GURU_MAX_TOPO_LAT_SPEED = 0.0074;
Swe.SwephData.GURU_MIN_TOPO_LAT_SPEED = -0.0074;
Swe.SwephData.GURU_MAX_TOPO_LAT_ACCEL = 0.0064;
Swe.SwephData.GURU_MIN_TOPO_LAT_ACCEL = -0.00601;
Swe.SwephData.GURU_MAX_HELIO_LAT_SPEED = 0.0024277;
Swe.SwephData.GURU_MIN_HELIO_LAT_SPEED = -0.002620;
Swe.SwephData.GURU_MAX_HELIO_LAT_ACCEL = 0.000013982;
Swe.SwephData.GURU_MIN_HELIO_LAT_ACCEL = -0.000013189;

Swe.SwephData.GURU_MAX_DIST_SPEED = 0.0163;
Swe.SwephData.GURU_MIN_DIST_SPEED = -0.0164;
Swe.SwephData.GURU_MAX_DIST_ACCEL = 0.000325; // ???
Swe.SwephData.GURU_MIN_DIST_ACCEL = -0.000225;
Swe.SwephData.GURU_MAX_TOPO_DIST_SPEED = 0.0165;
Swe.SwephData.GURU_MIN_TOPO_DIST_SPEED = -0.0166;
Swe.SwephData.GURU_MAX_TOPO_DIST_ACCEL = 0.00133; // ???
Swe.SwephData.GURU_MIN_TOPO_DIST_ACCEL = -0.00122;
Swe.SwephData.GURU_MAX_HELIO_DIST_SPEED = 0.00040998;
Swe.SwephData.GURU_MIN_HELIO_DIST_SPEED = -0.00040970;
Swe.SwephData.GURU_MAX_HELIO_DIST_ACCEL = 0.00000077866;
Swe.SwephData.GURU_MIN_HELIO_DIST_ACCEL = -0.0000006786;

// time ./swetest -head -bj-3027215.5 -ejplde431.eph -edir./ephe -p5 -s0.7064 -fPJadss -n15511619 > jupiter_jpl
Swe.SwephData.GURU_MAX_RECT_SPEED = 0.2659874;
Swe.SwephData.GURU_MIN_RECT_SPEED = -0.1530986;
Swe.SwephData.GURU_MAX_RECT_ACCEL = 1./0.;
Swe.SwephData.GURU_MIN_RECT_ACCEL = 1./0.;
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p5 -s0.7064 -fPJadss -n15511619 -topo0,0,50000 > jupiter-topo-0-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p5 -s0.7064 -fPJadss -n15511619 -topo11,0,0 > jupiter-topo-11-0-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p5 -s0.7064 -fPJadss -n15511619 -topo11,0,50000 > jupiter-topo-11-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p5 -s0.7064 -fPJadss -n15511619 -topo11,0,-6300000 > jupiter-topo-11-0--6300000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p5 -s0.7064 -fPJadss -n15511619 -topo11,89,0 > jupiter-topo-11-89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p5 -s0.7064 -fPJadss -n15511619 -topo11,-89,0 > jupiter-topo-11--89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p5 -s0.7064 -fPJadss -n15511619 -topo11,89,50000 > jupiter-topo-11-89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p5 -s0.7064 -fPJadss -n15511619 -topo11,-89,50000 > jupiter-topo-11--89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p5 -s0.7064 -fPJadss -n15511619 -topo179,0,50000 > jupiter-topo-179-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p5 -s0.7064 -fPJadss -n15511619 -topo-179,0,50000 > jupiter-topo--179-0-50000 &
// -0.1728654 .. 0.2749562 at -topo0,0,50000
// -0.1729813 .. 0.2750843 at -topo11,0,0
// -0.1730138 .. 0.2751051 at -topo11,0,50000 <-- MAX
// -0.1697955 .. 0.2724612 at -topo11,0,-6300000
// -0.1697963 .. 0.2724751 at -topo11,89,0
// -0.1697962 .. 0.2724751 at -topo11,-89,0
// -0.1697963 .. 0.2724755 at -topo11,89,50000
// -0.1697962 .. 0.2724755 at -topo11,-89,50000
// -0.1730639 .. 0.2745095 at -topo179,0,50000
// -0.1731234 .. 0.2744408 at -topo-179,0,50000 <-- MIN
Swe.SwephData.GURU_MAX_TOPO_RECT_SPEED = 0.2751051;
Swe.SwephData.GURU_MIN_TOPO_RECT_SPEED = -0.1731234;
Swe.SwephData.GURU_MAX_TOPO_RECT_ACCEL = 1./0.;
Swe.SwephData.GURU_MIN_TOPO_RECT_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.GURU_MAX_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.GURU_MIN_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.GURU_MAX_HELIO_RECT_ACCEL = 1./0.;
Swe.SwephData.GURU_MIN_HELIO_RECT_ACCEL = 1./0.;

Swe.SwephData.GURU_MAX_DECL_SPEED = 0.0967245;
Swe.SwephData.GURU_MIN_DECL_SPEED = -0.0990172;
Swe.SwephData.GURU_MAX_DECL_ACCEL = 1./0.;
Swe.SwephData.GURU_MIN_DECL_ACCEL = 1./0.;
// -0.1051247 .. 0.1025999 at -topo0,0,50000
// -0.1051229 .. 0.1025969 at -topo11,0,0
// -0.1051228 .. 0.1025974 at -topo11,0,50000
// -0.1051358 .. 0.1025432 at -topo11,0,-6300000
// -0.1051357 .. 0.1025436 at -topo11,89,0
// -0.1051357 .. 0.1025434 at -topo11,-89,0
// -0.1051357 .. 0.1025436 at -topo11,89,50000
// -0.1051357 .. 0.1025434 at -topo11,-89,50000
// -0.1051470 .. 0.1026345 at -topo179,0,50000  <-- MAX
// -0.1051474 .. 0.1026331 at -topo-179,0,50000 <-- MIN
Swe.SwephData.GURU_MAX_TOPO_DECL_SPEED = 0.1026345;
Swe.SwephData.GURU_MIN_TOPO_DECL_SPEED = -0.1051474;
Swe.SwephData.GURU_MAX_TOPO_DECL_ACCEL = 1./0.;
Swe.SwephData.GURU_MIN_TOPO_DECL_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.GURU_MAX_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.GURU_MIN_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.GURU_MAX_HELIO_DECL_ACCEL = 1./0.;
Swe.SwephData.GURU_MIN_HELIO_DECL_ACCEL = 1./0.;



///////////////////////////////////////////////////////////////
// SHANI: /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Swe.SwephData.SHANI_MAX_LON_SPEED = 0.13404;
Swe.SwephData.SHANI_MIN_LON_SPEED = -0.084;
Swe.SwephData.SHANI_MAX_LON_ACCEL = 0.00199;
Swe.SwephData.SHANI_MIN_LON_ACCEL = -0.00195;
Swe.SwephData.SHANI_MAX_TOPO_LON_SPEED = 0.134;
Swe.SwephData.SHANI_MIN_TOPO_LON_SPEED = -0.0855;
Swe.SwephData.SHANI_MAX_TOPO_LON_ACCEL = 0.0086;
Swe.SwephData.SHANI_MIN_TOPO_LON_ACCEL = -0.00864;
Swe.SwephData.SHANI_MAX_HELIO_LON_SPEED = 0.03929;
Swe.SwephData.SHANI_MIN_HELIO_LON_SPEED = 0.028729;
Swe.SwephData.SHANI_MAX_HELIO_LON_ACCEL = 0.000026497;
Swe.SwephData.SHANI_MIN_HELIO_LON_ACCEL = -0.000026590;

Swe.SwephData.SHANI_MAX_LAT_SPEED = 0.0055;
Swe.SwephData.SHANI_MIN_LAT_SPEED = -0.0054;
Swe.SwephData.SHANI_MAX_LAT_ACCEL = 0.000123;
Swe.SwephData.SHANI_MIN_LAT_ACCEL = -0.000104;
Swe.SwephData.SHANI_MAX_TOPO_LAT_SPEED = 0.006;
Swe.SwephData.SHANI_MIN_TOPO_LAT_SPEED = -0.0059;
Swe.SwephData.SHANI_MAX_TOPO_LAT_ACCEL = 0.0032;
Swe.SwephData.SHANI_MIN_TOPO_LAT_ACCEL = -0.00301;
Swe.SwephData.SHANI_MAX_HELIO_LAT_SPEED = 0.0016789;
Swe.SwephData.SHANI_MIN_HELIO_LAT_SPEED = -0.001653;
Swe.SwephData.SHANI_MAX_HELIO_LAT_ACCEL = 0.00001127;
Swe.SwephData.SHANI_MIN_HELIO_LAT_ACCEL = -0.000011128;

Swe.SwephData.SHANI_MAX_DIST_SPEED = 0.0168;
Swe.SwephData.SHANI_MIN_DIST_SPEED = -0.0169;
Swe.SwephData.SHANI_MAX_DIST_ACCEL = 0.000322;
Swe.SwephData.SHANI_MIN_DIST_ACCEL = -0.00027;
Swe.SwephData.SHANI_MAX_TOPO_DIST_SPEED = 0.017;
Swe.SwephData.SHANI_MIN_TOPO_DIST_SPEED = -0.01702;
Swe.SwephData.SHANI_MAX_TOPO_DIST_ACCEL = 0.00133;
Swe.SwephData.SHANI_MIN_TOPO_DIST_ACCEL = -0.00127;
Swe.SwephData.SHANI_MAX_HELIO_DIST_SPEED = 0.00043914;
Swe.SwephData.SHANI_MIN_HELIO_DIST_SPEED = -0.00044091;
Swe.SwephData.SHANI_MAX_HELIO_DIST_ACCEL = 0.00000043248;
Swe.SwephData.SHANI_MIN_HELIO_DIST_ACCEL = -0.00000041039;

// time ./swetest -head -bj-3027215.5 -ejplde431.eph -edir./ephe -p6 -s0.7064 -fPJadss -n15511619 > saturn_jpl
Swe.SwephData.SHANI_MAX_RECT_SPEED = 0.1500197;
Swe.SwephData.SHANI_MIN_RECT_SPEED = -0.0947058;
Swe.SwephData.SHANI_MAX_RECT_ACCEL = 1./0.;
Swe.SwephData.SHANI_MIN_RECT_ACCEL = 1./0.;
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p6 -s0.7064 -fPJadss -n15511619 -topo0,0,50000 > saturn-topo-0-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p6 -s0.7064 -fPJadss -n15511619 -topo11,0,0 > saturn-topo-11-0-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p6 -s0.7064 -fPJadss -n15511619 -topo11,0,50000 > saturn-topo-11-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p6 -s0.7064 -fPJadss -n15511619 -topo11,0,-6300000 > saturn-topo-11-0--6300000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p6 -s0.7064 -fPJadss -n15511619 -topo11,89,0 > saturn-topo-11-89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p6 -s0.7064 -fPJadss -n15511619 -topo11,-89,0 > saturn-topo-11--89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p6 -s0.7064 -fPJadss -n15511619 -topo11,89,50000 > saturn-topo-11-89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p6 -s0.7064 -fPJadss -n15511619 -topo11,-89,50000 > saturn-topo-11--89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p6 -s0.7064 -fPJadss -n15511619 -topo179,0,50000 > saturn-topo-179-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p6 -s0.7064 -fPJadss -n15511619 -topo-179,0,50000 > saturn-topo--179-0-50000 &
// -0.1288822 .. 0.1632502 at -topo0,0,50000
// -0.1288439 .. 0.1631619 at -topo11,0,0
// -0.1288610 .. 0.1631750 at -topo11,0,50000
// -0.1274977 .. 0.1617061 at -topo11,0,-6300000
// -0.1274919 .. 0.1617037 at -topo11,89,0
// -0.1274918 .. 0.1617036 at -topo11,-89,0
// -0.1274918 .. 0.1617036 at -topo11,89,50000
// -0.1274916 .. 0.1617036 at -topo11,-89,50000
// -0.1293203 .. 0.1633044 at -topo179,0,50000  <-- MIN
// -0.1292769 .. 0.1633152 at -topo-179,0,50000 <-- MAX
Swe.SwephData.SHANI_MAX_TOPO_RECT_SPEED = 0.1633152;
Swe.SwephData.SHANI_MIN_TOPO_RECT_SPEED = -0.1293203;
Swe.SwephData.SHANI_MAX_TOPO_RECT_ACCEL = 1./0.;
Swe.SwephData.SHANI_MIN_TOPO_RECT_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.SHANI_MAX_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.SHANI_MIN_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.SHANI_MAX_HELIO_RECT_ACCEL = 1./0.;
Swe.SwephData.SHANI_MIN_HELIO_RECT_ACCEL = 1./0.;

Swe.SwephData.SHANI_MAX_DECL_SPEED = 0.0549226;
Swe.SwephData.SHANI_MIN_DECL_SPEED = -0.0566490;
Swe.SwephData.SHANI_MAX_DECL_ACCEL = 1./0.;
Swe.SwephData.SHANI_MIN_DECL_ACCEL = 1./0.;
// -0.0663555 .. 0.0648684 at -topo0,0,50000
// -0.0663566 .. 0.0648692 at -topo11,0,0
// -0.0663564 .. 0.0648693 at -topo11,0,50000 <-- MAX
// -0.0663788 .. 0.0648594 at -topo11,0,-6300000
// -0.0663787 .. 0.0648595 at -topo11,89,0
// -0.0663787 .. 0.0648594 at -topo11,-89,0
// -0.0663787 .. 0.0648595 at -topo11,89,50000
// -0.0663787 .. 0.0648594 at -topo11,-89,50000
// -0.0664027 .. 0.0648502 at -topo179,0,50000  <-- MIN
// -0.0664026 .. 0.0648501 at -topo-179,0,50000
Swe.SwephData.SHANI_MAX_TOPO_DECL_SPEED = 0.0648693;
Swe.SwephData.SHANI_MIN_TOPO_DECL_SPEED = 0.0648502;
Swe.SwephData.SHANI_MAX_TOPO_DECL_ACCEL = 1./0.;
Swe.SwephData.SHANI_MIN_TOPO_DECL_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.SHANI_MAX_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.SHANI_MIN_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.SHANI_MAX_HELIO_DECL_ACCEL = 1./0.;
Swe.SwephData.SHANI_MIN_HELIO_DECL_ACCEL = 1./0.;



///////////////////////////////////////////////////////////////
// URANUS: ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Swe.SwephData.URANUS_MAX_LON_SPEED = 0.067;
Swe.SwephData.URANUS_MIN_LON_SPEED = -0.044;
Swe.SwephData.URANUS_MAX_LON_ACCEL = 0.000929;
Swe.SwephData.URANUS_MIN_LON_ACCEL = -0.000975;
Swe.SwephData.URANUS_MAX_TOPO_LON_SPEED = 0.067;
Swe.SwephData.URANUS_MIN_TOPO_LON_SPEED = -0.045;
Swe.SwephData.URANUS_MAX_TOPO_LON_ACCEL = 0.00408;
Swe.SwephData.URANUS_MIN_TOPO_LON_ACCEL = -0.00414;
Swe.SwephData.URANUS_MAX_HELIO_LON_SPEED = 0.013090;
Swe.SwephData.URANUS_MIN_HELIO_LON_SPEED = 0.010609;
Swe.SwephData.URANUS_MAX_HELIO_LON_ACCEL = 0.000023908;
Swe.SwephData.URANUS_MIN_HELIO_LON_ACCEL = -0.000024088;

Swe.SwephData.URANUS_MAX_LAT_SPEED = 0.00082;
Swe.SwephData.URANUS_MIN_LAT_SPEED = -0.00079;
Swe.SwephData.URANUS_MAX_LAT_ACCEL = 0.000073;
Swe.SwephData.URANUS_MIN_LAT_ACCEL = -0.000078;
Swe.SwephData.URANUS_MAX_TOPO_LAT_SPEED = 0.0011;
Swe.SwephData.URANUS_MIN_TOPO_LAT_SPEED = -0.0011;
Swe.SwephData.URANUS_MAX_TOPO_LAT_ACCEL = 0.0018;
Swe.SwephData.URANUS_MIN_TOPO_LAT_ACCEL = -0.0014;
Swe.SwephData.URANUS_MAX_HELIO_LAT_SPEED = 0.00022338;
Swe.SwephData.URANUS_MIN_HELIO_LAT_SPEED = -0.00020480;
Swe.SwephData.URANUS_MAX_HELIO_LAT_ACCEL = 0.0000105550;
Swe.SwephData.URANUS_MIN_HELIO_LAT_ACCEL = -0.000010525;

Swe.SwephData.URANUS_MAX_DIST_SPEED = 0.0174;
Swe.SwephData.URANUS_MIN_DIST_SPEED = -0.0174;
Swe.SwephData.URANUS_MAX_DIST_ACCEL = 0.00032;
Swe.SwephData.URANUS_MIN_DIST_ACCEL = -0.00029;
Swe.SwephData.URANUS_MAX_TOPO_DIST_SPEED = 0.0177;
Swe.SwephData.URANUS_MIN_TOPO_DIST_SPEED = -0.0176;
Swe.SwephData.URANUS_MAX_TOPO_DIST_ACCEL = 0.0014;
Swe.SwephData.URANUS_MIN_TOPO_DIST_ACCEL = -0.0013;
Swe.SwephData.URANUS_MAX_HELIO_DIST_SPEED = 0.00020103;
Swe.SwephData.URANUS_MIN_HELIO_DIST_SPEED = -0.00020132;
Swe.SwephData.URANUS_MAX_HELIO_DIST_ACCEL = 0.00000028679;
Swe.SwephData.URANUS_MIN_HELIO_DIST_ACCEL = -0.000000229;

// time ./swetest -head -bj-3027215.5 -ejplde431.eph -edir./ephe -p7 -s0.7064 -fPJadss -n15511619 > uranus_jpl
Swe.SwephData.URANUS_MAX_RECT_SPEED = 0.0702972;
Swe.SwephData.URANUS_MIN_RECT_SPEED = -0.0482331;
Swe.SwephData.URANUS_MAX_RECT_ACCEL = 1./0.;
Swe.SwephData.URANUS_MIN_RECT_ACCEL = 1./0.;
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p7 -s0.7064 -fPJadss -n15511619 -topo0,0,50000 > uranus-topo-0-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p7 -s0.7064 -fPJadss -n15511619 -topo11,0,0 > uranus-topo-11-0-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p7 -s0.7064 -fPJadss -n15511619 -topo11,0,50000 > uranus-topo-11-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p7 -s0.7064 -fPJadss -n15511619 -topo11,0,-6300000 > uranus-topo-11-0--6300000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p7 -s0.7064 -fPJadss -n15511619 -topo11,89,0 > uranus-topo-11-89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p7 -s0.7064 -fPJadss -n15511619 -topo11,-89,0 > uranus-topo-11--89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p7 -s0.7064 -fPJadss -n15511619 -topo11,89,50000 > uranus-topo-11-89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p7 -s0.7064 -fPJadss -n15511619 -topo11,-89,50000 > uranus-topo-11--89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p7 -s0.7064 -fPJadss -n15511619 -topo179,0,50000 > uranus-topo-179-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p7 -s0.7064 -fPJadss -n15511619 -topo-179,0,50000 > uranus-topo--179-0-50000 &
// -0.1243592 .. 0.1050555 at -topo0,0,50000    <-- MIN <-- MAX
// -0.1242312 .. 0.1049450 at -topo11,0,0
// -0.1242357 .. 0.1049492 at -topo11,0,50000
// -0.1236645 .. 0.1044812 at -topo11,0,-6300000
// -0.1236676 .. 0.1044800 at -topo11,89,0
// -0.1236674 .. 0.1044799 at -topo11,-89,0
// -0.1236676 .. 0.1044799 at -topo11,89,50000
// -0.1236675 .. 0.1044799 at -topo11,-89,50000
// -0.1240597 .. 0.1050007 at -topo179,0,50000
// -0.1240382 .. 0.1050127 at -topo-179,0,50000
Swe.SwephData.URANUS_MAX_TOPO_RECT_SPEED = 0.1050555;
Swe.SwephData.URANUS_MIN_TOPO_RECT_SPEED = -0.1243592;
Swe.SwephData.URANUS_MAX_TOPO_RECT_ACCEL = 1./0.;
Swe.SwephData.URANUS_MIN_TOPO_RECT_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.URANUS_MAX_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.URANUS_MIN_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.URANUS_MAX_HELIO_RECT_ACCEL = 1./0.;
Swe.SwephData.URANUS_MIN_HELIO_RECT_ACCEL = 1./0.;

Swe.SwephData.URANUS_MAX_DECL_SPEED = 0.0263998;
Swe.SwephData.URANUS_MIN_DECL_SPEED = -0.0254980;
Swe.SwephData.URANUS_MAX_DECL_ACCEL = 1./0.;
Swe.SwephData.URANUS_MIN_DECL_ACCEL = 1./0.;
// -0.0459399 .. 0.0459600 at -topo0,0,50000
// -0.0459265 .. 0.0459610 at -topo11,0,0   <-- MAX
// -0.0459269 .. 0.0459612 at -topo11,0,50000
// -0.0459495 .. 0.0459395 at -topo11,0,-6300000
// -0.0459492 .. 0.0459396 at -topo11,89,0
// -0.0459491 .. 0.0459396 at -topo11,-89,0
// -0.0459491 .. 0.0459396 at -topo11,89,50000
// -0.0459491 .. 0.0459396 at -topo11,-89,50000
// -0.0460239 .. 0.0459206 at -topo179,0,50000  <-- MIN
// -0.0460238 .. 0.0459206 at -topo-179,0,50000
Swe.SwephData.URANUS_MAX_TOPO_DECL_SPEED = 0.0459610;
Swe.SwephData.URANUS_MIN_TOPO_DECL_SPEED = -0.0460239;
Swe.SwephData.URANUS_MAX_TOPO_DECL_ACCEL = 1./0.;
Swe.SwephData.URANUS_MIN_TOPO_DECL_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.URANUS_MAX_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.URANUS_MIN_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.URANUS_MAX_HELIO_DECL_ACCEL = 1./0.;
Swe.SwephData.URANUS_MIN_HELIO_DECL_ACCEL = 1./0.;



///////////////////////////////////////////////////////////////
// NEPTUNE: ///////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Swe.SwephData.NEPTUNE_MAX_LON_SPEED = 0.040;
Swe.SwephData.NEPTUNE_MIN_LON_SPEED = -0.0286;
Swe.SwephData.NEPTUNE_MAX_LON_ACCEL = 0.000612;
Swe.SwephData.NEPTUNE_MIN_LON_ACCEL = -0.000606;
Swe.SwephData.NEPTUNE_MAX_TOPO_LON_SPEED = 0.043; // ???
Swe.SwephData.NEPTUNE_MIN_TOPO_LON_SPEED = -0.0295;
Swe.SwephData.NEPTUNE_MAX_TOPO_LON_ACCEL = 0.00253;
Swe.SwephData.NEPTUNE_MIN_TOPO_LON_ACCEL = -0.00252;
Swe.SwephData.NEPTUNE_MAX_HELIO_LON_SPEED = 0.006223;
Swe.SwephData.NEPTUNE_MIN_HELIO_LON_SPEED = 0.00584;
Swe.SwephData.NEPTUNE_MAX_HELIO_LON_ACCEL = 0.000023804;
Swe.SwephData.NEPTUNE_MIN_HELIO_LON_ACCEL = -0.000023845;

Swe.SwephData.NEPTUNE_MAX_LAT_SPEED = 0.0013;
Swe.SwephData.NEPTUNE_MIN_LAT_SPEED = -0.0013;
Swe.SwephData.NEPTUNE_MAX_LAT_ACCEL = 0.000069;
Swe.SwephData.NEPTUNE_MIN_LAT_ACCEL = -0.000065;
Swe.SwephData.NEPTUNE_MAX_TOPO_LAT_SPEED = 0.00156;
Swe.SwephData.NEPTUNE_MIN_TOPO_LAT_SPEED = -0.00143;
Swe.SwephData.NEPTUNE_MAX_TOPO_LAT_ACCEL = 0.00087;
Swe.SwephData.NEPTUNE_MIN_TOPO_LAT_ACCEL = -0.000854;
Swe.SwephData.NEPTUNE_MAX_HELIO_LAT_SPEED = 0.0002670;
Swe.SwephData.NEPTUNE_MIN_HELIO_LAT_SPEED = -0.0002728;
Swe.SwephData.NEPTUNE_MAX_HELIO_LAT_ACCEL = 0.0000106092;
Swe.SwephData.NEPTUNE_MIN_HELIO_LAT_ACCEL = -0.000010590;

Swe.SwephData.NEPTUNE_MAX_DIST_SPEED = 0.0175;
Swe.SwephData.NEPTUNE_MIN_DIST_SPEED = -0.0175;
Swe.SwephData.NEPTUNE_MAX_DIST_ACCEL = 0.000316;
Swe.SwephData.NEPTUNE_MIN_DIST_ACCEL = -0.0003;
Swe.SwephData.NEPTUNE_MAX_TOPO_DIST_SPEED = 0.0177;
Swe.SwephData.NEPTUNE_MIN_TOPO_DIST_SPEED = -0.0177;
Swe.SwephData.NEPTUNE_MAX_TOPO_DIST_ACCEL = 0.00135;
Swe.SwephData.NEPTUNE_MIN_TOPO_DIST_ACCEL = -0.00129;
Swe.SwephData.NEPTUNE_MAX_HELIO_DIST_SPEED = 0.000038700;
Swe.SwephData.NEPTUNE_MIN_HELIO_DIST_SPEED = -0.000038379;
Swe.SwephData.NEPTUNE_MAX_HELIO_DIST_ACCEL = 0.00000022853;
Swe.SwephData.NEPTUNE_MIN_HELIO_DIST_ACCEL = -0.00000023012;

// time ./swetest -head -bj-3027215.5 -ejplde431.eph -edir./ephe -p8 -s0.7064 -fPJadss -n15511619 > neptun_jpl
Swe.SwephData.NEPTUNE_MAX_RECT_SPEED = 0.0425179;
Swe.SwephData.NEPTUNE_MIN_RECT_SPEED = -0.0320257;
Swe.SwephData.NEPTUNE_MAX_RECT_ACCEL = 1./0.;
Swe.SwephData.NEPTUNE_MIN_RECT_ACCEL = 1./0.;
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p8 -s0.7064 -fPJadss -n15511619 -topo0,0,50000 > neptun-topo-0-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p8 -s0.7064 -fPJadss -n15511619 -topo11,0,0 > neptun-topo-11-0-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p8 -s0.7064 -fPJadss -n15511619 -topo11,0,50000 > neptun-topo-11-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p8 -s0.7064 -fPJadss -n15511619 -topo11,0,-6300000 > neptun-topo-11-0--6300000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p8 -s0.7064 -fPJadss -n15511619 -topo11,89,0 > neptun-topo-11-89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p8 -s0.7064 -fPJadss -n15511619 -topo11,-89,0 > neptun-topo-11--89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p8 -s0.7064 -fPJadss -n15511619 -topo11,89,50000 > neptun-topo-11-89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p8 -s0.7064 -fPJadss -n15511619 -topo11,-89,50000 > neptun-topo-11--89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p8 -s0.7064 -fPJadss -n15511619 -topo179,0,50000 > neptun-topo-179-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p8 -s0.7064 -fPJadss -n15511619 -topo-179,0,50000 > neptun-topo--179-0-50000 &
// -0.1568381 .. 0.1104760 at -topo0,0,50000    <-- MIN
// -0.1568259 .. 0.1103960 at -topo11,0,0
// -0.1568303 .. 0.1103985 at -topo11,0,50000
// -0.1562692 .. 0.1103679 at -topo11,0,-6300000
// -0.1562722 .. 0.1103677 at -topo11,89,0
// -0.1562721 .. 0.1103678 at -topo11,-89,0
// -0.1562723 .. 0.1103677 at -topo11,89,50000
// -0.1562722 .. 0.1103678 at -topo11,-89,50000
// -0.1558474 .. 0.1105298 at -topo179,0,50000  <-- MAX
// -0.1558562 .. 0.1105202 at -topo-179,0,50000
Swe.SwephData.NEPTUNE_MAX_TOPO_RECT_SPEED = 0.1105298;
Swe.SwephData.NEPTUNE_MIN_TOPO_RECT_SPEED = 0.1104760;
Swe.SwephData.NEPTUNE_MAX_TOPO_RECT_ACCEL = 1./0.;
Swe.SwephData.NEPTUNE_MIN_TOPO_RECT_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.NEPTUNE_MAX_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.NEPTUNE_MIN_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.NEPTUNE_MAX_HELIO_RECT_ACCEL = 1./0.;
Swe.SwephData.NEPTUNE_MIN_HELIO_RECT_ACCEL = 1./0.;

Swe.SwephData.NEPTUNE_MAX_DECL_SPEED = 0.0156134;
Swe.SwephData.NEPTUNE_MIN_DECL_SPEED = -0.0157893;
Swe.SwephData.NEPTUNE_MAX_DECL_ACCEL = 1./0.;
Swe.SwephData.NEPTUNE_MIN_DECL_ACCEL = 1./0.;
// -0.0515829 .. 0.0510428 at -topo0,0,50000
// -0.0516209 .. 0.0510078 at -topo11,0,0
// -0.0516207 .. 0.0510078 at -topo11,0,50000
// -0.0516483 .. 0.0510044 at -topo11,0,-6300000
// -0.0516482 .. 0.0510044 at -topo11,89,0
// -0.0516481 .. 0.0510044 at -topo11,-89,0
// -0.0516482 .. 0.0510044 at -topo11,89,50000
// -0.0516481 .. 0.0510044 at -topo11,-89,50000
// -0.0517976 .. 0.0511087 at -topo179,0,50000
// -0.0517984 .. 0.0511090 at -topo-179,0,50000 <-- MIN <-- MAX
Swe.SwephData.NEPTUNE_MAX_TOPO_DECL_SPEED = 0.0511090;
Swe.SwephData.NEPTUNE_MIN_TOPO_DECL_SPEED = -0.0517984;
Swe.SwephData.NEPTUNE_MAX_TOPO_DECL_ACCEL = 1./0.;
Swe.SwephData.NEPTUNE_MIN_TOPO_DECL_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.NEPTUNE_MAX_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.NEPTUNE_MIN_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.NEPTUNE_MAX_HELIO_DECL_ACCEL = 1./0.;
Swe.SwephData.NEPTUNE_MIN_HELIO_DECL_ACCEL = 1./0.;



///////////////////////////////////////////////////////////////
// PLUTO: /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Swe.SwephData.PLUTO_MAX_LON_SPEED = 0.041;
Swe.SwephData.PLUTO_MIN_LON_SPEED = -0.0284;
Swe.SwephData.PLUTO_MAX_LON_ACCEL = 0.000601;
Swe.SwephData.PLUTO_MIN_LON_ACCEL = -0.00065; // ????
Swe.SwephData.PLUTO_MAX_TOPO_LON_SPEED = 0.0413;
Swe.SwephData.PLUTO_MIN_TOPO_LON_SPEED = -0.0288;
Swe.SwephData.PLUTO_MAX_TOPO_LON_ACCEL = 0.00253;
Swe.SwephData.PLUTO_MIN_TOPO_LON_ACCEL = -0.0026; // ????
Swe.SwephData.PLUTO_MAX_HELIO_LON_SPEED = 0.0072091;
Swe.SwephData.PLUTO_MIN_HELIO_LON_SPEED = 0.0025030;
Swe.SwephData.PLUTO_MAX_HELIO_LON_ACCEL = 0.000024137;
Swe.SwephData.PLUTO_MIN_HELIO_LON_ACCEL = -0.00002406;

Swe.SwephData.PLUTO_MAX_LAT_SPEED = 0.0101;
Swe.SwephData.PLUTO_MIN_LAT_SPEED = -0.00998;
Swe.SwephData.PLUTO_MAX_LAT_ACCEL = 0.000159;
Swe.SwephData.PLUTO_MIN_LAT_ACCEL = -0.000188;
Swe.SwephData.PLUTO_MAX_TOPO_LAT_SPEED = 0.0102;
Swe.SwephData.PLUTO_MIN_TOPO_LAT_SPEED = -0.011;
Swe.SwephData.PLUTO_MAX_TOPO_LAT_ACCEL = 0.0013;
Swe.SwephData.PLUTO_MIN_TOPO_LAT_ACCEL = -0.0014;
Swe.SwephData.PLUTO_MAX_HELIO_LAT_SPEED = 0.0012607;
Swe.SwephData.PLUTO_MIN_HELIO_LAT_SPEED = -0.00170212;
Swe.SwephData.PLUTO_MAX_HELIO_LAT_ACCEL = 0.000010674;
Swe.SwephData.PLUTO_MIN_HELIO_LAT_ACCEL = -0.000010758;

Swe.SwephData.PLUTO_MAX_DIST_SPEED = 0.01805;
Swe.SwephData.PLUTO_MIN_DIST_SPEED = -0.01805;
Swe.SwephData.PLUTO_MAX_DIST_ACCEL = 0.000315;
Swe.SwephData.PLUTO_MIN_DIST_ACCEL = -0.000296;
Swe.SwephData.PLUTO_MAX_TOPO_DIST_SPEED = 0.0183;
Swe.SwephData.PLUTO_MIN_TOPO_DIST_SPEED = -0.0183;
Swe.SwephData.PLUTO_MAX_TOPO_DIST_ACCEL = 0.00135;
Swe.SwephData.PLUTO_MIN_TOPO_DIST_ACCEL = -0.0013;
Swe.SwephData.PLUTO_MAX_HELIO_DIST_SPEED = 0.00071348;
Swe.SwephData.PLUTO_MIN_HELIO_DIST_SPEED = -0.00071142;
Swe.SwephData.PLUTO_MAX_HELIO_DIST_ACCEL = 0.0000002773;
Swe.SwephData.PLUTO_MIN_HELIO_DIST_ACCEL = -0.00000022049;

// time ./swetest -head -bj-3027215.5 -ejplde431.eph -edir./ephe -p9 -s0.7064 -fPJadss -n15511619 > pluto_jpl
Swe.SwephData.PLUTO_MAX_RECT_SPEED = 0.0518363;
Swe.SwephData.PLUTO_MIN_RECT_SPEED = -0.0359654;
Swe.SwephData.PLUTO_MAX_RECT_ACCEL = 1./0.;
Swe.SwephData.PLUTO_MIN_RECT_ACCEL = 1./0.;
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p9 -s0.7064 -fPJadss -n15511619 -topo0,0,50000 > pluto-topo-0-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p9 -s0.7064 -fPJadss -n15511619 -topo11,0,0 > pluto-topo-11-0-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p9 -s0.7064 -fPJadss -n15511619 -topo11,0,50000 > pluto-topo-11-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p9 -s0.7064 -fPJadss -n15511619 -topo11,0,-6300000 > pluto-topo-11-0--6300000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p9 -s0.7064 -fPJadss -n15511619 -topo11,89,0 > pluto-topo-11-89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p9 -s0.7064 -fPJadss -n15511619 -topo11,-89,0 > pluto-topo-11--89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p9 -s0.7064 -fPJadss -n15511619 -topo11,89,50000 > pluto-topo-11-89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p9 -s0.7064 -fPJadss -n15511619 -topo11,-89,50000 > pluto-topo-11--89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p9 -s0.7064 -fPJadss -n15511619 -topo179,0,50000 > pluto-topo-179-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -p9 -s0.7064 -fPJadss -n15511619 -topo-179,0,50000 > pluto-topo--179-0-50000 &
// -0.2561626 .. 0.1647922 at -topo0,0,50000
// -0.2561895 .. 0.1647510 at -topo11,0,0
// -0.2561863 .. 0.1647536 at -topo11,0,50000
// -0.2565834 .. 0.1650370 at -topo11,0,-6300000
// -0.2565814 .. 0.1650349 at -topo11,89,0
// -0.2565811 .. 0.1650347 at -topo11,-89,0
// -0.2565813 .. 0.1650348 at -topo11,89,50000
// -0.2565811 .. 0.1650347 at -topo11,-89,50000
// -0.2570153 .. 0.1654531 at -topo179,0,50000  <-- MIN
// -0.2570124 .. 0.1654553 at -topo-179,0,50000 <-- MAX
Swe.SwephData.PLUTO_MAX_TOPO_RECT_SPEED = 0.1654553;
Swe.SwephData.PLUTO_MIN_TOPO_RECT_SPEED = -0.2570153;
Swe.SwephData.PLUTO_MAX_TOPO_RECT_ACCEL = 1./0.;
Swe.SwephData.PLUTO_MIN_TOPO_RECT_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.PLUTO_MAX_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.PLUTO_MIN_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.PLUTO_MAX_HELIO_RECT_ACCEL = 1./0.;
Swe.SwephData.PLUTO_MIN_HELIO_RECT_ACCEL = 1./0.;

Swe.SwephData.PLUTO_MAX_DECL_SPEED = 0.0189821;
Swe.SwephData.PLUTO_MIN_DECL_SPEED = -0.0192680;
Swe.SwephData.PLUTO_MAX_DECL_ACCEL = 1./0.;
Swe.SwephData.PLUTO_MIN_DECL_ACCEL = 1./0.;
// -0.0832814 .. 0.0850578 at -topo0,0,50000
// -0.0833168 .. 0.0850874 at -topo11,0,0
// -0.0833168 .. 0.0850884 at -topo11,0,50000   <-- MAX
// -0.0833218 .. 0.0849652 at -topo11,0,-6300000
// -0.0833218 .. 0.0849658 at -topo11,89,0
// -0.0833218 .. 0.0849658 at -topo11,-89,0
// -0.0833218 .. 0.0849658 at -topo11,89,50000
// -0.0833218 .. 0.0849658 at -topo11,-89,50000
// -0.0833655 .. 0.0848725 at -topo179,0,50000  <-- MIN
// -0.0833592 .. 0.0848665 at -topo-179,0,50000
Swe.SwephData.PLUTO_MAX_TOPO_DECL_SPEED = 0.0850884;
Swe.SwephData.PLUTO_MIN_TOPO_DECL_SPEED = -0.0833655;
Swe.SwephData.PLUTO_MAX_TOPO_DECL_ACCEL = 1./0.;
Swe.SwephData.PLUTO_MIN_TOPO_DECL_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.PLUTO_MAX_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.PLUTO_MIN_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.PLUTO_MAX_HELIO_DECL_ACCEL = 1./0.;
Swe.SwephData.PLUTO_MIN_HELIO_DECL_ACCEL = 1./0.;



///////////////////////////////////////////////////////////////
// MNODE: /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Swe.SwephData.MNODE_MAX_LON_SPEED = -0.0528;
Swe.SwephData.MNODE_MIN_LON_SPEED = -0.0531;
Swe.SwephData.MNODE_MAX_LON_ACCEL = 0.0000249;
Swe.SwephData.MNODE_MIN_LON_ACCEL = -0.0000244;
/**
* There is no meaning in calculating topocentric positions of mean elements,
* so it more an academic kind of exercise...
*/
Swe.SwephData.MNODE_MAX_TOPO_LON_SPEED = -0.0528;
Swe.SwephData.MNODE_MIN_TOPO_LON_SPEED = -0.0531;
Swe.SwephData.MNODE_MAX_TOPO_LON_ACCEL = 0.0000247;
Swe.SwephData.MNODE_MIN_TOPO_LON_ACCEL = -0.0000252;
// No heliocentric positions for the mean node...
Swe.SwephData.MNODE_MAX_HELIO_LON_SPEED = 1./0.;
Swe.SwephData.MNODE_MIN_HELIO_LON_SPEED = 1./0.;
Swe.SwephData.MNODE_MAX_HELIO_LON_ACCEL = 1./0.;
Swe.SwephData.MNODE_MIN_HELIO_LON_ACCEL = 1./0.;

Swe.SwephData.MNODE_MAX_LAT_SPEED = 0.;
Swe.SwephData.MNODE_MIN_LAT_SPEED = 0.;
Swe.SwephData.MNODE_MAX_LAT_ACCEL = 0.;
Swe.SwephData.MNODE_MIN_LAT_ACCEL = 0.;
Swe.SwephData.MNODE_MAX_TOPO_LAT_SPEED = 0.;
Swe.SwephData.MNODE_MIN_TOPO_LAT_SPEED = 0.;
Swe.SwephData.MNODE_MAX_TOPO_LAT_ACCEL = 0.;
Swe.SwephData.MNODE_MIN_TOPO_LAT_ACCEL = 0.;
// No heliocentric positions for the mean node...
Swe.SwephData.MNODE_MAX_HELIO_LAT_SPEED = 1./0.;
Swe.SwephData.MNODE_MIN_HELIO_LAT_SPEED = 1./0.;
Swe.SwephData.MNODE_MAX_HELIO_LAT_ACCEL = 1./0.;
Swe.SwephData.MNODE_MIN_HELIO_LAT_ACCEL = 1./0.;

Swe.SwephData.MNODE_MAX_DIST_SPEED = 0.;
Swe.SwephData.MNODE_MIN_DIST_SPEED = 0.;
Swe.SwephData.MNODE_MAX_DIST_ACCEL = 0.;
Swe.SwephData.MNODE_MIN_DIST_ACCEL = 0.;
Swe.SwephData.MNODE_MAX_TOPO_DIST_SPEED = 0.;
Swe.SwephData.MNODE_MIN_TOPO_DIST_SPEED = 0.;
Swe.SwephData.MNODE_MAX_TOPO_DIST_ACCEL = 0.;
Swe.SwephData.MNODE_MIN_TOPO_DIST_ACCEL = 0.;
// No heliocentric positions for the mean node...
Swe.SwephData.MNODE_MAX_HELIO_DIST_SPEED = 1./0.;
Swe.SwephData.MNODE_MIN_HELIO_DIST_SPEED = 1./0.;
Swe.SwephData.MNODE_MAX_HELIO_DIST_ACCEL = 1./0.;
Swe.SwephData.MNODE_MIN_HELIO_DIST_ACCEL = 1./0.;

// time ./swetest -head -bj-3027215.5 -ejplde431.eph -edir./ephe -pm -s0.7064 -fPJadss -n15511619 > meannode_jpl
Swe.SwephData.MNODE_MAX_RECT_SPEED = -0.0482372;
Swe.SwephData.MNODE_MIN_RECT_SPEED = -0.0581265;
Swe.SwephData.MNODE_MAX_RECT_ACCEL = 1./0.;
Swe.SwephData.MNODE_MIN_RECT_ACCEL = 1./0.;
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pm -s0.7064 -fPJadss -n15511619 -topo0,0,50000 > meannode-topo-0-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pm -s0.7064 -fPJadss -n15511619 -topo11,0,0 > meannode-topo-11-0-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pm -s0.7064 -fPJadss -n15511619 -topo11,0,50000 > meannode-topo-11-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pm -s0.7064 -fPJadss -n15511619 -topo11,0,-6300000 > meannode-topo-11-0--6300000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pm -s0.7064 -fPJadss -n15511619 -topo11,89,0 > meannode-topo-11-89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pm -s0.7064 -fPJadss -n15511619 -topo11,-89,0 > meannode-topo-11--89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pm -s0.7064 -fPJadss -n15511619 -topo11,89,50000 > meannode-topo-11-89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pm -s0.7064 -fPJadss -n15511619 -topo11,-89,50000 > meannode-topo-11--89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pm -s0.7064 -fPJadss -n15511619 -topo179,0,50000 > meannode-topo-179-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pm -s0.7064 -fPJadss -n15511619 -topo-179,0,50000 > meannode-topo--179-0-50000 &
// -0.0581265 .. -0.0482335 at -topo0,0,50000
// -0.0581265 .. -0.0482335 at -topo11,0,0
// -0.0581265 .. -0.0482335 at -topo11,0,50000
// -0.0581265 .. -0.0482335 at -topo11,0,-6300000
// -0.0581265 .. -0.0482335 at -topo11,89,0
// -0.0581265 .. -0.0482335 at -topo11,-89,0
// -0.0581265 .. -0.0482335 at -topo11,89,50000
// -0.0581265 .. -0.0482335 at -topo11,-89,50000
// -0.0581265 .. -0.0482335 at -topo179,0,50000
// -0.0581265 .. -0.0482335 at -topo-179,0,50000
Swe.SwephData.MNODE_MAX_TOPO_RECT_SPEED = Swe.SwephData.MNODE_MAX_RECT_SPEED;
Swe.SwephData.MNODE_MIN_TOPO_RECT_SPEED = Swe.SwephData.MNODE_MIN_RECT_SPEED;
Swe.SwephData.MNODE_MAX_TOPO_RECT_ACCEL = 1./0.;
Swe.SwephData.MNODE_MIN_TOPO_RECT_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.MNODE_MAX_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.MNODE_MIN_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.MNODE_MAX_HELIO_RECT_ACCEL = 1./0.;
Swe.SwephData.MNODE_MIN_HELIO_RECT_ACCEL = 1./0.;

Swe.SwephData.MNODE_MAX_DECL_SPEED = 0.0217529;
Swe.SwephData.MNODE_MIN_DECL_SPEED = -0.0217577;
Swe.SwephData.MNODE_MAX_DECL_ACCEL = 1./0.;
Swe.SwephData.MNODE_MIN_DECL_ACCEL = 1./0.;
// -0.0217577 .. 0.0217529 at -topo0,0,50000
// -0.0217577 .. 0.0217529 at -topo11,0,0
// -0.0217577 .. 0.0217529 at -topo11,0,50000
// ... -topo11,0,-6300000
// ... -topo11,89,0
// ... -topo11,-89,0
// ... -topo11,89,50000
// ... -topo11,-89,50000
// ... -topo179,0,50000
// ... -topo-179,0,50000
Swe.SwephData.MNODE_MAX_TOPO_DECL_SPEED = Swe.SwephData.MNODE_MAX_DECL_SPEED;
Swe.SwephData.MNODE_MIN_TOPO_DECL_SPEED = Swe.SwephData.MNODE_MIN_DECL_SPEED;
Swe.SwephData.MNODE_MAX_TOPO_DECL_ACCEL = 1./0.;
Swe.SwephData.MNODE_MIN_TOPO_DECL_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.MNODE_MAX_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.MNODE_MIN_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.MNODE_MAX_HELIO_DECL_ACCEL = 1./0.;
Swe.SwephData.MNODE_MIN_HELIO_DECL_ACCEL = 1./0.;



///////////////////////////////////////////////////////////////
// TNODE: /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Swe.SwephData.TNODE_MAX_LON_SPEED = 0.0328;
Swe.SwephData.TNODE_MIN_LON_SPEED = -0.261;
Swe.SwephData.TNODE_MAX_LON_ACCEL = 0.054;
Swe.SwephData.TNODE_MIN_LON_ACCEL = -0.054;
Swe.SwephData.TNODE_MAX_TOPO_LON_SPEED = 0.0328;
Swe.SwephData.TNODE_MIN_TOPO_LON_SPEED = -0.261;
Swe.SwephData.TNODE_MAX_TOPO_LON_ACCEL = 0.054;
Swe.SwephData.TNODE_MIN_TOPO_LON_ACCEL = -0.054;
// No heliocentric positions for the true node...
Swe.SwephData.TNODE_MAX_HELIO_LON_SPEED = 1./0.;
Swe.SwephData.TNODE_MIN_HELIO_LON_SPEED = 1./0.;
Swe.SwephData.TNODE_MAX_HELIO_LON_ACCEL = 1./0.;
Swe.SwephData.TNODE_MIN_HELIO_LON_ACCEL = 1./0.;

Swe.SwephData.TNODE_MAX_LAT_SPEED = 0.;
Swe.SwephData.TNODE_MIN_LAT_SPEED = 0.;
Swe.SwephData.TNODE_MAX_LAT_ACCEL = 0.;
Swe.SwephData.TNODE_MIN_LAT_ACCEL = 0.;
Swe.SwephData.TNODE_MAX_TOPO_LAT_SPEED = 0.;
Swe.SwephData.TNODE_MIN_TOPO_LAT_SPEED = 0.;
Swe.SwephData.TNODE_MAX_TOPO_LAT_ACCEL = 0.;
Swe.SwephData.TNODE_MIN_TOPO_LAT_ACCEL = 0.;
// No heliocentric positions for the true node...
Swe.SwephData.TNODE_MAX_HELIO_LAT_SPEED = 1./0.;
Swe.SwephData.TNODE_MIN_HELIO_LAT_SPEED = 1./0.;
Swe.SwephData.TNODE_MAX_HELIO_LAT_ACCEL = 1./0.;
Swe.SwephData.TNODE_MIN_HELIO_LAT_ACCEL = 1./0.;



Swe.SwephData.TNODE_MAX_DIST_SPEED = 0.0000228;
Swe.SwephData.TNODE_MIN_DIST_SPEED = -0.0000216;
Swe.SwephData.TNODE_MAX_DIST_ACCEL = 0.00000835;
Swe.SwephData.TNODE_MIN_DIST_ACCEL = -0.0000086;
Swe.SwephData.TNODE_MAX_TOPO_DIST_SPEED = 0.000022; // ????
Swe.SwephData.TNODE_MIN_TOPO_DIST_SPEED = -0.000022; // ????
Swe.SwephData.TNODE_MAX_TOPO_DIST_ACCEL = 0.00000835;
Swe.SwephData.TNODE_MIN_TOPO_DIST_ACCEL = -0.00000856;
// No heliocentric positions for the true node...
Swe.SwephData.TNODE_MAX_HELIO_DIST_SPEED = 1./0.;
Swe.SwephData.TNODE_MIN_HELIO_DIST_SPEED = 1./0.;
Swe.SwephData.TNODE_MAX_HELIO_DIST_ACCEL = 1./0.;
Swe.SwephData.TNODE_MIN_HELIO_DIST_ACCEL = 1./0.;

// time ./swetest -head -bj-3027215.5 -ejplde431.eph -edir./ephe -pt -s0.7064 -fPJadss -n15511619 > truenode_jpl
Swe.SwephData.TNODE_MAX_RECT_SPEED = 0.0359328;
Swe.SwephData.TNODE_MIN_RECT_SPEED = -0.2850885;
Swe.SwephData.TNODE_MAX_RECT_ACCEL = 1./0.;
Swe.SwephData.TNODE_MIN_RECT_ACCEL = 1./0.;
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pt -s0.7064 -fPJadss -n15511619 -topo0,0,50000 > truenode-topo-0-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pt -s0.7064 -fPJadss -n15511619 -topo11,0,0 > truenode-topo-11-0-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pt -s0.7064 -fPJadss -n15511619 -topo11,0,50000 > truenode-topo-11-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pt -s0.7064 -fPJadss -n15511619 -topo11,0,-6300000 > truenode-topo-11-0--6300000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pt -s0.7064 -fPJadss -n15511619 -topo11,89,0 > truenode-topo-11-89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pt -s0.7064 -fPJadss -n15511619 -topo11,-89,0 > truenode-topo-11--89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pt -s0.7064 -fPJadss -n15511619 -topo11,89,50000 > truenode-topo-11-89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pt -s0.7064 -fPJadss -n15511619 -topo11,-89,50000 > truenode-topo-11--89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pt -s0.7064 -fPJadss -n15511619 -topo179,0,50000 > truenode-topo-179-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pt -s0.7064 -fPJadss -n15511619 -topo-179,0,50000 > truenode-topo--179-0-50000 &
// -0.2850885 .. 0.0359328 at -topo0,0,50000
// -0.2850885 .. 0.0359328 at -topo11,0,0
// ... -topo11,0,50000
// ... -topo11,0,-6300000
// ... -topo11,89,0
// ... -topo11,-89,0
// ... -topo11,89,50000
// ... -topo11,-89,50000
// ... -topo179,0,50000
// ... -topo-179,0,50000
Swe.SwephData.TNODE_MAX_TOPO_RECT_SPEED = Swe.SwephData.TNODE_MAX_RECT_SPEED;
Swe.SwephData.TNODE_MIN_TOPO_RECT_SPEED = Swe.SwephData.TNODE_MIN_RECT_SPEED;
Swe.SwephData.TNODE_MAX_TOPO_RECT_ACCEL = 1./0.;
Swe.SwephData.TNODE_MIN_TOPO_RECT_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.TNODE_MAX_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.TNODE_MIN_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.TNODE_MAX_HELIO_RECT_ACCEL = 1./0.;
Swe.SwephData.TNODE_MIN_HELIO_RECT_ACCEL = 1./0.;

Swe.SwephData.TNODE_MAX_DECL_SPEED = 0.1062415;
Swe.SwephData.TNODE_MIN_DECL_SPEED = -0.1071840;
Swe.SwephData.TNODE_MAX_DECL_ACCEL = 1./0.;
Swe.SwephData.TNODE_MIN_DECL_ACCEL = 1./0.;
// ... -topo0,0,50000
// ... -topo11,0,0
// ... -topo11,0,50000
// ... -topo11,0,-6300000
// ... -topo11,89,0
// ... -topo11,-89,0
// ... -topo11,89,50000
// ... -topo11,-89,50000
// ... -topo179,0,50000
// ... -topo-179,0,50000
Swe.SwephData.TNODE_MAX_TOPO_DECL_SPEED = Swe.SwephData.TNODE_MAX_DECL_SPEED;
Swe.SwephData.TNODE_MIN_TOPO_DECL_SPEED = Swe.SwephData.TNODE_MIN_DECL_SPEED;
Swe.SwephData.TNODE_MAX_TOPO_DECL_ACCEL = 1./0.;
Swe.SwephData.TNODE_MIN_TOPO_DECL_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.TNODE_MAX_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.TNODE_MIN_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.TNODE_MAX_HELIO_DECL_ACCEL = 1./0.;
Swe.SwephData.TNODE_MIN_HELIO_DECL_ACCEL = 1./0.;



///////////////////////////////////////////////////////////////
// MEAN APOGEE (Lilith): //////////////////////////////////////
///////////////////////////////////////////////////////////////
Swe.SwephData.MAPOGEE_MAX_LON_SPEED = 0.114;
Swe.SwephData.MAPOGEE_MIN_LON_SPEED = 0.113;
Swe.SwephData.MAPOGEE_MAX_LON_ACCEL = 0.000031;
Swe.SwephData.MAPOGEE_MIN_LON_ACCEL = -0.000031;
/**
* There is no meaning in calculating topocentric positions of mean elements,
* so it's more an academic kind of exercise...
*/
Swe.SwephData.MAPOGEE_MAX_TOPO_LON_SPEED = 0.12;
Swe.SwephData.MAPOGEE_MIN_TOPO_LON_SPEED = 0.12;
Swe.SwephData.MAPOGEE_MAX_TOPO_LON_ACCEL = 0.000031;
Swe.SwephData.MAPOGEE_MIN_TOPO_LON_ACCEL = 0.000031;
// No heliocentric positions for the mean apogee...
Swe.SwephData.MAPOGEE_MAX_HELIO_LON_SPEED = 1./0;
Swe.SwephData.MAPOGEE_MIN_HELIO_LON_SPEED = 1./0;
Swe.SwephData.MAPOGEE_MAX_HELIO_LON_ACCEL = 1./0;
Swe.SwephData.MAPOGEE_MIN_HELIO_LON_ACCEL = 1./0;

Swe.SwephData.MAPOGEE_MAX_LAT_SPEED = 0.0155;
Swe.SwephData.MAPOGEE_MIN_LAT_SPEED = -0.016;
Swe.SwephData.MAPOGEE_MAX_LAT_ACCEL = 0.000052;
Swe.SwephData.MAPOGEE_MIN_LAT_ACCEL = -0.0000525;
Swe.SwephData.MAPOGEE_MAX_TOPO_LAT_SPEED = 0.0156;
Swe.SwephData.MAPOGEE_MIN_TOPO_LAT_SPEED = -0.0156;
Swe.SwephData.MAPOGEE_MAX_TOPO_LAT_ACCEL = 0.000052;
Swe.SwephData.MAPOGEE_MIN_TOPO_LAT_ACCEL = -0.000052;
// No heliocentric positions for the mean apogee...
Swe.SwephData.MAPOGEE_MAX_HELIO_LAT_SPEED = 1./0.;
Swe.SwephData.MAPOGEE_MIN_HELIO_LAT_SPEED = 1./0.;
Swe.SwephData.MAPOGEE_MAX_HELIO_LAT_ACCEL = 1./0.;
Swe.SwephData.MAPOGEE_MIN_HELIO_LAT_ACCEL = 1./0.;

Swe.SwephData.MAPOGEE_MAX_DIST_SPEED = 0.0;
Swe.SwephData.MAPOGEE_MIN_DIST_SPEED = 0.0;
Swe.SwephData.MAPOGEE_MAX_DIST_ACCEL = 0.0;
Swe.SwephData.MAPOGEE_MIN_DIST_ACCEL = 0.0;
Swe.SwephData.MAPOGEE_MAX_TOPO_DIST_SPEED = 0.0;
Swe.SwephData.MAPOGEE_MIN_TOPO_DIST_SPEED = 0.0;
Swe.SwephData.MAPOGEE_MAX_TOPO_DIST_ACCEL = 0.0;
Swe.SwephData.MAPOGEE_MIN_TOPO_DIST_ACCEL = 0.0;
// No heliocentric positions for the mean apogee...
Swe.SwephData.MAPOGEE_MAX_HELIO_DIST_SPEED = 1./0.;
Swe.SwephData.MAPOGEE_MIN_HELIO_DIST_SPEED = 1./0.;
Swe.SwephData.MAPOGEE_MAX_HELIO_DIST_ACCEL = 1./0.;
Swe.SwephData.MAPOGEE_MIN_HELIO_DIST_ACCEL = 1./0.;

// time ./swetest -head -bj-3027215.5 -ejplde431.eph -edir./ephe -pA -s0.7064 -fPJadss -n15511619 > meanapogee_jpl
Swe.SwephData.MAPOGEE_MAX_RECT_SPEED = 0.1282058;
Swe.SwephData.MAPOGEE_MIN_RECT_SPEED = 0.0949346;
Swe.SwephData.MAPOGEE_MAX_RECT_ACCEL = 1./0.;
Swe.SwephData.MAPOGEE_MIN_RECT_ACCEL = 1./0.;
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pA -s0.7064 -fPJadss -n15511619 -topo0,0,50000 > meanapogee-topo-0-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pA -s0.7064 -fPJadss -n15511619 -topo11,0,0 > meanapogee-topo-11-0-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pA -s0.7064 -fPJadss -n15511619 -topo11,0,50000 > meanapogee-topo-11-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pA -s0.7064 -fPJadss -n15511619 -topo11,0,-6300000 > meanapogee-topo-11-0--6300000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pA -s0.7064 -fPJadss -n15511619 -topo11,89,0 > meanapogee-topo-11-89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pA -s0.7064 -fPJadss -n15511619 -topo11,-89,0 > meanapogee-topo-11--89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pA -s0.7064 -fPJadss -n15511619 -topo11,89,50000 > meanapogee-topo-11-89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pA -s0.7064 -fPJadss -n15511619 -topo11,-89,50000 > meanapogee-topo-11--89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pA -s0.7064 -fPJadss -n15511619 -topo179,0,50000 > meanapogee-topo-179-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pA -s0.7064 -fPJadss -n15511619 -topo-179,0,50000 > meanapogee-topo--179-0-50000 &
// ... -topo0,0,50000
// ... -topo11,0,0
// ... -topo11,0,50000
// ... -topo11,0,-6300000
// ... -topo11,89,0
// ... -topo11,-89,0
// ... -topo11,89,50000
// ... -topo11,-89,50000
// ... -topo179,0,50000
// ... -topo-179,0,50000
Swe.SwephData.MAPOGEE_MAX_TOPO_RECT_SPEED = Swe.SwephData.MAPOGEE_MAX_RECT_SPEED;
Swe.SwephData.MAPOGEE_MIN_TOPO_RECT_SPEED = Swe.SwephData.MAPOGEE_MIN_RECT_SPEED;
Swe.SwephData.MAPOGEE_MAX_TOPO_RECT_ACCEL = 1./0.;
Swe.SwephData.MAPOGEE_MIN_TOPO_RECT_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.MAPOGEE_MAX_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.MAPOGEE_MIN_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.MAPOGEE_MAX_HELIO_RECT_ACCEL = 1./0.;
Swe.SwephData.MAPOGEE_MIN_HELIO_RECT_ACCEL = 1./0.;

Swe.SwephData.MAPOGEE_MAX_DECL_SPEED = 0.0589295;
Swe.SwephData.MAPOGEE_MIN_DECL_SPEED = -0.0589357;
Swe.SwephData.MAPOGEE_MAX_DECL_ACCEL = 1./0.;
Swe.SwephData.MAPOGEE_MIN_DECL_ACCEL = 1./0.;
// ... -topo0,0,50000
// ... -topo11,0,0
// ... -topo11,0,50000
// ... -topo11,0,-6300000
// ... -topo11,89,0
// ... -topo11,-89,0
// ... -topo11,89,50000
// ... -topo11,-89,50000
// ... -topo179,0,50000
// ... -topo-179,0,50000
Swe.SwephData.MAPOGEE_MAX_TOPO_DECL_SPEED = Swe.SwephData.MAPOGEE_MAX_DECL_SPEED;
Swe.SwephData.MAPOGEE_MIN_TOPO_DECL_SPEED = Swe.SwephData.MAPOGEE_MIN_DECL_SPEED;
Swe.SwephData.MAPOGEE_MAX_TOPO_DECL_ACCEL = 1./0.;
Swe.SwephData.MAPOGEE_MIN_TOPO_DECL_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.MAPOGEE_MAX_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.MAPOGEE_MIN_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.MAPOGEE_MAX_HELIO_DECL_ACCEL = 1./0.;
Swe.SwephData.MAPOGEE_MIN_HELIO_DECL_ACCEL = 1./0.;



///////////////////////////////////////////////////////////////
// OSCULATING APOGEE: /////////////////////////////////////////
///////////////////////////////////////////////////////////////
Swe.SwephData.OAPOGEE_MAX_LON_SPEED = 6.5; // ???
Swe.SwephData.OAPOGEE_MIN_LON_SPEED = -3.9; // ???
Swe.SwephData.OAPOGEE_MAX_LON_ACCEL = 2.12; // ???
Swe.SwephData.OAPOGEE_MIN_LON_ACCEL = -2.2; // ???
Swe.SwephData.OAPOGEE_MAX_TOPO_LON_SPEED = 6.48;
Swe.SwephData.OAPOGEE_MIN_TOPO_LON_SPEED = -7.12;
Swe.SwephData.OAPOGEE_MAX_TOPO_LON_ACCEL = 5; // ???
Swe.SwephData.OAPOGEE_MIN_TOPO_LON_ACCEL = -6; // ???
// No heliocentric positions for the osculating apogee...
Swe.SwephData.OAPOGEE_MAX_HELIO_LON_SPEED = 1./0.;
Swe.SwephData.OAPOGEE_MIN_HELIO_LON_SPEED = 1./0.;
Swe.SwephData.OAPOGEE_MAX_HELIO_LON_ACCEL = 1./0.;
Swe.SwephData.OAPOGEE_MIN_HELIO_LON_ACCEL = 1./0.;

Swe.SwephData.OAPOGEE_MAX_LAT_SPEED = 0.595;
Swe.SwephData.OAPOGEE_MIN_LAT_SPEED = -0.592;
Swe.SwephData.OAPOGEE_MAX_LAT_ACCEL = 0.198;
Swe.SwephData.OAPOGEE_MIN_LAT_ACCEL = -0.184;
Swe.SwephData.OAPOGEE_MAX_TOPO_LAT_SPEED = 0.595;
Swe.SwephData.OAPOGEE_MIN_TOPO_LAT_SPEED = -0.593;
Swe.SwephData.OAPOGEE_MAX_TOPO_LAT_ACCEL = 0.22; // ???
Swe.SwephData.OAPOGEE_MIN_TOPO_LAT_ACCEL = -0.2; // ???
// No heliocentric positions for the osculating apogee...
Swe.SwephData.OAPOGEE_MAX_HELIO_LAT_SPEED = 1./0.;
Swe.SwephData.OAPOGEE_MIN_HELIO_LAT_SPEED = 1./0.;
Swe.SwephData.OAPOGEE_MAX_HELIO_LAT_ACCEL = 1./0.;
Swe.SwephData.OAPOGEE_MIN_HELIO_LAT_ACCEL = 1./0.;

Swe.SwephData.OAPOGEE_MAX_DIST_SPEED = 0.0000336;
Swe.SwephData.OAPOGEE_MIN_DIST_SPEED = -0.0000388;
Swe.SwephData.OAPOGEE_MAX_DIST_ACCEL = 0.000320;
Swe.SwephData.OAPOGEE_MIN_DIST_ACCEL = -0.000332;
Swe.SwephData.OAPOGEE_MAX_TOPO_DIST_SPEED = 0.0000348;
Swe.SwephData.OAPOGEE_MIN_TOPO_DIST_SPEED = -0.0000389;
Swe.SwephData.OAPOGEE_MAX_TOPO_DIST_ACCEL = 0.00033; // ???
Swe.SwephData.OAPOGEE_MIN_TOPO_DIST_ACCEL = -0.00033; // ???
// No heliocentric positions for the osculating apogee...
Swe.SwephData.OAPOGEE_MAX_HELIO_DIST_SPEED = 1./0.;
Swe.SwephData.OAPOGEE_MIN_HELIO_DIST_SPEED = 1./0.;
Swe.SwephData.OAPOGEE_MAX_HELIO_DIST_ACCEL = 1./0.;
Swe.SwephData.OAPOGEE_MIN_HELIO_DIST_ACCEL = 1./0.;

// time ./swetest -head -bj-3027215.5 -ejplde431.eph -edir./ephe -pB -s0.7064 -fPJadss -n15511619 > oscapogee_jpl
Swe.SwephData.OAPOGEE_MAX_RECT_SPEED = 7.3217998;
Swe.SwephData.OAPOGEE_MIN_RECT_SPEED = -4.1553280;
Swe.SwephData.OAPOGEE_MAX_RECT_ACCEL = 1./0.;
Swe.SwephData.OAPOGEE_MIN_RECT_ACCEL = 1./0.;
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pB -s0.7064 -fPJadss -n15511619 -topo0,0,50000 > oscapogee-topo-0-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pB -s0.7064 -fPJadss -n15511619 -topo11,0,0 > oscapogee-topo-11-0-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pB -s0.7064 -fPJadss -n15511619 -topo11,0,50000 > oscapogee-topo-11-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pB -s0.7064 -fPJadss -n15511619 -topo11,0,-6300000 > oscapogee-topo-11-0--6300000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pB -s0.7064 -fPJadss -n15511619 -topo11,89,0 > oscapogee-topo-11-89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pB -s0.7064 -fPJadss -n15511619 -topo11,-89,0 > oscapogee-topo-11--89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pB -s0.7064 -fPJadss -n15511619 -topo11,89,50000 > oscapogee-topo-11-89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pB -s0.7064 -fPJadss -n15511619 -topo11,-89,50000 > oscapogee-topo-11--89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pB -s0.7064 -fPJadss -n15511619 -topo179,0,50000 > oscapogee-topo-179-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pB -s0.7064 -fPJadss -n15511619 -topo-179,0,50000 > oscapogee-topo--179-0-50000 &
// ... -topo0,0,50000
// ... -topo11,0,0
// ... -topo11,0,50000
// ... -topo11,0,-6300000
// ... -topo11,89,0
// ... -topo11,-89,0
// ... -topo11,89,50000
// ... -topo11,-89,50000
// ... -topo179,0,50000
// ... -topo-179,0,50000
Swe.SwephData.OAPOGEE_MAX_TOPO_RECT_SPEED = Swe.SwephData.OAPOGEE_MAX_RECT_SPEED;
Swe.SwephData.OAPOGEE_MIN_TOPO_RECT_SPEED = Swe.SwephData.OAPOGEE_MIN_RECT_SPEED;
Swe.SwephData.OAPOGEE_MAX_TOPO_RECT_ACCEL = 1./0.;
Swe.SwephData.OAPOGEE_MIN_TOPO_RECT_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.OAPOGEE_MAX_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.OAPOGEE_MIN_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.OAPOGEE_MAX_HELIO_RECT_ACCEL = 1./0.;
Swe.SwephData.OAPOGEE_MIN_HELIO_RECT_ACCEL = 1./0.;

Swe.SwephData.OAPOGEE_MAX_DECL_SPEED = 3.1477670;
Swe.SwephData.OAPOGEE_MIN_DECL_SPEED = -3.1524771;
Swe.SwephData.OAPOGEE_MAX_DECL_ACCEL = 1./0.;
Swe.SwephData.OAPOGEE_MIN_DECL_ACCEL = 1./0.;
// ... -topo0,0,50000
// ... -topo11,0,0
// ... -topo11,0,50000
// ... -topo11,0,-6300000
// ... -topo11,89,0
// ... -topo11,-89,0
// ... -topo11,89,50000
// ... -topo11,-89,50000
// ... -topo179,0,50000
// ... -topo-179,0,50000
Swe.SwephData.OAPOGEE_MAX_TOPO_DECL_SPEED = Swe.SwephData.OAPOGEE_MAX_DECL_SPEED;
Swe.SwephData.OAPOGEE_MIN_TOPO_DECL_SPEED = Swe.SwephData.OAPOGEE_MIN_DECL_SPEED;
Swe.SwephData.OAPOGEE_MAX_TOPO_DECL_ACCEL = 1./0.;
Swe.SwephData.OAPOGEE_MIN_TOPO_DECL_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.OAPOGEE_MAX_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.OAPOGEE_MIN_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.OAPOGEE_MAX_HELIO_DECL_ACCEL = 1./0.;
Swe.SwephData.OAPOGEE_MIN_HELIO_DECL_ACCEL = 1./0.;



///////////////////////////////////////////////////////////////
// CHIRON: ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Swe.SwephData.CHIRON_MAX_LON_SPEED = 0.1481;
Swe.SwephData.CHIRON_MIN_LON_SPEED = -0.08136;
Swe.SwephData.CHIRON_MAX_LON_ACCEL = 0.001985;
Swe.SwephData.CHIRON_MIN_LON_ACCEL = -0.002076;
Swe.SwephData.CHIRON_MAX_TOPO_LON_SPEED = 0.1490;
Swe.SwephData.CHIRON_MIN_TOPO_LON_SPEED = -0.0826;
Swe.SwephData.CHIRON_MAX_TOPO_LON_ACCEL = 0.00892;
Swe.SwephData.CHIRON_MIN_TOPO_LON_ACCEL = -0.0091;
Swe.SwephData.CHIRON_MAX_HELIO_LON_SPEED = 0.048572;
Swe.SwephData.CHIRON_MIN_HELIO_LON_SPEED = 0.008467;
Swe.SwephData.CHIRON_MAX_HELIO_LON_ACCEL = 0.000036235;
Swe.SwephData.CHIRON_MIN_HELIO_LON_ACCEL = -0.000035949;

Swe.SwephData.CHIRON_MAX_LAT_SPEED = 0.01538;
Swe.SwephData.CHIRON_MIN_LAT_SPEED = -0.01344;
Swe.SwephData.CHIRON_MAX_LAT_ACCEL = 0.000313;
Swe.SwephData.CHIRON_MIN_LAT_ACCEL = -0.0002607;
Swe.SwephData.CHIRON_MAX_TOPO_LAT_SPEED = 0.01574;
Swe.SwephData.CHIRON_MIN_TOPO_LAT_SPEED =  -0.01368;
Swe.SwephData.CHIRON_MAX_TOPO_LAT_ACCEL = 0.0033643;
Swe.SwephData.CHIRON_MIN_TOPO_LAT_ACCEL = -0.003132;
Swe.SwephData.CHIRON_MAX_HELIO_LAT_SPEED = 0.0066239;
Swe.SwephData.CHIRON_MIN_HELIO_LAT_SPEED = -0.0018657;
Swe.SwephData.CHIRON_MAX_HELIO_LAT_ACCEL = 0.000011620;
Swe.SwephData.CHIRON_MIN_HELIO_LAT_ACCEL = -0.000017098;

Swe.SwephData.CHIRON_MAX_DIST_SPEED = 0.01867;
Swe.SwephData.CHIRON_MIN_DIST_SPEED = -0.018683;
Swe.SwephData.CHIRON_MAX_DIST_ACCEL = 0.0003195;
Swe.SwephData.CHIRON_MIN_DIST_ACCEL = -0.0002838;
Swe.SwephData.CHIRON_MAX_TOPO_DIST_SPEED = 0.01883;
Swe.SwephData.CHIRON_MIN_TOPO_DIST_SPEED = -0.01884;
Swe.SwephData.CHIRON_MAX_TOPO_DIST_ACCEL = 0.001324;
Swe.SwephData.CHIRON_MIN_TOPO_DIST_ACCEL = -0.001288;
Swe.SwephData.CHIRON_MAX_HELIO_DIST_SPEED = 0.00208240;
Swe.SwephData.CHIRON_MIN_HELIO_DIST_SPEED = -0.0020787;
Swe.SwephData.CHIRON_MAX_HELIO_DIST_ACCEL = 0.0000023777;
Swe.SwephData.CHIRON_MIN_HELIO_DIST_ACCEL = -0.0000012240;

// time ./swetest -head -bj-3027215.5 -ejplde431.eph -edir./ephe -pD -s0.7064 -fPJadss -n15511619 > chiron_jpl
Swe.SwephData.CHIRON_MAX_RECT_SPEED = 0.1481655;
Swe.SwephData.CHIRON_MIN_RECT_SPEED = -0.0786760;
Swe.SwephData.CHIRON_MAX_RECT_ACCEL = 1./0.;
Swe.SwephData.CHIRON_MIN_RECT_ACCEL = 1./0.;
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pD -s0.7064 -fPJadss -n15511619 -topo0,0,50000 > chiron-topo-0-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pD -s0.7064 -fPJadss -n15511619 -topo11,0,0 > chiron-topo-11-0-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pD -s0.7064 -fPJadss -n15511619 -topo11,0,50000 > chiron-topo-11-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pD -s0.7064 -fPJadss -n15511619 -topo11,0,-6300000 > chiron-topo-11-0--6300000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pD -s0.7064 -fPJadss -n15511619 -topo11,89,0 > chiron-topo-11-89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pD -s0.7064 -fPJadss -n15511619 -topo11,-89,0 > chiron-topo-11--89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pD -s0.7064 -fPJadss -n15511619 -topo11,89,50000 > chiron-topo-11-89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pD -s0.7064 -fPJadss -n15511619 -topo11,-89,50000 > chiron-topo-11--89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pD -s0.7064 -fPJadss -n15511619 -topo179,0,50000 > chiron-topo-179-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pD -s0.7064 -fPJadss -n15511619 -topo-179,0,50000 > chiron-topo--179-0-50000 &
// -0.1149048 .. 0.1658259 at -topo0,0,50000    <-- MIN <-- MAX
// -0.1148605 .. 0.1657069 at -topo11,0,0
// -0.1148696 .. 0.1657190 at -topo11,0,50000
// -0.1137132 .. 0.1648709 at -topo11,0,-6300000
// -0.1137193 .. 0.1648724 at -topo11,89,0
// -0.1137194 .. 0.1648724 at -topo11,-89,0
// -0.1137194 .. 0.1648724 at -topo11,89,50000
// -0.1137195 .. 0.1648724 at -topo11,-89,50000
// -0.1137290 .. 0.1653790 at -topo179,0,50000
// -0.1137718 .. 0.1653926 at -topo-179,0,50000
Swe.SwephData.CHIRON_MAX_TOPO_RECT_SPEED = 0.1658259;
Swe.SwephData.CHIRON_MIN_TOPO_RECT_SPEED = -0.1149048;
Swe.SwephData.CHIRON_MAX_TOPO_RECT_ACCEL = 1./0.;
Swe.SwephData.CHIRON_MIN_TOPO_RECT_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.CHIRON_MAX_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.CHIRON_MIN_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.CHIRON_MAX_HELIO_RECT_ACCEL = 1./0.;
Swe.SwephData.CHIRON_MIN_HELIO_RECT_ACCEL = 1./0.;

Swe.SwephData.CHIRON_MAX_DECL_SPEED = 0.0383058;
Swe.SwephData.CHIRON_MIN_DECL_SPEED = -0.0553686;
Swe.SwephData.CHIRON_MAX_DECL_ACCEL = 1./0.;
Swe.SwephData.CHIRON_MIN_DECL_ACCEL = 1./0.;
// -0.0644868 .. 0.0446940 at -topo0,0,50000
// -0.0644831 .. 0.0447047 at -topo11,0,0
// -0.0644829 .. 0.0447050 at -topo11,0,50000
// -0.0645042 .. 0.0447169 at -topo11,0,-6300000
// -0.0645042 .. 0.0447167 at -topo11,89,0
// -0.0645041 .. 0.0447168 at -topo11,-89,0
// -0.0645042 .. 0.0447167 at -topo11,89,50000
// -0.0645041 .. 0.0447168 at -topo11,-89,50000
// -0.0645219 .. 0.0447458 at -topo179,0,50000
// -0.0645226 .. 0.0447469 at -topo-179,0,50000 <-- MIN <-- MAX
Swe.SwephData.CHIRON_MAX_TOPO_DECL_SPEED = 0.0447469;
Swe.SwephData.CHIRON_MIN_TOPO_DECL_SPEED = -0.0645226;
Swe.SwephData.CHIRON_MAX_TOPO_DECL_ACCEL = 1./0.;
Swe.SwephData.CHIRON_MIN_TOPO_DECL_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.CHIRON_MAX_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.CHIRON_MIN_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.CHIRON_MAX_HELIO_DECL_ACCEL = 1./0.;
Swe.SwephData.CHIRON_MIN_HELIO_DECL_ACCEL = 1./0.;



///////////////////////////////////////////////////////////////
// PHOLUS: ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Swe.SwephData.PHOLUS_MAX_LON_SPEED = 0.144;
Swe.SwephData.PHOLUS_MIN_LON_SPEED = -0.083;
Swe.SwephData.PHOLUS_MAX_LON_ACCEL = 0.00202;
Swe.SwephData.PHOLUS_MIN_LON_ACCEL = -0.00203;
Swe.SwephData.PHOLUS_MAX_TOPO_LON_SPEED = 0.146;
Swe.SwephData.PHOLUS_MIN_TOPO_LON_SPEED = -0.084;
Swe.SwephData.PHOLUS_MAX_TOPO_LON_ACCEL = 0.009147;
Swe.SwephData.PHOLUS_MIN_TOPO_LON_ACCEL = -0.0092;
Swe.SwephData.PHOLUS_MAX_HELIO_LON_SPEED = 0.0456612;
Swe.SwephData.PHOLUS_MIN_HELIO_LON_SPEED = 0.0031847;
Swe.SwephData.PHOLUS_MAX_HELIO_LON_ACCEL = 0.000036611;
Swe.SwephData.PHOLUS_MIN_HELIO_LON_ACCEL = -0.000035427;

Swe.SwephData.PHOLUS_MAX_LAT_SPEED = 0.0475;
Swe.SwephData.PHOLUS_MIN_LAT_SPEED = -0.0359;
Swe.SwephData.PHOLUS_MAX_LAT_ACCEL = 0.0008841;
Swe.SwephData.PHOLUS_MIN_LAT_ACCEL = -0.000759;
Swe.SwephData.PHOLUS_MAX_TOPO_LAT_SPEED = 0.0482;
Swe.SwephData.PHOLUS_MIN_TOPO_LAT_SPEED = -0.03636;
Swe.SwephData.PHOLUS_MAX_TOPO_LAT_ACCEL = 0.00490;
Swe.SwephData.PHOLUS_MIN_TOPO_LAT_ACCEL = -0.00485;
Swe.SwephData.PHOLUS_MAX_HELIO_LAT_SPEED = 0.020809;
Swe.SwephData.PHOLUS_MIN_HELIO_LAT_SPEED = -0.0036998;
Swe.SwephData.PHOLUS_MAX_HELIO_LAT_ACCEL = 0.000022898;
Swe.SwephData.PHOLUS_MIN_HELIO_LAT_ACCEL = -0.000020868;

Swe.SwephData.PHOLUS_MAX_DIST_SPEED = 0.01806;
Swe.SwephData.PHOLUS_MIN_DIST_SPEED = -0.01822;
Swe.SwephData.PHOLUS_MAX_DIST_ACCEL = 0.0003200;
Swe.SwephData.PHOLUS_MIN_DIST_ACCEL = -0.000297;
Swe.SwephData.PHOLUS_MAX_TOPO_DIST_SPEED = 0.0183;
Swe.SwephData.PHOLUS_MIN_TOPO_DIST_SPEED = -0.0185;
Swe.SwephData.PHOLUS_MAX_TOPO_DIST_ACCEL = 0.00133;
Swe.SwephData.PHOLUS_MIN_TOPO_DIST_ACCEL = -0.00131;
Swe.SwephData.PHOLUS_MAX_HELIO_DIST_SPEED = 0.0026983;
Swe.SwephData.PHOLUS_MIN_HELIO_DIST_SPEED = -0.0026987;
Swe.SwephData.PHOLUS_MAX_HELIO_DIST_ACCEL = 0.0000030692;
Swe.SwephData.PHOLUS_MIN_HELIO_DIST_ACCEL = -0.0000013359;

// time ./swetest -head -bj-3027215.5 -ejplde431.eph -edir./ephe -pE -s0.7064 -fPJadss -n15511619 > pholus_jpl
Swe.SwephData.PHOLUS_MAX_RECT_SPEED = 0.1583175;
Swe.SwephData.PHOLUS_MIN_RECT_SPEED = -0.0960042;
Swe.SwephData.PHOLUS_MAX_RECT_ACCEL = 1./0.;
Swe.SwephData.PHOLUS_MIN_RECT_ACCEL = 1./0.;
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pE -s0.7064 -fPJadss -n15511619 -topo0,0,50000 > pholus-topo-0-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pE -s0.7064 -fPJadss -n15511619 -topo11,0,0 > pholus-topo-11-0-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pE -s0.7064 -fPJadss -n15511619 -topo11,0,50000 > pholus-topo-11-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pE -s0.7064 -fPJadss -n15511619 -topo11,0,-6300000 > pholus-topo-11-0--6300000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pE -s0.7064 -fPJadss -n15511619 -topo11,89,0 > pholus-topo-11-89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pE -s0.7064 -fPJadss -n15511619 -topo11,-89,0 > pholus-topo-11--89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pE -s0.7064 -fPJadss -n15511619 -topo11,89,50000 > pholus-topo-11-89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pE -s0.7064 -fPJadss -n15511619 -topo11,-89,50000 > pholus-topo-11--89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pE -s0.7064 -fPJadss -n15511619 -topo179,0,50000 > pholus-topo-179-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pE -s0.7064 -fPJadss -n15511619 -topo-179,0,50000 > pholus-topo--179-0-50000 &
// -0.1558616 .. 0.1726363 at -topo0,0,50000
// -0.1557640 .. 0.1727827 at -topo11,0,0
// -0.1557616 .. 0.1727958 at -topo11,0,50000   <-- MAX
// -0.1560708 .. 0.1714469 at -topo11,0,-6300000
// -0.1560692 .. 0.1714450 at -topo11,89,0
// -0.1560691 .. 0.1714451 at -topo11,-89,0
// -0.1560692 .. 0.1714450 at -topo11,89,50000
// -0.1560690 .. 0.1714451 at -topo11,-89,50000
// -0.1562780 .. 0.1726044 at -topo179,0,50000
// -0.1562970 .. 0.1726383 at -topo-179,0,50000 <-- MIN
Swe.SwephData.PHOLUS_MAX_TOPO_RECT_SPEED = 0.1727958;
Swe.SwephData.PHOLUS_MIN_TOPO_RECT_SPEED = -0.1562970;
Swe.SwephData.PHOLUS_MAX_TOPO_RECT_ACCEL = 1./0.;
Swe.SwephData.PHOLUS_MIN_TOPO_RECT_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.PHOLUS_MAX_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.PHOLUS_MIN_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.PHOLUS_MAX_HELIO_RECT_ACCEL = 1./0.;
Swe.SwephData.PHOLUS_MIN_HELIO_RECT_ACCEL = 1./0.;

Swe.SwephData.PHOLUS_MAX_DECL_SPEED = 0.0747238;
Swe.SwephData.PHOLUS_MIN_DECL_SPEED = -0.0494900;
Swe.SwephData.PHOLUS_MAX_DECL_ACCEL = 1./0.;
Swe.SwephData.PHOLUS_MIN_DECL_ACCEL = 1./0.;
// -0.0582157 .. 0.0833630 at -topo0,0,50000    <-- MAX
// -0.0582233 .. 0.0833588 at -topo11,0,0
// -0.0582261 .. 0.0833615 at -topo11,0,50000   <-- MIN
// -0.0578962 .. 0.0830224 at -topo11,0,-6300000
// -0.0578955 .. 0.0830243 at -topo11,89,0
// -0.0578958 .. 0.0830241 at -topo11,-89,0
// -0.0578955 .. 0.0830243 at -topo11,89,50000
// -0.0578957 .. 0.0830241 at -topo11,-89,50000
// -0.0580738 .. 0.0828280 at -topo179,0,50000
// -0.0580625 .. 0.0828404 at -topo-179,0,50000
Swe.SwephData.PHOLUS_MAX_TOPO_DECL_SPEED = 0.0833630;
Swe.SwephData.PHOLUS_MIN_TOPO_DECL_SPEED = -0.0582261;
Swe.SwephData.PHOLUS_MAX_TOPO_DECL_ACCEL = 1./0.;
Swe.SwephData.PHOLUS_MIN_TOPO_DECL_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.PHOLUS_MAX_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.PHOLUS_MIN_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.PHOLUS_MAX_HELIO_DECL_ACCEL = 1./0.;
Swe.SwephData.PHOLUS_MIN_HELIO_DECL_ACCEL = 1./0.;



///////////////////////////////////////////////////////////////
// CERES: /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Swe.SwephData.CERES_MAX_LON_SPEED = 0.47778;
Swe.SwephData.CERES_MIN_LON_SPEED = -0.2397;
Swe.SwephData.CERES_MAX_LON_ACCEL = 0.00784;
Swe.SwephData.CERES_MIN_LON_ACCEL = -0.007809;
Swe.SwephData.CERES_MAX_TOPO_LON_SPEED = 0.482;
Swe.SwephData.CERES_MIN_TOPO_LON_SPEED = -0.2462;
Swe.SwephData.CERES_MAX_TOPO_LON_ACCEL = 0.04415;
Swe.SwephData.CERES_MIN_TOPO_LON_ACCEL = -0.0434;
Swe.SwephData.CERES_MAX_HELIO_LON_SPEED = 0.27746;
Swe.SwephData.CERES_MIN_HELIO_LON_SPEED = 0.1684273;
Swe.SwephData.CERES_MAX_HELIO_LON_ACCEL = 0.00024858;
Swe.SwephData.CERES_MIN_HELIO_LON_ACCEL = -0.00026465;

Swe.SwephData.CERES_MAX_LAT_SPEED = 0.111909;
Swe.SwephData.CERES_MIN_LAT_SPEED = -0.10943;
Swe.SwephData.CERES_MAX_LAT_ACCEL = 0.003567;
Swe.SwephData.CERES_MIN_LAT_ACCEL = -0.003284;
Swe.SwephData.CERES_MAX_TOPO_LAT_SPEED = 0.1141;
Swe.SwephData.CERES_MIN_TOPO_LAT_SPEED = -0.11225;
Swe.SwephData.CERES_MAX_TOPO_LAT_ACCEL = 0.0254;
Swe.SwephData.CERES_MIN_TOPO_LAT_ACCEL = -0.0241;
Swe.SwephData.CERES_MAX_HELIO_LAT_SPEED = 0.049023;
Swe.SwephData.CERES_MIN_HELIO_LAT_SPEED = -0.047271;
Swe.SwephData.CERES_MAX_HELIO_LAT_ACCEL = 0.000239747;
Swe.SwephData.CERES_MIN_HELIO_LAT_ACCEL = -0.00020807;

Swe.SwephData.CERES_MAX_DIST_SPEED = 0.014525;
Swe.SwephData.CERES_MIN_DIST_SPEED = -0.014456;
Swe.SwephData.CERES_MAX_DIST_ACCEL = 0.0003006;
Swe.SwephData.CERES_MIN_DIST_ACCEL = -0.0001636;
Swe.SwephData.CERES_MAX_TOPO_DIST_SPEED = 0.01468;
Swe.SwephData.CERES_MIN_TOPO_DIST_SPEED = -0.01462;
Swe.SwephData.CERES_MAX_TOPO_DIST_ACCEL = 0.001298;
Swe.SwephData.CERES_MIN_TOPO_DIST_ACCEL = -0.001166;
Swe.SwephData.CERES_MAX_HELIO_DIST_SPEED = 0.0012446382;
Swe.SwephData.CERES_MIN_HELIO_DIST_SPEED = -0.001241531;
Swe.SwephData.CERES_MAX_HELIO_DIST_ACCEL = 0.0000061;
Swe.SwephData.CERES_MIN_HELIO_DIST_ACCEL = -0.00000387;

// time ./swetest -head -bj-3027215.5 -ejplde431.eph -edir./ephe -pF -s0.7064 -fPJadss -n15511619 > ceres_jpl
Swe.SwephData.CERES_MAX_RECT_SPEED = 0.5224900;
Swe.SwephData.CERES_MIN_RECT_SPEED = -0.2653369;
Swe.SwephData.CERES_MAX_RECT_ACCEL = 1./0.;
Swe.SwephData.CERES_MIN_RECT_ACCEL = 1./0.;
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pF -s0.7064 -fPJadss -n15511619 -topo0,0,50000 > ceres-topo-0-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pF -s0.7064 -fPJadss -n15511619 -topo11,0,0 > ceres-topo-11-0-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pF -s0.7064 -fPJadss -n15511619 -topo11,0,50000 > ceres-topo-11-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pF -s0.7064 -fPJadss -n15511619 -topo11,0,-6300000 > ceres-topo-11-0--6300000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pF -s0.7064 -fPJadss -n15511619 -topo11,89,0 > ceres-topo-11-89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pF -s0.7064 -fPJadss -n15511619 -topo11,-89,0 > ceres-topo-11--89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pF -s0.7064 -fPJadss -n15511619 -topo11,89,50000 > ceres-topo-11-89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pF -s0.7064 -fPJadss -n15511619 -topo11,-89,50000 > ceres-topo-11--89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pF -s0.7064 -fPJadss -n15511619 -topo179,0,50000 > ceres-topo-179-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pF -s0.7064 -fPJadss -n15511619 -topo-179,0,50000 > ceres-topo--179-0-50000 &
// -0.2804198 .. 0.5306490 at -topo0,0,50000    <-- MAX
// -0.2808381 .. 0.5304787 at -topo11,0,0
// -0.2809222 .. 0.5305165 at -topo11,0,50000   <-- MIN
// -0.2705653 .. 0.5259866 at -topo11,0,-6300000
// -0.2706153 .. 0.5259741 at -topo11,89,0
// -0.2706155 .. 0.5259740 at -topo11,-89,0
// -0.2706166 .. 0.5259737 at -topo11,89,50000
// -0.2706168 .. 0.5259737 at -topo11,-89,50000
// -0.2808423 .. 0.5305055 at -topo179,0,50000
// -0.2807956 .. 0.5304711 at -topo-179,0,50000
Swe.SwephData.CERES_MAX_TOPO_RECT_SPEED = 0.5306490;
Swe.SwephData.CERES_MIN_TOPO_RECT_SPEED = -0.2809222;
Swe.SwephData.CERES_MAX_TOPO_RECT_ACCEL = 1./0.;
Swe.SwephData.CERES_MIN_TOPO_RECT_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.CERES_MAX_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.CERES_MIN_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.CERES_MAX_HELIO_RECT_ACCEL = 1./0.;
Swe.SwephData.CERES_MIN_HELIO_RECT_ACCEL = 1./0.;

Swe.SwephData.CERES_MAX_DECL_SPEED = 0.2113396;
Swe.SwephData.CERES_MIN_DECL_SPEED = -0.1986084;
Swe.SwephData.CERES_MAX_DECL_ACCEL = 1./0.;
Swe.SwephData.CERES_MIN_DECL_ACCEL = 1./0.;
// -0.2014059 .. 0.2137539 at -topo0,0,50000    <-- MIN
// -0.2013611 .. 0.2137622 at -topo11,0,0
// -0.2013636 .. 0.2137663 at -topo11,0,50000
// -0.2010531 .. 0.2135844 at -topo11,0,-6300000
// -0.2010537 .. 0.2135871 at -topo11,89,0
// -0.2010558 .. 0.2135828 at -topo11,-89,0
// -0.2010537 .. 0.2135871 at -topo11,89,50000
// -0.2010559 .. 0.2135828 at -topo11,-89,50000
// -0.2012663 .. 0.2139429 at -topo179,0,50000
// -0.2012691 .. 0.2139455 at -topo-179,0,50000 <-- MAX
Swe.SwephData.CERES_MAX_TOPO_DECL_SPEED = 0.2139455;
Swe.SwephData.CERES_MIN_TOPO_DECL_SPEED = -0.2014059;
Swe.SwephData.CERES_MAX_TOPO_DECL_ACCEL = 1./0.;
Swe.SwephData.CERES_MIN_TOPO_DECL_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.CERES_MAX_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.CERES_MIN_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.CERES_MAX_HELIO_DECL_ACCEL = 1./0.;
Swe.SwephData.CERES_MIN_HELIO_DECL_ACCEL = 1./0.;



///////////////////////////////////////////////////////////////
// PALLAS: ////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Swe.SwephData.PALLAS_MAX_LON_SPEED = 0.7687;
Swe.SwephData.PALLAS_MIN_LON_SPEED = -0.3482;
Swe.SwephData.PALLAS_MAX_LON_ACCEL = 0.01561;
Swe.SwephData.PALLAS_MIN_LON_ACCEL = -0.01499;
Swe.SwephData.PALLAS_MAX_TOPO_LON_SPEED = 0.7730;
Swe.SwephData.PALLAS_MIN_TOPO_LON_SPEED = -0.3570;
Swe.SwephData.PALLAS_MAX_TOPO_LON_ACCEL = 0.12775;
Swe.SwephData.PALLAS_MIN_TOPO_LON_ACCEL = -0.1280;
Swe.SwephData.PALLAS_MAX_HELIO_LON_SPEED = 0.626831;
Swe.SwephData.PALLAS_MIN_HELIO_LON_SPEED = 0.11145519;
Swe.SwephData.PALLAS_MAX_HELIO_LON_ACCEL = 0.0026825;
Swe.SwephData.PALLAS_MIN_HELIO_LON_ACCEL = -0.0026481;

Swe.SwephData.PALLAS_MAX_LAT_SPEED = 0.54900;
Swe.SwephData.PALLAS_MIN_LAT_SPEED = -0.5261;
Swe.SwephData.PALLAS_MAX_LAT_ACCEL = 0.013324;
Swe.SwephData.PALLAS_MIN_LAT_ACCEL = -0.008125;
Swe.SwephData.PALLAS_MAX_TOPO_LAT_SPEED = 0.5518;
Swe.SwephData.PALLAS_MIN_TOPO_LAT_SPEED = -0.5288;
Swe.SwephData.PALLAS_MAX_TOPO_LAT_ACCEL = 0.0506;
Swe.SwephData.PALLAS_MIN_TOPO_LAT_ACCEL = -0.02938;
Swe.SwephData.PALLAS_MAX_HELIO_LAT_SPEED = 0.2002976;
Swe.SwephData.PALLAS_MIN_HELIO_LAT_SPEED = -0.18542288;
Swe.SwephData.PALLAS_MAX_HELIO_LAT_ACCEL = 0.002821069;
Swe.SwephData.PALLAS_MIN_HELIO_LAT_ACCEL = -0.00077783;

Swe.SwephData.PALLAS_MAX_DIST_SPEED = 0.01780;
Swe.SwephData.PALLAS_MIN_DIST_SPEED = -0.01778;
Swe.SwephData.PALLAS_MAX_DIST_ACCEL = 0.0003338;
Swe.SwephData.PALLAS_MIN_DIST_ACCEL = -0.000185;
Swe.SwephData.PALLAS_MAX_TOPO_DIST_SPEED = 0.0180;
Swe.SwephData.PALLAS_MIN_TOPO_DIST_SPEED = -0.01799;
Swe.SwephData.PALLAS_MAX_TOPO_DIST_ACCEL = 0.001342;
Swe.SwephData.PALLAS_MIN_TOPO_DIST_ACCEL = -0.001189;
Swe.SwephData.PALLAS_MAX_HELIO_DIST_SPEED = 0.004602944;
Swe.SwephData.PALLAS_MIN_HELIO_DIST_SPEED = -0.004618;
Swe.SwephData.PALLAS_MAX_HELIO_DIST_ACCEL = 0.000044661;
Swe.SwephData.PALLAS_MIN_HELIO_DIST_ACCEL = -0.0000083;

// time ./swetest -head -bj-3027215.5 -ejplde431.eph -edir./ephe -pG -s0.7064 -fPJadss -n15511619 > pallas_jpl
Swe.SwephData.PALLAS_MAX_RECT_SPEED = 0.7352639;
Swe.SwephData.PALLAS_MIN_RECT_SPEED = -0.2297855;
Swe.SwephData.PALLAS_MAX_RECT_ACCEL = 1./0.;
Swe.SwephData.PALLAS_MIN_RECT_ACCEL = 1./0.;
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pG -s0.7064 -fPJadss -n15511619 -topo0,0,50000 > pallas-topo-0-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pG -s0.7064 -fPJadss -n15511619 -topo11,0,0 > pallas-topo-11-0-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pG -s0.7064 -fPJadss -n15511619 -topo11,0,50000 > pallas-topo-11-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pG -s0.7064 -fPJadss -n15511619 -topo11,0,-6300000 > pallas-topo-11-0--6300000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pG -s0.7064 -fPJadss -n15511619 -topo11,89,0 > pallas-topo-11-89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pG -s0.7064 -fPJadss -n15511619 -topo11,-89,0 > pallas-topo-11--89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pG -s0.7064 -fPJadss -n15511619 -topo11,89,50000 > pallas-topo-11-89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pG -s0.7064 -fPJadss -n15511619 -topo11,-89,50000 > pallas-topo-11--89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pG -s0.7064 -fPJadss -n15511619 -topo179,0,50000 > pallas-topo-179-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pG -s0.7064 -fPJadss -n15511619 -topo-179,0,50000 > pallas-topo--179-0-50000 &
// -0.2430649 .. 0.7424363 at -topo0,0,50000
// -0.2429989 .. 0.7427120 at -topo11,0,0
// -0.2430749 .. 0.7427575 at -topo11,0,50000   <-- MIN <-- MAX
// -0.2340119 .. 0.7373165 at -topo11,0,-6300000
// -0.2340322 .. 0.7373405 at -topo11,89,0
// -0.2340321 .. 0.7373405 at -topo11,-89,0
// -0.2340328 .. 0.7373411 at -topo11,89,50000
// -0.2340327 .. 0.7373411 at -topo11,-89,50000
// -0.2429059 .. 0.7425019 at -topo179,0,50000
// -0.2429079 .. 0.7425897 at -topo-179,0,50000
Swe.SwephData.PALLAS_MAX_TOPO_RECT_SPEED = 0.7427575;
Swe.SwephData.PALLAS_MIN_TOPO_RECT_SPEED = -0.2430749;
Swe.SwephData.PALLAS_MAX_TOPO_RECT_ACCEL = 1./0.;
Swe.SwephData.PALLAS_MIN_TOPO_RECT_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.PALLAS_MAX_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.PALLAS_MIN_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.PALLAS_MAX_HELIO_RECT_ACCEL = 1./0.;
Swe.SwephData.PALLAS_MIN_HELIO_RECT_ACCEL = 1./0.;

Swe.SwephData.PALLAS_MAX_DECL_SPEED = 0.5399119;
Swe.SwephData.PALLAS_MIN_DECL_SPEED = -0.5165119;
Swe.SwephData.PALLAS_MAX_DECL_ACCEL = 1./0.;
Swe.SwephData.PALLAS_MIN_DECL_ACCEL = 1./0.;
// -0.5206622 .. 0.5415006 at -topo0,0,50000    <-- MIN
// -0.5204892 .. 0.5415245 at -topo11,0,0
// -0.5205174 .. 0.5415482 at -topo11,0,50000
// -0.5171256 .. 0.5387894 at -topo11,0,-6300000
// -0.5171234 .. 0.5387973 at -topo11,89,0
// -0.5171074 .. 0.5387840 at -topo11,-89,0
// -0.5171232 .. 0.5387977 at -topo11,89,50000
// -0.5171071 .. 0.5387843 at -topo11,-89,50000
// -0.5200186 .. 0.5419217 at -topo179,0,50000  <-- MAX
// -0.5199453 .. 0.5418829 at -topo-179,0,50000
Swe.SwephData.PALLAS_MAX_TOPO_DECL_SPEED = 0.5419217;
Swe.SwephData.PALLAS_MIN_TOPO_DECL_SPEED = -0.5206622;
Swe.SwephData.PALLAS_MAX_TOPO_DECL_ACCEL = 1./0.;
Swe.SwephData.PALLAS_MIN_TOPO_DECL_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.PALLAS_MAX_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.PALLAS_MIN_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.PALLAS_MAX_HELIO_DECL_ACCEL = 1./0.;
Swe.SwephData.PALLAS_MIN_HELIO_DECL_ACCEL = 1./0.;



///////////////////////////////////////////////////////////////
// JUNO: //////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Swe.SwephData.JUNO_MAX_LON_SPEED = 0.61473;
Swe.SwephData.JUNO_MIN_LON_SPEED = -0.46666;
Swe.SwephData.JUNO_MAX_LON_ACCEL = 0.00968;
Swe.SwephData.JUNO_MIN_LON_ACCEL = -0.009779;
Swe.SwephData.JUNO_MAX_TOPO_LON_SPEED = 0.6178;
Swe.SwephData.JUNO_MIN_TOPO_LON_SPEED = -0.2702;
Swe.SwephData.JUNO_MAX_TOPO_LON_ACCEL = 0.0682;
Swe.SwephData.JUNO_MIN_TOPO_LON_ACCEL = -0.06812;
Swe.SwephData.JUNO_MAX_HELIO_LON_SPEED = 0.42012063;
Swe.SwephData.JUNO_MIN_HELIO_LON_SPEED = 0.1363890;
Swe.SwephData.JUNO_MAX_HELIO_LON_ACCEL = 0.00087833;
Swe.SwephData.JUNO_MIN_HELIO_LON_ACCEL = -0.00086738;

Swe.SwephData.JUNO_MAX_LAT_SPEED = 0.2118;
Swe.SwephData.JUNO_MIN_LAT_SPEED = -0.2069;
Swe.SwephData.JUNO_MAX_LAT_ACCEL = 0.006619;
Swe.SwephData.JUNO_MIN_LAT_ACCEL = -0.006030;
Swe.SwephData.JUNO_MAX_TOPO_LAT_SPEED = 0.213;
Swe.SwephData.JUNO_MIN_TOPO_LAT_SPEED = -0.2089;
Swe.SwephData.JUNO_MAX_TOPO_LAT_ACCEL = 0.02594;
Swe.SwephData.JUNO_MIN_TOPO_LAT_ACCEL = -0.02464;
Swe.SwephData.JUNO_MAX_HELIO_LAT_SPEED = 0.09100508;
Swe.SwephData.JUNO_MIN_HELIO_LAT_SPEED = -0.09178865;
Swe.SwephData.JUNO_MAX_HELIO_LAT_ACCEL = 0.000645883;
Swe.SwephData.JUNO_MIN_HELIO_LAT_ACCEL = -0.000592596;

Swe.SwephData.JUNO_MAX_DIST_SPEED = 0.01631;
Swe.SwephData.JUNO_MIN_DIST_SPEED = -0.01649;
Swe.SwephData.JUNO_MAX_DIST_ACCEL = 0.0003149;
Swe.SwephData.JUNO_MIN_DIST_ACCEL = -0.00018013;
Swe.SwephData.JUNO_MAX_TOPO_DIST_SPEED = 0.016457;
Swe.SwephData.JUNO_MIN_TOPO_DIST_SPEED = -0.01666;
Swe.SwephData.JUNO_MAX_TOPO_DIST_ACCEL = 0.001315;
Swe.SwephData.JUNO_MIN_TOPO_DIST_ACCEL = -0.001185;
Swe.SwephData.JUNO_MAX_HELIO_DIST_SPEED = 0.0029944744;
Swe.SwephData.JUNO_MIN_HELIO_DIST_SPEED = -0.002995286;
Swe.SwephData.JUNO_MAX_HELIO_DIST_ACCEL = 0.00002158148;
Swe.SwephData.JUNO_MIN_HELIO_DIST_ACCEL = -0.0000125;

// time ./swetest -head -bj-3027215.5 -ejplde431.eph -edir./ephe -pH -s0.7064 -fPJadss -n15511619 > juno_jpl
Swe.SwephData.JUNO_MAX_RECT_SPEED = 0.6371096;
Swe.SwephData.JUNO_MIN_RECT_SPEED = -0.2427109;
Swe.SwephData.JUNO_MAX_RECT_ACCEL = 1./0.;
Swe.SwephData.JUNO_MIN_RECT_ACCEL = 1./0.;
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pH -s0.7064 -fPJadss -n15511619 -topo0,0,50000 > juno-topo-0-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pH -s0.7064 -fPJadss -n15511619 -topo11,0,0 > juno-topo-11-0-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pH -s0.7064 -fPJadss -n15511619 -topo11,0,50000 > juno-topo-11-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pH -s0.7064 -fPJadss -n15511619 -topo11,0,-6300000 > juno-topo-11-0--6300000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pH -s0.7064 -fPJadss -n15511619 -topo11,89,0 > juno-topo-11-89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pH -s0.7064 -fPJadss -n15511619 -topo11,-89,0 > juno-topo-11--89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pH -s0.7064 -fPJadss -n15511619 -topo11,89,50000 > juno-topo-11-89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pH -s0.7064 -fPJadss -n15511619 -topo11,-89,50000 > juno-topo-11--89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pH -s0.7064 -fPJadss -n15511619 -topo179,0,50000 > juno-topo-179-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pH -s0.7064 -fPJadss -n15511619 -topo-179,0,50000 > juno-topo--179-0-50000 &
// -0.2559846 .. 0.6447384 at -topo0,0,50000    <-- MAX
// -0.2565276 .. 0.6443679 at -topo11,0,0
// -0.2566038 .. 0.6444018 at -topo11,0,50000
// -0.2469324 .. 0.6400916 at -topo11,0,-6300000
// -0.2469835 .. 0.6401144 at -topo11,89,0
// -0.2469835 .. 0.6401144 at -topo11,-89,0
// -0.2469848 .. 0.6401150 at -topo11,89,50000  <-- MIN
// -0.2469848 .. 0.6401150 at -topo11,-89,50000 <-- MIN
// -0.2549038 .. 0.6445999 at -topo179,0,50000
// -0.2548705 .. 0.6446594 at -topo-179,0,50000
Swe.SwephData.JUNO_MAX_TOPO_RECT_SPEED = 0.6447384;
Swe.SwephData.JUNO_MIN_TOPO_RECT_SPEED = -0.2469848;
Swe.SwephData.JUNO_MAX_TOPO_RECT_ACCEL = 1./0.;
Swe.SwephData.JUNO_MIN_TOPO_RECT_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.JUNO_MAX_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.JUNO_MIN_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.JUNO_MAX_HELIO_RECT_ACCEL = 1./0.;
Swe.SwephData.JUNO_MIN_HELIO_RECT_ACCEL = 1./0.;

Swe.SwephData.JUNO_MAX_DECL_SPEED = 0.2485279;
Swe.SwephData.JUNO_MIN_DECL_SPEED = -0.2582130;
Swe.SwephData.JUNO_MAX_DECL_ACCEL = 1./0.;
Swe.SwephData.JUNO_MIN_DECL_ACCEL = 1./0.;
// -0.2587948 .. 0.2502102 at -topo0,0,50000    <-- MIN
// -0.2587834 .. 0.2499672 at -topo11,0,0
// -0.2587879 .. 0.2499775 at -topo11,0,50000
// -0.2582143 .. 0.2486781 at -topo11,0,-6300000
// -0.2582171 .. 0.2486882 at -topo11,89,0
// -0.2582177 .. 0.2486818 at -topo11,-89,0
// -0.2582172 .. 0.2486884 at -topo11,89,50000
// -0.2582177 .. 0.2486819 at -topo11,-89,50000
// -0.2586975 .. 0.2502499 at -topo179,0,50000  <-- MAX
// -0.2586861 .. 0.2502441 at -topo-179,0,50000
Swe.SwephData.JUNO_MAX_TOPO_DECL_SPEED = 0.2502499;
Swe.SwephData.JUNO_MIN_TOPO_DECL_SPEED = -0.2587948;
Swe.SwephData.JUNO_MAX_TOPO_DECL_ACCEL = 1./0.;
Swe.SwephData.JUNO_MIN_TOPO_DECL_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.JUNO_MAX_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.JUNO_MIN_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.JUNO_MAX_HELIO_DECL_ACCEL = 1./0.;
Swe.SwephData.JUNO_MIN_HELIO_DECL_ACCEL = 1./0.;



///////////////////////////////////////////////////////////////
// VESTA: /////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
Swe.SwephData.VESTA_MAX_LON_SPEED = 0.5540;
Swe.SwephData.VESTA_MIN_LON_SPEED = -0.40;
Swe.SwephData.VESTA_MAX_LON_ACCEL = 0.00876;
Swe.SwephData.VESTA_MIN_LON_ACCEL = -0.00877;
Swe.SwephData.VESTA_MAX_TOPO_LON_SPEED = 0.5568;
Swe.SwephData.VESTA_MIN_TOPO_LON_SPEED = -0.2770;
Swe.SwephData.VESTA_MAX_TOPO_LON_ACCEL = 0.05581;
Swe.SwephData.VESTA_MIN_TOPO_LON_ACCEL = -0.05541;
Swe.SwephData.VESTA_MAX_HELIO_LON_SPEED = 0.3379980;
Swe.SwephData.VESTA_MIN_HELIO_LON_SPEED = 0.22067514;
Swe.SwephData.VESTA_MAX_HELIO_LON_ACCEL = 0.00029479;
Swe.SwephData.VESTA_MIN_HELIO_LON_ACCEL = -0.00033568;

Swe.SwephData.VESTA_MAX_LAT_SPEED = 0.09498;
Swe.SwephData.VESTA_MIN_LAT_SPEED = -0.09798;
Swe.SwephData.VESTA_MAX_LAT_ACCEL = 0.003088;
Swe.SwephData.VESTA_MIN_LAT_ACCEL = -0.003171;
Swe.SwephData.VESTA_MAX_TOPO_LAT_SPEED = 0.09843;
Swe.SwephData.VESTA_MIN_TOPO_LAT_SPEED = -0.1011;
Swe.SwephData.VESTA_MAX_TOPO_LAT_ACCEL = 0.02671;
Swe.SwephData.VESTA_MIN_TOPO_LAT_ACCEL = -0.02858;
Swe.SwephData.VESTA_MAX_HELIO_LAT_SPEED = 0.0387172;
Swe.SwephData.VESTA_MIN_HELIO_LAT_SPEED = -0.04107737;
Swe.SwephData.VESTA_MAX_HELIO_LAT_ACCEL = 0.00022967;
Swe.SwephData.VESTA_MIN_HELIO_LAT_ACCEL = -0.00022729;

Swe.SwephData.VESTA_MAX_DIST_SPEED = 0.01421;
Swe.SwephData.VESTA_MIN_DIST_SPEED = -0.01422;
Swe.SwephData.VESTA_MAX_DIST_ACCEL = 0.000299;
Swe.SwephData.VESTA_MIN_DIST_ACCEL = -0.0001321;
Swe.SwephData.VESTA_MAX_TOPO_DIST_SPEED = 0.01438;
Swe.SwephData.VESTA_MIN_TOPO_DIST_SPEED = -0.01420;
Swe.SwephData.VESTA_MAX_TOPO_DIST_ACCEL = 0.001300;
Swe.SwephData.VESTA_MIN_TOPO_DIST_ACCEL = -0.001138;
Swe.SwephData.VESTA_MAX_HELIO_DIST_SPEED = 0.001193567;
Swe.SwephData.VESTA_MIN_HELIO_DIST_SPEED = -0.001193051;
Swe.SwephData.VESTA_MAX_HELIO_DIST_ACCEL = 0.0000070;
Swe.SwephData.VESTA_MIN_HELIO_DIST_ACCEL = -0.0000048;

// time ./swetest -head -bj-3027215.5 -ejplde431.eph -edir./ephe -pI -s0.7064 -fPJadss -n15511619 > vesta_jpl
Swe.SwephData.VESTA_MAX_RECT_SPEED = 0.5889533;
Swe.SwephData.VESTA_MIN_RECT_SPEED = -0.2930882;
Swe.SwephData.VESTA_MAX_RECT_ACCEL = 1./0.;
Swe.SwephData.VESTA_MIN_RECT_ACCEL = 1./0.;
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pI -s0.7064 -fPJadss -n15511619 -topo0,0,50000 > vesta-topo-0-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pI -s0.7064 -fPJadss -n15511619 -topo11,0,0 > vesta-topo-11-0-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pI -s0.7064 -fPJadss -n15511619 -topo11,0,50000 > vesta-topo-11-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pI -s0.7064 -fPJadss -n15511619 -topo11,0,-6300000 > vesta-topo-11-0--6300000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pI -s0.7064 -fPJadss -n15511619 -topo11,89,0 > vesta-topo-11-89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pI -s0.7064 -fPJadss -n15511619 -topo11,-89,0 > vesta-topo-11--89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pI -s0.7064 -fPJadss -n15511619 -topo11,89,50000 > vesta-topo-11-89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pI -s0.7064 -fPJadss -n15511619 -topo11,-89,50000 > vesta-topo-11--89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pI -s0.7064 -fPJadss -n15511619 -topo179,0,50000 > vesta-topo-179-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pI -s0.7064 -fPJadss -n15511619 -topo-179,0,50000 > vesta-topo--179-0-50000 &
// -0.3086817 .. 0.5962301 at -topo0,0,50000    <-- MIN
// -0.3079639 .. 0.5965240 at -topo11,0,0
// -0.3080461 .. 0.5965646 at -topo11,0,50000
// -0.2976037 .. 0.5919475 at -topo11,0,-6300000
// -0.2976590 .. 0.5919340 at -topo11,89,0
// -0.2976588 .. 0.5919340 at -topo11,-89,0
// -0.2976604 .. 0.5919336 at -topo11,89,50000
// -0.2976603 .. 0.5919336 at -topo11,-89,50000
// -0.3083094 .. 0.5966574 at -topo179,0,50000
// -0.3082262 .. 0.5966647 at -topo-179,0,50000 <-- MAX
Swe.SwephData.VESTA_MAX_TOPO_RECT_SPEED = 0.5966647;
Swe.SwephData.VESTA_MIN_TOPO_RECT_SPEED = -0.3086817;
Swe.SwephData.VESTA_MAX_TOPO_RECT_ACCEL = 1./0.;
Swe.SwephData.VESTA_MIN_TOPO_RECT_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.VESTA_MAX_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.VESTA_MIN_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.VESTA_MAX_HELIO_RECT_ACCEL = 1./0.;
Swe.SwephData.VESTA_MIN_HELIO_RECT_ACCEL = 1./0.;

Swe.SwephData.VESTA_MAX_DECL_SPEED = 0.2222065;
Swe.SwephData.VESTA_MIN_DECL_SPEED = -0.2242716;
Swe.SwephData.VESTA_MAX_DECL_ACCEL = 1./0.;
Swe.SwephData.VESTA_MIN_DECL_ACCEL = 1./0.;
// -0.2268079 .. 0.2245570 at -topo0,0,50000
// -0.2267914 .. 0.2245578 at -topo11,0,0
// -0.2267929 .. 0.2245575 at -topo11,0,50000
// -0.2267069 .. 0.2245894 at -topo11,0,-6300000
// -0.2267042 .. 0.2245903 at -topo11,89,0
// -0.2267074 .. 0.2245882 at -topo11,-89,0
// -0.2267042 .. 0.2245903 at -topo11,89,50000
// -0.2267074 .. 0.2245882 at -topo11,-89,50000
// -0.2269444 .. 0.2246227 at -topo179,0,50000  <-- MIN <-- MAX
// -0.2269413 .. 0.2246227 at -topo-179,0,50000   <-- MAX
Swe.SwephData.VESTA_MAX_TOPO_DECL_SPEED = 0.2246227;
Swe.SwephData.VESTA_MIN_TOPO_DECL_SPEED = -0.2269444;
Swe.SwephData.VESTA_MAX_TOPO_DECL_ACCEL = 1./0.;
Swe.SwephData.VESTA_MIN_TOPO_DECL_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.VESTA_MAX_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.VESTA_MIN_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.VESTA_MAX_HELIO_DECL_ACCEL = 1./0.;
Swe.SwephData.VESTA_MIN_HELIO_DECL_ACCEL = 1./0.;



///////////////////////////////////////////////////////////////
// INTERPOLATED LUNAR APOGEE: /////////////////////////////////
///////////////////////////////////////////////////////////////
Swe.SwephData.INTPAPOG_MAX_LON_SPEED = 0.240442;
Swe.SwephData.INTPAPOG_MIN_LON_SPEED = -0.155670;
Swe.SwephData.INTPAPOG_MAX_LON_ACCEL = 0.0103163;
Swe.SwephData.INTPAPOG_MIN_LON_ACCEL = -0.0103726;
Swe.SwephData.INTPAPOG_MAX_TOPO_LON_SPEED = 0.240440;
Swe.SwephData.INTPAPOG_MIN_TOPO_LON_SPEED = -0.1556659;
Swe.SwephData.INTPAPOG_MAX_TOPO_LON_ACCEL = 0.0103158;
Swe.SwephData.INTPAPOG_MIN_TOPO_LON_ACCEL = -0.0103707;
// No heliocentric positions for the interpolated lunar apogee...
Swe.SwephData.INTPAPOG_MAX_HELIO_LON_SPEED = 1./0.;
Swe.SwephData.INTPAPOG_MIN_HELIO_LON_SPEED = 1./0.;
Swe.SwephData.INTPAPOG_MAX_HELIO_LON_ACCEL = 1./0.;
Swe.SwephData.INTPAPOG_MIN_HELIO_LON_ACCEL = 1./0.;

Swe.SwephData.INTPAPOG_MAX_LAT_SPEED = 0.031604;
Swe.SwephData.INTPAPOG_MIN_LAT_SPEED = -0.031613;
Swe.SwephData.INTPAPOG_MAX_LAT_ACCEL = 0.00109429;
Swe.SwephData.INTPAPOG_MIN_LAT_ACCEL = -0.0010990;
Swe.SwephData.INTPAPOG_MAX_TOPO_LAT_SPEED = 0.03159950;
Swe.SwephData.INTPAPOG_MIN_TOPO_LAT_SPEED = -0.031610;
Swe.SwephData.INTPAPOG_MAX_TOPO_LAT_ACCEL = 0.00109428;
Swe.SwephData.INTPAPOG_MIN_TOPO_LAT_ACCEL = -0.00109888;
// No heliocentric positions for the interpolated lunar apogee...
Swe.SwephData.INTPAPOG_MAX_HELIO_LAT_SPEED = 1./0.;
Swe.SwephData.INTPAPOG_MIN_HELIO_LAT_SPEED = 1./0.;
Swe.SwephData.INTPAPOG_MAX_HELIO_LAT_ACCEL = 1./0.;
Swe.SwephData.INTPAPOG_MIN_HELIO_LAT_ACCEL = 1./0.;

Swe.SwephData.INTPAPOG_MAX_DIST_SPEED = 0.00000026577;
Swe.SwephData.INTPAPOG_MIN_DIST_SPEED = -0.00000026575;
Swe.SwephData.INTPAPOG_MAX_DIST_ACCEL = 0.0000000080677;
Swe.SwephData.INTPAPOG_MIN_DIST_ACCEL = -0.000000006945;
Swe.SwephData.INTPAPOG_MAX_TOPO_DIST_SPEED = 0.00000026584;
Swe.SwephData.INTPAPOG_MIN_TOPO_DIST_SPEED = -0.00000026578;
Swe.SwephData.INTPAPOG_MAX_TOPO_DIST_ACCEL = 0.0000000080677;
Swe.SwephData.INTPAPOG_MIN_TOPO_DIST_ACCEL = -0.0000000069411;
// No heliocentric positions for the interpolated lunar apogee...
Swe.SwephData.INTPAPOG_MAX_HELIO_DIST_SPEED = 1./0.;
Swe.SwephData.INTPAPOG_MIN_HELIO_DIST_SPEED = 1./0.;
Swe.SwephData.INTPAPOG_MAX_HELIO_DIST_ACCEL = 1./0.;
Swe.SwephData.INTPAPOG_MIN_HELIO_DIST_ACCEL = 1./0.;

// time ./swetest -head -bj-3027215.5 -ejplde431.eph -edir./ephe -pc -s0.7064 -fPJadss -n15511619 > intpapogee_jpl
Swe.SwephData.INTPAPOG_MAX_RECT_SPEED = 0.2722842;
Swe.SwephData.INTPAPOG_MIN_RECT_SPEED = -0.1802144;
Swe.SwephData.INTPAPOG_MAX_RECT_ACCEL = 1./0.;
Swe.SwephData.INTPAPOG_MIN_RECT_ACCEL = 1./0.;
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pc -s0.7064 -fPJadss -n15511619 -topo0,0,50000 > intpapogee-topo-0-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pc -s0.7064 -fPJadss -n15511619 -topo11,0,0 > intpapogee-topo-11-0-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pc -s0.7064 -fPJadss -n15511619 -topo11,0,50000 > intpapogee-topo-11-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pc -s0.7064 -fPJadss -n15511619 -topo11,0,-6300000 > intpapogee-topo-11-0--6300000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pc -s0.7064 -fPJadss -n15511619 -topo11,89,0 > intpapogee-topo-11-89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pc -s0.7064 -fPJadss -n15511619 -topo11,-89,0 > intpapogee-topo-11--89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pc -s0.7064 -fPJadss -n15511619 -topo11,89,50000 > intpapogee-topo-11-89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pc -s0.7064 -fPJadss -n15511619 -topo11,-89,50000 > intpapogee-topo-11--89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pc -s0.7064 -fPJadss -n15511619 -topo179,0,50000 > intpapogee-topo-179-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pc -s0.7064 -fPJadss -n15511619 -topo-179,0,50000 > intpapogee-topo--179-0-50000 &
// ... -topo0,0,50000
// ... -topo11,0,0
// ... -topo11,0,50000
// ... -topo11,0,-6300000
// ... -topo11,89,0
// ... -topo11,-89,0
// ... -topo11,89,50000
// ... -topo11,-89,50000
// ... -topo179,0,50000
// ... -topo-179,0,50000
Swe.SwephData.INTPAPOG_MAX_TOPO_RECT_SPEED = Swe.SwephData.INTPAPOG_MAX_RECT_SPEED;
Swe.SwephData.INTPAPOG_MIN_TOPO_RECT_SPEED = Swe.SwephData.INTPAPOG_MIN_RECT_SPEED;
Swe.SwephData.INTPAPOG_MAX_TOPO_RECT_ACCEL = 1./0.;
Swe.SwephData.INTPAPOG_MIN_TOPO_RECT_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.INTPAPOG_MAX_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.INTPAPOG_MIN_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.INTPAPOG_MAX_HELIO_RECT_ACCEL = 1./0.;
Swe.SwephData.INTPAPOG_MIN_HELIO_RECT_ACCEL = 1./0.;

Swe.SwephData.INTPAPOG_MAX_DECL_SPEED = 0.1278990;
Swe.SwephData.INTPAPOG_MIN_DECL_SPEED = -0.1276126;
Swe.SwephData.INTPAPOG_MAX_DECL_ACCEL = 1./0.;
Swe.SwephData.INTPAPOG_MIN_DECL_ACCEL = 1./0.;
// ... -topo0,0,50000
// ... -topo11,0,0
// ... -topo11,0,50000
// ... -topo11,0,-6300000
// ... -topo11,89,0
// ... -topo11,-89,0
// ... -topo11,89,50000
// ... -topo11,-89,50000
// ... -topo179,0,50000
// ... -topo-179,0,50000
Swe.SwephData.INTPAPOG_MAX_TOPO_DECL_SPEED = Swe.SwephData.INTPAPOG_MAX_DECL_SPEED;
Swe.SwephData.INTPAPOG_MIN_TOPO_DECL_SPEED = Swe.SwephData.INTPAPOG_MIN_DECL_SPEED;
Swe.SwephData.INTPAPOG_MAX_TOPO_DECL_ACCEL = 1./0.;
Swe.SwephData.INTPAPOG_MIN_TOPO_DECL_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.INTPAPOG_MAX_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.INTPAPOG_MIN_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.INTPAPOG_MAX_HELIO_DECL_ACCEL = 1./0.;
Swe.SwephData.INTPAPOG_MIN_HELIO_DECL_ACCEL = 1./0.;



///////////////////////////////////////////////////////////////
// INTERPOLATED LUNAR PERIGEE: ////////////////////////////////
///////////////////////////////////////////////////////////////
Swe.SwephData.INTPPERG_MAX_LON_SPEED = 0.583372;
Swe.SwephData.INTPPERG_MIN_LON_SPEED = -2.33189;
Swe.SwephData.INTPPERG_MAX_LON_ACCEL = 0.185425;
Swe.SwephData.INTPPERG_MIN_LON_ACCEL = -0.185357;
Swe.SwephData.INTPPERG_MAX_TOPO_LON_SPEED = 0.583371;
Swe.SwephData.INTPPERG_MIN_TOPO_LON_SPEED = -2.33188;
Swe.SwephData.INTPPERG_MAX_TOPO_LON_ACCEL = 0.185418;
Swe.SwephData.INTPPERG_MIN_TOPO_LON_ACCEL = -0.185353;
// No heliocentric positions for the interpolated lunar apogee...
Swe.SwephData.INTPPERG_MAX_HELIO_LON_SPEED = 1./0.;
Swe.SwephData.INTPPERG_MIN_HELIO_LON_SPEED = 1./0.;
Swe.SwephData.INTPPERG_MAX_HELIO_LON_ACCEL = 1./0.;
Swe.SwephData.INTPPERG_MIN_HELIO_LON_ACCEL = 1./0.;

Swe.SwephData.INTPPERG_MAX_LAT_SPEED = 0.193078;
Swe.SwephData.INTPPERG_MIN_LAT_SPEED = -0.193022;
Swe.SwephData.INTPPERG_MAX_LAT_ACCEL = 0.016642;
Swe.SwephData.INTPPERG_MIN_LAT_ACCEL = -0.016678;
Swe.SwephData.INTPPERG_MAX_TOPO_LAT_SPEED = 0.193073;
Swe.SwephData.INTPPERG_MIN_TOPO_LAT_SPEED = -0.193018;
Swe.SwephData.INTPPERG_MAX_TOPO_LAT_ACCEL = 0.016639;
Swe.SwephData.INTPPERG_MIN_TOPO_LAT_ACCEL = -0.016674;
// No heliocentric positions for the interpolated lunar apogee...
Swe.SwephData.INTPPERG_MAX_HELIO_LAT_SPEED = 1./0.;
Swe.SwephData.INTPPERG_MIN_HELIO_LAT_SPEED = 1./0.;
Swe.SwephData.INTPPERG_MAX_HELIO_LAT_ACCEL = 1./0.;
Swe.SwephData.INTPPERG_MIN_HELIO_LAT_ACCEL = 1./0.;

Swe.SwephData.INTPPERG_MAX_DIST_SPEED = 0.00000143617;
Swe.SwephData.INTPPERG_MIN_DIST_SPEED = -0.00000143606;
Swe.SwephData.INTPPERG_MAX_DIST_ACCEL = 0.0000000294169;
Swe.SwephData.INTPPERG_MIN_DIST_ACCEL = -0.00000015879;
Swe.SwephData.INTPPERG_MAX_TOPO_DIST_SPEED = 0.00000143615;
Swe.SwephData.INTPPERG_MIN_TOPO_DIST_SPEED = -0.00000143607;
Swe.SwephData.INTPPERG_MAX_TOPO_DIST_ACCEL = 0.000000029418;
Swe.SwephData.INTPPERG_MIN_TOPO_DIST_ACCEL = -0.00000015880;
// No heliocentric positions for the interpolated lunar apogee...
Swe.SwephData.INTPPERG_MAX_HELIO_DIST_SPEED = 1./0.;
Swe.SwephData.INTPPERG_MIN_HELIO_DIST_SPEED = 1./0.;
Swe.SwephData.INTPPERG_MAX_HELIO_DIST_ACCEL = 1./0.;
Swe.SwephData.INTPPERG_MIN_HELIO_DIST_ACCEL = 1./0.;

// time ./swetest -head -bj-3027215.5 -ejplde431.eph -edir./ephe -pg -s0.7064 -fPJadss -n15511619 > intpperigee_jpl
// -2.6484532 -> 0.6663555
Swe.SwephData.INTPPERG_MAX_RECT_SPEED = 0.6663555;
Swe.SwephData.INTPPERG_MIN_RECT_SPEED = -2.6484532;
Swe.SwephData.INTPPERG_MAX_RECT_ACCEL = 1./0.;
Swe.SwephData.INTPPERG_MIN_RECT_ACCEL = 1./0.;
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pg -s0.7064 -fPJadss -n15511619 -topo0,0,50000 > intpperigee-topo-0-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pg -s0.7064 -fPJadss -n15511619 -topo11,0,0 > intpperigee-topo-11-0-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pg -s0.7064 -fPJadss -n15511619 -topo11,0,50000 > intpperigee-topo-11-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pg -s0.7064 -fPJadss -n15511619 -topo11,0,-6300000 > intpperigee-topo-11-0--6300000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pg -s0.7064 -fPJadss -n15511619 -topo11,0,50000 > intpperigee-topo-11-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pg -s0.7064 -fPJadss -n15511619 -topo11,89,0 > intpperigee-topo-11-89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pg -s0.7064 -fPJadss -n15511619 -topo11,-89,0 > intpperigee-topo-11--89-0 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pg -s0.7064 -fPJadss -n15511619 -topo11,89,50000 > intpperigee-topo-11-89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pg -s0.7064 -fPJadss -n15511619 -topo11,-89,50000 > intpperigee-topo-11--89-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pg -s0.7064 -fPJadss -n15511619 -topo179,0,50000 > intpperigee-topo-179-0-50000 &
// time ./swetest -bj-3027215.5 -ejplde431.eph -edir./ephe -pg -s0.7064 -fPJadss -n15511619 -topo-179,0,50000 > intpperigee-topo--179-0-50000 &
// ... -topo0,0,50000
// ... -topo11,0,0
// ... -topo11,0,-6300000
// ... -topo11,89,0
// ... -topo11,-89,0
// ... -topo11,89,50000
// ... -topo11,0,50000
// ... -topo11,-89,50000
// ... -topo179,0,50000
// ... -topo-179,0,50000
Swe.SwephData.INTPPERG_MAX_TOPO_RECT_SPEED = Swe.SwephData.INTPPERG_MAX_RECT_SPEED;
Swe.SwephData.INTPPERG_MIN_TOPO_RECT_SPEED = Swe.SwephData.INTPPERG_MIN_RECT_SPEED;
Swe.SwephData.INTPPERG_MAX_TOPO_RECT_ACCEL = 1./0.;
Swe.SwephData.INTPPERG_MIN_TOPO_RECT_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.INTPPERG_MAX_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.INTPPERG_MIN_HELIO_RECT_SPEED = 1./0.;
Swe.SwephData.INTPPERG_MAX_HELIO_RECT_ACCEL = 1./0.;
Swe.SwephData.INTPPERG_MIN_HELIO_RECT_ACCEL = 1./0.;

Swe.SwephData.INTPPERG_MAX_DECL_SPEED = 1.1370722;
Swe.SwephData.INTPPERG_MIN_DECL_SPEED = -1.1366842;
Swe.SwephData.INTPPERG_MAX_DECL_ACCEL = 1./0.;
Swe.SwephData.INTPPERG_MIN_DECL_ACCEL = 1./0.;
// ... -topo0,0,50000
// ... -topo11,0,0
// ... -topo11,0,-6300000
// ... -topo11,89,0
// ... -topo11,-89,0
// ... -topo11,89,50000
// ... -topo11,0,50000
// ... -topo11,-89,50000
// ... -topo179,0,50000
// ... -topo-179,0,50000
Swe.SwephData.INTPPERG_MAX_TOPO_DECL_SPEED = Swe.SwephData.INTPPERG_MAX_DECL_SPEED;
Swe.SwephData.INTPPERG_MIN_TOPO_DECL_SPEED = Swe.SwephData.INTPPERG_MIN_DECL_SPEED;
Swe.SwephData.INTPPERG_MAX_TOPO_DECL_ACCEL = 1./0.;
Swe.SwephData.INTPPERG_MIN_TOPO_DECL_ACCEL = 1./0.;
// SEFLG_EQUATORIAL refers to the earth equator ALWAYS, so we skip heliocentric calculations
Swe.SwephData.INTPPERG_MAX_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.INTPPERG_MIN_HELIO_DECL_SPEED = 1./0.;
Swe.SwephData.INTPPERG_MAX_HELIO_DECL_ACCEL = 1./0.;
Swe.SwephData.INTPPERG_MIN_HELIO_DECL_ACCEL = 1./0.;
