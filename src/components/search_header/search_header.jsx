import React, { useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = ({ onSearch }) => {
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

	return (
		<div className={styles.header}>
			<div className={styles.logo}>
				<img src="/images/logo.png" alt="logo"></img>
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
					<img src="/images/search.png" alt="button"></img>
				</button>
			</div>
		</div>
	);
};

export default SearchHeader;
