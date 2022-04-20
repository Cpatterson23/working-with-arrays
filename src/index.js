const myListDiv = document.getElementById("list");
const myNumbers = [
    2,
    4,
    6,
    8,
    12,

];

function myName(name) {
    const h1 = document.createElement("h1");
    h1.innerText = name;
    h1.className = "name";
    myListDiv.appendChild(h1);
}

const multi = myNumbers.map(number => number*2)

multi.forEach( number=> console.log(number));
