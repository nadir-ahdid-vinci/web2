const wish = document.querySelector("#wish");
const submit = document.querySelector("#submit");
const wishForm = document.querySelector("form");
const wishText = document.querySelector("#wish-text");


submit.addEventListener("submit", onSubmit);


const onSubmit = (e) => {
    e.preventDefault();
    wishForm.style.display = 'none';
    wish.innerHTML = wish;
};

