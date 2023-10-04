const menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];
const mainEl = document.querySelector("main");
const topMenuEl = document.getElementById("top-menu");
const subMenuEl = document.getElementById("sub-menu");
const topMenuLinks = document.querySelectorAll("a");
let showingSubMenu = false;

topMenuEl.addEventListener("click", function (e) {
  e.preventDefault();
  const link = e.target;
  if (e.target.tagName !== "A") {
    return;
  }
  console.log(link.textContent);
  if (link.classList.contains("active")) {
    link.classList.remove("active");
    showingSubMenu = false;
    subMenuEl.style.top = "0";
    return;
  }
  topMenuLinks.forEach(function (link) {
    link.classList.remove("active");
  });
  link.classList.add("active");

  const linkData = menuLinks.find(function (linkObj) {
    return linkObj.text === link.textContent;
  });
  showingSubMenu = "subLinks" in linkData;

  if (showingSubMenu) {
    buildSubMenu(linkData.subLinks);
    subMenuEl.style.top = "100%";
  } else {
    subMenuEl.style.top = "0";
    mainEl.innerHTML = "<h1>about</h1>";
  }
});
mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.textContent = "SEI ROCKS!";
mainEl.classList = "flex-ctr";

topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg";
topMenuEl.classList = "flex-around";

subMenuEl.style.height = "100%";
subMenuEl.style.backgroundColor = "var(--sub-menu-bg";
subMenuEl.classList = "flex-around";
subMenuEl.style.position = "absolute";
subMenuEl.style.top = 0;

menuLinks.forEach((menu) => {
  const anchor = document.createElement("a");
  anchor.textContent = menu.text;
  anchor.href = menu.href;
  topMenuEl.appendChild(anchor);
});
