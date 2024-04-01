import { Box } from '@mui/material';

import Footer from './Footer';
import Header from './Header';

export default function MainLayout({ children }: { children: JSX.Element }) {
  return (
    <Box>
      <Header />
      {children}
      <Footer />
    </Box>
  );
}
