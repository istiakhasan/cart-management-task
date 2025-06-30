"use client";
import { getErrorMessageByPropertyName } from "@/util/schema-validator";
import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import { useState } from "react";

interface IInput {
  name: string;
  type?: string;
  size?: "large" | "small";
  value?: string | string[] | undefined;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
  handleChange?: any;
  handleBlur?: any;
  disabled?: boolean;
  cl?: any;
  trigger?: (name: string) => void;
}

const GbFormInputV2 = ({
  name,
  type,
  size = "large",
  value,
  id = name,
  placeholder,
  validation,
  label,
  required,
  disabled = false,
  cl,
  trigger,
  handleChange,
  handleBlur,
  ...rest
}: IInput) => {
  const {
    control,
    formState: { errors },
    setValue,
    watch
  } = useFormContext();

  const [lastValidValue, setLastValidValue] = useState(value || "");

  const errorMessage = getErrorMessageByPropertyName(errors, name);
  return (
    <>
      <div className={`floating-label-input ${errorMessage ? 'err' : ''}`}>
        {label && (
          <label htmlFor={name} className="text-[#999] block text-[12px]">
            {required && <span style={{ color: "red" }}>*</span>}
            {label}
          </label>
        )}
        <Controller
          control={control}
          name={name}
          defaultValue={value || ""}
          render={({ field }) => (
            <Input
              id={name}
              autoFocus
              disabled={disabled}
              autoComplete="off"
              type={type}
              size={size}
              style={
                errorMessage
                  ? { boxShadow: "none" }
                  : { boxShadow: "none", border: "none" }
              }
              placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              {...rest}
              onBlur={(e) => {
                field.onBlur();
                const isValid = handleBlur ? handleBlur(e) : true;
                if (isValid === false) {
                  setValue(name,null)
                }
              }}
            />
          )}
        />
      </div>
    </>
  );
};

export default GbFormInputV2;
