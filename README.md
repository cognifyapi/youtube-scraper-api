# YouTube Scraper API by CognifyAPI - Implementation Guide

A guide for integrating the **YouTube Scraper API** from [CognifyAPI](https://cognifyapi.com) to search YouTube content and retrieve video, channel, and comment information and
get search data with JSON results.

#### Free trial. No credit card required.

[![Start Now](https://img.shields.io/badge/Start%20Now-🚀-blue?style=for-the-badge&logo=google-cloud)](https://cognifyapi.com/youtube-data?utm_source=github&utm_medium=repo&utm_campaign=youtube_data_api&utm_content=cta)

---

## 🔗 Official Resources
- **API Documentation:** [YouTube Data API Docs](https://cognifyapi.com/docs/youtube-data-docs)
- **More Info:** [YouTube Data API](https://cognifyapi.com/youtube-data)
- **Official Website:** [CognifyAPI.com](https://cognifyapi.com/)
- **CognifyAPI Studio:** [Get an API key](https://studio.cognifyapi.com/)

## 🛠 Features
- Search videos, channels, and Shorts.
- Retrieve video details by video ID.
- Retrieve comments and replies for a video.

## 📊 Endpoints

| Endpoint | Description | Example parameters | Response example |
| --- | --- | --- | --- |
| `/youtube-search` | Search YouTube content. | `query=Mr Beast` | [JSON sample](./responses/youtube-search.json) |
| `/youtube-video-search` | Search videos. | `query=Mr Beast` | [JSON sample](./responses/youtube-video-search.json) |
| `/youtube-channel-search` | Search channels. | `query=Mr Beast` | [JSON sample](./responses/youtube-channel-search.json) |
| `/youtube-shorts-search` | Search Shorts. | `query=Mr Beast` | [JSON sample](./responses/youtube-shorts-search.json) |
| `/youtube-video-details` | Retrieve video metadata. | `videoId=Af6i6ChAVTw` | [JSON sample](./responses/youtube-video-details.json) |
| `/youtube-video-comments` | Retrieve comments for a video. | `videoId=Af6i6ChAVTw` | [JSON sample](./responses/youtube-video-comments.json) |
| `/youtube-video-reply-comments` | Retrieve replies for a comment. | `videoId=Af6i6ChAVTw&commentKey=...` | [JSON sample](./responses/youtube-video-reply-comments.json) |

Each linked file is an endpoint-specific JSON example for the request shown in its row. The comments fixture has two comment entries although its `result` count is 20.

## 🚀 Getting Started

Base URL: `https://api.cognifyapi.com`

Send your API key in the `x-cognifyapi-key` header. Install Axios with `npm install axios`, set `COGNIFY_API_KEY`, then run [`index.js`](./index.js).

```text
x-cognifyapi-key: YOUR_COGNIFY_API_KEY
```

The runnable script demonstrates all seven endpoints. For reply comments, the `commentKey` must identify a comment on the requested video.

### Response Preview

```json
{
  "status": "success",
  "query": "Mr Beast",
  "data": {
    "channels": [],
    "videos": [
      {
        "videoId": "Af6i6ChAVTw",
        "title": "Last To Leave Mansion, Keeps It",
        "author": "MrBeast",
        "published": "3 months ago",
        "duration": "57:51",
        "viewCount": "142,280,353 views",
        "url": "https://www.youtube.com/watch?v=Af6i6ChAVTw"
      }
    ]
  }
}
```
