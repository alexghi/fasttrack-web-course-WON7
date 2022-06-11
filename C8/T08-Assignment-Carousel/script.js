// const images = [
//     'https://images.unsplash.com/photo-1565711561500-49678a10a63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
//     'https://images.unsplash.com/photo-1561542320-9a18cd340469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80',
//     'https://images.unsplash.com/photo-1529511582893-2d7e684dd128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3339&q=80',
//     'https://images.unsplash.com/photo-1559588512-cae70b7dd3d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
//     'https://images.unsplash.com/photo-1632150403063-b067959aafaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80',
//     'https://images.unsplash.com/photo-1562572766-953b8ab55ae1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
//     'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
//     'https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80',
//     'https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
//     'https://images.unsplash.com/photo-1474649107449-ea4f014b7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
//     'https://images.unsplash.com/photo-1509059852496-f3822ae057bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2145&q=80'
// ]


const myImages = [
    {
        number: 1,
        name: 'picture 1',
        description: 'This is picture 1',
        url:  'https://images.unsplash.com/photo-1565711561500-49678a10a63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
    },
    {
        number: 2,
        name: 'picture 2',
        description: 'This is picture 2',
        url: 'https://images.unsplash.com/photo-1561542320-9a18cd340469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80',
    },
    {
        number: 3,
        name: 'picture 3',
        description: 'This is picture 3',
        url: 'https://images.unsplash.com/photo-1529511582893-2d7e684dd128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3339&q=80',
    },
    {
        number: 4,
        name: 'picture 4',
        description: 'This is picture 4',
        url: 'https://images.unsplash.com/photo-1561542320-9a18cd340469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80',
    },
    {
        number: 5,
        name: 'picture 5',
        description: 'This is picture 5',
        url: 'https://images.unsplash.com/photo-1632150403063-b067959aafaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80',
    },
    {
        number: 6,
        name: 'picture 6',
        description: 'This is picture 6',
        url:  'https://images.unsplash.com/photo-1562572766-953b8ab55ae1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
        number: 7,
        name: 'picture 7',
        description: 'This is picture 7',
        url:  'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
    },
    {
        number: 8,
        name: 'picture 8',
        description: 'This is picture 8',
        url: 'https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80',
    },
    {
        number: 9,
        name: 'picture 9',
        description: 'This is picture 9',
        url: 'https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
    },
    {
        number: 10,
        name: 'picture 10',
        description: 'This is picture 10',
        url:  'https://images.unsplash.com/photo-1509059852496-f3822ae057bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2145&q=80',
    },
    {
        number: 11,
        name: 'picture 11',
        description: 'This is picture 11',
        url: 'https://images.unsplash.com/photo-1474649107449-ea4f014b7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
    }
]

const myImagesIndex = myImages.map((index) => {
        const myIndex = index;
        console.log(myIndex);
    // NOTA: nu stiu ce nu am priceput din lectia cu Closures, dar nu reusesc sa folosesc variabilele de mai jos in afara acestui bloc de cod.
        // var imageNumber = index.number;
        // console.log(imageNumber);
        // const imageName = index.name;
        // console.log(imageName);
        // const imageDescription = index.description;
        // console.log(imageDescription);
        // let imageURL = index.url;
        // console.log(imageURL);
      });    
var imageNumber =  myImages.map(({ number }) => number);
      console.log(imageNumber);
var imageURL = myImages.map(({ url }) => url);
      console.log(imageURL);
var imageName = myImages.map(({ name }) => name);
      console.log(imageName);    
var imageDescription = myImages.map(({ description } ) => description);
      console.log(imageDescription);

var initialCounter = 1;
console.log('imageCounter este ', initialCounter)

function nextImage() {
    initialCounter++;
    if(initialCounter > myImages.length) {
        initialCounter = 1;
    }
    if(initialCounter < myImages.length) {
        document.getElementById("imageNo").innerHTML = `${imageNumber[initialCounter]} / 11`;
        document.getElementById("currentImage").src = `${imageURL[initialCounter]}`;
        document.getElementById("picName").innerHTML = `${imageName[initialCounter]}`; 
        document.getElementById("picDescription").innerHTML = `${imageDescription[initialCounter]}`;
    }
    hideInfo();
}

function previousImage() {
    initialCounter--;
    if(initialCounter < 0) {
        initialCounter = myImages.length;
    }
    if(initialCounter < myImages.length) {
        document.getElementById("imageNo").innerHTML = `${imageNumber[initialCounter]} / 11`;
        document.getElementById("currentImage").src = `${imageURL[initialCounter]}`;
        document.getElementById("picName").innerHTML = `${imageName[initialCounter]}`; 
        document.getElementById("picDescription").innerHTML = `${imageDescription[initialCounter]}`;
    }
}


function imageDetails() {
    // document.querySelector(".hide").hidden = 'visible';
    document.getElementsByClassName("hide").hidden = false;
}
console.log(imageDetails());

function hideInfo() {
    // document.getElementById("info").hide = true;
    document.getElementsByClassName("hide").hidden = true;
}

let downloadButton = document.getElementById("dB");
let downloadImage = document.getElementById("picture");
    downloadButton.addEventListener('click', () => {
    let downloadPath = img.getAttribute("src");
    saveAs(downloadPath)
})
// function downloadImage() {
//     window.open(myImages[initialCounter].url, '_blank');
// }




// function downloadImage() {
//     document.getElementById("currentImage").src = `${imageURL[initialCounter]}`;
//     document.getElementById("currentImage").src = '_blank';
// }

// const downloadButton = document.getElementById("picDownload");
// function downloadImage() {
//     document.getElementById("currentImage").src = `${imageURL[initialCounter]}`, '_blank';
//     // document.getElementById("currentImage").src = '_blank';
// }
// downloadButton.addEventListener('onclick', downloadImage);

// const currentImage = document.querySelector("currentImage");
// const prevButton = document.querySelector("previous");
// // prevButton.addEventListener("click", previousImage);
// const nextButton = document.querySelector("next");
// // nextButton.addEventListener("click", nextImage);





// myImages.forEach((item, index) => {
//     console.log(`${index}: ${item.name}`);
//    //  const currentImage = myImages[i].url;
//     document.getElementById("currentImage").innerHTML = currentImage;
//     return `${index}: ${item.name}`
//    })

// let imageURL = myImages.map(({ url }) => url);
//     console.log(imageURL);
// let imageName = myImages.map(({ name }) => name);
//     console.log(imageName);    
// let imageDescription = myImages.map(({ description } ) => description);
//     console.log(imageDescription);

