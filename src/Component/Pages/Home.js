import React,{useState} from 'react'
import { Button, Grid, Typography, colors } from "@mui/material";
import FormPage from "../FormPage/FormPage";
import ListOfUser from "../ListOfUser/ListOfUser";
import RichEditor from "../RichEditor/RichEditor";

function Home() {


  // ----fatching name of user-----
  const formData = JSON.parse(localStorage.getItem('register'));
  const userName = formData.name;




// -------------------colour -----------------
  const [colorLevel, setColorLevel] = useState(0);

  const increaseColor = () => {
    setColorLevel((prev) => prev + 1);
  };

  const decreaseColor = () => {
    if (colorLevel > 0) {
      setColorLevel((prev) => prev - 1);
    }
  };

  const resetColor = () => {
    setColorLevel(0);
  };

  const backgroundColor = `linear-gradient(to bottom, #007bff, #ff6b81 ${colorLevel}%)`;

  return (
    <div>
       <div
          className="App"
          style={{
            width: "100vw",
            height: "100%",
            background: backgroundColor,
            transition: "background 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >

          <Typography variant="h3" style={{ color: '#f5f5f5', fontWeight: 'bold' , marginTop: '-3%', padding:"6%"}}>Welcome  {userName } !</Typography>
         
          <Grid  container direction="row" alignItems="center" style={{ border: '2px solid white' , alignItems:"center"}}>
                <Grid id="colourdiv" item xs={6}>
                  <Typography variant="body1" gutterBottom style={{ paddingLeft:"39%"}}>
                    Color Level: {colorLevel}
                  </Typography>

                  <div style={{ paddingLeft:"30%" , alignItems:"center"}}>
                    <Button variant="contained" onClick={increaseColor}>
                      Increase 
                    </Button>
                    <Button variant="contained" onClick={decreaseColor}>
                      Decrease 
                    </Button>
                    <Button variant="contained" onClick={resetColor}>
                      Reset
                    </Button>
                  </div>
                </Grid>

                <Grid item xs={6} style={{ border: '2px solid white' }}>
                  <RichEditor />
                </Grid>
          </Grid>
          
        <hr style={{colors:"white"}}></hr>
          <Grid container direction="row" alignItems="center" style={{ border: '2px solid white' }}>
              <Grid item xs={6}>
                <ListOfUser />
              </Grid>

              <Grid item xs={6}>
                <FormPage style={{ border: '2px solid white' }}/>
              </Grid>
          </Grid>
        </div>

    </div>
  )
}

export default Home
