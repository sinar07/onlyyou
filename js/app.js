const yes = document.querySelector("#yes");
const no = document.querySelector("#no");
const photo = document.querySelector("#photo");
const text = document.querySelector("#text");
const vid = document.querySelector("video");
let count = 2;

const photos = [
  "./resources/cat-heart.gif",
  "./resources/cahayaku.jpg",
  "./resources/cahaya1.jpg",
  "./resources/cahaya7.jpg",
  "./resources/cahaya3.jpg",
  "./resources/cahaya5.jpg"
];

// to load the gifs faster
photos.forEach(gifSrc => {
  const img = new Image();
  img.src = gifSrc;
});

// changes for when NO button is clicked
no.addEventListener("click", () => {
  if (count == 2) {
    photo.src = "./resources/cahayaku.jpg";// gif credit: https://knowyourmeme.com/photos/2738959-mr-fresh-side-eye-cat
    text.innerHTML = " Pencet yang bener sih🤨";
    yes.style.height = "65%";
    yes.style.width = "60%";
    no.style.width = "30%";
    count++;
  } else if (count == 3) {
    photo.src = "./resources/cahaya7.jpg";// gif credit: https://tenor.com/view/tkthao219-peach-goma-gif-25008901
    text.innerHTML = "Tuh kan masih aja boong🥹";
    yes.style.height = "70%";
    yes.style.width = "70%";
    no.style.width = "20%";
    count++;
  } else if (count == 4) {
    photo.src = "./resources/cahaya3.jpg";// gif credit: https://tenor.com/view/cat-kitty-gif-25340141
    text.innerHTML = "Pencet yang bener neng🥺";
    yes.style.height = "80%";
    yes.style.width = "80%";
    no.style.fontSize = "4vh";
    no.style.width = "10%";
    count++;
  } else if (count == 5) {
    photo.src = "./resources/cahaya5.jpg";// gif credit: https://tenor.com/view/cat-gif-10173437195524493032
    text.innerHTML = "Neng, Serius ah😘";
    yes.style.height = "90%";
    yes.style.width = "96%";
    no.style.display = "none";
  }
});

// changes for when YES button is clicked
yes.addEventListener("click", () => {
  vid.style.display = "block";
  photo.src = "./resources/cahaya4.jpg";// gif credit: https://tenor.com/view/peach-cat-kiss-animated-love-mwah-gif-25743978
  text.innerHTML = "Tuhkan Ketahuan Kabogoh Aing 😘";
  yes.innerHTML = '<a href="https://www.instagram.com/gadingsct14/">Message me</a>';// inside the " " put your social media profile link
  yes.style.height = "90%";
  yes.style.width = "96%";
  no.style.display = "none";
  setTimeout(() => {
    vid.style.display = "none";
  }, 9000);
});
