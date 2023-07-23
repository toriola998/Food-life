const home = document.querySelector('.home');
const viewBtn = document.querySelector('.view')
const completed = document.querySelector('.profile-completed');
console.log(home, viewBtn)

viewBtn.addEventListener("click", function(){
    home.style.display = "none";
    completed.style.display = "block"
})