import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import LogoImg from "/public/images/beta-logo.png";

// import LogoImg from "/public/images/noAuth/headerLogo.png";
import LogoWhite from "/public/images/beta-logo.png";
// import LogoWhite from "/public/images/beta-logo-white.png"

export default function Logo(props: any) {
	const { theme } = useTheme();
	return (
		<>
			{props.url ? (
				<>
					<Link href={props.url} className="inline-block align-middle">
						<Image
							src={theme === "dark" ? LogoWhite : LogoImg}
							priority
							alt={"Somhako"}
							width={props.width ? props.width : "160"}
						/>
					</Link>
				</>
			) : (
				<>
					<Image
						src={theme === "dark" ? LogoWhite : LogoImg}
						priority
						alt={"Somhako"}
						width={props.width ? props.width : "160"}
						className="mx-auto"
					/>
				</>
			)}
		</>
	);
}
