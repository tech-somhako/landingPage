import Head from "next/head";
import React, { useRef, Fragment, useState, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NoAuthHeader from "@/components/noAuth/NoAuthHeader";
import NoAuthFooter from "@/components/noAuth/NoAuthFooter";
import Image from "next/image";
import featureH1 from "public/images/noAuth/featureH1.png";
import novusS1 from "public/images/noAuth/novusS1.png";
import { useTranslation } from "react-i18next";
import ToggleLang from "@/components/noAuth/ToggleLang";
import BookADemo from "@/components/noAuth/BookADemo";

export default function Values() {
	const [scrollTop, setScrollTop] = useState(0);

	const handleScroll = (event) => {
		setScrollTop(event.currentTarget.scrollTop);
	};

	useEffect(() => {
		console.log("scrollTop", scrollTop);
	}, [scrollTop]);

	const { t } = useTranslation("common");
	const [bookADemo, setbookADemo] = useState(false);

	return (
		<>
			<Head>
				<title>Values Page ATS</title>
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
							className="relative mx-auto   sm:max-w-[600px] md:max-w-[720px] lg:max-w-[991px] xl:min-h-[100vh] xl:max-w-[1216px] 2xl:max-w-[1448px]"
							style={{ height: "inherit" }}
						>
							<div className="mt-[4rem] flex h-auto w-full flex-col items-center justify-center gap-20 p-8 max-lg:p-4 max-md:gap-10 max-md:p-4 xl:min-h-[calc(100vh-4rem)]">
								<div className="flex h-auto w-[80vw] flex-row items-center justify-center gap-8  p-4 px-12 max-lg:h-auto max-lg:min-h-fit max-lg:w-[90vw] max-md:flex-col max-md:p-2">
									<div className="h-auto  w-[40%] max-md:w-full">
										<Image
											src={featureH1}
											alt="why"
											width={500}
											height={500}
											className="max-md:min-h-auto ml-auto h-auto max-h-[60vh] w-auto  max-md:mx-auto"
										/>
									</div>
									<div className="flex w-[60%] flex-col gap-4  max-md:w-full">
										<div className="w-[90%] text-[2vw] uppercase  text-white max-lg:text-[3.3vw] max-md:w-full max-md:text-center max-md:text-[4vw]">
											{t("Noauth.values.text1")}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Integreation section */}
					<div
						className="flex h-auto w-full flex-col items-center justify-center gap-10"
						style={{
							backgroundImage: "url('/images/noAuth/featureI1.png')",
							backgroundRepeat: "no-repeat",
							backgroundSize: "cover",
							backgroundPosition: "center"
						}}
					>
						<div
							className="relative mx-auto   sm:max-w-[600px] md:max-w-[720px] lg:max-w-[991px] xl:min-h-[100vh] xl:max-w-[1216px] 2xl:max-w-[1448px]"
							style={{ height: "inherit" }}
						>
							<div className="min-h-auto flex w-[80vw] flex-col items-center gap-4 p-4 px-12 max-xl:w-[90vw] max-lg:h-auto max-lg:min-h-fit max-md:p-2">
								<div className="flex w-full justify-center gap-4">
									<div className="w-full text-center text-[3vw] font-bold text-gray-400 max-lg:text-[4.3vw] max-md:text-[5vw]">
										{t("Noauth.values.text2")}
									</div>
								</div>
								<div className="flex h-auto w-full items-center justify-center gap-20 p-8 pr-[3.5rem] max-xl:flex-col">
									<div
										className="relative min-h-[350px] w-[40vw] rounded-2xl max-xl:min-h-[200px] max-lg:w-[65vw]"
										style={{
											background: "linear-gradient(70deg, #2D129A -5.44%, #47BBFD 120.58%)",
											boxShadow: "-30px 40px 30px 0px rgba(0, 0, 0, 0.25)"
										}}
									>
										<div className="absolute left-6 top-8 h-[calc(100%-2rem)] w-full rounded-2xl bg-white/[0.9] p-4">
											<div className="flex h-full flex-col items-center justify-around gap-2">
												<div className="w-full text-[2vw] text-black max-lg:text-[3.3vw] max-md:text-[4vw]">
													{t("Noauth.values.text3")}
												</div>
												<div className="w-full text-[1vw] text-black max-lg:text-[1.5vw] max-md:text-[2vw]">
													{t("Noauth.values.text4")}
												</div>
											</div>
										</div>
									</div>
									<div
										className="relative min-h-[350px] w-[40vw] rounded-2xl max-xl:min-h-[200px] max-lg:w-[65vw]"
										style={{
											background: "linear-gradient(70deg, #2D129A -5.44%, #47BBFD 120.58%)",
											boxShadow: "-30px 40px 30px 0px rgba(0, 0, 0, 0.25)"
										}}
									>
										<div className="absolute left-6 top-8 h-[calc(100%-2rem)] w-full rounded-2xl bg-white/[0.9] p-4">
											<div className="flex h-full flex-col items-center justify-around gap-2">
												<div className="w-full text-[2vw] text-black max-lg:text-[3.3vw] max-md:text-[4vw]">
													{t("Noauth.values.text5")}
												</div>
												<div className="w-full text-[1vw] text-black max-lg:text-[1.5vw] max-md:text-[2vw]">
													{t("Noauth.values.text6")}
												</div>
											</div>
										</div>
									</div>
									<div
										className="relative min-h-[350px] w-[40vw] rounded-2xl max-xl:min-h-[200px] max-lg:w-[65vw]"
										style={{
											background: "linear-gradient(70deg, #2D129A -5.44%, #47BBFD 120.58%)",
											boxShadow: "-30px 40px 30px 0px rgba(0, 0, 0, 0.25)"
										}}
									>
										<div className="absolute left-6 top-8 h-[calc(100%-2rem)] w-full rounded-2xl bg-white/[0.9] p-4">
											<div className="flex h-full flex-col items-center justify-around gap-2">
												<div className="w-full text-[2vw] text-black max-lg:text-[3.3vw] max-md:text-[4vw]">
													{t("Noauth.values.text7")}
												</div>
												<div className="w-full text-[1vw] text-black max-lg:text-[1.5vw] max-md:text-[2vw]">
													{t("Noauth.values.text8")}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="min-h-auto flex w-[85vw] flex-col items-center gap-4  p-4 px-12 max-xl:w-[90vw] max-lg:h-auto max-lg:min-h-fit max-md:p-2">
								<div className="flex w-full justify-center gap-4">
									<div className="w-full text-center text-[3vw] font-bold text-gray-400 max-lg:text-[4.3vw] max-md:text-[5vw]">
										{t("Noauth.values.text9")}
									</div>
								</div>
								<div className="flex h-auto w-full items-center justify-evenly gap-20 p-8 pl-[14rem] pr-[15.5rem] max-xl:flex-col">
									<div
										className="relative min-h-[350px] w-[42.5vw] rounded-2xl max-xl:min-h-[200px] max-xl:w-[40vw] max-lg:w-[65vw]"
										style={{
											background: "linear-gradient(70deg, #2D129A -5.44%, #47BBFD 120.58%)",
											boxShadow: "-30px 40px 30px 0px rgba(0, 0, 0, 0.25)"
										}}
									>
										<div className="absolute left-6 top-8 h-[calc(100%-2rem)] w-full rounded-2xl bg-white/[0.9] p-4">
											<div className="flex h-full flex-col items-center justify-around gap-2">
												<div className="w-full text-[2vw] text-black max-lg:text-[3.3vw] max-md:text-[4vw]">
													{t("Noauth.values.text10")}
												</div>
												<div className="w-full text-[1vw] text-black max-lg:text-[1.5vw] max-md:text-[2vw]">
													{t("Noauth.values.text11")}
												</div>
											</div>
										</div>
									</div>

									<div
										className="relative min-h-[350px] w-[42.5vw] rounded-2xl max-xl:min-h-[200px] max-xl:w-[40vw] max-lg:w-[65vw]"
										style={{
											background: "linear-gradient(70deg, #2D129A -5.44%, #47BBFD 120.58%)",
											boxShadow: "-30px 40px 30px 0px rgba(0, 0, 0, 0.25)"
										}}
									>
										<div className="absolute left-6 top-8 h-[calc(100%-2rem)] w-full rounded-2xl bg-white/[0.9] p-4">
											<div className="flex h-full flex-col items-center justify-around gap-2">
												<div className="w-full text-[2vw] text-black max-lg:text-[3.3vw] max-md:text-[4vw]">
													{t("Noauth.values.text12")}
												</div>
												<div className="w-full text-[1vw] text-black max-lg:text-[1.5vw] max-md:text-[2vw]">
													{t("Noauth.values.text13")}
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
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
									{t("Noauth.values.text14")}
								</div>
								<div className="z-10 flex justify-start   pt-4 text-white max-md:pt-4">
									<div className="-translate-x-3 scale-90 ">
										<button className="learn-more1" onClick={() => setbookADemo(true)}>
											<span className="circle" aria-hidden="true">
												<span className="icon arrow"></span>
											</span>
											<span className="button-text">{t("Noauth.values.btn1")}</span>
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
