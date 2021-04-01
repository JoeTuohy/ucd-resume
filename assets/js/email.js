function sendMail(contactForm) {
    emailjs.send("Gmail","EmailTemplate",{
        "from_name": contactForm.name.value,
        "from_email": contactForm.email.value,
        "prject_request": contactForm.projectSummary.value
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    )
}