//@collapse
import Head from "next/head";
import React, { useRef, Fragment, useState, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NoAuthHeader from "@/components/noAuth/NoAuthHeader";
import NoAuthFooter from "@/components/noAuth/NoAuthFooter";
import Image from "next/image";
import { axiosInstance, axiosInstance2 } from "./api/axiosApi";
import Link from "next/link";
import ToggleLang from "@/components/noAuth/ToggleLang";
import BookADemo from "@/components/noAuth/BookADemo";
import { RadioGroup, Switch } from "@headlessui/react";
import toastcomp from "@/components/toast";
import { useRouter } from "next/router";
import { useLangStore } from "@/utils/code";

export default function PricingPage() {
	const srcLang = useLangStore((state: { lang: any }) => state.lang);
	const [scrollTop, setScrollTop] = useState(0);

	const handleScroll = (event) => {
		setScrollTop(event.currentTarget.scrollTop);
	};

	useEffect(() => {
		console.log("scrollTop", scrollTop);
	}, [scrollTop]);

	const [bookADemo, setbookADemo] = useState(false);
	const [enabled, setEnabled] = useState(true);

	const router = useRouter();

	return (
		<>
			<Head>
				<title>Pricing Page ATS</title>
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
						className="h-auto  w-full border-t-2 border-transparent  xl:min-h-[100vh]"
						style={{
							background: "linear-gradient(70deg, #2D129A -5.44%, #47BBFD 120.58%)"
						}}
					>
						<div
							className="relative mx-auto   sm:max-w-[600px] md:max-w-[720px] lg:max-w-[991px] xl:min-h-[100vh] xl:max-w-[1216px] 2xl:max-w-[1448px]"
							style={{ height: "inherit" }}
						>
							<div className="mt-[4rem] flex h-auto w-full flex-col items-center justify-start gap-4  p-8 max-xl:px-0 max-xl:py-4 max-md:gap-10 max-md:p-0 xl:min-h-[calc(100vh-4rem)]">
								<div className="flex flex-col justify-center gap-4">
									<div className="w-full text-center text-[2vw] font-bold text-white max-xl:text-[3.3vw] max-md:text-[4vw]">
										{srcLang === "ja"
											? "機能豊富なプランは、透明性のある価格設定となっている"
											: "Our feature-rich plans come with transparent pricing."}
									</div>
									<div className="w-full px-[20rem] text-center text-[1vw] font-light  tracking-wider text-white max-xl:px-[10rem] max-xl:text-[2vw] max-md:px-[5rem] max-md:text-[3.3vw]">
										{srcLang === "ja"
											? "世界で最も包括的な採用管理システムで採用業務全体を管理。"
											: "Manage your entire talent acquisition process and talent management with the world's most comprehensive recruiting software."}
									</div>
									<div className="mx-auto">
										<button
											className="transform rounded-normal bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-blue-600 hover:to-blue-800 hover:brightness-110 active:animate-bounce"
											// onClick={() => setbookADemo(true)}
											onClick={() => {
												window.location.href = `https://ats.somhako.com/${srcLang}/auth/signup`;
											}}
										>
											{srcLang === "ja" ? "無料トライアルを開始する" : "Start your FREE trial"}
										</button>
									</div>
								</div>

								<div className="my-[4rem] h-auto rounded-normal bg-white p-10  max-xl:px-4">
									{/* temp changes by naman */}
									{/* <div className="mx-auto flex w-fit items-center gap-2 rounded-normal bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3 tracking-wide text-white shadow-lg">
										<span className={`text-base ${enabled && "font-extra-bold"}`}>
											{srcLang === "ja" ? "毎月" : "Monthly"}
										</span>
										<Switch
											checked={enabled}
											onChange={setEnabled}
											className={`${!enabled ? "bg-white" : "bg-gray-200"}
          relative inline-flex h-[16px] w-[32px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
										>
											<span className="sr-only">Use setting</span>
											<span
												aria-hidden="true"
												className={`${!enabled ? "translate-x-4" : "translate-x-0"}
            pointer-events-none transform shadow-lg transition duration-200 ease-in-out`}
											>
												<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 12 12" fill="none">
													<ellipse cx="6" cy="5.6875" rx="6" ry="5.5" fill="url(#paint0_linear_2283_2614)" />
													<defs>
														<linearGradient
															id="paint0_linear_2283_2614"
															x1="-1.47881"
															y1="9.72058"
															x2="16.3365"
															y2="2.58971"
															gradientUnits="userSpaceOnUse"
														>
															<stop stop-color="#2D129A" />
															<stop offset="1" stop-color="#47BBFD" />
														</linearGradient>
													</defs>
												</svg>
											</span>
										</Switch>
										<span className={`text-base ${!enabled && "font-extra-bold"}`}>
											{srcLang === "ja" ? "毎年" : "Annually"}
										</span>
									</div> */}
									<div className=" grid h-auto w-full grid-cols-1 gap-4 text-black max-xl:gap-x-2 max-xl:px-4 md:grid-cols-4">
										<div className="gradient-blur rounded-lg p-4 shadow-md">
											<h2 className="mb-4 text-lg font-semibold">Free Trial</h2>
											<p className="mb-4 text-2xl font-bold">
												&#165;0 <span className="text-sm font-normal">only 30 Days</span>
											</p>
											<p className="mb-6">Explore the product</p>
											<ul className="mb-6">
												<li>No any limit</li>
												<li>AI Based TA opeations</li>
												<li>Upto 100 applicants</li>
											</ul>
											<button
												className="w-full transform rounded-normal bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-blue-600 hover:to-blue-800 hover:brightness-110 active:animate-bounce"
												// onClick={() => setbookADemo(true)}
												onClick={() => {
													window.location.href = `https://ats.somhako.com/${srcLang}/auth/signup`;
												}}
											>
												Take a free trial
											</button>
										</div>

										<div className="rounded-l p-4 shadow-md">
											<h2 className="mb-4 text-lg font-semibold">Starter</h2>
											<p className="mb-4 text-2xl font-bold">
												{enabled ? (
													<>
														{" "}
														&#165;5,000 <span className="text-sm font-normal">per month</span>
													</>
												) : (
													<>
														{" "}
														&#165;60,000 <span className="text-sm font-normal">per annum</span>
													</>
												)}
											</p>
											<p className="mb-6">Amplify work rate</p>
											<ul className="mb-6">
												<li>Up to 3 team members</li>
												<li>Up to 3 agency contracts</li>
												<li>Up to 3 jobs</li>
											</ul>
											<button
												className="w-full transform rounded-normal bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-blue-600 hover:to-blue-800 hover:brightness-110 active:animate-bounce"
												onClick={() => setbookADemo(true)}
											>
												Get started
											</button>
										</div>

										<div className="gradient-blur rounded-xl bg-blue-500 p-4  text-white shadow-lg shadow-blue-400">
											<h2 className="mb-4 text-lg font-semibold">Standard</h2>
											<p className="mb-4 text-2xl font-bold">
												{enabled ? (
													<>
														{" "}
														{/* temp change naman */}
														{/* &#165;17,500 <span className="text-sm font-normal">per month</span> */}
														&#165;12,000 <span className="text-sm font-normal">per month</span>
													</>
												) : (
													<>
														{" "}
														&#165;2,10,000 <span className="text-sm font-normal">per annum</span>
													</>
												)}
											</p>
											<p className="mb-6">Boost productivity</p>
											<ul className="mb-6">
												<li>Unlimited team members</li>
												<li>Up to 5 agency contracts</li>
												<li>Up to 10 jobs</li>
											</ul>
											<button
												className="w-full transform rounded-normal bg-gradient-to-r from-white to-white/[0.85] px-8 py-3 tracking-wide text-blue-500 shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-white hover:to-white/[0.8] hover:brightness-110 active:animate-bounce"
												onClick={() => setbookADemo(true)}
											>
												Get started
											</button>
											{/* <button className="w-full rounded-md bg-white py-2 text-blue-500">Get started</button> */}
										</div>

										<div className="gradient-blur rounded-lg p-4 shadow-md">
											<h2 className="mb-4 text-lg font-semibold">Enterprise</h2>
											<p className="mb-4 text-2xl font-bold">Custom</p>
											<p className="mb-6">Get max efficiency</p>
											<ul className="mb-6">
												<li>No any limit</li>
												<li>AI Based TA opeations</li>
												<li>Reduce recruitment TAT</li>
											</ul>
											<button
												className="w-full transform rounded-normal bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-blue-600 hover:to-blue-800 hover:brightness-110 active:animate-bounce"
												onClick={() => setbookADemo(true)}
											>
												Request a call
											</button>
										</div>
									</div>
								</div>

								{/* plan comp */}
								<div className="flex flex-col justify-center gap-4">
									<div className="w-full text-center text-[2vw] font-bold text-white max-xl:text-[3.3vw] max-md:text-[4vw]">
										Plan comparison
									</div>
								</div>

								<div className="my-[2rem] h-auto rounded-normal bg-white p-10 text-black  max-xl:px-4 max-md:scale-[.80] max-sm:scale-[.60]">
									<table cellPadding={"0"} cellSpacing={"0"} className="w-full">
										<thead>
											<tr>
												<th className="w-[300px] border-b px-3 py-2"></th>
												<th className="border-b px-3 py-2">Free Trial</th>
												<th className="border-b px-3 py-2">Starter</th>
												<th className="border-b px-3 py-2">Standard</th>
												<th className="border-b px-3 py-2">Enterprise</th>
											</tr>
										</thead>
										<tbody className="text-sm font-semibold">
											<tr className="odd:bg-gray-100">
												<td className="w-[300px] px-3 py-2">Novus AI HR Assistant</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-xmark"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-xmark"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
											</tr>

											{/* temp change naman */}
											{/* remove yearly */}
											<tr className="odd:bg-gray-100">
												<td className="w-[300px] px-3 py-2">Plan Duration</td>
												<td className="px-3 py-2 text-center">Only 30 Days</td>
												<td className="px-3 py-2 text-center">Monthly</td>
												<td className="px-3 py-2 text-center">Monthly</td>
												<td className="px-3 py-2 text-center">Monthly</td>
											</tr>

											<tr className="odd:bg-gray-100">
												<td className="w-[300px] px-3 py-2">Team Members</td>
												<td className="px-3 py-2 text-center">Unlimited</td>
												<td className="px-3 py-2 text-center">Up to 3</td>
												<td className="px-3 py-2 text-center">Unlimited</td>
												<td className="px-3 py-2 text-center">Unlimited</td>
											</tr>

											<tr className="odd:bg-gray-100">
												<td className="w-[300px] px-3 py-2">Vendors/Agency Contracts</td>
												<td className="px-3 py-2 text-center">Up to 2</td>
												<td className="px-3 py-2 text-center">Up to 3</td>
												<td className="px-3 py-2 text-center">Up to 5</td>
												<td className="px-3 py-2 text-center">Unlimited</td>
											</tr>

											<tr className="odd:bg-gray-100">
												<td className="w-[300px] px-3 py-2">Publish/Active Jobs</td>
												<td className="px-3 py-2 text-center">Up to 2</td>
												<td className="px-3 py-2 text-center">Up to 3</td>
												<td className="px-3 py-2 text-center">Up to 10</td>
												<td className="px-3 py-2 text-center">Unlimited</td>
											</tr>

											<tr className="odd:bg-gray-100">
												<td className="w-[300px] px-3 py-2">Application</td>
												<td className="px-3 py-2 text-center">Up to 100</td>
												<td className="px-3 py-2 text-center">80 / 1000</td>
												<td className="px-3 py-2 text-center">240 / 3000</td>
												<td className="px-3 py-2 text-center">Flexible</td>
											</tr>

											<tr className="odd:bg-gray-100">
												<td className="w-[300px] px-3 py-2">Calendar & Interview</td>
												<td className="px-3 py-2 text-center">Automate & Manual</td>
												<td className="px-3 py-2 text-center">Manual</td>
												<td className="px-3 py-2 text-center">Manual</td>
												<td className="px-3 py-2 text-center">Automate & Manual</td>
											</tr>

											<tr className="odd:bg-gray-100">
												<td className="w-[300px] px-3 py-2">Custimize Dashboard</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-xmark"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-xmark"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
											</tr>

											<tr className="odd:bg-gray-100">
												<td className="w-[300px] px-3 py-2">Offer Management</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-xmark"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-xmark"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
											</tr>

											<tr className="odd:bg-gray-100">
												<td className="w-[300px] px-3 py-2">AI Generated Job Description</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-xmark"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-xmark"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
											</tr>

											<tr className="odd:bg-gray-100">
												<td className="w-[300px] px-3 py-2">AI Generated Interview Questions</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-xmark"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-xmark"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
											</tr>

											<tr className="odd:bg-gray-100">
												<td className="w-[300px] px-3 py-2">AI Generated Application Rating</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-xmark"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
											</tr>

											<tr className="odd:bg-gray-100">
												<td className="w-[300px] px-3 py-2">Internal Communication</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-xmark"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
											</tr>

											<tr className="odd:bg-gray-100">
												<td className="w-[300px] px-3 py-2">Analytics</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
											</tr>

											<tr className="odd:bg-gray-100">
												<td className="w-[300px] px-3 py-2">Career & Widget</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
											</tr>

											<tr className="odd:bg-gray-100">
												<td className="w-[300px] px-3 py-2">Application Kanban Board</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
												<td className="px-3 py-2 text-center">
													<i className="fa-solid fa-check"></i>
												</td>
											</tr>
										</tbody>
									</table>
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
