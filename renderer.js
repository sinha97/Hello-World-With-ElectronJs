const h1 = document.getElementById('h1')[0];
const alertBtn = document.getElementById('alert-btn');
const changeTextBtn = document.getElementById('change-text-btn');

alertBtn.addEventListener("click", () => {
    console.log('alert');
    alert("Hello World With electron")
})

changeTextBtn.addEventListener('click', () => {
    console.log("Text Changed");
    h1.textContent="Tata Bye Bye"
})