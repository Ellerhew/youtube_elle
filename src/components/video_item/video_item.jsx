import React, { memo } from "react";
import styles from "./video_item.module.css";

const VideoItem = memo((props) => {
	const onClick = () => {
		props.onClick(props.video);
	};

	return (
		<li
			className={`${
				props.selectedVideo ? styles.vertical_videoItem : styles.videoItem
			}`}
			onClick={onClick}
		>
			<div
				className={`${
					props.selectedVideo ? styles.vertical_itemBox : styles.itemBox
				}`}
			>
				<div className={styles.thumbnailBox}>
					<img
						className={styles.thumbnail}
						alt="thumbnail"
						src={props.video.snippet.thumbnails.medium.url}
					/>
				</div>
				<div
					className={`${
						props.selectedVideo
							? styles.vertical_description
							: styles.description
					}`}
				>
					<span className={styles.title}>{props.video.snippet.title}</span>
					<span className={styles.channel}>
						{props.video.snippet.channelTitle}
					</span>
					{/* <div className={styles.detail}> */}
					{/* <span className={styles.viewCount}>5만뷰</span> */}
					{/* <span className={styles.dot}></span> */}
					{/* <span className={styles.updateDate}>2020.05.01</span> */}
					{/* </div> */}
				</div>
			</div>
		</li>
	);
});

export default VideoItem;
