import express from 'express'
import sequelize from "./src/db/connection.js"
import dotenv from "dotenv";
import personRoutes from "./src/routes/personRoutes.js"
import addressRoutes from "./src/routes/addressRoutes.js"
import contactRoutes from "./src/routes/contactRoutes.js"
import roleRoutes from "./src/routes/roleRoutes.js"

dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use("/person", personRoutes);
app.use("/address", addressRoutes);
app.use("/contact", contactRoutes);
app.use("/role", roleRoutes);


sequelize.sync().then(() => {
    console.log("Connected to the database and tables syncronized");
    app.listen(port, () => {
        console.log(`Server is running on port: ${port}`);
    });
}).catch((error) => {
    console.error("Error connecting to the database:", error);
});
