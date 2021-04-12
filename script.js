const container = document.querySelector("#container");

const redPara = document.createElement("p");
redPara.setAttribute("style", "color: red")
redPara.textContent = "Hey, I'm red!";
container.appendChild(redPara);

const blueH3 = document.createElement("h3");
blueH3.style.color = "blue";
blueH3.textContent = "I'm a blue h3";
container.appendChild(blueH3);

const div = document.querySelector("div");
div.style.cssText = "border: 1px solid black; background: pink;)";
container.appendChild(div);

const h1 = document.querySelector("h1");
h1.textContent = "I'm in a div";
div.appendChild(h1);

const p = document.querySelector("p");
p.textContent = "ME TOO!";
div.appendChild(p);

