import { Form, useForm } from 'react-hook-form';

import { Box, Button } from '@mui/material';

import { usePostFood } from '@/api/foodsController';
import { Foods } from '@/api/foodsType';
import { FormField } from '@/components/common/FormField';

export const AddFoodForm = () => {
  const {
    register,
    control,
    formState: { errors, isValid },
  } = useForm<Foods>({ mode: 'onChange' });

  const postFoodMutation = usePostFood();

  const onSubmit = (data: Foods) => postFoodMutation.mutate(data);

  return (
    <Form onSubmit={({ data }) => onSubmit(data)} noValidate control={control}>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        gap="24px"
      >
        <FormField
          register={register}
          id="name"
          label="Name"
          errors={errors}
          validateAsNumber={false}
        />
        <FormField
          register={register}
          id="calories"
          label="Calories"
          errors={errors}
          validateAsNumber
        />
        <FormField
          register={register}
          id="protein"
          label="Protein"
          errors={errors}
          validateAsNumber
        />
        <FormField register={register} id="carbs" label="Carbs" errors={errors} validateAsNumber />
        <FormField register={register} id="fat" label="Fat" errors={errors} validateAsNumber />

        <Button type="submit" disabled={!isValid}>
          Submit
        </Button>
      </Box>
    </Form>
  );
};
