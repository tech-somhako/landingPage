import Head from "next/head";
import React, { useRef, Fragment, useState, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NoAuthHeader from "@/components/noAuth/NoAuthHeader";
import NoAuthFooter from "@/components/noAuth/NoAuthFooter";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { axiosInstance } from "./api/axiosApi";
import Link from "next/link";
import ToggleLang from "@/components/noAuth/ToggleLang";
import { useLangStore } from "@/utils/code";
import BookADemo from "@/components/noAuth/BookADemo";

export default function BlogsPage() {
	const srcLang = useLangStore((state: { lang: any }) => state.lang);
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

	const [state, setState] = useState([]);

	async function loadBlogs(mediumURL: any) {
		await axiosInstance
			.get(mediumURL)
			.then((response) => {
				console.log("!!!", "response", response.data);
				setState(response.data.items);
			})
			.catch((error) => {
				setState((prevState) => ({
					...prevState,
					error: error.toJSON()
				}));
				console.log(error);
			});
	}

	useEffect(() => {
		const mediumURL = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@Somhako";
		loadBlogs(mediumURL);
	}, []);

	useEffect(() => {
		console.log("!!!", state);
	}, [state]);
	const [bookADemo, setbookADemo] = useState(false);

	return (
		<>
			<Head>
				<title>Blogs Page ATS</title>
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
						className="h-auto min-h-[60vh] w-full border-t-2 border-transparent max-md:min-h-[40vh]"
						style={{
							background: "linear-gradient(70deg, #2D129A -5.44%, #47BBFD 120.58%)"
						}}
					>
						<div className="mt-[4rem] flex h-auto min-h-[calc(60vh-4rem)] w-full flex-col items-center justify-start gap-2 p-8 pb-[4rem] max-lg:p-4 max-md:min-h-[calc(40vh-4rem)] max-md:gap-10 max-md:p-2">
							<div className="w-full text-right text-[6vw] font-bold text-black/[0.05] max-lg:text-[7vw] max-md:text-[10vw]">
								Editorial
							</div>
						</div>
					</div>
					<div className="h-auto w-full  bg-[#F5F6F8]">
						<div className="flex h-auto w-full flex-col items-center justify-start gap-2  p-8 max-lg:p-4 max-md:gap-10 max-md:p-2">
							<div className="mt-[-16rem] flex h-auto w-[60vw] flex-row flex-wrap items-center justify-center gap-8 rounded  bg-white p-4  px-12 shadow-lg max-lg:h-auto max-lg:min-h-fit max-lg:w-[90vw] max-md:mt-[-8rem] max-md:flex-col max-md:p-2">
								<div className="m-2 h-auto w-full   p-8 max-lg:p-4 max-lg:pb-[4rem] max-md:p-2 max-md:pb-[4rem]">
									<Slider {...settings}>
										{state &&
											state.map((data, i) => (
												<div key={i}>
													<div
														className="mx-auto flex w-full cursor-pointer flex-col items-center  bg-white p-3  md:max-w-3xl md:space-x-5 md:space-y-0 md:odd:flex-row md:even:flex-row-reverse"
														onClick={() => {
															window.open(data.link, "_blank");
														}}
													>
														<div className="h-auto w-[40%] max-md:w-full">
															<Image
																src={data.thumbnail}
																alt="why"
																width={500}
																height={500}
																className="ml-auto h-[20vh] w-full object-cover max-md:mx-auto max-md:h-full"
															/>
														</div>

														<div className="flex h-full w-[60%] flex-col space-y-2 bg-white p-3 max-md:w-full">
															<h3 className="w-[100%] truncate text-xl font-semibold text-gray-800 md:text-2xl">
																{data.title}
															</h3>
															<Link href={data.link} target="_blank" className="text-[#2D129A] hover:underline">
																read more
															</Link>
														</div>
													</div>
												</div>
											))}
									</Slider>
								</div>

								<div className="flex w-full flex-col items-center justify-center gap-4 ">
									<div className="flex items-center justify-center gap-4 text-lg text-black">
										<Link
											href="https://www.linkedin.com/company/somhakoo/"
											target="_blank"
											className="opacity-80 transition-opacity hover:opacity-100"
										>
											<i className="fa-brands fa-linkedin"></i>
										</Link>
										<Link
											href="https://twitter.com/somhako"
											target="_blank"
											className="my-auto opacity-80 transition-opacity hover:opacity-100"
										>
											<svg
												xmlns="http://www.w3.org/2000/svg"
												height="1rem"
												viewBox="0 0 512 512"
												className="fill-black"
											>
												<path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" />
											</svg>
										</Link>
										<Link
											href="https://medium.com/@somhako"
											target="_blank"
											className="opacity-80 transition-opacity hover:opacity-100"
										>
											<i className="fa-brands fa-medium"></i>
										</Link>
										<Link
											href="https://www.facebook.com/Somhako"
											target="_blank"
											className="opacity-80 transition-opacity hover:opacity-100"
										>
											<i className="fa-brands fa-facebook"></i>
										</Link>
									</div>
									<p className="w-[80%] text-center text-3xl font-semibold tracking-[6.4px]">
										{srcLang === "ja"
											? "ソーシャルフォローで最新情報をチェック"
											: "Follow us on socials to stay updated onthe latest"}
									</p>
								</div>

								{state &&
									state.length > 0 &&
									state.map((data, i) => (
										<div
											className="mx-auto flex w-full cursor-pointer flex-col items-center space-y-3 rounded-xl bg-white p-3 shadow-lg hover:shadow-xl md:max-w-3xl md:space-x-5 md:space-y-0 md:odd:flex-row md:even:flex-row-reverse"
											key={i}
											onClick={() => {
												window.open(data.link, "_blank");
											}}
										>
											<div className="h-auto w-[40%] max-md:w-full">
												<Image
													src={data.thumbnail}
													alt="why"
													width={500}
													height={500}
													className="ml-auto h-[30vh] w-full object-cover max-md:mx-auto max-md:h-full"
												/>
											</div>

											<div className="flex h-full w-[60%] flex-col space-y-2 bg-white p-3 max-md:w-full">
												{/* <div className="item-center flex justify-between">
													<p className="hidden font-medium text-gray-500 md:block">Vacations</p>
													<div className="flex items-center">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-5 w-5 text-yellow-500"
															viewBox="0 0 20 20"
															fill="currentColor"
														>
															<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
														</svg>
														<p className="ml-1 text-sm font-bold text-gray-600">
															4.96
															<span className="font-normal text-gray-500">(76 reviews)</span>
														</p>
													</div>
													<div className="">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															className="h-5 w-5 text-pink-500"
															viewBox="0 0 20 20"
															fill="currentColor"
														>
															<path
																fill-rule="evenodd"
																d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
																clip-rule="evenodd"
															/>
														</svg>
													</div>
													<div className="hidden rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-800 md:block">
														Superhost
													</div>
												</div> */}
												<h3 className="w-[100%] truncate text-xl font-semibold text-gray-800 md:text-2xl">
													{data.title}
												</h3>
												<Link href={data.link} target="_blank" className="text-[#2D129A] hover:underline">
													read more
												</Link>
											</div>
										</div>
									))}
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
