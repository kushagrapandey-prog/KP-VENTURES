// KP VENTURES - Website Animations

document.addEventListener("DOMContentLoaded", function () {

    const elements = document.querySelectorAll(
        ".hero-content, .hero-visual, .about, .service-card, .contact"
    );

    elements.forEach(function (element) {
        element.classList.add("reveal");
    });

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }

        });

    }, {
        threshold: 0.15
    });

    elements.forEach(function (element) {
        observer.observe(element);
    });

});// KP VENTURES - Email Enquiry Form

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
    enquiryForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("clientName").value;
        const email = document.getElementById("clientEmail").value;
        const service = document.getElementById("clientService").value;
        const details = document.getElementById("projectDetails").value;

        const subject = encodeURIComponent("New Project Enquiry - KP Ventures");

        const body = encodeURIComponent(
            "Name: " + name +
            "\nEmail: " + email +
            "\nService: " + service +
            "\nProject Details: " + details
        );

        const mailtoLink =
            "mailto:kushagrapandey527@gmail.com?subject=" +
            subject + "&body=" + body;

        window.location.href = mailtoLink;
    });
}