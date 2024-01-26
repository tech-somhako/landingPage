import Head from "next/head";
import React, { useRef, Fragment, useState, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NoAuthHeader from "@/components/noAuth/NoAuthHeader";
import NoAuthFooter from "@/components/noAuth/NoAuthFooter";
import Image from "next/image";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { axiosInstance, axiosInstance2 } from "../api/axiosApi";
import Link from "next/link";
import ToggleLang from "@/components/noAuth/ToggleLang";
import { useLangStore } from "@/utils/code";
import BookADemo from "@/components/noAuth/BookADemo";
import { useRouter } from "next/router";

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

	const [publogs, setpublogs] = useState([]);
	const [poblogs, setpoblogs] = useState([]);

	async function loadProductUpdateBlogs() {
		await axiosInstance2
			.get("admin/fetch-product-updates-blogs/")
			.then((response) => {
				console.log("!!!!", "loadProductUpdateBlogs response", response.data);
				setpublogs(response.data);
			})
			.catch((error) => {
				setpublogs([]);
				console.log("!!!!", "loadProductUpdateBlogs error", error);
			});
	}

	async function loadProductOtherBlogs() {
		await axiosInstance2
			.get("admin/fetch-other-blogs/")
			.then((response) => {
				console.log("!!!!", "loadProductOtherBlogs response", response.data);
				setpoblogs(response.data);
			})
			.catch((error) => {
				setpoblogs([]);
				console.log("!!!!", "loadProductOtherBlogs error", error);
			});
	}

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
		loadProductUpdateBlogs();
		loadProductOtherBlogs();
	}, []);

	useEffect(() => {
		console.log("!!!", state);
	}, [state]);
	const [bookADemo, setbookADemo] = useState(false);

	const router = useRouter();

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
								{publogs && publogs.length > 0 && (
									<div className="h-auto w-full   p-8 max-lg:p-4 max-lg:pb-[4rem] max-md:p-2 max-md:pb-[4rem]">
										<p className="mx-auto w-full p-3 text-center text-3xl font-semibold tracking-[6.4px]">
											{srcLang === "ja" ? "最新情報" : "Latest updates"}
										</p>
										<Slider {...settings}>
											{publogs.map((data, i) => (
												<div key={i}>
													<div
														className="mx-auto flex w-full cursor-pointer flex-col items-center  bg-white p-3  md:max-w-3xl md:space-x-5 md:space-y-0 md:odd:flex-row md:even:flex-row-reverse"
														// onClick={() => {
														// 	window.open(data.link, "_blank");
														// }}
													>
														<div className="h-auto w-[40%] max-md:w-full">
															<Image
																src={data.image.image}
																alt={data.image.alt_text}
																title={data.image.title}
																width={500}
																height={500}
																className="ml-auto h-[20vh] w-full object-cover max-md:mx-auto max-md:h-full"
															/>
														</div>

														<div className="flex h-full w-[60%] flex-col space-y-2 bg-white p-3 max-md:w-full">
															<h3 className="w-[100%] truncate text-xl font-semibold text-gray-800 md:text-2xl">
																{data.title}
															</h3>
															<Link href={`/blogs/${data.slug}`} className="text-[#2D129A] hover:underline">
																read more
															</Link>
														</div>
													</div>
												</div>
											))}
											{/* {state &&
											state.length > 0 &&
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
											))} */}
										</Slider>
									</div>
								)}

								{poblogs.length > 0 || publogs.length > 0 ? (
									<div>
										<button
											className="transform rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-3 py-1 text-[10px] tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-blue-600 hover:to-blue-800 hover:brightness-110 active:animate-bounce"
											onClick={() => router.push("blogs/all")}
										>
											Explore more blogs
										</button>
									</div>
								) : (
									<></>
								)}

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

								{poblogs &&
									poblogs.length > 0 &&
									poblogs.map((data, i) => (
										<div
											className="mx-auto flex w-full cursor-pointer flex-col items-center space-y-3 rounded-xl bg-white p-3 shadow-lg hover:shadow-xl md:max-w-3xl md:space-x-5 md:space-y-0 md:odd:flex-row md:even:flex-row-reverse"
											key={i}
											// onClick={() => {
											// 	window.open(data.link, "_blank");
											// }}
										>
											<div className="h-auto w-[40%] max-md:w-full">
												<Image
													src={data.image.image}
													alt={data.image.alt_text}
													title={data.image.title}
													width={500}
													height={500}
													className="ml-auto h-[30vh] w-full object-cover max-md:mx-auto max-md:h-full"
												/>
											</div>

											<div className="flex h-full w-[60%] flex-col space-y-2 bg-white p-3 max-md:w-full">
												<div className="item-center flex justify-between">
													<div className="hidden rounded-full bg-gray-200 px-3 py-1 text-xs font-medium text-gray-800 md:block">
														{data.category.title}
													</div>
												</div>
												<h3 className="w-[100%] truncate text-xl font-semibold text-gray-800 md:text-2xl">
													{data.title}
												</h3>
												<Link href={`/blogs/${data.slug}`} className="text-[#2D129A] hover:underline">
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
