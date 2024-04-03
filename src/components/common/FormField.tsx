import { FieldErrors, FieldValues, Path, UseFormRegister } from 'react-hook-form';

import { Box, TextField, Typography } from '@mui/material';

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
    <Box display="flex" flexDirection="column" sx={{ width: '100%' }}>
      <TextField
        label={label}
        variant="outlined"
        autoComplete="off"
        error={Boolean(errors[id])}
        fullWidth
        {...register(id, {
          required: true,
          validate: {
            checkIfNumber: (value) => {
              console.log(value);
              return Number(value) > 0 || !validateAsNumber || 'Please enter number';
            },
          },
        })}
      />
      {errors[id] && (
        <Typography fontSize="14px" color="red">
          {errors[id]?.message?.toString() || 'This field is required'}
        </Typography>
      )}
    </Box>
  );
};
