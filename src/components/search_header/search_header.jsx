import React, { memo, useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = memo(({ onSearch, mostPopular }) => {
	const inputRef = useRef();

	const handleSubmit = () => {
		const value = inputRef.current.value;
		onSearch(value);
	};

	const onKeyPress = (event) => {
		if (event.key === "Enter") {
			handleSubmit();
		}
	};

	const onClick = () => {
		handleSubmit();
	};

	const backToPopular = () => {
		mostPopular();
		inputRef.current.value = "";
	};

	return (
		<div className={styles.header}>
			<div className={styles.logo} onClick={backToPopular}>
				<img src={"youtube_elle/images/logo.png"} alt="logo"></img>
				<span>Youtube</span>
			</div>
			<div className={styles.search}>
				<input
					ref={inputRef}
					className={styles.input}
					placeholder="Search..."
					onKeyPress={onKeyPress}
				/>
				<button className={styles.button} type="submit" onClick={onClick}>
					<img src={"youtube_elle/images/search.png"} alt="button"></img>
				</button>
			</div>
			<div className={styles.sideMenu}>
				<i className={"fas fa-video"}></i>
				<i className={`fas fa-th`} />
				<i className={"fas fa-bell"}></i>
			</div>
		</div>
	);
});

export default SearchHeader;
