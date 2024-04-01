import { createTheme } from '@mui/material';

import { defaultThemeOptions } from './defaultTheme';

const themeConfig = createTheme({
  palette: defaultThemeOptions.palette,
  typography: defaultThemeOptions.typography,
  components: defaultThemeOptions.components,
});

export default themeConfig;
