import React from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import useBuilderStore from "../../store/builderStore";
import { EndType } from "./End.types";
import translateLabel from "../../utils/translateLabel";
import vietnamese from "../../tranlations/vietnamese";
import Grid from "@mui/material/Unstable_Grid2";

interface EndProps {
  translation: any;
}

const End = ({ translation = vietnamese }: EndProps) => {
  const { startDate, endDetails, setEndDetails } = useBuilderStore();
  return (
    <Grid container>
      <Grid sm={6} md={4} sx={{ paddingRight: 2 }}>
        <FormControl fullWidth>
          <InputLabel id="end-label">{translateLabel(translation, "end.label")}</InputLabel>
          <Select
            value={endDetails?.endingType}
            onChange={(e) => setEndDetails({ ...endDetails, endingType: e.target.value as EndType })}
            labelId="end-label"
            label="End"
          >
            {Object.entries(EndType).map(([key, value]) => (
              <MenuItem key={key} value={value}>
                <Typography>{translateLabel(translation, "end." + value)}</Typography>
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid sm={6} md={4}>
        {endDetails?.endingType === EndType.ON && (
          <DatePicker
            sx={{ width: "100%" }}
            label={translateLabel(translation, "end.label")}
            value={endDetails?.endDate}
            // earliest possible end date is the start date
            minDate={startDate ?? undefined}
            disabled={!startDate}
            onChange={(newDate) => setEndDetails({ ...endDetails, endDate: newDate })}
          />
        )}
        {endDetails?.endingType === EndType.AFTER && (
          <FormControl fullWidth>
            <TextField
              label={translateLabel(translation, "end.occurrences")}
              type="number"
              value={endDetails.occurrences ?? ""}
              onChange={(e) => setEndDetails({ ...endDetails, occurrences: parseInt(e.target.value, 10) })}
            />
          </FormControl>
        )}
      </Grid>
    </Grid>
  );
};

export default End;
