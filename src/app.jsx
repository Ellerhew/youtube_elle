import React, { useCallback, useEffect, useState } from "react";
import styles from "./app.module.css";
import SearchHeader from "./components/search_header/search_header";
import VideoList from "./components/video_list/video_list";
import VideoSelected from "./components/video_selected/video_selected";

function App({ youtube }) {
	const [videos, setVideos] = useState([]);
	const [selectedVideo, setSelectedVideo] = useState();

	const search = useCallback(
		(query) => {
			youtube
				.search(query) //
				.then((videos) => setVideos(videos))
				.then(() => setSelectedVideo());
		},
		[youtube]
	);

	useEffect(() => {
		youtube
			.mostPopular() //
			.then((videos) => setVideos(videos));
	}, [youtube]);

	const onClick = (video) => {
		setSelectedVideo(video);
	};

	return (
		<div className={styles.app}>
			<SearchHeader onSearch={search} />
			<div className={styles.content}>
				<VideoSelected selectedVideo={selectedVideo} />
				<VideoList
					videos={videos}
					onClick={onClick}
					selectedVideo={selectedVideo}
				/>
			</div>
		</div>
	);
}

export default App;
