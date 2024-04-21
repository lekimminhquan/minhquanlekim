const nodeList = document.querySelectorAll('.menu__item');
const windonwlink = window.location.pathname;

nodeList.forEach(nodeLists => {
    if (nodeLists.href.includes(windonwlink))
    {
        nodeLists.classList.add("active");
    }
});




