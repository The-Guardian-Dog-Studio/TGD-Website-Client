interface HeadProps {
	children: React.ReactNode;
	generator: string;
}

const Head = ({ children, generator }: HeadProps): JSX.Element => {
	return (
		<head>
			<meta charSet="UTF-8" />
			<meta name="viewport" content="width=device-width" />
			<link rel="preconnect" href="https://fonts.googleapis.com" />
			<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
			<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
			<link
				href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Nunito:wght@300;400;600;700&family=Orbitron:wght@400;500;700&display=swap"
				rel="stylesheet"
			/>
			<meta name="generator" content={generator} />

			<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>
			<link
				href="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css"
				rel="stylesheet"
			/>

			{children}
		</head>
	);
};

export default Head;
