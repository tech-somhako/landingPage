import React, { useState, Fragment } from "react";
import tab1 from "public/images/noAuth/tab1.png";
import tab2 from "public/images/noAuth/tab2.png";
import tab3 from "public/images/noAuth/tab3.png";
import { Tab, Dialog, Listbox, Transition } from "@headlessui/react";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Image from "next/image";

export default function Tabs({ t }: any) {
	const tabHeading_1 = [
		{
			title: t("Noauth.home.text14")
		},
		{
			title: t("Noauth.home.text15")
		},
		{
			title: t("Noauth.home.text16")
		}
	];
	return (
		<>
			<Tab.Group>
				<Tab.List className={"overflow-auto"}>
					<div className="flex w-full justify-center ">
						{tabHeading_1.map((item, i) => (
							<Tab key={i} as={Fragment}>
								{({ selected }) => (
									<button
										className={
											"border-b-4 px-5 py-1 text-[1.2vw] font-semibold focus:outline-none max-md:text-[2.2vw]" +
											" " +
											(selected ? "border-gray-900 text-gray-900  lg:scale-105" : "border-transparent text-darkGray ")
										}
									>
										<i className="fa-solid fa-circle-check"></i>&nbsp;
										{item.title}
									</button>
								)}
							</Tab>
						))}
					</div>
				</Tab.List>
				<Tab.Panels>
					<Tab.Panel>
						<div className="flex flex-row items-stretch justify-center gap-4 p-8 max-lg:flex-col max-lg:items-center">
							<Image src={tab1} alt="LP" width={"1000"} height={"1000"} className="h-auto w-[40vw]  max-md:w-full" />
							<div className="mt-[5vw]  w-[30vw] py-2 max-lg:mt-0 max-lg:w-full max-lg:py-0">
								<Tab1 t={t} />
							</div>
						</div>
					</Tab.Panel>
					<Tab.Panel>
						<div className="flex flex-row items-start justify-center gap-4  p-8 max-lg:flex-col max-lg:items-center">
							<Image src={tab2} alt="LP" width={"1000"} height={"1000"} className="h-auto w-[40vw]  max-md:w-full" />
							<div className="mt-[5vw]  w-[30vw] py-2 max-lg:mt-0 max-lg:w-full max-lg:py-0">
								<Tab2 t={t} />
							</div>
						</div>
					</Tab.Panel>
					<Tab.Panel>
						<div className="flex flex-row items-start justify-center gap-4  p-8 max-lg:flex-col max-lg:items-center">
							<Image src={tab3} alt="LP" width={"1000"} height={"1000"} className="h-auto w-[40vw]  max-md:w-full" />
							<div className="mt-[5vw]  w-[30vw] py-2 max-lg:mt-0 max-lg:w-full max-lg:py-0">
								<Tab3 t={t} />
							</div>
						</div>
					</Tab.Panel>
				</Tab.Panels>
			</Tab.Group>
		</>
	);
}
