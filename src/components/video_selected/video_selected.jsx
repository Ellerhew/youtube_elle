import React from "react";
import styles from "./video_selected.module.css";

const VideoSelected = (props) => {
	if (props.selectedVideo) {
		return (
			<div className={styles.videoAndDescription}>
				<div className={styles.container}>
					<iframe
						className={styles.videoPlayer}
						id="player"
						type="text/html"
						src={`http://www.youtube.com/embed/${props.selectedVideo.id}?enablejsapi=1&origin=http://example.com`}
						frameborder="0"
					></iframe>
				</div>

				<div className={styles.description}>
					<h2>{props.selectedVideo.snippet.title}</h2>
					<h3>{props.selectedVideo.snippet.channelTitle}</h3>
					<p>{props.selectedVideo.snippet.description}</p>
				</div>
			</div>
		);
	} else {
		return <></>;
	}
};

export default VideoSelected;
