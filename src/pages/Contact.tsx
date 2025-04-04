import { Call, Email } from "@mui/icons-material";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useRef } from "react";

const Contact = () => {
  const firstNameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLInputElement>(null);
  const onSubmit = () => {};
  return (
    <Box display={"flex"} flexDirection={"column"}>
      <Box height={"80vh"} width={"100%"} pt={3} justifyItems={"center"}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          fontFamily="sans-serif"
          fontWeight={900}
          sx={{
            fontSize: 40,
            boxShadow: 10,
            bgcolor: "text.min",
            borderRadius: 5,
            p: 2,
          }}
        >
          Contact me
        </Typography>
        <Typography
          fontFamily="sans-serif"
          fontWeight={900}
          sx={{
            fontSize: 15,
            color: "text.secondary",
          }}
        >
          Send me an E-mail
        </Typography>
        <Stack width={"min(50em,70%)"} spacing={2} m={2}>
          <TextField
            inputRef={firstNameRef}
            label="First Name"
            name="fistName"
          />
          <TextField inputRef={emailRef} label="E-mail" name="email" />
          <TextField
            inputRef={messageRef}
            label="Write your message here"
            name="message"
            multiline
            rows={10}
          />
          <Button onClick={onSubmit} variant="contained">
            Send
          </Button>
        </Stack>
      </Box>
      <Box bgcolor={"secondary.main"} height={"30vh"} width={"100%"}>
        <Box
          display={"flex"}
          justifySelf={"center"}
          bgcolor={"white"}
          mt={-4}
          pt={3}
          width={"min(50em,90%)"}
          height={"150px"}
          flexDirection={"column"}
          borderRadius={5}
          boxShadow={5}
        >
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            flexDirection={"row"}
            height={"50px"}
          >
            <Call />
            <Email />
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-around"}
            flexDirection={"row"}
            pl={3}
          >
            <Typography fontSize={16}> +201000901561</Typography>
            <Typography fontSize={16}>adelsaadhoseen@gmail.com</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Contact;
