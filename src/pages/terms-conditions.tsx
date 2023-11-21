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

export default function TCPage() {
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
				<title>Terms & Conditions Page ATS</title>
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
								Terms & Conditions
							</div>
						</div>
					</div>
					<div className="h-auto w-full  bg-[#F5F6F8]">
						<div className="flex h-auto w-full flex-col items-center justify-start gap-2  p-8 max-lg:p-4 max-md:gap-10 max-md:p-2">
							<div className="mt-[-16rem] flex h-auto w-[60vw] flex-col flex-wrap  gap-8 rounded  bg-white p-4  px-12 text-black shadow-lg max-lg:h-auto max-lg:min-h-fit max-lg:w-[90vw] max-md:mt-[-8rem] max-md:flex-col max-md:p-2">
								<h1 className="text-4xl font-extrabold max-md:text-2xl">Terms & Conditions</h1>
								<div className="content mt-4 flex flex-col gap-4 text-base font-[300] max-md:mt-2 max-md:text-xs">
									<p>
										Thank you for using&nbsp;<span className="font-bold">Somhako</span> services (the “Services”)
										provided by&nbsp;<span className="font-bold">AdvantF Group KK</span> ( Somhako-Product) (“Somhako”,
										“us”, “our”, “we”) to your company (“Your Company”, “you”, “your”, “yourself”), each individually
										referred to as a “Party” or together as “Parties” to these Terms & Conditions (these “Terms”).
									</p>
									<p>
										These Terms constitute a binding agreement between the Parties and define the terms and conditions
										under which we will deliver and support the Services, which aim to help you manage your recruitment
										process. By using the Services, you agree to be bound by the terms and conditions of these Terms.
									</p>
									<p>
										By clicking the “I Accept” button or checkbox presented with these Terms and accessing or using the
										Services, you are accepting these Terms (on behalf of yourself or the entity that you represent),
										meaning that you acknowledge that you have read these Terms, understand them and agree to be bound
										by them.
									</p>
								</div>

								<ul className="flex list-outside list-decimal flex-col gap-4 pl-4 font-semibold">
									<li>Definitions</li>
									<div className="text-base font-[300] max-md:text-xs">
										“Confidential Information” means any non-public or proprietary information or material relating to a
										Party, whether orally, in writing disclosed to the receiving Party, in electronic, tape, disk, or
										any other physical or visual form, by or on behalf of the disclosing Party, that is marked or
										designated as confidential or would reasonably be considered as confidential, including without
										limitation, all know-how, trade secrets, scientific, technical, statistical, strategic, financial or
										commercial information.
									</div>
									<div className="text-base font-[300] max-md:text-xs">
										“Order” means Your Company&apos;s subscription to the Services or any additional purchase of related
										products or services provided by us.
									</div>
									<div className="text-base font-[300] max-md:text-xs">
										Based on Article 45 of the GDPR (*2), the European Commission has certified that a country or region
										has an adequate level of protection for personal data. When handling personal data that has been
										transferred pursuant to a decision that recognizes that the See Supplementary Rules for the Handling
										of Personal Data Transferred under Adequacy Decisions.
									</div>
									<div className="text-base font-[300] max-md:text-xs">
										The EU referred to here refers to “foreign countries that have systems for the protection of
										personal information that are recognized to be at the same level as Japan in terms of protecting the
										rights and interests of individuals”
									</div>
									<div className="text-base font-[300] max-md:text-xs">
										“Sensitive Data” means any (i) categories of data enumerated in European Union Regulation 2016/679,
										Article 9(1) or any successor legislation; (ii) patient, medical, biometric, genetic, or health
										insurance data; (iii) financial account number, credit report information, or credit, debit or other
										payment card data; (iv) other information subject to regulation or protection under specific laws
										(or related rules or regulations) of the User&apos;s jurisdiction; (v) social security numbers,
										driver&apos;s license numbers or other government ID numbers; or (vi) any data similar to the
										foregoing that is protected under foreign or domestic laws or regulations.
									</div>
									<div className="text-base font-[300] max-md:text-xs">
										“Statement of Work” means an agreement specifying the details for the performance of the Services
										and signed by both Parties.
									</div>
									<div className="text-base font-[300] max-md:text-xs">
										“Term” means the period beginning on the Effective Date (as defined below) and, unless terminated
										earlier in accordance with terms hereof, continuing for the number of months or years set forth in
										your Order form or Statement of Work.
									</div>
									<div className="text-base font-[300] max-md:text-xs">
										“Users” means Your Company&apos;s employees, contractors, consultants, and representatives who are
										authorized by Your Company to utilize the Services and who are provided with access to the Services
										by virtue of login information. You understand that Users shall not be competitors of Somhako, or
										provide services that compete with the Services and that any such competing entity is not authorized
										to access an Account or receive any User benefits under these Terms.
									</div>
									<div className="text-base font-[300] max-md:text-xs">
										“Your Data” means any data, content, code, video, images, or other materials of any type that you
										(including any of your Users) submit to the Services. In this context, “submit” (and any similar
										term) includes submitting, uploading, transmitting, or otherwise making available Your Data to or
										through the Services.
									</div>

									<li>Effectiveness of these Terms</li>
									<div className="text-base font-[300] max-md:text-xs">
										The Terms shall be deemed established and take legal effect between Your Company and Somhako when
										you register an Account by entering your registration information and then logging in for the first
										time (the “Effective Date”).
									</div>

									<li>Use of the Services</li>
									<div className="text-base font-[300] max-md:text-xs">
										You agree to use the Services in accordance with, and only for purposes that are permitted by, (a)
										these Terms and (b) applicable laws, regulations or generally accepted practices or guidelines in
										the jurisdictions in which the Services are used (including any laws regarding the export of data or
										software to and from Japan or other relevant countries).
									</div>
									<div className="text-base font-bold max-md:text-xs">
										By accessing or using the Services, you agree that you may not:
									</div>
									<div className="flex flex-col gap-1 text-base font-[300] max-md:text-xs">
										<div>
											modify or copy the Services, or creative derivative works of the Services, in whole or in part;
										</div>
										<div>
											use the Services for any commercial purpose, including leasing, lending, selling, licensing or
											distributing the Services, or for any public display (commercial or non-commercial);
										</div>
										<div>
											use the Services in any manner or for any purpose that infringes, misappropriates or otherwise
											violates any intellectual property right or other right of any person;
										</div>
										<div>attempt to decompile or reverse engineer the Services;</div>
										<div>
											engage in any activity that interferes with or disrupts the Services (or the servers and networks
											that are connected to the Services);
										</div>
										<div>
											remove any copyright or other proprietary notices from the information associated with the
											Services;
										</div>
										<div>
											transfer such information to another person or “mirror” the information on any other server; or
											provide access to the Services or your Account to any person who is a competitor of Somhako or
											provides services that compete with the Services.
										</div>
									</div>

									<li>Provision of the Services</li>
									<div className="text-base font-[300] max-md:text-xs">
										<ol className="customList customList2 flex flex-col gap-2 font-bold">
											<li>Account Creation</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												In order to use the Services, you must register for an account (“Account”) and provide certain
												information about yourself, Your Company or your authorized Users. You represent and warrant
												that: (a) all required registration information you submit is truthful and accurate; and (b) you
												will maintain the accuracy of such information and promptly register any changes. Somhako may
												suspend or terminate your Account for any reason in accordance with these Terms.
											</div>

											<li>Account Responsibilities</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												You are responsible for maintaining the confidentiality of your login information and access,
												and are fully responsible for all activities that occur under your Account, regardless of the
												identity of the actual Users and whether or not they belong to your organization. You agree to
												immediately notify Somhako of any unauthorized use, or suspected unauthorized use of your
												Account or any other breach of security. Somhako cannot and will not be liable for any loss or
												damage arising from your failure to comply with the above requirements.
											</div>

											<li>Access and License</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												Subject to your compliance with these Terms, we shall provide Your Company access to the
												Services via a subscription specified in an Order signed by the Parties for the Term. We grant
												you a worldwide, non-exclusive, non-transferable right to access the Services during the Term to
												do the following solely for the internal purposes of managing your recruitment activities: (i)
												access the features and functions of the Services that you subscribed for in your Order; and
												(ii) view, download, reproduce, and print any data made available to you through the Services.
												We reserve all rights not expressly granted to you by these Terms. Except for any such expressly
												granted rights, nothing in these Terms grants you or any third party, by implication, waiver,
												estoppel or otherwise, any intellectual property rights or other right, title, or interest in or
												to the Services or any intellectual property we provide in connection therewith.
											</div>

											<li>Administrators</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												Through the Services, you may be able to specify certain Users as “Administrators”, who will
												have important rights and controls over your use of the Services and User Accounts. This may
												include making Orders; creating, de-provisioning, monitoring or modifying User Accounts; setting
												User usage permissions; and managing access to Your Data by Users or others. Without limiting
												the “Responsibility for Users” section of these Terms below, which fully applies to
												Administrators, you are solely responsible for who you allow to become Administrators and any
												actions they take, including as described above. You agree that our responsibilities do not
												extend to the internal management or administration of the Services for you.
											</div>

											<li>Responsibility for Users</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												Our Services have various user onboarding flows. You are responsible for understanding the
												settings and controls for each Service you use and for controlling who you allow to become a
												User. If payment is required for Users to use or access a Service, then we are only required to
												provide the Service to those Users for whom you have paid the applicable fees, and only such
												Users are permitted to access and use the Service. You are responsible for compliance with these
												Terms by all Users, including for any payment obligations. Please note that you are responsible
												for the activities of all your Users, including Orders they may place and how Users use Your
												Data, even if those Users are not from your organization or domain. We may display our user
												notice to Users at sign-up, first sign-in, account creation, or in-product.
											</div>

											<li>Feedback</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												If you, Your Company or any User furnishes any communications or materials to us by email, mail,
												through the platform on which the Services are provided, or otherwise, regarding your feedback
												on the Services and any suggestions or recommendations in relation to the Services (the
												“Feedback”), we, in our sole discretion, may utilize the Feedback provided we do not reference
												Your Company. You hereby grant us a worldwide, non-exclusive, irrevocable, perpetual,
												royalty-free right and license to incorporate the Feedback into our products and services. We
												may use, without any attribution or compensation, any ideas, know-how, concepts, techniques or
												other intellectual property rights contained in the Feedback, for any purpose whatsoever (but we
												are not required to do so).
											</div>
										</ol>
									</div>

									<li>Security and data privacy</li>
									<div className="text-base font-[300] max-md:text-xs">
										<ol className="customList customList3 flex flex-col gap-2 font-bold">
											<li>Security</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												We follow security standards and implement security procedures designed to help protect Your
												Data from security attacks.
											</div>

											<li>Privacy</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												You acknowledge that we collect certain data and information about you and your Users in
												connection with your and your Users&apos; use of the Services and otherwise in connection with
												these Terms. We collect and use all such data and information in accordance with our Privacy
												Policy.
											</div>

											<li>Improving Services</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												We are always striving to improve the Services. In order to do so, we use analytics techniques
												to better understand how our Services are being used. For more information on these techniques
												and the type of data collected, please read our Privacy Policy. All rights, title,s and
												interests in the data we collect, and all intellectual property rights therein, belong solely to
												us.
											</div>

											<li>Subpoenas</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												Nothing in these Terms prevents us from disclosing Your Data, including any Confidential
												Information you provide, to the extent required by law, subpoenas or court orders, but we will
												use commercially reasonable efforts to notify you where permitted to do so. We strive to balance
												your privacy rights with other legal requirements.
											</div>
										</ol>
									</div>

									<li>Your Data</li>
									<div className="text-base font-[300] max-md:text-xs">
										<ol className="customList customList4 flex flex-col gap-2 font-bold">
											<li>Using Your Data to Provide Services to You</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												You retain all right, title, and interests in and to Your Data in the form submitted to the
												Services. Subject to these Terms, you grant us a worldwide, royalty-free, non-exclusive license
												to access, use, process, copy, distribute, perform, export, and display Your Data and otherwise
												use Your Data as may be necessary for us to provide the Services. We may also access Your
												Company&apos;s Account, User Accounts, and your Services with User permission in order to
												respond to your support requests.
											</div>

											<li>Your Data Compliance Obligations</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												You represent and warrant that: (i) you have obtained all necessary rights, releases and
												permissions to submit Your Data to the Services and to grant the rights granted to us in these
												Terms and (ii) Your Data and its submission and use as you authorize in these Terms will not
												violate any third party intellectual property, privacy, publicity or other rights. Other than
												our express obligations under Section 5 of these Terms, “Security and data privacy”, we assume
												no responsibility or liability for Your Data, and you are solely responsible for Your Data and
												the consequences of submitting and using it with the Services.
											</div>

											<li>No Sensitive Data</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												You will not submit to the Services (or use the Services to collect) any Sensitive Data. You
												also acknowledge that we are not acting as your business associate or subcontractor.
												Notwithstanding any other provision to the contrary, we have no liability under these Terms for
												Sensitive Data.
											</div>
										</ol>
									</div>

									<li>Data Removal / Suspension of the Services</li>
									<div className="text-base font-[300] max-md:text-xs">
										<ol className="customList customList5 flex flex-col gap-2 font-bold">
											<li>Removal and Suspension for Cause</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												We have no obligation to monitor any content uploaded to the Services. Nonetheless, if we deem
												such action necessary based on your violation of these Terms, in response to takedown requests
												that we receive in relation to copyright or trademark violations, or our determination that your
												use of the Services disrupts or poses a security threat to the Services or any of our customers
												or vendors, we may (1) remove Your Data from the Services or (2) suspend your access to the
												Services. We will use reasonable efforts to provide you with advance notice of removals and
												suspensions when practicable, but if we determine that your actions endanger the operation of
												the Services or other users, we may suspend your access or remove Your Data immediately without
												notice. We have no liability to you for removing or deleting Your Data from or suspending your
												access to any Services as described in this Section. We may also suspend your access to the
												Services if you are in breach of any payment obligations to us. You will remain responsible for
												all fees and charges you incur during any period of suspension, and will not be entitled to any
												service credits for such period.
											</div>

											<li>Service Suspension for Maintenance / Interruption</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												Somhako may suspend the provision of the Services if any of the following conditions is
												applicable or in the opinion of Somhako such conditions may apply, in which case we will not be
												liable for damages suffered by the Your Company as a result of such suspension.
											</div>
											<div className="flex flex-col gap-0.5 pl-6 text-base font-[300] max-md:text-xs">
												<div>
													When it is necessary to maintain, inspect, repair, or update data on Somhako servers,
													software, or other telecommunications equipment;
												</div>
												<div>When there are unavoidable circumstances such as a breakdown of facilities;</div>
												<div>
													When a natural disaster or other emergency has occurred or is likely to occur and it is
													necessary to give priority to emergency communications for the public interest in accordance
													with the provisions of Article 8 of the Telecommunications Business Act;
												</div>
												<div>
													When a telecommunications carrier, etc. interrupts its telecommunications services; or
												</div>
												<div>
													When Somhako finds that the act of the utilizing enterprise interferes with the
													telecommunications facilities of Somhako or is likely to do so, and as a result, interferes
													with the performance of Somhako&apos;s business.
												</div>
											</div>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												If Somhako suspends the Services, you shall be notified of such suspension, along with the
												reason and duration thereof. This does not apply to periodic maintenance, temporary server
												downtime, or other emergency situations.
											</div>
										</ol>
									</div>

									<li>Disclaimer</li>
									<div className="text-base font-[300] max-md:text-xs">
										To the maximum extent permitted by law, the Services are provided on an “as-is” and “as available”
										basis, and Somhako (and our suppliers) expressly disclaim any and all warranties and conditions of
										any kind, whether express, implied, or statutory, including all warranties or conditions of
										merchantability, fitness for a particular purpose, title, quiet enjoyment, accuracy, or
										non-infringement. We make no warranty that the Services will meet your requirements, will be
										compatible with any software or system, will be available on an uninterrupted, timely, secure, or
										error-free basis, or will be accurate, reliable, free of viruses or other harmful code, or complete.
									</div>

									<li>Limitations of Liability</li>
									<div className="text-base font-[300] max-md:text-xs">
										To the maximum extent permitted by law, in no event shall Somhako be liable for any consequential,
										incidental, indirect, special, or punitive damages (including, without limitation, lost profits,
										damages for loss of data or profit or due to business interruption) arising from or relating to
										these Terms or your use of the Services.
									</div>

									<li>Intellectual Property Rights</li>
									<div className="text-base font-[300] max-md:text-xs">
										Somhako owns all rights, titles, and interests, including all intellectual property rights, in and
										to the Services and any and all intellectual property provided to you or any User in connection
										therewith.
									</div>

									<li>Confidentiality</li>
									<div className="text-base font-[300] max-md:text-xs">
										<ol className="customList customList6 flex flex-col gap-2 font-bold">
											<li>Use</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												Each Party agrees to: (a) use the Confidential Information of the other Party only for the
												purposes described and as permitted herein; and (b) restrict access to the Confidential
												Information to such of its personnel, agents, and/or consultants, if any, who have a need to
												have access to exercise its rights and perform its obligations hereunder and who have been
												advised of and have agreed in writing or are otherwise bound to treat such information as
												confidential.
											</div>

											<li>Exceptions</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												The foregoing provision will not apply to Confidential Information that (a) is publicly
												available or in the public domain at the time disclosed; (b) is or becomes publicly available or
												enters the public domain through no fault of the recipient; (c) is rightfully communicated to
												the recipient by persons not bound by confidentiality obligations with respect thereto; (d) is
												already in the recipient&apos;s possession free of any confidentiality obligations with respect
												thereto at the time of disclosure; (e) is independently developed by the recipient; or (f) is
												approved for release or disclosure by the disclosing party
											</div>

											<li>Permitted Disclosures</li>
											<div className="pl-6 text-base font-[300] max-md:text-xs">
												Notwithstanding the foregoing, each Party may disclose Confidential Information to the limited
												extent required (a) in order to comply with the order of a court or other governmental body, or
												as otherwise necessary to comply with applicable law, provided that the Party making the
												disclosure pursuant to the order will, if legally permissible, first have given written notice
												to the other Party and made a reasonable effort to obtain a protective order; or (b) to
												establish a Party&apos;s rights under these Terms, including to make such court filings as it
												may be required to do.
											</div>
										</ol>
									</div>

									<li>Term and Termination</li>
									<div className="text-base font-[300] max-md:text-xs">
										Subject to this Section, these Terms will remain in full force and effect for the duration of the
										Term. We may suspend your rights to use the Services (including your Account) or terminate these
										Terms if you or any User breaches these Terms, and such breach (a) is incapable or cure, or (b) if
										capable of cure, remains uncured for 30 days after we notify you of such breach.
									</div>
									<div className="text-base font-[300] max-md:text-xs">
										Upon expiration or termination of these Terms, your Account and right to access and use the Services
										will terminate immediately. You understand that any termination of your Account may involve the
										deletion of Your Data from our live databases. Somhako will not have any liability whatsoever to you
										for any termination of your rights under these Terms, including for termination of your Account or
										deletion of Your Data. No expiration or termination will entitle you to any refund.
									</div>

									<li>Terms Modification</li>
									<div className="text-base font-[300] max-md:text-xs">
										Somhako may revise these Terms at any time upon notice to you, in which case we will ask you to
										agree to such amendment in order to continue using the Services.
									</div>

									<li>Governing Law</li>
									<div className="text-base font-[300] max-md:text-xs">
										These Terms shall be governed by and construed in accordance with the laws of Japan and any dispute,
										claim, or controversy relating to the Services or these Terms shall be subject to the exclusive
										jurisdiction of the Yokohama District Court as the court of first instance.
									</div>

									<li>Severability</li>
									<div className="text-base font-[300] max-md:text-xs">
										If any provision of these Terms is invalid, illegal, or unenforceable in any jurisdiction, such
										invalidity, illegality or unenforceability will not affect any other term or provision hereof.
									</div>

									<li>Assignment</li>
									<div className="text-base font-[300] max-md:text-xs">
										You may not assign any of your rights or delegate any of your obligations hereunder to anyone other
										than your Users without our prior consent.
									</div>

									<li>Contact</li>
									<div className="text-base font-[300] max-md:text-xs">
										If you have questions or concerns regarding these Terms, please contact us at:&nbsp;
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