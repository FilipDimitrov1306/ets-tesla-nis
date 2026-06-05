document.addEventListener("DOMContentLoaded", function () {

    const contactForm = document.getElementById("contactForm");
    const successAlert = document.getElementById("formSuccess");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            if (!contactForm.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                event.preventDefault();
                successAlert.classList.remove("d-none"); 
                contactForm.reset();
                contactForm.classList.remove("was-validated");
                return false;
            }
            contactForm.classList.add("was-validated");
        }, false);
    }
});