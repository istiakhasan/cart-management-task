"use client";

import { ReactElement, ReactNode, useEffect } from "react";
import { useForm, FormProvider, SubmitHandler } from "react-hook-form";

type FormConfig = {
  defaultValues?: Record<string, any>;
  resolver?: any;
  mode?: any;
};

type FormProps = {
  children?: ReactElement | ReactNode;
  // submitHandler: SubmitHandler<any>;
  submitHandler: any;
  isReset?: any;
} & FormConfig;

const GbForm = ({
  children,
  submitHandler,
  defaultValues,
  resolver,
  mode,
  isReset=true
}: FormProps) => {
  const formConfig: FormConfig = {};

  if (!!defaultValues) formConfig["defaultValues"] = defaultValues;
  if (!!resolver) formConfig["resolver"] = resolver;
  if (!!mode) formConfig["mode"] = resolver;
  const methods = useForm<FormProps>(formConfig);

  const { handleSubmit, reset } = methods;

  const onSubmit = (data: any) => {
    submitHandler(data,reset);
    // reset();
  };

  useEffect(() => {
    if(isReset){
      reset(defaultValues)
    }
  }, [defaultValues, reset, methods,isReset]);
  return (
    <FormProvider {...methods}>
      <form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  );
};

export default GbForm;
