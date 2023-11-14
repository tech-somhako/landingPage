import Head from "next/head";
import React, { useRef, Fragment, useState, useEffect } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import NoAuthHeader from "@/components/noAuth/NoAuthHeader";
import NoAuthFooter from "@/components/noAuth/NoAuthFooter";
import Image from "next/image";
import { axiosInstance } from "./api/axiosApi";
import Link from "next/link";
import ToggleLang from "@/components/noAuth/ToggleLang";
import BookADemo from "@/components/noAuth/BookADemo";

export default function PrivacyPolicyPage() {
	const [scrollTop, setScrollTop] = useState(0);

	const handleScroll = (event) => {
		setScrollTop(event.currentTarget.scrollTop);
	};

	useEffect(() => {
		console.log("scrollTop", scrollTop);
	}, [scrollTop]);

	const [bookADemo, setbookADemo] = useState(false);
	return (
		<>
			<Head>
				<title>Privacy Policy Page ATS</title>
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
								Privacy policy
							</div>
						</div>
					</div>
					<div className="h-auto w-full  bg-[#F5F6F8]">
						<div className="flex h-auto w-full flex-col items-center justify-start gap-2  p-8 max-lg:p-4 max-md:gap-10 max-md:p-2">
							<div className="mt-[-16rem] flex h-auto w-[60vw] flex-col flex-wrap  gap-8 rounded  bg-white p-4  px-12 text-black shadow-lg max-lg:h-auto max-lg:min-h-fit max-lg:w-[90vw] max-md:mt-[-8rem] max-md:flex-col max-md:p-2">
								<h1 className="text-4xl font-extrabold max-md:text-2xl">Privacy Policy</h1>
								<div className="content mt-4 flex flex-col gap-4 text-base font-[300] max-md:mt-2 max-md:text-xs">
									<p>
										This Privacy Policy applies to all data collections and other data processing of AdvantF Group KK
										(Somhako) . (“our Company”, “us”, “our”, “we”), in particular through our Somhako services hosted
										at&nbsp;
										<Link href={"https://advantf.com/"} target="_blank" className="text-primary hover:underline">
											AdvantF.com
										</Link>{" "}
										or&nbsp;
										<Link href={"https://somhako.com/"} target="_blank" className="text-primary hover:underline">
											Somhako.com
										</Link>{" "}
										and any of their sub-domains. Your privacy is important to us. Our goal is to provide you with a
										personalized online experience that provides you with the information, resources, and services that
										are most relevant and helpful to you.
									</p>
									<p>
										This Privacy Policy has been written to describe the conditions under which Somhako is being made
										available to you. The Privacy Policy discusses, among other things, how data obtained during your
										visit to Somhako may be collected and used. We strongly recommend that you read this Privacy Policy
										carefully.
									</p>
									<p>
										By clicking the “I Accept” button or checkbox presented with this Privacy Policy and accessing or
										using our services, you are accepting this Privacy Policy (on behalf of yourself or the entity that
										you represent), meaning that you acknowledge that you have read this Privacy Policy, understand it
										and agree to be bound by it. If you do not agree with our Privacy Policy, you may choose not to use
										our website or services.
									</p>
								</div>

								<ul className="flex list-outside list-decimal flex-col gap-4 pl-4 font-semibold">
									<li>Types of Information We Collect</li>
									<div className="text-base font-[300] max-md:text-xs">
										<ol className="customList customList1 flex flex-col gap-2  font-bold">
											<li>Usage Data</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												Usage Data is data about your use of our sites and our service operations that is not directly
												associated with a specific personal identity. Some of the actions you perform on Somhako, such
												as requesting and downloading files, may be logged, and we may use this information to analyze
												trends, administer the website, track users&apos; movements, and gather broad demographic
												information for aggregate use, to improve user experience or for other business purposes. This
												information is anonymized and we will not use it to identify you.
											</div>
											<li>User Data</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												User Data is data that you as the user actively input while you are using the Somhako
												application. This data may include candidate information and job information, among others,
												depending on how you use our services. If you are a candidate, this is the information about
												yourself that you have entered in Somhako, including in any job applications you submit through
												us. If you are a recruiter, this is the information you submit with respect to your candidates,
												which you should only provide on our sites if your candidates have consented to your collection
												of their personal data and your use of their data on our services. While we can technically
												access this information residing on our servers, we guarantee that we will not do so without
												first receiving the explicit consent (email) of your organization.
											</div>
											<li>Aggregate Information</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												We may gather aggregate information, which refers to information your computer automatically
												provides to us and that cannot be tied back to you as a specific individual. Examples include
												referral data (the websites you visited just before and just after our site), the pages viewed,
												time spent at our website, and your Internet Protocol (IP) addresses. An IP address is a number
												that is automatically assigned to your computer whenever you access the Internet. For example,
												when you request a page from one of our sites, our servers log your IP address to create
												aggregate reports on user demographics and traffic patterns and for purposes of system
												administration.
											</div>
											<li>Cookies</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												Our site may use a feature of your browser to set a “cookie” on your computer. Cookies are small
												packets of information that a website&apos;s computer stores on your computer. Somhako can then
												read the cookies whenever you visit our site. We may use cookies in a number of ways, such as to
												deliver content specific to your interests and to track the pages you&apos;ve visited. These
												cookies allow us to use the information we collect to customize your experience so that your
												visit to our site is as relevant and as valuable to you as possible.
											</div>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												Most browser software can be set up to deal with cookies. You may modify your browser preference
												to provide you with choices relating to cookies. You have the choice to accept all cookies, to
												be notified when a cookie is set or to reject all cookies. If you choose to reject cookies,
												certain of the functions and conveniences of our website may not work properly, and you may be
												unable to use those parts of Somhako that require registration in order to participate, or you
												will have to re-register each time you visit our site. Most browsers offer instructions on how
												to reset the browser to reject cookies in the “Help” section of the toolbar. We do not link
												non-personal information from cookies to personally identifiable information without your
												permission.
											</div>
											<li>Personal Information</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												Personal information is information that is associated with your name or personal identity. We
												use personal information to better understand your needs and interests and to provide you with
												better service. The types of personal information you provide to us may include the name,
												address, phone number, e-mail address, company name, user IDs, billing information, or credit
												card information of you or the users you are authorized to represent.
											</div>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												When you request a demo or when you contact our Sales, Marketing, and Customer Support, we may
												also need to collect your personal information. If we do so, we will ask you to confirm that you
												authorized to provide this information on behalf of your organization.
											</div>
										</ol>
									</div>
									<li>How We Use Your Information</li>

									<div className="text-base font-[300] max-md:text-xs">
										We may use your Usage Data, Aggregate Information and Personal Information for the following
										purposes:
									</div>
									<div className="flex flex-col gap-1 text-base font-[300] max-md:text-xs">
										<div>
											To communicate with you (such as through email) about products that you have downloaded and
											services that you have signed up for, changes to this Privacy Policy, changes to our Terms of
											Service, or other important notices;
										</div>
										<div>
											To keep you posted on new products and services, upcoming events, offers, promotions and other
											information that we think will be of interest to you;
										</div>
										<div>
											To ask you to participate in surveys, or to solicit feedback on our products and services;
										</div>
										<div>
											To set up and maintain your account, and to do all other things required for providing our
											services, such as enabling collaboration, providing website and mail hosting, and backing up and
											restoring your data;
										</div>
										<div>
											To understand how users use our products and services, to monitor and prevent problems, and to
											improve our products and services;
										</div>
										<div>To provide customer support, and to analyze and improve our interactions with customers;</div>
										<div>To identify, analyze and resolve errors;</div>
										<div>
											To detect and prevent fraudulent transactions and other illegal activities, to report spam, and to
											protect the rights and interests of Somhako, Somhako&apos;s users, third parties and the public;
										</div>
										<div>
											To update, expand and analyze our records, identify new customers, and provide products and
											services that may be of interest to you;
										</div>
										<div>
											To analyze trends, administer our websites, and track visitor navigations on our websites to
											understand what visitors are looking for and to better help them;
										</div>
									</div>

									<div className="text-base font-[300] max-md:text-xs">
										To monitor and improve our marketing campaigns and make suggestions relevant to you as our user.
									</div>
									<div className="text-base font-[300] max-md:text-xs">
										We process your User Data only when you instruct us to do so, by using one of the modules or
										functions of our services. We may also use your User Data in order to support you, but only upon
										your request or after receiving your explicit consent.
									</div>
									<div className="text-base font-[300] max-md:text-xs">
										We may collect your credit card information to facilitate subscriptions and orders, including when
										you purchase a product or service from our website. If we collect your payment information, such
										information will not be kept longer than necessary for us to provide the services requested and
										process your payments. Credit card numbers are used only for processing payment and are not used for
										other purposes. Payment processing services may be provided by a third-party payment service, and a
										management company external to us may provide support for our financial activities. We may share
										your personal information with its partners to facilitate these transactions.
									</div>
									<div className="text-base font-[300] max-md:text-xs">
										We may also use your data in other ways, but only after we have informed you that we will do so.
									</div>

									<li>Information Sharing</li>

									<div className="text-base font-[300] max-md:text-xs">
										We do not sell, rent, or lease any individual&apos;s personal information or lists of email
										addresses to anyone for marketing purposes, and we take commercially reasonable steps to maintain
										the security of your personal information. However, we may share your personal information:
									</div>
									<div className="text-base font-[300] max-md:text-xs">
										with our employees and individuals who are independent contractors of the Somhako entity involved in
										providing the services (collectively our “employees”) so that they can perform the functions listed
										in Section 2 above. We ensure that access by our employees to your data is restricted to specific
										individuals, and is logged and audited. Our employees will also have access to data that you
										knowingly share with us for technical support or to import data into our products or services. We
										communicate our privacy and security guidelines to our employees and strictly enforce privacy
										safeguards within Somhako.
									</div>
									<div className="flex flex-col gap-1 text-base font-[300] max-md:text-xs">
										<div>
											with our partners and third-party service providers. We authorize these service providers to use
											or disclose the information only as necessary to perform services on behalf of our Company (for
											example, to support the delivery of, provide functionality on, or help to enhance the security of
											our website). We require these service providers by contract to safeguard the privacy and security
											of the personal information that they process on our behalf; to any competent law enforcement
											body, regulatory, government agency, court or other third party where we believe disclosure is
											necessary
										</div>
										<div>(i) as a matter of applicable law or regulation,</div>
										<div>(ii) to exercise, establish or defend our legal rights, or</div>
										<div>(iii) to protect your vital interests or those of any other person;</div>
										<div>
											to an acquirer, successor, or assignee as part of any merger, acquisition, debt financing, sale of
											assets, or similar transaction, or in the event of an insolvency, bankruptcy, or receivership in
											which information that is part of our business assets is transferred to one or more third parties,
											provided that we inform such third parties that they must use your personal information only for
											the purposes disclosed in this Privacy Policy; and to any other person with your consent to the
											disclosure.
										</div>
									</div>
									<div className="text-base font-[300] max-md:text-xs">
										If you apply to a job via Somhako, you acknowledge and agree that the data you submit along with
										your application will be shared with and owned by the company you are applying to, and that such
										company&apos;s privacy policy may also apply to you. Any request regarding such company&apos;s use
										of your application and data must be made directly to that company.
									</div>
									<div className="text-base font-[300] max-md:text-xs">
										Please remember that any information (including personal information) that you disclose in public
										areas of our website, such as forums, message boards, and news groups, becomes public information
										that others may collect, circulate, and use. Because we cannot and do not control the acts of
										others, you should exercise caution when deciding to disclose information about yourself or others
										in public forums such as these.
									</div>
									<div className="text-base font-[300] max-md:text-xs">
										If you do not want your personal information collected and used by us, please do not visit our
										website or use our services.
									</div>

									<li>External Links</li>
									<div className="text-base font-[300] max-md:text-xs">
										Somhako may provide links to third-party websites for the convenience of our users. If you access
										those links, you will leave Somhako. We do not control these third-party websites and cannot
										represent that their policies and practices will be consistent with this Privacy Policy. For
										example, other websites may collect or use personal information about you in a manner different from
										that described in this document. Therefore, you should use other websites with caution, and you do
										so at your own risk. We encourage you to review the privacy policy of any web site before submitting
										personal information.
									</div>
									<li>How to Access, Correct, and Delete Your Personal Information</li>
									<div className="text-base font-[300] max-md:text-xs">
										We are committed to keeping the personal information of our users accurate. You can review, correct,
										and request deletion of any of the personal information you have submitted to us at any time. In
										order to do this, please email us a request at&nbsp;
										<Link href={"mailto:tech@somhako.com"} className="text-primary hover:underline">
											tech@somhako.com
										</Link>
										. Please also email us at&nbsp;
										<Link href={"mailto:tech@somhako.com"} className="text-primary hover:underline">
											tech@somhako.com
										</Link>{" "}
										if you have submitted personal information on behalf of a candidate and that candidate requests that
										you modify or correct their data.
									</div>
									<div className="text-base font-[300] max-md:text-xs">
										We may provide users with online access to your own personal profiles, enabling you to view, update
										or delete your information at any time. If you request the deletion of your personal information
										while your subscription is still active, you may lose access to certain services. In addition, if
										you are a resident of the European Union, you can object to the processing of your personal
										information, ask us to restrict the processing of your personal information or request the
										portability of your personal information. You can exercise these rights by contacting us at&nbsp;
										<Link href={"mailto:tech@somhako.com"} className="text-primary hover:underline">
											tech@somhako.com
										</Link>
									</div>
									<li>Security</li>
									<div className="text-base font-[300] max-md:text-xs">
										We care about the security of your personal information and take appropriate steps including
										technical and organizational measures and safeguards to ensure that your personal information is
										treated securely and in accordance with this Website&apos;s Privacy Policy. We follow software
										security best practices and have security procedures in place to process your personal information,
										including measures to protect your personal information from unauthorized access, use, modification,
										and disclosure.
									</div>
									<div className="text-base font-[300] max-md:text-xs">
										To protect our users&apos; privacy and security, we also may take reasonable steps to verify your
										identity, such as a user ID and password, confirmation via email or confirmation by SMS, before
										granting access to modify your personal profile data. Certain areas of our websites may limit access
										to specific individuals, based on user permissions, or through the use of the above-mentioned
										verification step. While we take steps to protect your personal information, you are responsible for
										keeping your password confidential to protect access to your email or SMS and for the accuracy of
										the data you provide. Even though we have appropriate safeguards in place, we cannot guarantee that
										the information you submit through the Internet is completely secure.
									</div>
									<li>Opting Out</li>
									<div className="text-base font-[300] max-md:text-xs">
										From time to time we may email you electronic newsletters, announcements, surveys, or other
										information. If you prefer not to receive any or all of these communications, you may opt-out by
										following the directions provided within the electronic newsletters and announcements.
									</div>
									<li>Updates to this Privacy Policy</li>
									<div className="text-base font-[300] max-md:text-xs">
										We may update this Privacy Policy from time to time in response to changing legal, technical or
										business developments. When we update our Privacy Policy, we will take appropriate measures to
										inform you, consistent with the significance of the changes we make.
									</div>
									<div className="text-base font-[300] max-md:text-xs">
										You can see when this Privacy Policy was last updated by checking the “last updated” date displayed
										on this Privacy Policy page.
									</div>
									<li>Applicable Law</li>
									<div className="text-base font-[300] max-md:text-xs">
										As Somhako is part of AdvantF Group KK (Somhako) . in Japan, this Privacy Policy is governed by and
										construed in accordance with the laws of Japan, and you irrevocably submit to the exclusive
										jurisdiction of the Yokohama District Court as the court of first instance in connection with any
										dispute arising under this Privacy Policy.
									</div>
									<li>Contact</li>
									<div className="text-base font-[300] max-md:text-xs">
										If you want to provide comments or have questions about our Privacy Policy, or to exercise your
										rights, feel free to contact our Privacy Administrator at&nbsp;
										<Link href={"mailto:tech@somhako.com"} className="text-primary hover:underline">
											tech@somhako.com
										</Link>
									</div>
								</ul>

								<div className="content flex flex-col text-base font-[300] max-md:text-xs">
									<div>Somhako, November 06,2023</div>
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
