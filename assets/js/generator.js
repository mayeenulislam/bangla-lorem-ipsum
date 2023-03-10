/**
 * Generator feeder.
 * Poem: "Tarun Kishore" by Jasimuddin
 */
var generatorText = [
    "তরুণ কিশোর! তোমার জীবনে সবে এ ভোরের বেলা, ভোরের বাতাস ভোরের কুসুমে জুড়েছে রঙের খেলা।",
    "রঙের কুহেলী তলে, তোমার জীবন ঊষার আকাশে শিশু রবি সম জ্বলে।",
    "এখনো পাখিরা উঠেনি জাগিয়া, শিশির রয়েছে ঘুমে, কলঙ্কী চাঁদ পশ্চিমে হেলি কৌমুদী-লতা চুমে।",
    "বঁধুর কোলেতে বধুয়া ঘুমায়, খোলেনি বাহুর বাঁধ, দীঘির জলেতে নাহিয়া নাহিয়া মেটেনি তারার সাধ।",
    "এখনো আসেনি অলি, মধুর লোভেতে কোমল কুসুম দুপায়েতে দলি দলি।",
    "এখনো গোপন আঁধারের তলে আলোকের শতদল, মেঘে মেঘে লেগে বরণে বরণে করিতেছে টলমল।",
    "এখনো বসিয়া সেঁউতীর মালা গাঁথিছে ভোরের তারা, ঊষার রঙিন শাড়ীখানি তার বুনান হয়নি সারা।",
    "হায়রে করুণ হায়, এখনি যে সবে জাগিয়া উঠিবে প্রভাতের কিনারায়।",
    "এখন হইবে লোক জানাজানি, মুখ চেনাচেনি আর, হিসাব নিকাশ হইবে এখন কতটুকু আছে কার।",
    "বিহগ ছাড়িয়া ভোরের ভজন আহারের সন্ধ্যানে, বাতাসে বাঁধিয়া পাখা-সেতু-বাঁধ ছুটিবে সুদুর-পানে।",
    "শূন্য হাওয়ার শূন্য ভরিতে বুকখানি করি শুনো, ফুলের দেউল হবে না উজাড় আজিকে প্রভাতে পুন।",
    "তরুণ কিশোর ছেলে, আমরা আজিকে ভাবিয়া না পাই তুমি হেথা কেন এলে?",
    "তুমি ভাই সেই ব্রজের রাখাল, পাতার মুকুট পরি, তোমাদের রাজা আজো নাকি খেলে গেঁয়ো মাঠখানি ভরি।",
    "আজো নাকি সেই বাঁশীর রাজাটি তমাল-লতার ফাঁদে, চরণ জড়ায়ে নূপুর হারায়ে পথের ধূলায় কাঁদে",
    "কে এলে তবে ভাই, সোনার গোকুল আঁধার করিয়া এই মথুরার ঠাই।",
    "হেথা যৌবন মেলিয়া ধরিয়া জমা-খরচের খাতা, লাভ লেকাসান নিতেছে বুঝিয়া খুলিয়া পাতায় পাতা।",
    "ওপারে কিশোর, এপারে যুবক, রাজার দেউল বাড়ি, পাষাণের দেশে কেন এলে ভাই। রাখালের দেশ ছাড়ি?",
    "তুমি যে কিশোর তোমার দেশেতে হিসাব নিকাশ নাই, যে আসে নিকটে তাহারেই লও আপন বলিয়া তাই।",
    "আজিও নিজেরে বিকাইতে পার ফুলের মালার দামে, রূপকথা শুনি তোমাদের দেশে রূপকথা-দেয়া নামে।",
    "আজো কানে গোঁজ শিরীষ কুসুম কিংশুক-মঞ্জরী, অলকে বাঁধিয়া পাটল ফুলেতে ভরে লও উত্তরী!",
    "আজিও চেননি সোনার আদর, চেননি মুক্তাহার, হাসি মুখে তাই সোনা ঝরে পড়ে তোমাদের যারতার।",
    "সখালী পাতাও সখাদের সাথে, বিনামূলে দাও প্রাণ, এপারে মোদের মথুরার মত নাই দান-প্রতিদান।",
    "হেথা যৌবন যত কিছু এর খাতায় লিখিয়া লয়, পান হতে চুন খসেনাক-এমনি হিসাবময়।",
    "হাসিটি হেথায় বাজারে বিকায় গানের বেসাত করি, হেথাকার লোক সুরের পরাণ ধরে মানে লয় ভরি।",
    "হায়রে কিশোর হায়! ফুলের পরাণ বিকাতে এসেছ এই পাপ-মথুরায়।",
    "কালিন্দী লতা গলায় জড়ায়ে সোনার গোকুল কাঁদে ব্রজের দুলাল বাঁধা নাহি পড়ে যেন মথুরার ফাঁদে।",
    "মাধবীলতার দোলনা বাঁধিয়া কদম্ব-শাখে শাখে, কিশোর! তোমার কিশোর সখারা তোমারে যে ওই ডাকে।",
    "ডাকে কেয়াবনে ফুল-মঞ্জরি ঘন-দেয়া সম্পাতে, মাটির বুকেতে তমাল তাহার ফুল-বাহুখানি পাতে।",
    "ঘরে ফিরে যাও সোনার কিশোর! এ পাপমথুরাপুরী, তোমার সোনার অঙ্গেতে দেবে বিষবান ছুঁড়ি ছুঁড়ি।",
    "তোমার গোকুল আজো শেখে নাই ভালবাসা বলে কারে, ভালবেসে তাই বুকে বেঁধে লয় আদরিয়া যারে তারে।",
    "সেথায় তোমার কিশোরী বধূটি মাটির প্রদীপ ধরি, তুলসীর মূলে প্রণাম যে আঁকে হয়ত তোমারে স্মরি।",
    "হয়ত তাহাও জানে না সে মেয়ে জানে না কুসুম-হার, এত যে আদরে গাঁথিছে সে তাহা গলায় দোলাবে কার?",
    "তুমিও হয়ত জান না কিশোর, সেই কিশোরীর লাগি, মনে মনে কত দেউল গেঁথেছে কত না রজনী জাগি।",
    "হয়ত তাহারি অলকে বাঁধিতে মাঠের কুসুম ফুল, কতদূর পথ ঘুরিয়া মরিছ কত পথ করি ভুল।",
    "কারে ভালবাস, কারে যে বাস না তোমরা শেখনি তাহা, আমাদের মত কামনার ফাঁদে চেননি উহু ও আহা!",
    "মোদের মথুরা টরমল করে পাপ-লালসার ভারে, ভোগের সমিধ জ্বালিয়া আমরা পুড়িতেছি বারে বারে।",
    "তোমাদের প্রেম নিকষিত হেম কামনা নাহিক তায় যুগে যুগে কবি গড়িয়াছে ছবি কত ব্রজের গাঁয়!",
    "তোমাদের সেই ব্রজের ধূলায় প্রেমের বেলাতি হয়, সেথা কেউ তার মূল্য জানে না, এই বড় বিস্ময়।",
    "সেই ব্রজধূলি আজো ত মুছেনি তোমার সোনার গায়, কেন তবে ভাই, চরণ বাড়ালে যৌবন মথুরায়!",
];

/**
 * Make Random Paragraphs.
 * @param {Integer} n Number of Paragraphs.
 * @returns String
 */
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

/**
 * Make Random Sentences.
 * @param {Integer} n Number of Sentences.
 * @returns String
 */
function makeSentences(n) {
    var sentences = '';

    for (var i = 0; i <= n - 1; i++) {
        var r = Math.floor(Math.random() * generatorText.length);
        sentences += "<p>" + generatorText[r] + "</p>";
    }

    return sentences;
}

/**
 * Make Random Words.
 * @param {Integer} n Number of Words.
 * @returns String
 */
function makeWords(n) {
    var words = "<p>";

    for (var i = 0; i <= n - 1; i++) {
        var randomIndexFirst = Math.floor(Math.random() * generatorText.length);
        var distinctTexts = generatorText[randomIndexFirst].split(" ");

        // Remove duplicates.
        distinctTexts.reduce(function (a, b) {
            if (a.indexOf(b) < 0) a.push(b);
            return a;
        }, []);

        var randomIndexFromWithin = Math.floor(
            Math.random() * distinctTexts.length
        );

        words += distinctTexts[randomIndexFromWithin] + " ";
    }

    // Remove '—' (hyphen) from the end of the text.
    var pos = words.lastIndexOf("—");
    words = words.substring(0, pos) + "" + words.substring(pos + 1);

    words += "</p>";

    return words;
}

/**
 * Generate based on Type.
 * 
 * @param {String} radioChoice Choice from the Radio buttons.
 * @param {String} radioChoice User Choice.
 * @param {Array} count Number of items to be generated.
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
