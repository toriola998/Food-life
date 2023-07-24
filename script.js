const home = document.querySelector('.home');
const viewBtn = document.querySelector('.view')
const completed = document.querySelector('.profile-completed');

if(home && completed) {
    viewBtn.addEventListener("click", () => {
        home.style.display = "none";
        completed.style.display = "block"
    })
}

const viewFoodBtn = document.querySelector('.view-food');
const viewCleaningBtn = document.querySelector('.view-cleaning')
const foodModal = document.querySelector('.food-overlay')
const cleaningModal = document.querySelector('.cleaning-overlay')

//SHOW MODALS WHEN VIEW STATUS IS CLICKED
if(viewFoodBtn) {
    viewFoodBtn.addEventListener('click', () => {
        foodModal.style.display = "flex"
        document.querySelector('.food-delivery-modal').classList.add('active')
    })
}

if(viewCleaningBtn) {
    viewCleaningBtn.addEventListener('click', () => {
        cleaningModal.style.display = "flex"
        document.querySelector('.cleaning-modal').classList.add('active')
    })
}

//CLOSE MODALS WITH CLOSE ICON
const closeFoodBtn = document.querySelector('.close-food-btn')
const closeCleaningBtn = document.querySelector('.close-cleaning-btn')

if(closeFoodBtn) {
    closeFoodBtn.addEventListener('click', () => {
        foodModal.style.display = "none";
    })
}

if(closeCleaningBtn) {
    closeCleaningBtn.addEventListener('click', () => {
        cleaningModal.style.display = "none" 
    })
}

//REMOVE GIF AFTER PAGE LOADS
const confetti = document.querySelector('.confetti');
if(confetti) {
    /////////PAGE LOADS REALLY FAST, GIF WON'T SHOW AT ALL
    // document.addEventListener('DOMContentLoaded', function () {
    //     confetti.style.display = "none"
    // })
    confetti.style.display = "block"
    setTimeout(() => {
        confetti.style.display = "none"
    }, 4000)

}