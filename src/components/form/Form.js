import { Container, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
const Form = () => {
  const [flightInfo, setFlightInfo] = useState({
    departureAirportCode: "",
    arrivalAirportCode: "",
    departureDate: "",
    returnDate: "",
  });
  return (
    <Container maxWidth="md">
      <form action="">
        <Grid container spacing={3}>
          <Grid item sm={6}>
            <TextField
              id="outlined-basic"
              fullWidth
              label="Outlined"
              variant="outlined"
            />
          </Grid>
          <Grid item sm={6}>
            <TextField
              id="outlined-basic"
              fullWidth
              label="Outlined"
              variant="outlined"
            />
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};

export default Form;
