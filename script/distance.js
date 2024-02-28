 const labelFrom = document.querySelector("#labelFrom");
const labelTo = document.querySelector("#labelTo");
const inputDistance = document.querySelector("#inputDistance");
const outputDistance = document.querySelector("#outputDistance");

const fKm = document.querySelector("#fKm");
const fMil = document.querySelector("#fMil");
const fHm = document.querySelector("#fHm");
const fDam = document.querySelector("#fDam");
const fM = document.querySelector("#fM");
const fDim = document.querySelector("#fDim");
const fCm = document.querySelector("#fCm");
const fMm = document.querySelector("#fMm");
const fMcr = document.querySelector("#fMcr");
const fNm = document.querySelector("#fNm");
const fYr = document.querySelector("#fYr");
const fFt = document.querySelector("#fFt");
const fIc = document.querySelector("#fIc");

const tKm = document.querySelector("#tKm");
const tMil = document.querySelector("#tMil");
const tHm = document.querySelector("#tHm");
const tDam = document.querySelector("#tDam");
const tM = document.querySelector("#tM");
const tDim = document.querySelector("#tDim");
const tCm = document.querySelector("#tCm");
const tMm = document.querySelector("#tMm");
const tMcr = document.querySelector("#tMcr");
const tNm = document.querySelector("#tNm");
const tYr = document.querySelector("#tYr");
const tFt = document.querySelector("#tFt");
const tIc = document.querySelector("#tIc");

// fkm is clicked
fKm.addEventListener("click", (e) => {
  labelFrom.textContent = fKm.value;

  if (fKm.checked == true) {
    // fkm -> tkm
    tKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // fkm -> tmil
    tMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.621371;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.621371;
      });
    });

    // fkm -> thm
    tHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10;
      });
    });

    // fkm -> tdam
    tDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 100;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 100;
      });
    });

    // fkm -> tm
    tM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000;
      });
    });

    // fkm -> tdim
    tDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10000;
      });
    });

    // fkm -> tcm
    tCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 100000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 100000;
      });
    });

    // fkm -> tmm
    tMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000000;
      });
    });

    // fkm -> tmcr
    tMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000000000;
      });
    });

    // fkm -> tnm
    tNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000000000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000000000000;
      });
    });

    // fkm -> tyr
    tYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1093.6133;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1093.6133;
      });
    });

    // fkm -> tft
    tFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 3280.8399;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 3280.8399;
      });
    });

    // fkm -> tic
    tIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 39370.0787;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 39370.0787;
      });
    });
  }
});

// tkm is clicked
tKm.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tKm.checked == true) {
    // tkm -> fkm
    fKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // tkm -> fmil
    fMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1.6093;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1.6093;
      });
    });

    // tkm -> fhm
    fHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10;
      });
    });

    // tkm -> fdam
    fDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 100;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100;
      });
    });

    // tkm -> fm
    fM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000;
      });
    });

    // tkm -> fdim
    fDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10000;
      });
    });

    // tkm -> fcm
    fCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 100000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100000;
      });
    });

    // tkm -> fmm
    fMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000000;
      });
    });

    // tkm -> fmcr
    fMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000000000;
      });
    });

    // tkm -> fnm
    fNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000000000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000000000000;
      });
    });

    // tkm -> fyr
    fYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0009;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0009;
      });
    });

    // tkm -> fft
    fFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0003;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0003;
      });
    });

    // tkm -> fic
    fIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0000254;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0000254;
      });
    });
  }
});

// fmil is clicked
fMil.addEventListener("click", (e) => {
  labelFrom.textContent = fMil.value;

  if (fMil.checked == true) {
    // fmil -> tkm
    tKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1.6093;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1.6093;
      });
    });

    // fmil -> tmil
    tMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // fmil -> thm
    tHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 16.0934;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 16.0934;
      });
    });

    // fmill -> tdam
    tDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 160.9344;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 160.9344;
      });
    });

    // fmill -> tm
    tM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1609.344;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1609.344;
      });
    });

    // fmill -> tdim
    tDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 16093.44;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 16093.44;
      });
    });

    // fmill -> tcm
    tCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 160934.4;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 160934.4;
      });
    });

    // fmill -> tmm
    tMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1609344;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1609344;
      });
    });

    // fmill -> tmcr
    tMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1609344000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1609344000;
      });
    });

    // fmill -> tnm
    tNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1609344000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1609344000000;
      });
    });

    // fmill -> tyr
    tYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1760;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1760;
      });
    });

    // fmill -> tft
    tFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 5280;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 5280;
      });
    });

    // fmill -> tic
    tIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 63360;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 63360;
      });
    });
  }
});

// tmil is clicked
tMil.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tMil.checked == true) {
    // tmil -> fkm
    fKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.621371;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.621371;
      });
    });

    // tmil -> fmil
    fMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // tmil -> fhm
    fHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0621371;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0621371;
      });
    });

    // tmil -> fdam
    fDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.00621371;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.00621371;
      });
    });

    // tmil -> fm
    fM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.000621371;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.000621371;
      });
    });

    // tmil -> fdim
    fDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0000621371;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0000621371;
      });
    });

    // tmil -> fcm
    fCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.00000621371;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.00000621371;
      });
    });

    // tmil -> fmm
    fMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.000000621371;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.000000621371;
      });
    });

    // tmil -> fmcr
    fMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.000000000621371;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.000000000621371;
      });
    });

    // tmil -> fnm
    fNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.00000000000006213711922373;
      inputDistance.addEventListener("input", () => {
        outputDistance.value =
          inputDistance.value * 0.00000000000006213711922373;
      });
    });

    // tmil -> fyr
    fYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0006;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0006;
      });
    });

    // tmil -> fft
    fFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0002;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0002;
      });
    });

    // tmil -> fic
    fIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0000157828;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0000157828;
      });
    });
  }
});

// fhm is clicked
fHm.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fHm.checked == true) {
    // fhm -> tkm
    tKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10;
      });
    });

    // fhm -> tmil
    tMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0621;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0621;
      });
    });

    // fhm -> thm
    tHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // fhm -> tdam
    tDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10;
      });
    });

    // fhm -> tm
    tM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 100;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 100;
      });
    });

    // fhm -> tdim
    tDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000;
      });
    });

    // fhm -> tcm
    tCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10000;
      });
    });

    // fhm -> tmm
    tMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 100000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 100000;
      });
    });

    // fhm -> tmcr
    tMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 100000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 100000000;
      });
    });

    // fhm -> tnm
    tNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 100000000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 100000000000;
      });
    });

    // fhm -> tyr
    tYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 109.3613;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 109.3613;
      });
    });

    // fhm -> tft
    tFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 328.084;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 328.084;
      });
    });

    // fhm -> tic
    tIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 3937.0079;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 3937.0079;
      });
    });
  }
});

// thm is clicked
tHm.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tHm.checked == true) {
    // thm -> fkm
    fKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10;
      });
    });

    // thm -> fmil
    fMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 16.0934;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 16.0934;
      });
    });

    // thm -> fhm
    fHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // thm -> fdam
    fDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10;
      });
    });

    // thm -> fm
    fM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 100;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100;
      });
    });

    // thm -> fdim
    fDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000;
      });
    });

    // thm -> fcm
    fCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10000;
      });
    });

    // thm -> fmm
    fMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 100000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100000;
      });
    });

    // thm -> fmcr
    fMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 100000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100000000;
      });
    });

    // thm -> fnm
    fNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 100000000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100000000000;
      });
    });

    // thm -> fyr
    fYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0091;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0091;
      });
    });

    // thm -> fft
    fFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.003;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.003;
      });
    });

    // thm -> fic
    fIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0003;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0003;
      });
    });
  }
});

// fdam is clicked
fDam.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fDam.checked == true) {
    // fdam -> tkm
    tKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 100;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100;
      });
    });

    // fdam -> tmil
    tMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0062;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0062;
      });
    });

    // fdam -> thm
    tHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10;
      });
    });

    // fdam -> tdam
    tDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // fdam -> tm
    tM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10;
      });
    });

    // fdam -> tdim
    tDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 100;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 100;
      });
    });

    // fdam -> tcm
    tCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000;
      });
    });

    // fdam -> tmm
    tMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10000;
      });
    });

    // fdam -> tmcr
    tMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10000000;
      });
    });

    // fdam -> tnm
    tNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10000000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10000000000;
      });
    });

    // fdam -> tyr
    tYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10.9361;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10.9361;
      });
    });

    // fdam -> tft
    tFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 32.8084;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 32.8084;
      });
    });

    // fdam -> tic
    tIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 393.7008;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 393.7008;
      });
    });
  }
});

// tdam is clicked
tDam.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tDam.checked == true) {
    // tdam -> fkm
    fKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 100;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 100;
      });
    });

    // tdam -> fmil
    fMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 160.9344;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 160.9344;
      });
    });

    // tdam -> fhm
    fHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10;
      });
    });

    // tdam -> fdam
    fDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // tdam -> fm
    fM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10;
      });
    });

    // tdam -> fdim
    fDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 100;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100;
      });
    });

    // tdam -> fcm
    fCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000;
      });
    });

    // tdam -> fmm
    fMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10000;
      });
    });

    // tdam -> fmcr
    fMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10000000;
      });
    });

    // tdam -> fnm
    fNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10000000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10000000000;
      });
    });

    // tdam -> fyr
    fYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0914;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0914;
      });
    });

    // tdam -> fft
    fFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0305;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0305;
      });
    });

    // tdam -> fic
    fIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0025;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0025;
      });
    });
  }
});

// fm is clicked
fM.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fM.checked == true) {
    // fm -> tkm
    tKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000;
      });
    });

    // fm -> tmil
    tMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0006;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0006;
      });
    });

    // fm -> thm
    tHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 100;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100;
      });
    });

    // fm -> tdam
    tDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10;
      });
    });

    // fm -> tm
    tM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // fm -> tdim
    tDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10;
      });
    });

    // fm -> tcm
    tCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 100;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 100;
      });
    });

    // fm -> tmm
    tMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000;
      });
    });

    // fm -> tmcr
    tMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000000;
      });
    });

    // fm -> tnm
    tNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000000000;
      });
    });

    // fm -> tyr
    tYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1.0936;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1.0936;
      });
    });

    // fm -> tft
    tFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 3.2808;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 3.2808;
      });
    });

    // fm -> tic
    tIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 39.3701;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 39.3701;
      });
    });
  }
});

// tm is clicked
tM.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tM.checked == true) {
    // tm -> fkm
    fKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000;
      });
    });

    // tm -> fmil
    fMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1609.344;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1609.344;
      });
    });

    // tm -> fhm
    fHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 100;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 100;
      });
    });

    // tm -> fdam
    fDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10;
      });
    });

    // tm -> fm
    fM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // tm -> fdim
    fM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100;
      });
    });

    // tm-> fcm
    fCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 100;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100;
      });
    });

    // tm-> fmm
    fMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000;
      });
    });

    // tm-> fmcr
    fMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000000;
      });
    });

    // tm-> fnm
    fNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000000000;
      });
    });

    // tm-> fyr
    fYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.9144;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.9144;
      });
    });

    // tm-> fft
    fFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.3048;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.3048;
      });
    });

    // tm-> fic
    fIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0254;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0254;
      });
    });
  }
});

// fdim is clicked
fDim.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fDim.checked == true) {
    // fdim -> tkm
    tKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10000;
      });
    });

    // fdim -> tmil
    tMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.00621371;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.00621371;
      });
    });

    // fdim -> thm
    tHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000;
      });
    });

    // fdim -> tdam
    tDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 100;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100;
      });
    });

    // fdim -> tm
    tM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10;
      });
    });

    // fdim -> tdim
    tDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // fdim -> tcm
    tCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10;
      });
    });

    // fdim -> tmm
    tMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 100;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 100;
      });
    });

    // fdim -> tmcr
    tMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 100000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 100000;
      });
    });

    // fdim -> tnm
    tNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 100000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 100000000;
      });
    });

    // fdim -> tyr
    tYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.1094;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.1094;
      });
    });

    // fdim -> tft
    tFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.3281;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.3281;
      });
    });

    // fdim -> tic
    tIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 3.937;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 3.937;
      });
    });
  }
});

// tdim is clicked
tDim.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tDim.checked == true) {
    // tdim -> fkm
    fKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10000;
      });
    });

    // tdim -> fmil
    fMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 16093.44;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 16093.44;
      });
    });

    // tdim -> fhm
    fHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000;
      });
    });

    // tdim -> fdam
    fDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 100;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 100;
      });
    });

    // tdim -> fm
    fM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10;
      });
    });

    // tdim -> fdim
    fDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // tdim -> fcm
    fCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10;
      });
    });

    // tdim -> fmm
    fMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 100;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100;
      });
    });

    // tdim -> fmcr
    fMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 100000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100000;
      });
    });

    // tdim -> fnm
    fNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 100000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100000000;
      });
    });

    // tdim -> fyr
    fYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 9.144;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 9.144;
      });
    });

    // tdim -> fft
    fFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 3.048;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 3.048;
      });
    });

    // tdim -> fic
    fIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.254;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.254;
      });
    });
  }
});

// fcm is clicked
fCm.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fCm.checked == true) {
    // fcm -> tkm
    tKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 100000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100000;
      });
    });

    // fcm -> tmil
    tMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.00000621371;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.00000621371;
      });
    });

    // fcm -> thm
    tHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10000;
      });
    });

    // fcm -> tdam
    tDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000;
      });
    });

    // fcm -> tm
    tM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 100;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100;
      });
    });

    // fcm -> tdim
    tDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10;
      });
    });

    // fcm -> tcm
    tCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // fcm -> tmcr
    tMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10;
      });
    });

    // fcm -> tmcr
    tMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10000;
      });
    });

    // fcm -> tnm
    tNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10000000;
      });
    });

    // fcm -> tyr
    tYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0109;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0109;
      });
    });

    // fcm -> tft
    tFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0328;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0328;
      });
    });

    // fcm -> tic
    tIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.3937;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.3937;
      });
    });
  }
});

// tcm is clicked
tCm.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tCm.checked == true) {
    // tcm -> fkm
    fKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 100000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 100000;
      });
    });

    // tcm -> fmil
    fMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 160934.4;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 160934.4;
      });
    });

    // tcm -> fhm
    fHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10000;
      });
    });

    // tcm -> fdam
    fDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000;
      });
    });

    // tcm -> fm
    fM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 100;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 100;
      });
    });

    // tcm -> fdim
    fDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10;
      });
    });

    // tcm -> fcm
    fCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // tcm -> fmm
    fMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10;
      });
    });

    // tcm -> fmcr
    fMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10000;
      });
    });

    // tcm -> fnm
    fNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10000000;
      });
    });

    // tcm -> fyr
    fYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 91.44;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 91.44;
      });
    });

    // tcm -> fft
    fFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 30.48;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 30.48;
      });
    });

    // tcm -> fic
    fIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 2.54;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 2.54;
      });
    });
  }
});

// fmm is clicked
fMm.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fMm.checked == true) {
    // fmm -> tkm
    tKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000000;
      });
    });

    // fmm -> tmil
    tMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.000000621371;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.000000621371;
      });
    });

    // fmm -> thm
    tHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 100000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100000;
      });
    });

    // fmm -> tdam
    tDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10000;
      });
    });

    // fmm -> tm
    tM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000;
      });
    });

    // fmm -> tdim
    tDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 100;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100;
      });
    });

    // fmm -> tcm
    tCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10;
      });
    });

    // fmm -> tmm
    tMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // fmm -> tmcr
    tMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000;
      });
    });

    // fmm -> tnm
    tNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000000;
      });
    });

    // fmm -> tyr
    tYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0011;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0011;
      });
    });

    // fmm -> tft
    tFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0033;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0033;
      });
    });

    // fmm -> tic
    tIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0394;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0394;
      });
    });
  }
});

// tmm is clicked
tMm.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tMm.checked == true) {
    // tmm -> fkm
    fKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000000;
      });
    });

    // tmm -> fmil
    fMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1609344;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1609344;
      });
    });

    // tmm -> fhm
    fHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 100000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 100000;
      });
    });

    // tmm -> fdam
    fDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10000;
      });
    });

    // tmm -> fm
    fM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000;
      });
    });

    // tmm -> fdim
    fDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 100;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 100;
      });
    });

    // tmm -> fcm
    fCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10;
      });
    });

    // tmm -> fmm
    fMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // tmm -> fmcr
    fMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000;
      });
    });

    // tmm -> fnm
    fNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000000;
      });
    });

    // tmm -> fyr
    fYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 914.4;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 914.4;
      });
    });

    // tmm -> fft
    fFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 304.8;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 304.8;
      });
    });

    // tmm -> fic
    fIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 25.4;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 25.4;
      });
    });
  }
});

// fmcr is clicked
fMcr.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fMcr.checked == true) {
    // fMcr -> tkm
    tKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000000000;
      });
    });

    // fmcr -> tmil
    tMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0000000000621371;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0000000000621371;
      });
    });

    // fmcr -> thm
    tHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 100000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100000000;
      });
    });

    // fmcr -> tdam
    tDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000000;
      });
    });

    // fmcr -> tm
    tM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000000;
      });
    });

    // fmcr -> tdim
    tDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 100000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100000;
      });
    });

    // fmcr -> tcm
    tCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10000;
      });
    });

    // fmcr -> tmm
    tMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000;
      });
    });

    // fmcr -> tmcr
    tMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // fmcr -> tnm
    tNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000;
      });
    });

    // fmcr -> tyr
    tYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0000010936;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0000010936;
      });
    });

    // fmcr -> tft
    tFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0000032808;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0000032808;
      });
    });

    // fmcr -> tic
    tIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.000039370078;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.000039370078;
      });
    });
  }
});

// tmcr is clicked
tMcr.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tMcr.checked == true) {
    // tmcr -> fkm
    fKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000000000;
      });
    });

    // tmcr -> fmil
    fMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1609344000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1609344000;
      });
    });

    // tmcr -> fhm
    fHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 100000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 100000000;
      });
    });

    // tmcr -> fdam
    fDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10000000;
      });
    });

    // tmcr -> fm
    fM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000000;
      });
    });

    // tmcr -> fdim
    fDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 100000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 100000;
      });
    });

    // tmcr -> fcm
    fCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10000;
      });
    });

    // tmcr -> fmm
    fMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000;
      });
    });

    // tmcr -> fmcr
    fMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // tmcr -> fnm
    fNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000;
      });
    });

    // tmcr -> fyr
    fYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 914400;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 914400;
      });
    });

    // tmcr -> fft
    fFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 304800;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 304800;
      });
    });

    // tmcr -> fic
    fIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 25400;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 25400;
      });
    });
  }
});

// fnm is clicked
fNm.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fNm.checked == true) {
    // fnm -> tkm
    tKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000000000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000000000000;
      });
    });

    // fnm -> tmil
    tMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0000000000006213711;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0000000000006213711;
      });
    });

    // fnm -> thm
    tHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 100000000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100000000000;
      });
    });

    // fnm -> tdam
    tDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10000000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000000000;
      });
    });

    // fnm -> tm
    tM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000000000;
      });
    });

    // fnm -> tdim
    tDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 100000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 100000000;
      });
    });

    // fnm -> tcm
    tCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 10000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 10000000;
      });
    });

    // fnm -> tmm
    tMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000000;
      });
    });

    // fnm -> tmcr
    tMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value / 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value / 1000;
      });
    });

    // fnm -> tnm
    tNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // fnm -> tyr
    tYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.00000000109361;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.00000000109361;
      });
    });

    // fnm -> tft
    tFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.00000000328083989;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.00000000328083989;
      });
    });

    // fnm -> tic
    tIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.000000039370078;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.000000039370078;
      });
    });
  }
});

// tnm is clicked
tNm.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tNm.checked == true) {
    // tnm -> fkm
    fKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000000000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000000000000;
      });
    });

    // tnm -> fmil
    fMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1609344000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1609344000000;
      });
    });

    // tnm -> fhm
    fHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 100000000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 100000000000;
      });
    });

    // tnm -> fdam
    fDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10000000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10000000000;
      });
    });

    // tnm -> fm
    fM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000000000;
      });
    });

    // tnm -> fdim
    fDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 100000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 100000000;
      });
    });

    // tnm -> fcm
    fCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10000000;
      });
    });

    // tnm -> fmm
    fMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000000;
      });
    });

    // tnm -> fmcr
    fMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1000;
      });
    });

    // tnm -> fnm
    fNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // tnm -> fyr
    fYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 914400000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 914400000;
      });
    });

    // tnm -> fft
    fFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 304800000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 304800000;
      });
    });

    // tnm -> fic
    fIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 25400000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 25400000;
      });
    });
  }
});

// fyr is clicked
fYr.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fYr.checked == true) {
    // fyr -> tkm
    tKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0009;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0009;
      });
    });

    // fyr -> tmil
    tMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0006;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0006;
      });
    });

    // fyr -> thm
    tHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0091;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0091;
      });
    });

    // fyr -> tdam
    tDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0914;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0914;
      });
    });

    // fyr -> tm
    tM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.9144;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.9144;
      });
    });

    // fyr -> tdim
    tDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 9.144;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 9.144;
      });
    });

    // fyr -> tcm
    tCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 91.44;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 91.44;
      });
    });

    // fyr -> tmm
    tMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 914.4;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 914.4;
      });
    });

    // fyr -> tmcr
    tMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 914400;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 914400;
      });
    });

    // fyr -> tnm
    tNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 914400000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 914400000;
      });
    });

    // fyr -> tyr
    tYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // fyr -> tft
    tFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 3;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 3;
      });
    });

    // fyr -> tic
    tIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 36;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 36;
      });
    });
  }
});

// tyr is clicked
tYr.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tYr.checked == true) {
    // tyr -> fkm
    fKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1093.6133;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1093.6133;
      });
    });

    // tyr -> fmil
    fMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1760;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1760;
      });
    });

    // tyr -> fhm
    fHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 109.3613;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 109.3613;
      });
    });

    // tyr -> fdam
    fDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 10.9361;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 10.9361;
      });
    });

    // tyr -> fm
    fM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 1.0936;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 1.0936;
      });
    });

    // tyr -> fdim
    fDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.1094;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.1094;
      });
    });

    // tyr -> fcm
    fCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0109;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0109;
      });
    });

    // tyr -> fmm
    fMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0011;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0011;
      });
    });

    // tyr -> fmcr
    fMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.00000109361;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.00000109361;
      });
    });

    // tyr -> fnm
    fNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.00000000109361;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.00000000109361;
      });
    });

    // tyr -> fyr
    fYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // tyr -> fft
    fFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.3333;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.3333;
      });
    });

    // tyr -> fic
    fIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0278;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0278;
      });
    });
  }
});

// fft is clicked
fFt.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fFt.checked == true) {
    // fft -> tkm
    tKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0003048;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0003048;
      });
    });

    // fft -> tmil
    tMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.000189394;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.000189394;
      });
    });

    // fft -> thm
    tHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.003048;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.003048;
      });
    });

    // fft -> tdam
    tDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.03048;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.03048;
      });
    });

    // fft -> tm
    tM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.3048;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.3048;
      });
    });

    // fft -> tdim
    tDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 3.048;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 3.048;
      });
    });

    // fft -> tcm
    tCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 30.48;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 30.48;
      });
    });

    // fft -> tmm
    tMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 304.8;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 304.8;
      });
    });

    // fft -> tmcr
    tMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 304800;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 304800;
      });
    });

    // fft -> tnm
    tNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 304800000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 304800000;
      });
    });

    // fft -> tyr
    tYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.3333;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.3333;
      });
    });

    // fft -> tft
    tFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // fft -> tic
    tIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 12;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 12;
      });
    });
  }
});

// tft is clicked
tFt.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tFt.checked == true) {
    // tft -> fkm
    fKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 3280.8399;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 3280.8399;
      });
    });

    // tft -> fmil
    fMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 5280;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 5280;
      });
    });

    // tft -> fhm
    fHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 328.084;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 328.084;
      });
    });

    // tft -> fdam
    fDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 32.8084;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 32.8084;
      });
    });

    // tft -> fm
    fM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 3.2808;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 3.2808;
      });
    });

    // tft -> fdim
    fDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.3281;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.3281;
      });
    });

    // tft -> fcm
    fCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0328;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0328;
      });
    });

    // tft -> fmm
    fMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0033;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0033;
      });
    });

    // tft -> fmcr
    fMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.00000328084;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.00000328084;
      });
    });

    // tft -> fnm
    fNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.00000000328084;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.00000000328084;
      });
    });

    // tft -> fyr
    fYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 3;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 3;
      });
    });

    // tft -> fft
    fFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });

    // tft -> fic
    fIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.08333;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.08333;
      });
    });
  }
});

// fic is clicked
fIc.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fIc.checked == true) {
    // fic -> tkm
    tKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0000254;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0000254;
      });
    });

    // fic -> tmil
    tMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0000157828;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0000157828;
      });
    });

    // fic -> thm
    tHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0003;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0003;
      });
    });

    // fic -> tdam
    tDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0025;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0025;
      });
    });

    // fic -> tm
    tM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0254;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0254;
      });
    });

    // fic -> tdim
    tDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.254;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.254;
      });
    });

    // fic -> tcm
    tCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 2.54;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 30.48;
      });
    });

    // fic -> tmm
    tMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 25.4;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 25.4;
      });
    });

    // fic -> tmcr
    tMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 25400;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 25400;
      });
    });

    // fic -> tnm
    tNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 25400000;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 25400000;
      });
    });

    // fic -> tyr
    tYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0278;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0278;
      });
    });

    // fic -> tft
    tFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.0833;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.0833;
      });
    });

    // fic -> tic
    tIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });
  }
});

// tic is clicked
tIc.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tIc.checked == true) {
    // tic -> fkm
    fKm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 39370.0787;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 39370.0787;
      });
    });

    // tic -> fmil
    fMil.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 63360;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 63360;
      });
    });

    // tic -> fhm
    fHm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 3937.0079;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 3937.0079;
      });
    });

    // tic -> fdam
    fDam.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 393.7008;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 393.7008;
      });
    });

    // tic -> fm
    fM.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 39.3701;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 39.3701;
      });
    });

    // tic -> fdim
    fDim.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 3.937;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 3.937;
      });
    });

    // tic -> fcm
    fCm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.3937;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.3937;
      });
    });

    // tic -> fmm
    fMm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.03934;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.03934;
      });
    });

    // tic -> fmcr
    fMcr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.000039370078;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.000039370078;
      });
    });

    // tic -> fnm
    fNm.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 0.000000039370078;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 0.000000039370078;
      });
    });

    // tic -> fyr
    fYr.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 36;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 36;
      });
    });

    // tic -> fft
    fFt.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value * 12;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value * 12;
      });
    });

    // tic -> fic
    fIc.addEventListener("click", (e) => {
      outputDistance.value = inputDistance.value;
      inputDistance.addEventListener("input", () => {
        outputDistance.value = inputDistance.value;
      });
    });
  }
});
