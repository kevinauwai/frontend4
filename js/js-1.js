console.log(window);
console.dir(window.document);
console.log(document.body);
console.log(document.links);
// document.body.innerHTML="<h1>hello from body</h1>"
// console.log(document.body.innerText);
// document.body.innerText="test";
// console.log(document.body.innerText);
// document.writeln("hello from js");
// console.log(document.body);
document.getElementById("h1").innerHTML="<p> hello from js</p>";
// console.log(document.body);
document.querySelector("#h1 p").innerHTML="<p> second p</p>";