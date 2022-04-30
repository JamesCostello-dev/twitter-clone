var body = document.querySelector("body");
var navContainer = document.createElement("div");
var btnContainer = document.createElement("div");
var headerContainer = document.createElement("div");
var ulList = document.createElement("ul");
var ulOption = document.createElement("ul");
var options = ["1", "2", "3", "4", "5", "6"];
var pages = ["Home", "Explore", "Notifications", "Messages", "Bookmarks", "Lists", "Profile", "More"];
var main = function () {
    body.appendChild(navList());
    body.appendChild(headerBox());
};
var navList = function () {
    var li = document.createElement("li");
    var btn = document.createElement("button");
    li.innerHTML = pages.map(function (page) { return "<a href=\"".concat("/" + page.toLowerCase(), "\">").concat(page, "</a>"); }).join("");
    btn.textContent = "Tweet";
    ulList.appendChild(li);
    ulList.appendChild(btn);
    navContainer.appendChild(ulList);
    navContainer.classList.add("nav-container");
    return navContainer;
};
var headerBox = function () {
    var header = document.createElement("header");
    var avatar = document.createElement("img");
    var textArea = document.createElement("textarea");
    var li = document.createElement("li");
    var btn = document.createElement("button");
    var key = ulList.querySelectorAll("a");
    header.textContent = "Twitter";
    avatar.setAttribute("src", "./assets/WFUyrT8v_400x400.jpeg");
    textArea.setAttribute("placeholder", "What's Happening?");
    li.innerHTML = options.map(function (option) { return "<span>".concat(option, "</span>"); }).join("");
    btn.textContent = "Tweet";
    ulOption.appendChild(li);
    ulOption.appendChild(btn);
    headerContainer.appendChild(header);
    headerContainer.appendChild(avatar);
    headerContainer.appendChild(textArea);
    headerContainer.appendChild(ulOption);
    headerContainer.classList.add("header-container");
    return headerContainer;
};
main();