"use client";

import { getErrorMessageByPropertyName } from "@/util/schema-validator";
import { Radio } from "antd";
import { useFormContext, Controller } from "react-hook-form";

type RadioOptions = {
  label: string;
  value: string | number;
};

type RadioGroupProps = {
  name: string;
  options: RadioOptions[];
  label?: string;
  disabled?: boolean;
  cl?: string;
};

const GbFormRadioGroup = ({
  name,
  options,
  label,
  disabled,
  cl,
}: RadioGroupProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <>
      {label ? <label>{label}</label> : null}
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Radio.Group
            onChange={(e) => onChange(e.target.value)}
            value={value}
            className={`${errorMessage && "error_radio_group"} ${cl}`}
            disabled={disabled}
          >
            {options.map((option) => (
              <Radio key={option.value} value={option.value}>
                {option.label}
              </Radio>
            ))}
          </Radio.Group>
        )}
      />
      {errorMessage && <p className="error_message">{errorMessage}</p>}
    </>
  );
};

export default GbFormRadioGroup;
