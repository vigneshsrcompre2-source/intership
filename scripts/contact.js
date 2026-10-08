const contactForm = document.querySelector("[data-contact-form]");
const formStatus = document.querySelector("[data-form-status]");

if (contactForm instanceof HTMLFormElement && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    const formData = new FormData(contactForm);
    const name = String(formData.get("name")).trim();
    const email = String(formData.get("email")).trim();
    const topic = String(formData.get("topic")).trim();
    const message = String(formData.get("message")).trim();
    const subject = encodeURIComponent(`Portfolio enquiry: ${topic}`);
    const body = encodeURIComponent(`Hi,\n\n${message}\n\n${name}\n${email}`);

    formStatus.textContent = "Opening your email app with the message ready to send.";
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;
  });
}
