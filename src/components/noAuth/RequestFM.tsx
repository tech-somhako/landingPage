import toastcomp from "../toast";
import { useLangStore } from "@/utils/code";
import Link from "next/link";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import Button from "../Button";
import FormField from "../FormField";
import { Tab, Listbox, Transition, Dialog } from "@headlessui/react";
import { axiosInstance2 } from "@/pages/api/axiosApi";

export default function requestFM({ requestFM, setrequestFM }: any) {
	//book a demo

	const cancelButtonRef = useRef(null);

	const [selectedCheckbox, setSelectedCheckbox] = useState(null);
	const [fname, setfname] = useState("");
	const [lname, setlname] = useState("");
	const [cname, setcname] = useState("");
	const [email, setemail] = useState("");
	const [contact, setcontact] = useState("");
	const [address, setaddress] = useState("");
	const [check1, setcheck1] = useState(false);

	const handleCheckboxChange = (value) => {
		setSelectedCheckbox((prevSelectedCheckbox) => (prevSelectedCheckbox === value ? null : value));
	};

	function disBtn() {
		return (
			fname.length > 0 &&
			lname.length > 0 &&
			cname.length > 0 &&
			email.length > 0 &&
			contact.length > 0 &&
			address.length > 0 &&
			check1
		);
	}

	async function submit() {
		const fd = new FormData();
		fd.append("firstName", fname);
		fd.append("lastName", lname);
		fd.append("companyName", cname);
		fd.append("emailAddress", email);
		fd.append("telephoneNumber", contact);
		fd.append("address", address);
		if (selectedCheckbox != null) {
			fd.append("companyType", selectedCheckbox);
		}
		await axiosInstance2
			.post(`/subscription/request-materials/`, fd)
			.then(async (res) => {
				toastcomp("Request for materials successfully sent", "success");
				setrequestFM(false);
				setfname("");
				setlname("");
				setcname("");
				setemail("");
				setcontact("");
				setaddress("");
				setcheck1(false);
				setSelectedCheckbox(null);
			})
			.catch((err) => {
				console.log("!!!", "err", err);
				toastcomp(err.response.data.errors, "error");
				setrequestFM(false);
				setfname("");
				setlname("");
				setcname("");
				setemail("");
				setcontact("");
				setaddress("");
				setcheck1(false);
				setSelectedCheckbox(null);
			});
	}

	const checkboxes = ["LLC", "Incorporation", "Agency", "Priopritery", "Start-up"];

	return (
		<>
			<Transition.Root show={requestFM} as={Fragment}>
				<Dialog as="div" className="relative z-[1000]" initialFocus={cancelButtonRef} onClose={setrequestFM}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>

					<div className="fixed inset-0 z-10 overflow-y-auto">
						<div className="flex min-h-full items-center justify-center p-4 text-center">
							<Transition.Child
								as={Fragment}
								enter="ease-out duration-300"
								enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
								enterTo="opacity-100 translate-y-0 sm:scale-100"
								leave="ease-in duration-200"
								leaveFrom="opacity-100 translate-y-0 sm:scale-100"
								leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							>
								<Dialog.Panel className="relative w-full transform overflow-hidden rounded-[30px] bg-[#FBF9FF] text-left text-black shadow-xl transition-all sm:my-8 sm:max-w-lg">
									<div className="flex items-center justify-between px-8 py-6">
										<h4
											className="text-lg font-semibold leading-none"
											style={{
												background: "linear-gradient(70deg, #2D129A -5.44%, #47BBFD 120.58%)",
												WebkitBackgroundClip: "text",
												WebkitTextFillColor: "transparent"
											}}
										>
											Request for materials
										</h4>
										<button
											type="button"
											className="leading-none hover:text-gray-700"
											onClick={() => setrequestFM(false)}
										>
											<i className="fa-solid fa-xmark"></i>
										</button>
									</div>
									<div className="w-full p-8 pt-4 font-normal">
										<div className="mx-[-10px] flex flex-wrap">
											<div className="mb-4 w-full px-[10px] md:max-w-[50%]">
												<div className="mb-4 last:mb-0">
													<div>
														<label htmlFor={`field_fname`} className="mb-1 inline-block text-sm font-light">
															First name&nbsp;
															<sup className="text-red-500">*</sup>
														</label>
														<input
															type="text"
															id="fname"
															className={`min-h-[45px] w-full rounded-normal border border-borderColor p-3 text-sm`}
															value={fname}
															onChange={(e) => setfname(e.target.value)}
														/>
													</div>
												</div>
											</div>
											<div className="mb-4 w-full px-[10px] md:max-w-[50%]">
												<div className="mb-4 last:mb-0">
													<div>
														<label htmlFor={`field_lname`} className="mb-1 inline-block text-sm font-light">
															Last name/given name&nbsp;
															<sup className="text-red-500">*</sup>
														</label>
														<input
															type="text"
															id="lname"
															className={`min-h-[45px] w-full rounded-normal border border-borderColor p-3 text-sm`}
															value={lname}
															onChange={(e) => setlname(e.target.value)}
														/>
													</div>
												</div>
											</div>
										</div>

										<div className="mb-4 last:mb-0">
											<div>
												<label htmlFor={`field_cname`} className="mb-1 inline-block text-sm font-light">
													Company Name&nbsp;<span className="text-xs text-gray-500">(Corporate Information)</span>&nbsp;
													<sup className="text-red-500">*</sup>
												</label>
												<input
													type="text"
													id="cname"
													className={`min-h-[45px] w-full rounded-normal border border-borderColor p-3 text-sm`}
													value={cname}
													onChange={(e) => setcname(e.target.value)}
												/>
											</div>
										</div>
										<div className="mb-4 last:mb-0">
											<div>
												<label htmlFor={`field_email`} className="mb-1 inline-block text-sm font-light">
													Email Address&nbsp;<span className="text-xs text-gray-500">(Corporate Information)</span>
													&nbsp;
													<sup className="text-red-500">*</sup>
												</label>
												<input
													type="email"
													id="email"
													className={`min-h-[45px] w-full rounded-normal border border-borderColor p-3 text-sm`}
													value={email}
													onChange={(e) => setemail(e.target.value)}
												/>
												<label htmlFor={`field_email`} className="my-1 inline-block text-xs font-light text-gray-500">
													We do not accept free email addresses, including Gmail, Yahoo! Mail, and cell phone email
													addresses.
												</label>
											</div>
										</div>
										<div className="mb-4 last:mb-0">
											<div>
												<label htmlFor={`field_contact`} className="mb-1 inline-block text-sm font-light">
													Telephone Number&nbsp;
													<sup className="text-red-500">*</sup>
												</label>
												<input
													type="text"
													id="contact"
													className={`min-h-[45px] w-full rounded-normal border border-borderColor p-3 text-sm`}
													value={contact}
													onChange={(e) => setcontact(e.target.value)}
												/>
											</div>
										</div>
										<div className="mb-4 last:mb-0">
											<div>
												<label htmlFor={`field_address`} className="mb-1 inline-block text-sm font-light">
													Address&nbsp;
													<sup className="text-red-500">*</sup>
												</label>
												<input
													type="text"
													id="address"
													className={`min-h-[45px] w-full rounded-normal border border-borderColor p-3 text-sm`}
													value={address}
													onChange={(e) => setaddress(e.target.value)}
												/>
											</div>
										</div>
										<div className="mb-4 last:mb-0">
											<div>
												<label htmlFor={`field_ctype`} className="mb-2 inline-block text-sm font-light">
													Company Type
												</label>

												<div className="flex flex-wrap justify-center gap-4">
													{checkboxes.map((checkbox, i) => (
														<div className="flex flex-nowrap gap-2 text-xs" key={i}>
															<input
																type="checkbox"
																value={checkbox}
																checked={selectedCheckbox === checkbox}
																onChange={() => handleCheckboxChange(checkbox)}
															/>
															{checkbox}
														</div>
													))}
												</div>
											</div>
										</div>
										<div className="mb-4 last:mb-0">
											<label htmlFor={`field_address`} className="mb-1 inline-block text-sm font-light">
												Handling of personal information (Privacy Policy)
											</label>
											<div className="justfy-start my-1 flex items-center text-sm">
												<input
													type="checkbox"
													id="agreeWithAgreement"
													className="mr-2"
													checked={check1}
													onChange={(e) => setcheck1(e.target.checked)}
												/>
												<span>Agree</span>
												<sup className="text-red-500">*</sup>
											</div>
										</div>
										<div>
											<button
												className="transform rounded-normal bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-3 text-xs tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-blue-600 hover:to-blue-800 hover:brightness-110 active:animate-bounce disabled:from-slate-200 disabled:to-slate-200 disabled:text-gray-500"
												disabled={!disBtn()}
												onClick={() => submit()}
											>
												Request for materials
											</button>
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition.Root>
		</>
	);
}
