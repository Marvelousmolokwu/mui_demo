import "./App.css";
import { MuiLoading } from "./components/muiLoading";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { LocalizationProvider } from "@mui/lab";
import { MuiDate } from "./components/muiDate";

function App() {
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <MuiDate />
      </LocalizationProvider>
    </>
  );
}

export default App;
