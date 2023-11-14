import Head from "next/head";
import React, { useRef, Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NoAuthHeader from "@/components/noAuth/NoAuthHeader";
import NoAuthFooter from "@/components/noAuth/NoAuthFooter";
import Image from "next/image";
import about1 from "public/images/noAuth/about1.png";
import aboutP1 from "public/images/noAuth/aboutP1.png";
import aboutP2 from "public/images/noAuth/aboutP2.png";
import aboutP3 from "public/images/noAuth/aboutP3.png";
import aboutP4 from "public/images/noAuth/aboutP4.png";
import aboutR3 from "public/images/noAuth/aboutR3.png";
import aboutSP1 from "public/images/noAuth/aboutSP1.png";
import novusS1 from "public/images/noAuth/novusS1.png";
import novusH1 from "public/images/noAuth/novusH1.png";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import ToggleLang from "@/components/noAuth/ToggleLang";
import BookADemo from "@/components/noAuth/BookADemo";

export default function About() {
	const [scrollTop, setScrollTop] = useState(0);
	const router = useRouter();

	const { t } = useTranslation("common");

	const handleScroll = (event) => {
		setScrollTop(event.currentTarget.scrollTop);
	};

	useEffect(() => {
		console.log("scrollTop", scrollTop);
	}, [scrollTop]);

	const [bookADemo, setbookADemo] = useState(false);

	return (
		<>
			<Head>
				<title>About Page ATS</title>
			</Head>
			<main>
				<NoAuthHeader scrollTop={scrollTop} setbookADemo={setbookADemo} />

				<ToggleLang />
				<BookADemo bookADemo={bookADemo} setbookADemo={setbookADemo} />
				<div
					id="overlay"
					className="fixed left-0 top-0 z-[9] hidden h-full w-full bg-[rgba(0,0,0,0.2)] dark:bg-[rgba(255,255,255,0.2)]"
				></div>

				<div className="h-[100vh] w-[100vw] overflow-y-scroll" onScroll={handleScroll}>
					{/* hero section */}
					<div
						className="h-auto  w-full border-t-2 border-transparent  xl:min-h-[100vh]"
						style={{
							background: "linear-gradient(70deg, #2D129A -5.44%, #47BBFD 120.58%)"
						}}
					>
						<div
							className="relative mx-auto   sm:max-w-[600px] md:max-w-[720px] lg:max-w-[991px] xl:min-h-[100vh] xl:max-w-[1216px] 2xl:max-w-[1448px]"
							style={{ height: "inherit" }}
						>
							<div className="mt-[4rem] flex h-auto w-full flex-col items-center justify-evenly gap-20 p-8 max-xl:p-4 max-md:gap-10 max-md:p-4 xl:min-h-[calc(100vh-4rem)]">
								<div className="flex h-auto w-[80vw] flex-row items-center justify-center gap-8  p-4 px-12 max-xl:h-auto max-xl:min-h-fit max-xl:w-[90vw] max-xl:flex-col max-xl:gap-2 max-md:p-2">
									<div className="h-auto w-[40%]  max-xl:w-[60%] max-md:w-full">
										<Image
											src={about1}
											alt="why"
											width={500}
											height={500}
											className="max-md:min-h-auto ml-auto h-auto max-h-[60vh] w-auto  max-xl:mx-auto"
										/>
									</div>
									<div className="flex w-[60%] flex-col gap-4 max-xl:w-full">
										<div className="w-full text-[6vw] font-bold text-black/[0.05] max-xl:w-full max-xl:text-center max-xl:text-[7vw] max-md:text-[8vw]">
											About
										</div>
										<div className="w-[90%] text-[2vw] uppercase  text-white max-xl:w-full max-xl:text-center max-xl:text-[3.3vw] max-md:text-[4vw]">
											{t("Noauth.about.text1")}
										</div>
										<div className="w-[90%] text-[1vw] font-light tracking-wider  text-white max-xl:w-full max-xl:text-center max-xl:text-[2vw] max-md:text-[3.3vw]">
											{t("Noauth.about.text2")}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* spotlight section 1A */}
					<div
						className=" w-full"
						style={{
							backgroundImage: "url('/images/noAuth/tabBg1.jpg')",
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							backgroundPosition: "center"
						}}
					>
						<div className="min-h-auto mx-auto flex flex-col items-center gap-4  p-4 px-12 max-lg:h-auto max-lg:min-h-fit max-lg:w-[90vw] max-md:flex-col max-md:p-2 sm:max-w-[600px] md:max-w-[720px] lg:max-w-[991px] xl:max-w-[1216px] 2xl:max-w-[1448px]">
							<div className="flex w-full gap-4  ">
								<div className="w-full text-center text-[1.5vw] font-bold uppercase tracking-wider text-white max-lg:text-[2.3vw] max-md:w-full max-md:text-[3vw]">
									{t("Noauth.about.text3")}
								</div>
							</div>
							<div className="grid w-full grid-cols-4 gap-2  text-white max-lg:grid-cols-2">
								<div className="flex flex-col items-center justify-center gap-2 ">
									<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 86 75" fill="none">
										<path
											d="M28.576 53.5361C19.8059 53.5361 12.6031 59.082 12.1802 66.1651L12.1601 66.5426L1.70839 75L0 73.6149L9.79386 65.6871C10.5088 57.7458 18.6681 51.5779 28.5727 51.5779H54.5845C57.1017 51.5779 59.1491 53.2347 59.1491 55.2716C59.1491 55.4563 59.139 55.6437 59.1189 55.8256L75.9276 44.7746C77.9917 43.088 82.0093 43.0201 84.2547 44.8425C85.3791 45.7496 86 46.9582 86 48.2482C86 49.5356 85.3791 50.7442 84.2547 51.6567L63.7742 68.2292C62.539 69.226 60.9045 69.8751 59.1659 70.0543L35.0068 72.4959L31.929 74.9973L30.2173 73.6176L33.8825 70.6382L58.8638 68.1097C60.0688 67.9875 61.2066 67.5367 62.0624 66.8414L82.5429 50.2689C83.2109 49.7284 83.5834 49.0087 83.5834 48.2455C83.5834 47.4796 83.2176 46.7626 82.5463 46.2222C81.2071 45.1385 78.8812 45.1412 77.542 46.2222L56.2492 60.2254L56.2459 60.2227C54.8832 61.1325 53.1312 61.6784 51.2315 61.6784H34.4463V59.7203H51.2315C54.2623 59.7203 56.7292 57.7241 56.7292 55.2689C56.7292 54.3074 55.7659 53.528 54.5811 53.528H28.576V53.5361ZM61.2703 39.9783H27.7067V38.0228H61.2703V39.9783ZM69.1914 33.5687H66.7748V6.40956H69.1947L69.1914 33.5687ZM22.2023 33.5687H19.7857V6.40956H22.2023V33.5687ZM61.2703 1.95546H27.7067V0H61.2703V1.95546Z"
											fill="white"
										/>
									</svg>
									<div className="w-full text-center text-[1vw] uppercase tracking-widest max-lg:text-[2vw] max-md:text-[3vw] ">
										{t("Noauth.about.text4")}
										<br />
										{t("Noauth.about.text4A")}
									</div>
								</div>
								<div className="flex flex-col items-center justify-center gap-2 ">
									<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 86 79" fill="none">
										<path
											d="M28.9492 77H19.8209C9.73815 77 1.56445 69.2462 1.56445 59.6817V32.4383C1.56445 26.3824 4.89905 20.7664 10.3586 17.6276L33.1791 4.50773C38.9952 1.16409 46.2878 1.16409 52.1039 4.50773L74.9244 17.6276C80.384 20.7664 83.7186 26.3824 83.7186 32.4383V59.6817C83.7186 69.2462 75.5447 77 65.4621 77H56.3339M28.9492 77V59.6817C28.9492 52.508 35.0792 46.693 42.6415 46.693C50.2038 46.693 56.3339 52.508 56.3339 59.6817V77M28.9492 77H56.3339"
											stroke="white"
											stroke-width="3"
											stroke-linecap="round"
											stroke-linejoin="round"
										/>
									</svg>
									<div className="w-full text-center text-[1vw] uppercase tracking-widest max-lg:text-[2vw] max-md:text-[3vw] ">
										{t("Noauth.about.text5")}
										<br />
										{t("Noauth.about.text5A")}
									</div>
								</div>
								<div className="flex flex-col items-center justify-center gap-2 ">
									<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 105 95" fill="none">
										<path
											d="M72.5352 64.0962L73.1348 62.5088L71.6662 61.6586C71.0079 61.2775 70.7598 60.8644 70.6419 60.4211C70.4995 59.8858 70.5126 59.1488 70.7124 58.1394C70.8219 57.5859 70.8634 56.9389 70.6651 56.2865C70.4486 55.5742 70.0055 55.0483 69.4817 54.6961C69.0121 54.3804 68.5127 54.2272 68.1513 54.1377C67.8144 54.0543 67.4476 53.9928 67.1501 53.943C67.1246 53.9387 67.0996 53.9345 67.0751 53.9304C65.8568 53.7255 64.8794 53.5143 64.0674 52.5614C64.1175 52.3864 64.2219 52.1182 64.417 51.7355C64.7577 51.067 65.1974 50.3695 65.7103 49.5559C65.9958 49.103 66.304 48.6141 66.6304 48.0742C67.4613 46.7001 68.3706 45.0463 68.7501 43.3674C69.077 41.921 69.0328 40.3167 68.1512 38.8659C70.2316 32.2918 77.2611 27.6003 85.3137 27.649C86.4827 27.656 87.6885 27.7844 88.9189 28.0122C98.6611 29.8165 104.409 38.0003 102.488 45.9175C101.474 50.0923 97.5846 56.6662 92.5405 61.9922C90.0425 64.6299 87.3519 66.8627 84.721 68.3097C82.0718 69.7668 79.6721 70.3267 77.6456 69.9514C76.8021 69.7952 75.1071 68.9541 73.8129 67.6358C72.5144 66.3132 72.154 65.1056 72.5352 64.0962ZM27.0051 33.2871L27.0053 33.2871C37.7879 33.1047 47.6712 39.7638 50.4143 48.3815C48.6599 52.0474 49.5761 55.5475 51.0847 58.6995C51.8691 60.3385 52.873 61.9634 53.8082 63.4771L53.8115 63.4825C54.7117 64.9395 55.55 66.2968 56.2131 67.6228C56.1877 68.1095 55.9583 68.4379 55.6904 68.6197C55.185 68.9627 54.5184 69.1284 53.4353 69.3275C53.2146 69.3681 52.9732 69.4093 52.7205 69.4524C51.948 69.5841 51.0702 69.7338 50.3565 69.9394L50.91 71.8613L50.3565 69.9394C49.3478 70.2299 48.3777 70.7129 47.693 71.6182L47.4867 71.8909L47.3828 72.2167C47.0769 73.1755 47.0426 74.2356 47.0363 75.0923C47.0342 75.3785 47.0353 75.6495 47.0363 75.9117C47.0388 76.5311 47.041 77.1013 47.0007 77.7065C46.9428 78.5738 46.8114 79.1483 46.5118 79.6062C46.3579 79.8414 45.9644 80.1912 45.1717 80.5582L43.4992 81.3325L44.1346 83.0626C45.0162 85.463 43.8131 88.2542 40.9787 90.2259C38.2242 92.1419 34.5649 92.7705 31.5953 91.2917C31.5401 91.2561 31.4781 91.2198 31.4092 91.1849L31.3629 91.1616L31.3156 91.1406C31.2507 91.112 31.1881 91.0884 31.1285 91.0689C17.9068 84.9216 9.4135 72.7561 4.15516 60.6412C1.53748 54.5644 2.99587 47.8748 7.17454 42.5557C11.3534 37.2364 18.1393 33.4675 25.7843 33.3441C25.7899 33.3442 25.796 33.3443 25.8026 33.3444C25.8367 33.3447 25.8891 33.3444 25.9525 33.3407L25.9531 33.3407C26.0509 33.3349 26.1427 33.3293 26.23 33.3239C26.5183 33.3061 26.7578 33.2913 27.0051 33.2871ZM45.8712 4.59706C45.8712 3.46817 46.9147 2.16949 48.7733 2.00011C48.7794 2.00003 48.799 1.99981 48.8386 2.00064C48.8632 2.00117 48.8831 2.00173 48.909 2.00247C48.9252 2.00293 48.9438 2.00346 48.9673 2.00408C49.0188 2.00544 49.0859 2.007 49.1584 2.007C51.2489 2.007 52.4457 3.41526 52.4457 4.59706C52.4457 5.7936 51.2319 7.21545 49.1584 7.21545C47.0849 7.21545 45.8712 5.7936 45.8712 4.59706ZM26.7657 8.56378C26.7657 6.88217 28.4297 5.06704 31.0585 5.06704C33.6873 5.06704 35.3513 6.88217 35.3513 8.56378C35.3513 10.2454 33.6873 12.0605 31.0585 12.0605C28.4297 12.0605 26.7657 10.2454 26.7657 8.56378ZM62.9655 9.81046C62.9655 9.34152 63.4877 8.52375 64.7282 8.52375C65.9924 8.52375 66.5234 9.36203 66.5234 9.81046C66.5234 10.2794 65.9688 11.1255 64.7282 11.1255C63.5113 11.1255 62.9655 10.3001 62.9655 9.81046ZM19.143 20.3223C19.143 20.1699 19.2092 19.9702 19.4404 19.7709C19.6767 19.5673 20.0525 19.4039 20.5164 19.4039C20.9783 19.4039 21.3412 19.5657 21.5663 19.7623C21.7863 19.9544 21.8575 20.1548 21.8575 20.3223C21.8575 20.6145 21.5014 21.269 20.5164 21.269C20.0642 21.269 19.6907 21.1063 19.4504 20.8965C19.2129 20.689 19.143 20.4785 19.143 20.3223ZM71.0099 20.3223C71.0099 20.2992 71.0152 20.2258 71.1316 20.1241C71.2526 20.0184 71.4699 19.9139 71.7671 19.9139C72.0668 19.9139 72.298 20.0204 72.4309 20.1346C72.5572 20.2432 72.5567 20.3152 72.5567 20.322V20.3223C72.5567 20.3319 72.5547 20.4159 72.4188 20.5346C72.2811 20.6549 72.0526 20.759 71.7671 20.759C71.4842 20.759 71.2696 20.657 71.1436 20.5452C71.0195 20.435 71.0099 20.3499 71.0099 20.3223ZM30.1945 90.992C30.1932 90.9922 30.1958 90.9918 30.1999 90.9912L30.1986 90.9914L30.1945 90.992Z"
											fill="#00013A"
											stroke="white"
											stroke-width="4"
										/>
									</svg>
									<div className="w-full text-center text-[1vw] uppercase tracking-widest max-lg:text-[2vw] max-md:text-[3vw] ">
										{t("Noauth.about.text6")}
										<br />
										{t("Noauth.about.text6A")}
									</div>
								</div>
								<div className="flex flex-col items-center justify-center gap-2">
									<svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 77 67" fill="none">
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M9.18863 9.29703C9.18863 4.16243 14.2315 0 20.4523 0H38.4741C59.7511 0 76.7704 15.0925 76.7704 33.4693C76.7704 40.371 74.378 46.7964 70.2668 52.1351C67.9109 55.195 66.2574 58.3957 66.2574 61.6664V65.0792C66.2574 66.106 65.2491 66.9386 64.0047 66.9386C62.7607 66.9386 61.7519 66.106 61.7519 65.0792V61.6664C61.7519 57.3764 63.9069 53.4616 66.4647 50.1404C70.1217 45.3911 72.265 39.6563 72.265 33.4693C72.265 16.9307 57.0095 3.71881 38.4741 3.71881H20.4523C16.7199 3.71881 13.6941 6.21625 13.6941 9.29703V14.8752C13.6941 15.0751 13.6551 15.2736 13.5785 15.4632L5.55598 35.3287H11.4414C12.6855 35.3287 13.6941 36.1613 13.6941 37.1881V52.0634C13.6941 53.0901 14.7027 53.9228 15.9468 53.9228H22.705C23.9492 53.9228 24.9577 54.7554 24.9577 55.7822C24.9577 56.8089 23.9492 57.6416 22.705 57.6416H15.9468C12.2144 57.6416 9.18863 55.144 9.18863 52.0634V39.0475H2.43046C1.70634 39.0475 1.02638 38.7601 0.602953 38.2755C0.179576 37.7906 0.0643719 37.1673 0.293339 36.6002L9.18863 14.5735V9.29703Z"
											fill="white"
										/>
										<path
											fill-rule="evenodd"
											clip-rule="evenodd"
											d="M18.1992 20.4533C18.1992 15.3187 23.2421 11.1562 29.4629 11.1562C35.6835 11.1562 40.7265 15.3187 40.7265 20.4533C40.7265 22.6281 39.8218 24.6284 38.3062 26.2122L45.013 31.7481C46.9318 30.497 49.3553 29.7503 51.9901 29.7503C58.2108 29.7503 63.2537 33.9128 63.2537 39.0473C63.2537 44.1819 58.2108 48.3444 51.9901 48.3444C45.7694 48.3444 40.7265 44.1819 40.7265 39.0473C40.7265 37.4363 41.223 35.9209 42.0966 34.6L34.8509 28.6194C33.2506 29.3405 31.4146 29.7503 29.4629 29.7503C23.2421 29.7503 18.1992 25.5878 18.1992 20.4533ZM29.4629 14.8751C25.7304 14.8751 22.7047 17.3725 22.7047 20.4533C22.7047 23.5341 25.7304 26.0315 29.4629 26.0315C33.1952 26.0315 36.221 23.5341 36.221 20.4533C36.221 17.3725 33.1952 14.8751 29.4629 14.8751ZM51.9901 33.4691C48.2578 33.4691 45.2319 35.9667 45.2319 39.0473C45.2319 42.128 48.2578 44.6255 51.9901 44.6255C55.7224 44.6255 58.7483 42.128 58.7483 39.0473C58.7483 35.9667 55.7224 33.4691 51.9901 33.4691Z"
											fill="white"
										/>
									</svg>
									<div className="w-full text-center text-[1vw] uppercase max-lg:text-[2vw] max-md:text-[3vw]">
										{t("Noauth.about.text7")}
										<br />
										{t("Noauth.about.text7A")}
									</div>
								</div>
							</div>
							<div className="flex w-full justify-end gap-4  max-xl:w-full max-xl:justify-center ">
								<Link
									href="/values"
									className="w-auto text-center text-[1vw] font-light capitalize tracking-wider text-white hover:underline max-lg:text-[2vw] max-md:w-full max-md:text-[3vw]"
								>
									{t("Noauth.about.text8")}
									<i className="fa-solid fa-circle-chevron-right ml-2"></i>
								</Link>
							</div>
						</div>
					</div>

					{/* promblem section */}
					<div className="h-auto w-full  bg-[#F5F6F8]">
						<div className="mx-auto   sm:max-w-[600px] md:max-w-[720px] lg:max-w-[991px] xl:max-w-[1216px] 2xl:max-w-[1448px]">
							<div className="flex h-auto w-full flex-col items-center justify-start gap-5 p-8 max-lg:p-4 max-md:p-2">
								<div className="w-full px-2 text-left text-[6vw] font-bold text-black/[0.05] max-lg:text-[5vw] max-md:w-full max-md:text-center max-md:text-[5vw]">
									Problem
								</div>
								<div className="w-auto  text-[2vw] font-bold uppercase text-black max-lg:w-full max-lg:text-center max-lg:text-[3vw] max-md:text-[4vw]">
									{t("Noauth.about.text9")}
								</div>
								<div className="w-auto  text-[2vw] font-bold uppercase text-black max-lg:w-full max-lg:text-center max-lg:text-[3vw] max-md:text-[4vw]">
									{t("Noauth.about.text10")}
								</div>
								<div className="flex h-auto w-[60vw] flex-row-reverse items-center justify-center gap-8  px-12 py-0 max-lg:h-auto max-lg:min-h-fit max-lg:w-[90vw] max-md:flex-col max-md:p-2">
									<div className="h-auto  w-[30%]  max-md:w-full">
										<Image
											src={aboutP1}
											alt="why"
											width={500}
											height={500}
											className="max-md:min-h-auto mx-auto h-auto max-h-[30vh] w-auto  "
										/>
									</div>
									<div
										className="flex w-[70%] flex-col gap-4 rounded-lg  p-2 max-md:w-full"
										style={{
											opacity: "0.7",
											background:
												"linear-gradient(262deg, rgba(190, 190, 190, 0.42) 1.43%, rgba(217, 217, 217, 0.00) 96.38%)"
										}}
									>
										<div className="w-full p-2 py-8 text-right text-[1vw]  font-light tracking-widest text-black max-lg:text-[2vw] max-md:w-full max-md:text-center max-md:text-[3.3vw]">
											{t("Noauth.about.text11")}
										</div>
									</div>
								</div>
								<div className="flex h-auto w-[60vw] flex-row items-center justify-center gap-8  px-12 py-0 max-lg:h-auto max-lg:min-h-fit max-lg:w-[90vw] max-md:flex-col max-md:p-2">
									<div className="h-auto  w-[30%]  max-md:w-full">
										<Image
											src={aboutP2}
											alt="why"
											width={500}
											height={500}
											className="max-md:min-h-auto mx-auto h-auto max-h-[30vh] w-auto  "
										/>
									</div>
									<div
										className="flex w-[70%] flex-col gap-4 rounded-lg  p-2 max-md:w-full"
										style={{
											opacity: "0.7",
											background:
												"linear-gradient(80deg, rgba(190, 190, 190, 0.42) 1.16%, rgba(217, 217, 217, 0.00) 105.58%)"
										}}
									>
										<div className="w-full p-2 py-8 text-[1vw]  font-light tracking-widest text-black max-lg:text-[2vw] max-md:w-full max-md:text-center max-md:text-[3.3vw]">
											{t("Noauth.about.text12")}
										</div>
									</div>
								</div>
								<div className="flex h-auto w-[60vw] flex-row-reverse items-center justify-center gap-8  px-12 py-0 max-lg:h-auto max-lg:min-h-fit max-lg:w-[90vw] max-md:flex-col max-md:p-2">
									<div className="h-auto  w-[30%]  max-md:w-full">
										<Image
											src={aboutP3}
											alt="why"
											width={500}
											height={500}
											className="max-md:min-h-auto mx-auto h-auto max-h-[30vh] w-auto  "
										/>
									</div>
									<div
										className="flex w-[70%] flex-col gap-4 rounded-lg  p-2 max-md:w-full"
										style={{
											opacity: "0.7",
											background:
												"linear-gradient(262deg, rgba(190, 190, 190, 0.42) 1.43%, rgba(217, 217, 217, 0.00) 96.38%)"
										}}
									>
										<div className="w-full p-2 py-8 text-right text-[1vw]  font-light tracking-widest text-black max-lg:text-[2vw] max-md:w-full max-md:text-center max-md:text-[3.3vw]">
											{t("Noauth.about.text13")}
										</div>
									</div>
								</div>

								<div
									className=" w-[70vw]"
									style={{
										backgroundImage: "url('/images/noAuth/tabBg1.jpg')",
										backgroundRepeat: "no-repeat",
										backgroundSize: "cover",
										backgroundPosition: "center",
										borderRadius: "40px"
									}}
								>
									<div className="mx-auto grid h-auto grid-cols-5 justify-items-center gap-2  max-md:grid-flow-col max-md:grid-rows-2 max-md:gap-2 sm:max-w-[600px] md:max-w-[720px] lg:max-w-[991px] xl:max-w-[1216px] 2xl:max-w-[1448px]">
										<p className="col-span-3 flex flex-col justify-center  gap-4  p-4 max-md:col-span-5 max-md:items-center">
											<div className="text-[1.5vw] leading-10 tracking-wider text-white max-lg:text-[1.7vw] max-md:text-center max-md:text-[2.2vw] max-md:leading-4">
												{t("Noauth.about.text14")}
											</div>
										</p>
										<div className="py-auto col-span-2 my-auto grid h-full w-full max-w-[50%]  p-4 max-xl:max-w-[70%] max-md:col-span-5 max-md:max-w-[50%]">
											<Image
												src={aboutP4}
												alt="LP"
												width={"1000"}
												height={"1000"}
												className="py-auto z-10 my-auto h-auto w-full  object-fill"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* revolution section */}
					<div
						className="h-auto w-full  "
						style={{
							backgroundImage: "url('/images/noAuth/aboutR2.png')",
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							backgroundPosition: "center"
						}}
					>
						<div className="mx-auto   sm:max-w-[600px] md:max-w-[720px] lg:max-w-[991px] xl:max-w-[1216px] 2xl:max-w-[1448px]">
							<div className="flex h-auto w-full flex-col items-center justify-start gap-5 p-8 max-lg:p-4 max-md:p-2">
								<div className="w-[60vw]  text-center text-[2vw] font-bold uppercase text-black max-lg:text-[3vw] max-md:w-full max-md:text-center max-md:text-[4vw]">
									{t("Noauth.about.text15")}
								</div>
								<div className="flex h-auto w-[60vw] flex-row items-center justify-center gap-8  px-12 py-0 max-lg:h-auto max-lg:min-h-fit max-lg:w-[90vw] max-md:flex-col max-md:p-2">
									<div className="h-auto  w-[30%]  max-md:w-full">
										<Image
											src={aboutR3}
											alt="why"
											width={1000}
											height={1000}
											className="max-md:min-h-auto mx-auto h-auto max-h-[50vh] w-auto drop-shadow-xl"
										/>
									</div>
									<div className="flex w-[70%] flex-col gap-4 rounded-lg  p-2 max-md:w-full">
										<div className="w-full p-2 text-right text-[1vw]  tracking-widest text-black max-lg:text-[2vw] max-md:w-full max-md:text-center max-md:text-[3.3vw]">
											&quot;{t("Noauth.about.text16")}&quot;
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* novus section */}
					<div
						className=" h-auto  w-full   "
						style={{
							background: "linear-gradient(70deg, #2D129A -5.44%, #47BBFD 120.58%)"
						}}
					>
						<div className="mx-auto grid h-auto grid-cols-5 justify-items-center gap-2  max-lg:grid-flow-col max-lg:grid-rows-2 max-lg:gap-2 sm:max-w-[600px] md:max-w-[720px] lg:max-w-[991px] xl:max-w-[1216px] 2xl:max-w-[1448px]">
							<div className="py-auto col-span-2 my-auto grid h-full w-full max-w-[70%]  p-4 max-lg:col-span-5 max-lg:max-w-[60%]">
								<Image
									src={novusH1}
									alt="LP"
									width={"1000"}
									height={"1000"}
									className="py-auto z-10 my-auto h-auto w-full  object-fill"
								/>
							</div>
							<p className="col-span-3 flex flex-col justify-center gap-4   p-4 max-lg:col-span-5 max-lg:items-center max-lg:p-2">
								<div className="w-[90%] text-[2vw] uppercase  text-white max-xl:w-full max-lg:text-center max-lg:text-[3.3vw] max-md:text-[4vw]">
									{t("Noauth.about.text17")}
								</div>
								<div className="w-[90%] text-[1vw] font-light tracking-widest  text-white max-xl:w-full max-lg:text-center max-lg:text-[2vw] max-md:text-[3vw]">
									&quot;{t("Noauth.about.text18")}&quot;
								</div>
							</p>
						</div>
					</div>

					{/* spotlight section grid */}
					<div
						className=" w-full"
						style={{
							backgroundImage: "url('/images/noAuth/tabBg1.jpg')",
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							backgroundPosition: "center"
						}}
					>
						<div className="mx-auto grid h-auto grid-cols-5 justify-items-center gap-2  max-md:grid-flow-col max-md:grid-rows-2 max-md:gap-2 sm:max-w-[600px] md:max-w-[720px] lg:max-w-[991px] xl:max-w-[1216px] 2xl:max-w-[1448px]">
							<p className="col-span-3 flex flex-col justify-center  gap-4  p-4 max-md:col-span-5 max-md:items-center">
								<div className="text-[1.5vw] leading-10 tracking-wider text-white max-lg:text-[1.7vw] max-md:text-center max-md:text-[2.2vw] max-md:leading-4">
									{t("Noauth.about.text19")}
								</div>
								<div className="z-10 flex justify-start   pt-4 text-white max-md:pt-4">
									<div className="-translate-x-3 scale-90 ">
										<button className="learn-more1" onClick={() => setbookADemo(true)}>
											<span className="circle" aria-hidden="true">
												<span className="icon arrow"></span>
											</span>
											<span className="button-text">{t("Noauth.about.btn1")}</span>
										</button>
									</div>
								</div>
							</p>
							<div className="py-auto col-span-2 my-auto grid h-full w-full max-w-[70%]  p-4 max-md:col-span-5 max-md:max-w-[50%]">
								<Image
									src={aboutSP1}
									alt="LP"
									width={"1000"}
									height={"1000"}
									className="py-auto z-10 my-auto h-auto w-full  object-fill"
								/>
							</div>
						</div>
					</div>

					<NoAuthFooter setbookADemo={setbookADemo} />
				</div>
			</main>
		</>
	);
}

export async function getStaticProps({ context, locale }: any) {
	const translations = await serverSideTranslations(locale, ["common"]);
	return {
		props: {
			...translations
		}
	};
}
