/**
 * --------------------------------------
 * Name generator.
 * --------------------------------------
 */

var outputElement = document.getElementById("random-names");
var nameChoices = document.querySelectorAll('input[name="name_choice"]');

var maleNames = Array.prototype.concat(
    buddhistMaleNames,
    christianMaleNames,
    hinduMaleNames,
    muslimMaleNames
);

var femaleNames = Array.prototype.concat(
    buddhistFemaleNames,
    christianFemaleNames,
    hinduFemaleNames,
    muslimFemaleNames
);

var allNames = Array.prototype.concat(maleNames, femaleNames);

outputElement.innerHTML = htmlFormattedNames(shuffle(allNames));

var gBasedNames = "";
nameChoices.forEach((nameChoice) => {
    nameChoice.addEventListener("change", function (e) {
        gBasedNames = genderBasedNames(e.target.value, femaleNames, maleNames);

        outputElement.innerHTML = htmlFormattedNames(shuffle(gBasedNames));
    });
});

/**
 * --------------------------------------
 * Generator.
 * Thanks to BanglaLorem by Saiful Islam
 * --------------------------------------
 */
var generatorTypeChoices = document.querySelectorAll(
    'input[name="generator_type_choice"]'
);
var generatedOutputElement = document.getElementById("generated-text");
var generateCountSlider = document.getElementById("range-slider");
var countBadges = document.querySelectorAll(".badge--count");

var generateCount = generateCountSlider.value;

// On count slider change.
generateCountSlider.addEventListener("input", (event) => {
    generateCount = event.target.value;

    countBadges.forEach((countBadge) => {
        countBadge.innerText = generateCount.toString().getBanglaDigitFromRoman();
    });

    var generatorRadioDefaultChoice = document.querySelector(
        'input[name="generator_type_choice"]:checked'
    );
    generatedOutputElement.innerHTML = generateBasedOnType(
        generatorRadioDefaultChoice.value,
        generateCount
    );
});

// Default generation.
generatedOutputElement.innerHTML = generateBasedOnType(
    "paragraphs",
    generateCount
);

// On type radio button choice.
generatorTypeChoices.forEach((typeChoice) => {
    typeChoice.addEventListener("change", function (e) {
        countBadges.forEach((countBadge) => {
            // Hide all the count badges.
            countBadge.classList.add("d-none");
        });

        // Display the badge-counts only on the radio button checked.
        e.target.nextElementSibling
            .querySelector(".badge--count")
            .classList.remove("d-none");

        generatedOutputElement.innerHTML = generateBasedOnType(
            e.target.value,
            generateCount
        );
    });
});
