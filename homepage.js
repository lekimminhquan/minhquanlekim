
const intro = setTimeout(Intro,3850);
function Intro(){
   const y = document.getElementById("intro");
    y.remove()
    const x = document.getElementById("trangchus");
    x.classList.remove("home")
}

const nodeList = document.querySelectorAll('.menu__item');
const windonwlink = window.location.pathname;

nodeList.forEach(nodeLists => {
    if (nodeLists.href.includes(windonwlink))
    {
        nodeLists.classList.add("active");
    }
});




setTimeout(Type,6000);

function Type() {
    const z = document.getElementById('object');
    z.style.visibility = "visible";
    z.classList.remove("Removetyping");
    z.classList.add("type");
    setTimeout(removetyping,3000);
}
function Removetype(){
    let y = document.getElementById('object');
    y.classList.remove("type");
    y.classList.add("Removetyping");
    setTimeout(Type,3000);
}

function removetyping(){
    let y = document.getElementById('object');
    y.classList.remove("type");
    setTimeout(Removetype,5000);
}


setTimeout(Image1,6000);
function Image1(){
    const images = document.getElementById('imagee');
    images.classList.remove('image2');
    images.classList.add("image1");
    setTimeout(holdimage,3000);
}

function Image2(){
    const imagess = document.getElementById('imagee');
    imagess.classList.remove("image3");
    imagess.classList.add("image2");
    setTimeout(Image1,3000);
}
function holdimage(){
    const p = document.getElementById('imagee');
    p.classList.remove('image1');
    p.classList.add('image3');
    setTimeout(Image2,5000);
}











