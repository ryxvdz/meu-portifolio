import { Container, styled, Typography, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Avatar from "../../../../assets/images/avatar.jpg";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import EmailIcon from "@mui/icons-material/Email";

const Hero = () => {
  const theme = useTheme(); // Adicione isso
  const StyledHero = styled("div")(() => ({
    backgroundColor: "black",
    height: "100vh",
  }));

  const StyledImage = styled("img")(() => ({
    width: "100%", // ocupa toda a coluna do grid
    height: "200px", // altura fixa para manter redondo
    borderRadius: "50%",
    objectFit: "cover",
    display: "block",
    margin: "0 auto",
  }));

  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <StyledImage src={Avatar} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Typography color="primary" variant="h1" textAlign="center">
                Ryan Dias
              </Typography>
              <Typography color="primary" variant="h2" textAlign="center">
                Desenvolvedor Web Front-End
              </Typography>
              <Grid container justifyContent="center" spacing={6}>
                <Grid item>
                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                      color: theme.palette.primary.main, // cor igual ao Typography
                      cursor: "pointer",
                      fontSize: "1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <ArrowDownwardIcon />
                    Download CV
                  </button>
                </Grid>
                <Grid item>
                  <button
                    style={{
                      background: "transparent",
                      border: "none",
                      color: theme.palette.primary.main, // cor igual ao Typography
                      cursor: "pointer",
                      fontSize: "1rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <EmailIcon />
                    Entre em contato
                  </button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
};

export default Hero;
//
