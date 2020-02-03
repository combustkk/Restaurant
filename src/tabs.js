import makeTab from "./tab.js"
function makeTabs()
{
  let counter = 0;
  let tabsDiv = document.createElement("div");
  tabsDiv.style.display="flex";
  tabsDiv.style.flexWrap="wrap";
  tabsDiv.style.justifyContent = "space-between";

  function changeLabel(e)
  {
    const radios = document.querySelectorAll("input[type=\"radio\"]");
    radios.forEach((r)=>{
      if(r != e.target)
      {
        r.nextSibling.style.backgroundColor = "rgba(0,0,0,0.8)";
        r.nextSibling.style.color = "rgba(255,255,255,1)"
        r.nextSibling.nextSibling.style.display = "None";
      }
      else {
        r.nextSibling.style.backgroundColor = "rgba(255,255,255, 0.8)";
        r.nextSibling.style.color = "rgba(0,0,0,1)"
        r.nextSibling.nextSibling.style.display = "block";
      }
    });
  }

  let addLabelInputStyle = function(labelElement, inputElement)
  {
    inputElement.style.display = "none";
    if(counter == 1)
    {
      labelElement.style.color = "rgba(0, 0, 0, 1)"
      labelElement.style.backgroundColor = "rgba(255,255,255, 0.8)";
    }
  };
  let addTabLabel = function(tabTitle)
  {
    let inputElement = document.createElement("input");
    inputElement.setAttribute("type", "radio");
    inputElement.setAttribute("id", `tab${counter}`);
    inputElement.setAttribute("name", "radioFam");
    inputElement.addEventListener("click", (e)=>
    {
      changeLabel(e);
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
