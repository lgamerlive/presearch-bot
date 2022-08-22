var search_words =
    "Maxillipedary guiltless transequatorial nontheistic phenomenalized censoriously boxhaul boomslang chesapeake preliquidation presubordinated wagoner outbless photoconduction. Midmost britzka decanter hazanim gratian nondisparate represcribed pliofilm iridocapsulitis bisque contentious combinatory mimeograph mildness. Erbil discased duplicate unchlorinated coachella dimensionless existentially uncherishing shopkeeper clumsily whr nonpendent underhorsed tolstoyist. Changsha colusa antimatter strawless platypus semibiographic capiteux blini quintuple chalmers wine disguised rebuilding lustrate. Ursula nonregenerating eclipsis preexemption sterilization dedication absolute lobated apulian legationary dardic heath palate monic.";

chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    if (msg["text"] == "uid") {
        load();
    }
    return true;
});
const timer = ms => new Promise(res => setTimeout(res, ms));
async function load() {
    // We need to wrap the loop into an async function for this to work
    for (var i = 0; i < 50; i++) {
        console.log(i);
        search_array = search_words.split(" ");
        random_number = Math.floor(Math.random() * search_array.length);
        if (i !== 14 && i !== 5) {
            chrome.tabs.update({
                url: `https://saltolinkee.glitch.me/presearch?name=https://presearch.com/search?q=${search_array[random_number]}`
            });
        }
        await timer(25000); // then the created Promise can be awaited
    }
}