const axios = require("axios");

const API_KEY = process.env.COGNIFY_API_KEY;

if (!API_KEY) {
  throw new Error("Set the COGNIFY_API_KEY environment variable before running this example.");
}

const api = axios.create({
  baseURL: "https://api.cognifyapi.com",
  headers: {
    "x-cognifyapi-key": API_KEY,
  },
});

const videoId = "Af6i6ChAVTw";
const commentKey = "EhpVZ3pDUThLWnAxZVA4QWhnSEdsNEFhQUJBZyAoKAE=";

const requests = [
  {
    name: "YouTube Search",
    path: "/youtube-search",
    params: { query: "Mr Beast" },
  },
  {
    name: "YouTube Video Search",
    path: "/youtube-video-search",
    params: { query: "Mr Beast" },
  },
  {
    name: "YouTube Channel Search",
    path: "/youtube-channel-search",
    params: { query: "Mr Beast" },
  },
  {
    name: "YouTube Shorts Search",
    path: "/youtube-shorts-search",
    params: { query: "Mr Beast" },
  },
  {
    name: "YouTube Video Details",
    path: "/youtube-video-details",
    params: { videoId },
  },
  {
    name: "YouTube Video Comments",
    path: "/youtube-video-comments",
    params: { videoId },
  },
  {
    name: "YouTube Video Reply Comments",
    path: "/youtube-video-reply-comments",
    params: { videoId, commentKey },
  },
];

async function runExamples() {
  for (const request of requests) {
    try {
      const response = await api.get(request.path, {
        params: request.params,
      });
      console.log(`${request.name}:`, response.data);
    } catch (error) {
      console.error(
        `${request.name} failed:`,
        error.response?.data || error.message
      );
    }
  }
}

runExamples();
