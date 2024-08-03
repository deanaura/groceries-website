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

// dropdown for browse-list
let dropdownBtnBrowse = document.getElementById("drop-text-browse");
let spanBrowse = document.getElementById("span-browse");
let iconBrowse = document.getElementById("icon-browse");
let browseList = document.getElementById("browse-list");
let browseListItems = document.querySelectorAll(".browse-list-item");

dropdownBtnBrowse.onclick = function () {
    if (browseList.classList.contains("show")) {
        iconBrowse.style.rotate = "0deg";
    } else {
        iconBrowse.style.rotate = "-180deg";
    }
    browseList.classList.toggle("show");
}

window.onclick = function (e) {
    if (
        e.target.id !== "drop-text-browse" &&
        e.target.id !== "span-browse" &&
        e.target.id !== "icon-browse"
    ) {
        browseList.classList.remove("show");
        iconBrowse.style.rotate = "0deg";
    }
}

for (itemBrowse of browseListItems) {
    itemBrowse.onclick = function (e) {
        spanBrowse.innerText = e.target.innerText;
    }
}

// dropdown for shop-list
let dropdownBtnShop = document.getElementById("drop-text-shop");
let spanShop = document.getElementById("span-shop");
let iconShop = document.getElementById("icon-shop");
let shopList = document.getElementById("shop-list");
let shopListItems = document.querySelectorAll(".shop-list-item");

dropdownBtnShop.onclick = function () {
    if (shopList.classList.contains("show")) {
        iconShop.style.rotate = "0deg";
    } else {
        iconShop.style.rotate = "-180deg";
    }
    shopList.classList.toggle("show");
}

window.onclick = function (e) {
    if (
        e.target.id !== "drop-text-shop" &&
        e.target.id !== "span-shop" &&
        e.target.id !== "icon-shop"
    ) {
        shopList.classList.remove("show");
        iconshop.style.rotate = "0deg";
    }
}

for (itemShop of shopListItems) {
    itemShop.onclick = function (e) {
        spanShop.innerText = e.target.innerText;
    }
}

// dropdown for stores-list
let dropdownBtnStores = document.getElementById("drop-text-stores");
let spanStores = document.getElementById("span-stores");
let iconStores = document.getElementById("icon-stores");
let storesList = document.getElementById("stores-list");
let storesListItems = document.querySelectorAll(".stores-list-item");

dropdownBtnStores.onclick = function () {
    if (storesList.classList.contains("show")) {
        iconStores.style.rotate = "0deg";
    } else {
        iconStores.style.rotate = "-180deg";
    }
    storesList.classList.toggle("show");
}

window.onclick = function (e) {
    if (
        e.target.id !== "drop-text-stores" &&
        e.target.id !== "span-stores" &&
        e.target.id !== "icon-stores"
    ) {
        storesList.classList.remove("show");
        iconstores.style.rotate = "0deg";
    }
}

for (itemStores of storesListItems) {
    itemStores.onclick = function (e) {
        spanStores.innerText = e.target.innerText;
    }
}

// dropdown for prod-list
let dropdownBtnProd = document.getElementById("drop-text-prod");
let spanProd = document.getElementById("span-prod");
let iconProd = document.getElementById("icon-prod");
let prodList = document.getElementById("prod-list");
let prodListItems = document.querySelectorAll(".prod-list-item");

dropdownBtnProd.onclick = function () {
    if (prodList.classList.contains("show")) {
        iconProd.style.rotate = "0deg";
    } else {
        iconProd.style.rotate = "-180deg";
    }
    prodList.classList.toggle("show");
}

window.onclick = function (e) {
    if (
        e.target.id !== "drop-text-prod" &&
        e.target.id !== "span-prod" &&
        e.target.id !== "icon-prod"
    ) {
        prodList.classList.remove("show");
        iconProd.style.rotate = "0deg";
    }
}

for (itemprod of prodListItems) {
    itemprod.onclick = function (e) {
        spanprod.innerText = e.target.innerText;
    }
}

// dropdown for blog-list
let dropdownBtnBlog = document.getElementById("drop-text-blog");
let spanBlog = document.getElementById("span-blog");
let iconBlog = document.getElementById("icon-blog");
let blogList = document.getElementById("blog-list");
let blogListItems = document.querySelectorAll(".blog-list-item");

dropdownBtnBlog.onclick = function () {
    if (blogList.classList.contains("show")) {
        iconBlog.style.rotate = "0deg";
    } else {
        iconBlog.style.rotate = "-180deg";
    }
    blogList.classList.toggle("show");
}

window.onclick = function (e) {
    if (
        e.target.id !== "drop-text-blog" &&
        e.target.id !== "span-blog" &&
        e.target.id !== "icon-blog"
    ) {
        blogList.classList.remove("show");
        iconBlog.style.rotate = "0deg";
    }
}

for (itemblog of blogListItems) {
    itemblog.onclick = function (e) {
        spanBlog.innerText = e.target.innerText;
    }
}

// hero swiper
document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
});

document.addEventListener('DOMContentLoaded', function() {
    var topCatSwiper = new Swiper('.top-cat-list', {
        loop: true,
        slidesPerView: 10,
        navigation: {
            nextEl: '.btn-next',
            prevEl: '.btn-prev',
        },
    });
});

// top-categories arrow
document.addEventListener('DOMContentLoaded', () => {
    const btnPrev = document.querySelector('.btn-prev');
    const btnNext = document.querySelector('.btn-next');
    const topCatList = document.querySelector('.top-cat-list');
    let currentIndex = 0;
    const itemsPerView = 10;
  
    function updateSlider() {
      const totalItems = topCatList.children.length;
      const maxIndex = totalItems - itemsPerView;
  
      if (currentIndex > maxIndex) {
        currentIndex = 0;
      } else if (currentIndex < 0) {
        currentIndex = maxIndex;
      }
  
      const offset = currentIndex * -100 / itemsPerView;
      topCatList.style.transform = `translateX(${offset}%)`;
      console.log('Current Index:', currentIndex, 'Offset:', offset);
    }
  
    btnPrev.addEventListener('click', () => {
      currentIndex--;
      updateSlider();
    });
  
    btnNext.addEventListener('click', () => {
      currentIndex++;
      updateSlider();
    });
  
    // Initialize the slider
    updateSlider();
  });
  