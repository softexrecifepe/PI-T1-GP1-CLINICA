const express = require('express');
const sequelize = require("./src/db/connection.js");
const dotenv = require("dotenv");
const personRoutes = require("./src/routes/personRoutes.js");
const addressRoutes = require("./src/routes/addressRoutes.js");
const contactRoutes = require("./src/routes/contactRoutes.js");
const roleRoutes = require("./src/routes/roleRoutes.js");
const petRoutes = require("./src/routes/petRoutes.js");
const patientRoutes = require("./src/routes/patientRoutes.js");
const cageRoutes = require("./src/routes/cageRoutes.js");
const treatmentRoutes = require("./src/routes/treatmentRoutes.js");
const medicationRutes = require("./src/routes/medicationRoutes.js");
const dailychartRoutes = require("./src/routes/dailyChartRoutes.js");

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use("/person", personRoutes);
app.use("/address", addressRoutes);
app.use("/contact", contactRoutes);
app.use("/role", roleRoutes);
app.use("/pet", petRoutes);
app.use("/patient", patientRoutes);
app.use("/cage", cageRoutes);
app.use("/treatment", treatmentRoutes);
app.use("/medication", medicationRutes);
app.use("/dailyChart", dailychartRoutes);

sequelize.sync().then(() => {
    console.log("Connected to the database and tables synchronized");
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
}).catch((error) => {
    console.error("Error connecting to the database:", error);
});