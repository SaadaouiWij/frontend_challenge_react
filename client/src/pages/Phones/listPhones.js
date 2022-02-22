import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { getAllPhones } from "../../redux/phoneSlice";
import { Audio, Oval } from "react-loader-spinner";
import { Link } from "react-router-dom";
const ListPhones = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllPhones()).then(() => {
      setLoading(false);
    });
  }, [dispatch]);
  const { listPhones } = useSelector((state) => state.phones);
  return (
    <div>
      <Typography
        style={{
          textAlign: "center",
          marginTop: "0.5em",
          marginBottom: "0.5em",
        }}
        variant="h1"
        component="div"
        gutterBottom
      >
        List of phones
      </Typography>
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
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {listPhones.map((phone, index) => (
            <Grid item xs={4}>
              <Card
                sx={{ maxWidth: 345 }}
                key={index}
                style={{ border: "2em" }}
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={phone.image}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Link to={`/details/${phone._id}`}>
                      <Typography gutterBottom variant="h5" component="div">
                        {phone.title}
                      </Typography>
                    </Link>
                    <Typography variant="body2" color="text.secondary" noWrap>
                      {phone.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>

                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </div>
  );
};

export default ListPhones;
