import { Box, Typography } from '@mui/material';

import { AddFoodForm } from '@/components/AddFood/AddFoodForm';
import MainLayout from '@/components/Layout/MainLayout';

export default function Home() {
  return (
    <MainLayout>
      <Box
        sx={{ width: '100%', height: '100%', py: 4, px: 14 }}
        display="flex"
        flexDirection="column"
        gap="26px"
        justifyContent="center"
      >
        <Typography sx={{ color: 'lightblue', fontWeight: 500, fontSize: '20px' }}>
          Add food
        </Typography>

        <AddFoodForm />
      </Box>
    </MainLayout>
  );
}
