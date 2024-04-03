import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { TextField } from '@mui/material';

interface FormFieldProps<T extends FieldValues> {
  id: Path<T>;
  label: string;
  errors: FieldErrors<T>;
  validateAsNumber: boolean;
  register: UseFormRegister<T>;
}

export const FormField = <T extends FieldValues>(props: FormFieldProps<T>) => {
  const { id, label, errors, validateAsNumber, register } = props;

  return (
    <>
      <TextField {...register(id, { required: true })} label={label} variant="outlined" fullWidth />
      {errors[id] && <span>This field is required</span>}
    </>
  );
};
