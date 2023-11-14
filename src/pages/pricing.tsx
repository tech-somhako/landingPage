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
	const [enabled, setEnabled] = useState(false);

	const router = useRouter();

	return (
		<>
			<Head>
				<title>Pricing Page ATS</title>
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
											onClick={() => {
												router.push("https://ats.somhako.com/auth/signup");
											}}
										>
											{srcLang === "ja" ? "無料トライアルを開始する" : "Start your FREE trial"}
										</button>
									</div>
								</div>

								<div className="my-[4rem] flex h-auto w-fit flex-col gap-10 rounded-normal  bg-white p-10 max-xl:gap-x-2 max-xl:px-4">
									{/* small device */}

									<div className="mx-auto flex w-fit items-center gap-2 rounded-normal bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3 tracking-wide text-white shadow-lg xl:hidden ">
										<span className={`text-base ${!enabled && "font-extra-bold"}`}>
											{srcLang === "ja" ? "/年" : "Yearly"}
										</span>
										<Switch
											checked={enabled}
											onChange={setEnabled}
											className={`${enabled ? "bg-white" : "bg-gray-200"}
          relative inline-flex h-[16px] w-[32px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
										>
											<span className="sr-only">Use setting</span>
											<span
												aria-hidden="true"
												className={`${enabled ? "translate-x-4" : "translate-x-0"}
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
										<span className={`text-base ${enabled && "font-extra-bold"}`}>
											{srcLang === "ja" ? "/月" : "Monthly"}
										</span>
									</div>

									<div className="flex items-center justify-evenly gap-4 max-sm:flex-col xl:hidden">
										<div className="flex w-[50%] flex-col gap-2  px-8  pb-8 text-base font-[300] text-black max-sm:w-full ">
											<div
												className="ml-auto w-fit rounded-full bg-white px-4 py-2 text-xs font-bold"
												style={{
													boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.25)"
												}}
											>
												30 Days Only
											</div>
											<div className="flex items-end">
												<span className="text-5xl font-extrabold max-md:text-3xl max-sm:text-5xl">￥０</span>
												<span className="text-[#848199]">{srcLang === "ja" ? "/毎月" : "/month"}</span>
											</div>
											<span className="mt-4 text-3xl font-bold">
												{srcLang === "ja" ? "無料トライアル" : "FREE trial"}
											</span>
											<span className="text-[#848199]">
												{srcLang === "ja" ? "従量制" : "Experience before you buy"}
											</span>
											<div className="mt-4 flex flex-col gap-1">
												<div className="flex items-start gap-2">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja"
															? "200円/応募者（1000人未満）"
															: "200 Yen/Application for 1st 1000 applications"}
													</span>
												</div>
												<div className="flex items-start gap-2">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg text-[#848199]">
														{srcLang === "ja"
															? "100円/応募者（1001人目～）"
															: "100 Yen/Application for 1001st application owards"}
													</span>
												</div>
											</div>
											<button
												className="mt-4 transform rounded-normal bg-gradient-to-r from-gray-400 to-gray-600 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-gray-500 hover:to-gray-700 hover:brightness-110 active:animate-bounce"
												onClick={() => {
													router.push("https://ats.somhako.com/auth/signup");
												}}
											>
												{srcLang === "ja" ? "今すぐ無料トライアルを！" : "Get FREE trial now"}
											</button>
										</div>

										<div
											className="flex h-fit w-[50%] flex-nowrap items-center justify-center  bg-white px-4 py-8 text-base font-[300] text-black max-sm:w-full"
											style={{
												filter: "drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.25))"
											}}
										>
											<ul className="list-disc px-4">
												<li>{srcLang === "ja" ? "AI人事アシスタント -NOVUS " : "AI HR Assistant -NOVUS"}</li>
												<li>{srcLang === "ja" ? "メンバー数無制限" : "Unlimited members "}</li>
												<li>{srcLang === "ja" ? "ベンダー管理とインターフェース" : "Vendor management"}</li>
												<li>{srcLang === "ja" ? "内蔵チャットシステム " : "internal chat "}</li>
												<li>{srcLang === "ja" ? "Googleカレンダー統合  " : "Googlecalendar intergration "}</li>
												<li>{srcLang === "ja" ? "簡単なキャリアページの統合 " : "Career page "}</li>
												<li>{srcLang === "ja" ? "応募者カンバン表示" : "Applicant kanban "}</li>
												<li>
													{srcLang === "ja" ? "応募者のキュレーションと自動化" : "Applicant curation & automation"}
												</li>
												<li>
													{srcLang === "ja"
														? "スケジューリングとTA業務の自動化"
														: "automated scheduling and TA operations"}
												</li>
												<li>{srcLang === "ja" ? "1つのツールで複数拠点をカバー" : "One tool multi location "}</li>
											</ul>
										</div>
									</div>

									<div className="flex items-center justify-evenly gap-4 max-sm:flex-col-reverse xl:hidden">
										<div
											className="flex h-fit w-[50%] items-center justify-center bg-white   px-4 py-8 text-base font-[300] text-black max-sm:w-full"
											style={{
												filter: "drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.25))"
											}}
										>
											<ul className="list-disc  px-4">
												<li>{srcLang === "ja" ? "最大10名" : "10 members "}</li>
												<li>{srcLang === "ja" ? "ベンダー管理" : "Vendor management"}</li>
												<li>{srcLang === "ja" ? "内蔵チャット" : "internal chat "}</li>
												<li>
													{srcLang === "ja"
														? "グーグルカレンダー統合と手動スケジュール設定"
														: "Googlecalendar intergration "}
												</li>
												<li>{srcLang === "ja" ? "キャリアページ" : "Career page "}</li>
												<li>{srcLang === "ja" ? "応募者カンバン" : "Applicant kanban"}</li>
												<li>{srcLang === "ja" ? "手動ワークフローシステム" : "Manual workflow system"}</li>
												<li>{srcLang === "ja" ? "マニュアルTAオペレーション" : "Manual TA operations "}</li>
												<li>{srcLang === "ja" ? "1ツール多拠点" : "One tool multi location "}</li>
											</ul>
										</div>

										<div className="flex w-[50%] flex-col gap-2  px-8 pb-8 text-base font-[300] text-black max-sm:w-full">
											<div className="flex items-end">
												<span className="text-5xl font-semibold tracking-tight max-md:text-3xl max-sm:text-5xl">
													{enabled ? "￥30,000" : "￥360,000"}
												</span>
												<span className="">
													{enabled ? (
														<>{srcLang === "ja" ? "/月" : "/monthly"}</>
													) : (
														<>{srcLang === "ja" ? "/年" : "/yearly"}</>
													)}
												</span>
											</div>
											<span className="mt-4 text-3xl font-bold">{srcLang === "ja" ? "標準プラン" : "Standard"}</span>
											<span className="text-[#848199]">
												{srcLang === "ja" ? "頻繁に雇用しない人たちへ" : "Designed for occasional hiring"}
											</span>
											<div className="mt-4 flex flex-col gap-1">
												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja"
															? "200円/応募者（1000人未満）"
															: "200 Yen/Application for 1st 1000 applications"}
													</span>
												</div>
												<div className="flex items-start gap-2">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg text-[#848199]">
														{srcLang === "ja"
															? "100円/応募者（1001人目～）"
															: "100 Yen/Application for 1001st application owards"}
													</span>
												</div>
											</div>
											<button
												className="mt-4 transform rounded-normal bg-gradient-to-r from-gray-400 to-gray-600 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-gray-500 hover:to-gray-700 hover:brightness-110 active:animate-bounce"
												onClick={() => setbookADemo(true)}
											>
												{srcLang === "ja" ? "デモを予約する" : "Book a demo"}
											</button>
										</div>
									</div>

									<div className="flex items-center justify-evenly gap-4 max-sm:flex-col xl:hidden">
										<div
											className="flex w-[50%] flex-col rounded-normal  px-8  pb-8 pt-8 text-base font-[300] text-white max-sm:w-full"
											style={{
												background: "linear-gradient(70deg, #2D129A -5.44%, #47BBFD 120.58%)",
												boxShadow: "0px 42px 34px 0px rgba(82, 67, 194, 0.30)"
											}}
										>
											<div className="mb-4 flex items-center justify-start gap-2 text-xs text-white max-md:flex-col">
												<div
													className="rounded-full px-4 py-2 font-bold"
													style={{
														background: "linear-gradient(88deg, #197DF9 1.75%, #45BBED 103.51%)"
													}}
												>
													MOST POPULAR
												</div>
											</div>
											{!enabled && (
												<div className="mt-4 flex items-center gap-4">
													<span className="text-xl font-semibold tracking-tight line-through">￥540,000</span>
													<div className="flex flex-col items-center justify-center rounded-full bg-white p-3 px-3 text-base font-bold text-black">
														<div className="leading-none">-22%</div>
														<div className="text-lg font-black leading-none">OFF</div>
													</div>
													<div className="rotate-180 scale-x-[-1] font-semibold">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															xmlnsXlink="http://www.w3.org/1999/xlink"
															width="31"
															height="30"
															viewBox="0 0 21 20"
															fill="none"
														>
															<path
																d="M0.0424665 19.0432L20.0424 18.9985L20 0L0 0.0447049L0.0424665 19.0432Z"
																fill="url(#pattern1)"
															/>
															<defs>
																<pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
																	<use
																		xlinkHref="#image0_2422_2106"
																		transform="matrix(0.00195312 0 0 0.00205561 0 -0.0262349)"
																	/>
																</pattern>
																<image
																	id="image0_2422_2106"
																	width="512"
																	height="512"
																	xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAEAQAAAAO4cAyAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAQuFJREFUeNrt3XeUFUX2B/Bbb4YZYIAhp2EQEQliIOhiWkXCrgnDmtYAoriI/EDEhGEFDETDmhVFFjGjq2BAUFkBA0gQRQkjIIjEIQ9hcn1/f/QigoRJXbdf9/dzDkePZ5eqe1+9vrf7dVeLEBERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERHRYRjtCRAREZUGUKGCSJs2Is2bi9SuLZKaKpKdLbJtm8hPP4nMn2/M+vXa8yQiIqJSAlJSgB49YKdOBXJzcVhLlgAPPggcdZT23ImIiKiYgPLlYf/5T2DTpsMX/QMpKADefJONABERUZwATjsNdvnykhX+/WVnAwMGALGYdlxERER0EEC/fkB+ftkU/9+xkybBVq6sHR8RERHtB3bo0DIv/PuYOxe2Zk3tOImIiOh/gCFD/C3+e3z/PZsAIiKiAHBX/NkEEBERBYL74s8mgIiISJVe8WcTQEREpEK/+LMJICIicio4xZ9NABERkRPBK/5sAoiIiHwV3OLPJoCIiMgXwS/+bAKIiIjKVPwUfzYBREREZSL+ij+bACIiolKJ3+LPJoCIiKhE4r/4swkgIiIqlvAUfzYBRERERRK+4s8mgIiI6JDCW/zZBBARER1Q+Is/mwAiIqJ9RKf4swkgIiISkSgWfzYBREQUcdEt/mwCiIgoolj892ATQEREEcHivz82AUREFHIs/gfDJoCIiEKKxf9w2AQQEVHIsPgXFZsAIiIKCRb/4mITQEREcY7Fv6TYBBARUZxi8S8tNgFERBRnWPzLCpsAIiKKEyz+ZY1NABERBRyLv1/YBBARUUCx+PuNTQAREQUMi78rbAKIiCggWPxdYxNARETKWPy1uGsCjPYiIyKiYAFGjBC5807tefx+RiImQvXq++8FnTqZ2KZNfo4S0w6TiIiCI3jFf9QokYUL/R9nwgSR1au1o/WccIKYzz7jzwFERORE4C772xdeAGIxICPD/8GGDIE94ghgxQrtsPfiPQFEROSz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"
																/>
															</defs>
														</svg>
													</div>
												</div>
											)}
											<div className="mt-4 flex items-end">
												<span className="text-5xl font-semibold tracking-tight max-md:text-3xl max-sm:text-5xl">
													{enabled ? "￥45,000" : "￥480,000"}
												</span>
												<span className="">
													{enabled ? (
														<>{srcLang === "ja" ? "/月" : "/monthly"}</>
													) : (
														<>{srcLang === "ja" ? "/年" : "/yearly"}</>
													)}
												</span>
											</div>
											<span className="mt-4 text-3xl font-bold">
												{srcLang === "ja" ? "エンタープライズ" : "Enterprise"}
											</span>
											<span className="mt-2 font-light">
												{srcLang === "ja" ? "戦略的採用のために作られた。" : "Tailored for strategic recruitment"}
											</span>
											<div className="mt-4 flex flex-col gap-1">
												<div className="flex items-start gap-2">
													<i className="fa-regular fa-circle-check text-lg text-white"></i>

													<span className="text-lg ">
														{srcLang === "ja"
															? "200円/応募者（1000人未満）"
															: "200 Yen/Application for 1st 1000 applications"}
													</span>
												</div>
												<div className="flex items-start gap-2">
													<i className="fa-regular fa-circle-check text-lg text-white"></i>
													<span className="text-lg ">
														{srcLang === "ja"
															? "100円/応募者（1001人目～）"
															: "100 Yen/Application for 1001st application owards"}
													</span>
												</div>
											</div>
											<button
												className="mt-4 transform rounded-normal bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-blue-600 hover:to-blue-800 hover:brightness-110 active:animate-bounce"
												onClick={() => setbookADemo(true)}
											>
												{srcLang === "ja" ? "お問い合わせ" : "Request a Call"}
											</button>
										</div>

										<div
											className="flex h-fit w-[50%] items-center justify-center bg-white   px-4 py-8 text-base font-[300] text-black max-sm:w-full"
											style={{
												filter: "drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.25))"
											}}
										>
											<ul className="list-disc px-4">
												<li>{srcLang === "ja" ? "AI人事アシスタント -NOVUS " : "AI HR Assistant -NOVUS"}</li>
												<li>{srcLang === "ja" ? "メンバー数無制限" : "Unlimited members "}</li>
												<li>{srcLang === "ja" ? "ベンダー管理とインターフェース" : "Vendor management"}</li>
												<li>{srcLang === "ja" ? "内蔵チャットシステム " : "internal chat "}</li>
												<li>{srcLang === "ja" ? "Googleカレンダー統合  " : "Googlecalendar intergration "}</li>
												<li>{srcLang === "ja" ? "簡単なキャリアページの統合 " : "Career page "}</li>
												<li>{srcLang === "ja" ? "応募者カンバン表示" : "Applicant kanban "}</li>
												<li>
													{srcLang === "ja" ? "応募者のキュレーションと自動化" : "Applicant curation & automation"}
												</li>
												<li>
													{srcLang === "ja"
														? "スケジューリングとTA業務の自動化"
														: "automated scheduling and TA operations"}
												</li>
												<li>{srcLang === "ja" ? "1つのツールで複数拠点をカバー" : "One tool multi location "}</li>
											</ul>
										</div>
									</div>

									{/* big device */}
									<div className="grid grid-cols-3  place-content-around items-end justify-items-center gap-x-6 gap-y-2  max-xl:hidden ">
										<div className="flex w-full flex-col gap-2   px-8 pb-8 text-base font-[300] text-black">
											<div
												className="ml-auto w-fit rounded-full bg-white px-4 py-2 text-xs font-bold"
												style={{
													boxShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.25)"
												}}
											>
												30 Days Only
											</div>
											<div className="flex items-end">
												<span className="text-5xl font-extrabold">￥０</span>
												<span className="text-[#848199]">{srcLang === "ja" ? "/毎月" : "/month"}</span>
											</div>
											<span className="mt-4 text-3xl font-bold">
												{srcLang === "ja" ? "無料トライアル" : "FREE trial"}
											</span>
											<span className="text-[#848199]">
												{srcLang === "ja" ? "従量制" : "Experience before you buy"}
											</span>
											<div className="mt-4 flex flex-col gap-1">
												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja"
															? "200円/応募者（1000人未満）"
															: "200 Yen/Application for 1st 1000 applications"}
													</span>
												</div>
												<div className="flex items-start gap-2">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg text-[#848199]">
														{srcLang === "ja"
															? "100円/応募者（1001人目～）"
															: "100 Yen/Application for 1001st application owards"}
													</span>
												</div>
											</div>
											<button
												className="mt-4 transform rounded-normal bg-gradient-to-r from-gray-400 to-gray-600 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-gray-500 hover:to-gray-700 hover:brightness-110 active:animate-bounce"
												onClick={() => {
													router.push("https://ats.somhako.com/auth/signup");
												}}
											>
												{srcLang === "ja" ? "今すぐ無料トライアルを！" : "Get FREE trial now"}
											</button>
										</div>

										<div className="flex w-full flex-col gap-2  px-8 pb-8 text-base font-[300] text-black">
											<div className="flex items-end">
												<span className="text-5xl font-semibold tracking-tight">
													{enabled ? "￥30,000" : "￥360,000"}
												</span>
												<span className="">
													{enabled ? (
														<>{srcLang === "ja" ? "/月" : "/monthly"}</>
													) : (
														<>{srcLang === "ja" ? "/年" : "/yearly"}</>
													)}
												</span>
											</div>
											<span className="mt-4 text-3xl font-bold">{srcLang === "ja" ? "標準プラン" : "Standard"}</span>
											<span className="text-[#848199]">
												{srcLang === "ja" ? "頻繁に雇用しない人たちへ" : "Designed for occasional hiring"}
											</span>
											<div className="mt-4 flex flex-col gap-1">
												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja"
															? "200円/応募者（1000人未満）"
															: "200 Yen/Application for 1st 1000 applications"}
													</span>
												</div>
												<div className="flex items-start gap-2">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg text-[#848199]">
														{srcLang === "ja"
															? "100円/応募者（1001人目～）"
															: "100 Yen/Application for 1001st application owards"}
													</span>
												</div>
											</div>
											<button
												className="mt-4 transform rounded-normal bg-gradient-to-r from-gray-400 to-gray-600 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-gray-500 hover:to-gray-700 hover:brightness-110 active:animate-bounce"
												onClick={() => setbookADemo(true)}
											>
												{srcLang === "ja" ? "デモを予約する" : "Book a demo"}
											</button>
										</div>

										<div
											className="flex w-full flex-col rounded-normal   px-8 pb-8 pt-8 text-base font-[300] text-white"
											style={{
												background: "linear-gradient(70deg, #2D129A -5.44%, #47BBFD 120.58%)",
												boxShadow: "0px 42px 34px 0px rgba(82, 67, 194, 0.30)"
											}}
										>
											<div className="mb-4 flex items-center justify-between text-xs text-white">
												<div
													className="rounded-full px-4 py-2 font-bold"
													style={{
														background: "linear-gradient(88deg, #197DF9 1.75%, #45BBED 103.51%)"
													}}
												>
													MOST POPULAR
												</div>
												<div className="flex items-center gap-0.5">
													<Switch
														checked={enabled}
														onChange={setEnabled}
														className={`${enabled ? "bg-white" : "bg-gray-200"}
          relative inline-flex h-[16px] w-[32px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white/75`}
													>
														<span className="sr-only">Use setting</span>
														<span
															aria-hidden="true"
															className={`${enabled ? "translate-x-4" : "translate-x-0"}
            pointer-events-none h-[13px] w-[13px] transform rounded-full bg-gradient-to-r from-blue-500 to-blue-700 shadow-lg transition duration-200 ease-in-out`}
														>
															{/* <svg
																xmlns="http://www.w3.org/2000/svg"
																width="14"
																height="14"
																viewBox="0 0 12 12"
																fill="none"
															>
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
															</svg> */}
														</span>
													</Switch>
													<span className="text-base">{srcLang === "ja" ? "/月" : "/monthly"}</span>
												</div>
											</div>
											{!enabled && (
												<div className="mt-4 flex items-center gap-4">
													<span className="text-xl font-semibold tracking-tight line-through">￥540,000</span>
													<div className="flex flex-col items-center justify-center rounded-full bg-white p-3 px-3 text-base font-bold text-black">
														<div className="leading-none">-22%</div>
														<div className="text-lg font-black leading-none">OFF</div>
													</div>
													<div className="rotate-180 scale-x-[-1] font-semibold">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															xmlnsXlink="http://www.w3.org/1999/xlink"
															width="31"
															height="30"
															viewBox="0 0 21 20"
															fill="none"
														>
															<path
																d="M0.0424665 19.0432L20.0424 18.9985L20 0L0 0.0447049L0.0424665 19.0432Z"
																fill="url(#pattern0)"
															/>
															<defs>
																<pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
																	<use
																		xlinkHref="#image0_2422_2105"
																		transform="matrix(0.00195312 0 0 0.00205561 0 -0.0262349)"
																	/>
																</pattern>
																<image
																	id="image0_2422_2105"
																	width="512"
																	height="512"
																	xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIAEAQAAAAO4cAyAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAACYktHRAAAqo0jMgAAAAlwSFlzAAAAYAAAAGAA8GtCzwAAQuFJREFUeNrt3XeUFUX2B/Bbb4YZYIAhp2EQEQliIOhiWkXCrgnDmtYAoriI/EDEhGEFDETDmhVFFjGjq2BAUFkBA0gQRQkjIIjEIQ9hcn1/f/QigoRJXbdf9/dzDkePZ5eqe1+9vrf7dVeLEBERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERHRYRjtCRAREZUGUKGCSJs2Is2bi9SuLZKaKpKdLbJtm8hPP4nMn2/M+vXa8yQiIqJSAlJSgB49YKdOBXJzcVhLlgAPPggcdZT23ImIiKiYgPLlYf/5T2DTpsMX/QMpKADefJONABERUZwATjsNdvnykhX+/WVnAwMGALGYdlxERER0EEC/fkB+ftkU/9+xkybBVq6sHR8RERHtB3bo0DIv/PuYOxe2Zk3tOImIiOh/gCFD/C3+e3z/PZsAIiKiAHBX/NkEEBERBYL74s8mgIiISJVe8WcTQEREpEK/+LMJICIicio4xZ9NABERkRPBK/5sAoiIiHwV3OLPJoCIiMgXwS/+bAKIiIjKVPwUfzYBREREZSL+ij+bACIiolKJ3+LPJoCIiKhE4r/4swkgIiIqlvAUfzYBRERERRK+4s8mgIiI6JDCW/zZBBARER1Q+Is/mwAiIqJ9RKf4swkgIiISkSgWfzYBREQUcdEt/mwCiIgoolj892ATQEREEcHivz82AUREFHIs/gfDJoCIiEKKxf9w2AQQEVHIsPgXFZsAIiIKCRb/4mITQEREcY7Fv6TYBBARUZxi8S8tNgFERBRnWPzLCpsAIiKKEyz+ZY1NABERBRyLv1/YBBARUUCx+PuNTQAREQUMi78rbAKIiCggWPxdYxNARETKWPy1uGsCjPYiIyKiYAFGjBC5807tefx+RiImQvXq++8FnTqZ2KZNfo4S0w6TiIiCI3jFf9QokYUL/R9nwgSR1au1o/WccIKYzz7jzwFERORE4C772xdeAGIxICPD/8GGDIE94ghgxQrtsPfiPQFEROSz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"
																/>
															</defs>
														</svg>
													</div>
												</div>
											)}
											<div className="mt-4 flex items-end">
												<span className="text-5xl font-semibold tracking-tight">
													{enabled ? "￥45,000" : "￥480,000"}
												</span>
												<span className="">
													{enabled ? (
														<>{srcLang === "ja" ? "/月" : "/monthly"}</>
													) : (
														<>{srcLang === "ja" ? "/年" : "/yearly"}</>
													)}
												</span>
											</div>
											<span className="mt-4 text-3xl font-bold">
												{srcLang === "ja" ? "エンタープライズ" : "Enterprise"}
											</span>
											<span className="mt-2 font-light">
												{srcLang === "ja" ? "戦略的採用のために作られた。" : "Tailored for strategic recruitment"}
											</span>

											<div className="mt-4 flex flex-col gap-1">
												<div className="flex items-start gap-2">
													<i className="fa-regular fa-circle-check text-lg text-white"></i>

													<span className="text-lg ">
														{srcLang === "ja"
															? "200円/応募者（1000人未満）"
															: "200 Yen/Application for 1st 1000 applications"}
													</span>
												</div>
												<div className="flex items-start gap-2">
													<i className="fa-regular fa-circle-check text-lg text-white"></i>
													<span className="text-lg ">
														{srcLang === "ja"
															? "100円/応募者（1001人目～）"
															: "100 Yen/Application for 1001st application owards"}
													</span>
												</div>
											</div>
											<button
												className="mt-4 transform rounded-normal bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-blue-600 hover:to-blue-800 hover:brightness-110 active:animate-bounce"
												onClick={() => setbookADemo(true)}
											>
												{srcLang === "ja" ? "お問い合わせ" : "Request a Call"}
											</button>
										</div>
									</div>

									<div className="grid  grid-cols-3 place-content-around items-end justify-items-center gap-x-6 gap-y-2  p-3 max-xl:hidden">
										<div
											className="flex w-[70%] items-center  justify-center bg-white px-4 py-8 text-base font-[300] text-black"
											style={{
												filter: "drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.25))"
											}}
										>
											<ul className="list-disc px-4">
												<li>{srcLang === "ja" ? "AI人事アシスタント -NOVUS " : "AI HR Assistant -NOVUS"}</li>
												<li>{srcLang === "ja" ? "メンバー数無制限" : "Unlimited members "}</li>
												<li>{srcLang === "ja" ? "ベンダー管理とインターフェース" : "Vendor management"}</li>
												<li>{srcLang === "ja" ? "内蔵チャットシステム " : "internal chat "}</li>
												<li>{srcLang === "ja" ? "Googleカレンダー統合  " : "Googlecalendar intergration "}</li>
												<li>{srcLang === "ja" ? "簡単なキャリアページの統合 " : "Career page "}</li>
												<li>{srcLang === "ja" ? "応募者カンバン表示" : "Applicant kanban "}</li>
												<li>
													{srcLang === "ja" ? "応募者のキュレーションと自動化" : "Applicant curation & automation"}
												</li>
												<li>
													{srcLang === "ja"
														? "スケジューリングとTA業務の自動化"
														: "automated scheduling and TA operations"}
												</li>
												<li>{srcLang === "ja" ? "1つのツールで複数拠点をカバー" : "One tool multi location "}</li>
											</ul>
										</div>
										<div
											className="flex w-[70%] items-center justify-center   bg-white px-4 py-8 text-base font-[300] text-black"
											style={{
												filter: "drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.25))"
											}}
										>
											<ul className="list-disc px-4">
												<li>{srcLang === "ja" ? "最大10名" : "10 members "}</li>
												<li>{srcLang === "ja" ? "ベンダー管理" : "Vendor management"}</li>
												<li>{srcLang === "ja" ? "内蔵チャット" : "internal chat "}</li>
												<li>
													{srcLang === "ja"
														? "グーグルカレンダー統合と手動スケジュール設定"
														: "Googlecalendar intergration "}
												</li>
												<li>{srcLang === "ja" ? "キャリアページ" : "Career page "}</li>
												<li>{srcLang === "ja" ? "応募者カンバン" : "Applicant kanban"}</li>
												<li>{srcLang === "ja" ? "手動ワークフローシステム" : "Manual workflow system"}</li>
												<li>{srcLang === "ja" ? "マニュアルTAオペレーション" : "Manual TA operations "}</li>
												<li>{srcLang === "ja" ? "1ツール多拠点" : "One tool multi location "}</li>
											</ul>
										</div>
										<div
											className="flex w-[70%] items-center justify-center   bg-white px-4 py-8 text-base font-[300] text-black"
											style={{
												filter: "drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.25))"
											}}
										>
											<ul className="list-disc px-4">
												<li>{srcLang === "ja" ? "AI人事アシスタント -NOVUS " : "AI HR Assistant -NOVUS"}</li>
												<li>{srcLang === "ja" ? "メンバー数無制限" : "Unlimited members "}</li>
												<li>{srcLang === "ja" ? "ベンダー管理とインターフェース" : "Vendor management"}</li>
												<li>{srcLang === "ja" ? "内蔵チャットシステム " : "internal chat "}</li>
												<li>{srcLang === "ja" ? "Googleカレンダー統合  " : "Googlecalendar intergration "}</li>
												<li>{srcLang === "ja" ? "簡単なキャリアページの統合 " : "Career page "}</li>
												<li>{srcLang === "ja" ? "応募者カンバン表示" : "Applicant kanban "}</li>
												<li>
													{srcLang === "ja" ? "応募者のキュレーションと自動化" : "Applicant curation & automation"}
												</li>
												<li>
													{srcLang === "ja"
														? "スケジューリングとTA業務の自動化"
														: "automated scheduling and TA operations"}
												</li>
												<li>{srcLang === "ja" ? "1つのツールで複数拠点をカバー" : "One tool multi location "}</li>
											</ul>
										</div>
									</div>

									{/* end		 */}
									<div className="flex w-full flex-col items-center justify-center">
										<span className="text-center">
											{srcLang === "ja"
												? "30日間のトライアルには、エンタープライズプランの全機能が含まれます。"
												: "The 30-day trial includes the complete feature set of the Enterprise plan."}
										</span>
										<button
											className="mt-4 transform rounded-normal bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-blue-600 hover:to-blue-800 hover:brightness-110 active:animate-bounce"
											onClick={() => {
												router.push("https://ats.somhako.com/auth/signup");
											}}
										>
											{srcLang === "ja" ? "30日間トライアル開始 " : "Start a 30-day trial"}
										</button>
										<p>
											{srcLang === "ja" ? "または" : "or"}&nbsp;
											<span className="cursor-pointer text-blue-600 hover:underline" onClick={() => setbookADemo(true)}>
												{srcLang === "ja" ? "ライブデモ" : "Get a live demo"}
											</span>
										</p>
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
