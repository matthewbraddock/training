import { Box, Button, Grid, TextField } from "@material-ui/core";
import React, { useState } from "react";
import "../emojis/emojis.css";
import blobSweat from "../emojis/blob-sweat.gif";
import excuseMe from "../emojis/excuse-me.gif";
import catJam from "../emojis/catjam.gif";
import smart from "../emojis/smart.gif";
import lil_wayne from "../emojis/lil_wayne.jpg";
import wack from "../emojis/wack.jpg";
import noBrain from "../emojis/no-brainer.png";
import megaBrain from "../emojis/megabrain.gif";
import QuestionComponent from "../questions/question";
import ConfettiExplosion from "react-confetti-explosion";
import { useNavigate } from "react-router-dom";

export interface MainPageProps {
  setIsLivingTheDream: (value: boolean) => void;
  setIsFormSubmitted: (value: boolean) => void;
}

export const MainPage: React.FC<MainPageProps> = ({
  setIsLivingTheDream,
  setIsFormSubmitted,
}) => {
  const [formState, setFormState] = useState({
    name: "",
    enjoySaying: "",
    workedInPortal: "",
    goonGoblin: "",
    learnedSomethingNew: "",
  });

  const navigate = useNavigate();

  const [isExploding, setIsExploding] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  // const handleSubmit = (event: React.FormEvent) => {
  //   event.preventDefault();

  //   setIsExploding(true);
  //   setIsLivingTheDream(true);
  //   setIsFormSubmitted(true);

  //   // Wait for the duration of the confetti explosion before navigating
  //   setTimeout(() => {
  //     navigate("/dreamPage");
  //   }, 2000);
  // };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    setIsExploding(false);
    setIsLivingTheDream(false);
    setIsFormSubmitted(true);
    navigate("/nightmarePage");
  };

  return (
    <>
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
              <TextField label="Name" name="name" onChange={handleChange} />
            </Grid>

            <Grid item spacing={4}>
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
              <QuestionComponent
                question="Did you learn something new today?"
                rowName="learnedSomethingNew"
                yesImage={megaBrain}
                noImage={noBrain}
                handleChange={handleChange}
                formState={formState}
              />
            </Grid>

            <Grid item>
              <Button type="submit" variant="contained">
                Submit
              </Button>
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
