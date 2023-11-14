import React from "react";
import axios from "axios";
import toastcomp from "@/components/toast";

export const axiosInstance = axios.create({
	baseURL: process.env.NEXT_PUBLIC_PROD_BACKEND_BASE,
	timeout: 10000,
	headers: {
		"Content-Type": "application/json",
		accept: "application/json"
	}
});

export const axiosInstance2 = axios.create({
	baseURL: process.env.NEXT_PUBLIC_PROD_BACKEND_BASE,
	timeout: 10000,
	headers: {
		"Content-Type": "multipart/form-data"
	}
});
