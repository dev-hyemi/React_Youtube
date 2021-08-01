import React from "react";
import VideoItem from "../video_item/video_item";
import styels from "./video_list.module.css";

const VideoList = (props) => (
  <ul className={styels.videos}>
    {props.videos.map((video) => {
      return <VideoItem key={video.id} video={video} />;
    })}
  </ul>
);

export default VideoList;
