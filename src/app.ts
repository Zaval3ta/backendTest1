import app from "@server/server";
import dotenv from 'dotenv';
import "@config/mongodb";

dotenv.config();

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`); 
})