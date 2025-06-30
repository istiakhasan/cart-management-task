import { Checkbox } from "antd";
import { useFormContext, Controller } from "react-hook-form";


type checkboxFieldProps = {
  name: string;
  checked?: boolean;
  placeholder?: string;
  label?: string;
  defaultValue?: any[]; 
  handleChange?: (value: any[]) => void;
  options: { label: string; value: any }[];
  value?:any
};

const GbCheckboxGroup = ({
  name,
  label,
  checked,
  defaultValue = [], 
  handleChange,
  options,
  value
}: checkboxFieldProps) => {
  const { control, setValue } = useFormContext();

  return (
    <>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value: fieldValue } }) => (
          <Checkbox.Group
            options={options}
            style={{ display: 'flex', flexDirection: 'column' }}
            value={value ? value : fieldValue}
            onChange={(value) => {
              if (handleChange) {
                handleChange(value);
              }
              setValue(name, value); 
            }}
            
          />
        )}
      />
    </>
  );
};

export default GbCheckboxGroup;
