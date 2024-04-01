import { AppBar, Box, Toolbar, Typography } from '@mui/material';

const selectedStyle = { fontWeight: 700, bgcolor: '#174cd1', borderRadius: 4, p: 1 };

// TODO: Add check for selected path so you can apply the style for corresponding tab
export default function Header() {
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
            sx={{ fontWeight: 700, bgcolor: '#174cd1', borderRadius: 4, p: 1 }}
          >
            Food selection
          </Typography>

          <Typography variant="body1" component="div" sx={{ marginLeft: 2, marginRight: 2 }}>
            Add foods
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
