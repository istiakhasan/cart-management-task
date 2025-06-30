"use client";
import { getErrorMessageByPropertyName } from "@/util/schema-validator";
import { Rate, Flex } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import React, { useState } from "react";

interface IRatingInput {
  name: string;
  value?: number;
  id?: string;
  placeholder?: string;
  validation?: object;
  label?: string;
  required?: boolean;
  disabled?: boolean;
  trigger?: (name: string) => void;
}

const desc = ['terrible', 'bad', 'normal', 'good', 'wonderful'];

const GbFormRating = ({
  name,
  value,
  id,
  validation,
  label,
  required,
  disabled = false,
  trigger,
  ...rest
}: IRatingInput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();

  const errorMessage = getErrorMessageByPropertyName(errors, name);

  return (
    <div>
      {/* Label + Required */}
      {label ? (
        <div className="mb-[4px]">
          <span>{label}</span>
          {required && (
            <span style={{ color: "red" }}>*</span>
          )}
        </div>
      ) : null}

      {/* Rating Input */}
      <Controller
        control={control}
        name={name}
        defaultValue={value || 0}
        render={({ field }) => (
          <Flex gap="middle" vertical>
            <Rate
              {...field}
              id={id}
              tooltips={desc}
              value={field.value}
              disabled={disabled}
              onChange={(val) => {
                field.onChange(val);
                if (trigger) {
                  trigger(name);
                }
              }}
              {...rest}
            />
          </Flex>
        )}
      />

      {/* Error Message */}
      {errorMessage && (
        <small style={{ color: "red" }}>{errorMessage}</small>
      )}
    </div>
  );
};

export default GbFormRating;
