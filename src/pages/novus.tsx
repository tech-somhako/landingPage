import Head from "next/head";
import React, { useRef, Fragment, useState, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NoAuthHeader from "@/components/noAuth/NoAuthHeader";
import NoAuthFooter from "@/components/noAuth/NoAuthFooter";
import Image from "next/image";
import novusS1 from "public/images/noAuth/novusS1.png";
import novusA1 from "public/images/noAuth/novusA1.png";
import novusF1 from "public/images/noAuth/novusF1.png";
import novusH1 from "public/images/noAuth/novusH1.png";
import novusH2 from "public/images/noAuth/novusH2.png";
import { useTranslation } from "react-i18next";
import ToggleLang from "@/components/noAuth/ToggleLang";
import BookADemo from "@/components/noAuth/BookADemo";
import { useRouter } from "next/router";
import { useLangStore } from "@/utils/code";

export default function Novus() {
	const [scrollTop, setScrollTop] = useState(0);

	const handleScroll = (event) => {
		setScrollTop(event.currentTarget.scrollTop);
	};

	useEffect(() => {
		console.log("scrollTop", scrollTop);
	}, [scrollTop]);

	const { t } = useTranslation("common");
	const router = useRouter();
	const [bookADemo, setbookADemo] = useState(false);
	const srcLang = useLangStore((state: { lang: any }) => state.lang);

	return (
		<>
			<Head>
				<title>Novus Page ATS</title>
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
						className="h-auto w-full border-t-2 border-transparent xl:min-h-[100vh]"
						style={{
							background: "linear-gradient(70deg, #2D129A -5.44%, #47BBFD 120.58%)"
						}}
					>
						<div
							className="mx-auto   sm:max-w-[600px] md:max-w-[720px] lg:max-w-[991px] xl:min-h-[100vh] xl:max-w-[1216px] 2xl:max-w-[1448px]"
							style={{ height: "inherit" }}
						>
							<div className="mt-[4rem] flex h-auto w-full flex-col items-center justify-center gap-20 p-8 pb-[4rem] max-lg:p-4 max-lg:pb-[4rem] max-md:gap-10 max-md:p-2 max-md:pb-[4rem] xl:min-h-[calc(100vh-2rem)]">
								<div className="flex h-auto w-[80vw] flex-row items-center justify-center gap-10 p-4 px-12 max-lg:h-auto max-lg:min-h-fit max-lg:w-[90vw] max-md:flex-col max-md:p-2">
									<div className="h-auto  w-[40%] max-md:w-full">
										<Image
											src={novusH1}
											alt="why"
											width={500}
											height={500}
											className="max-md:min-h-auto ml-auto h-auto max-h-[60vh] w-auto max-md:mx-auto"
										/>
									</div>
									<div className="flex w-[60%] flex-col gap-4 max-md:w-full">
										<div className="w-full text-[6vw] font-bold text-black/[0.05] max-lg:text-[7vw] max-md:w-full max-md:text-center max-md:text-[8vw]">
											Novus
										</div>
										<div className="w-[70%] text-[2vw] uppercase  text-white max-lg:text-[3.3vw] max-md:w-full max-md:text-center max-md:text-[4vw]">
											{t("Noauth.novus.text1")}
										</div>
										<div className="w-[60%] text-[1vw] font-light tracking-wider text-white max-lg:text-[2vw] max-md:w-full max-md:text-center max-md:text-[2.5vw]">
											{t("Noauth.novus.text2")}
										</div>
									</div>
								</div>
								<div className="min-h-auto flex w-[80vw] flex-row-reverse items-center justify-center gap-4 p-4 px-12 max-lg:h-auto max-lg:min-h-fit max-lg:w-[90vw] max-md:flex-col max-md:p-2">
									<div className="h-auto w-[40%] max-md:w-full">
										<Image
											src={novusH2}
											alt="why"
											width={1000}
											height={1000}
											className="max-md:min-h-auto mr-auto h-auto max-h-[60vh] w-auto max-md:mx-auto"
										/>
									</div>
									<div className="flex w-[60%]  flex-col gap-4 max-md:w-full">
										<div className="w-[80%]  text-left text-[2vw] uppercase text-white max-lg:w-full  max-lg:text-[3.3vw] max-md:w-full max-md:text-center max-md:text-[4vw]">
											{t("Noauth.novus.text3")}
										</div>
										<div className="w-[90%] text-[1vw] font-light tracking-wider text-white max-lg:w-full max-lg:text-[2vw] max-md:w-full max-md:text-center max-md:text-[2.5vw]">
											{t("Noauth.novus.text4")}
										</div>
										<div className="z-10 flex justify-start  pt-8  text-white max-md:justify-center max-md:pt-4">
											<button
												className="transform rounded-full bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-blue-600 hover:to-blue-800 hover:brightness-110 active:animate-bounce"
												onClick={() => setbookADemo(true)}
											>
												{t("Noauth.novus.btn1")}
											</button>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* flow section */}
					<div className="w-full bg-[#F5F6F8]">
						<div className="mx-auto grid h-auto grid-cols-5 justify-items-center gap-2  max-md:grid-flow-col max-md:grid-rows-2 max-md:gap-2 sm:max-w-[600px] md:max-w-[720px] lg:max-w-[991px] xl:max-w-[1216px] 2xl:max-w-[1448px]">
							<p className="col-span-3 flex flex-col justify-center  gap-4  p-4 max-md:col-span-5 max-md:items-center">
								<div
									className="w-full text-[3vw] font-bold uppercase max-lg:text-[4.3vw] max-md:text-center max-md:text-[5vw]"
									style={{
										background:
											"linear-gradient(75deg, rgba(15, 101, 205, 0.90) -1.16%, rgba(67, 165, 229, 0.63) 108.83%)",
										backgroundClip: "text",
										WebkitBackgroundClip: "text",
										WebkitTextFillColor: "transparent"
									}}
								>
									Flow
								</div>
								<div className="w-[90%] text-[1.5vw] font-medium uppercase tracking-wider text-black max-lg:w-full max-lg:text-[2.3vw] max-md:text-center max-md:text-[3vw]">
									{t("Noauth.novus.text5")}
								</div>
								<div className="w-[90%] text-[1vw] font-light tracking-wider text-black max-lg:w-full max-lg:text-[2vw] max-md:text-center max-md:text-[2.5vw]">
									{t("Noauth.novus.text6")}
								</div>
							</p>
							<div className="py-auto col-span-2 my-auto grid h-full w-full max-w-[90%]  p-4 max-md:col-span-5 ">
								<Image
									src={novusF1}
									alt="LP"
									width={"1000"}
									height={"1000"}
									className="py-auto z-10 my-auto h-auto w-full  object-fill"
								/>
							</div>
						</div>
					</div>

					{/* analytics section */}
					<div
						className="w-full "
						style={{
							background: "linear-gradient(70deg, #2D129A -5.44%, #47BBFD 120.58%)"
						}}
					>
						<div className="mx-auto grid h-auto grid-cols-5 justify-items-center gap-2  max-md:grid-flow-col max-md:grid-rows-2 max-md:gap-2 sm:max-w-[600px] md:max-w-[720px] lg:max-w-[991px] xl:max-w-[1216px] 2xl:max-w-[1448px]">
							<div className="py-auto col-span-2 my-auto grid h-full w-full max-w-[70%]  p-4 max-md:col-span-5 max-md:max-w-[70%]">
								<Image
									src={novusA1}
									alt="LP"
									width={"1000"}
									height={"1000"}
									className="py-auto z-10 my-auto h-auto w-full  object-fill"
								/>
							</div>
							<p className="col-span-3 flex flex-col justify-center  gap-4  p-4 max-md:col-span-5 max-md:items-center">
								<div className="w-full text-[3vw] uppercase text-white max-lg:text-[4.3vw] max-md:text-center max-md:text-[5vw]">
									Analytics
								</div>
								<div className="w-[90%] text-[1.5vw] font-medium tracking-wider text-white max-lg:w-full max-lg:text-[2.3vw] max-md:text-center max-md:text-[3vw]">
									{t("Noauth.novus.text7")}
								</div>
								<div className="w-[90%] text-[1vw] font-light tracking-wider text-white max-lg:w-full max-lg:text-[2vw] max-md:text-center max-md:text-[2.5vw]">
									{t("Noauth.novus.text8")}
								</div>
							</p>
						</div>
					</div>

					{/* spotlight section */}
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
									{t("Noauth.novus.text9")}
								</div>
								<div className="z-10 flex justify-start   pt-4 text-white max-md:pt-4">
									<div className="-translate-x-3 scale-90 ">
										<button className="learn-more1" onClick={() => setbookADemo(true)}>
											<span className="circle" aria-hidden="true">
												<span className="icon arrow"></span>
											</span>
											<span className="button-text">{t("Noauth.novus.btn2")}</span>
										</button>
									</div>
								</div>
							</p>
							<div className="py-auto col-span-2 my-auto grid h-full w-full max-w-[70%]  p-4 max-md:col-span-5 max-md:max-w-[50%]">
								<Image
									src={novusS1}
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
