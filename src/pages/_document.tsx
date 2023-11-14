import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { useLangStore } from "@/utils/code";

export default function Document() {
	const srcLang = useLangStore((state: { lang: any }) => state.lang);

	return (
		<Html lang={srcLang}>
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Lexend:wght@200;300;400;500;600;700;800;900;1000&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;400;500;600;700;800;900;1000&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap"
					rel="stylesheet"
				></link>

				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
					integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>
				{/* <title>Somhako</title> */}

				<link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
				<script src="https://assets.calendly.com/assets/external/widget.js" type="text/javascript" async></script>
			</Head>
			<body className="bg-lightBlue text-black dark:bg-gray-900 dark:text-white">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
