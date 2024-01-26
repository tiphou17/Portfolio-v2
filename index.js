var menuButton = document.getElementById('burger-button');
var closeButton = document.getElementById('close-button');
var menuList = document.getElementById('menu-list');

menuButton.addEventListener('click', ()=>{
    closeButton.style.display = 'block';
    menuButton.style.display = 'none';
    menuList.style.display = 'flex';
    menuList.style.animation = 'FadeIn 1.5s ease 0s 1 normal forwards'
    menuList.style.animationPlayState = "running"
})

closeButton.addEventListener('click', () => {
    closeButton.style.display = 'none';
    menuButton.style.display = 'block';
    menuList.style.animation = "FadeOut 1.5s ease 0s 1 normal forwards";
    menuList.style.animationPlayState = "running";

})