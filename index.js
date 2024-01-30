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

//barre de techno
var technolist = [
    {nom : 'html', achievementPercentage : 0.8},
    {nom : 'css', achievementPercentage : 0.6},
    {nom : 'php', achievementPercentage : 0.1},
    {nom : 'javascript', achievementPercentage : 0.5},
    {nom : 'python', achievementPercentage : 0.3}
];

//le stroke correspond au périmètre du cercle (pi * 2 * r)
technolist.forEach((techno)=>{
    var percentToStroke = 218-(techno.achievementPercentage)*218
    document.getElementsByClassName(techno.nom)[0].style.setProperty('--strokeVar', percentToStroke)
})


document.getElementById('techno-logo').addEventListener("mouseover",()=>{
    document.getElementById('techno-progress-bar').style.display = 'flex';
})

document.getElementById('techno-progress-bar').addEventListener("mouseout",()=>{
    document.getElementById('techno-progress-bar').style.display = 'none';
})


