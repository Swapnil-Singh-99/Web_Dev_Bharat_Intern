// Function to send the email
function sendEmail() {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const name = document.getElementById("name").value

    Email.send({
        SecureToken : "64754995-024c-4219-b700-82752574d8f0",
        To : 'swapnilskumar99@gmail.com',
        From : "swapnilskumar99@gmail.com",
        Subject : "Contact us from "+name,
        Body : message+"\n\nEmail: "+email
    }).then(
      message => alert(message)
    );
}