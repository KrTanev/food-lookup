import { Dispatch, SetStateAction } from 'react';

import { Box } from '@mui/material';
import { DataGrid, GridRowId } from '@mui/x-data-grid';

import { Foods } from '@/api/foodsType';

const columns = [
  { field: 'name', headerName: 'Food Item', minWidth: 300, maxWidth: 600, flex: 1 },
  { field: 'calories', headerName: 'Calories', minWidth: 140, maxWidth: 370, flex: 1 },
  { field: 'protein', headerName: 'Protein (g)', minWidth: 140, maxWidth: 370, flex: 1 },
  { field: 'carbs', headerName: 'Carbs (g)', minWidth: 140, maxWidth: 370, flex: 1 },
  { field: 'fat', headerName: 'Fat (g)', minWidth: 140, maxWidth: 370, flex: 1 },
];

type AvailableFoodsTableProps = {
  rows: Foods[];
  selected?: GridRowId[];
  checkboxSelection?: boolean;
  setSelected?: Dispatch<SetStateAction<GridRowId[]>>;
};

export const AvailableFoodsTable = ({
  rows,
  selected,
  checkboxSelection,
  setSelected,
}: AvailableFoodsTableProps) => {
  return (
    <Box style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection={checkboxSelection}
        hideFooter
        rowSelectionModel={selected}
        onRowSelectionModelChange={(newSelection) => {
          if (!setSelected) {
            return;
          }

          setSelected(newSelection);
        }}
      />
    </Box>
  );
};
