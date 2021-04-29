import React from "react";
import styles from "./video_item.module.css";

const VideoItem = (props) => {
	const onClick = () => {
		console.log(props.video.id);
		props.onClick(props.video.id);
	};

	return (
		<li className={styles.videoItem} onClick={onClick}>
			<div className={styles.itemBox}>
				<div className={styles.thumbnailBox}>
					<img
						className={styles.thumbnail}
						alt="thumbnail"
						src={props.video.snippet.thumbnails.medium.url}
					/>
				</div>
				<div className={styles.description}>
					<span className={styles.title}>{props.video.snippet.title}</span>
					<span className={styles.channel}>
						{props.video.snippet.channelTitle}
					</span>
				</div>
			</div>
		</li>
	);
};

export default VideoItem;
