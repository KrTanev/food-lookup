import { Foods } from '@/api/foodsType';

export const calculateTotals = (foodItems: Foods[]) => {
  let totalCalories = 0;
  let totalProtein = 0;
  let totalCarbs = 0;
  let totalFat = 0;

  for (let item of foodItems) {
    totalCalories += item.calories;
    totalProtein += item.protein;
    totalCarbs += item.carbs;
    totalFat += item.fat;
  }

  return {
    totalCalories,
    totalProtein,
    totalCarbs,
    totalFat,
  };
};
