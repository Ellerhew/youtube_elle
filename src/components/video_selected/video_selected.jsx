import React from "react";

const VideoSelected = (props) => {
	if (props.videoId) {
		return (
			<>
				<div className="videoPlayer">
					<iframe
						id="player"
						type="text/html"
						width="640"
						height="360"
						src={`http://www.youtube.com/embed/${props.videoId}?enablejsapi=1&origin=http://example.com`}
						frameborder="0"
					></iframe>
				</div>

				<div>
					{/* <h2>{props.video.snippet.title}</h2> */}
					{/* <h3>{props.video.snippet.channelTitle}</h3> */}
					{/* <p>{props.video.snippet.description}</p> */}
				</div>
			</>
		);
	} else {
		return <></>;
	}
};

export default VideoSelected;
