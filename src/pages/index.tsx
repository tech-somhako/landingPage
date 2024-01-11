import Head from "next/head";
import React, { useRef, Fragment, useState, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NoAuthHeader from "@/components/noAuth/NoAuthHeader";
import NoAuthFooter from "@/components/noAuth/NoAuthFooter";
import Image from "next/image";
import overlay2 from "public/images/noAuth/overlay2.png";
import bgFinal from "public/images/noAuth/bgFinal.png";
import benfitsImg1 from "public/images/noAuth/benfitsImg1.png";
import novusSection from "public/images/noAuth/novusSection.png";
import whySomhako from "public/images/noAuth/whySomhako.png";
import whySomhako1 from "public/images/noAuth/whySomhako1.png";
import whySomhako2 from "public/images/noAuth/whySomhako2.png";
import whySomhako3 from "public/images/noAuth/whySomhako3.png";
import whySomhako4 from "public/images/noAuth/whySomhako4.png";
import dream1 from "public/images/noAuth/dream1.png";
import dream2 from "public/images/noAuth/dream3.png";
import light1 from "public/images/noAuth/light1.png";
import faq from "public/images/noAuth/faq.png";
import demoBg from "public/images/noAuth/demoBg.png";
import Tabs from "@/components/noAuth/Tabs";
import Faq from "@/components/noAuth/FaQ";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTranslation } from "react-i18next";
import ToggleLang from "@/components/noAuth/ToggleLang";
import BookADemo from "@/components/noAuth/BookADemo";
import RequestFM from "@/components/noAuth/RequestFM";
import { useRouter } from "next/router";
import { useLangStore } from "@/utils/code";

export default function LandingPage() {
	const settings = {
		dots: true,
		arrows: false,
		infinite: true,
		speed: 1500,
		slidesToShow: 1,
		slidesToScroll: 1,
		adaptiveHeight: false,
		autoplay: true,
		autoplaySpeed: 4000,
		vertical: false,
		emulateTouch: true
	};

	const [scrollTop, setScrollTop] = useState(0);

	const handleScroll = (event) => {
		setScrollTop(event.currentTarget.scrollTop);
	};

	useEffect(() => {
		console.log("scrollTop", scrollTop);
	}, [scrollTop]);

	const { t } = useTranslation("common");

	const whyHeading_1 = [
		{
			title: t("Noauth.home.text42"),
			sub: t("Noauth.home.text43"),
			img: whySomhako1
		},
		{
			title: t("Noauth.home.text44"),
			sub: t("Noauth.home.text45"),
			img: whySomhako2
		},
		{
			title: t("Noauth.home.text46"),
			sub: t("Noauth.home.text47"),
			img: whySomhako3
		},
		{
			title: t("Noauth.home.text48"),
			sub: t("Noauth.home.text49"),
			img: whySomhako4
		}
	];

	const [bookADemo, setbookADemo] = useState(false);
	const [requestFM, setrequestFM] = useState(false);

	const router = useRouter();
	const srcLang = useLangStore((state: { lang: any }) => state.lang);

	const saveData = async () => {
		const response = await fetch("/api/blogData", {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			}
		});
		const data = await response.json();
		console.log("post", data);
	};

	useEffect(() => {
		console.log("@@@", "funcalled");
		saveData();
	}, []);

	return (
		<>
			<Head>
				<script
					async
					src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
				></script>
				<script
					dangerouslySetInnerHTML={{
						__html: `
				window.dataLayer = window.dataLayer || [];
				function gtag(){dataLayer.push(arguments);}
				gtag('js', new Date());
				gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
					page_path: window.location.pathname,
				});
				`
					}}
				/>
				<meta
					name="og:description"
					content={
						srcLang === "ja"
							? "Somhako（ソムハコ）は、採用担当者に寄り添うAI型採用プラットフォームです。採用担当者のことを考えた次世代型採用管理システム（ATS）で業務の効率化や負荷軽減を体験してください。Somhako（ソムハコ）は、人材採用に特化し開発したAIが採用業務の自動化、対話型AIによる業務サポート、きめ細やかなサポートを提供します。"
							: "Somhako is an AI-based recruiting platform that is close to recruiters. Somhako is an AI-driven recruiting platform that is designed with the recruiter in mind, providing automated recruiting operations, interactive AI support, and detailed support."
					}
				/>

				<meta
					name="og:title"
					content={
						srcLang === "ja"
							? "AI型採用管理システム「Somhako(ソムハコ)」"
							: 'AI-based Recruitment Management System "Somhako”'
					}
				/>

				<meta
					name="description"
					content={
						srcLang === "ja"
							? "Somhako（ソムハコ）は、採用担当者に寄り添うAI型採用プラットフォームです。採用担当者のことを考えた次世代型採用管理システム（ATS）で業務の効率化や負荷軽減を体験してください。Somhako（ソムハコ）は、人材採用に特化し開発したAIが採用業務の自動化、対話型AIによる業務サポート、きめ細やかなサポートを提供します。"
							: "Somhako is an AI-based recruiting platform that is close to recruiters. Somhako is an AI-driven recruiting platform that is designed with the recruiter in mind, providing automated recruiting operations, interactive AI support, and detailed support."
					}
				/>
			</Head>
			<main className=" ">
				<NoAuthHeader scrollTop={scrollTop} setbookADemo={setbookADemo} />

				<ToggleLang />
				<BookADemo bookADemo={bookADemo} setbookADemo={setbookADemo} />
				<RequestFM requestFM={requestFM} setrequestFM={setrequestFM} />
				<div
					id="overlay"
					className="fixed left-0 top-0 z-[9] hidden h-full w-full bg-[rgba(0,0,0,0.2)] dark:bg-[rgba(255,255,255,0.2)]"
				></div>

				<div className="h-[100vh] w-[100vw] overflow-y-scroll" onScroll={handleScroll}>
					{/* hero section */}
					<div
						className="h-auto w-full   border-t-2 border-transparent xl:min-h-[100vh]"
						style={{
							background: "linear-gradient(70deg, #2D129A -5.44%, #47BBFD 120.58%)"
						}}
					>
						<div
							className="relative mx-auto   sm:max-w-[600px] md:max-w-[720px] lg:max-w-[991px] xl:min-h-[100vh] xl:max-w-[1216px] 2xl:max-w-[1448px]"
							style={{ height: "inherit" }}
						>
							<div className="absolute left-0 top-0 z-0 w-full xl:min-h-[100vh]" style={{ height: "100%" }}>
								<div className="flex items-center justify-center " style={{ height: "inherit" }}>
									<Image
										width={1000}
										height={1000}
										src={overlay2}
										alt="img"
										className="h-auto w-full  opacity-10 invert"
									/>
								</div>
							</div>
							<div className="mt-[4rem] xl:min-h-[calc(100vh-4rem)]" style={{ height: "inherit" }}>
								<div
									className="my-4 flex flex-col items-center justify-around gap-10 max-xl:justify-around xl:min-h-[calc(100vh-6rem)]"
									style={{ height: "inherit" }}
								>
									<div className="h-max w-full">
										<div className="flex w-full flex-col items-center justify-center xl:flex-row">
											<div className="w-[55vw] flex-row items-center justify-center p-4  text-center text-white max-xl:my-2 max-xl:w-full max-xl:py-2 max-sm:px-2">
												<p className="z-10 mb-2 text-left text-[4vw] font-bold leading-[5vw] tracking-[0.5vw] max-xl:mb-4 max-xl:text-center max-xl:text-[5vw] max-xl:leading-[6.5vw] max-sm:mb-2">
													{t("Noauth.home.text1")}
													<br />

													{t("Noauth.home.text2")}
												</p>
												<p className="z-10 mb-8 w-[35vw] text-justify text-[1vw] font-light  max-xl:w-full max-xl:text-center max-xl:text-[2vw] max-sm:mb-3 max-sm:text-[2.5vw]">
													{t("Noauth.home.text3")}
												</p>
												<div className=" flex flex-row items-center justify-start max-xl:justify-center max-md:justify-center max-md:gap-4 max-sm:flex-col">
													<button
														className="transform rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-blue-600 hover:to-blue-800 hover:brightness-110 active:animate-bounce"
														onClick={() => setbookADemo(true)}
													>
														{t("Noauth.home.btn1")}
													</button>
													<div className="-translate-x-3 scale-75 max-sm:-translate-x-0">
														<button
															className="learn-more1"
															style={{ width: "18rem" }}
															onClick={() => setrequestFM(true)}
														>
															<span className="circle" aria-hidden="true">
																<span className="icon arrow"></span>
															</span>
															<span className="button-text">{t("Noauth.home.btn2")}</span>
														</button>
													</div>
												</div>
											</div>
											<div className="flex w-[45vw] items-center justify-end  p-4 max-xl:my-2 max-xl:w-[50vw] max-xl:py-2 max-sm:w-auto max-sm:px-2">
												<Image src={bgFinal} alt="bg1x" width={1000} height={1000} className="z-10 h-auto w-auto" />
											</div>
										</div>
									</div>
									<div className="flex h-max w-full items-center justify-center max-xl:pb-4">
										<div className="cards z-10 grid grid-cols-4 max-xl:grid-cols-2 max-sm:mb-4 max-sm:cursor-none max-sm:grid-cols-1">
											<div className="card group">
												<p className="px-1 text-[1vw] font-bold uppercase tracking-wide group-hover:font-bold max-xl:text-[1.7vw] max-sm:text-[2.5vw]">
													{t("Noauth.home.text4")}
												</p>
												<p className="px-1.5 text-[.6vw] font-medium max-xl:text-[1.3vw] max-sm:text-[2vw]">
													{t("Noauth.home.text5")}
												</p>
											</div>
											<div className="card group">
												<p className="px-1 text-[1vw] font-bold uppercase tracking-wide group-hover:font-bold max-xl:text-[1.7vw] max-sm:text-[2.5vw]">
													{t("Noauth.home.text6")}
												</p>
												<p className="px-1.5 text-[.6vw] font-medium max-xl:text-[1.3vw] max-sm:text-[2vw]">
													{t("Noauth.home.text7")}
												</p>
											</div>
											<div className="card group">
												<p className="px-1 text-[1vw] font-bold uppercase tracking-wide group-hover:font-bold max-xl:text-[1.7vw] max-sm:text-[2.5vw]">
													{t("Noauth.home.text8")}
												</p>
												<p className="px-1.5 text-[.6vw] font-medium max-xl:text-[1.3vw] max-sm:text-[2vw]">
													{t("Noauth.home.text9")}
												</p>
											</div>
											<div className="card group">
												<p className="px-1 text-[1vw] font-bold uppercase tracking-wide group-hover:font-bold max-xl:text-[1.7vw] max-sm:text-[2.5vw]">
													{t("Noauth.home.text10")}
												</p>
												<p className="px-1.5 text-[.6vw] font-medium max-xl:text-[1.3vw] max-sm:text-[2vw]">
													{t("Noauth.home.text11")}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* benefit section */}
					<div className="h-auto w-full  bg-[#F5F6F8] xl:min-h-[100vh]">
						<div
							className="relative mx-auto   sm:max-w-[600px] md:max-w-[720px] lg:max-w-[991px] xl:min-h-[100vh] xl:max-w-[1216px]  2xl:max-w-[1448px]"
							style={{ height: "inherit" }}
						>
							<div className="z-10  xl:min-h-[100vh]" style={{ height: "inherit" }}>
								<div className="flex flex-row gap-2  max-md:gap-0  xl:min-h-[100vh]" style={{ height: "inherit" }}>
									<div className="h-auto w-[10vw] ">
										<span className="flex h-full items-center justify-center border-r-2 border-dashed border-borderColor  max-lg:items-start max-lg:pt-[4rem] ">
											<p
												className="select-none text-[4vw] font-extrabold tracking-wide text-black/[0.1]"
												style={{ textOrientation: "upright", writingMode: "vertical-lr" }}
											>
												Benefits
											</p>
										</span>
									</div>
									<div className="h-auto w-[90vw] ">
										<div className="flex h-full flex-col items-center justify-around gap-20 max-md:gap-10 ">
											<div className="flex w-full flex-row items-center justify-center max-xl:flex-col max-xl:gap-2 max-md:p-2">
												<div className="w-full flex-grow  ">
													<div className="flex w-full flex-col gap-2 p-4 max-xl:items-center max-xl:justify-center max-md:p-0">
														<div
															className="text-[2.5vw] font-bold uppercase tracking-[0.15vw] max-xl:text-center max-xl:text-[3vw] max-md:text-[3.5vw]"
															style={{
																background:
																	"-webkit-linear-gradient(75deg, rgba(15, 101, 205, 0.90) -1.16%, rgba(67, 165, 229, 0.63) 108.83%)",
																WebkitBackgroundClip: "text",
																WebkitTextFillColor: "transparent"
															}}
														>
															{t("Noauth.home.text12")}
														</div>
														<div className="w-[40vw] text-[1vw] text-black max-xl:w-[60vw]  max-xl:text-[2vw] max-md:text-[2.5vw] lg:text-justify">
															{t("Noauth.home.text13")}
														</div>
													</div>
												</div>
												<div className="flex items-center justify-center  p-4 px-10">
													<Image
														src={benfitsImg1}
														alt="bg1x"
														width={1000}
														height={1000}
														className="z-20  h-auto w-fit max-lg:w-[30vw] max-md:w-fit"
													/>
												</div>
											</div>
											<div className="w-full ">
												<Tabs t={t} />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* novus section */}
					<div
						className="h-auto w-full  xl:min-h-[100vh]"
						style={{
							background: "linear-gradient(70deg, #2D129A -5.44%, #47BBFD 120.58%)"
						}}
					>
						<div className="relative w-full  xl:min-h-[100vh]" style={{ height: "inherit" }}>
							<div className="absolute left-0 top-0 z-0 w-full xl:min-h-[100vh]" style={{ height: "100%" }}>
								<div className="flex items-end justify-start" style={{ height: "inherit" }}>
									<Image
										width={1000}
										height={1000}
										src={novusSection}
										alt="img"
										className="h-[100%] w-fit object-fill"
									/>
								</div>
							</div>
							<div className="mx-auto   sm:max-w-[600px] md:max-w-[720px] lg:max-w-[1216px] xl:max-w-[991px] 2xl:max-w-[1448px]">
								<div
									className="z-10 flex items-center justify-center p-8  max-xl:items-start max-md:p-2 xl:min-h-[100vh]"
									style={{ height: "inherit" }}
								>
									<div className="z-10 ml-[30vw] flex w-[50vw] flex-col gap-4 rounded-3xl p-4 text-white max-xl:ml-0 max-xl:w-[60vw] max-xl:border-l-2 max-xl:border-t-2  max-xl:border-white/[0.4] max-xl:bg-black/[0.15] max-xl:backdrop-blur max-md:w-[80vw]  ">
										<div className="z-10 text-[1.5vw] font-light leading-[3vw]  text-white max-xl:text-[1.7vw] max-xl:leading-[4vw]  max-xl:text-white max-md:text-[2.5vw] max-md:leading-[5vw]">
											<span className="z-10 text-[3.5vw] font-semibold uppercase tracking-wider max-xl:text-[4vw] max-md:text-[5vw]">
												{t("Noauth.home.text35")}
											</span>{" "}
											{t("Noauth.home.text36")}
										</div>
										<div className="z-10 flex justify-start  max-xl:justify-center">
											<button
												className="btn1 rounded-full px-6 py-2 text-xl"
												onClick={() => {
													router.push("/novus");
												}}
											>
												{t("Noauth.home.btn3")}
												<div className="star-1">
													<svg
														xmlnsXlink="http://www.w3.org/1999/xlink"
														viewBox="0 0 784.11 815.53"
														style={{
															shapeRendering: "geometricPrecision",
															textRendering: "geometricPrecision",
															imageRendering: "optimizeQuality",
															fillRule: "evenodd",
															clipRule: "evenodd"
														}}
														version="1.1"
														xmlSpace="preserve"
														xmlns="http://www.w3.org/2000/svg"
													>
														<defs></defs>
														<g id="Layer_x0020_1">
															<metadata id="CorelCorpID_0Corel-Layer"></metadata>
															<path
																d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
																className="fil0"
															></path>
														</g>
													</svg>
												</div>
												<div className="star-2">
													<svg
														xmlnsXlink="http://www.w3.org/1999/xlink"
														viewBox="0 0 784.11 815.53"
														style={{
															shapeRendering: "geometricPrecision",
															textRendering: "geometricPrecision",
															imageRendering: "optimizeQuality",
															fillRule: "evenodd",
															clipRule: "evenodd"
														}}
														version="1.1"
														xmlSpace="preserve"
														xmlns="http://www.w3.org/2000/svg"
													>
														<defs></defs>
														<g id="Layer_x0020_1">
															<metadata id="CorelCorpID_0Corel-Layer"></metadata>
															<path
																d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
																className="fil0"
															></path>
														</g>
													</svg>
												</div>
												<div className="star-3">
													<svg
														xmlnsXlink="http://www.w3.org/1999/xlink"
														viewBox="0 0 784.11 815.53"
														style={{
															shapeRendering: "geometricPrecision",
															textRendering: "geometricPrecision",
															imageRendering: "optimizeQuality",
															fillRule: "evenodd",
															clipRule: "evenodd"
														}}
														version="1.1"
														xmlSpace="preserve"
														xmlns="http://www.w3.org/2000/svg"
													>
														<defs></defs>
														<g id="Layer_x0020_1">
															<metadata id="CorelCorpID_0Corel-Layer"></metadata>
															<path
																d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
																className="fil0"
															></path>
														</g>
													</svg>
												</div>
												<div className="star-4">
													<svg
														xmlnsXlink="http://www.w3.org/1999/xlink"
														viewBox="0 0 784.11 815.53"
														style={{
															shapeRendering: "geometricPrecision",
															textRendering: "geometricPrecision",
															imageRendering: "optimizeQuality",
															fillRule: "evenodd",
															clipRule: "evenodd"
														}}
														version="1.1"
														xmlSpace="preserve"
														xmlns="http://www.w3.org/2000/svg"
													>
														<defs></defs>
														<g id="Layer_x0020_1">
															<metadata id="CorelCorpID_0Corel-Layer"></metadata>
															<path
																d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
																className="fil0"
															></path>
														</g>
													</svg>
												</div>
												<div className="star-5">
													<svg
														xmlnsXlink="http://www.w3.org/1999/xlink"
														viewBox="0 0 784.11 815.53"
														style={{
															shapeRendering: "geometricPrecision",
															textRendering: "geometricPrecision",
															imageRendering: "optimizeQuality",
															fillRule: "evenodd",
															clipRule: "evenodd"
														}}
														version="1.1"
														xmlSpace="preserve"
														xmlns="http://www.w3.org/2000/svg"
													>
														<defs></defs>
														<g id="Layer_x0020_1">
															<metadata id="CorelCorpID_0Corel-Layer"></metadata>
															<path
																d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
																className="fil0"
															></path>
														</g>
													</svg>
												</div>
												<div className="star-6">
													<svg
														xmlnsXlink="http://www.w3.org/1999/xlink"
														viewBox="0 0 784.11 815.53"
														style={{
															shapeRendering: "geometricPrecision",
															textRendering: "geometricPrecision",
															imageRendering: "optimizeQuality",
															fillRule: "evenodd",
															clipRule: "evenodd"
														}}
														version="1.1"
														xmlSpace="preserve"
														xmlns="http://www.w3.org/2000/svg"
													>
														<defs></defs>
														<g id="Layer_x0020_1">
															<metadata id="CorelCorpID_0Corel-Layer"></metadata>
															<path
																d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
																className="fil0"
															></path>
														</g>
													</svg>
												</div>
											</button>
										</div>
									</div>
								</div>
							</div>
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
									{t("Noauth.home.text37")}
								</div>
								<div className="z-10 flex justify-start   pt-4 text-white max-md:pt-4">
									<div className="-translate-x-3 scale-90 ">
										<button className="learn-more1" onClick={() => setbookADemo(true)}>
											<span className="circle" aria-hidden="true">
												<span className="icon arrow"></span>
											</span>
											<span className="button-text">{t("Noauth.home.btn4")}</span>
										</button>
									</div>
								</div>
							</p>
							<div className="py-auto col-span-2 my-auto grid h-full w-full max-w-[90%]  p-4 max-md:col-span-5 max-md:max-w-[50%]">
								<Image
									src={demoBg}
									alt="LP"
									width={"1000"}
									height={"1000"}
									className="py-auto z-10 my-auto h-auto w-full  object-fill"
								/>
							</div>
						</div>
					</div>

					{/* why section */}
					<div
						className="h-auto w-full "
						style={{
							background: "linear-gradient(70deg, #2D129A -5.44%, #47BBFD 120.58%)"
						}}
					>
						<div className="mx-auto   sm:max-w-[600px] md:max-w-[720px] lg:max-w-[991px] xl:max-w-[1216px] 2xl:max-w-[1448px]">
							<div
								className="flex flex-col items-center justify-center gap-8 "
								style={{ minHeight: "auto", height: "inherit" }}
							>
								<div className="m-2 mx-auto mt-8 max-w-md overflow-hidden rounded-xl bg-white shadow-md md:max-w-3xl">
									<div className="md:flex">
										<div className="p-8">
											<div
												className="text-3xl font-semibold uppercase tracking-widest "
												style={{
													background:
														"linear-gradient(75deg, rgba(15, 101, 205, 0.90) -1.16%, rgba(67, 165, 229, 0.63) 108.83%)",
													backgroundClip: "text",
													WebkitBackgroundClip: "text",
													WebkitTextFillColor: "transparent"
												}}
											>
												{t("Noauth.home.text38")}
											</div>
											<a href="#" className="mt-1 block text-lg font-medium leading-tight text-black hover:underline">
												{t("Noauth.home.text39")}
												<span className="font-bold">{t("Noauth.home.text40")}</span>
											</a>
											<p className="mt-2 text-slate-500">{t("Noauth.home.text41")}</p>
										</div>
										<div className="md:shrink-0">
											<Image
												src={whySomhako}
												alt="why"
												width={1000}
												height={1000}
												className="h-full w-full object-cover md:w-72"
											/>
										</div>
									</div>
								</div>

								<div className="m-2 mb-8 h-auto  w-full ">
									<Slider {...settings}>
										{whyHeading_1.map((data, i) => (
											<div key={i}>
												<div className="min-h-auto mx-auto my-auto flex w-[80vw] items-center justify-center gap-4  p-4 px-12 max-xl:h-auto max-xl:min-h-fit max-xl:w-[90vw] max-md:flex-col max-md:p-2">
													<div className="flex flex-grow flex-col gap-4 ">
														<div className="w-full text-[2vw]  text-white max-xl:text-[3.3vw] max-md:text-center max-md:text-[4vw]">
															{data.title}
														</div>
														<div className="w-[90%] text-[1vw] font-light tracking-wider text-white max-xl:text-[2vw] max-md:w-full max-md:text-center max-md:text-[2.5vw]">
															{data.sub}
														</div>
														<div className="z-10 flex justify-start  pt-8 text-white max-md:justify-center">
															<button
																className="transform rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-blue-600 hover:to-blue-800 hover:brightness-110 active:animate-bounce"
																onClick={() => {
																	router.push("/pricing");
																}}
															>
																{t("Noauth.home.btn5")}
															</button>
														</div>
													</div>
													<div className="h-full w-full  xl:h-[60vh]">
														<Image
															src={data.img}
															alt="why"
															width={1000}
															height={1000}
															className="mx-auto h-full w-auto "
														/>
													</div>
												</div>
											</div>
										))}
									</Slider>
									<style>
										{`
			/* Change the color of slick dots to white */
			.slick-dots li button:before {
				color: white;
			}
			.slick-dots li.slick-active button:before {
				color: white;
			}
			`}
									</style>
								</div>
							</div>
						</div>
					</div>

					{/* dream section */}
					<div className=" h-auto  w-full   bg-black">
						<div className="mx-auto flex items-center justify-evenly gap-10   p-4 py-0 max-md:flex-col max-md:justify-center max-md:gap-4 max-md:p-2  sm:max-w-[600px] md:max-w-[720px] lg:max-w-[991px] xl:max-w-[1216px] 2xl:max-w-[1448px]">
							<div className="z-10  flex w-[50%] justify-center  max-md:w-auto">
								<Image src={dream2} height={1000} width={1000} alt="123" className="h-auto w-auto " />
							</div>
							<p className="flex w-[50%] flex-col gap-4 max-md:w-auto">
								<div className="z-10 w-fit  text-left text-[2.5vw] font-bold uppercase tracking-[0.25vw] text-blue-700 max-lg:text-center max-md:w-full max-md:text-center max-md:text-[3.5vw]">
									{t("Noauth.home.text50")}
								</div>
								<div className="w-[90%] text-[1vw] font-light tracking-wider text-white max-lg:w-full max-lg:text-center max-md:text-[2vw]">
									{t("Noauth.home.text51")}
								</div>
								<div className="w-[90%] text-[1.2vw] tracking-wider text-white max-lg:w-full max-lg:text-center max-md:text-[2.2vw]">
									{t("Noauth.home.text52")}
								</div>
								<div className="z-10 flex justify-start  text-white max-lg:justify-center">
									<button
										className="transform rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-blue-600 hover:to-blue-800 hover:brightness-110 active:animate-bounce"
										onClick={() => setbookADemo(true)}
									>
										{t("Noauth.home.text53")}
									</button>
								</div>
							</p>
						</div>
					</div>

					{/* faq section */}
					<div
						className="h-auto  w-full   "
						style={{
							background: "linear-gradient(70deg, #2D129A -5.44%, #47BBFD 120.58%)"
						}}
					>
						<div className="mx-auto   sm:max-w-[600px] md:max-w-[720px] lg:max-w-[991px] xl:max-w-[1216px] 2xl:max-w-[1448px]">
							<div className="flex flex-col items-center justify-center gap-0 ">
								<div className="m-2 h-auto   py-4 text-[2.5vw] font-bold tracking-[0.25vw] text-white max-xl:text-center max-md:w-full max-md:text-center max-md:text-[3.5vw]">
									FAQ
								</div>
								<div
									className="m-2 flex h-auto w-full items-center justify-center  p-8"
									style={{ minHeight: "auto", height: "inherit" }}
								>
									<div className="min-h-auto flex w-[70vw] items-center gap-4 rounded-3xl bg-white p-4 px-12 max-xl:h-auto max-xl:min-h-fit max-xl:w-[90vw] max-xl:flex-col  max-md:p-2">
										<div className="flex w-[30vw] justify-center">
											<Image src={faq} alt="why" width={1000} height={1000} className="h-auto w-auto" />
										</div>
										<div className="flex w-[70vw] flex-col gap-4 ">
											<div className="px-2 text-center text-[1.3vw] font-semibold tracking-wider text-blue-700 max-xl:text-[1.7vw] max-md:text-[2.3vw]">
												{t("Noauth.home.text54")}
											</div>
											<div className="max-h-[30vh] overflow-auto px-1">
												<Faq t={t} />
											</div>
										</div>
									</div>
								</div>
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
