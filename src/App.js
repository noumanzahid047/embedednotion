// import Login from "./components/Login";
import { Grid, useMediaQuery} from "@mui/material";
import Gopro from "./components/Gopro";
import Header from "./components/Header";
import Leftbar from "./components/Leftbar";
import Preview from "./components/Preview";
import Preview2 from "./components/Preview2";

function App() {
  const matches = useMediaQuery('(min-width:1000px)');
  console.log(matches);
  return (
    <div className="App">
      <Header/>
      <Grid container
        sx={{
          paddingTop: 10,
          //backgroundColor: 'royalblue'
        }}
      >
        <Grid item xs={12} sm={8} md={4}>
            <Leftbar/>
            {!matches ? <Preview2/> : null}
            <Gopro/>
            {/* <Login/> */}
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
            {matches ? <Preview /> : null}
        </Grid>
      </Grid>
        
    </div>
  );
}

export default App;
