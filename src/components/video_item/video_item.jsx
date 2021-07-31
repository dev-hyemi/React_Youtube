import React from "react";
import styels from "./video_item.module.css";

const VideoItem = (props) => {
  return (
    <li className={styels.container}>
      <div className={styels.video}>
        <img
          className={styels.thumbnail}
          src={props.video.snippet.thumbnails.medium.url}
          alt="thumbnail"
        />
        <div className={styels.metadata}>
          <p className={styels.title}>{props.video.snippet.title}</p>
          <p className={styels.channel}>{props.video.snippet.channelTitle}</p>
        </div>
      </div>
    </li>
  );
};

export default VideoItem;
