import { Box, Typography } from "@mui/material";
import React from "react";
import bgImage from "../Assets/Images/bg5.jpg";

export default function Hero() {
  return (
    <Box
      sx={{
        width: "100%",
        height: "90vh",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          textAlign: "center",
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          sx={{
            fontWeight: "900",
            fontSize: { xs: "50px", sm: "80px" },
            textTransform: "uppercase",
            color: "black",
            fontFamily: "'Cormorant Garamond', serif",
          }}
          gutterBottom
        >
          Welcome to EliteMart
        </Typography>
        <Typography
          gutterBottom
          sx={{ fontWeight: "900", fontSize: "24px", color: "black" }}
        >
          Your One-Stop Online Shopping Destination
        </Typography>
        <Typography
          gutterBottom
          sx={{ width: "80%", fontWeight: "600", color: "black" }}
        >
          Discover the latest trends, unbeatable deals, and a wide variety of products 
          at EliteMart. Shop electronics, fashion, home essentials, and much more—all at 
          the best prices with fast delivery.
        </Typography>
      </Box>
    </Box>
  );
}
