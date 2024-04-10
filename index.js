// Menu inicio
const closeMenuButton = document.getElementById('close-menu-button')
const whatWeDoItem = document.getElementById('what-we-do-item')
const howToSell = document.getElementById('how-to-sell-item')
const whoAreWeItem = document.getElementById('who-are-we-item')
const meetTheBrokerItem = document.getElementById('meet-the-broker-item')
const howToBuyAHomeItem = document.getElementById('how-to-buy-a-home-item')
const clientsTestimonialsItem = document.getElementById('clients-testimonials-item')
const featuredListingsItem = document.getElementById('featured-listings-item')
const joinUsItemItem = document.getElementById('join-us-item')
const givingBackItem = document.getElementById('giving-back-item')
const homeItem =document.getElementById('home-item')


const navBarInput = document.querySelector('.navbar-input')

closeMenuButton.addEventListener('click', ()=> {
  navBarInput.checked = false
})

homeItem.addEventListener('click', ()=>{
  navBarInput.checked = false
} )

whatWeDoItem.addEventListener('click', ()=>{
  navBarInput.checked = false
})
whoAreWeItem.addEventListener('click', ()=>{
  navBarInput.checked = false
})
howToSell.addEventListener('click', ()=>{
  navBarInput.checked = false
})
meetTheBrokerItem.addEventListener('click', ()=>{
  navBarInput.checked = false
})
howToBuyAHomeItem.addEventListener('click', ()=>{
  navBarInput.checked = false
})
clientsTestimonialsItem.addEventListener('click', ()=>{
  navBarInput.checked = false
})
// featuredListingsItem.addEventListener('click', ()=>{
//   navBarInput.checked = false
// })
joinUsItemItem.addEventListener('click', ()=>{
  navBarInput.checked = false
})
// givingBackItem.addEventListener('click', ()=>{
//   navBarInput.checked = false
// })



// seccion what we do

// botones

const cashOfferButton =document.getElementById('cash-offer-button')
const termsButton =document.getElementById('terms-button')
const openMarketButton =document.getElementById('open-market-button')

const cashOfferCloseButton = document.querySelector('.cash-offer-close')
const termsCloseButton = document.querySelector('.terms-close')
const openMarketCloseButton = document.querySelector('.open-market-close')



// ventanas

let cashOfferModal = document.getElementById('cash-offer')
let termsModal = document.getElementById('terms')
let openMarketModal = document.getElementById('open-market')



// Acciones de botones 

//Cash offer

cashOfferButton.addEventListener('click', ()=>{
  cashOfferModal.style.display ='block'
})

cashOfferCloseButton.addEventListener('click', ()=> {
  cashOfferModal.style.display ='none'
})

//terms

termsButton.addEventListener('click', ()=>{
  termsModal.style.display ='block'
})

termsCloseButton.addEventListener('click', ()=> {
  termsModal.style.display ='none'
})

//Open Market

openMarketButton.addEventListener('click', ()=>{
  openMarketModal.style.display ='block'
})

openMarketCloseButton.addEventListener('click', ()=> {
  openMarketModal.style.display ='none'
})





// seccion who are we


const whoAreWeBtn = document.getElementById('who-are-we-btn')
const ourMissionBtn = document.getElementById('our-mission-btn')
const ourStoryBtn = document.getElementById('our-story-btn')



const whoAreWeCloseBtn = document.querySelector('.who-are-we-close-btn')
const ourMissionCloseBtn = document.querySelector('.our-mission-close-btn')
const ourStoryCloseBtn = document.querySelector('.our-story-close-btn')


let whoAreWeText = document.querySelector('.who-are-we-card')
let ourMissionText = document.querySelector('.our-mission-card')
let ourStoryText = document.querySelector('.our-story-card')
let companyInfoLogo = document.querySelector('.who-are-we-clever')

// who are we buttons

whoAreWeBtn.addEventListener('click', ( ) => {
  whoAreWeText.style.height = 'auto'
  whoAreWeText.style.clipPath = 'circle(100% at 50% 50%)'
  ourMissionText.style.height = '0'
  ourMissionText.style.clipPath = 'circle(0.0% at 50% 50%)'
  ourStoryText.style.height = '0'
  ourStoryText.style.clipPath = 'circle(0.0% at 50% 50%)'
  companyInfoLogo.style.height ='0'
  companyInfoLogo.style.width = '0'
  companyInfoLogo.style.overflow = 'hidden'
})

ourMissionBtn.addEventListener('click', ()=> {
  whoAreWeText.style.height = '0'
  whoAreWeText.style.clipPath = 'circle(0.0% at 50% 50%)';
  ourMissionText.style.height = 'auto'
  ourMissionText.style.clipPath = 'circle(100% at 50% 50%)';
  ourStoryText.style.height = '0'
  ourStoryText.style.clipPath = 'circle(0.0% at 50% 50%)';
  
})

ourStoryBtn.addEventListener('click', ()=> {
  whoAreWeText.style.height = '0'
  whoAreWeText.style.clipPath = 'circle(0.0% at 50% 50%)'; 
  ourMissionText.style.height = '0' 
  ourMissionText.style.clipPath = 'circle(0.0% at 50% 50%)';
  ourStoryText.style.height = 'auto'
  ourStoryText.style.clipPath = 'circle(100% at 50% 50%)';
  
})

whoAreWeCloseBtn.addEventListener('click', ()=> {
  whoAreWeText.style.clipPath = 'circle(0.0% at 50% 50%)';
  ourMissionText.style.clipPath = 'circle(0.0% at 50% 50%)';
  ourStoryText.style.clipPath = 'circle(0.0% at 50% 50%)';
  
})

ourMissionCloseBtn.addEventListener('click', ()=> {
  whoAreWeText.style.clipPath = 'circle(0.0% at 50% 50%)';
  ourMissionText.style.clipPath = 'circle(0.0% at 50% 50%)';
  ourStoryText.style.clipPath = 'circle(0.0% at 50% 50%)';
  
})

ourStoryCloseBtn.addEventListener('click', ()=> {
  whoAreWeText.style.clipPath = 'circle(0.0% at 50% 50%)';
  ourMissionText.style.clipPath = 'circle(0.0% at 50% 50%)';
  ourStoryText.style.clipPath = 'circle(0.0% at 50% 50%)';
  
})







