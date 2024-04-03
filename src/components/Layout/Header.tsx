import { AppBar, Box, Toolbar, Typography } from '@mui/material';
import { useRouter } from 'next/router';

const selectedStyle = {
  fontWeight: 700,
  bgcolor: '#174cd1',
  borderRadius: 4,
  cursor: 'default',
  minWidth: '180px',
};
const defaultStyle = { cursor: 'pointer', minWidth: '180px' };

export default function Header() {
  const router = useRouter();

  return (
    <AppBar position="static" sx={{ height: 80 }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, whiteSpace: 'nowrap', fontWeight: 700, fontSize: '20px' }}
        >
          Food lookup
        </Typography>

        <Box
          sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}
        >
          <Typography
            variant="body1"
            component="div"
            align="center"
            sx={router.pathname === '/food-selection' ? selectedStyle : defaultStyle}
            onClick={() => router.push('/food-selection')}
          >
            Food selection
          </Typography>

          <Typography
            variant="body1"
            component="div"
            align="center"
            sx={router.pathname === '/add-food' ? selectedStyle : defaultStyle}
            onClick={() => router.push('/add-food')}
          >
            Add foods
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
