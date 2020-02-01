function makeTab(tabTitle)
{
  let tabContentDiv = document.createElement("div");
  tabContentDiv.style.backgroundColor = "rgba(255,255,255, 0.8)";
  tabContentDiv.style.width = "100%";
  tabContentDiv.style.display = "None";
  tabContentDiv.style.order = "99";
  switch(tabTitle)
  {
    case 'Our Chef':
      generateChefTab(tabContentDiv);
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

function generateListFromArray(arr)
{
  const list = document.createElement("ul");
  list.style.textAlign = "center";
  for( let i in arr)
  {
    let image = document.createElement("img");
    let item = document.createElement("li");
    image.style.borderRadius = "50%";
    image.src=arr[i];
    image.style.width = "25vh";
    image.style.height = "25vh";
    image.style.display = "block";
    image.style.objectFit = "cover";
    image.style.margin = "0 auto 0 auto";
    image.style.backgroundPosition = "center center";
    image.style.backgroundRepeat = "no-repeat";
    item.style.display = "inline";
    item.style.width = "33%";
    item.innerText = i;

    item.appendChild(image);
    list.appendChild(item);
  }
  return list;
}

function generateChefTab(tabContentDiv)
{
  const chefList = {"Kohei Inuzuka":"https://vignette.wikia.nocookie.net/amaama-to-inazuma/images/6/63/Kouheiprofilesize.jpg",
   "Tsumugi Inuzuka":"https://vignette.wikia.nocookie.net/amaama-to-inazuma/images/1/14/Tsumugiprofilesize.jpg",
   "Kotori Iida": "https://vignette.wikia.nocookie.net/amaama-to-inazuma/images/c/c3/Kotoriprofilesize.png"};
  //const header = document.createElement("h3");
  //header.innerText = "Our Chef";
  //tabContentDiv.appendChild(header);
  tabContentDiv.appendChild(generateListFromArray(chefList));
}

function generateMenuTab()
{

}

function generateContactTab()
{

}


export default makeTab;
