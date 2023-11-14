import "@/styles/globals.css";
import Head from "next/head";
import { ThemeProvider } from "next-themes";
import { SessionProvider, signIn, useSession } from "next-auth/react";
import { useEffect, useState, useRef, Fragment } from "react";
import "nprogress/nprogress.css";
import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import { Toaster } from "react-hot-toast";
import { Analytics } from "@vercel/analytics/react";
import { appWithTranslation } from "next-i18next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useLangStore } from "@/utils/code";
import { initGA, logPageView } from "../utils/analytics";

function App({ Component, pageProps: { session, ...pageProps } }: any) {
	const { t } = useTranslation("common");
	const srcLang = useLangStore((state: { lang: any }) => state.lang);
	useEffect(() => {
		if (!window.GA_INITIALIZED) {
			initGA();
			window.GA_INITIALIZED = true;
		}
		logPageView();
	}, []);

	useEffect(() => {
		const handleRouteStart = () => NProgress.start();
		const handleRouteDone = () => NProgress.done();

		Router.events.on("routeChangeStart", handleRouteStart);
		Router.events.on("routeChangeComplete", handleRouteDone);
		Router.events.on("routeChangeError", handleRouteDone);

		return () => {
			// Make sure to remove the event handler on unmount!
			Router.events.off("routeChangeStart", handleRouteStart);
			Router.events.off("routeChangeComplete", handleRouteDone);
			Router.events.off("routeChangeError", handleRouteDone);
		};
	}, []);

	return (
		<>
			<Toaster />
			<ThemeProvider attribute="class">
				<SessionProvider session={session}>
					<Head>
						<meta name="viewport" content="viewport-fit=cover" />
						<meta name="viewport" content="width=device-width, initial-scale=1.0" />
						{/* <link rel="icon" href="/favicon.ico" /> */}
						<link rel="apple-touch-icon" sizes="180x180" href="/favicon_io/apple-touch-icon.png" />
						<link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
						<link rel="icon" type="image/png" sizes="16x16" href="/favicon_io/favicon-16x16.png" />
						<link rel="manifest" href="/favicon_io/site.webmanifest" />

						{/* <meta name='keywords' content='your, tags' /> */}

						<meta
							name="description"
							content={
								srcLang === "ja"
									? "Somhako（ソムハコ）は、採用担当者に寄り添うAI型採用プラットフォームです。採用担当者のことを考えた次世代型採用管理システム（ATS）で業務の効率化や負荷軽減を体験してください。Somhako（ソムハコ）は、人材採用に特化し開発したAIが採用業務の自動化、対話型AIによる業務サポート、きめ細やかなサポートを提供します。"
									: "Somhako is an AI-based recruiting platform that is close to recruiters. Somhako is an AI-driven recruiting platform that is designed with the recruiter in mind, providing automated recruiting operations, interactive AI support, and detailed support."
							}
						/>

						<meta
							name="subject"
							content={
								srcLang === "ja"
									? "AI型採用管理システム「Somhako(ソムハコ)」"
									: 'AI-based Recruitment Management System "Somhako”'
							}
						/>

						<meta name="copyright" content="Somhako" />

						<meta name="language" content={srcLang} />

						<meta
							name="og:title"
							content={
								srcLang === "ja"
									? "AI型採用管理システム「Somhako(ソムハコ)」"
									: 'AI-based Recruitment Management System "Somhako”'
							}
						/>

						<meta name="og:type" content="website" />

						<meta name="og:url" content="http://ats.somhako.com/home" />

						<meta name="og:image" content="https://ats.somhako.com/images/noAuth/headerLogo.png" />

						<meta name="og:site_name" content="Somhako" />

						<meta
							name="og:description"
							content={
								srcLang === "ja"
									? "Somhako（ソムハコ）は、採用担当者に寄り添うAI型採用プラットフォームです。採用担当者のことを考えた次世代型採用管理システム（ATS）で業務の効率化や負荷軽減を体験してください。Somhako（ソムハコ）は、人材採用に特化し開発したAIが採用業務の自動化、対話型AIによる業務サポート、きめ細やかなサポートを提供します。"
									: "Somhako is an AI-based recruiting platform that is close to recruiters. Somhako is an AI-driven recruiting platform that is designed with the recruiter in mind, providing automated recruiting operations, interactive AI support, and detailed support."
							}
						/>

						<title>
							{srcLang === "ja"
								? "AI型採用管理システム「Somhako(ソムハコ)」"
								: 'AI-based Recruitment Management System "Somhako”'}
						</title>
					</Head>
					<Component {...pageProps} />
				</SessionProvider>
			</ThemeProvider>
			<Analytics />
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
export default appWithTranslation(App);
