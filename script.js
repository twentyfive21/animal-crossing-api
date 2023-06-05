const characterImage = document.querySelector("img");
const about = document.querySelector("ul");
const button = document.querySelector("button");
const villagerName = document.querySelector("#name");
const birthday = document.querySelector("#birthday");
const saying = document.querySelector("#saying");
const personality = document.querySelector("#personality");
const hobby = document.querySelector("#hobby");

function getVillager () {
const randomCharacter = Math.floor(Math.random() * 391 + 1);
fetch(`https://acnhapi.com/v1/villagers/${randomCharacter}`)
.then((res) => res.json())
.then((json) => {
    const villager = json;
    displayVillager(villager);
})
.catch((err) => console.log(err));
}

// places image 
function setImg (element, imgSrc) {
if(imgSrc === undefined){
    alert("No image available for this villager :(");
} 
 element.setAttribute("src", imgSrc);
}

function getAbout (element, string ) {
 element.innerText = string;
}

function displayVillager (villager) {
    setImg(characterImage, villager.image_uri);
    getAbout(villagerName, `Name: ${villager.name["name-USen"]}`);
    getAbout(birthday, `Birthday: ${villager["birthday-string"]}`);
    getAbout(saying, `Saying: ${villager.saying}`);
    getAbout(personality, `Personality: ${villager.personality}`);
    getAbout(hobby, `Hobby: ${villager.hobby}`);
}

button.addEventListener("click", function () {
    getVillager();
  });

  getVillager();