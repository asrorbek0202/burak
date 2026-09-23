import express from "express";
import path from "path";  // u fayl va papkalarning yoʻllarini (path/pathway) har qanday operatsion sistemada toʻgʻri va xatosiz ulash (birlashtirish) uchun kerak.

/** 1- ENTRANCE **/

const app = express();
console.log("__dirname:", __dirname);
app.use(express.static(path.join(__dirname, "public"))); // midlware
app.use(express.urlencoded({extended: true}));
app.use(express.json());

/** 2- SESSIONS **/

/** 3- VIEWS **/

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
/** 4- ROUTERS **/

export default app;