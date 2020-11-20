const numInFullChallenge = () => {};
{
  const rangeInput = document.querySelector("#num_range");

  const zero = "zero";
  const hundredFix = "cem";
  const oneToNine = [
    "um",
    "dois",
    "três",
    "quatro",
    "cinco",
    "seis",
    "sete",
    "oito",
    "nove",
  ];
  const tenToNineteen = [
    "dez",
    "onze",
    "doze",
    "treze",
    "catorze",
    "quinze",
    "dezesseis",
    "dezessete",
    "dezoito",
    "dezenove",
  ];
  const twentyToNinety = [
    "vinte",
    "trinta",
    "quarenta",
    "cinquenta",
    "sessenta",
    "setenta",
    "oitenta",
    "noventa",
  ];
  const hundredPlus = [
    "cento",
    "duzentos",
    "trezentos",
    "quatrocentos",
    "quinhentos",
    "seiscentos",
    "setecentos",
    "oitocentos",
    "novecentos",
  ];

  const onInputEvent = (event) => {
    let fullNumValue = "";
    let arrRangeNums = [];

    let units = {
      ones: "",
      firstAnd: "",
      tens: "",
      secondAnd: "",
      hundreds: "",
    };

    // Get the slider value
    const rangeValue = event.target.value;
    // Set the number input value with the slider value
    document.querySelector("#num").value = rangeValue;

    // Stringfy the slider number, and put it into an array
    arrRangeNums = [...String(rangeValue).padStart(3, "0")];

    // Check for Exceptions "cem" and "zero", then add the hundreds to obj units
    if (
      arrRangeNums[0] == "0" &&
      arrRangeNums[1] == "0" &&
      arrRangeNums[2] == "0"
    ) {
      units.ones = zero;
    } else if (
      arrRangeNums[0] == "1" &&
      arrRangeNums[1] == "0" &&
      arrRangeNums[2] == "0"
    ) {
      units.hundreds = hundredFix;
    } else if (arrRangeNums[0] >= "1") {
      units.hundreds = hundredPlus[arrRangeNums[0] - 1];
    }

    // Check for exception from ten til nineteen, then add the tens to units
    if (arrRangeNums[1] >= "2") {
      units.tens = twentyToNinety[arrRangeNums[1] - 2];
    } else if (arrRangeNums[1] == "1") {
      units.tens = tenToNineteen[arrRangeNums[2]];
    }

    // Add the ones to units
    if (arrRangeNums[1] != "1" && arrRangeNums[2] > "0") {
      units.ones = oneToNine[arrRangeNums[2] - 1];
    }

    // Check when to apply the first and the sencond "and"
    if (arrRangeNums[0] > "0" && arrRangeNums[1] > "0") units.secondAnd = " e ";
    if (
      arrRangeNums[0] > "0" &&
      arrRangeNums[1] != "1" &&
      arrRangeNums[2] > "0"
    )
      units.firstAnd = " e ";
    if (arrRangeNums[1] > "1" && arrRangeNums[2] > "0") units.firstAnd = " e ";

    // Write the output with no spaces between words, use the "ands" to insert spaces before and after
    fullNumValue = `${units.hundreds}${units.secondAnd}${units.tens}${units.firstAnd}${units.ones}`;

    // Set the value in the number in full input
    document.querySelector("#num_in_full").value = fullNumValue;
  };

  rangeInput.addEventListener("input", onInputEvent);
}

window.addEventListener("load", numInFullChallenge);
