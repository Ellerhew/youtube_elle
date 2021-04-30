import React from "react";
import styles from "./video_selected.module.css";

const VideoSelected = (props) => {
	if (props.selectedVideo) {
		return (
			<div className={styles.videoAndDescription}>
				<div className={styles.container}>
					<iframe
						title="video player"
						id="ytplayer"
						type="text/html"
						className={styles.videoPlayer}
						src={`https://www.youtube.com/embed/${props.selectedVideo.id}`}
						frameBorder="0"
						allowFullscreen
					/>
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
