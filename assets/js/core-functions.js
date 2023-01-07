/**
 * Generate Random Names.
 * 
 * Remove duplicates also.
 * 
 * @param {array} firstNames First Names.
 * @param {array} lastNames Last Names.
 * @returns array
 */
function generateRandomNames(firstNames, lastNames) {
    var randomNames = [];
    var totalIterations = firstNames.length + lastNames.length;

    for (i = 0; i <= totalIterations; i++) {
        var randomFirstName = "";
        var randomLastName = "";

        var randomFirstNameIndex = Math.floor(Math.random() * firstNames.length);
        var randomLastNameIndex = Math.floor(Math.random() * lastNames.length);

        randomFirstName = firstNames[randomFirstNameIndex];
        randomLastName = lastNames[randomLastNameIndex];

        // Generate a name.
        randomNames.push(randomFirstName + " " + randomLastName);

        // Remove all the duplicates.
        randomNames.reduce(function (a, b) {
            if (a.indexOf(b) < 0) a.push(b);
            return a;
        }, []);
    }

    return randomNames;
}

/**
 * Gender-based Names.
 * 
 * @param {string} radioChoice Choice from the Radio buttons.
 * @param {array} femaleNames Female Names.
 * @param {array} maleNames Male Names.
 * @returns array
 */
function genderBasedNames(radioChoice, femaleNames, maleNames) {
    if ("male" === radioChoice) {
        return maleNames;
    } else if ("female" === radioChoice) {
        return femaleNames;
    }

    return femaleNames.concat(maleNames);
}

/**
 * HTML-formatted Names.
 * 
 * @param {array} randomNames Random Names.
 * @returns HTML
 */
function htmlFormattedNames(randomNames) {
    var output = "";

    randomNames.forEach(function (name) {
        output += `<div class="col">
                    <div class="card p-1 text-center">
                        ${name}
                    </div>
                </div>`;
    });

    return output;
}
