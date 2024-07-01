import { styled } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";

const DatePic = styled(DatePicker)(({}) => ({
  ".MuiOutlinedInput-input": {
    padding: "8px",
    backgroundColor: "white",
  },
}));

export default DatePic;
