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

var gBasedNames = '';
nameChoices.forEach((nameChoice) => {
    nameChoice.addEventListener("change", function (e) {
        gBasedNames = genderBasedNames(e.target.value, femaleNames, maleNames);

        outputElement.innerHTML = htmlFormattedNames(shuffle(gBasedNames));
    });
});
