import { Box, Typography } from '@mui/material';

import { Foods } from '@/api/foodsType';
import { calculateTotals } from '@/utils/helpers/foodSelectionHelper';

type LabelValueProps = {
  label: string;
  value: string | number;
};

type SelectedFoodsTotalProps = {
  selectedRows: Foods[];
};

const LabelValue = ({ label, value }: LabelValueProps) => {
  return (
    <Box display="flex" width="100px" justifyContent="flex-end" alignItems="center" gap="2px">
      <Typography sx={{ fontWeight: 550 }}>{label}</Typography>
      <Typography>{value}</Typography>
    </Box>
  );
};

export const SelectedFoodsTotal = ({ selectedRows }: SelectedFoodsTotalProps) => {
  const { totalCalories, totalCarbs, totalFat, totalProtein } = calculateTotals(selectedRows);

  return (
    <Box display="flex" justifyContent="space-between">
      <Typography sx={{ fontWeight: 500 }}>Total</Typography>

      <Box display="flex" gap="12px">
        <LabelValue label="Calories:" value={totalCalories.toFixed(2)} />
        <LabelValue label="Protein:" value={totalCarbs.toFixed(2)} />
        <LabelValue label="Carbs:" value={totalFat.toFixed(2)} />
        <LabelValue label="Fat:" value={totalProtein.toFixed(2)} />
      </Box>
    </Box>
  );
};
