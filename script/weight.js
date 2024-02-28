const labelFrom = document.querySelector("#labelFrom");
const labelTo = document.querySelector("#labelTo");
const inputWeight = document.querySelector("#inputWeight");
const outputWeight = document.querySelector("#outputWeight");

const fKg = document.querySelector("#fKg");
const fGr = document.querySelector("#fGr");
const fMg = document.querySelector("#fMg");
const fMcg = document.querySelector("#fMcg");
const fT = document.querySelector("#fT");
const fSt = document.querySelector("#fSt");
const fPn = document.querySelector("#fPn");
const fOn = document.querySelector("#fOn");

const tKg = document.querySelector("#tKg");
const tGr = document.querySelector("#tGr");
const tMg = document.querySelector("#tMg");
const tMcg = document.querySelector("#tMcg");
const tT = document.querySelector("#tT");
const tSt = document.querySelector("#tSt");
const tPn = document.querySelector("#tPn");
const tOn = document.querySelector("#tOn");

// fkg is clicked
fKg.addEventListener("click", (e) => {
  labelFrom.textContent = fKg.value;

  if (fKg.checked == true) {
    // fkg -> tkg
    tKg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value;
      });
    });

    // fkg -> tgr
    tGr.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 1000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 1000;
      });
    });

    // fkg -> tmg
    tMg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 1000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 1000000;
      });
    });

    // fkg -> tmcg
    tMcg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 1000000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 1000000000;
      });
    });

    // fkg -> tt
    tT.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.001;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.001;
      });
    });

    // fkg -> tst
    tSt.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.1575;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.1575;
      });
    });

    // fkg -> tpn
    tPn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 2.2046;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 2.2046;
      });
    });

    // fkg -> ton
    tOn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 35.274;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 2.2046;
      });
    });
  }
});

// tkg is clicked
tKg.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tKg.checked == true) {
    // tkg -> fkg
    fKg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value;
      });
    });

    // tkg -> fgr
    fGr.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.001;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.001;
      });
    });

    // tkg -> fmg
    fMg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 1000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 1000000;
      });
    });

    // tkg -> fmcg
    fMcg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 1000000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 1000000000;
      });
    });

    // tkg -> ft
    fT.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 1000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 1000;
      });
    });

    // tkg -> fst
    fSt.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 6.3503;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 6.3503;
      });
    });

    // tkg -> fpn
    fPn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.4536;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.4536;
      });
    });

    // tkg -> fon
    fOn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.0283;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.0283;
      });
    });
  }
});

// fgr is clicked
fGr.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fGr.checked == true) {
    // fgr -> tkg
    tKg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.001;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.001;
      });
    });

    // fgr -> tgr
    tGr.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value;
      });
    });

    // fgr -> tmg
    tMg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 1000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 1000;
      });
    });

    // fgr -> tmcg
    tMcg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 1000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 1000000;
      });
    });

    // fgr -> tt
    tT.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 1000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 1000000;
      });
    });

    // fgr -> tst
    tSt.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.0002;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.0002;
      });
    });

    // fgr -> tpn
    tPn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.0022;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.0022;
      });
    });

    // fgrl -> ton
    tOn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.0353;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.0353;
      });
    });
  }
});

// tgr is clicked
tGr.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tGr.checked == true) {
    // tgr -> fkg
    fKg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 1000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 1000;
      });
    });

    // tgr -> fgr
    fGr.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value;
      });
    });

    // tgr -> fmg
    fMg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 1000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 1000;
      });
    });

    // tgr -> fmcg
    fMcg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 1000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 1000000;
      });
    });

    // tgr -> ft
    fT.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 1000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 1000000;
      });
    });

    // tgr -> fst
    fSt.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 6350.2932;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 6350.2932;
      });
    });

    // tgr -> fpn
    fPn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 453.5924;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 453.5924;
      });
    });

    // tgr -> fon
    fOn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 28.3495;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 28.3495;
      });
    });
  }
});

// fmg is clicked
fMg.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fMg.checked == true) {
    // fmg -> tkg
    tKg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 1000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 1000000;
      });
    });

    // fmg -> tgr
    tGr.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.001;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.001;
      });
    });

    // fmg -> tmg
    tMg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value;
      });
    });

    // fmg -> tmcg
    tMcg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 1000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 1000;
      });
    });

    // fmg -> tt
    tT.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 1000000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 1000000000;
      });
    });

    // fmg -> tst
    tSt.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 6350000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 6350000;
      });
    });

    // fmg -> tpn
    tPn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 453600;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 453600;
      });
    });

    // fmg -> ton
    tOn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 28350;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 28350;
      });
    });
  }
});

// tmg is clicked
tMg.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tMg.checked == true) {
    // tmg -> fkg
    fKg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 1000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 1000000;
      });
    });

    // tmg -> fgr
    fGr.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 1000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 1000;
      });
    });

    // tmg -> fmg
    fMg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value;
      });
    });

    // tmg -> fmcg
    fMcg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.001;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.001;
      });
    });

    // tmg -> ft
    fT.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 1000000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 1000000000;
      });
    });

    // tmg -> fst
    fSt.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 6350293.18;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 6350293.18;
      });
    });

    // tmg -> fpn
    fPn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 453592.37;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 453592.37;
      });
    });

    // tmg -> fon
    fOn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 28349.5231;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 28349.5231;
      });
    });
  }
});

// fmcg is clicked
fMcg.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fMcg.checked == true) {
    // fmcg -> tkg
    tKg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 1000000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 1000000000;
      });
    });

    // fmcg -> tgr
    tGr.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 1000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 1000000;
      });
    });

    // fmcg -> tmg
    tMg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 1000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 1000;
      });
    });

    // fmcg -> tmcg
    tMcg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value;
      });
    });

    // fmcg -> tt
    tT.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 1000000000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 1000000000000;
      });
    });

    // fmcg -> tst
    tSt.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 6350000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 6350000000;
      });
    });

    // fmcg -> tpn
    tPn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 453600000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 453600000;
      });
    });

    // fmcg -> ton
    tOn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 28350000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 28350000;
      });
    });
  }
});

// tmcg is clicked
tMcg.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tMcg.checked == true) {
    // tmcg -> fkg
    fKg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 1000000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 1000000000;
      });
    });

    // tmcg -> fgr
    fGr.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 1000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 1000000;
      });
    });

    // tmcg -> fmg
    fMg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 1000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 1000;
      });
    });

    // tmcg -> fmcg
    fMcg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.00621371;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.00621371;
      });
    });

    // tmcg -> ft
    fT.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 1000000000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 1000000000000;
      });
    });

    // tmcg -> fst
    fSt.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 6350293180;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 6350293180;
      });
    });

    // tmcg -> fpn
    fPn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 453592370;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 453592370;
      });
    });

    // tmcg -> fon
    fOn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 28349523.125;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 28349523.125;
      });
    });
  }
});

// ft is clicked
fT.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fT.checked == true) {
    // ft -> tkg
    tKg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 1000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 1000;
      });
    });

    // ft -> tgr
    tGr.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 1000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 1000000;
      });
    });

    // ft -> tmg
    tMg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 1000000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 1000000000;
      });
    });

    // ft -> tmcg
    tMcg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 1000000000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 1000000000000;
      });
    });

    // ft -> tt
    tT.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value;
      });
    });

    // ft -> tst
    tSt.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 157.473;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 157.473;
      });
    });

    // ft -> tpn
    tPn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 2204.6226;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 2204.6226;
      });
    });

    // ft -> ton
    tOn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 35273.9619;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 35273.9619;
      });
    });
  }
});

// tt is clicked
tT.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tT.checked == true) {
    // tt -> fkg
    fKg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 1000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 1000;
      });
    });

    // tt -> fgr
    fGr.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 1000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 1000000;
      });
    });

    // tt -> fmg
    fMg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 1000000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 1000000000;
      });
    });

    // tt -> fmcg
    fMcg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 1000000000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 1000000000000;
      });
    });

    // tt -> ft
    fT.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value;
      });
    });

    // tt -> fst
    fSt.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.0064;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.0064;
      });
    });

    // tt -> fpn
    fPn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.0005;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.0005;
      });
    });

    // tt -> fon
    fOn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 35270;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 35270;
      });
    });
  }
});

// fst is clicked
fSt.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fSt.checked == true) {
    // fst -> tkg
    tKg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 6.3503;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 6.3503;
      });
    });

    // fst -> tgr
    tGr.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 6350.2932;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 6350.2932;
      });
    });

    // fst -> tmg
    tMg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 6350293.18;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 6350293.18;
      });
    });

    // fst -> tmcg
    tMcg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 6350293180;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 6350293180;
      });
    });

    // fst -> tt
    tT.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.0064;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.0064;
      });
    });

    // fst -> tst
    tSt.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value;
      });
    });

    // fst -> tpn
    tPn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 14;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 14;
      });
    });

    // fst -> ton
    tOn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 224;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 224;
      });
    });
  }
});

// tst is clicked
tSt.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tSt.checked == true) {
    // tst -> fkg
    fKg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.1575;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.1575;
      });
    });

    // tst -> fgr
    fGr.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.0002;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.0002;
      });
    });

    // tst -> fmg
    fMg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 6350000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 6350000;
      });
    });

    // tst -> fmcg
    fMcg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 6350000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 6350000000;
      });
    });

    // tst -> ft
    fT.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 157.453;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 157.453;
      });
    });

    // tst -> fst
    fSt.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value;
      });
    });

    // tst -> fpn
    fPn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.0714;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.0714;
      });
    });

    // tst -> fon
    fOn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.0045;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.0045;
      });
    });
  }
});

// fpn is clicked
fPn.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fPn.checked == true) {
    // fpn -> tkg
    tKg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.4536;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.4536;
      });
    });

    // fpn -> tgr
    tGr.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 453.5924;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 453.5924;
      });
    });

    // fpn -> tmg
    tMg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 453592.37;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 453592.37;
      });
    });

    // fpn -> tmcg
    tMcg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 453592370;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 453592370;
      });
    });

    // fpn -> tt
    tT.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.0005;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.0005;
      });
    });

    // fpn -> tst
    tSt.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.0714;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.0714;
      });
    });

    // fpn -> tpn
    tPn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value;
      });
    });

    // fpn -> ton
    tOn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 16;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 16;
      });
    });
  }
});

// tpn is clicked
tPn.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tPn.checked == true) {
    // tpn -> fkg
    fKg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 2.2046;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 2.2046;
      });
    });

    // tpn -> fgr
    fGr.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.0022;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.0022;
      });
    });

    // tpn -> fmg
    fMg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 453600;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 453600;
      });
    });

    // tpn -> fmcg
    fMcg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 453600000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 453600000;
      });
    });

    // tpn -> ft
    fT.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 1000000000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 1000000000000;
      });
    });

    // tpn -> fst
    fSt.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 6350000000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 6350000000;
      });
    });

    // tpn -> fpn
    fPn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value;
      });
    });

    // tpn -> fon
    fOn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 28350000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 28350000;
      });
    });
  }
});

// fon is clicked
fOn.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fOn.checked == true) {
    // fon -> tkg
    tKg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.0283;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.0283;
      });
    });

    // fon -> tgr
    tGr.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 28.3495;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 28.3495;
      });
    });

    // fon -> tmg
    tMg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 28349.5231;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 28349.5231;
      });
    });

    // fon -> tmcg
    tMcg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 28349523.125;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 28349523.125;
      });
    });

    // fon -> tt
    tT.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 35270;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 35270;
      });
    });

    // fon -> tst
    tSt.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 16093.44;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 16093.44;
      });
    });

    // fon -> tpn
    tPn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.0045;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.0045;
      });
    });

    // fon -> ton
    tOn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value;
      });
    });
  }
});

// ton is clicked
tOn.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tOn.checked == true) {
    // tpn -> fkg
    fKg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 35.274;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 35.274;
      });
    });

    // ton -> fgr
    fGr.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 0.0353;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 0.0353;
      });
    });

    // ton -> fmg
    fMg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 28350;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 28350;
      });
    });

    // ton -> fmcg
    fMcg.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value / 28350000;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value / 28350000;
      });
    });

    // ton -> ft
    fT.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 35273.9619;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 35273.9619;
      });
    });

    // ton -> fst
    fSt.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 224;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 224;
      });
    });

    // ton -> fpn
    fPn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value * 16;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value * 16;
      });
    });

    // ton -> fon
    fOn.addEventListener("click", (e) => {
      outputWeight.value = inputWeight.value;
      inputWeight.addEventListener("input", () => {
        outputWeight.value = inputWeight.value;
      });
    });
  }
});
