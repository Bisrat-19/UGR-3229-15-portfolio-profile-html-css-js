const toggleButton = document.getElementById('toggleButton');
const navList = document.getElementById('navList');

toggleButton.addEventListener('click', () => {
    navList.classList.toggle('active'); 
    console.log("Toggle clicked!"); 
});