const labelFrom = document.querySelector("#labelFrom");
const labelTo = document.querySelector("#labelTo");
const inputTemp = document.querySelector("#inputTemp");
const outputTemp = document.querySelector("#outputTemp");

const fC = document.querySelector("#fC");
const fF = document.querySelector("#fF");
const fK = document.querySelector("#fK");
const fRa = document.querySelector("#fRa");
const fRe = document.querySelector("#fRe");

const tC = document.querySelector("#tC");
const tF = document.querySelector("#tF");
const tK = document.querySelector("#tK");
const tRa = document.querySelector("#tRa");
const tRe = document.querySelector("#tRe");

// fC is clicked
fC.addEventListener("click", (e) => {
  labelFrom.textContent = fC.value;

  if (fC.checked == true) {
    // fC -> tC
    tC.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value);
      });
    });

    // fC -> tF
    tF.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) * (9 / 5) + 32;
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) * (9 / 5) + 32;
      });
    });

    // fC -> tK
    tK.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) + Number(273.15);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) + Number(273.15);
      });
    });

    // fC -> tRa
    tRa.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) * (9 / 5) + Number(491.67);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) * (9 / 5) + Number(491.67);
      });
    });

    // fC -> tRe
    tRe.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) * (4 / 5);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) * (4 / 5);
      });
    });
  }
});

// tC is clicked
tC.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tC.checked == true) {
    // tC -> fC
    fC.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value);
      });
    });

    // tC -> fF
    fF.addEventListener("click", (e) => {
      outputTemp.value = (Number(inputTemp.value) - 32) * (5 / 9);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = (Number(inputTemp.value) - 32) * (5 / 9);
      });
    });

    // tC -> fK
    fK.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) - Number(273.15);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) - Number(273.15);
      });
    });

    // tC -> fRa
    fRa.addEventListener("click", (e) => {
      outputTemp.value = (Number(inputTemp.value) - Number(491.67)) * (5 / 9);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = (Number(inputTemp.value) - Number(491.67)) * (5 / 9);
      });
    });

    // tC -> fRe
    fRe.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) * (5 / 4);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) * (5 / 4);
      });
    });
  }
});

// fF is clicked
fF.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fF.checked == true) {
    // fF -> tC
    tC.addEventListener("click", (e) => {
      outputTemp.value = (Number(inputTemp.value) - 32) * (5 / 9);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = (Number(inputTemp.value) - 32) * (5 / 9);
      });
    });

    // fF -> tF
    tF.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value);
      });
    });

    // fF -> tK
    tK.addEventListener("click", (e) => {
      outputTemp.value =
        (Number(inputTemp.value) - 32) * (5 / 9) + Number(273.15);
      inputTemp.addEventListener("input", () => {
        outputTemp.value =
          (Number(inputTemp.value) - 32) * (5 / 9) + Number(273.15);
      });
    });

    // fF -> tRa
    tRa.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) + Number(459.67);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) + Number(459.67);
      });
    });

    // fF -> tRe
    tRe.addEventListener("click", (e) => {
      outputTemp.value = (Number(inputTemp.value) - 32) * (4 / 9);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = (Number(inputTemp.value) - 32) * (4 / 9);
      });
    });
  }
});

// tF is clicked
tF.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tF.checked == true) {
    // tF -> fC
    fC.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) * (9 / 5) + 32;
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) * (9 / 5) + 32;
      });
    });

    // tF -> fF
    fF.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value);
      });
    });

    // tF -> fK
    fK.addEventListener("click", (e) => {
      outputTemp.value =
        (Number(inputTemp.value) - Number(273.15)) * (9 / 5) + 32;
      inputTemp.addEventListener("input", () => {
        outputTemp.value =
          (Number(inputTemp.value) - Number(273.15)) * (9 / 5) + 32;
      });
    });

    // tF -> fRa
    fRa.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) - Number(459.67);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) - Number(459.67);
      });
    });

    // tF -> fRe
    fRe.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) * (9 / 4) + 32;
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) * (9 / 4) + 32;
      });
    });
  }
});

// fK is clicked
fK.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fK.checked == true) {
    // fK -> tC
    tC.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) - Number(273.15);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) - Number(273.15);
      });
    });

    // fK -> tF
    tF.addEventListener("click", (e) => {
      outputTemp.value =
        (Number(inputTemp.value) - Number(273.15)) * (9 / 5) + 32;
      inputTemp.addEventListener("input", () => {
        outputTemp.value =
          (Number(inputTemp.value) - Number(273.15)) * (9 / 5) + 32;
      });
    });

    // fK -> tK
    tK.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value);
      });
    });

    // fK -> tRa
    tRa.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) * Number(1.8);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) * Number(1.8);
      });
    });

    // fK -> tRe
    tRe.addEventListener("click", (e) => {
      outputTemp.value = (Number(inputTemp.value) - Number(273.15)) * (4 / 5);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = (Number(inputTemp.value) - Number(273.15)) * (4 / 5);
      });
    });
  }
});

// tK is clicked
tK.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tK.checked == true) {
    // tK -> fC
    fC.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) + Number(273.15);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) + Number(273.15);
      });
    });

    // tK -> fF
    fF.addEventListener("click", (e) => {
      outputTemp.value = (Number(inputTemp.value) - 32) * (5 / 9) + 273.15;
      inputTemp.addEventListener("input", () => {
        outputTemp.value = (Number(inputTemp.value) - 32) * (5 / 9) + 273.15;
      });
    });

    // tK -> fK
    fK.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value);
      });
    });

    // tK -> fRa
    fRa.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) * (5 / 9);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) * (5 / 9);
      });
    });

    // tK -> fRe
    fRe.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) * (5 / 4) + Number(273.15);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) * (5 / 4) + Number(273.15);
      });
    });
  }
});

// fRa is clicked
fRa.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fRa.checked == true) {
    // fRa -> tC
    tC.addEventListener("click", (e) => {
      outputTemp.value = (Number(inputTemp.value) - Number(491.67)) * (5 / 9);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = (Number(inputTemp.value) - Number(491.67)) * (5 / 9);
      });
    });

    // fRa -> tF
    tF.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) - Number(459.67);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) - Number(459.67);
      });
    });

    // fRa -> tK
    tK.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) * (5 / 9);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) * (5 / 9);
      });
    });

    // fRa -> tRa
    tRa.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value);
      });
    });

    // fRa -> tRe
    tRe.addEventListener("click", (e) => {
      outputTemp.value = (Number(inputTemp.value) - Number(491.67)) * (4 / 9);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = (Number(inputTemp.value) - Number(491.67)) * (4 / 9);
      });
    });
  }
});

// tRa is clicked
tRa.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tRa.checked == true) {
    // tRa -> fC
    fC.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) * (9 / 5) + Number(491.67);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) * (9 / 5) + Number(491.67);
      });
    });

    // tRa -> fF
    fF.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) + Number(459.67);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) + Number(459.67);
      });
    });

    // tRa -> fK
    fK.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) * Number(1.8);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) * Number(1.8);
      });
    });

    // tRa -> fRa
    fRa.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value);
      });
    });

    // tRa -> fRe
    fRe.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) * (9 / 4) + Number(491.67);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) * (9 / 4) + Number(491.67);
      });
    });
  }
});

// fRe is clicked
fRe.addEventListener("click", (e) => {
  labelFrom.textContent = e.target.value;

  if (fRe.checked == true) {
    // fRe -> tC
    tC.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) * (5 / 4);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) * (5 / 4);
      });
    });

    // fRe -> tF
    tF.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) * (9 / 4) + 32;
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) * (9 / 4) + 32;
      });
    });

    // fRe -> tK
    tK.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) * (5 / 4) + Number(273.15);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) * (5 / 4) + Number(273.15);
      });
    });

    // fRe -> tRa
    tRa.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) * (9 / 4) + Number(491.67);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) * (9 / 4) + Number(491.67);
      });
    });

    // fRe -> tRe
    tRe.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value);
      });
    });
  }
});

// tRe is clicked
tRe.addEventListener("click", (e) => {
  labelTo.textContent = e.target.value;

  if (tRe.checked == true) {
    // tRe -> fC
    fC.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value) * (4 / 5);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value) * (4 / 5);
      });
    });

    // tRe -> fFr
    fF.addEventListener("click", (e) => {
      outputTemp.value = (Number(inputTemp.value) - 32) * (4 / 9);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = (Number(inputTemp.value) - 32) * (4 / 9);
      });
    });

    // tRe -> fK
    fK.addEventListener("click", (e) => {
      outputTemp.value = (Number(inputTemp.value) - Number(273.15)) * (4 / 5);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = (Number(inputTemp.value) - Number(273.15)) * (4 / 5);
      });
    });

    // tRe -> fRa
    fRa.addEventListener("click", (e) => {
      outputTemp.value = (Number(inputTemp.value) - Number(491.67)) * (4 / 9);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = (Number(inputTemp.value) - Number(491.67)) * (4 / 9);
      });
    });

    // tRe -> fRe
    fRe.addEventListener("click", (e) => {
      outputTemp.value = Number(inputTemp.value);
      inputTemp.addEventListener("input", () => {
        outputTemp.value = Number(inputTemp.value);
      });
    });
  }
});
