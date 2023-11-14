import React, { useState } from "react";

export default function Faq({ t }: any) {
	const [open1, setopen1] = useState(false);
	const [open2, setopen2] = useState(false);
	const [open3, setopen3] = useState(false);
	const [open4, setopen4] = useState(false);
	const [open5, setopen5] = useState(false);
	const [open6, setopen6] = useState(false);
	const [open7, setopen7] = useState(false);

	const handleClick = (callback1: any, callback2: any) => {
		setopen1(false);
		setopen2(false);
		setopen3(false);
		setopen4(false);
		setopen5(false);
		setopen6(false);
		setopen7(false);
		callback1(callback2);
	};

	return (
		<div className="w-full space-y-3 rounded-2xl ">
			<div className="rounded-[1vw] border-b-2 border-blue-700 p-2 text-blue-700 max-md:rounded-[2vw] max-md:p-0">
				<button
					className="flex w-full items-center gap-4 rounded-lg p-2 text-left text-[1vw] font-medium text-blue-700 max-xl:py-0 max-xl:text-[1.5vw] max-md:text-[2vw]"
					onClick={() => handleClick(setopen1, !open1)}
					aria-expanded={open1}
					{...(open1 && { "aria-controls": "disclosure-panel-1" })}
				>
					<span className="w-full text-center">{t("Noauth.home.text55")}</span>
					<i className={`fa-solid text-lg ${open1 ? "fa-power-off -rotate-90" : "fa-circle-plus"} `}></i>
				</button>
				{open1 && (
					<div className="m-2 mt-0 border-t-2 border-blue-500 p-2 text-center text-[1vw] max-xl:text-[1.5vw] max-md:text-[2vw]">
						{t("Noauth.home.text56")}
					</div>
				)}
			</div>

			<div className="rounded-[1vw] border-b-2 border-blue-700 p-2 text-blue-700 max-md:rounded-[2vw] max-md:p-0">
				<button
					className="flex w-full items-center gap-4 rounded-lg p-2 text-left text-[1vw] font-medium text-blue-700 max-xl:py-0 max-xl:text-[1.5vw] max-md:text-[2vw]"
					onClick={() => handleClick(setopen2, !open2)}
					aria-expanded={open2}
					{...(open2 && { "aria-controls": "disclosure-panel-2" })}
				>
					<span className="w-full text-center">{t("Noauth.home.text57")}</span>
					<i className={`fa-solid text-lg ${open2 ? "fa-power-off -rotate-90" : "fa-circle-plus"} `}></i>
				</button>
				{open2 && (
					<div className="m-2 mt-0 border-t-2 border-blue-500 p-2 text-center text-[1vw] max-xl:text-[1.5vw] max-md:text-[2vw]">
						{t("Noauth.home.text58")}
					</div>
				)}
			</div>

			<div className="rounded-[1vw] border-b-2 border-blue-700 p-2 text-blue-700 max-md:rounded-[2vw] max-md:p-0">
				<button
					className="flex w-full items-center gap-4 rounded-lg p-2 text-left text-[1vw] font-medium text-blue-700 max-xl:py-0 max-xl:text-[1.5vw] max-md:text-[2vw]"
					onClick={() => handleClick(setopen3, !open3)}
					aria-expanded={open3}
					{...(open3 && { "aria-controls": "disclosure-panel-3" })}
				>
					<span className="w-full text-center">{t("Noauth.home.text59")}</span>
					<i className={`fa-solid text-lg ${open3 ? "fa-power-off -rotate-90" : "fa-circle-plus"} `}></i>
				</button>
				{open3 && (
					<div className="m-2 mt-0 border-t-2 border-blue-500 p-2 text-center text-[1vw] max-xl:text-[1.5vw] max-md:text-[2vw]">
						{t("Noauth.home.text60")}
					</div>
				)}
			</div>

			<div className="rounded-[1vw] border-b-2 border-blue-700 p-2 text-blue-700 max-md:rounded-[2vw] max-md:p-0">
				<button
					className="flex w-full items-center gap-4 rounded-lg p-2 text-left text-[1vw] font-medium text-blue-700 max-xl:py-0 max-xl:text-[1.5vw] max-md:text-[2vw]"
					onClick={() => handleClick(setopen4, !open4)}
					aria-expanded={open4}
					{...(open4 && { "aria-controls": "disclosure-panel-4" })}
				>
					<span className="w-full text-center">{t("Noauth.home.text61")}</span>
					<i className={`fa-solid text-lg ${open4 ? "fa-power-off -rotate-90" : "fa-circle-plus"} `}></i>
				</button>
				{open4 && (
					<div className="m-2 mt-0 border-t-2 border-blue-500 p-2 text-center text-[1vw] max-xl:text-[1.5vw] max-md:text-[2vw]">
						{t("Noauth.home.text62")}
					</div>
				)}
			</div>

			<div className="rounded-[1vw] border-b-2 border-blue-700 p-2 text-blue-700 max-md:rounded-[2vw] max-md:p-0">
				<button
					className="flex w-full items-center gap-4 rounded-lg p-2 text-left text-[1vw] font-medium text-blue-700 max-xl:py-0 max-xl:text-[1.5vw] max-md:text-[2vw]"
					onClick={() => handleClick(setopen5, !open5)}
					aria-expanded={open5}
					{...(open5 && { "aria-controls": "disclosure-panel-5" })}
				>
					<span className="w-full text-center">{t("Noauth.home.text63")}</span>
					<i className={`fa-solid text-lg ${open5 ? "fa-power-off -rotate-90" : "fa-circle-plus"} `}></i>
				</button>
				{open5 && (
					<div className="m-2 mt-0 border-t-2 border-blue-500 p-2 text-center text-[1vw] max-xl:text-[1.5vw] max-md:text-[2vw]">
						{t("Noauth.home.text64")}
					</div>
				)}
			</div>

			<div className="rounded-[1vw] border-b-2 border-blue-700 p-2 text-blue-700 max-md:rounded-[2vw] max-md:p-0">
				<button
					className="flex w-full items-center gap-4 rounded-lg p-2 text-left text-[1vw] font-medium text-blue-700 max-xl:py-0 max-xl:text-[1.5vw] max-md:text-[2vw]"
					onClick={() => handleClick(setopen6, !open6)}
					aria-expanded={open6}
					{...(open6 && { "aria-controls": "disclosure-panel-6" })}
				>
					<span className="w-full text-center">{t("Noauth.home.text65")}</span>
					<i className={`fa-solid text-lg ${open6 ? "fa-power-off -rotate-90" : "fa-circle-plus"} `}></i>
				</button>
				{open6 && (
					<div className="m-2 mt-0 border-t-2 border-blue-500 p-2 text-center text-[1vw] max-xl:text-[1.5vw] max-md:text-[2vw]">
						{t("Noauth.home.text66")}
					</div>
				)}
			</div>

			<div className="rounded-[1vw] border-b-2 border-blue-700 p-2 text-blue-700 max-md:rounded-[2vw] max-md:p-0">
				<button
					className="flex w-full items-center gap-4 rounded-lg p-2 text-left text-[1vw] font-medium text-blue-700 max-xl:py-0 max-xl:text-[1.5vw] max-md:text-[2vw]"
					onClick={() => handleClick(setopen7, !open7)}
					aria-expanded={open7}
					{...(open7 && { "aria-controls": "disclosure-panel-7" })}
				>
					<span className="w-full text-center">{t("Noauth.home.text67")}</span>
					<i className={`fa-solid text-lg ${open7 ? "fa-power-off -rotate-90" : "fa-circle-plus"} `}></i>
				</button>
				{open7 && (
					<div className="m-2 mt-0 border-t-2 border-blue-500 p-2 text-center text-[1vw] max-xl:text-[1.5vw] max-md:text-[2vw]">
						{t("Noauth.home.text68")}
					</div>
				)}
			</div>
		</div>
	);
}
