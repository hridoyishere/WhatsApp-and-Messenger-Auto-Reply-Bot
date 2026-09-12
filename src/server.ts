import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import MessageRoute from "./Route/message.route"

dotenv.config();

const app = express();

const PORT = Number(process.env.PORT) || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (_req, res) => {
  res.json({
    message: "Smart Auto Reply Bot Server is running!",
  });
});

app.use("/api/messages",MessageRoute)

const startServer = async () => {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on port ${PORT}`);
  });
};

startServer();
