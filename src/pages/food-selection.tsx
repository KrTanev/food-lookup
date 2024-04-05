import { useState } from 'react';

import { Box, Button, Typography } from '@mui/material';
import { GridRowId } from '@mui/x-data-grid';

import { useGetFoods } from '@/api/foodsController';
import { Foods } from '@/api/foodsType';
import { AvailableFoodsTable } from '@/components/FoodSelection/AvailableFoodsTable';
import { SelectedFoodsTotal } from '@/components/FoodSelection/SelectedFoodsTotal';
import MainLayout from '@/components/Layout/MainLayout';

export default function FoodsSelection() {
  const { data, isLoading } = useGetFoods();

  const [selectedRows, setSelectedRows] = useState<GridRowId[]>([]);
  const [selectedFoods, setSelectedFoods] = useState<Foods[]>([]);

  return (
    <MainLayout>
      <Box
        sx={{ width: '100%', height: '100%', py: 4, px: 14 }}
        display="column"
        flexDirection="row"
        gap="32px"
      >
        <Box mb={'64px'}>
          <Box display="flex" justifyContent="space-between">
            <Typography sx={{ color: 'lightblue', fontWeight: 500, fontSize: '20px' }}>
              Available foods
            </Typography>

            <Button
              sx={{ color: 'lightblue', fontWeight: 500, fontSize: '20px' }}
              onClick={() => {
                const selectedData = data?.filter((x) => selectedRows?.includes(x.id));

                setSelectedFoods((prev) => [...prev, ...(selectedData || [])]);
                setSelectedRows([]);
              }}
            >
              Add selected foods
            </Button>
          </Box>
          <AvailableFoodsTable
            rows={data || []}
            checkboxSelection
            selected={selectedRows}
            setSelected={setSelectedRows}
            isLoading={isLoading}
          />
        </Box>

        <Box>
          <Box display="flex" justifyContent="space-between">
            <Typography sx={{ color: 'lightblue', fontWeight: 500, fontSize: '20px' }}>
              Selected foods
            </Typography>

            <Button
              sx={{ color: 'lightblue', fontWeight: 500, fontSize: '20px' }}
              onClick={() => {
                const selectedData = data?.filter((x) => selectedRows?.includes(x.id));

                setSelectedFoods([]);
              }}
            >
              Clear foods
            </Button>
          </Box>

          <AvailableFoodsTable rows={selectedFoods} />
        </Box>

        <Box>
          <Typography sx={{ color: 'lightblue', fontWeight: 500, fontSize: '20px' }}>
            Total selected
          </Typography>

          <SelectedFoodsTotal selectedRows={selectedFoods} />
        </Box>
      </Box>
    </MainLayout>
  );
}
