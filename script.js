document.getElementById("contactForm").addEventListener("submit", async function(e){
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const res = await fetch("https://portfolio-lb1j.onrender.com/api/contact", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({name,email,message})
    });

    const data = await res.json();
    document.getElementById("status").innerText = data.message;
});
