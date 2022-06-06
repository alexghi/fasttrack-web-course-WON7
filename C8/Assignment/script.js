// const images = [
//   "https://images.unsplash.com/photo-1565711561500-49678a10a63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
//   "https://images.unsplash.com/photo-1561542320-9a18cd340469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80",
//   "https://images.unsplash.com/photo-1529511582893-2d7e684dd128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3339&q=80",
//   "https://images.unsplash.com/photo-1559588512-cae70b7dd3d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
//   "https://images.unsplash.com/photo-1632150403063-b067959aafaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80",
//   "https://images.unsplash.com/photo-1562572766-953b8ab55ae1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
//   "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
//   "https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80",
//   "https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
//   "https://images.unsplash.com/photo-1474649107449-ea4f014b7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
//   "https://images.unsplash.com/photo-1509059852496-f3822ae057bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2145&q=80",
// ];

const images = [
  {
    name: "picture1",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: "https://images.unsplash.com/photo-1565711561500-49678a10a63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
  },
  {
    name: "picture2",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: "https://images.unsplash.com/photo-1561542320-9a18cd340469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80",
  },
  {
    name: "picture3",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: "https://images.unsplash.com/photo-1529511582893-2d7e684dd128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3339&q=80",
  },

  {
    name: "picture4",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: "https://images.unsplash.com/photo-1559588512-cae70b7dd3d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
  },
  {
    name: "picture5",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: "https://images.unsplash.com/photo-1632150403063-b067959aafaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80",
  },

  {
    name: "picture6",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: "https://images.unsplash.com/photo-1562572766-953b8ab55ae1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "picture7",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
  },
  {
    name: "picture8",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: "https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80",
  },
  {
    name: "picture9",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: "https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
  },
  {
    name: "picture10",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: "https://images.unsplash.com/photo-1474649107449-ea4f014b7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
  },
  {
    name: "picture11",
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    url: "https://images.unsplash.com/photo-1509059852496-f3822ae057bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2145&q=80",
  },
];


let counterImg = 0;

function nextFoto () {
  counterImg++;
  if (counterImg > images.length - 1) { 
      counterImg = 0;
  }
  updateElements();
  // hideFoto();
}

function previousFoto () {
  counterImg--;
  if (counterImg < 0) {
      counterImg = images.length - 1;
  }
  updateElements();
  // hideFoto();
}

setTimeout(() => {
  document.getElementById('picture').src = images[0].url;
  }, 1000)


function updateElements () {
  document.getElementById('picture').src = images[counterImg].url;
  document.getElementById('counter').innerText = `${counterImg+1} / ${images.length}`
}

function showFoto () {
  document.getElementById('showContent').hidden = false;
  document.getElementById('name').innerText = images[counterImg].name;
  document.getElementById('description').innerText = images[counterImg].description;
}


function hideFoto () {
  document.getElementById('showContent').hidden = true;
}

