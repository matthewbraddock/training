import React from "react";
import {
  Box,
  Grid,
  RadioGroup,
  FormControlLabel,
  Radio,
  Typography,
  Stack,
} from "@mui/material";

interface QuestionProps {
  question: string;
  rowName: string;
  yesImage: string;
  noImage: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  formState: any;
}

const QuestionComponent: React.FC<QuestionProps> = ({
  question,
  rowName,
  yesImage,
  noImage,
  handleChange,
  formState,
}) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Stack>
        <Typography variant="h6">{question}</Typography>
        <Box width="100%">
          <Grid
            container
            alignItems="center"
            direction="column"
            justifyContent="center"
          >
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                <RadioGroup row name={rowName} onChange={handleChange}>
                  <FormControlLabel
                    value="yes"
                    control={<Radio />}
                    label="Yes"
                  />{" "}
                  <FormControlLabel value="no" control={<Radio />} label="No" />
                </RadioGroup>
                <Grid item style={{ width: "50px" }}>
                  {formState[rowName] === "yes" && (
                    <img src={yesImage} alt="Yes GIF" className="gif" />
                  )}
                  {formState[rowName] === "no" && (
                    <img src={noImage} alt="No GIF" className="gif" />
                  )}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Stack>
    </Box>
  );
};

export default QuestionComponent;
