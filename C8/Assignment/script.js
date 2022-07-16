<<<<<<< HEAD
const images =[
    {
        link: 'https://images.unsplash.com/photo-1565711561500-49678a10a63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
        name: 'Picture1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        link: 'https://images.unsplash.com/photo-1561542320-9a18cd340469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80',
        name: 'Picture2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        link: 'https://images.unsplash.com/photo-1529511582893-2d7e684dd128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3339&q=80',
        name: 'Picture3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        link: 'https://images.unsplash.com/photo-1559588512-cae70b7dd3d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
        name: 'Picture4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        link: 'https://images.unsplash.com/photo-1632150403063-b067959aafaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80',
        name: 'Picture5',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        link: 'https://images.unsplash.com/photo-1562572766-953b8ab55ae1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        name: 'Picture6',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        link: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
        name: 'Picture7',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        link: 'https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80',
        name: 'Picture8',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        link: 'https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
        name: 'Picture9',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        link: 'https://images.unsplash.com/photo-1474649107449-ea4f014b7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
        name: 'Picture10',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    },
    {
        link: 'https://www.ischgl.com/media/ischgl/ssag_bilder/desktop/pardatschgrat/1920x1080-FullHD.jpg',
        name: 'Picture11',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    }
    
];

var counterImg = -1;


function nextPicture () {
    counterImg++;
    if (counterImg > images.length - 1) { 
        counterImg = 0;
    }
    updateElements();
    hidePicture();
}

function previousPicture () {
    counterImg--;
    if (counterImg < 0) {
        counterImg = images.length - 1;
    }
    updateElements();
    hidePicture();
}

function updateElements () {
    document.getElementById('picture').src = images[counterImg].link;
    document.getElementById('counter').innerText = `${counterImg+1} / ${images.length}`
}

function showPictureInfo () {
    document.getElementById('showContent').hidden = false;
    document.getElementById('description').innerText = images[counterImg].description;
    var name = document.getElementById("name");
    var paragraphName = document.createTextNode(images[counterImg].name);
    name.appendChild(paragraphName);
}

function hidePicture () {
    document.getElementById('showContent').hidden = true;
}
function downloadPicture(){
    window.open(images[counterImg].link, '_blank');
=======
/* const images = [
    'https://images.unsplash.com/photo-1565711561500-49678a10a63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
    'https://images.unsplash.com/photo-1561542320-9a18cd340469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80',
    'https://images.unsplash.com/photo-1529511582893-2d7e684dd128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3339&q=80',
    'https://images.unsplash.com/photo-1559588512-cae70b7dd3d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
    'https://images.unsplash.com/photo-1632150403063-b067959aafaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80',
    'https://images.unsplash.com/photo-1562572766-953b8ab55ae1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
    'https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80',
    'https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
    'https://images.unsplash.com/photo-1474649107449-ea4f014b7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
    'https://images.unsplash.com/photo-1509059852496-f3822ae057bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2145&q=80'
]
 */

const myImages = [
    {
        name: 'picture 1',
        myCustomKey: 'aaa',
        link:  'https://images.unsplash.com/photo-1565711561500-49678a10a63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing'
    },
    {
        name: 'picture 2',
        link: 'https://images.unsplash.com/photo-1561542320-9a18cd340469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing'

    },
    {
        name: 'picture 3',
        link: 'https://images.unsplash.com/photo-1529511582893-2d7e684dd128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3339&q=80',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing'

    },
    {
        name: 'picture 4',
        link: 'https://images.unsplash.com/photo-1559588512-cae70b7dd3d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing'

    },
    {
        name: 'picture 5',
        link: 'https://images.unsplash.com/photo-1632150403063-b067959aafaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing'

    },
    {
        name: 'picture 6',
        link: 'https://images.unsplash.com/photo-1562572766-953b8ab55ae1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing'

    },
    {
        name: 'picture 7',
        link: 'https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing'

    },
    {
        name: 'picture 8',
        link: 'https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing'

    },
    {
        name: 'picture 9',
        link: 'https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing'

    },
    {
        name: 'picture 10',
        link: 'https://images.unsplash.com/photo-1474649107449-ea4f014b7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing'

    },
    {
        name: 'picture 11',
        link: 'https://images.unsplash.com/photo-1509059852496-f3822ae057bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2145&q=80',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing'

    }
]


var counterImg = 0

function nextPhoto() {
    counterImg++;
    if (counterImg > myImages.length - 1) {
        counterImg = 0;
    }
    photoDetails()
}

function previousPhoto () {
    counterImg--;
    if(counterImg < 0) {
        counterImg = myImages.length - 1
    }
    photoDetails()
}

function showPhoto () {
    document.getElementById('showContent').hidden = false;
    document.getElementById('name').innerText = myImages[counterImg].name;
    document.getElementById('description').innerText = myImages[counterImg].description;
}


function photoDetails () {
    document.getElementById("picture").src = myImages[counterImg].link;
    document.getElementById("counter").innerText = `${counterImg + 1} / ${myImages.length}`
}

photoDetails ()


function downloadPhoto() {
    window.open(myImages[counterImg].link);
>>>>>>> 7a1799ff2b8c165459614750083ad9699429a4fd
}