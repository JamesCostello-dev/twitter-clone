const body = document.querySelector("body");
const navContainer = document.createElement("div");
const btnContainer = document.createElement("div");
const headerContainer = document.createElement("div");
const ulList = document.createElement("ul");
const ulOption = document.createElement("ul");
const options = ["1", "2", "3", "4", "5", "6"];
const pages: string[] = ["Home", "Explore", "Notifications", "Messages", "Bookmarks", "Lists", "Profile", "More"];

const main = () => {
    body.appendChild(navList());
    body.appendChild(headerGroup());
};

const navList = () => {
    let li = document.createElement("li");
    let btn = document.createElement("button");

    li.innerHTML = pages.map((page) => `<a href="${"/" + page.toLowerCase()}">${page}</a>`).join("");
    btn.textContent = "Tweet";

    ulList.appendChild(li);
    ulList.appendChild(btn);
    navContainer.appendChild(ulList);
    navContainer.classList.add("nav-container");

    return navContainer;
};

const headerGroup = () => {
    let header = document.createElement("header");
    let avatar = document.createElement("img");
    let textArea = document.createElement("textarea");
    let li = document.createElement("li");
    let btn = document.createElement("button");
    let key = ulList.querySelectorAll("a");

    header.textContent = "Twitter";
    avatar.setAttribute("src", "./assets/WFUyrT8v_400x400.jpeg");
    textArea.setAttribute("placeholder", "What's Happening?");
    li.innerHTML = options.map((option) => `<span>${option}</span>`).join("");
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

const displayFeed = () => {};

main();
