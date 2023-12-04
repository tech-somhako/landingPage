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

export default function PricingPage2() {
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
						<div className="container mx-auto px-4 py-12">
							<div className="text-center">
								<h1 className="mb-4 text-4xl font-bold text-white">Start now to get closer to your goal</h1>
								<div className="mb-8 flex justify-center space-x-4">
									<button className="gradient-blur rounded-full px-4 py-2 shadow-md focus:outline-none">
										Annually
									</button>
									<button className="gradient-blur rounded-full px-4 py-2 shadow-md focus:outline-none">Monthly</button>
								</div>
							</div>
							<div className="grid grid-cols-1 gap-4 md:grid-cols-4">
								<div className="gradient-blur rounded-lg p-6 shadow-md">
									<h2 className="mb-4 text-lg font-semibold">Free</h2>
									<p className="mb-4 text-4xl font-bold">
										$0 <span className="text-sm font-normal">per user/month, billed annually</span>
									</p>
									<p className="mb-6">Explore the product</p>
									<ul className="mb-6">
										<li>Ability to track time</li>
										<li>Up to 3 projects</li>
										<li>Up to 10 people invites</li>
									</ul>
									<button className="w-full rounded-md bg-blue-500 py-2 text-white">Get started</button>
								</div>

								<div className="rounded-lg bg-blue-500 p-6 text-white shadow-md">
									<h2 className="mb-4 text-lg font-semibold">Premium</h2>
									<p className="mb-4 text-4xl font-bold">
										$2 <span className="text-sm font-normal">per user/month, billed annually</span>
									</p>
									<p className="mb-6">Boost productivity</p>
									<ul className="mb-6">
										<li>100 GB of storage</li>
										<li>Up to 10 projects</li>
										<li>No seat limit</li>
									</ul>
									<button className="gradient-blur w-full rounded-md py-2 text-blue-500">Get started</button>
								</div>

								<div className="gradient-blur rounded-lg p-6 shadow-md">
									<h2 className="mb-4 text-lg font-semibold">Business</h2>
									<p className="mb-4 text-4xl font-bold">
										$4 <span className="text-sm font-normal">per user/month, billed annually</span>
									</p>
									<p className="mb-6">Get max efficiency</p>
									<ul className="mb-6">
										<li>500 GB of storage</li>
										<li>No project limit</li>
										<li>No workspace limit</li>
									</ul>
									<button className="w-full rounded-md bg-blue-500 py-2 text-white">Get started</button>
								</div>

								<div className="gradient-blur rounded-lg p-6 shadow-md">
									<h2 className="mb-4 text-lg font-semibold">Enterprise</h2>
									<p className="mb-4 text-4xl font-bold">
										Custom <span className="text-sm font-normal">individual payment</span>
									</p>
									<p className="mb-6">Become unique</p>
									<ul className="mb-6">
										<li>No any limit</li>
										<li>Flexible pricing</li>
										<li>Impact on development</li>
									</ul>
									<button className="w-full rounded-md bg-blue-500 py-2 text-white">Talk to sales</button>
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
