var generatorText = [
    "অর্থহীন লেখা যার মাঝে আছে অনেক কিছু।",
    "হ্যাঁ, এই লেখার মাঝেই আছে অনেক কিছু।",
    "যদি তুমি মনে করো, এটা তোমার কাজে লাগবে, তাহলে তা লাগবে কাজে।",
    "নিজের ভাষায় লেখা দেখতে অভ্যস্ত হও।",
    "মনে রাখবে লেখা অর্থহীন হয়, যখন তুমি তাকে অর্থহীন মনে করো; আর লেখা অর্থবোধকতা তৈরি করে, যখন তুমি তাতে অর্থ ঢালো।",
    "যেকোনো লেখাই তোমার কাছে অর্থবোধকতা তৈরি করতে পারে, যদি তুমি সেখানে অর্থদ্যোতনা দেখতে পাও।",
    "…ছিদ্রান্বেষণ?",
    "না, তা হবে কেন?",
    "যে কথাকে কাজে লাগাতে চাও, তাকে কাজে লাগানোর কথা চিন্তা করার আগে ভাবো, তুমি কি সেই কথার জাদুতে আচ্ছন্ন হয়ে গেছ কিনা।",
    "তুমি যদি নিশ্চিত হও যে, তুমি কোনো মোহাচ্ছাদিত আবহে আবিষ্ট হয়ে অন্যের শেখানো বুলি আত্মস্থ করছো না, তাহলে তুমি নির্ভয়ে, নিশ্চিন্তে অগ্রসর হও।",
    "তুমি সেই কথাকে জানো, বুঝো, আত্মস্থ করো; মনে রাখবে, যা অনুসরণ করতে চলেছো, তা আগে অনুধাবন করা জরুরি; এখানে কিংকর্তব্যবিমূঢ় হবার কোনো সুযোগ নেই।",
    "কোনো কথা শোনামাত্রই কি তুমি তা বিশ্বাস করবে?",
    "হয়তো বলবে, করবে, হয়তো বলবে “আমি করবো না।”",
    "যা, “আমি করবো না” বললেই সবকিছু অস্বীকার করা যায় না, হয়তো তুমি মনের গহীন গভীর থেকে ঠিকই বিশ্বাস করতে শুরু করেছো সেই কথাটি, কিন্তু মুখে অস্বীকার করছো।",
    "তাই সচেতন থাকো, তুমি কী ভাবছো— তার প্রতি; সচেতন থাকো, তুমি কি আসলেই বিশ্বাস করতে চলেছো ঐ কথাটি… শুধু এতটুকু বলি, যা-ই বিশ্বাস করো না কেন, আগে যাচাই করে নাও; আর এতে চাই তোমার প্রত্যুৎপন্নমতিত্ব।",
    "তাই কোন কথাটি কাজে লাগবে, তা নির্ধারণ করবে তুমি— হ্যাঁ, তুমি।",
    "হয়তো সামান্য ক’টা বাংলা অক্ষর: খন্ড-ত, অনুস্বার, বিঃসর্গ কিংবা চন্দ্রবিন্দু— কিন্তু যদি তুমি বিশ্বাস করো, তাহলে হয়তো তুমি তা দিয়েই তৈরি করতে পারো এক উচ্চমার্গীয় মহাকাব্য- এক চিরসবুজ অর্ঘ্য।",
    "রচিত হতে পারে পৃথিবীর ১ম বিরাম চিহ্নের ইতিকথা – এক নতুন ঊষা।",
    "…মহাকাব্য লিখতে ঋষি-মুনি হওয়া লাগে না।",
    "অর্থহীনতা আর অর্থদ্যোতনার সেই ঈর্ষাকাতর মোহাবিষ্টতা তাই তৈরি করে নাও নিজের মাঝে- চাই একটুখানি ঔৎসুক্য।",
    "নিজেই ঠিক করো, নিজের ভাষাটা কি অর্থহীন, নাকি কিছু সত্যিই বলছে!",
];

function makeSentences(n) {
    var sentences = '';

    for (var i = 0; i <= n - 1; i++) {
        var r = Math.floor(Math.random() * generatorText.length);
        sentences += "<p>" + generatorText[r] + "</p>";
    }

    return sentences;
}

function makeParagraphs(n) {
    var paragraphs = '';

    for (var i = 0; i <= n - 1; i++) {
        paragraphs += "<p>";
        for (var j = 0; j <= 4; j++) {
            var r = Math.floor(Math.random() * generatorText.length);
            paragraphs += generatorText[r] + " ";
        }
        paragraphs += "</p>";
    }

    return paragraphs;
}

function makeWords(n) {
    var words = "<p>";

    for (var i = 0; i <= n - 1; i++) {
        var a = Math.floor(Math.random() * generatorText.length);
        var splitsent = generatorText[a].split(" ");
        var b = Math.floor(Math.random() * splitsent.length);
        words += splitsent[b] + " ";
    }

    words += "</p>";

    return words;
}

/**
 * Gender-based Names.
 * 
 * @param {String} radioChoice Choice from the Radio buttons.
 * @param {Array} femaleNames Female Names.
 * @param {Array} maleNames Male Names.
 * @returns Array
 */
function generateBasedOnType(radioChoice, count) {
    if ("words" === radioChoice) {
        return makeWords(count);
    } else if ("sentences" === radioChoice) {
        return makeSentences(count);
    } else if ("paragraphs" === radioChoice) {
        return makeParagraphs(count);
    }
}
