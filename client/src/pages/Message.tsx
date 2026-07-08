import React, { useEffect } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MyContainer from "src/components/MainContainer";
import { AlertTypes } from "src/config/types";

const FORMLY_ORIGIN = "https://formly.akmr.me";
const FORM_ID = "ar4pyopc";

type MessageProps = {
  setAlert: React.Dispatch<React.SetStateAction<AlertTypes>>;
  myClass: "box" | "next";
};

const Message = ({ myClass, setAlert }: MessageProps) => {
  // Formly posts { type: "formly:submitted" } to the parent on a successful
  // submit; surface it as a success toast. (Formly handles its own sizing:
  // the embedded form fills whatever height we give the iframe.)
  useEffect(() => {
    const handleFormlyMessage = (event: MessageEvent) => {
      if (event.origin !== FORMLY_ORIGIN) return;
      if (event.data?.type === "formly:submitted") {
        setAlert({
          open: true,
          type: "success",
          message: "Your Message has been Sent.",
        });
      }
    };

    window.addEventListener("message", handleFormlyMessage);
    return () => window.removeEventListener("message", handleFormlyMessage);
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
          width: "100%",
          // Fixed 600px matches Formly's min-h-[600px], so the iframe is never
          // taller than the form and there's no white gap. maxHeight guards
          // very short viewports (form scrolls internally instead of gapping).
          height: "600px",
          maxHeight: "90vh",
          padding: 0,
          overflow: "hidden",
          background: "transparent",
        }}
      >
        <Box
          component="iframe"
          src={`${FORMLY_ORIGIN}/embed/${FORM_ID}`}
          title="Formly form"
          loading="lazy"
          sx={{
            width: "100%",
            height: "100%",
            border: 0,
            display: "block",
          }}
        />
      </MyContainer>
    </Box>
  );
};

export default Message;
