import React from "react";
import {
  Box,
  Grid,
  Typography,
  Stack,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";

interface OneToTenQuestionProps {
  question: string;
  rowName: string;
  handleNumberChange: (value: number) => void;
  formState: any;
}

const OneToTenQuestionComponent: React.FC<OneToTenQuestionProps> = ({
  question,
  handleNumberChange,
  formState,
}) => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Stack>
        <Typography variant="h6" align="center">{question}</Typography>
        <Box width="100%">
          <Grid
            container
            alignItems="center"
            direction="column"
            justifyContent="center"
          >
            <Grid item xs>
              <Box display="flex" justifyContent="center">
                <RadioGroup
                  row
                  value={formState.number}
                  onChange={(event, newNumber) => handleNumberChange(Number(newNumber))}
                >
                  {[...Array(10)].map((_, i) => (
                    <FormControlLabel
                      key={i}
                      value={i + 1}
                      control={<Radio color="primary" />}
                      label={i + 1}
                    />
                  ))}
                </RadioGroup>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Stack >
    </Box >
  );
};

export default OneToTenQuestionComponent;
