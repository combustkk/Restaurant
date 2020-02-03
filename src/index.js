import "./style.css"
import makeTabs from "./tabs.js"
require('./text.js')
let mainContent = document.getElementById("content");
let tabs = makeTabs();
mainContent.appendChild(tabs["tabsDiv"]);
tabs.addTab("Our Chef");
tabs.addTab("Our Menu");
tabs.addTab("Contact Us");
