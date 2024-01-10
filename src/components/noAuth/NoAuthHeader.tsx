import ThemeChange from "../ThemeChange";
import { useRouter } from "next/router";
import ToggleLang from "./ToggleLang";
import toastcomp from "../toast";
import { useLangStore } from "@/utils/code";
import Logo from "../Logo";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import novusIcon from "/public/images/novus1.png";
import headerLogo from "/public/images/noAuth/headerLogo.png";
import novusIcon12 from "/public/images/novus12.png";
import Button from "../Button";

export default function noAuthHeader({ scrollTop, setbookADemo }: any) {
	const srcLang = useLangStore((state: { lang: any }) => state.lang);
	const router = useRouter();
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<nav
				id="topbar"
				className={`fixed left-0 top-0 z-[100] w-full    ${
					scrollTop > 10 ? "bg-black/20 backdrop-blur-md" : "bg-transparent"
				} ${isOpen && " max-lg:h-full max-lg:bg-black/20 max-lg:backdrop-blur-lg"} `}
			>
				<div
					className={`mx-auto flex flex-wrap items-center justify-between  px-4 py-0 max-lg:items-start max-lg:py-1 sm:max-w-[600px] md:max-w-[720px] lg:max-w-[991px] xl:max-w-[1216px] 2xl:max-w-[1448px] ${
						isOpen && " max-lg:h-full"
					} `}
				>
					<div className="flex flex-shrink-0 items-center">
						<Image
							src={headerLogo}
							className="h-[55px] w-[55px] cursor-pointer"
							alt="Logo"
							onClick={() => {
								router.push("/");
							}}
						/>
					</div>
					<div className={` block  lg:hidden`}>
						<button onClick={() => setIsOpen(!isOpen)} className="flex h-full items-center rounded  px-3 py-3">
							<svg
								className={`h-7 w-7 fill-white ${isOpen ? "hidden" : "block"}`}
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
							</svg>
							<svg
								className={`h-7 w-7 fill-white ${isOpen ? "block" : "hidden"}`}
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
							</svg>
						</button>
					</div>

					<div
						className={`block w-full  p-3 text-sm lg:flex lg:w-auto lg:items-center lg:justify-center lg:gap-6 ${
							isOpen ? " mt-4 block  lg:mt-0" : "hidden"
						}`}
					>
						<Link
							href="/"
							className={
								"my-auto mb-4 block w-fit max-lg:mx-auto lg:mb-0 lg:mt-0" +
								" " +
								`${router.route === "/" ? "menu__link2" : "menu__link"}`
							}
						>
							{srcLang === "ja" ? "ホーム" : "Home"}
						</Link>
						<Link
							href="/about"
							className={
								"my-auto mb-4 block w-fit max-lg:mx-auto lg:mb-0 lg:mt-0" +
								" " +
								`${router.route.includes("/about") ? "menu__link2" : "menu__link"}`
							}
						>
							{srcLang === "ja" ? "Somhakoについて" : "About"}
						</Link>
						<Link href="/novus" className="my-auto mb-4 flex w-fit flex-nowrap max-lg:mx-auto lg:mb-0 lg:mt-0">
							<div className={`${router.route.includes("/novus") ? "menu__link2" : "menu__link"}`}>
								{srcLang === "ja" ? "ノーバス" : "Novus"}
							</div>
							<span className="mb-1 ml-1 mt-1 rounded-full bg-gradient-to-r from-blue-600 to-blue-800 px-2 py-0.5 text-xs text-white">
								{srcLang === "ja" ? "ベータ" : "beta"}
							</span>
						</Link>
						<Link
							href="/pricing"
							className={
								"my-auto mb-4 block w-fit max-lg:mx-auto lg:mb-0 lg:mt-0" +
								" " +
								`${router.route.includes("/pricing") ? "menu__link2" : "menu__link"}`
							}
						>
							{srcLang === "ja" ? "価格" : "Pricing"}
						</Link>
						<Link
							href="/blogs"
							className={
								"my-auto mb-4 block w-fit max-lg:mx-auto lg:mb-0 lg:mt-0" +
								" " +
								`${router.route.includes("/blogs") ? "menu__link2" : "menu__link"}`
							}
						>
							{srcLang != "ja" ? "Blogs" : "ブログ"}
						</Link>
						<div className="ml-[4rem]  max-lg:ml-0 max-lg:mt-[4rem] max-lg:flex max-lg:w-full max-lg:justify-center">
							<button
								className=" transform rounded-full bg-gradient-to-r from-blue-600 to-blue-800 px-8 py-3 tracking-wide text-white shadow-lg transition-all duration-500 ease-in-out hover:scale-110 hover:animate-pulse hover:from-blue-600 hover:to-blue-800 hover:brightness-110 active:animate-bounce "
								onClick={() => setbookADemo(true)}
							>
								{srcLang === "ja" ? "デモを予約する" : "Book a demo"}
							</button>
						</div>
					</div>
				</div>
			</nav>
		</>
	);
}
