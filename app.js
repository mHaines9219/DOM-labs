const menuLinks = [
  { text: "about", href: "/about" },
  { text: "catalog", href: "/catalog" },
  { text: "orders", href: "/orders" },
  { text: "account", href: "/account" },
];

const mainEl = document.querySelector("main");
const topMenuEl = document.getElementById("top-menu");

mainEl.style.backgroundColor = "var(--main-bg)";
mainEl.textContent = "SEI ROCKS!";
mainEl.classList = "flex-ctr";

topMenuEl.style.height = "100%";
topMenuEl.style.backgroundColor = "var(--top-menu-bg";
topMenuEl.classList = "flex-around";

menuLinks.forEach((menu) => {
  const anchor = document.createElement("a");
  anchor.textContent = menu.text;
  anchor.href = menu.href;
  topMenuEl.appendChild(anchor);
});
