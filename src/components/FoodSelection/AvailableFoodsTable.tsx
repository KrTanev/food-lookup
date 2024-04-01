import { Box } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

import { Foods } from '../../api/foodsType';

const columns = [
  { field: 'id', headerName: 'ID', minWidth: 70 },
  { field: 'name', headerName: 'Food Item', minWidth: 150, maxWidth: 180, flex: 1 },
  { field: 'calories', headerName: 'Calories', minWidth: 110, maxWidth: 140, flex: 1 },
  { field: 'protein', headerName: 'Protein (g)', minWidth: 110, maxWidth: 140, flex: 1 },
  { field: 'carbs', headerName: 'Carbs (g)', minWidth: 110, maxWidth: 140, flex: 1 },
  { field: 'fat', headerName: 'Fat (g)', minWidth: 110, maxWidth: 140, flex: 1 },
];

type AvailableFoodsTableProps = {
  rows: Foods[];
};

export const AvailableFoodsTable = ({ rows }: AvailableFoodsTableProps) => {
  return (
    <Box style={{ height: 400, width: '100%' }}>
      <DataGrid rows={rows} columns={columns} checkboxSelection hideFooter />
    </Box>
  );
};
