//@ts-nocheck
import React from "react";
import toast, { Toaster } from "react-hot-toast";

export default function toastcomp(title, type) {
	toast(title, {
		type: type,
		duration: 5000,
		position: "bottom-left",
		// reverseOrder=false

		// Styling
		// style: {
		//     background: "#363636",
		// 	color: "#fff"
		// },
		className:
			" border-t-2 border-l-4 dark:border-lightBlue border-primary text-xs bg-lightBlue dark:bg-gray-800 text-black dark:text-white capitalize"
	});
}
