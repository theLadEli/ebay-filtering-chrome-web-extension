const includePhrases = document.getElementById("includePhrases").value;
const excludePhrases = document.getElementById("excludePhrases").value;

let url = "https://www.ebay.com/sch/i.html?_nkw=";

if (includePhrases) {
  const includePhrasesList = includePhrases.split(",");
  includePhrasesList.forEach(phrase => {
    url += `&_in_kw=${phrase.trim()}`;
  });
}

if (excludePhrases) {
  const excludePhrasesList = excludePhrases.split(",");
  excludePhrasesList.forEach(phrase => {
    url += `&_ex_kw=${phrase.trim()}`;
  });
}

console.log("Filtered URL:", url);
