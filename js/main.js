import galleryItems from "./gallery-items.js"

const galleryRef = document.querySelector('.js-gallery')
const lightBoxRef = document.querySelector('.js-lightbox')
const btnModalRef = document.querySelector('button[data-action="close-lightbox"]')
const lightBoxImageRef = document.querySelector('.lightbox__image')
const lightBoxReg = document.querySelector('.lightbox__overlay')

galleryRef.addEventListener('click', event => {

    event.preventDefault() 
    let originalImg = event.target.dataset.source
    openmodal()
    lightBoxImageRef.src = originalImg
})
btnModalRef.addEventListener('click', clousemodal)
lightBoxReg.addEventListener('click', onBackdropClick )  
window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        clousemodal();
    }
        
    
})
const createImgCard = images => {
    const imgList = document.createElement('li');
    imgList.classList.add('gallery__item')
    const imgLink = document.createElement('a')
    imgLink.href = images.original
    imgLink.classList.add('gallery__link')
    const toImgList = document.createElement('img');
  toImgList.classList.add('gallery__image')
    toImgList.src = images.preview
    toImgList.dataset.source =images.original
  toImgList.alt = images.description    
    imgLink.append(toImgList) 
    imgList.append(imgLink)
    return imgList;
}

const imgGallery = galleryItems.map(galleryItems => createImgCard(galleryItems))
galleryRef.append(...imgGallery)

function openmodal() {
    lightBoxRef.classList.add('is-open')
    
    
    
}
function clousemodal() {
    lightBoxRef.classList.remove('is-open')
    lightBoxImageRef.src = ""

    
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
        clousemodal();
  }
}