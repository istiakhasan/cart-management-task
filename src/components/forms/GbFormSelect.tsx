"use client";
import { getErrorMessageByPropertyName } from "@/util/schema-validator";
import { ConfigProvider, Select } from "antd";
import { useFormContext, Controller } from "react-hook-form";

export type SelectOptions = {
	label: string;
	value: string;
};

type SelectFieldProps = {
	options: SelectOptions[];
	name: string;
	size?: "large" | "small";
	value?: SelectOptions | SelectOptions[] | undefined;
	placeholder?: string;
	label?: string;
	defaultValue?: SelectOptions;
	handleChange?: (option: SelectOptions | SelectOptions[] | undefined) => void;
	multiple?: any;
	disabled?: any;
	cl?: any;
};

const GbFormSelect = ({
	name,
	size = "large",
	placeholder = "select",
	options,
	disabled,
	label,
	value,
	defaultValue,
	handleChange,
	multiple,
	cl,
}: SelectFieldProps) => {
	const {
		control,
		formState: { errors },
	} = useFormContext();

	const handleSelectChange = (
		selectedOption: SelectOptions | SelectOptions[]
	) => {
		if (handleChange) {
			handleChange(selectedOption);
		}
	};
	const errorMessage = getErrorMessageByPropertyName(errors, name);
	return (
		<>
			{label ? <label>{label}</label> : null}
			<Controller
				control={control}
				name={name}
				// defaultValue={defaultValue}
				render={({ field: { onChange, value } }) => (
					<Select
						showSearch
						disabled={disabled}
						className={`${errorMessage && "custom_select"} ${
							cl && "cl_select"
						}`}
						onChange={(selectedValue, selectedOption) => {
							onChange(selectedOption);
							handleSelectChange(selectedOption);
						}}
						mode={multiple && "multiple"}
						size={size}
						options={options}
						value={value}
						style={{ width: "100%", fontSize: "4px",height:"43px" }}
						placeholder={placeholder}
						filterOption={(input, option) =>
							(option?.label ?? "").toLowerCase().includes(input.toLowerCase())
						}
					/>
				)}
			/>
		</>
	);
};

export default GbFormSelect;
