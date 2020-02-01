import makeTab from "./tab.js"
function makeTabs()
{
  let counter = 0;
  let tabsDiv = document.createElement("div");
  tabsDiv.style.display="flex";
  tabsDiv.style.flexWrap="wrap";
  tabsDiv.style.justifyContent = "flex-end";
  let addLabelInputStyle = function(labelElement, inputElement)
  {
    labelElement.style.display = "block";
    labelElement.style.padding = "1rem 2rem";
    labelElement.style.cursor = "pointer";
    labelElement.style.marginRight = "0.2rem";
    labelElement.style.backgroundColor="#90CAF9";
    inputElement.style.display = "none";
  };
  let addTabLabel = function(tabTitle)
  {
    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "radio");
    inputElement.setAttribute("id", `tab${counter}`);
    inputElement.setAttribute("name", "radioFam");
    inputElement.addEventListener("click", (e)=>
    {
      const radios = document.querySelectorAll("input[type=\"radio\"]");
      radios.forEach((r)=>{
        if(r != e.target)
        {
          r.nextSibling.style.backgroundColor = "#90CAF9";
        }
        else {
          r.nextSibling.style.backgroundColor = "#FFF";
          r.nextSibling.nextSibling.style.display = "block";
        }
      });
    });
    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", `tab${counter}`);
    labelElement.innerText = tabTitle;
    addLabelInputStyle(labelElement, inputElement);
    tabsDiv.appendChild(inputElement);
    tabsDiv.appendChild(labelElement);

  };

  let addTab = function(tabTitle)
  {
    counter++;
    addTabLabel(tabTitle);
    tabsDiv.appendChild(makeTab(tabTitle));
  };

  return {
      "tabsDiv": tabsDiv,
      "addTab": addTab
  };
};
export default makeTabs
