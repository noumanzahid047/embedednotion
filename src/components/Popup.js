import { Dialog, DialogContent } from "@mui/material";
import Login from "./Login";

export default function Popup({openPop, setOpenPop}){

    return(
        <Dialog open={openPop}
        >
            <DialogContent
                sx={{
                    backgroundColor: 'white',
                }}
            >
              <Login setOpenPop={setOpenPop}/>
            </DialogContent>
        </Dialog>
    )
}