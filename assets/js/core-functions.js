/**
 * Generate Random Names.
 * 
 * Remove duplicates also.
 * 
 * @param {Array} firstNames First Names.
 * @param {Array} lastNames Last Names.
 * @returns Array
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
 * @param {String} radioChoice Choice from the Radio buttons.
 * @param {Array} femaleNames Female Names.
 * @param {Array} maleNames Male Names.
 * @returns Array
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
 * @param {Array} randomNames Random Names.
 * @returns HTML
 */
function htmlFormattedNames(randomNames) {
    var output = "";

    randomNames.forEach(function (name) {
        output += `<div class="col">
                    <div
                        class="card p-1 text-center"
                        onclick="copyText(this)"
                        title="কপি করতে ক্লিক করুন"
                    >
                        ${name}
                    </div>
                </div>`;
    });

    return output;
}

/**
 * Copy text where is clicked.
 * @param {Object} element Javascript element object.
 */
function copyText(element) {
    navigator.clipboard.writeText(element.textContent.trim());
    element.classList.add("bg-success", "text-white");
    setTimeout(function () {
        element.classList.remove("bg-success", "text-white");
    }, 1200);
}

/**
 * Notify the user that item is copied.
 * @param {string} holder Holder item.
 */
function notifyCopied(holder = '') {
    if (holder !== '') {
        var copyIcon = holder.querySelector(".copy--icon");
        var copyText = holder.querySelector(".copy--text");
    } else {
        var copyIcon = document.querySelector(".copy--icon");
        var copyText = document.querySelector(".copy--text");
    }

    // Handle the UI indications on copied the texts.
    copyIcon.classList.remove("bi-clipboard2");
    copyIcon.classList.add("bi-check-circle-fill");
    copyText.innerText = "কপি করা হয়েছে";
    copyText.classList.remove("visually-hidden");

    // Set the copy icon and button to its original state.
    setTimeout(function () {
        copyIcon.classList.remove("bi-check-circle-fill", "text-success");
        copyIcon.classList.add("bi-clipboard2");

        copyText.innerText = "সব কপি করুন";
        copyText.classList.add("visually-hidden");
    }, 1200);
}

/**
 * Copy all to Clipboard.
 * Can copy content within a div.
 * 
 * @param {String} containerId Container ID.
 * @param {Object} button Javascript Object.
 */
function copyAllToClipboard(containerId, button) {
    var selectionContainer = document.getElementById(containerId);

    navigator.clipboard.writeText(selectionContainer.innerText.trim());
    
    notifyCopied(button);
}

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}
