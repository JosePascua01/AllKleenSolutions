document.getElementById("submit").addEventListener('click', (event) => {
    // Get user inputs
    const firstName = document.getElementById("first_name").value.trim();
    const lastName = document.getElementById("last_name").value.trim();
    const address = document.getElementById("address").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.querySelector("textarea").value.trim();

    // Basic validation check
    if (!firstName || !lastName || !email || !address || !message) {
      alert("Please fill in all required fields before submitting.");
      return;
    }

    // Construct email content
    const subject = encodeURIComponent("Inquiry about AllKleenSolutions");
    const body = encodeURIComponent(`${message}\r\n\r\nSincerely,\r\n${firstName} ${lastName}\r\n${address}\r\n${phone}\r\n`);

    // Redirect to mail client
    window.location.href = `mailto:esta@allkleensoutions.com?subject=${subject}&body=${body}`;
  });