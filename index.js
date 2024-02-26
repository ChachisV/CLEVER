const whoAreWeBtn = document.getElementById('who-are-we-btn')
const ourMissionBtn = document.getElementById('our-mission-btn')
const ourStoryBtn = document.getElementById('our-story-btn')
const logoNavbarButton = document.querySelector('.logo-navbar')
const menuNavbarButton = document.getElementById('menu-button-navbar')
const whoAreWeCloseBtn = document.querySelector('.who-are-we-close-btn')
const ourMissionCloseBtn = document.querySelector('.our-mission-close-btn')
const ourStoryCloseBtn = document.querySelector('.our-story-close-btn')


let whoAreWeText = document.querySelector('.who-are-we-card')
let ourMissionText = document.querySelector('.our-mission-card')
let ourStoryText = document.querySelector('.our-story-card')
let menu = document.getElementById('menu')


logoNavbarButton.addEventListener('click', ()=>{
  window.location.reload()
  window.scrollTo(0, -1000)
})

menuNavbarButton.addEventListener('click', () =>{
  if (menu.style.display === 'block'){
    menu.style.display = 'none'
  } else {
    menu.style.display = 'block'
  }
})



whoAreWeBtn.addEventListener('click', ( ) => {
  whoAreWeText.style.display = 'block';
  ourMissionText.style.display = 'none';
  ourStoryText.style.display = 'none';
})

ourMissionBtn.addEventListener('click', ()=> {
  whoAreWeText.style.display = 'none';
  ourMissionText.style.display = 'block';
  ourStoryText.style.display = 'none';
})

ourStoryBtn.addEventListener('click', ()=> {
  whoAreWeText.style.display = 'none';
  ourMissionText.style.display = 'none';
  ourStoryText.style.display = 'block';
})

whoAreWeCloseBtn.addEventListener('click', ()=> {
  whoAreWeText.style.display = 'none';
  ourMissionText.style.display = 'none';
  ourStoryText.style.display = 'none';
})

ourMissionCloseBtn.addEventListener('click', ()=> {
  whoAreWeText.style.display = 'none';
  ourMissionText.style.display = 'none';
  ourStoryText.style.display = 'none';
})

ourStoryCloseBtn.addEventListener('click', ()=> {
  whoAreWeText.style.display = 'none';
  ourMissionText.style.display = 'none';
  ourStoryText.style.display = 'none';
})

