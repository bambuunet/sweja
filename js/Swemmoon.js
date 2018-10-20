class Swemmoon{

  constructor(swed, sl){
    this.swed=swed;
    this.sl=sl;
    if (this.swed ==null) { this.swed =new SwissData(); }
    if (this.sl   ==null) { this.sl   =new SwissLib(); }


    /* The following coefficients were calculated by a simultaneous least
     * squares fit between the analytical theory and DE404 on the finite
     * interval from -3000 to +3000.
     * The coefficients were estimated from 34,247 Lunar positions.
     */
    this.z = [
      /* The following are scaled in arc seconds, time in Julian centuries.
         They replace the corresponding terms in the mean elements.  */
      -1.312045233711e+01, /* F, t^2 */
      -1.138215912580e-03, /* F, t^3 */
      -9.646018347184e-06, /* F, t^4 */
       3.146734198839e+01, /* l, t^2 */
       4.768357585780e-02, /* l, t^3 */
      -3.421689790404e-04, /* l, t^4 */
      -6.847070905410e+00, /* D, t^2 */
      -5.834100476561e-03, /* D, t^3 */
      -2.905334122698e-04, /* D, t^4 */
      -5.663161722088e+00, /* L, t^2 */
       5.722859298199e-03, /* L, t^3 */
      -8.466472828815e-05, /* L, t^4 */
      /* The following longitude terms are in arc seconds times 10^5.  */
      -8.429817796435e+01, /* t^2 Math.cos(18V - 16E - l) */
      -2.072552484689e+02, /* t^2 Math.sin(18V - 16E - l) */
       7.876842214863e+00, /* t^2 Math.cos(10V - 3E - l) */
       1.836463749022e+00, /* t^2 Math.sin(10V - 3E - l) */
      -1.557471855361e+01, /* t^2 Math.cos(8V - 13E) */
      -2.006969124724e+01, /* t^2 Math.sin(8V - 13E) */
       2.152670284757e+01, /* t^2 Math.cos(4E - 8M + 3J) */
      -6.179946916139e+00, /* t^2 Math.sin(4E - 8M + 3J) */
      -9.070028191196e-01, /* t^2 Math.cos(18V - 16E) */
      -1.270848233038e+01, /* t^2 Math.sin(18V - 16E) */
      -2.145589319058e+00, /* t^2 Math.cos(2J - 5S) */
       1.381936399935e+01, /* t^2 Math.sin(2J - 5S) */
      -1.999840061168e+00, /* t^3 Math.sin(l') */
    ];


    /* Perturbation tables
     */
    this.NLR=118;
    this.LR=[
      /*
                     Longitude    Radius
       D  l' l  F    1"  .0001"  1km  .0001km */

       0, 0, 1, 0, 22639, 5858,-20905,-3550,
       2, 0,-1, 0,  4586, 4383, -3699,-1109,
       2, 0, 0, 0,  2369, 9139, -2955,-9676,
       0, 0, 2, 0,   769,  257,  -569,-9251,
       0, 1, 0, 0,  -666,-4171,    48, 8883,
       0, 0, 0, 2,  -411,-5957,    -3,-1483,
       2, 0,-2, 0,   211, 6556,   246, 1585,
       2,-1,-1, 0,   205, 4358,  -152,-1377,
       2, 0, 1, 0,   191, 9562,  -170,-7331,
       2,-1, 0, 0,   164, 7285,  -204,-5860,
       0, 1,-1, 0,  -147,-3213,  -129,-6201,
       1, 0, 0, 0,  -124,-9881,   108, 7427,
       0, 1, 1, 0,  -109,-3803,   104, 7552,
       2, 0, 0,-2,    55, 1771,    10, 3211,
       0, 0, 1, 2,   -45, -996,     0,    0,
       0, 0, 1,-2,    39, 5333,    79, 6606,
       4, 0,-1, 0,    38, 4298,   -34,-7825,
       0, 0, 3, 0,    36, 1238,   -23,-2104,
       4, 0,-2, 0,    30, 7726,   -21,-6363,
       2, 1,-1, 0,   -28,-3971,    24, 2085,
       2, 1, 0, 0,   -24,-3582,    30, 8238,
       1, 0,-1, 0,   -18,-5847,    -8,-3791,
       1, 1, 0, 0,    17, 9545,   -16,-6747,
       2,-1, 1, 0,    14, 5303,   -12,-8314,
       2, 0, 2, 0,    14, 3797,   -10,-4448,
       4, 0, 0, 0,    13, 8991,   -11,-6500,
       2, 0,-3, 0,    13, 1941,    14, 4027,
       0, 1,-2, 0,    -9,-6791,    -7,  -27,
       2, 0,-1, 2,    -9,-3659,     0, 7740,
       2,-1,-2, 0,     8, 6055,    10,  562,
       1, 0, 1, 0,    -8,-4531,     6, 3220,
       2,-2, 0, 0,     8,  502,    -9,-8845,
       0, 1, 2, 0,    -7,-6302,     5, 7509,
       0, 2, 0, 0,    -7,-4475,     1,  657,
       2,-2,-1, 0,     7, 3712,    -4,-9501,
       2, 0, 1,-2,    -6,-3832,     4, 1311,
       2, 0, 0, 2,    -5,-7416,     0,    0,
       4,-1,-1, 0,     4, 3740,    -3,-9580,
       0, 0, 2, 2,    -3,-9976,     0,    0,
       3, 0,-1, 0,    -3,-2097,     3, 2582,
       2, 1, 1, 0,    -2,-9145,     2, 6164,
       4,-1,-2, 0,     2, 7319,    -1,-8970,
       0, 2,-1, 0,    -2,-5679,    -2,-1171,
       2, 2,-1, 0,    -2,-5212,     2, 3536,
       2, 1,-2, 0,     2, 4889,     0, 1437,
       2,-1, 0,-2,     2, 1461,     0, 6571,
       4, 0, 1, 0,     1, 9777,    -1,-4226,
       0, 0, 4, 0,     1, 9337,    -1,-1169,
       4,-1, 0, 0,     1, 8708,    -1,-5714,
       1, 0,-2, 0,    -1,-7530,    -1,-7385,
       2, 1, 0,-2,    -1,-4372,     0,-1357,
       0, 0, 2,-2,    -1,-3726,    -4,-4212,
       1, 1, 1, 0,     1, 2618,     0,-9333,
       3, 0,-2, 0,    -1,-2241,     0, 8624,
       4, 0,-3, 0,     1, 1868,     0,-5142,
       2,-1, 2, 0,     1, 1770,     0,-8488,
       0, 2, 1, 0,    -1,-1617,     1, 1655,
       1, 1,-1, 0,     1,  777,     0, 8512,
       2, 0, 3, 0,     1,  595,     0,-6697,
       2, 0, 1, 2,     0,-9902,     0,    0,
       2, 0,-4, 0,     0, 9483,     0, 7785,
       2,-2, 1, 0,     0, 7517,     0,-6575,
       0, 1,-3, 0,     0,-6694,     0,-4224,
       4, 1,-1, 0,     0,-6352,     0, 5788,
       1, 0, 2, 0,     0,-5840,     0, 3785,
       1, 0, 0,-2,     0,-5833,     0,-7956,
       6, 0,-2, 0,     0, 5716,     0,-4225,
       2, 0,-2,-2,     0,-5606,     0, 4726,
       1,-1, 0, 0,     0,-5569,     0, 4976,
       0, 1, 3, 0,     0,-5459,     0, 3551,
       2, 0,-2, 2,     0,-5357,     0, 7740,
       2, 0,-1,-2,     0, 1790,     8, 7516,
       3, 0, 0, 0,     0, 4042,    -1,-4189,
       2,-1,-3, 0,     0, 4784,     0, 4950,
       2,-1, 3, 0,     0,  932,     0, -585,
       2, 0, 2,-2,     0,-4538,     0, 2840,
       2,-1,-1, 2,     0,-4262,     0,  373,
       0, 0, 0, 4,     0, 4203,     0,    0,
       0, 1, 0, 2,     0, 4134,     0,-1580,
       6, 0,-1, 0,     0, 3945,     0,-2866,
       2,-1, 0, 2,     0,-3821,     0,    0,
       2,-1, 1,-2,     0,-3745,     0, 2094,
       4, 1,-2, 0,     0,-3576,     0, 2370,
       1, 1,-2, 0,     0, 3497,     0, 3323,
       2,-3, 0, 0,     0, 3398,     0,-4107,
       0, 0, 3, 2,     0,-3286,     0,    0,
       4,-2,-1, 0,     0,-3087,     0,-2790,
       0, 1,-1,-2,     0, 3015,     0,    0,
       4, 0,-1,-2,     0, 3009,     0,-3218,
       2,-2,-2, 0,     0, 2942,     0, 3430,
       6, 0,-3, 0,     0, 2925,     0,-1832,
       2, 1, 2, 0,     0,-2902,     0, 2125,
       4, 1, 0, 0,     0,-2891,     0, 2445,
       4,-1, 1, 0,     0, 2825,     0,-2029,
       3, 1,-1, 0,     0, 2737,     0,-2126,
       0, 1, 1, 2,     0, 2634,     0,    0,
       1, 0, 0, 2,     0, 2543,     0,    0,
       3, 0, 0,-2,     0,-2530,     0, 2010,
       2, 2,-2, 0,     0,-2499,     0,-1089,
       2,-3,-1, 0,     0, 2469,     0,-1481,
       3,-1,-1, 0,     0,-2314,     0, 2556,
       4, 0, 2, 0,     0, 2185,     0,-1392,
       4, 0,-1, 2,     0,-2013,     0, 0,
       0, 2,-2, 0,     0,-1931,     0, 0,
       2, 2, 0, 0,     0,-1858,     0, 0,
       2, 1,-3, 0,     0, 1762,     0, 0,
       4, 0,-2, 2,     0,-1698,     0, 0,
       4,-2,-2, 0,     0, 1578,     0,-1083,
       4,-2, 0, 0,     0, 1522,     0,-1281,
       3, 1, 0, 0,     0, 1499,     0,-1077,
       1,-1,-1, 0,     0,-1364,     0, 1141,
       1,-3, 0, 0,     0,-1281,     0, 0,
       6, 0, 0, 0,     0, 1261,     0, -859,
       2, 0, 2, 2,     0,-1239,     0, 0,
       1,-1, 1, 0,     0,-1207,     0, 1100,
       0, 0, 5, 0,     0, 1110,     0, -589,
       0, 3, 0, 0,     0,-1013,     0,  213,
       4,-1,-3, 0,     0,  998,     0, 0,
    ];

    this.NMB=77;
    this.MB=[
      /*
                     Latitude
       D  l' l  F    1"  .0001" */

       0, 0, 0, 1,18461, 2387,
       0, 0, 1, 1, 1010, 1671,
       0, 0, 1,-1,  999, 6936,
       2, 0, 0,-1,  623, 6524,
       2, 0,-1, 1,  199, 4837,
       2, 0,-1,-1,  166, 5741,
       2, 0, 0, 1,  117, 2607,
       0, 0, 2, 1,   61, 9120,
       2, 0, 1,-1,   33, 3572,
       0, 0, 2,-1,   31, 7597,
       2,-1, 0,-1,   29, 5766,
       2, 0,-2,-1,   15, 5663,
       2, 0, 1, 1,   15, 1216,
       2, 1, 0,-1,  -12, -941,
       2,-1,-1, 1,    8, 8681,
       2,-1, 0, 1,    7, 9586,
       2,-1,-1,-1,    7, 4346,
       0, 1,-1,-1,   -6,-7314,
       4, 0,-1,-1,    6, 5796,
       0, 1, 0, 1,   -6,-4601,
       0, 0, 0, 3,   -6,-2965,
       0, 1,-1, 1,   -5,-6324,
       1, 0, 0, 1,   -5,-3684,
       0, 1, 1, 1,   -5,-3113,
       0, 1, 1,-1,   -5, -759,
       0, 1, 0,-1,   -4,-8396,
       1, 0, 0,-1,   -4,-8057,
       0, 0, 3, 1,    3, 9841,
       4, 0, 0,-1,    3, 6745,
       4, 0,-1, 1,    2, 9985,
       0, 0, 1,-3,    2, 7986,
       4, 0,-2, 1,    2, 4139,
       2, 0, 0,-3,    2, 1863,
       2, 0, 2,-1,    2, 1462,
       2,-1, 1,-1,    1, 7660,
       2, 0,-2, 1,   -1,-6244,
       0, 0, 3,-1,    1, 5813,
       2, 0, 2, 1,    1, 5198,
       2, 0,-3,-1,    1, 5156,
       2, 1,-1, 1,   -1,-3178,
       2, 1, 0, 1,   -1,-2643,
       4, 0, 0, 1,    1, 1919,
       2,-1, 1, 1,    1, 1346,
       2,-2, 0,-1,    1,  859,
       0, 0, 1, 3,   -1, -194,
       2, 1, 1,-1,    0,-8227,
       1, 1, 0,-1,    0, 8042,
       1, 1, 0, 1,    0, 8026,
       0, 1,-2,-1,    0,-7932,
       2, 1,-1,-1,    0,-7910,
       1, 0, 1, 1,    0,-6674,
       2,-1,-2,-1,    0, 6502,
       0, 1, 2, 1,    0,-6388,
       4, 0,-2,-1,    0, 6337,
       4,-1,-1,-1,    0, 5958,
       1, 0, 1,-1,    0,-5889,
       4, 0, 1,-1,    0, 4734,
       1, 0,-1,-1,    0,-4299,
       4,-1, 0,-1,    0, 4149,
       2,-2, 0, 1,    0, 3835,
       3, 0, 0,-1,    0,-3518,
       4,-1,-1, 1,    0, 3388,
       2, 0,-1,-3,    0, 3291,
       2,-2,-1, 1,    0, 3147,
       0, 1, 2,-1,    0,-3129,
       3, 0,-1,-1,    0,-3052,
       0, 1,-2, 1,    0,-3013,
       2, 0, 1,-3,    0,-2912,
       2,-2,-1,-1,    0, 2686,
       0, 0, 4, 1,    0, 2633,
       2, 0,-3, 1,    0, 2541,
       2, 0,-1, 3,    0,-2448,
       2, 1, 1, 1,    0,-2370,
       4,-1,-2, 1,    0, 2138,
       4, 0, 1, 1,    0, 2126,
       3, 0,-1, 1,    0,-2059,
       4, 1,-1,-1,    0,-1719,
    ];

    this.NLRT=38;
    this.LRT=[
      /*
      Multiply by T
                     Longitude    Radius
       D  l' l  F   .1"  .00001" .1km  .00001km */

       0, 1, 0, 0,    16, 7680,    -1,-2302,
       2,-1,-1, 0,    -5,-1642,     3, 8245,
       2,-1, 0, 0,    -4,-1383,     5, 1395,
       0, 1,-1, 0,     3, 7115,     3, 2654,
       0, 1, 1, 0,     2, 7560,    -2,-6396,
       2, 1,-1, 0,     0, 7118,     0,-6068,
       2, 1, 0, 0,     0, 6128,     0,-7754,
       1, 1, 0, 0,     0,-4516,     0, 4194,
       2,-2, 0, 0,     0,-4048,     0, 4970,
       0, 2, 0, 0,     0, 3747,     0, -540,
       2,-2,-1, 0,     0,-3707,     0, 2490,
       2,-1, 1, 0,     0,-3649,     0, 3222,
       0, 1,-2, 0,     0, 2438,     0, 1760,
       2,-1,-2, 0,     0,-2165,     0,-2530,
       0, 1, 2, 0,     0, 1923,     0,-1450,
       0, 2,-1, 0,     0, 1292,     0, 1070,
       2, 2,-1, 0,     0, 1271,     0,-6070,
       4,-1,-1, 0,     0,-1098,     0,  990,
       2, 0, 0, 0,     0, 1073,     0,-1360,
       2, 0,-1, 0,     0,  839,     0, -630,
       2, 1, 1, 0,     0,  734,     0, -660,
       4,-1,-2, 0,     0, -688,     0,  480,
       2, 1,-2, 0,     0, -630,     0,    0,
       0, 2, 1, 0,     0,  587,     0, -590,
       2,-1, 0,-2,     0, -540,     0, -170,
       4,-1, 0, 0,     0, -468,     0,  390,
       2,-2, 1, 0,     0, -378,     0,  330,
       2, 1, 0,-2,     0,  364,     0,    0,
       1, 1, 1, 0,     0, -317,     0,  240,
       2,-1, 2, 0,     0, -295,     0,  210,
       1, 1,-1, 0,     0, -270,     0, -210,
       2,-3, 0, 0,     0, -256,     0,  310,
       2,-3,-1, 0,     0, -187,     0,  110,
       0, 1,-3, 0,     0,  169,     0,  110,
       4, 1,-1, 0,     0,  158,     0, -150,
       4,-2,-1, 0,     0, -155,     0,  140,
       0, 0, 1, 0,     0,  155,     0, -250,
       2,-2,-2, 0,     0, -148,     0, -170,
    ];

    this.NBT=16;
    this.BT=[
      /*
      Multiply by T
                   Latitude
       D  l' l  F  .00001"  */

       2,-1, 0,-1, -7430,
       2, 1, 0,-1,  3043,
       2,-1,-1, 1, -2229,
       2,-1, 0, 1, -1999,
       2,-1,-1,-1, -1869,
       0, 1,-1,-1,  1696,
       0, 1, 0, 1,  1623,
       0, 1,-1, 1,  1418,
       0, 1, 1, 1,  1339,
       0, 1, 1,-1,  1278,
       0, 1, 0,-1,  1217,
       2,-2, 0,-1,  -547,
       2,-1, 1,-1,  -443,
       2, 1,-1, 1,   331,
       2, 1, 0, 1,   317,
       2, 0, 0,-1,   295,
    ];

    this.NLRT2=25;
    this.LRT2=[
      /*
      Multiply by T^2
                 Longitude    Radius
       D  l' l  F  .00001" .00001km   */

       0, 1, 0, 0,  487,   -36,
       2,-1,-1, 0, -150,   111,
       2,-1, 0, 0, -120,   149,
       0, 1,-1, 0,  108,    95,
       0, 1, 1, 0,   80,   -77,
       2, 1,-1, 0,   21,   -18,
       2, 1, 0, 0,   20,   -23,
       1, 1, 0, 0,  -13,    12,
       2,-2, 0, 0,  -12,    14,
       2,-1, 1, 0,  -11,     9,
       2,-2,-1, 0,  -11,     7,
       0, 2, 0, 0,   11,     0,
       2,-1,-2, 0,   -6,    -7,
       0, 1,-2, 0,    7,     5,
       0, 1, 2, 0,    6,    -4,
       2, 2,-1, 0,    5,    -3,
       0, 2,-1, 0,    5,     3,
       4,-1,-1, 0,   -3,     3,
       2, 0, 0, 0,    3,    -4,
       4,-1,-2, 0,   -2,     0,
       2, 1,-2, 0,   -2,     0,
       2,-1, 0,-2,   -2,     0,
       2, 1, 1, 0,    2,    -2,
       2, 0,-1, 0,    2,     0,
       0, 2, 1, 0,    2,     0,
    ];

    this.NBT2=12;
    this.BT2=[
      /*
      Multiply by T^2
                 Latitiude
       D  l' l  F  .00001" */

       2,-1, 0,-1,  -22,
       2, 1, 0,-1,    9,
       2,-1, 0, 1,   -6,
       2,-1,-1, 1,   -6,
       2,-1,-1,-1,   -5,
       0, 1, 0, 1,    5,
       0, 1,-1,-1,    5,
       0, 1, 1, 1,    4,
       0, 1, 1,-1,    4,
       0, 1, 0,-1,    4,
       0, 1,-1, 1,    4,
       2,-2, 0,-1,   -2,
    ];

    /* corrections for mean lunar node in degrees, from -13100 to 17200,
     * in 100-year steps. corrections are set to 0 between the years 0 and 3000 */
    this.mean_node_corr = [
    -2.56,
    -2.473, -2.392347, -2.316425, -2.239639, -2.167764, -2.095100, -2.024810, -1.957622, -1.890097, -1.826389,
    -1.763335, -1.701047, -1.643016, -1.584186, -1.527309, -1.473352, -1.418917, -1.367736, -1.317202, -1.267269,
    -1.221121, -1.174218, -1.128862, -1.086214, -1.042998, -1.002491, -0.962635, -0.923176, -0.887191, -0.850403,
    -0.814929, -0.782117, -0.748462, -0.717241, -0.686598, -0.656013, -0.628726, -0.600460, -0.573219, -0.548634,
    -0.522931, -0.499285, -0.476273, -0.452978, -0.432663, -0.411386, -0.390788, -0.372825, -0.353681, -0.336230,
    -0.319520, -0.302343, -0.287794, -0.272262, -0.257166, -0.244534, -0.230635, -0.218126, -0.206365, -0.194000,
    -0.183876, -0.172782, -0.161877, -0.153254, -0.143371, -0.134501, -0.126552, -0.117932, -0.111199, -0.103716,
    -0.096160, -0.090718, -0.084046, -0.078007, -0.072959, -0.067235, -0.062990, -0.058102, -0.053070, -0.049786,
    -0.045381, -0.041317, -0.038165, -0.034501, -0.031871, -0.028844, -0.025701, -0.024018, -0.021427, -0.018881,
    -0.017291, -0.015186, -0.013755, -0.012098, -0.010261, -0.009688, -0.008218, -0.006670, -0.005979, -0.004756,
    -0.003991, -0.002996, -0.001974, -0.001975, -0.001213, -0.000377, -0.000356, 5.779e-05, 0.000378, 0.000710,
    0.001092, 0.000767, 0.000985, 0.001443, 0.001069, 0.001141, 0.001321, 0.001462, 0.001695, 0.001319,
    0.001567, 0.001873, 0.001376, 0.001336, 0.001347, 0.001330, 0.001256, 0.000813, 0.000946, 0.001079,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    -0.000364, -0.000452, -0.001091, -0.001159, -0.001136, -0.001798, -0.002249, -0.002622, -0.002990, -0.003555,
    -0.004425, -0.004758, -0.005134, -0.006065, -0.006839, -0.007474, -0.008283, -0.009411, -0.010786, -0.011810,
    -0.012989, -0.014825, -0.016426, -0.017922, -0.019774, -0.021881, -0.024194, -0.026190, -0.028440, -0.031285,
    -0.033817, -0.036318, -0.039212, -0.042456, -0.045799, -0.048994, -0.052710, -0.056948, -0.061017, -0.065181,
    -0.069843, -0.074922, -0.079976, -0.085052, -0.090755, -0.096840, -0.102797, -0.108939, -0.115568, -0.122636,
    -0.129593, -0.136683, -0.144641, -0.152825, -0.161044, -0.169758, -0.178916, -0.188712, -0.198401, -0.208312,
    -0.219395, -0.230407, -0.241577, -0.253508, -0.265640, -0.278556, -0.291330, -0.304353, -0.318815, -0.332882,
    -0.347316, -0.362895, -0.378421, -0.395061, -0.411748, -0.428666, -0.447477, -0.465636, -0.484277, -0.504600,
    -0.524405, -0.545533, -0.567020, -0.588404, -0.612099, -0.634965, -0.658262, -0.683866, -0.708526, -0.734719,
    -0.761800, -0.788562, -0.818092, -0.846885, -0.876177, -0.908385, -0.939371, -0.972027, -1.006149, -1.039634,
    -1.076135, -1.112156, -1.148490, -1.188312, -1.226761, -1.266821, -1.309156, -1.350583, -1.395223, -1.440028,
    -1.485047, -1.534104, -1.582023, -1.631506, -1.684031, -1.735687, -1.790421, -1.846039, -1.901951, -1.961872,
    -2.021179, -2.081987, -2.146259, -2.210031, -2.276609, -2.344904, -2.413795, -2.486559, -2.559564, -2.634215,
    -2.712692, -2.791289, -2.872533, -2.956217, -3.040965, -3.129234, -3.218545, -3.309805, -3.404827, -3.5008,
    -3.601, -3.7, -3.8,
    ];

    /* corrections for mean lunar apsides in degrees, from -13100 to 17200,
     * in 100-year steps. corrections are set to 0 between the years 0 and 3000 */
    this.mean_apsis_corr = [
      7.525,
      7.290, 7.057295, 6.830813, 6.611723, 6.396775, 6.189569, 5.985968, 5.788342, 5.597304, 5.410167,
      5.229946, 5.053389, 4.882187, 4.716494, 4.553532, 4.396734, 4.243718, 4.094282, 3.950865, 3.810366,
      3.674978, 3.543284, 3.414270, 3.290526, 3.168775, 3.050904, 2.937541, 2.826189, 2.719822, 2.616193,
      2.515431, 2.419193, 2.323782, 2.232545, 2.143635, 2.056803, 1.974913, 1.893874, 1.816201, 1.741957,
      1.668083, 1.598335, 1.529645, 1.463016, 1.399693, 1.336905, 1.278097, 1.220965, 1.165092, 1.113071,
      1.060858, 1.011007, 0.963701, 0.916523, 0.872887, 0.829596, 0.788486, 0.750017, 0.711177, 0.675589,
      0.640303, 0.605303, 0.573490, 0.541113, 0.511482, 0.483159, 0.455210, 0.430305, 0.404643, 0.380782,
      0.358524, 0.335405, 0.315244, 0.295131, 0.275766, 0.259223, 0.241586, 0.225890, 0.210404, 0.194775,
      0.181573, 0.167246, 0.154514, 0.143435, 0.131131, 0.121648, 0.111835, 0.102474, 0.094284, 0.085204,
      0.078240, 0.070697, 0.063696, 0.058894, 0.052390, 0.047632, 0.043129, 0.037823, 0.034143, 0.029188,
      0.025648, 0.021972, 0.018348, 0.017127, 0.013989, 0.011967, 0.011003, 0.007865, 0.007033, 0.005574,
      0.004060, 0.003699, 0.002465, 0.002889, 0.002144, 0.001018, 0.001757, -9.67e-05, -0.000734, -0.000392,
      -0.001546, -0.000863, -0.001266, -0.000933, -0.000503, -0.001304, 0.000238, -0.000507, -0.000897, 0.000647,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
      0.000514, 0.000683, 0.002228, 0.001974, 0.003485, 0.004280, 0.005409, 0.007468, 0.007938, 0.011012,
      0.012525, 0.013757, 0.016757, 0.017932, 0.020780, 0.023416, 0.026386, 0.030428, 0.033512, 0.038789,
      0.043126, 0.047778, 0.054175, 0.058891, 0.065878, 0.072345, 0.079668, 0.088238, 0.095307, 0.104873,
      0.113533, 0.122336, 0.133205, 0.142922, 0.154871, 0.166488, 0.179234, 0.193928, 0.207262, 0.223089,
      0.238736, 0.254907, 0.273232, 0.291085, 0.311046, 0.331025, 0.351955, 0.374422, 0.396341, 0.420772,
      0.444867, 0.469984, 0.497448, 0.524717, 0.554752, 0.584581, 0.616272, 0.649744, 0.682947, 0.719405,
      0.755834, 0.793780, 0.833875, 0.873893, 0.917340, 0.960429, 1.005471, 1.052384, 1.099317, 1.149508,
      1.200130, 1.253038, 1.307672, 1.363480, 1.422592, 1.481900, 1.544111, 1.607982, 1.672954, 1.741025,
      1.809727, 1.882038, 1.955243, 2.029956, 2.108428, 2.186805, 2.268697, 2.352071, 2.437370, 2.525903,
      2.615415, 2.709082, 2.804198, 2.901704, 3.002606, 3.104412, 3.210406, 3.317733, 3.428386, 3.541634,
      3.656634, 3.775988, 3.896306, 4.020480, 4.146814, 4.275356, 4.408257, 4.542282, 4.681174, 4.822524,
      4.966424, 5.114948, 5.264973, 5.419906, 5.577056, 5.737688, 5.902347, 6.069138, 6.241065, 6.415155,
      6.593317, 6.774853, 6.959322, 7.148845, 7.340334, 7.537156, 7.737358, 7.940882, 8.149932, 8.361576,
      8.579150, 8.799591, 9.024378, 9.254584, 9.487362, 9.726535, 9.968784, 10.216089, 10.467716, 10.725293,
      10.986, 11.25, 11.52,
    ];


    /* The following times are set up by update() and refer
     * to the same instant.  The distinction between them
     * is required by altaz().
     */
    this.ss = new Array(5);
    for(var i=0; i<5; i++){
      this.ss[i] = new Array(8).fill(0.0);
    }
    this.cc = new Array(5);
    for(var i=0; i<5; i++){
      this.cc[i] = new Array(8).fill(0.0);
    }

    this.l;                /* Moon's ecliptic longitude */
    this.B;                /* Ecliptic latitude */

    this.moonpol = new Array(3);

    /* Orbit calculation begins.
     */
    this.SWELP;
    this.M;
    this.MP;
    this.D;
    this.NF;
    this.T;
    this.T2;

    this.T3;
    this.T4;
    this.f;
    this.g;
    this.Ve;
    this.Ea;
    this.Ma;
    this.Ju;
    this.Sa;
    this.cg;
    this.sg;
    this.l1;
    this.l2;
    this.l3;
    this.l4;

    this.CORR_MAPOG_JD_T0GREG = -3063616.5;   /* 1 jan -13100 greg. */
    this.CORR_MAPOG_JD_T1GREG = 1209720.5;   /* 1 jan  -1400 greg. */
    this.CORR_MAPOG_JD_T2GREG = 2780263.5;   /* 1 jan   2900 greg. */
    this.CORR_MAPOG_JD_T3GREG = 7930182.5;   /* 1 jan  17000 greg. */

    this.CORR_MNODE_JD_T0GREG = -3063616.5;   /* 1 jan -13100 greg. */
    this.CORR_MNODE_JD_T1GREG =   844477.5;   /* 1 jan  -2400 jul. */
    this.CORR_MNODE_JD_T2GREG =  2780263.5;   /* 1 jan   2900 jul. */
    this.CORR_MNODE_JD_T3GREG =  7930182.5;   /* 1 jan  17000 greg. */

  }

  /* Calculate geometric coordinates of Moon
   * without light time or nutation correction.
   */
  swi_moshmoon2(J, pol) {
    this.T = (J-Swe.SwephData.J2000)/36525.0;
    this.T2 = T*T;
    this.mean_elements();
    this.mean_elements_pl();
    this.moon1();
    this.moon2();
    this.moon3();
    this.moon4();
    for(var i=0; i<3; i++ ){
      pol[i] = this.moonpol[i];
    }
    return(0);
  }

  /* Moshier's moom
   * tjd          julian day
   * xpm          array of 6 doubles for moon's position and speed vectors
   */
  swi_moshmoon(tjd, do_save, xpmret) {
    var a = new Array(6);
    var b = new Array(6);
    var x1 = new Array(6);
    var x2 = new Array(6);
    var t = 0.0;
    var xx = new Array(6);
    var xpm = 0.0;
    var pdp = this.swed.pldat[Swe.SwephData.SEI_MOON];
    if (do_save) {
      xpm = pdp.x;
    } else {
      xpm = xx;
    }
    /* allow 0.2 day tolerance so that true node interval fits in */
    if (tjd < Swe.SwephData.MOSHLUEPH_START - 0.2 || tjd > Swe.SwephData.MOSHLUEPH_END + 0.2) {
      var s="jd "+tjd+" outside Moshier's Moon range "+
          Swe.SwephData.MOSHLUEPH_START+" .. "+
          Swe.SwephData.MOSHLUEPH_END+" ";
      console.error(s);
      return(Swe.ERR);
    }
    /* if moon has already been computed */
    if (tjd == pdp.teval && pdp.iephe == Swe.SEFLG_MOSEPH) {
      if (xpmret != null) {
        for (var i = 0; i <= 5; i++) {
          xpmret[i] = pdp.x[i];
        }
      }
      return(Swe.OK);
    }
    /* else compute moon */
    swi_moshmoon2(tjd, xpm);
    if (do_save) {
      pdp.teval = tjd;
      pdp.xflgs = -1;
      pdp.iephe = Swe.SEFLG_MOSEPH;
    }

    ecldat_equ2000(tjd, xpm);
    t = tjd + Swe.SwephData.MOON_SPEED_INTV;
    swi_moshmoon2(t, x1);
    ecldat_equ2000(t, x1);
    t = tjd - Swe.SwephData.MOON_SPEED_INTV;
    swi_moshmoon2(t, x2);
    ecldat_equ2000(t, x2);
    for (i = 0; i <= 2; i++) {
      b = (x1[i] - x2[i]) / 2;
      a = (x1[i] + x2[i]) / 2 - xpm[i];
      xpm[i+3] = (2 * a + b) / Swe.SwephData.MOON_SPEED_INTV;
    }
    if (xpmret != null) {
      for (i = 0; i <= 5; i++) {
        xpmret[i] = xpm[i];
      }
    }
    return(Swe.OK);
  }



  moon1() {
    var a;
    for (var i = 0; i < 5; i++) {
      for (var j = 0; j < 8; j++) {
        ss[i][j] = 0;
        cc[i][j] = 0;
      }
    }
    /* End of code addition */
    sscc( 0, Swe.SwephData.STR*D, 6 );
    sscc( 1, Swe.SwephData.STR*M,  4 );
    sscc( 2, Swe.SwephData.STR*MP, 4 );
    sscc( 3, Swe.SwephData.STR*NF, 4 );
    moonpol[0] = 0.0;
    moonpol[1] = 0.0;
    moonpol[2] = 0.0;
    /* terms in T^2, scale 1.0 = 10^-5" */
    chewm( LRT2, NLRT2, 4, 2, moonpol );
    chewm( BT2, NBT2, 4, 4, moonpol );
    f = 18 * Ve - 16 * Ea;
    g = Swe.SwephData.STR*(f - MP );  /* 18V - 16E - l */
    cg = Math.cos(g);
    sg = Math.sin(g);
    l = 6.367278 * cg + 12.747036 * sg;  /* t^0 */
    l1 = 23123.70 * cg - 10570.02 * sg;  /* t^1 */
    l2 = z[12] * cg + z[13] * sg;        /* t^2 */
    moonpol[2] += 5.01 * cg + 2.72 * sg;
    g = Swe.SwephData.STR * (10.*Ve - 3.*Ea - MP);
    cg = Math.cos(g);
    sg = Math.sin(g);
    l += -0.253102 * cg + 0.503359 * sg;
    l1 += 1258.46 * cg + 707.29 * sg;
    l2 += z[14] * cg + z[15] * sg;
    g = Swe.SwephData.STR*(8.*Ve - 13.*Ea);
    cg = Math.cos(g);
    sg = Math.sin(g);
    l += -0.187231 * cg - 0.127481 * sg;
    l1 += -319.87 * cg - 18.34 * sg;
    l2 += z[16] * cg + z[17] * sg;
    a = 4.0*Ea - 8.0*Ma + 3.0*Ju;
    g = Swe.SwephData.STR * a;
    cg = Math.cos(g);
    sg = Math.sin(g);
    l += -0.866287 * cg + 0.248192 * sg;
    l1 += 41.87 * cg + 1053.97 * sg;
    l2 += z[18] * cg + z[19] * sg;
    g = Swe.SwephData.STR*(a - MP);
    cg = Math.cos(g);
    sg = Math.sin(g);
    l += -0.165009 * cg + 0.044176 * sg;
    l1 += 4.67 * cg + 201.55 * sg;
    g = Swe.SwephData.STR*f;  /* 18V - 16E */
    cg = Math.cos(g);
    sg = Math.sin(g);
    l += 0.330401 * cg + 0.661362 * sg;
    l1 += 1202.67 * cg - 555.59 * sg;
    l2 += z[20] * cg + z[21] * sg;
    g = Swe.SwephData.STR*(f - 2.0*MP );  /* 18V - 16E - 2l */
    cg = Math.cos(g);
    sg = Math.sin(g);
    l += 0.352185 * cg + 0.705041 * sg;
    l1 += 1283.59 * cg - 586.43 * sg;
    g = Swe.SwephData.STR * (2.0*Ju - 5.0*Sa);
    cg = Math.cos(g);
    sg = Math.sin(g);
    l += -0.034700 * cg + 0.160041 * sg;
    l2 += z[22] * cg + z[23] * sg;
    g = Swe.SwephData.STR * (SWELP - NF);
    cg = Math.cos(g);
    sg = Math.sin(g);
    l += 0.000116 * cg + 7.063040 * sg;
    l1 +=  298.8 * sg;
    /* T^3 terms */
    sg = Math.sin( Swe.SwephData.STR * M );
    /* l3 +=  z[24] * sg;                   moshier! l3 not initialized! */
    l3 =  z[24] * sg;
    l4 = 0;
    g = Swe.SwephData.STR * (2.0*D - M);
    sg = Math.sin(g);
    cg = Math.cos(g);
    moonpol[2] +=  -0.2655 * cg * T;
    g = Swe.SwephData.STR * (M - MP);
    moonpol[2] +=  -0.1568 * Math.cos( g ) * T;
    g = Swe.SwephData.STR * (M + MP);
    moonpol[2] +=  0.1309 * Math.cos( g ) * T;
    g = Swe.SwephData.STR * (2.0*(D + M) - MP);
    sg = Math.sin(g);
    cg = Math.cos(g);
    moonpol[2] +=   0.5568 * cg * T;
    l2 += moonpol[0];
    g = Swe.SwephData.STR*(2.0*D - M - MP);
    moonpol[2] +=  -0.1910 * Math.cos( g ) * T;
    moonpol[1] *= T;
    moonpol[2] *= T;
    /* terms in T */
    moonpol[0] = 0.0;
    chewm( BT, NBT, 4, 4, moonpol );
    chewm( LRT, NLRT, 4, 1, moonpol );
    g = Swe.SwephData.STR*(f - MP - NF - 2355767.6); /* 18V - 16E - l - F */
    moonpol[1] +=  -1127. * Math.sin(g);
    g = Swe.SwephData.STR*(f - MP + NF - 235353.6); /* 18V - 16E - l + F */
    moonpol[1] +=  -1123. * Math.sin(g);
    g = Swe.SwephData.STR*(Ea + D + 51987.6);
    moonpol[1] +=  1303. * Math.sin(g);
    g = Swe.SwephData.STR*SWELP;
    moonpol[1] +=  342. * Math.sin(g);
    g = Swe.SwephData.STR*(2.*Ve - 3.*Ea);
    cg = Math.cos(g);
    sg = Math.sin(g);
    l +=  -0.343550 * cg - 0.000276 * sg;
    l1 +=  105.90 * cg + 336.53 * sg;
    g = Swe.SwephData.STR*(f - 2.*D); /* 18V - 16E - 2D */
    cg = Math.cos(g);
    sg = Math.sin(g);
    l += 0.074668 * cg + 0.149501 * sg;
    l1 += 271.77 * cg - 124.20 * sg;
    g = Swe.SwephData.STR*(f - 2.*D - MP);
    cg = Math.cos(g);
    sg = Math.sin(g);
    l += 0.073444 * cg + 0.147094 * sg;
    l1 += 265.24 * cg - 121.16 * sg;
    g = Swe.SwephData.STR*(f + 2.*D - MP);
    cg = Math.cos(g);
    sg = Math.sin(g);
    l += 0.072844 * cg + 0.145829 * sg;
    l1 += 265.18 * cg - 121.29 * sg;
    g = Swe.SwephData.STR*(f + 2.*(D - MP));
    cg = Math.cos(g);
    sg = Math.sin(g);
    l += 0.070201 * cg + 0.140542 * sg;
    l1 += 255.36 * cg - 116.79 * sg;
    g = Swe.SwephData.STR*(Ea + D - NF);
    cg = Math.cos(g);
    sg = Math.sin(g);
    l += 0.288209 * cg - 0.025901 * sg;
    l1 += -63.51 * cg - 240.14 * sg;
    g = Swe.SwephData.STR*(2.*Ea - 3.*Ju + 2.*D - MP);
    cg = Math.cos(g);
    sg = Math.sin(g);
    l += 0.077865 * cg + 0.438460 * sg;
    l1 += 210.57 * cg + 124.84 * sg;
    g = Swe.SwephData.STR*(Ea - 2.*Ma);
    cg = Math.cos(g);
    sg = Math.sin(g);
    l += -0.216579 * cg + 0.241702 * sg;
    l1 += 197.67 * cg + 125.23 * sg;
    g = Swe.SwephData.STR*(a + MP);
    cg = Math.cos(g);
    sg = Math.sin(g);
    l += -0.165009 * cg + 0.044176 * sg;
    l1 += 4.67 * cg + 201.55 * sg;
    g = Swe.SwephData.STR*(a + 2.*D - MP);
    cg = Math.cos(g);
    sg = Math.sin(g);
    l += -0.133533 * cg + 0.041116 * sg;
    l1 +=  6.95 * cg + 187.07 * sg;
    g = Swe.SwephData.STR*(a - 2.*D + MP);
    cg = Math.cos(g);
    sg = Math.sin(g);
    l += -0.133430 * cg + 0.041079 * sg;
    l1 +=  6.28 * cg + 169.08 * sg;
    g = Swe.SwephData.STR*(3.*Ve - 4.*Ea);
    cg = Math.cos(g);
    sg = Math.sin(g);
    l += -0.175074 * cg + 0.003035 * sg;
    l1 +=  49.17 * cg + 150.57 * sg;
    g = Swe.SwephData.STR*(2.*(Ea + D - MP) - 3.*Ju + 213534.);
    l1 +=  158.4 * Math.sin(g);
    l1 += moonpol[0];
    a = 0.1 * T; /* set amplitude scale of 1.0 = 10^-4 arcsec */
    moonpol[1] *= a;
    moonpol[2] *= a;
  }

  void moon2() {
    /* terms in T^0 */
    g = Swe.SwephData.STR*(2*(Ea-Ju+D)-MP+648431.172);
    l += 1.14307 * Math.sin(g);
    g = Swe.SwephData.STR*(Ve-Ea+648035.568);
    l += 0.82155 * Math.sin(g);
    g = Swe.SwephData.STR*(3*(Ve-Ea)+2*D-MP+647933.184);
    l += 0.64371 * Math.sin(g);
    g = Swe.SwephData.STR*(Ea-Ju+4424.04);
    l += 0.63880 * Math.sin(g);
    g = Swe.SwephData.STR*(SWELP + MP - NF + 4.68);
    l += 0.49331 * Math.sin(g);
    g = Swe.SwephData.STR*(SWELP - MP - NF + 4.68);
    l += 0.4914 * Math.sin(g);
    g = Swe.SwephData.STR*(SWELP+NF+2.52);
    l += 0.36061 * Math.sin(g);
    g = Swe.SwephData.STR*(2.*Ve - 2.*Ea + 736.2);
    l += 0.30154 * Math.sin(g);
    g = Swe.SwephData.STR*(2.*Ea - 3.*Ju + 2.*D - 2.*MP + 36138.2);
    l += 0.28282 * Math.sin(g);
    g = Swe.SwephData.STR*(2.*Ea - 2.*Ju + 2.*D - 2.*MP + 311.0);
    l += 0.24516 * Math.sin(g);
    g = Swe.SwephData.STR*(Ea - Ju - 2.*D + MP + 6275.88);
    l += 0.21117 * Math.sin(g);
    g = Swe.SwephData.STR*(2.*(Ea - Ma) - 846.36);
    l += 0.19444 * Math.sin(g);
    g = Swe.SwephData.STR*(2.*(Ea - Ju) + 1569.96);
    l -= 0.18457 * Math.sin(g);
    g = Swe.SwephData.STR*(2.*(Ea - Ju) - MP - 55.8);
    l += 0.18256 * Math.sin(g);
    g = Swe.SwephData.STR*(Ea - Ju - 2.*D + 6490.08);
    l += 0.16499 * Math.sin(g);
    g = Swe.SwephData.STR*(Ea - 2.*Ju - 212378.4);
    l += 0.16427 * Math.sin(g);
    g = Swe.SwephData.STR*(2.*(Ve - Ea - D) + MP + 1122.48);
    l += 0.16088 * Math.sin(g);
    g = Swe.SwephData.STR*(Ve - Ea - MP + 32.04);
    l -= 0.15350 * Math.sin(g);
    g = Swe.SwephData.STR*(Ea - Ju - MP + 4488.88);
    l += 0.14346 * Math.sin(g);
    g = Swe.SwephData.STR*(2.*(Ve - Ea + D) - MP - 8.64);
    l += 0.13594 * Math.sin(g);
    g = Swe.SwephData.STR*(2.*(Ve - Ea - D) + 1319.76);
    l += 0.13432 * Math.sin(g);
    g = Swe.SwephData.STR*(Ve - Ea - 2.*D + MP - 56.16);
    l -= 0.13122 * Math.sin(g);
    g = Swe.SwephData.STR*(Ve - Ea + MP + 54.36);
    l -= 0.12722 * Math.sin(g);
    g = Swe.SwephData.STR*(3.*(Ve - Ea) - MP + 433.8);
    l += 0.12539 * Math.sin(g);
    g = Swe.SwephData.STR*(Ea - Ju + MP + 4002.12);
    l += 0.10994 * Math.sin(g);
    g = Swe.SwephData.STR*(20.*Ve - 21.*Ea - 2.*D + MP - 317511.72);
    l += 0.10652 * Math.sin(g);
    g = Swe.SwephData.STR*(26.*Ve - 29.*Ea - MP + 270002.52);
    l += 0.10490 * Math.sin(g);
    g = Swe.SwephData.STR*(3.*Ve - 4.*Ea + D - MP - 322765.56);
    l += 0.10386 * Math.sin(g);
    g = Swe.SwephData.STR*(SWELP+648002.556);
    B =  8.04508 * Math.sin(g);
    g = Swe.SwephData.STR*(Ea+D+996048.252);
    B += 1.51021 * Math.sin(g);
    g = Swe.SwephData.STR*(f - MP + NF + 95554.332);
    B += 0.63037 * Math.sin(g);
    g = Swe.SwephData.STR*(f - MP - NF + 95553.792);
    B += 0.63014 * Math.sin(g);
    g = Swe.SwephData.STR*(SWELP - MP + 2.9);
    B +=  0.45587 * Math.sin(g);
    g = Swe.SwephData.STR*(SWELP + MP + 2.5);
    B +=  -0.41573 * Math.sin(g);
    g = Swe.SwephData.STR*(SWELP - 2.0*NF + 3.2);
    B +=  0.32623 * Math.sin(g);
    g = Swe.SwephData.STR*(SWELP - 2.0*D + 2.5);
    B +=  0.29855 * Math.sin(g);
  }

  void moon3() {
    /* terms in T^0 */
    moonpol[0] = 0.0;
    chewm( LR, NLR, 4, 1, moonpol );
    chewm( MB, NMB, 4, 3, moonpol );
    l += (((l4 * T + l3) * T + l2) * T + l1) * T * 1.0e-5;
    moonpol[0] = SWELP + l + 1.0e-4 * moonpol[0];
    moonpol[1] = 1.0e-4 * moonpol[1] + B;
    moonpol[2] = 1.0e-4 * moonpol[2] + 385000.52899; /* kilometers */
  }


  /* Compute final ecliptic polar coordinates
   */
  moon4() {
    moonpol[2] /= Swe.AUNIT / 1000;
    moonpol[0] = Swe.SwephData.STR * mods3600( moonpol[0] );
    moonpol[1] = Swe.SwephData.STR * moonpol[1];
    B = moonpol[1];
  }


  corr_mean_node(J) {
    var J0, dJ, dayscty, dcor, dcor0, dcor1, dfrac;
    var i;
    J0 = CORR_MNODE_JD_T0GREG; /* 1-jan--13000 greg */
    dayscty = 36524.25; /* days per Gregorian century */
    if (J < Swe.SwephData.JPL_DE431_START) return 0;
    if (J > Swe.SwephData.JPL_DE431_END) return 0;
  /*if (J > CORR_MNODE_JD_T1GREG && J < CORR_MNODE_JD_T2GREG) return 0;*/
    dJ = J - J0;
    i = (int)Math.floor(dJ / dayscty); /* centuries = index of lower correction value */
    dfrac = (dJ - i * dayscty) / dayscty;
    dcor0 = mean_node_corr[i];
    dcor1 = mean_node_corr[i + 1];
    dcor = dcor0 + dfrac * (dcor1 - dcor0);
    return dcor;
  }

  /* mean lunar node
   * J            julian day
   * pol          return array for position and velocity
   *              (polar coordinates of ecliptic of date)
   */
  swi_mean_node(J, pol) {
    return swi_mean_node(J, pol, 0);
  }
  swi_mean_node(J, pol, offs) {
    var dcor;
    T = (J-Swe.SwephData.J2000)/36525.0;
    T2 = T*T;
    T3 = T*T2;
    T4 = T2*T2;
    /* with elements from swi_moshmoon2(), which are fitted to jpl-ephemeris */
    if (J < Swe.SwephData.MOSHNDEPH_START || J > Swe.SwephData.MOSHNDEPH_END) {
      var s="jd "+J+" outside mean node range "+
                Swe.SwephData.MOSHNDEPH_START+" .. "+
                Swe.SwephData.MOSHNDEPH_END+" ";
      console.error(s);
      return Swe.ERR;
    }
    mean_elements();
    dcor = corr_mean_node(J) * 3600;
    /* longitude */
    pol[offs] = this.sl.swi_mod2PI((SWELP - NF - dcor) * Swe.SwephData.STR);
    /* latitude */
    pol[offs+1] = 0.0;
    /* distance */
    pol[offs+2] = Swe.SwephData.MOON_MEAN_DIST / Swe.AUNIT; /* or should it be derived from mean
                                      * orbital ellipse? */
    return Swe.OK;
  }


  corr_mean_apog(J) {
    var J0, dJ, dayscty, dcor, dcor0, dcor1, dfrac;
    var i;
    J0 = CORR_MAPOG_JD_T0GREG; /* 1-jan--13000 greg */
    dayscty = 36524.25; /* days per Gregorian century */
    if (J < Swe.SwephData.JPL_DE431_START) return 0;
    if (J > Swe.SwephData.JPL_DE431_END) return 0;
    /*if (J > CORR_MAPOG_JD_T1GREG && J < CORR_MAPOG_JD_T2GREG) return 0;*/
    dJ = J - J0;
    i = (int)Math.floor(dJ / dayscty); /* centuries = index of lower correction value */
    dfrac = (dJ - i * dayscty) / dayscty;
    dcor0 = mean_apsis_corr[i];
    dcor1 = mean_apsis_corr[i + 1];
    dcor = dcor0 + dfrac * (dcor1 - dcor0);
    return dcor;
  }

  /* mean lunar apogee ('dark moon', 'lilith')
   * J            julian day
   * pol          return array for position
   *              (polar coordinates of ecliptic of date)
   */
  swi_mean_apog(J, pol) {
    return swi_mean_apog(J, pol, 0);
  }
  swi_mean_apog(J, pol, offs) {
    var node, dcor;
    T = (J-Swe.SwephData.J2000)/36525.0;
    T2 = T*T;
    T3 = T*T2;
    T4 = T2*T2;
    /* with elements from swi_moshmoon2(), which are fitted to jpl-ephemeris */
    if (J < Swe.SwephData.MOSHNDEPH_START || J > Swe.SwephData.MOSHNDEPH_END) {
      var s="jd "+J+" outside mean apogee range "+
                Swe.SwephData.MOSHNDEPH_START+" .. "+
                Swe.SwephData.MOSHNDEPH_END+" ";
      console.error(s);
      return Swe.ERR;
    }
    mean_elements();
    pol[offs] = this.sl.swi_mod2PI((SWELP - MP) * Swe.SwephData.STR + Math.PI);
    pol[offs+1] = 0;
    pol[offs+2] = Swe.SwephData.MOON_MEAN_DIST * (1 + Swe.SwephData.MOON_MEAN_ECC) /
                                                 Swe.AUNIT; /* apogee */
    dcor = corr_mean_apog(J) * SwissData.DEGTORAD;
    pol[offs] = this.sl.swi_mod2PI(pol[offs] - dcor);
    /* apogee is now projected onto ecliptic */
    node = (SWELP - NF) * Swe.SwephData.STR;
    dcor = corr_mean_node(J) * SwissData.DEGTORAD;
    node = this.sl.swi_mod2PI(node - dcor);
    pol[offs] = this.sl.swi_mod2PI(pol[offs] - node);
    this.sl.swi_polcart(pol, offs, pol, offs);
    this.sl.swi_coortrf(pol, offs, pol, offs, -Swe.SwephData.MOON_MEAN_INCL * SwissData.DEGTORAD);
    this.sl.swi_cartpol(pol, offs, pol, offs);
    pol[offs] = this.sl.swi_mod2PI(pol[offs] + node);
    return Swe.OK;
  }

  /* Program to step through the perturbation table
   */
  chewm(pt, nlines, nangles, typflg, ans ) {
    var npt=0;
    var i, j, k, k1, m;
    var cu, su, cv, sv, ff;
    for( i=0; i<nlines; i++ ) {
      k1 = 0;
      sv = 0.0;
      cv = 0.0;
      for( m=0; m<nangles; m++ ) {
        j = pt[npt++]; /* multiple angle factor */
        if( j!=0 ) {
          k = j;
          if( j < 0 ) {
            k = -k; /* make angle factor > 0 */
          }
          /* sin, cos (k*angle) from lookup table */
          su = ss[m][k-1];
          cu = cc[m][k-1];
          if( j < 0 ) {
            su = -su; /* negative angle factor */
          }
          if( k1 == 0 ) {
            /* Set sin, cos of first angle. */
            sv = su;
            cv = cu;
            k1 = 1;
          }
          else {
            /* Combine angles by trigonometry. */
            ff =  su*cv + cu*sv;
            cv = cu*cv - su*sv;
            sv = ff;
          }
        }
      }
      /* Accumulate
       */
      switch( typflg ) {
      /* large longitude and radius */
      case 1:
        j = pt[npt++];
        k = pt[npt++];
        ans[0] += (10000.0 * j  + k) * sv;
        j = pt[npt++];
        k = pt[npt++];
        if( k!=0 ) {
          ans[2] += (10000.0 * j  + k) * cv;
        }
        break;
      /* longitude and radius */
      case 2:
        j = pt[npt++];
        k = pt[npt++];
        ans[0] += j * sv;
        ans[2] += k * cv;
        break;
      /* large latitude */
      case 3:
        j = pt[npt++];
        k = pt[npt++];
        ans[1] += ( 10000.0*j + k)*sv;
        break;
      /* latitude */
      case 4:
        j = pt[npt++];
        ans[1] += j * sv;
        break;
      }
    }
  }

  /* Prepare lookup table of sin and cos ( i*Lj )
   * for required multiple angles
   */
  sscc(k, arg, n ) {
    var cu, su, cv, sv, s;
    var i;
    su = Math.sin(arg);
    cu = Math.cos(arg);
    ss[k][0] = su;                        /* sin(L) */
    cc[k][0] = cu;                        /* cos(L) */
    sv = 2.0*su*cu;
    cv = cu*cu - su*su;
    ss[k][1] = sv;                        /* sin(2L) */
    cc[k][1] = cv;
    for( i=2; i<n; i++ ) {
      s =  su*cv + cu*sv;
      cv = cu*cv - su*sv;
      sv = s;
      ss[k][i] = sv;              /* sin( i+1 L ) */
      cc[k][i] = cv;
    }
  }

  /* converts from polar coordinates of ecliptic of date
   *          to   cartesian coordinates of equator 2000
   * tjd          date
   * x            array of position
   */
  ecldat_equ2000(tjd, xpm) {
    /* cartesian */
    this.sl.swi_polcart(xpm, xpm);
    /* equatorial */
    this.sl.swi_coortrf2(xpm, xpm, -this.swed.oec.seps, this.swed.oec.ceps);
    /* j2000 */
    this.sl.swi_precess(xpm, tjd, 0, Swe.SwephData.J_TO_J2000);/**/
  }

  /* Reduce arc seconds modulo 360 degrees
   * answer in arc seconds
   */
  mods3600(x) {
    var lx;
    lx = x;
    lx = lx - 1296000.0 * Math.floor( lx/1296000.0 );
    return( lx );
  }

  swi_mean_lunar_elements(tjd,
                               DblObj node, DblObj dnode,
                               DblObj peri, DblObj dperi) {
    var dcor;
    T = (tjd - Swe.SwephData.J2000) / 36525.0;
    T2 = T*T;
    mean_elements();
    node.val = this.sl.swe_degnorm((SWELP - NF) * Swe.SwephData.STR * SwissData.RADTODEG);
    peri.val = this.sl.swe_degnorm((SWELP - MP) * Swe.SwephData.STR * SwissData.RADTODEG);
    T -= 1.0 / 36525;
    mean_elements();
    dnode.val = this.sl.swe_degnorm(node.val - (SWELP-NF) * Swe.SwephData.STR * SwissData.RADTODEG);
    dnode.val -= 360;
    dperi.val = this.sl.swe_degnorm(peri.val - (SWELP-MP) * Swe.SwephData.STR * SwissData.RADTODEG);
    dcor = corr_mean_node(tjd);
    node.val = this.sl.swe_degnorm(node.val - dcor);
    dcor = corr_mean_apog(tjd);
    peri.val = this.sl.swe_degnorm(peri.val - dcor);
  }


  mean_elements() {
    var fracT = T%1.;
    /* Mean anomaly of sun = l' (J. Laskar) */
    M =  mods3600(129600000.0 * fracT - 3418.961646 * T +  1287104.76154);
    M += ((((((((
      1.62e-20 * T
    - 1.0390e-17 ) * T
    - 3.83508e-15 ) * T
    + 4.237343e-13 ) * T
    + 8.8555011e-11 ) * T
    - 4.77258489e-8 ) * T
    - 1.1297037031e-5 ) * T
    + 1.4732069041e-4 ) * T
    - 0.552891801772 ) * T2;

    /* Mean distance of moon from its ascending node = F */
    /*NF = mods3600((1739527263.0983 - 2.079419901760e-01) * T +335779.55755);*/
    NF = mods3600(1739232000.0 * fracT + 295263.0983 * T -
                  2.079419901760e-01 * T + 335779.55755);
    /* Mean anomaly of moon = l */
    MP = mods3600(1717200000.0 * fracT + 715923.4728 * T -
                  2.035946368532e-01 * T + 485868.28096);
    /* Mean elongation of moon = D */
    D = mods3600(1601856000.0 * fracT + 1105601.4603 * T +
                 3.962893294503e-01 * T + 1072260.73512);
    /* Mean longitude of moon, referred to the mean ecliptic and equinox of date */
    SWELP = mods3600(1731456000.0 * fracT + 1108372.83264 * T - 6.784914260953e-01 * T +  785939.95571);
    /* Higher degree secular terms found by least squares fit */
    NF += ((z[2]*T + z[1])*T + z[0])*T2;
    MP += ((z[5]*T + z[4])*T + z[3])*T2;
    D  += ((z[8]*T + z[7])*T + z[6])*T2;
    SWELP += ((z[11]*T + z[10])*T + z[9])*T2;

    /* sensitivity of mean elements
     *    delta argument = scale factor times delta amplitude (arcsec)
     * cos l  9.0019 = mean eccentricity
     * cos 2D 43.6
     * cos F  11.2 (latitude term)
     */
  }
  
  mean_elements_pl() {
    /* Mean longitudes of planets (Laskar, Bretagnon) */
    Ve = mods3600( 210664136.4335482 * T + 655127.283046 );
    Ve += ((((((((
      -9.36e-023 * T
     - 1.95e-20 ) * T
     + 6.097e-18 ) * T
     + 4.43201e-15 ) * T
     + 2.509418e-13 ) * T
     - 3.0622898e-10 ) * T
     - 2.26602516e-9 ) * T
     - 1.4244812531e-5 ) * T
     + 0.005871373088 ) * T2;
    Ea = mods3600( 129597742.26669231  * T +  361679.214649 );
    Ea += (((((((( -1.16e-22 * T
     + 2.976e-19 ) * T
     + 2.8460e-17 ) * T
     - 1.08402e-14 ) * T
     - 1.226182e-12 ) * T
     + 1.7228268e-10 ) * T
     + 1.515912254e-7 ) * T
     + 8.863982531e-6 ) * T
     - 2.0199859001e-2 ) * T2;
    Ma = mods3600(  68905077.59284 * T + 1279559.78866 );
    Ma += (-1.043e-5*T + 9.38012e-3)*T2;
    Ju = mods3600( 10925660.428608 * T +  123665.342120 );
    Ju += (1.543273e-5*T - 3.06037836351e-1)*T2;
    Sa = mods3600( 4399609.65932 * T + 180278.89694 );
    Sa += (( 4.475946e-8*T - 6.874806E-5 ) * T + 7.56161437443E-1)*T2;
  }
  
  /* Calculate geometric coordinates of true interpolated Moon apsides
   */
  swi_intp_apsides(J, pol, ipli) {
    var dd;
    var rsv[] = new Array(3);
    var sNF, sD, sLP, sMP, sM, sVe, sEa, sMa, sJu, sSa, fM, fVe, fEa, fMa, fJu, fSa, cMP, zMP, fNF, fD, fLP;
    var dMP, mLP, mNF, mD, mMP;
    var i, ii, iii, niter = 4;    /* niter: silence compiler warning */
    ii=1;
    zMP=27.55454988;
    fNF = 27.212220817/zMP;/**/
    fD  = 29.530588835/zMP;/**/
    fLP = 27.321582/zMP;/**/
    fM  = 365.2596359/zMP;
    fVe = 224.7008001/zMP;
    fEa = 365.2563629/zMP;
    fMa = 686.9798519/zMP;
    fJu = 4332.589348/zMP;
    fSa = 10759.22722/zMP;
    T = (J-Swe.SwephData.J2000)/36525.0;
    T2 = T*T;
    T4 = T2*T2;
    mean_elements();
    mean_elements_pl();
    sNF = NF;
    sD  = D;
    sLP = SWELP;
    sMP = MP;
    sM  = M ;
    sVe = Ve;
    sEa = Ea;
    sMa = Ma;
    sJu = Ju;
    sSa = Sa;
    sNF = mods3600(NF);
    sD  = mods3600(D);
    sLP = mods3600(SWELP);
    sMP = mods3600(MP);
    if (ipli == Swe.SwephData.SEI_INTP_PERG) {MP = 0.0; niter = 5;}
    if (ipli == Swe.SwephData.SEI_INTP_APOG) {MP = 648000.0; niter = 4;}
    cMP = 0;
    dd = 18000.0;
    for (iii= 0; iii<=niter; iii++) {/**/
      dMP = sMP - MP;
      mLP = sLP - dMP;
      mNF = sNF - dMP;
      mD  = sD  - dMP;
      mMP = sMP - dMP;
      for (ii = 0; ii <=2; ii++) {/**/
        MP = mMP + (ii-1)*dd;       /**/
        NF = mNF + (ii-1)*dd/fNF;
        D  = mD  + (ii-1)*dd/fD;
        SWELP = mLP + (ii-1)*dd/fLP;
        M  = sM  + (ii-1)*dd/fM ;
        Ve = sVe + (ii-1)*dd/fVe;
        Ea = sEa + (ii-1)*dd/fEa;
        Ma = sMa + (ii-1)*dd/fMa;
        Ju = sJu + (ii-1)*dd/fJu;
        Sa = sSa + (ii-1)*dd/fSa;
        moon1();
        moon2();
        moon3();
        moon4();
        if (ii==1) {
          for( i=0; i<3; i++ ) pol[i] = moonpol[i];
        }
        rsv[ii] = moonpol[2];
      }
      cMP = (1.5*rsv[0] - 2*rsv[1] + 0.5*rsv[2]) / (rsv[0] + rsv[2] - 2*rsv[1]);/**/
      cMP *= dd;
      cMP = cMP - dd;
      mMP += cMP;
      MP = mMP;
      dd /= 10;
    }
    return(0);
  }

}