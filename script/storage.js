const labelFrom = document.querySelector("#labelFrom");
const labelTo = document.querySelector("#labelTo");
const inputStorage = document.querySelector("#inputStorage");
const outputStorage = document.querySelector("#outputStorage");

const fb = document.querySelector("#fb");
const fB = document.querySelector("#fB");
const fkb = document.querySelector("#fkb");
const fKB = document.querySelector("#fKB");
const fmb = document.querySelector("#fmb");
const fMB = document.querySelector("#fMB");
const fgb = document.querySelector("#fgb");
const fGB = document.querySelector("#fGB");
const ftb = document.querySelector("#ftb");
const fTB = document.querySelector("#fTB");

const tb = document.querySelector("#tb");
const tB = document.querySelector("#tB");
const tkb = document.querySelector("#tkb");
const tKB = document.querySelector("#tKB");
const tmb = document.querySelector("#tmb");
const tMB = document.querySelector("#tMB");
const tgb = document.querySelector("#tgb");
const tGB = document.querySelector("#tGB");
const ttb = document.querySelector("#ttb");
const tTB = document.querySelector("#tTB");

// fb is clicked
fb.addEventListener("click", (e) => {
  labelFrom.textContent = fb.value;

  if (fb.checked == true) {
    // fb -> tb
    tb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value;
      });
    });

    // fb -> tB
    tB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8;
      });
    });

    // fb -> tkb
    tkb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000;
      });
    });

    // fb -> tKB
    tKB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8000;
      });
    });

    // fb -> tmb
    tmb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000;
      });
    });

    // fb -> tMB
    tMB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8000000;
      });
    });

    // fb -> tgb
    tgb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000000;
      });
    });

    // fb -> tGB
    tGB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8000000000;
      });
    });

    // fb -> ttb
    ttb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000000000;
      });
    });

    // fb -> tTB
    tTB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8000000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8000000000000;
      });
    });
  }
});

// tb is clicked
tb.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tb.checked == true) {
    // tb -> fb
    fb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value;
      });
    });

    // tb -> fB
    fB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8;
      });
    });

    // tb -> fkb
    fkb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000;
      });
    });

    // tb -> fKB
    fKB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8000;
      });
    });

    // tb -> fmb
    fmb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000;
      });
    });

    // tb -> fMB
    fMB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8000000;
      });
    });

    // tb -> fgb
    fgb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000000;
      });
    });

    // tb -> fGB
    fGB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8000000000;
      });
    });

    // tb -> ftb
    ftb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000000000;
      });
    });

    // tb -> fTB
    fTB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8000000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8000000000000;
      });
    });
  }
});

// fB is clicked
fB.addEventListener("click", (e) => {
  labelFrom.textContent = fB.value;

  if (fB.checked == true) {
    // fB -> tb
    tb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8;
      });
    });

    // fB -> tB
    tB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value;
      });
    });

    // fB -> tkb
    tkb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 125;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 125;
      });
    });

    // fB -> tKB
    tKB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000;
      });
    });

    // fB -> tmb
    tmb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 125000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 125000;
      });
    });

    // fB -> tMB
    tMB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000;
      });
    });

    // fB -> tgb
    tgb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 125000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 125000000;
      });
    });

    // fB -> tGB
    tGB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000000;
      });
    });

    // fB -> ttb
    ttb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 125000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 125000000000;
      });
    });

    // fB -> tTB
    tTB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000000000;
      });
    });
  }
});

// tB is clicked
tB.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tB.checked == true) {
    // tB -> fb
    fb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8;
      });
    });

    // tB -> fB
    fB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value;
      });
    });

    // tB -> fkb
    fkb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 125;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 125;
      });
    });

    // tB -> fKB
    fKB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000;
      });
    });

    // tB -> fmb
    fmb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 125000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 125000;
      });
    });

    // tB -> fMB
    fMB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000;
      });
    });

    // tB -> fgb
    fgb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 125000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 125000000;
      });
    });

    // tB -> fGB
    fGB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000000;
      });
    });

    // tB -> ftb
    ftb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 125000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 125000000000;
      });
    });

    // tB -> fTB
    fTB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000000000;
      });
    });
  }
});

// fkb is clicked
fkb.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fkb.checked == true) {
    // fkb -> tb
    tb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000;
      });
    });

    // fkb -> tB
    tB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 125;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 125;
      });
    });

    // fkb -> tkb
    tkb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value;
      });
    });

    // fkb -> tKB
    tKB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8;
      });
    });

    // fkb -> tmb
    tmb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000;
      });
    });

    // fkb -> tMB
    tMB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8000;
      });
    });

    // fkb -> tgb
    tgb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000;
      });
    });

    // fkb -> tGB
    tGB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8000000;
      });
    });

    // fkb -> ttb
    ttb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000000;
      });
    });

    // fkb -> tTB
    tTB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8000000000;
      });
    });
  }
});

// tkb is clicked
tkb.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tkb.checked == true) {
    // tkb -> fb
    fb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000;
      });
    });

    // tkb -> fB
    fB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 125;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 125;
      });
    });

    // tkb -> fkb
    fkb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value;
      });
    });

    // tkb -> fKB
    fKB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8;
      });
    });

    // tkb -> fmb
    fmb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000;
      });
    });

    // tkb -> fMB
    fMB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8000;
      });
    });

    // tkb -> fgb
    fgb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000;
      });
    });

    // tkb -> fGB
    fGB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8000000;
      });
    });

    // tkb -> ftb
    ftb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000000;
      });
    });

    // tkb -> fTB
    fTB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8000000000;
      });
    });
  }
});

// fKB is clicked
fKB.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fKB.checked == true) {
    // fKB -> tb
    tb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8000;
      });
    });

    // fKB -> tB
    tB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000;
      });
    });

    // fKB -> tkb
    tkb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8;
      });
    });

    // fKB -> tKB
    tKB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value;
      });
    });

    // fKB -> tmb
    tmb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 125;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 125;
      });
    });

    // fKB -> tMB
    tMB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000;
      });
    });

    // fKB -> tgb
    tgb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 125000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 125000;
      });
    });

    // fKB -> tGB
    tGB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000;
      });
    });

    // fKB -> ttb
    ttb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 125000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 125000000;
      });
    });

    // fKB -> tTB
    tTB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000000;
      });
    });
  }
});

// tKB is clicked
tKB.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tKB.checked == true) {
    // tKB -> fb
    fb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8000;
      });
    });

    // tKB -> fB
    fB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000;
      });
    });

    // tKB -> fkb
    fkb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8;
      });
    });

    // tKB -> fKB
    fKB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value;
      });
    });

    // tKB -> fmb
    fmb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 125;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 125;
      });
    });

    // tKB -> fMB
    fMB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000;
      });
    });

    // tKB -> fgb
    fgb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 125000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 125000;
      });
    });

    // tKB -> fGB
    fGB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000;
      });
    });

    // tKB -> ftb
    ftb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 125000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 125000000;
      });
    });

    // tKB -> fTB
    fTB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000000;
      });
    });
  }
});

// fmb is clicked
fmb.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fmb.checked == true) {
    // fmb -> tb
    tb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000;
      });
    });

    // fmb -> tB
    tB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 125000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 125000;
      });
    });

    // fmb -> tkb
    tkb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000;
      });
    });

    // fmb -> tKB
    tKB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 125;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 125;
      });
    });

    // fmb -> tmb
    tmb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value;
      });
    });

    // fmb -> tMB
    tMB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8;
      });
    });

    // fmb -> tgb
    tgb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000;
      });
    });

    // fmb -> tGB
    tGB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8000;
      });
    });

    // fmb -> ttb
    ttb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000;
      });
    });

    // fmb -> tTB
    tTB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8000000;
      });
    });
  }
});

// tmb is clicked
tmb.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tmb.checked == true) {
    // tmb -> fb
    fb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000;
      });
    });

    // tmb -> fB
    fB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 125000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 125000;
      });
    });

    // tmb -> fkb
    fkb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000;
      });
    });

    // tmb -> fKB
    fKB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 125;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 125;
      });
    });

    // tmb -> fmb
    fmb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value;
      });
    });

    // tmb -> fMB
    fMB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8;
      });
    });

    // tmb-> fgb
    fgb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000;
      });
    });

    // tmb-> fGB
    fGB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8000;
      });
    });

    // tmb-> ftb
    ftb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000;
      });
    });

    // tmb-> fTB
    fTB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8000000;
      });
    });
  }
});

// fMB is clicked
fMB.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fMB.checked == true) {
    // fMB -> tb
    tb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8000000;
      });
    });

    // fMB -> tB
    tB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000;
      });
    });

    // fMB -> tkb
    tkb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8000;
      });
    });

    // fMB -> tKB
    tKB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000;
      });
    });

    // fMB -> tmb
    tmb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8;
      });
    });

    // fMB -> tMB
    tMB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value;
      });
    });

    // fMB -> tgb
    tgb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 125;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 125;
      });
    });

    // fMB -> tGB
    tGB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000;
      });
    });

    // fMB -> ttb
    ttb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 125000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 125000;
      });
    });

    // fMB -> tTB
    tTB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000;
      });
    });
  }
});

// tMB is clicked
tMB.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tMB.checked == true) {
    // tMB -> fb
    fb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8000000;
      });
    });

    // tMB -> fB
    fB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000;
      });
    });

    // tMB -> fkb
    fkb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8000;
      });
    });

    // tMB -> fKB
    fKB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000;
      });
    });

    // tMB -> fmb
    fmb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8;
      });
    });

    // tMB -> fMB
    fMB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value;
      });
    });

    // tMB -> fgb
    fgb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 125;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 125;
      });
    });

    // tMB -> fGB
    fGB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000;
      });
    });

    // tMB -> ftb
    ftb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 125000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 125000;
      });
    });

    // tMB -> fTB
    fTB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000;
      });
    });
  }
});

// fgb is clicked
fgb.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fgb.checked == true) {
    // fgb -> tb
    tb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000000;
      });
    });

    // fgb -> tB
    tB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 125000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 125000000;
      });
    });

    // fgb -> tkb
    tkb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000;
      });
    });

    // fgb -> tKB
    tKB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 125000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 125000;
      });
    });

    // fgb -> tmb
    tmb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000;
      });
    });

    // fgb -> tMB
    tMB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 125;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 125;
      });
    });

    // fgb -> tgb
    tgb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value;
      });
    });

    // fgb -> tGB
    tGB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8;
      });
    });

    // fgb -> ttb
    ttb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000;
      });
    });

    // fgb -> tTB
    tTB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8000;
      });
    });
  }
});

// tgb is clicked
tgb.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tgb.checked == true) {
    // tgb -> fb
    fb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000000;
      });
    });

    // tgb -> fB
    fB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 125000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 125000000;
      });
    });

    // tgb -> fkb
    fkb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000;
      });
    });

    // tgb -> fKB
    fKB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 125000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 125000;
      });
    });

    // tgb -> fmb
    fmb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000;
      });
    });

    // tgb -> fMB
    fMB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 125;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 125;
      });
    });

    // tgb -> fgb
    fgb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value;
      });
    });

    // tgb -> fGB
    fGB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8;
      });
    });

    // tgb -> ftb
    ftb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000;
      });
    });

    // tgb -> fTB
    fTB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8000;
      });
    });
  }
});

// fGB is clicked
fGB.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fGB.checked == true) {
    // fGB -> tb
    tb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8000000000;
      });
    });

    // fGB -> tB
    tB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000000;
      });
    });

    // fGB -> tkb
    tkb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8000000;
      });
    });

    // fGB -> tKB
    tKB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000;
      });
    });

    // fGB -> tmb
    tmb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8000;
      });
    });

    // fGB -> tMB
    tMB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000;
      });
    });

    // fGB -> tgb
    tgb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8;
      });
    });

    // fGB -> tGB
    tGB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value;
      });
    });

    // fGB -> ttb
    ttb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 125;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 125;
      });
    });

    // fGB -> tTB
    tTB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000;
      });
    });
  }
});

// tGB is clicked
tGB.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tGB.checked == true) {
    // tGB -> fb
    fb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8000000000;
      });
    });

    // tGB -> fB
    fB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000000;
      });
    });

    // tGB -> fkb
    fkb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8000000;
      });
    });

    // tGB -> fKB
    fKB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000;
      });
    });

    // tGB -> fmb
    fmb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8000;
      });
    });

    // tGB -> fMB
    fMB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000;
      });
    });

    // tGB -> fgb
    fgb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8;
      });
    });

    // tGB -> fGB
    fGB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value;
      });
    });

    // tGB -> ftb
    ftb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 125;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 125;
      });
    });

    // tGB -> fTB
    fTB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000;
      });
    });
  }
});

// ftb is clicked
ftb.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (ftb.checked == true) {
    // ftb -> tb
    tb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000000000;
      });
    });

    // ftb -> tB
    tB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 125000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 125000000000;
      });
    });

    // ftb -> tkb
    tkb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000000;
      });
    });

    // ftb -> tKB
    tKB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 125000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 125000000;
      });
    });

    // ftb -> tmb
    tmb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000;
      });
    });

    // ftb -> tMB
    tMB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 125000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 125000;
      });
    });

    // ftb -> tgb
    tgb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000;
      });
    });

    // ftb -> tGB
    tGB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 125;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 125;
      });
    });

    // ftb -> ttb
    ttb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value;
      });
    });

    // ftb -> tTB
    tTB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8;
      });
    });
  }
});

// ttb is clicked
ttb.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (ttb.checked == true) {
    // ttb -> fb
    fb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000000000;
      });
    });

    // ttb -> fB
    fB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 125000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 125000000000;
      });
    });

    // ttb -> fkb
    fkb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000000;
      });
    });

    // ttb -> fKB
    fKB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 125000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 125000000;
      });
    });

    // ttb -> fmb
    fmb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000;
      });
    });

    // ttb -> fMB
    fMB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 125000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 125000;
      });
    });

    // ttb -> fgb
    fgb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000;
      });
    });

    // ttb -> fGB
    fGB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 125;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 125;
      });
    });

    // ttb -> ftb
    ftb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value;
      });
    });

    // ttb -> fTB
    fTB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8;
      });
    });
  }
});

// fTB is clicked
fTB.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fTB.checked == true) {
    // fTB -> tb
    tb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8000000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8000000000000;
      });
    });

    // fTB -> tB
    tB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000000000;
      });
    });

    // fTB -> tkb
    tkb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8000000000;
      });
    });

    // fTB -> tKB
    tKB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000000;
      });
    });

    // fTB -> tmb
    tmb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8000000;
      });
    });

    // fTB -> tMB
    tMB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000000;
      });
    });

    // fTB -> tgb
    tgb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8000;
      });
    });

    // fTB -> tGB
    tGB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 1000;
      });
    });

    // fTB -> ttb
    ttb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value * 8;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value * 8;
      });
    });

    // fTB -> tTB
    tTB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value;
      });
    });
  }
});

// tTB is clicked
tTB.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tTB.checked == true) {
    // tTB -> fb
    fb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8000000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8000000000000;
      });
    });

    // tTB -> fB
    fB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000000000;
      });
    });

    // tTB -> fkb
    fkb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8000000000;
      });
    });

    // tTB -> fKB
    fKB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000000;
      });
    });

    // tTB -> fmb
    fmb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8000000;
      });
    });

    // tTB -> fMB
    fMB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000000;
      });
    });

    // tTB -> fgb
    fgb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8000;
      });
    });

    // tTB -> fGB
    fGB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 1000;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 1000;
      });
    });

    // tTB -> ftb
    ftb.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value / 8
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value / 8
      });
    });

    // tTB -> fTB
    fTB.addEventListener("click", (e) => {
      outputStorage.value = inputStorage.value;
      inputStorage.addEventListener("input", () => {
        outputStorage.value = inputStorage.value;
      });
    });
  }
});
