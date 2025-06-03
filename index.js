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


// // seccion info about the company

// // botones

const whoAreWeButton =document.getElementById('who-are-we-button')
const ourMissionButton =document.getElementById('our-mission-button')
const ourStoryButton =document.getElementById('our-story-button')

const whoAreWeCloseButton = document.querySelector('.who-are-we-close')
const ourMissionCloseButton = document.querySelector('.our-mission-close')
const ourStoryCloseButton = document.querySelector('.our-story-close')



// // ventanas

let whoAreWeModal = document.getElementById('who-are-we-modal')
let ourMissionModal = document.getElementById('our-mission-modal')
let ourStoryModal = document.getElementById('our-story-modal')



// // Acciones de botones 

// //who are we

whoAreWeButton.addEventListener('click', ()=>{
  whoAreWeModal.style.display ='block'
})

whoAreWeCloseButton.addEventListener('click', ()=> {
  whoAreWeModal.style.display ='none'
})

// //our mission

ourMissionButton.addEventListener('click', ()=>{
  ourMissionModal.style.display ='block'
})

ourMissionCloseButton.addEventListener('click', ()=> {
  ourMissionModal.style.display ='none'
})

//our story

ourStoryButton.addEventListener('click', ()=>{
  ourStoryModal.style.display ='block'
})

ourStoryCloseButton.addEventListener('click', ()=> {
  ourStoryModal.style.display ='none'
})


// forms buttons check

const checkbox1 = document.getElementById('sms-consent');
  const checkbox2 = document.getElementById('marketing-consent');
  const submitButton = document.querySelector('.home-worth-button');

  function toggleSubmitButton() {
    submitButton.disabled = !(checkbox1.checked && checkbox2.checked);
  }

  checkbox1.addEventListener('change', toggleSubmitButton);
  checkbox2.addEventListener('change', toggleSubmitButton);

