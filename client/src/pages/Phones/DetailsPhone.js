import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPhoneByIdAPI } from "../../helpers/api";
import { Oval } from "react-loader-spinner";

import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
const DetailsPhone = () => {
  const [phoneSelected, setphoneSelected] = useState(null);
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  useEffect(() => {
    getPhoneByIdAPI(id).then((res) => {
      setphoneSelected(res.data.phone);
      setLoading(false);
    });
  }, [id]);

  return (
    <div>
      {loading ? (
        <Oval
          style={{
            textAlign: "center",
            marginLeft: "0.5em",
            marginBottom: "0.5em",
          }}
          color="#00BFFF"
          height={80}
          width={80}
        />
      ) : (
        <>
          <Typography
            style={{
              textAlign: "center",
              marginTop: "0.5em",
              marginBottom: "0.5em",
            }}
            variant="h2"
            component="div"
            gutterBottom
          >
            Details of {phoneSelected.title}
          </Typography>
          <Paper
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 500,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 128, height: 128 }}>
                  <Img alt="complex" src={phoneSelected.image} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    >
                      {phoneSelected.title}
                    </Typography>
                    <Typography variant="body2" gutterBottom>
                      {phoneSelected.description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Color: {phoneSelected.color}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="subtitle1" component="div">
                    {"$ "}
                    {phoneSelected.price}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        </>
      )}
    </div>
  );
};

export default DetailsPhone;
