var outputElement = document.getElementById("random-names");
var nameChoices = document.querySelectorAll('input[name="name_choice"]');

var maleNames = Array.prototype.concat(
    christianMaleNames,
    hinduMaleNames,
    muslimMaleNames
);

var femaleNames = Array.prototype.concat(
    christianFemaleNames,
    hinduFemaleNames,
    muslimFemaleNames
);

var allNames = Array.prototype.concat(maleNames, femaleNames);

outputElement.innerHTML = htmlFormattedNames(allNames.sort());

var gBasedNames = '';
nameChoices.forEach((nameChoice) => {
    nameChoice.addEventListener("change", function (e) {
        gBasedNames = genderBasedNames(e.target.value, femaleNames, maleNames);

        outputElement.innerHTML = htmlFormattedNames(gBasedNames.sort());
    });
});
