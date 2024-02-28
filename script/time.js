const labelFrom = document.querySelector("#labelFrom");
const labelTo = document.querySelector("#labelTo");
const inputTime = document.querySelector("#inputTime");
const outputTime = document.querySelector("#outputTime");

const fYr = document.querySelector("#fYr");
const fMt = document.querySelector("#fMt");
const fWk = document.querySelector("#fWk");
const fDy = document.querySelector("#fDy");
const fHr = document.querySelector("#fHr");
const fMn = document.querySelector("#fMn");
const fSc = document.querySelector("#fSc");
const fMs = document.querySelector("#fMs");

const tYr = document.querySelector("#tYr");
const tMt = document.querySelector("#tMt");
const tWk = document.querySelector("#tWk");
const tDy = document.querySelector("#tDy");
const tHr = document.querySelector("#tHr");
const tMn = document.querySelector("#tMn");
const tSc = document.querySelector("#tSc");
const tMs = document.querySelector("#tMs");

// fYr is clicked
fYr.addEventListener("click", (e) => {
  labelFrom.textContent = fYr.value;

  if (fYr.checked == true) {
    // fYr -> tYr
    tYr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value;
      });
    });

    // fYr -> tMt
    tMt.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 12;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 12;
      });
    });

    // fYr -> tWk
    tWk.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 52;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 52;
      });
    });

    // fYr -> tDy
    tDy.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 365;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 365;
      });
    });

    // fYr -> tHr
    tHr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 365 * 24;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 365 * 24;
      });
    });

    // fYr -> tMn
    tMn.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 365 * 24 * 60;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 365 * 24 * 60;
      });
    });

    // fYr -> tSc
    tSc.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 365 * 24 * 60 * 60;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 365 * 24 * 60 * 60;
      });
    });

    // fYr -> tMs
    tMs.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 365 * 24 * 60 * 60 * 1000;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 365 * 24 * 60 * 60 * 1000;
      });
    });
  }
});

// tYr is clicked
tYr.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tYr.checked == true) {
    // tYr -> fYr
    fYr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value;
      });
    });

    // tYr -> fMt
    fMt.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / 12;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / 12;
      });
    });

    // tYr -> fWk
    fWk.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / 52.1775;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / 52.1775;
      });
    });

    // tYr -> fDy
    fDy.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / 365.25;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / 365.25;
      });
    });

    // tYr -> fHr
    fHr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (365.25 * 24);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (365.25 * 24);
      });
    });

    // tYr -> fMn
    fMn.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (365.25 * 24 * 60);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (365.25 * 24 * 60);
      });
    });

    // tYr -> fSc
    fSc.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (365.25 * 24 * 60 * 60);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (365.25 * 24 * 60 * 60);
      });
    });

    // tYr -> fMs
    fMs.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (365.25 * 24 * 60 * 60 * 1000);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (365.25 * 24 * 60 * 60 * 1000);
      });
    });
  }
});

// fMt is clicked
fMt.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fMt.checked == true) {
    // fMt -> tYr
    tYr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / 12;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / 12;
      });
    });

    // fMt -> tMt
    tMt.addEventListener("click", (e) => {
      outputTime.value = inputTime.value;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value;
      });
    });

    // fMt -> tWk
    tWk.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 4.34254;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 4.34254;
      });
    });

    // fMt -> tDy
    tDy.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 30.44;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 30.44;
      });
    });

    // fMt -> tHr
    tHr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 30.44 * 24;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 30.44 * 24;
      });
    });

    // fMt -> tMn
    tMn.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 30.44 * 24 * 60;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 30.44 * 24 * 60;
      });
    });

    // fMt -> tSc
    tSc.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 30.44 * 24 * 60 * 60;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 30.44 * 24 * 60 * 60;
      });
    });

    // fMtl -> tMs
    tMs.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 30.44 * 24 * 60 * 60 * 1000;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 30.44 * 24 * 60 * 60 * 1000;
      });
    });
  }
});

// tMt is clicked
tMt.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tMt.checked == true) {
    // tMt -> fYr
    fYr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 12;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 12;
      });
    });

    // tMt -> fMt
    fMt.addEventListener("click", (e) => {
      outputTime.value = inputTime.value;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value;
      });
    });

    // tMt -> fWk
    fWk.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / 4.34254;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / 4.34254;
      });
    });

    // tMt -> fDy
    fDy.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / 30.44;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / 30.44;
      });
    });

    // tMt -> fHr
    fHr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (30.44 * 24);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (30.44 * 24);
      });
    });

    // tMt -> fMn
    fMn.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (30.44 * 24 * 60);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (30.44 * 24 * 60);
      });
    });

    // tMt -> fSc
    fSc.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (30.44 * 24 * 60 * 60);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (30.44 * 24 * 60 * 60);
      });
    });

    // tMt -> fMs
    fMs.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (30.44 * 24 * 60 * 60 * 1000);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (30.44 * 24 * 60 * 60 * 1000);
      });
    });
  }
});

// fWk is clicked
fWk.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fWk.checked == true) {
    // fWk -> tYr
    tYr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / 52.1775;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / 52.1775;
      });
    });

    // fWk -> tMt
    tMt.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / 4.34254;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / 4.34254;
      });
    });

    // fWk -> tWk
    tWk.addEventListener("click", (e) => {
      outputTime.value = inputTime.value;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value;
      });
    });

    // fWk -> tDy
    tDy.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 7;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 7;
      });
    });

    // fWk -> tHr
    tHr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * (7 * 24);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * (7 * 24);
      });
    });

    // fWk -> tMn
    tMn.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * (7 * 24 * 60);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * (7 * 24 * 60);
      });
    });

    // fWk -> tSc
    tSc.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * (7 * 24 * 60 * 60);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * (7 * 24 * 60 * 60);
      });
    });

    // fWk -> tMs
    tMs.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * (7 * 24 * 60 * 60 * 1000);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value(7 * 24 * 60 * 60 * 1000);
      });
    });
  }
});

// tWk is clicked
tWk.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tWk.checked == true) {
    // tWk -> fYr
    fYr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 52.1775;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 52.1775;
      });
    });

    // tWk -> fMt
    fMt.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 4.34254;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 4.34254;
      });
    });

    // tWk -> fWk
    fWk.addEventListener("click", (e) => {
      outputTime.value = inputTime.value;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value;
      });
    });

    // tWk -> fDy
    fDy.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / 7;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / 7;
      });
    });

    // tWk -> fHr
    fHr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (7 * 24);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (7 * 24);
      });
    });

    // tWk -> fMn
    fMn.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (7 * 24 * 60);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (7 * 24 * 60);
      });
    });

    // tWk -> fSc
    fSc.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (7 * 24 * 60 * 60);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (7 * 24 * 60 * 60);
      });
    });

    // tWk -> fMs
    fMs.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (7 * 24 * 60 * 60 * 1000);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (7 * 24 * 60 * 60 * 1000);
      });
    });
  }
});

// fDy is clicked
fDy.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fDy.checked == true) {
    // fDy -> tYr
    tYr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / 365.25;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / 365.25;
      });
    });

    // fDy -> tMt
    tMt.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / 30.44;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / 30.44;
      });
    });

    // fDy -> tWk
    tWk.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / 7;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / 7;
      });
    });

    // fDy -> tDy
    tDy.addEventListener("click", (e) => {
      outputTime.value = inputTime.value;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value;
      });
    });

    // fDy -> tHr
    tHr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 24;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 24;
      });
    });

    // fDy -> tMn
    tMn.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 24 * 60;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 24 * 60;
      });
    });

    // fDy -> tSc
    tSc.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 24 * 60 * 60;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 24 * 60 * 60;
      });
    });

    // fDy -> tMs
    tMs.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 24 * 60 * 60 * 1000;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 24 * 60 * 60 * 1000;
      });
    });
  }
});

// tDy is clicked
tDy.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tDy.checked == true) {
    // tDy -> fYr
    fYr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 365.25;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 365.25;
      });
    });

    // tDy -> fMt
    fMt.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 30.44;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 30.44;
      });
    });

    // tDy -> fWk
    fWk.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 7;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 7;
      });
    });

    // tDy -> fDy
    fDy.addEventListener("click", (e) => {
      outputTime.value = inputTime.value;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value;
      });
    });

    // tDy -> fHr
    fHr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / 24;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / 24;
      });
    });

    // tDy -> fMn
    fMn.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (24 * 60);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (24 * 60);
      });
    });

    // tDy -> fSc
    fSc.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (24 * 60 * 60);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (24 * 60 * 60);
      });
    });

    // tDy -> fMs
    fMs.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (24 * 60 * 60 * 1000);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (24 * 60 * 60 * 1000);
      });
    });
  }
});

// fHr is clicked
fHr.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fHr.checked == true) {
    // fHr -> tYr
    tYr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (365.25 * 24);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (365.25 * 24);
      });
    });

    // fHr -> tMt
    tMt.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (30.44 * 24);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (30.44 * 24);
      });
    });

    // fHr -> tWk
    tWk.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (7 * 24);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (7 * 24);
      });
    });

    // fHr -> tDy
    tDy.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / 24;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / 24;
      });
    });

    // fHr -> tHr
    tHr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value;
      });
    });

    // fHr -> tMn
    tMn.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 60;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 60;
      });
    });

    // fHr -> tSc
    tSc.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 60 * 60;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 60 * 60;
      });
    });

    // fHr -> tMs
    tMs.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 60 * 60 * 1000;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 60 * 60 * 1000;
      });
    });
  }
});

// tHr is clicked
tHr.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tHr.checked == true) {
    // tHr -> fYr
    fYr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * (365.25 * 24);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * (365.25 * 24);
      });
    });

    // tHr -> fMt
    fMt.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * (30.44 * 24);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * (30.44 * 24);
      });
    });

    // tHr -> fWk
    fWk.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * (7 * 24);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * (7 * 24);
      });
    });

    // tHr -> fDy
    fDy.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 24;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 24;
      });
    });

    // tHr -> fHr
    fHr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value;
      });
    });

    // tHr -> fMn
    fMn.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / 60;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / 60;
      });
    });

    // tHr -> fSc
    fSc.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (60 * 60);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (60 * 60);
      });
    });

    // tHr -> fMs
    fMs.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (60 * 60 * 1000);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (60 * 60 * 1000);
      });
    });
  }
});

// fMn is clicked
fMn.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fMn.checked == true) {
    // fMn -> tYr
    tYr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (60 * 24 * 365.25);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (60 * 24 * 365.25);
      });
    });

    // fMn -> tMt
    tMt.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (60 * 24 * 30.44);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (60 * 24 * 30.44);
      });
    });

    // fMn -> tWk
    tWk.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (60 * 24 * 7);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (60 * 24 * 7);
      });
    });

    // fMn -> tDy
    tDy.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (60 * 24);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (60 * 24);
      });
    });

    // fMn -> tHr
    tHr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / 60;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / 60;
      });
    });

    // fMn -> tMn
    tMn.addEventListener("click", (e) => {
      outputTime.value = inputTime.value;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value;
      });
    });

    // fMn -> tSc
    tSc.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 60;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 60;
      });
    });

    // fMn -> tMs
    tMs.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 60 * 1000;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 60 * 1000;
      });
    });
  }
});

// tMn is clicked
tMn.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tMn.checked == true) {
    // tMn -> fYr
    fYr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * (60 * 24 * 365.25);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * (60 * 24 * 365.25);
      });
    });

    // tMn -> fMt
    fMt.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * (60 * 24 * 30.44);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value ** (60 * 24 * 30.44);
      });
    });

    // tMn -> fWk
    fWk.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * (60 * 24 * 7);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * (60 * 24 * 7);
      });
    });

    // tMn -> fDy
    fDy.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * (60 * 24);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * (60 * 24);
      });
    });

    // tMn -> fHr
    fHr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 60;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 60;
      });
    });

    // tMn -> fMn
    fMn.addEventListener("click", (e) => {
      outputTime.value = inputTime.value;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value;
      });
    });

    // tMn -> fSc
    fSc.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / 60;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / 60;
      });
    });

    // tMn -> fMs
    fMs.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (60 * 1000);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (60 * 1000);
      });
    });
  }
});

// fSc is clicked
fSc.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fSc.checked == true) {
    // fSc -> tYr
    tYr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (60 * 60 * 24 * 365.25);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (60 * 60 * 24 * 365.25);
      });
    });

    // fSc -> tMt
    tMt.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (60 * 60 * 24 * 30.44);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (60 * 60 * 24 * 30.44);
      });
    });

    // fSc -> tWk
    tWk.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (60 * 60 * 24 * 7);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (60 * 60 * 24 * 7);
      });
    });

    // fSc -> tDy
    tDy.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (60 * 60 * 24);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (60 * 60 * 24);
      });
    });

    // fSc -> tHr
    tHr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (60 * 60);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (60 * 60);
      });
    });

    // fSc -> tMn
    tMn.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / 60;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / 60;
      });
    });

    // fSc -> tSc
    tSc.addEventListener("click", (e) => {
      outputTime.value = inputTime.value;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value;
      });
    });

    // fSc -> tMs
    tMs.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 1000;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 1000;
      });
    });
  }
});

// tSc is clicked
tSc.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tSc.checked == true) {
    // tSc -> fYr
    fYr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 365.25 * 24 * 60 * 60;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 365.25 * 24 * 60 * 60;
      });
    });

    // tSc -> fMt
    fMt.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 30.44 * 24 * 60 * 60;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 30.44 * 24 * 60 * 60;
      });
    });

    // tSc -> fWk
    fWk.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 24 * 7 * 60 * 60;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 24 * 7 * 60 * 60;
      });
    });

    // tSc -> fDy
    fDy.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 24 * 60 * 60;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 24 * 60 * 60;
      });
    });

    // tSc -> fHr
    fHr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 60 * 60;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 60 * 60;
      });
    });

    // tSc -> fMn
    fMn.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 60;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 60;
      });
    });

    // tSc -> fSc
    fSc.addEventListener("click", (e) => {
      outputTime.value = inputTime.value;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value;
      });
    });

    // tSc -> fMs
    fMs.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / 1000;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / 1000;
      });
    });
  }
});

// fMs is clicked
fMs.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fMs.checked == true) {
    // fMs -> tYr
    tYr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (365.25 * 24 * 60 * 60 * 1000);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (365.25 * 24 * 60 * 60 * 1000);
      });
    });

    // fMs -> tMt
    tMt.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (29.5309 * 24 * 60 * 60 * 1000);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (29.5309 * 24 * 60 * 60 * 1000);
      });
    });

    // fMs -> tWk
    tWk.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (7 * 24 * 60 * 60 * 1000);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 7 * 24 * 60 * 60 * 1000;
      });
    });

    // fMs -> tDy
    tDy.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (24 * 60 * 60 * 1000);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (24 * 60 * 60 * 1000);
      });
    });

    // fMs -> tHr
    tHr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (60 * 60 * 1000);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (60 * 60 * 1000);
      });
    });

    // fMs -> tMn
    tMn.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / (60 * 1000);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / (60 * 1000);
      });
    });

    // fMs -> tSc
    tSc.addEventListener("click", (e) => {
      outputTime.value = inputTime.value / 1000;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value / 1000;
      });
    });

    // fMs -> tMs
    tMs.addEventListener("click", (e) => {
      outputTime.value = inputTime.value;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value;
      });
    });
  }
});

// tMs is clicked
tMs.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tMs.checked == true) {
    // tSc -> fYr
    fYr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * (365.25 * 24 * 60 * 60 * 1000);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * (365.25 * 24 * 60 * 60 * 1000);
      });
    });

    // tMs -> fMt
    fMt.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * (30.44 * 24 * 60 * 60 * 1000);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * (30.44 * 24 * 60 * 60 * 1000);
      });
    });

    // tMs -> fWk
    fWk.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * (7 * 24 * 60 * 60 * 1000);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * (7 * 24 * 60 * 60 * 1000);
      });
    });

    // tMs -> fDy
    fDy.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * (24 * 60 * 60 * 1000);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * (24 * 60 * 60 * 1000);
      });
    });

    // tMs -> fHr
    fHr.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * (60 * 60 * 1000);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * (60 * 60 * 1000);
      });
    });

    // tMs -> fMn
    fMn.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * (60 * 1000);
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * (60 * 1000);
      });
    });

    // tMs -> fSc
    fSc.addEventListener("click", (e) => {
      outputTime.value = inputTime.value * 1000;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value * 1000;
      });
    });

    // tMs -> fMs
    fMs.addEventListener("click", (e) => {
      outputTime.value = inputTime.value;
      inputTime.addEventListener("input", () => {
        outputTime.value = inputTime.value;
      });
    });
  }
});
