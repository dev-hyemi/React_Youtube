import { useState, useEffect } from "react";
import VideoList from "./components/video_list/video_list";
import { H_KEY } from "./config";
import "./app.css";

const App = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&part=player&chart=mostPopular&maxResults=20&regionCode=kr&key=${H_KEY}`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return <VideoList videos={videos} />;
};

export default App;
