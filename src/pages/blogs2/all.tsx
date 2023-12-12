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

	const [blogs, setblogs] = useState([]);

	async function loadBlogs() {
		await axiosInstance2
			.get("blogs/blog/")
			.then((response) => {
				console.log("!!!!", "loadBlogs response", response.data);
				setblogs(response.data);
			})
			.catch((error) => {
				setblogs([]);
				console.log("!!!!", "loadBlogs error", error);
			});
	}

	useEffect(() => {
		loadBlogs();
	}, []);

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
								<nav
									className="mb-4 flex rounded-lg border border-blue-200 bg-blue-50 px-5 py-3 text-blue-700"
									aria-label="Breadcrumb"
								>
									<ol className="inline-flex items-center space-x-1 md:space-x-3">
										<li className="inline-flex items-center">
											<Link href="/" className="inline-flex items-center text-blue-700 hover:text-blue-900">
												<svg
													className="mr-2.5 h-5 w-5"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
												</svg>
												Home
											</Link>
										</li>
										<li>
											<div className="flex items-center">
												<svg
													className="h-6 w-6 text-blue-400"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fill-rule="evenodd"
														d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
														clip-rule="evenodd"
													></path>
												</svg>
												<Link
													href="/blogs"
													className="ml-1 text-sm font-medium text-blue-700 hover:text-blue-900 md:ml-2"
												>
													Blogs
												</Link>
											</div>
										</li>
										<li aria-current="page">
											<div className="flex items-center">
												<svg
													className="h-6 w-6 text-blue-400"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														fill-rule="evenodd"
														d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
														clip-rule="evenodd"
													></path>
												</svg>
												<span className="ml-1 cursor-not-allowed text-sm font-medium text-blue-700 md:ml-2">
													All blogs
												</span>
											</div>
										</li>
									</ol>
								</nav>
								{blogs && blogs.length > 0 ? (
									<>
										{blogs.map((data, i) => (
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
									</>
								) : (
									<>
										<div className="flex w-full flex-col items-center justify-center gap-4 ">
											<p className="w-[80%] text-center text-xl font-bold">
												{srcLang === "ja"
													? "申し訳ありませんが、現在ブログは利用できません。最新の情報や洞察に期待して、また遊びに来てください。"
													: "Sorry, there are currently no blogs available. Check back soon for the latest updates and insightful content."}
											</p>
										</div>
									</>
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
