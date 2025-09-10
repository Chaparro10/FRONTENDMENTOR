import Grid from "@mui/material/Grid";
import cardInfo from ".././assets/card-info.png";


export const CardBackend = ({cvv}=props) => {
  return (
    <Grid
      container
      sx={{
        backgroundColor: "#cdced4",
        height: "230px",
        width: "350px",
        borderRadius: "10px",
        position:'relative'
      }}
    >
      <Grid
        sx={{
          backgroundColor: "black",
          height: "30px",
          width: "100%",
          marginTop: "15px",
        }}
      ></Grid>
      <Grid
        container
        sx={{
          backgroundColor: "#a5acb6",
          height: "30px",
          width: "80%",
          justifyContent: "flex-end",
          margin: "0 auto",
          alignItems: "center",
          borderRadius: "5px",
        }}
      >
        <Grid sx={{ padding: "0px 10px" }}>{cvv}</Grid>
      </Grid>
      <Grid container size={12} sx={{justifyContent:'center'}} >
        <img src={cardInfo} style={{width:'200px',height:'40px'}} />
      </Grid>
    </Grid>
  );
};
