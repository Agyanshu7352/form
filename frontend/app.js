const { warn } = require("console");

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", async (event) => {
         
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries()); 

        try {
            const response = await fetch("http://localhost:3000/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
                
            });
          
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit form. Check console for details.");
        }
        
    });
});
