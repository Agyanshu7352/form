const express = require("express");
const app = express();
const path = require("path");


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, 'public')));


let port = 3000;


app.post("/submit", (req, res) => {
    const { username, full_address, email, mobile_no, dob, gender, marriage_status, message } = req.body;

    console.log("Received Data:", req.body);

    res.render("home.ejs", { username, full_address, email, mobile_no, dob, gender, marriage_status, message });
});


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


