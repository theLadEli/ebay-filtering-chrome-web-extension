const includePhrases = document.getElementById("includePhrases").value;
const excludePhrases = document.getElementById("excludePhrases").value;

const filterButton = document.getElementById("filterButton");
filterButton.addEventListener("click", filterResults);

function filterResults() {
    const includePhrasesArray = includePhrases.split(",");
    const excludePhrasesArray = excludePhrases.split(",");

    const items = document.querySelectorAll(".s-item_link");
    items.forEach(item => {
        fetch(item.href)
            .then(response => response.text())
            .then(html => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(html, "text/html");
                const description = doc.querySelector(".d-item-description").textContent;

                let includePhraseFound = false;
                let excludePhraseFound = false;

                includePhrasesArray.forEach(phrase => {
                    if (description.includes(phrase)) {
                        includePhraseFound = true;
                    }
                });

                excludePhrasesArray.forEach(phrase => {
                    if (description.includes(phrase)) {
                        excludePhraseFound = true;
                    }
                });

                if (includePhraseFound && !excludePhraseFound) {
                    item.closest(".s-item").style.display = "block";
                } else {
                    item.closest(".s-item").style.display = "none";
                }
            });
    });
}
