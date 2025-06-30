"use client";
import { getErrorMessageByPropertyName } from "@/util/schema-validator";
import { Input } from "antd";
import { Controller, useFormContext } from "react-hook-form";

type TextAreaProps = {
  name: string;
  label?: string;
  rows?: number;
  value?: string;
  placeholder?: string;
  required?: boolean;
  cl?: any;
  disabled?: any;
};

const GbFormTextArea = ({
  name,
  label,
  rows,
  value,
  placeholder,
  required,
  disabled,
  cl
}: TextAreaProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  const errorMessage = getErrorMessageByPropertyName(errors, name);
  return (
    <div className={`flex flex-col  w-full`}>
      <div>
        <span>{label ? label : null}</span>
        {required ? (
          <span
            style={{
              color: "red",
            }}
          >
            *
          </span>
        ) : null}
      </div>

      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <Input.TextArea
            rows={rows}
            placeholder={placeholder}
            disabled={disabled}
            {...field}
            defaultValue={value}
            style={
              errorMessage
                ? {
                    borderRadius: "4px",
                    padding: "12px",
                    background: "#FADADA",
                    fontSize: "16px",
                    fontWeight: "400",
                  }
                :cl? {
                    borderRadius: "4px",
                    padding: "12px",
                    background: "#F7F9FB",
                    fontSize: "14px",
                    fontWeight: "400",
                    border:"none"
                  }:{
                    borderRadius: "4px",
                    padding: "12px",
                    // background: "#F7F9FB",
                    fontSize: "14px",
                    fontWeight: "400",
                    // border:"none"
                  }
            }
          />
        )}
      />
      {/* <small style={{ color: "red" }}>{errorMessage}</small> */}
    </div>
  );
};

export default GbFormTextArea;
