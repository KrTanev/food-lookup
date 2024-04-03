import { Form, useForm } from 'react-hook-form';

import { Box, Button } from '@mui/material';
import { useRouter } from 'next/router';
import { v4 as uuidv4 } from 'uuid';

import { usePostFood } from '@/api/foodsController';
import { Foods } from '@/api/foodsType';
import { FormField } from '@/components/common/FormField';

export const AddFoodForm = () => {
  const {
    register,
    control,
    formState: { errors, isValid },
    reset,
  } = useForm<Foods>({ mode: 'onChange' });
  const router = useRouter();

  const postFoodMutation = usePostFood();

  const onSubmit = (data: Foods) => {
    postFoodMutation.mutateAsync({ ...data, id: uuidv4().toString() }).then(() => {
      reset();
      router.push('/food-selection');
    });
  };

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

        <Button type="submit" disabled={!isValid} variant="contained" fullWidth>
          Add food
        </Button>
      </Box>
    </Form>
  );
};
