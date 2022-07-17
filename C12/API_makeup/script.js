const makeup = document.querySelector(".makeup");
let brands = ["maybelline", "NYX", "Dior"];
 clicked = 0;
function getMakeup(){
    for(let i=0; i<3; i++) {
        fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=" + brands[i])
        .then(res=>res.json())
        .then(data=>{ 
            for(let j=0; j <= 4; j++) {
                const html = `
                <div class="info">
                    <h2>${data[j].name}</h2>
                    <h3>Price ${data[j].price}</h3>
                    <img src=${data[j].image_link}>
                    <div>
            `;
            makeup.insertAdjacentHTML('beforeend', html);
            clicked = clicked + 1;
            console.log(clicked);
            if(clicked >= 16){
                makeup.removeChild(makeup.firstElementChild);
            }

            }
        })
        //.catch(err => console.error(`Something went wrong 💥💥. Try again!`));
    }
}

