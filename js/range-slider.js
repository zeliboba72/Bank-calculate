let rangeSlider1 = document.getElementById("slider-first");

if (rangeSlider1) {
  noUiSlider.create(rangeSlider1, {
    start: [1000],
    connect: "lower",
    step: 1,
    range: {
      min: 1000,
      max: 3000000,
    },
  });

  const input1 = document.getElementById("input-1");

  rangeSlider1.noUiSlider.on("update", function (values) {
    input1.value = Math.round(values);
  });

  function setRangeSlider() {
    rangeSlider1.noUiSlider.set(input1.value);
  }

  input1.addEventListener("change", setRangeSlider);
}

let rangeSlider2 = document.getElementById("slider-second");

if (rangeSlider2) {
  noUiSlider.create(rangeSlider2, {
    start: [1000],
    connect: "lower",
    step: 1,
    range: {
      min: 1000,
      max: 3000000,
    },
  });

  const input2 = document.getElementById("input-2");

  rangeSlider2.noUiSlider.on("update", function (values) {
    input2.value = Math.round(values);
  });

  function setRangeSlider() {
    rangeSlider2.noUiSlider.set(input2.value);
  }

  input2.addEventListener("change", setRangeSlider);
}
