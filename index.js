const express = require("express");
const mysql = require("mysql");
const mysql2 = require("mysql2");
const path = require("path");
const nodemailer = require("nodemailer");

const pool = mysql.createPool({
  connectionLimit: 10,
  host: "localhost", // Replace with the host of your PHPMyAdmin MySQL server
  user: "root", // Replace with your MySQL username
  password: "", // Replace with your MySQL password
  database: "ujjweb", // Replace with the name of your MySQL database
});
const connection = mysql.createConnection({
  host: "localhost", // Replace with the host of your PHPMyAdmin MySQL server
  user: "root", // Replace with your MySQL username
  password: "", // Replace with your MySQL password
  database: "ujjweb", // Replace with the name of your MySQL database
});

// Connect to the MySQL database
connection.connect((error) => {
  if (error) {
    console.error("Error connecting to the database:", error);
    return;
  }
  console.log("Connected to the MySQL database");
});

const app = express();
const port = 3000;
const host = "0.0.0.0";
app.use(express.static("public")); // Serve static files from the "public" directory
app.use(express.json()); // Parse JSON request bodies

app.get("/", (req, res) => {
  res.send("Hello, World!"); // Respond with "Hello, World!" for the root URL
});

//Serve the HOME
app.get("/poetry", (req, res) => {
  res.sendFile(path.join(__dirname, "vers.html")); // Serve the "index.html" file for the "/home" route
});

//Serve the HOME
app.get("/home", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html")); // Serve the "index.html" file for the "/home" route
});

//PROJECTS
app.get("/projects", (req, res) => {
  // Fetch all projects from the "projects" table
  pool.query("SELECT * FROM projects", (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(results); // Respond with the JSON array of projects
    }
  });
});

// API endpoint to load a project by ID
app.get("/projects/:id", (req, res) => {
  const projectId = req.params.id;

  const query = "SELECT * FROM projects WHERE id = ?";

  connection.query(query, [projectId], (error, results) => {
    if (error) {
      console.error("Error loading project:", error);
      res.status(500).json({ error: "Failed to load project" });
    } else {
      if (results.length === 0) {
        res.status(404).json({ error: "Project not found" });
      } else {
        const project = results[0];
        res.status(200).json(project);
      }
    }
  });
});

//UPCOMING PROJECTS
app.get("/upcoming_projects", (req, res) => {
  // Fetch all upcoming projects from the "projects" table
  pool.query("SELECT * FROM upcoming_projects", (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).send("Internal Server Error");
    } else {
      res.json(results); // Respond with the JSON array of upcoming projects
    }
  });
});

// API endpoint to load a project by ID
app.get("/upcoming_projects/:id", (req, res) => {
  const projectId = req.params.id;

  const query = "SELECT * FROM upcoming_projects WHERE id = ?";

  connection.query(query, [projectId], (error, results) => {
    if (error) {
      console.error("Error loading project:", error);
      res.status(500).json({ error: "Failed to load project" });
    } else {
      if (results.length === 0) {
        res.status(404).json({ error: "Project not found" });
      } else {
        const project = results[0];
        res.status(200).json(project);
      }
    }
  });
});

app.post("/send-email", (req, res) => {
  const { to, subject, text } = req.body;

  // Create a transporter using your email service provider's SMTP settings
  const transporter = nodemailer.createTransport({
    service: "Gmailr", // e.g., Gmail, Yahoo, etc.
    host: "smtp.gmail.com",
    auth: {
      user: "norbi.rumli007@gmail.com",
      pass: "ovvgwhhscdxjaxiy", // Replace with your email account's password
    },
  });

  // Configure the email options
  const mailOptions = {
    from: "info@ujjweb.hu", // Sender address
    to, // Recipient(s)
    subject, // Subject line
    text, // Plain text body
  };

  // Send the email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ error: "Failed to send email" });
    } else {
      console.log("Email sent:", info.response);
      res.status(200).json({ message: "Email sent successfully" });
    }
  });
});

app.listen(port, host, () => {
  console.log(`Server running on http://${host}:${port}`);
});
