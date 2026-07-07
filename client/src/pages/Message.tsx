import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MyContainer from "src/components/MainContainer";
import { AlertTypes } from "src/config/types";

type MessageProps = {
  setAlert: React.Dispatch<React.SetStateAction<AlertTypes>>;
  myClass: "box" | "next";
};

const Message = ({ myClass, setAlert }: MessageProps) => {
  useEffect(() => {
    const handleFormlySubmit = (event: MessageEvent) => {
      if (event.data?.type === "formly:submitted") {
        setAlert({
          open: true,
          type: "success",
          message: "Your Message has been Sent.",
        });
      }
    };

    window.addEventListener("message", handleFormlySubmit);
    return () => window.removeEventListener("message", handleFormlySubmit);
  }, [setAlert]);

  return (
    <Box
      className={myClass + " sayhi"}
      height="100vh"
      position="relative"
      display="flex"
      alignItems="center"
      sx={{ scrollSnapAlign: { xs: "none", md: "start" } }}
    >
      <Typography className="title" variant="h2" sx={{ flex: 1 }}>
        Say Hi
      </Typography>
      <MyContainer
        maxWidth="md"
        disableGutters
        id="SayHi"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "stretch",
          width: "100%",
          height: { xs: "85vh", sm: "600px" },
          maxHeight: { sm: "75vh" },
          padding: 0,
          overflow: "hidden",
          background: "transparent",
        }}
      >
        <Box
          component="iframe"
          src="https://formly.akmr.me/embed/ar4pyopc"
          title="Formly form"
          loading="lazy"
          sx={{
            flex: 1,
            width: "100%",
            height: "100%",
            minHeight: 0,
            border: 0,
            display: "block",
          }}
        />
      </MyContainer>
    </Box>
  );
};

export default Message;
