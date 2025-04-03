import {
  Box,
  Step,
  StepContent,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";

const WorkTimeline = () => {
  return (
    <Box width={"100%"} justifyItems={"center"}>
      <Stepper orientation="vertical">
        <Step active sx={{ color: "green" }}>
          <StepLabel>2013 - now</StepLabel>
          <StepContent>
            <Typography>Accountant Payroll System Office</Typography>
            <Typography>Matrouh Governorate</Typography>
          </StepContent>
        </Step>
        <Step active>
          <StepLabel>2009 - 2012</StepLabel>
          <StepContent>
            <Typography>IT specialist for system integration</Typography>
            <Typography>Matrouh Governorate</Typography>
          </StepContent>
        </Step>
        <Step active>
          <StepLabel>2008 </StepLabel>
          <StepContent>
            <Typography>Retail sales</Typography>
          </StepContent>
        </Step>
      </Stepper>
    </Box>
  );
};

export default WorkTimeline;
