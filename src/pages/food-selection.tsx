import { Box, Typography } from '@mui/material';

import { useGetFoods } from '@/api/foodsController';
import { AvailableFoodsTable } from '@/components/FoodSelection/AvailableFoodsTable';
import MainLayout from '@/components/Layout/MainLayout';

export default function FoodsSelection() {
  const { data } = useGetFoods();

  return (
    <MainLayout>
      <Box sx={{ width: '100%', height: '100%', py: 4, px: 14 }}>
        <AvailableFoodsTable rows={data || []} />
        <Typography>Hello</Typography>
      </Box>
    </MainLayout>
  );
}
