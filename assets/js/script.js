const dropdown = document.querySelector('.drop-down');
const list = document.querySelector('.lang-list');
const selected = document.querySelector('.lang-selected');
const selectedFlag = document.querySelector('.selected-flag');

// Function to create a language item
const createLangItem = (flagSrc, countryName) => {
    const langItem = document.createElement('div');
    langItem.classList.add('lang-item');
    langItem.innerHTML = `
        <img src="${flagSrc}" alt="${countryName}" class="flag-img">
        <div class="country-name">${countryName}</div>
    `;
    return langItem;
};

dropdown.addEventListener('click', () => {
    list.classList.toggle('show');
});

list.addEventListener('click', (e) => {
    const langItem = e.target.closest('.lang-item');
    if (langItem) {
        // Save the current selected flag and country name
        const currentFlagSrc = selectedFlag.src;
        const currentCountryName = selected.textContent;

        // Update the selected flag and country name with the new selection
        const flagImg = langItem.querySelector('.flag-img');
        const countryName = langItem.querySelector('.country-name');

        selectedFlag.src = flagImg.src;
        selected.textContent = countryName.textContent;

        // Remove the selected item from the list
        langItem.remove();

        // Add the previous selection back to the list
        const newLangItem = createLangItem(currentFlagSrc, currentCountryName);
        list.appendChild(newLangItem);

        list.classList.remove('show');
    }
});

let dropdownBtn = document.getElementById("drop-text");
let catList = document.getElementById("cat-list");
let span = document.getElementById("span");
let icon = document.getElementById("icon");
let input = document.getElementById("search-input");
let listItems = document.querySelectorAll(".cat-list-item")

dropdownBtn.onclick = function () {
    if (catList.classList.contains("show")) {
        icon.style.rotate = "0deg";
    } else {
        icon.style.rotate = "-180deg";
    }
    catList.classList.toggle("show");
}

window.onclick = function (e) {
    if (
        e.target.id !== "drop-text" &&
        e.target.id !== "span" &&
        e.target.id !== "icon"
    ) {
        catList.classList.remove("show");
        icon.style.rotate = "0deg";
    }
}

for (item of listItems) {
    item.onclick = function (e) {
        span.innerText = e.target.innerText;

        if (e.target.innerText == "All Categories") {
            input.placeholder = "Search for items..";
        } else {
            input.placeholder = "Search in " + e.target.innerText + "...";
        }
    }
}