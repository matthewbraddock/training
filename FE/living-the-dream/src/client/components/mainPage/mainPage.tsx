import { Box, Button, Grid, TextField, Snackbar } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useState } from "react";
import "../emojis/emojis.css";
import blobSweat from "../emojis/blob-sweat.gif";
import excuseMe from "../emojis/excuse-me.gif";
import catJam from "../emojis/catjam.gif";
import smart from "../emojis/smart.gif";
import lil_wayne from "../emojis/lil_wayne.jpg";
import wack from "../emojis/wack.jpg";
import QuestionComponent from "../questions/question";
import ConfettiExplosion from "react-confetti-explosion";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import { useAuth0 } from "@auth0/auth0-react";
import OneToTenQuestionComponent from "../questions/oneToTenQuestion";

export interface MainPageProps { }

export const MainPage: React.FC<MainPageProps> = () => {
  const { user } = useAuth0();

  const [isSnackbarOpen, setIsSnackbarOpen] = useState(false);

  // Extract the user's first name from the user_metadata object for Database Login users
  const namespace = "https://myapp.example.com/claims/";
  const firstName = user?.[namespace + "user_metadata"]?.first_name || "";

  const initialFormState = {
    enjoySaying: "",
    workedInPortal: "",
    goonGoblin: "",
    number: 0,
  };

  const [formState, setFormState] = useState(initialFormState);


  const navigate = useNavigate();

  const [isExploding, setIsExploding] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleNumberChange = (value: number) => {
    setFormState({
      ...formState,
      'number': value,
    });
  };


  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const allQuestionsAnswered = Object.entries(formState).every(([key, value]) => {
      return value !== initialFormState[key as keyof typeof initialFormState];
    });

    if (!allQuestionsAnswered) {
      setIsSnackbarOpen(true);
      return;
    }

    // Check formState to decide which page to navigate to
    if (formState.enjoySaying === 'no' ?? formState.workedInPortal === 'yes' ?? formState.goonGoblin === 'no' ?? formState.enjoySaying === 'no' ?? formState.number !== 3) {
      navigate("/nightmare");
    } else {
      setIsExploding(true);
      // Wait for the duration of the confetti explosion before navigating
      setTimeout(() => {
        navigate("/dream");
      }, 1000);
    }
  };

  const handleSnackbarClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    setIsSnackbarOpen(false);
  };

  return (
    <>
      <Header />
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            border: 1,
            borderColor: "divider",
            p: 2,
            borderRadius: 1,
            bgcolor: "background.paper",
          }}
        >
          <Grid container direction="column" alignItems="center" spacing={2}>
            <Grid item>
              <TextField
                label="Name"
                name="name"
                defaultValue={user?.given_name ?? firstName}
                onChange={handleChange}
              />
            </Grid>

            <Grid item>
              <QuestionComponent
                question="Do you enjoy saying 'Let's gooooo!'?"
                rowName="enjoySaying"
                yesImage={catJam}
                noImage={excuseMe}
                handleChange={handleChange}
                formState={formState}
              />
              <QuestionComponent
                question="Have you worked in the Portal Database today?"
                rowName="workedInPortal"
                yesImage={blobSweat}
                noImage={smart}
                handleChange={handleChange}
                formState={formState}
              />
              <QuestionComponent
                question="Do you know what a goon is to a goblin?"
                rowName="goonGoblin"
                yesImage={lil_wayne}
                noImage={wack}
                handleChange={handleChange}
                formState={formState}
              />
              <OneToTenQuestionComponent
                question="How many seconds do you get before standup ends to add a final parking lot item?"
                rowName="parkingLotTime"
                handleNumberChange={handleNumberChange}
                formState={formState}
              />
            </Grid>

            <Grid item>
              <Button type="submit" variant="contained">
                Submit
              </Button>
              <Snackbar
                open={isSnackbarOpen}
                autoHideDuration={6000}
                onClose={handleSnackbarClose}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
              >
                <Alert onClose={handleSnackbarClose} severity="error">
                  Please answer all questions before submitting.
                </Alert>
              </Snackbar>
            </Grid>
          </Grid>
        </Box>
      </Box>
      {isExploding && (
        <>
          <ConfettiExplosion
            particleCount={100}
            particleSize={12}
            duration={3200}
            force={0.7}
            height="250vh"
            width={3000}
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              transform: "rotate(-60deg)",
            }}
          />
          <ConfettiExplosion
            particleCount={100}
            particleSize={12}
            duration={3200}
            force={0.7}
            height="250vh"
            width={3000}
            style={{
              position: "absolute",
              bottom: 0,
              right: 0,
              transform: "rotate(60deg)",
            }}
          />
        </>
      )}
    </>
  );
};

export default MainPage;
