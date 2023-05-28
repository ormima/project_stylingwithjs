const but = document.querySelector("button");
const num = document.querySelector("input");
const a = document.getElementById("a");
const b = document.getElementById("b");
const c = document.getElementById("c");
const d = document.getElementById("d");
const e = document.getElementById("e");

but.addEventListener("click", () => {
    console.log("hsl(" + num.value + ", 100%, 50%)");
    a.style.backgroundColor = "hsl(" + num.value + ", 100%, 50%)";
    b.style.backgroundColor = "hsl(" + num.value + ", 80%, 50%)";
    c.style.backgroundColor = "hsl(" + num.value + ", 60%, 50%)";
    d.style.backgroundColor = "hsl(" + num.value + ", 40%, 50%)";
    e.style.backgroundColor = "hsl(" + num.value + ", 20%, 50%)";
})