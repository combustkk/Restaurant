const menuList = ["Pot Rice", "Pork Soup", "Hamburger Steak", "Veggie Gratin", "Special Doughnuts", "Gyoza", "Gohei Mochi", "Squid and Taro Stew", "Curry", "Namero and Sangayaki", "Sweet Potato Crêpe", "Okonomiyaki"];
const chefList = {"Kohei Inuzuka":"https://vignette.wikia.nocookie.net/amaama-to-inazuma/images/6/63/Kouheiprofilesize.jpg",
 "Tsumugi Inuzuka":"https://vignette.wikia.nocookie.net/amaama-to-inazuma/images/1/14/Tsumugiprofilesize.jpg",
 "Kotori Iida": "https://vignette.wikia.nocookie.net/amaama-to-inazuma/images/c/c3/Kotoriprofilesize.png"};

function makeTab(tabTitle)
{
  let tabContentDiv = document.createElement("div");
  tabContentDiv.classList.add("tab");
  switch(tabTitle)
  {
    case 'Our Chef':
      generateChefTab(tabContentDiv);
      tabContentDiv.style.display = "block";
      break;
    case 'Our Menu':
      generateMenuTab(tabContentDiv);
      break;
    case 'Contact Us':
      generateContactTab(tabContentDiv);
      break;
  }
  return tabContentDiv;
};

function generateImgListFromDict(arr)
{
  const list = document.createElement("ul");
  list.style.textAlign = "center";
  for( let i in arr)
  {
    let image = document.createElement("img");
    let item = document.createElement("li");
    image.src=arr[i];
    item.style.display = "inline";
    item.innerText = i;

    item.appendChild(image);
    list.appendChild(item);
  }
  return list;
}

function generateListFromArr(arr)
{
  const list = document.createElement("ul");
  list.style.textAlign = "center";
  for( let i of arr)
  {
    let item = document.createElement("li");
    item.innerText = i;
    list.appendChild(item);
  }
  return list;
}


function generateChefTab(tabContentDiv)
{

  //const header = document.createElement("h3");
  //header.innerText = "Our Chef";
  //tabContentDiv.appendChild(header);
  tabContentDiv.appendChild(generateImgListFromDict(chefList));
}

function generateMenuTab(tabContentDiv)
{
  tabContentDiv.appendChild(generateListFromArr(menuList));
}

function generateContactTab(tabContentDiv)
{
  const linkDiv = document.createElement("div");
  linkDiv.id = "linkDiv";
  const link = document.createElement("a");
  link.setAttribute("href", "https://amaama-to-inazuma.fandom.com/wiki/Amaama_to_Inazuma_Wikia");
  link.innerText = "Check us out on our fandom wiki";
  linkDiv.appendChild(link);
  tabContentDiv.appendChild(linkDiv);
}


export default makeTab;
