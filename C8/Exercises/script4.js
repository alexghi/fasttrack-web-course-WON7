
setTimeout(() => {

var button1 = document.querySelector('#button1');


let getAttributes = () => {
    let main = document.querySelector('.main')
main.getAttribute("id");
console.log(main.getAttribute("id"))
};


button1.addEventListener('click', getAttributes)
}, 2000)


