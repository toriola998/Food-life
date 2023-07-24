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
    })
}

if(viewCleaningBtn) {
    viewCleaningBtn.addEventListener('click', () => {
        cleaningModal.style.display = "flex"
    })
}

//CLOSE MODALS WITH CLOSE ICON
const closeFoodBtn = document.querySelector('.close-food-btn')
const closeCleaningBtn = document.querySelector('.close-cleaning-btn')

if(closeFoodBtn) {
    closeFoodBtn.addEventListener('click', () => {
        foodModal.style.display = "none"
    })
}

if(closeCleaningBtn) {
    closeCleaningBtn.addEventListener('click', () => {
        cleaningModal.style.display = "none"
    })
}
