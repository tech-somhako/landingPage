import React, { useState } from "react";

export default function Tab2({ t }: any) {
	const [open1, setopen1] = useState(false);
	const [open2, setopen2] = useState(false);
	const [open3, setopen3] = useState(false);

	const handleClick = (callback1: any, callback2: any) => {
		setopen1(false);
		setopen2(false);
		setopen3(false);
		callback1(callback2);
	};

	return (
		<div className="mx-auto w-full  space-y-6 rounded-2xl max-lg:space-y-3">
			<div
				className="rounded-[3vw] p-2 text-white max-md:rounded-[4vw] max-md:p-0"
				style={{
					backgroundImage: "url('/images/noAuth/tabBg1.jpg')",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center"
				}}
			>
				<button
					className="flex w-full items-center gap-4 rounded-lg p-4 text-left text-[1vw] font-medium text-white max-lg:text-[1.5vw] max-md:text-[2vw]"
					onClick={() => handleClick(setopen1, !open1)}
					aria-expanded={open1}
					{...(open1 && { "aria-controls": "disclosure-panel-1" })}
				>
					<span className="w-full text-center">{t("Noauth.home.text23")}</span>
					<i className={`fa-solid text-lg ${open1 ? "fa-power-off -rotate-90" : "fa-circle-plus"} `}></i>
				</button>
				{open1 && (
					<div className="m-2 mt-0 border-t-2 border-cyan-500 p-2 text-center text-[1vw] font-light  max-lg:text-[1.5vw] max-md:text-[2vw]">
						{t("Noauth.home.text24")}
					</div>
				)}
			</div>
			<div
				className="rounded-[3vw] p-2 text-white max-md:rounded-[4vw] max-md:p-0"
				style={{
					backgroundImage: "url('/images/noAuth/tabBg1.jpg')",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center"
				}}
			>
				<button
					className="flex w-full items-center gap-4 rounded-lg p-4 text-left text-[1vw] font-medium text-white max-lg:text-[1.5vw] max-md:text-[2vw]"
					onClick={() => handleClick(setopen2, !open2)}
					aria-expanded={open2}
					{...(open2 && { "aria-controls": "disclosure-panel-2" })}
				>
					<span className="w-full text-center">{t("Noauth.home.text25")}</span>
					<i className={`fa-solid text-lg ${open2 ? "fa-power-off -rotate-90" : "fa-circle-plus"} `}></i>
				</button>
				{open2 && (
					<div className="m-2 mt-0 border-t-2 border-cyan-500 p-2 text-center text-[1vw] font-light  max-lg:text-[1.5vw] max-md:text-[2vw]">
						{t("Noauth.home.text26")}
					</div>
				)}
			</div>
			<div
				className="rounded-[3vw] p-2 text-white max-md:rounded-[4vw] max-md:p-0"
				style={{
					backgroundImage: "url('/images/noAuth/tabBg1.jpg')",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
					backgroundPosition: "center"
				}}
			>
				<button
					className="flex w-full items-center gap-4 rounded-lg p-4 text-left text-[1vw] font-medium text-white max-lg:text-[1.5vw] max-md:text-[2vw]"
					onClick={() => handleClick(setopen3, !open3)}
					aria-expanded={open3}
					{...(open3 && { "aria-controls": "disclosure-panel-1" })}
				>
					<span className="w-full text-center">{t("Noauth.home.text27")}</span>
					<i className={`fa-solid text-lg ${open3 ? "fa-power-off -rotate-90" : "fa-circle-plus"} `}></i>
				</button>
				{open3 && (
					<div className="m-2 mt-0 border-t-2 border-cyan-500 p-2 text-center text-[1vw] font-light  max-lg:text-[1.5vw] max-md:text-[2vw]">
						{t("Noauth.home.text28")}
					</div>
				)}
			</div>
		</div>
	);
}
