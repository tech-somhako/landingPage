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
											onClick={() => setbookADemo(true)}
										>
											{srcLang === "ja" ? "無料トライアルを開始する" : "Start your FREE trial"}
										</button>
									</div>
								</div>

								{/* <div className="my-[4rem] flex h-auto w-fit flex-col gap-10 rounded-normal  bg-white p-10 max-xl:gap-x-2 max-xl:px-4">
									

									<div className="flex items-center justify-evenly gap-4 max-sm:flex-col xl:hidden">
										<div className="flex w-[50%] flex-col gap-2  px-8  pb-8 text-base font-[300] text-black max-sm:w-full ">
											<span className="mx-auto mt-4 text-5xl font-bold">
												{srcLang === "ja" ? "スターター" : "Starter"}
											</span>
											<span className="mx-auto">{srcLang === "ja" ? "従量制" : "Experience before you buy"}</span>
											<div className="mt-4 flex flex-col gap-1">
												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja" ? "15名までメンバーを追加可能" : "Add upto 10 members"}
													</span>
												</div>
												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja"
															? "ベンダー/代理店パートナーを追加可能"
															: "Can add vendor/agency partners"}
													</span>
												</div>
												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja" ? "年間500名までの応募者を管理" : "Manage applicants upto 500 per year"}
													</span>
												</div>
												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja" ? "採用フローを管理 " : "Manage recruitment flow "}
													</span>
												</div>
												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja"
															? "求人情報を掲載し、キャリアページで公開"
															: "Post jobs and publish on your career page "}
													</span>
												</div>
											</div>
											<button
												className="mt-4 transform rounded-normal bg-gradient-to-r from-gray-400 to-gray-600 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-gray-500 hover:to-gray-700 hover:brightness-110 active:animate-bounce"
												onClick={() => setbookADemo(true)}
											>
												{srcLang === "ja" ? "無料トライアル" : "Take a free trial "}
											</button>
										</div>

										<div
											className="flex h-fit w-[50%] flex-nowrap items-center justify-center  bg-white px-4 py-8 text-base font-[300] text-black max-sm:w-full"
											style={{
												filter: "drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.25))"
											}}
										>
											<ul className="list-disc px-4">
												<li>
													{srcLang === "ja"
														? "最大15名のメンバー（リクルーター、採用マネージャー、契約社員、ベンダーを含む）を追加する。"
														: "Add upto 15 member ( including recruiters, hiring managers, collaobrators &vendors "}
												</li>
												<li>{srcLang === "ja" ? "日々の応募管理 " : "Manage day to day application"}</li>
												<li>
													{srcLang === "ja"
														? "求人情報の掲載と公開 - キャリアページを作成して応募を最大化"
														: "Post and publish job - create you career page to maxximize applications"}
												</li>
												<li>{srcLang === "ja" ? "採用業務の管理" : "Manage recruitment operations "}</li>
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
											<ul className="list-disc px-4">
												<li>
													{srcLang === "ja"
														? "Googleカレンダーと同期してカレンダーを素早く更新"
														: "Sync your Google calendar for quick calendar updates"}
												</li>
												<li>
													{srcLang === "ja"
														? "キャンディデートスケジュールの自動化"
														: "Automate your candidaet schedules"}
												</li>
												<li>{srcLang === "ja" ? "仕事内容の自動作成 " : "create Automated job description "}</li>
												<li>
													{srcLang === "ja"
														? "社内でチームメンバーと自由にチャット "
														: "Chat freely with team members internally"}
												</li>
												<li>{srcLang === "ja" ? "レポート作成" : "Generate reports"}</li>
												<li>{srcLang === "ja" ? "採用フローの管理" : "manage recruitment flow"}</li>
											</ul>
										</div>

										<div className="flex w-[50%] flex-col gap-2  px-8 pb-8 text-base font-[300] text-black max-sm:w-full">
											<span className="mx-auto mt-4 text-5xl font-bold">
												{srcLang === "ja" ? "標準プラン" : "Standard"}
											</span>
											<span className="mx-auto">
												{srcLang === "ja" ? "頻繁に雇用しない人たちへ" : "Designed for occasional hiring"}
											</span>
											<div className="mt-4 flex flex-col gap-1">
												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja" ? "スターターのすべて" : "All of Starter  + 15 members"}
													</span>
												</div>

												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja" ? "カレンダー同期 - googleカレンダー" : "Sync calendar- google calendar "}
													</span>
												</div>

												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja" ? "社内交流 - チャット" : "Internal Collaobration - Chat "}
													</span>
												</div>

												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja" ? "カンバン方式による応募管理 " : "Manage Application with kanban view "}
													</span>
												</div>

												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja" ? "候補者の自動スケジューリング " : "Automated Candidate shedule "}
													</span>
												</div>

												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja" ? "自動ジョブディスクリプション" : "Auto Job description "}
													</span>
												</div>
											</div>
											<button
												className="mt-4 transform rounded-normal bg-gradient-to-r from-gray-400 to-gray-600 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-gray-500 hover:to-gray-700 hover:brightness-110 active:animate-bounce"
												onClick={() => setbookADemo(true)}
											>
												{srcLang === "ja" ? "無料トライアル" : "Take a free trial "}
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
											<div className="mb-4 flex items-center justify-start text-xs text-white">
												<div
													className="rounded-full px-4 py-2 font-bold"
													style={{
														background: "linear-gradient(88deg, #197DF9 1.75%, #45BBED 103.51%)"
													}}
												>
													MOST POPULAR
												</div>
											</div>

											<span className="mx-auto mt-4 text-5xl font-bold">
												{srcLang === "ja" ? "エンタープライズ" : "Enterprise"}
											</span>
											<span className="mx-auto mt-2 font-light">
												{srcLang === "ja" ? "戦略的採用のために作られた。" : "Tailored for strategic recruitment"}
											</span>

											<div className="mt-4 flex flex-col gap-1">
												<div className="flex items-start gap-2">
													<i className="fa-regular fa-circle-check text-lg text-white"></i>
													<span className="text-lg ">
														{srcLang === "ja" ? "スタンダードのすべて " : "All of Standard "}
													</span>
												</div>

												<div className="flex items-start gap-2">
													<i className="fa-regular fa-circle-check text-lg text-white"></i>
													<span className="text-lg ">
														{srcLang === "ja"
															? "AIプロフィールキュレーション＆ランキング "
															: "AI Profile Curation & Ranking "}
													</span>
												</div>

												<div className="flex items-start gap-2">
													<i className="fa-regular fa-circle-check text-lg text-white"></i>
													<span className="text-lg ">
														{srcLang === "ja" ? "AI人事アシスタント（Novus）" : "AI HR Assistant (Novus) "}
													</span>
												</div>

												<div className="flex items-start gap-2">
													<i className="fa-regular fa-circle-check text-lg text-white"></i>
													<span className="text-lg ">
														{srcLang === "ja"
															? "候補者管理＆応募フィルタリング "
															: "Candidate management & application filteration "}
													</span>
												</div>

												<div className="flex items-start gap-2">
													<i className="fa-regular fa-circle-check text-lg text-white"></i>
													<span className="text-lg ">
														{srcLang === "ja" ? "キャリアページ " : "Custome career page "}
													</span>
												</div>

												<div className="flex items-start gap-2">
													<i className="fa-regular fa-circle-check text-lg text-white"></i>
													<span className="text-lg ">{srcLang === "ja" ? "オファー管理 " : "Offer management "}</span>
												</div>

												<div className="flex items-start gap-2">
													<i className="fa-regular fa-circle-check text-lg text-white"></i>
													<span className="text-lg ">{srcLang === "ja" ? "ベンダー管理 " : "Vendor Management "}</span>
												</div>

												<div className="flex items-start gap-2">
													<i className="fa-regular fa-circle-check text-lg text-white"></i>
													<span className="text-lg ">{srcLang === "ja" ? "候補者ページ" : "Candidate page "}</span>
												</div>
											</div>
											<button
												className="mt-4 transform rounded-normal bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-blue-600 hover:to-blue-800 hover:brightness-110 active:animate-bounce"
												onClick={() => setbookADemo(true)}
											>
												{srcLang === "ja" ? "電話を予約する" : "Request a Call"}
											</button>
										</div>

										<div
											className="flex h-fit w-[50%] items-center justify-center bg-white   px-4 py-8 text-base font-[300] text-black max-sm:w-full"
											style={{
												filter: "drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.25))"
											}}
										>
											<ul className="list-disc px-4">
												<li>
													{srcLang === "ja"
														? "AI人事アシスタントがTA業務を管理"
														: "AI HR Assistant manages your work TA operations"}
												</li>
												<li>
													{srcLang === "ja"
														? "応募前プロフィールのキュレーション "
														: "Pre application profile curation "}
												</li>
												<li>
													{srcLang === "ja" ? "AIによる自動候補者スケジュール" : "AI based Auto candidate schedule "}
												</li>
												<li>
													{srcLang === "ja"
														? "候補者ダッシュボード体験センター  "
														: "Candidate dashboard experience center "}
												</li>
												<li>{srcLang === "ja" ? "代理店とベンダーの管理" : "Manage agencies and vendors "}</li>
												<li>{srcLang === "ja" ? "オファー管理" : "Manage offer offers "}</li>
												<li>
													{srcLang === "ja" ? "AIベースのプロフィールキュレーション" : "AI based profile curation"}
												</li>
												<li>{srcLang === "ja" ? "タスク管理" : "Task manegment "}</li>
											</ul>
										</div>
									</div>

									
									<div className="grid grid-cols-3  place-content-around items-end justify-items-center gap-x-6 gap-y-2  max-xl:hidden ">
										<div className="flex w-full flex-col gap-2   px-8 pb-8 text-base font-[300] text-black">
											<span className="mx-auto mt-4 text-5xl font-bold">
												{srcLang === "ja" ? "スターター" : "Starter"}
											</span>
											<span className="mx-auto">{srcLang === "ja" ? "従量制" : "Experience before you buy"}</span>
											<div className="mt-4 flex flex-col gap-1">
												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja" ? "15名までメンバーを追加可能" : "Add upto 10 members"}
													</span>
												</div>
												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja"
															? "ベンダー/代理店パートナーを追加可能"
															: "Can add vendor/agency partners"}
													</span>
												</div>
												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja" ? "年間500名までの応募者を管理" : "Manage applicants upto 500 per year"}
													</span>
												</div>
												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja" ? "採用フローを管理 " : "Manage recruitment flow "}
													</span>
												</div>
												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja"
															? "求人情報を掲載し、キャリアページで公開"
															: "Post jobs and publish on your career page "}
													</span>
												</div>
											</div>
											<button
												className="mt-4 transform rounded-normal bg-gradient-to-r from-gray-400 to-gray-600 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-gray-500 hover:to-gray-700 hover:brightness-110 active:animate-bounce"
												onClick={() => setbookADemo(true)}
											>
												{srcLang === "ja" ? "無料トライアル" : "Take a free trial "}
											</button>
										</div>

										<div className="flex w-full flex-col gap-2  px-8 pb-8 text-base font-[300] text-black">
											<span className="mx-auto mt-4 text-5xl font-bold">
												{srcLang === "ja" ? "標準プラン" : "Standard"}
											</span>
											<span className="mx-auto">
												{srcLang === "ja" ? "頻繁に雇用しない人たちへ" : "Designed for occasional hiring"}
											</span>
											<div className="mt-4 flex flex-col gap-1">
												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja" ? "スターターのすべて" : "All of Starter  + 15 members"}
													</span>
												</div>

												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja" ? "カレンダー同期 - googleカレンダー" : "Sync calendar- google calendar "}
													</span>
												</div>

												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja" ? "社内交流 - チャット" : "Internal Collaobration - Chat "}
													</span>
												</div>

												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja" ? "カンバン方式による応募管理 " : "Manage Application with kanban view "}
													</span>
												</div>

												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja" ? "候補者の自動スケジューリング " : "Automated Candidate shedule "}
													</span>
												</div>

												<div className="flex items-start gap-2 ">
													<i className="fa-solid fa-circle-check text-lg text-[#3440B5]"></i>
													<span className="text-lg leading-normal text-[#848199]">
														{srcLang === "ja" ? "自動ジョブディスクリプション" : "Auto Job description "}
													</span>
												</div>
											</div>
											<button
												className="mt-4 transform rounded-normal bg-gradient-to-r from-gray-400 to-gray-600 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-gray-500 hover:to-gray-700 hover:brightness-110 active:animate-bounce"
												onClick={() => setbookADemo(true)}
											>
												{srcLang === "ja" ? "無料トライアル" : "Take a free trial "}
											</button>
										</div>

										<div
											className="flex w-full flex-col rounded-3xl   px-8 pb-8 pt-8 text-base font-[300] text-white"
											style={{
												background: "linear-gradient(70deg, #2D129A -5.44%, #47BBFD 120.58%)",
												boxShadow: "0px 42px 34px 0px rgba(82, 67, 194, 0.30)"
											}}
										>
											<div className="mb-4 flex items-center justify-start text-xs text-white">
												<div
													className="rounded-full px-4 py-2 font-bold"
													style={{
														background: "linear-gradient(88deg, #197DF9 1.75%, #45BBED 103.51%)"
													}}
												>
													MOST POPULAR
												</div>
											</div>

											<span className="mx-auto mt-4 text-5xl font-bold">
												{srcLang === "ja" ? "エンタープライズ" : "Enterprise"}
											</span>
											<span className="mx-auto mt-2 font-light">
												{srcLang === "ja" ? "戦略的採用のために作られた。" : "Tailored for strategic recruitment"}
											</span>

											<div className="mt-4 flex flex-col gap-1">
												<div className="flex items-start gap-2">
													<i className="fa-regular fa-circle-check text-lg text-white"></i>
													<span className="text-lg ">
														{srcLang === "ja" ? "スタンダードのすべて " : "All of Standard "}
													</span>
												</div>

												<div className="flex items-start gap-2">
													<i className="fa-regular fa-circle-check text-lg text-white"></i>
													<span className="text-lg ">
														{srcLang === "ja"
															? "AIプロフィールキュレーション＆ランキング "
															: "AI Profile Curation & Ranking "}
													</span>
												</div>

												<div className="flex items-start gap-2">
													<i className="fa-regular fa-circle-check text-lg text-white"></i>
													<span className="text-lg ">
														{srcLang === "ja" ? "AI人事アシスタント（Novus）" : "AI HR Assistant (Novus) "}
													</span>
												</div>

												<div className="flex items-start gap-2">
													<i className="fa-regular fa-circle-check text-lg text-white"></i>
													<span className="text-lg ">
														{srcLang === "ja"
															? "候補者管理＆応募フィルタリング "
															: "Candidate management & application filteration "}
													</span>
												</div>

												<div className="flex items-start gap-2">
													<i className="fa-regular fa-circle-check text-lg text-white"></i>
													<span className="text-lg ">
														{srcLang === "ja" ? "キャリアページ " : "Custome career page "}
													</span>
												</div>

												<div className="flex items-start gap-2">
													<i className="fa-regular fa-circle-check text-lg text-white"></i>
													<span className="text-lg ">{srcLang === "ja" ? "オファー管理 " : "Offer management "}</span>
												</div>

												<div className="flex items-start gap-2">
													<i className="fa-regular fa-circle-check text-lg text-white"></i>
													<span className="text-lg ">{srcLang === "ja" ? "ベンダー管理 " : "Vendor Management "}</span>
												</div>

												<div className="flex items-start gap-2">
													<i className="fa-regular fa-circle-check text-lg text-white"></i>
													<span className="text-lg ">{srcLang === "ja" ? "候補者ページ" : "Candidate page "}</span>
												</div>
											</div>
											<button
												className="mt-4 transform rounded-normal bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-blue-600 hover:to-blue-800 hover:brightness-110 active:animate-bounce"
												onClick={() => setbookADemo(true)}
											>
												{srcLang === "ja" ? "電話を予約する" : "Request a Call"}
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
												<li>
													{srcLang === "ja"
														? "最大15名のメンバー（リクルーター、採用マネージャー、契約社員、ベンダーを含む）を追加する。"
														: "Add upto 15 member ( including recruiters, hiring managers, collaobrators &vendors "}
												</li>
												<li>{srcLang === "ja" ? "日々の応募管理 " : "Manage day to day application"}</li>
												<li>
													{srcLang === "ja"
														? "求人情報の掲載と公開 - キャリアページを作成して応募を最大化"
														: "Post and publish job - create you career page to maxximize applications"}
												</li>
												<li>{srcLang === "ja" ? "採用業務の管理" : "Manage recruitment operations "}</li>
											</ul>
										</div>
										<div
											className="flex h-full w-[70%] items-center justify-center   bg-white px-4 py-8 text-base font-[300] text-black"
											style={{
												filter: "drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.25))"
											}}
										>
											<ul className="list-disc px-4">
												<li>
													{srcLang === "ja"
														? "Googleカレンダーと同期してカレンダーを素早く更新"
														: "Sync your Google calendar for quick calendar updates"}
												</li>
												<li>
													{srcLang === "ja"
														? "キャンディデートスケジュールの自動化"
														: "Automate your candidaet schedules"}
												</li>
												<li>{srcLang === "ja" ? "仕事内容の自動作成 " : "create Automated job description "}</li>
												<li>
													{srcLang === "ja"
														? "社内でチームメンバーと自由にチャット "
														: "Chat freely with team members internally"}
												</li>
												<li>{srcLang === "ja" ? "レポート作成" : "Generate reports"}</li>
												<li>{srcLang === "ja" ? "採用フローの管理" : "manage recruitment flow"}</li>
											</ul>
										</div>
										<div
											className="flex w-[70%] items-center justify-center   bg-white px-4 py-8 text-base font-[300] text-black"
											style={{
												filter: "drop-shadow(0px 10px 30px rgba(0, 0, 0, 0.25))"
											}}
										>
											<ul className="list-disc px-4">
												<li>
													{srcLang === "ja"
														? "AI人事アシスタントがTA業務を管理"
														: "AI HR Assistant manages your work TA operations"}
												</li>
												<li>
													{srcLang === "ja"
														? "応募前プロフィールのキュレーション "
														: "Pre application profile curation "}
												</li>
												<li>
													{srcLang === "ja" ? "AIによる自動候補者スケジュール" : "AI based Auto candidate schedule "}
												</li>
												<li>
													{srcLang === "ja"
														? "候補者ダッシュボード体験センター  "
														: "Candidate dashboard experience center "}
												</li>
												<li>{srcLang === "ja" ? "代理店とベンダーの管理" : "Manage agencies and vendors "}</li>
												<li>{srcLang === "ja" ? "オファー管理" : "Manage offer offers "}</li>
												<li>
													{srcLang === "ja" ? "AIベースのプロフィールキュレーション" : "AI based profile curation"}
												</li>
												<li>{srcLang === "ja" ? "タスク管理" : "Task manegment "}</li>
											</ul>
										</div>
									</div>

									
									<div className="flex w-full flex-col items-center justify-center">
										<span className="text-center">
											{srcLang === "ja"
												? "30日間のトライアルには、エンタープライズプランの全機能が含まれます。"
												: "The 30-day trial includes the complete feature set of the Enterprise plan."}
										</span>
										<button
											className="mt-4 transform rounded-normal bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-blue-600 hover:to-blue-800 hover:brightness-110 active:animate-bounce"
											onClick={() => setbookADemo(true)}
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
								</div> */}
								<div className="my-[4rem] h-auto rounded-normal bg-white p-10  max-xl:px-4">
									<div className="mx-auto flex w-fit items-center gap-2 rounded-normal bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3 tracking-wide text-white shadow-lg">
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
									</div>
									<div className="mt-[4rem] grid h-auto w-full  grid-cols-1 gap-4 max-xl:gap-x-2 max-xl:px-4 md:grid-cols-4">
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
												onClick={() => setbookADemo(true)}
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
											<p className="mb-6">Boost productivity</p>
											<ul className="mb-6">
												<li>Up to 7 team members</li>
												<li>Up to 3 agency contracts</li>
												<li>Up to 5 jobs</li>
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
														&#165;17,500 <span className="text-sm font-normal">per month</span>
													</>
												) : (
													<>
														{" "}
														&#165;2,10,000 <span className="text-sm font-normal">per annum</span>
													</>
												)}
											</p>
											<p className="mb-6">Get max efficiency</p>
											<ul className="mb-6">
												<li>Up to 10 team members</li>
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
											<p className="mb-4 text-2xl font-bold">
												Custom <span className="text-sm font-normal">individual payment</span>
											</p>
											<p className="mb-6">Become unique</p>
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
										{srcLang === "ja" ? "機能豊富なプランは、透明性のある価格設定となっている" : "Plan comparison"}
									</div>
								</div>

								<div className="my-[2rem] h-auto rounded-normal bg-white p-10  max-xl:px-4">
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
											<tr className="odd:bg-gray-100 dark:odd:bg-gray-600">
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

											<tr className="odd:bg-gray-100 dark:odd:bg-gray-600">
												<td className="w-[300px] px-3 py-2">Plan Duration</td>
												<td className="px-3 py-2 text-center">Only 30 Days</td>
												<td className="px-3 py-2 text-center">Monthly / Yearly</td>
												<td className="px-3 py-2 text-center">Monthly / Yearly</td>
												<td className="px-3 py-2 text-center">Monthly / Yearly</td>
											</tr>

											<tr className="odd:bg-gray-100 dark:odd:bg-gray-600">
												<td className="w-[300px] px-3 py-2">Team Members</td>
												<td className="px-3 py-2 text-center">Unlimited</td>
												<td className="px-3 py-2 text-center">Up to 7</td>
												<td className="px-3 py-2 text-center">Up to 10</td>
												<td className="px-3 py-2 text-center">Unlimited</td>
											</tr>

											<tr className="odd:bg-gray-100 dark:odd:bg-gray-600">
												<td className="w-[300px] px-3 py-2">Vendors/Agency Contracts</td>
												<td className="px-3 py-2 text-center">Up to 2</td>
												<td className="px-3 py-2 text-center">Up to 3</td>
												<td className="px-3 py-2 text-center">Up to 5</td>
												<td className="px-3 py-2 text-center">Unlimited</td>
											</tr>

											<tr className="odd:bg-gray-100 dark:odd:bg-gray-600">
												<td className="w-[300px] px-3 py-2">Publish/Active Jobs</td>
												<td className="px-3 py-2 text-center">Up to 2</td>
												<td className="px-3 py-2 text-center">Up to 5</td>
												<td className="px-3 py-2 text-center">Up to 10</td>
												<td className="px-3 py-2 text-center">Unlimited</td>
											</tr>

											<tr className="odd:bg-gray-100 dark:odd:bg-gray-600">
												<td className="w-[300px] px-3 py-2">Application</td>
												<td className="px-3 py-2 text-center">Up to 100</td>
												<td className="px-3 py-2 text-center">80 / 1000</td>
												<td className="px-3 py-2 text-center">240 / 3000</td>
												<td className="px-3 py-2 text-center">Flexible</td>
											</tr>

											<tr className="odd:bg-gray-100 dark:odd:bg-gray-600">
												<td className="w-[300px] px-3 py-2">Calendar & Interview</td>
												<td className="px-3 py-2 text-center">Automate & Manual</td>
												<td className="px-3 py-2 text-center">Manual</td>
												<td className="px-3 py-2 text-center">Manual</td>
												<td className="px-3 py-2 text-center">Automate & Manual</td>
											</tr>

											<tr className="odd:bg-gray-100 dark:odd:bg-gray-600">
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

											<tr className="odd:bg-gray-100 dark:odd:bg-gray-600">
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

											<tr className="odd:bg-gray-100 dark:odd:bg-gray-600">
												<td className="w-[300px] px-3 py-2">AI Generated Job Description</td>
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

											<tr className="odd:bg-gray-100 dark:odd:bg-gray-600">
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

											<tr className="odd:bg-gray-100 dark:odd:bg-gray-600">
												<td className="w-[300px] px-3 py-2">AI Generated Interview Questions</td>
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

											<tr className="odd:bg-gray-100 dark:odd:bg-gray-600">
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

											<tr className="odd:bg-gray-100 dark:odd:bg-gray-600">
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

											<tr className="odd:bg-gray-100 dark:odd:bg-gray-600">
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

											<tr className="odd:bg-gray-100 dark:odd:bg-gray-600">
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
