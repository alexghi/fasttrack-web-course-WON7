const images = [
  "https://images.unsplash.com/photo-1565711561500-49678a10a63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
  "https://images.unsplash.com/photo-1561542320-9a18cd340469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80",
  "https://images.unsplash.com/photo-1529511582893-2d7e684dd128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3339&q=80",
  "https://images.unsplash.com/photo-1559588512-cae70b7dd3d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
  "https://images.unsplash.com/photo-1632150403063-b067959aafaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80",
  "https://images.unsplash.com/photo-1562572766-953b8ab55ae1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
  "https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80",
  "https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
  "https://images.unsplash.com/photo-1474649107449-ea4f014b7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
  "https://images.unsplash.com/photo-1509059852496-f3822ae057bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2145&q=80",
];

const myImages = [
  {
    name: "picture 1",
    description:
      "In a professional context it often happens that private or corporate clients corder",
    url: "https://images.unsplash.com/photo-1565711561500-49678a10a63f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
  },
  {
    name: "picture 2",
    description: "Lorem ipsum dolor sit amet, unum expetendis quo ad.",
    url: "https://images.unsplash.com/photo-1561542320-9a18cd340469?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3000&q=80",
  },
  {
    name: "picture 3",
    description:
      "Lorem ipsum dolor sit amet, unum expetendis quo ad. Qui ubique ocurreret no, per an discere epicurei",
    url: "https://images.unsplash.com/photo-1529511582893-2d7e684dd128?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3339&q=80",
  },
  {
    name: "picture 4",
    description:
      "Lorem ipsum dolor sit amet. Hic eveniet labore quo cumque dicta ut totam laudantium in sunt tempora.",
    url: "https://images.unsplash.com/photo-1559588512-cae70b7dd3d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
  },
  {
    name: "picture 5",
    description:
      "Ab nisi veniam sit illum molestiae aut ducimus quia sed sunt quia ut nobis architecto ut quia esse.",
    url: "https://images.unsplash.com/photo-1632150403063-b067959aafaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80",
  },
  {
    name: "picture 6",
    description:
      "Ad possimus dolores eum tempore repellendus et itaque cumque et galisum.",
    url: "https://images.unsplash.com/photo-1562572766-953b8ab55ae1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    name: "picture 7",
    description: " Ut odit quia ut veniam autem ut repudiandae ipsam.",
    url: "https://images.unsplash.com/photo-1495107334309-fcf20504a5ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
  },
  {
    name: "picture 8",
    description: "Eos neque eius est culpa natus non perferendis fugiat.",
    url: "https://images.unsplash.com/photo-1617575521317-d2974f3b56d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2748&q=80",
  },
  {
    name: "picture 9",
    description: "Vel rerum eos asperiores accusantium",
    url: "https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
  },
  {
    name: "picture 10",
    description: "Ad possimus dolores eum tempore repellendus et itaque cumque",
    url: "https://images.unsplash.com/photo-1474649107449-ea4f014b7e9f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80",
  },
  {
    name: "picture 11",
    description: "Vel rerum eos asperiores accusantium et quaerat corporis.",
    url: "https://images.unsplash.com/photo-1509059852496-f3822ae057bf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2145&q=80",
  },
];

var index = 0;
var element;
var firstPhoto;
var picture;
var btnDownload;
var nameElem;

function updateDetails() {
  picture.src = myImages[index].url;
  element.textContent = index + 1 + "/" + myImages.length;
  btnDownload.classList.add("hidden");
  nameElem.classList.add("hidden");
  descriptionElem.classList.add("hidden");
}
function nextBtn() {
  index++;
  if (index == myImages.length) {
    index = 0;
  }
  updateDetails();
}

function previousBtn() {
  index--;
  if (index < 0) {
    index = myImages.length - 1;
  }
  updateDetails();
}

function showDetails() {
  btnDownload.classList.remove("hidden");
  descriptionElem.classList.remove("hidden");
  descriptionElem.textContent = myImages[index].description;
  nameElem.classList.remove("hidden");
  nameElem.textContent = myImages[index].name;
}

document.addEventListener("DOMContentLoaded", (event) => {
  element = document.querySelector(".photo--index");
  picture = document.getElementById("picture");
  btnDownload = document.querySelector(".btn--download");
  descriptionElem = document.querySelector(".description");
  nameElem = document.querySelector(".name");
  element.textContent = index + 1 + "/" + myImages.length;
  document.querySelector(".btn--next").addEventListener("click", nextBtn);
  document
    .querySelector(".btn--previous")
    .addEventListener("click", previousBtn);
  document.querySelector(".pic").addEventListener("click", showDetails);
  btnDownload.addEventListener("click", function () {
    window.open(myImages[index].url);
  });
});
