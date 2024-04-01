import { Container, Typography, Box } from "@mui/material";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      sx={{
        bgcolor: "#f7f7f7",
        p: 6,
        position: "fixed",
        bottom: 0,
        width: "100%",
        zIndex: 9999,
      }}
      component="footer"
    >
      <Container>
        <Typography variant="body1">Check your food!</Typography>
        <Typography variant="body2" color="text.secondary">
          © {year} Food lookup
        </Typography>
      </Container>
    </Box>
  );
}
