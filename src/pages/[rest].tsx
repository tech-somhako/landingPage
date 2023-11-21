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

import type { NextPage } from 'next';

export const Custom404: NextPage = () => null;

export const getServerSideProps: () => Promise<any> = async () => {
  return { redirect: { destination: '/', permanent: true } };
};

export default Custom404;