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
import moment from "moment";

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
	const [blogDetail, setblogDetail] = useState({});

	const [bookADemo, setbookADemo] = useState(false);

	const router = useRouter();

	const { slug } = router.query;

	useEffect(() => {
		if (slug && slug.length > 0) {
			loadBlogDetail(slug);
		}
	}, [slug]);

	async function loadBlogDetail(slug: any) {
		await axiosInstance2
			.get(`admin/fetch-blog-detail/${slug}/`)
			.then((response) => {
				console.log("!!!!", "loadBlogDetail response", response.data);
				setblogDetail(response.data);
			})
			.catch((error) => {
				setblogDetail({});
				router.back();
				console.log("!!!!", "loadBlogDetail error", error);
			});
	}

	return (
		<>
			<Head>
				<title>Blog - {blogDetail.title}</title>
				<meta
					name="description"
					content={blogDetail.title ? blogDetail.meta_description : "dummy description"}
					key="desc"
				/>
				<meta property="og:title" content={blogDetail.title ? blogDetail.meta_title : "dummy title"} />
				<meta
					property="og:description"
					content={blogDetail.title ? blogDetail.meta_description : "dummy description"}
				/>
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
				<meta name="keywords" content={blogDetail.keywords ? blogDetail.keywords.join() : ""} />
				<meta name="author" content="somhako" />
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
							{blogDetail.title && (
								<div className="mt-[-16rem] flex h-auto w-[60vw] flex-row flex-wrap items-center justify-center gap-8 rounded  bg-white p-4  px-12 shadow-lg max-lg:h-auto max-lg:min-h-fit max-lg:w-[90vw] max-md:mt-[-8rem] max-md:flex-col max-md:p-2">
									<nav
										className="flex rounded-lg border border-blue-200 bg-blue-50 px-5 py-3 text-blue-700"
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
													<span className="ml-1 max-w-[20vw] cursor-not-allowed truncate text-sm font-medium text-blue-700 md:ml-2">
														{blogDetail.title}
													</span>
												</div>
											</li>
										</ol>
									</nav>

									<h1 className="w-[80%] text-center text-2xl font-semibold tracking-[4px]">{blogDetail.title}</h1>

									<div>
										<Image
											src={blogDetail.image.image}
											title={blogDetail.image.title}
											alt={blogDetail.image.alt_text}
											width={1000}
											height={1000}
											className="h-full max-h-[60vh] w-full object-cover"
										/>
									</div>

									<div className="blogContent" dangerouslySetInnerHTML={{ __html: blogDetail.description }}></div>

									<span className="inline-flex items-center rounded border border-blue-400 bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 dark:bg-gray-700 dark:text-blue-400">
										<svg
											className="me-1.5 h-2.5 w-2.5"
											aria-hidden="true"
											xmlns="http://www.w3.org/2000/svg"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm3.982 13.982a1 1 0 0 1-1.414 0l-3.274-3.274A1.012 1.012 0 0 1 9 10V6a1 1 0 0 1 2 0v3.586l2.982 2.982a1 1 0 0 1 0 1.414Z" />
										</svg>
										{moment(blogDetail.date).fromNow()}
									</span>

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
							)}
						</div>
					</div>

					<NoAuthFooter setbookADemo={setbookADemo} />
				</div>
			</main>
		</>
	);
}

// export async function getStaticProps({ context, locale }: any) {
// 	const translations = await serverSideTranslations(locale, ["common"]);
// 	return {
// 		props: {
// 			...translations
// 		}
// 	};
// }
