"use client"
import { getErrorMessageByPropertyName } from "@/util/schema-validator";
import { Input } from "antd";
import { useFormContext, Controller } from "react-hook-form";
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
  disabled?: boolean;
  cl?: any;
  trigger?: (name: string) => void; // Add trigger prop
}

const GbFormInput = ({
  name,
  type,
  size = "large",
  value,
  id,
  placeholder,
  validation,
  label,
  required,
  disabled=false,
  cl,
  trigger,
  ...rest
}: IInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

    const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
     
      <div className="">
        {label ? <span className="mb-[4px]">{label}</span> : null}
   
       {required &&    <span
          style={{
            color: "red",
          }}
        >
          *
        </span>}

      </div>
      <Controller
        control={control}
        name={name}
        defaultValue={value || ""}
        render={({ field }) =>
          type === "password" ? (
            <Input.Password
            autoFocus
            autoComplete="off"
              type={type}
              size={size}
              style={{
                borderRadius: "4px",
                padding: "12px",
                background: "#F7F9FB",
                fontSize: "16px",
                fontWeight: "400",
                // border: "none",
              }}
              placeholder={`${placeholder}`}
              {...field}
              value={value ? value : field.value}
            />
          ) : (
            <Input
            autoFocus 
            disabled={disabled}
            autoComplete="off"
              type={type}
              size={size}
              style={
                errorMessage?{
                  borderRadius: "4px",
                  background: "#FADADA",
                  fontSize: "16px",
                  fontWeight: "400",
                  // height:"48px"

                }: cl?
                {
                borderRadius: "4px",
                // background: "white",
                background: "#F7F9FB",
                fontSize: "14px",
                fontWeight: "400",
                padding:"9px",
                // height:"48px",
                border:"none"
              }:{
                borderRadius: "4px",
                background: "white",
                // background: "#F7F9FB",
                fontSize: "14px",
                fontWeight: "400",
                padding:"9px"
                // height:"48px",
                // border:"none"
              }}
               placeholder={placeholder}
              {...field}
              value={value ? value : field.value}
              {...rest}
              onChange={(e) => {
                field.onChange(e); // Call the field's onChange
                if (trigger) {
                  trigger(name); // Trigger validation on change
                }
              }}
            />
          )
        }
      />
      {/* <small style={{ color: "red" }}>{errorMessage}</small> */}
    </>
  );
};

export default GbFormInput;
