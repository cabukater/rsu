import React from 'react'
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";

export default function Footer() {
    return (
        <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit">
                © Camila - 2021
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
    )
};
