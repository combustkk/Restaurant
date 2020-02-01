import makeTabs from "./tabs.js"
let body = document.querySelector("body");
body.style.backgroundImage = "url(\"https://images.alphacoders.com/711/711150.png\")";
body.style.backgroundSize = "100% auto";
let mainContent = document.getElementById("content");
let tabs = makeTabs();
mainContent.appendChild(tabs["tabsDiv"]);
tabs.addTab("Our Chef");
tabs.addTab("Our Menu");
tabs.addTab("Contact Us");
