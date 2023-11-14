// @ts-nocheck
import Multiselect from "multiselect-react-dropdown";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import dynamic from "next/dynamic";
const ReactQuill = dynamic(() => import("react-quill"), {
	ssr: false
});
import "react-quill/dist/quill.snow.css";

export default function FormField({
	label,
	required,
	readOnly,
	icon,
	inputType,
	fieldType,
	handleChange,
	handleOnBlur,
	error,
	value,
	options,
	singleSelect,
	id,
	placeholder,
	clickevent,
	showTimeSelect,
	disabled,
	onSearch,
	showHours
}: {
	label?: string;
	required?: boolean;
	readOnly?: boolean;
	icon?: any;
	inputType?: string;
	fieldType?: "input" | "textarea" | "select" | "addItem" | "date" | "reactquill" | "select2";
	handleChange: ({ target: { id, value } }: { target: { id: string; value: any } }) => void;
	handleOnBlur: ({ target: { id, value } }: { target: { id: string; value: any } }) => void;
	error?: any;
	value?: any;
	options?: Array<any>;
	singleSelect?: boolean;
	id: string;
	placeholder?: string;
	clickevent?: any;
	showTimeSelect?: boolean;
	disabled?: boolean;
	showHours?: boolean;
	onSearch?: any;
}) {
	const [typePass, setTypePass] = useState(false);
	const errorMessage = error ? <p className="mt-1 text-[12px] text-red-500">{error}</p> : <></>;
	if (fieldType === "input") {
		return (
			<>
				<div className="mb-4 last:mb-0">
					<div>
						{label ? (
							<label htmlFor={`field_` + label.replace(/\s+/g, "")} className="mb-1 inline-block font-bold">
								{label}
								{required ? <sup className="text-red-500">*</sup> : ""}
							</label>
						) : (
							<></>
						)}
						{icon || inputType === "password" ? (
							<>
								<div className="relative">
									{inputType === "password" ? (
										<>
											<input
												type={typePass == true ? "text" : inputType}
												id={id}
												value={value}
												onChange={handleChange}
												placeholder={placeholder}
												readOnly={readOnly}
												className={
													`min-h-[45px] w-full rounded-normal border border-borderColor p-3 text-sm dark:border-gray-600 dark:bg-gray-700` +
													" " +
													(icon ? "pr-9" : "")
												}
											/>
											<button
												type="button"
												className="absolute right-3 top-[10px] text-lightGray"
												onClick={() => setTypePass(!typePass)}
											>
												<i className={`fa-regular` + " " + (typePass == true ? "fa-eye-slash" : "fa-eye")}></i>
											</button>
										</>
									) : (
										<>
											<input
												type={inputType}
												id={id}
												value={value}
												onChange={handleChange}
												placeholder={placeholder}
												readOnly={readOnly}
												className={
													`min-h-[45px] w-full rounded-normal border border-borderColor p-3 text-sm dark:border-gray-600 dark:bg-gray-700` +
													" " +
													(icon ? "pr-9" : "")
												}
											/>
											<span className="absolute right-3 top-[10px] text-lightGray">{icon}</span>
										</>
									)}
								</div>
							</>
						) : (
							<>
								<input
									type={inputType}
									id={id}
									className={
										`min-h-[45px] w-full rounded-normal border border-borderColor p-3 text-sm dark:border-gray-600 dark:bg-gray-700` +
										" "
									}
									value={value}
									onChange={handleChange}
									onBlur={handleOnBlur}
									placeholder={placeholder}
									readOnly={readOnly}
									disabled={disabled}
								/>
							</>
						)}
					</div>
					{errorMessage}
				</div>
			</>
		);
	}
	if (fieldType === "textarea") {
		return (
			<>
				<div className="mb-4 last:mb-0">
					<div>
						{label ? (
							<label
								htmlFor={`field_` + label.replace(/\s+/g, "").toLowerCase()}
								className="mb-1 inline-block font-bold"
							>
								{label}
								{required ? <sup className="text-red-500">*</sup> : ""}
							</label>
						) : (
							<></>
						)}
						<textarea
							id={id}
							className={
								`min-h-[45px] w-full resize-none rounded-normal border border-borderColor p-3 text-sm dark:border-gray-600 dark:bg-gray-700` +
								" "
							}
							value={value}
							onChange={handleChange}
							placeholder={placeholder}
						></textarea>
					</div>
					{errorMessage}
				</div>
			</>
		);
	}
	if (fieldType === "select") {
		return (
			<>
				<div className="mb-4 last:mb-0">
					<div>
						{label ? (
							<label
								htmlFor={`field_` + label.replace(/\s+/g, "").toLowerCase()}
								className="mb-1 inline-block font-bold"
							>
								{label}
								{required ? <sup className="text-red-500">*</sup> : ""}
							</label>
						) : (
							<></>
						)}
						<Multiselect
							options={options} // Options to display in the dropdown
							selectedValues={value} // Preselected value to persist in dropdown
							selectionLimit={singleSelect ? 1 : -1}
							onSearch={onSearch}
							closeOnSelect
							showArrow={true}
							placeholder={placeholder}
							onSelect={(selected) =>
								singleSelect
									? handleChange({ target: { id, value: selected } })
									: handleChange({ target: { id, value: selected } })
							} // Function will trigger on select event
							onRemove={(selected) => handleChange({ target: { id, value: selected } })} // Function will trigger on remove event
							displayValue="name" // Property name to display in the dropdown options
						/>
					</div>
					{errorMessage}
				</div>
			</>
		);
	}
	if (fieldType === "select2") {
		return (
			<>
				<div className="mb-4 last:mb-0">
					<div>
						{label ? (
							<label
								htmlFor={`field_` + label.replace(/\s+/g, "").toLowerCase()}
								className="mb-1 inline-block font-bold"
							>
								{label}
								{required ? <sup className="text-red-500">*</sup> : ""}
							</label>
						) : (
							<></>
						)}
						<Multiselect
							options={options} // Options to display in the dropdown
							selectedValues={id === "location" ? value && value.split("|") : value && value.split(",")} // Preselected value to persist in dropdown
							// singleSelect={singleSelect}

							selectionLimit={singleSelect ? 1 : -1}
							isObject={false}
							onSearch={onSearch}
							closeOnSelect
							showArrow={true}
							placeholder={placeholder}
							disable={readOnly}
							onSelect={(selectedList, selectedItem) => {
								if (singleSelect) {
									handleChange(selectedItem);
								} else {
									if (id === "location") {
										handleChange(selectedList.join("|"));
									} else {
										handleChange(selectedList.join(","));
									}
								}
							}} // Function will trigger on select event
							onRemove={(selectedList, selectedItem) => {
								if (singleSelect) {
									handleChange("");
								} else {
									if (id === "location") {
										handleChange(selectedList.join("|"));
									} else {
										handleChange(selectedList.join(","));
									}
								}
							}}
							// onRemove={(selected) => handleChange({ target: { id, value: selected } })} // Function will trigger on remove event
							displayValue="name" // Property name to display in the dropdown options
						/>
					</div>
					{errorMessage}
				</div>
			</>
		);
	}
	if (fieldType === "reactquill") {
		return (
			<>
				<div className="mb-4 last:mb-0">
					<div>
						{label ? (
							<label
								htmlFor={`field_` + label.replace(/\s+/g, "").toLowerCase()}
								className="mb-1 inline-block font-bold"
							>
								{label}
								{required ? <sup className="text-red-500">*</sup> : ""}
							</label>
						) : (
							<></>
						)}
						<ReactQuill
							defaultValue={"\n\n\n\n\n"}
							value={value}
							// onChange={(value: string) => handleChange({ target: { id, value } })}
							// onBlur={(value: string) => handleOnBlur({ target: { id, value } })}
							onChange={(content, delta, source, editor) => handleChange(content)}
							onBlur={(previousRange, source, editor) => handleOnBlur(editor.getHTML())}
							readOnly={readOnly}
						/>
					</div>
					{errorMessage}
				</div>
			</>
		);
	}
	if (fieldType === "date") {
		return (
			<>
				<div className="mb-4 last:mb-0">
					<div>
						{label ? (
							<label htmlFor={`field_` + label.replace(/\s+/g, "")} className="mb-1 inline-block font-bold">
								{label}
								{required ? <sup className="text-red-500">*</sup> : ""}
							</label>
						) : (
							<></>
						)}
						<div className="relative">
							<DatePicker
								selected={value}
								placeholderText={placeholder}
								onChange={(date) => handleChange({ target: { id, value: date } })}
								showTimeSelect={showTimeSelect}
								dateFormat={showHours ? "MMMM d, yyyy h:mm aa" : "MMMM d, yyyy"}
							/>
						</div>
					</div>
				</div>
				{errorMessage}
			</>
		);
	}
	return (
		<>
			<p className="rounded-normal bg-violet-200 p-2 text-sm">
				Please choose <b>fieldType</b> to show field here.
			</p>
		</>
	);
}
