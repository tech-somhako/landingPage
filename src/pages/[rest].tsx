// import { useEffect } from "react"
// import { useRouter } from "next/router"

// export default function Custom404() {
//   const router = useRouter()

//   useEffect(() => {
//     router.replace("/")
//   })

//   return null
// }

// export default function Custom404() {
//     return null;
//   }

//   export const getStaticProps = () => {
//     return {
//       redirect: {
//         destination: '/',
//       },
//     };
//   };

// import type { NextPage } from 'next';

// export const Custom404: NextPage = () => null;

// export const getServerSideProps: () => Promise<any> = async () => {
//   return { redirect: { destination: '/', permanent: true } };
// };

// export default Custom404;

import type { GetServerSideProps, NextPage } from "next";

const Custom404: NextPage = () => null;

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
	// Determine the user's preferred language
	const preferredLang = locale || "en";

	// Redirect to the home page with the preferred language
	return {
		redirect: {
			destination: `/${preferredLang}`, // Adjust the path as needed
			permanent: true
		}
	};
};

export default Custom404;
