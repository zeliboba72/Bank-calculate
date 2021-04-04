const sumContribution = document.getElementById("input-1");
const sumReplenishment = document.getElementById("input-2");
const buttonForSum = document.querySelector(".button");
const textForResult = document.querySelector(".calculator__result-sum");
const numberOfYears = document.querySelector(".calculator__years");
const dateOfContribution = document.getElementById("date");
const radioNo = document.getElementById("no");

buttonForSum.addEventListener("click", () => {
  if (!dateOfContribution.value) {
    alert("Введите дату");
    return;
  }
  let numberOfYearsValue = parseInt(numberOfYears.value);
  let sumReplenishmentValue = parseInt(sumReplenishment.value);
  let sumContributionValue = parseInt(sumContribution.value);

  for (let i = 0; i < 12 * numberOfYearsValue; i++) {
    if (i === 0 || radioNo.checked) {
      sumReplenishmentValue = 0;
    } else {
      sumReplenishmentValue = parseInt(sumReplenishment.value);
    }
    sumContributionValue +=
      sumReplenishmentValue +
      (sumContributionValue + sumReplenishmentValue) * 30 * (0.1 / 365);
  }

  textForResult.innerHTML = `${Math.round(sumContributionValue)} руб`;
  textForResult.innerHTML = textForResult.innerHTML.replace(
    /(\d)(?=(\d\d\d)+([^\d]|$))/g,
    "$1 "
  );
});
