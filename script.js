const container = document.querySelector("#container");

const redPara = document.createElement("p");
redPara.setAttribute("style", "color: red")
redPara.textContent = "Hey, I'm red!";
container.appendChild(redPara);

const blueH3 = document.createElement("h3");
blueH3.style.color = "blue";
blueH3.textContent = "I'm a blue h3";
container.appendChild(blueH3);