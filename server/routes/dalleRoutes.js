import express from "express";
import * as dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

const router = express.Router();

const openai = new OpenAI({
  organization: "org-iEx4DndRePUEoUwVlTjRtRvq",
  apiKey: process.env.OPENAI_API_KEY,
});

router.route("/").post(async (req, res) => {
  try {
    const { prompt } = req.body;
    const aiResponse = await openai.images.generate({
      prompt,
      n: 1,
      size: "256x256",
      response_format: "b64_json",
    });
    const image = aiResponse.data[0].b64_json;
    res.status(200).json({ photo: image });
  } catch (err) {
    console.log(err);
    res.status(500).send("err?.response.data.error.message");
  }
});

export default router;
