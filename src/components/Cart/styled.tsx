import { styled } from "../../styles";
import * as Dialog from "@radix-ui/react-dialog";

export const CartContent = styled(Dialog.Content, {
  position: "fixed",
  top: "0",
  right: "0",
  bottom: "0",
  width: "30rem",
  background: "$gray800",
  padding: "3rem",
  paddingTop: "4.5rem",
  boxShadow: "-4px 0 30px rgba(0, 0, 0, 0.8)",
  display: "flex",
  flexDirection: "column",

  h2: {
    fontWeight: 700,
    fontSize: "$lg",
    color: "$gray100",
    marginBottom: "2rem",
  },
  "> section": {
    flex: 1,
    overflowY: "auto",
    gap: "1.5rem",
    display: "flex",
    flexDirection: "column",
  },
});

export const CartClose = styled(Dialog.Close, {
  background: "none",
  border: "none",
  color: "$gray500",
  position: "absolute",
  top: "1.75rem",
  right: "1.75rem",
});

export const CartProduct = styled("div", {
  display: "flex",
  alignItems: "center",
  width: "100%",
  height: "5.8125rem",
  gap: "1.25rem",
});

export const CartProductImage = styled("div", {
  width: "6.3125rem",
  height: "5.8125rem",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 8,

  img: {
    objectFit: "cover",
  },
});

export const CartProductDetails = styled("div", {
  display: "flex",
  flexDirection: "column",
  height: "100%",

  p: {
    color: "$gray100",
    fontSize: "$md",
  },

  strong: {
    marginTop: 4,
    fontSize: "$md",
    fontWeight: 700,
  },

  button: {
    marginTop: "auto",
    width: "max-content",
    background: "none",
    color: "$green500",
    fontSize: "1rem",
    fontWeight: 700,
    border: "none",
  },
});

export const CartFooter = styled("div", {
  marginTop: "auto",
  display: "flex",
  flexDirection: "column",

  button: {
    width: "100%",
    background: "$green500",
    color: "$white",
    fontSize: "$md",
    fontWeight: 700,
    border: "none",
    borderRadius: 8,
    height: "4.3125rem",

    "&:disabled": {
      opacity: 0.6,
      cursor: "not-allowed",
    },

    "&:not(:disabled)": {
      background: "$green300",
    },
  },
});

export const Details = styled("section", {
  display: "flex",
  flexDirection: "column",
  gap: 8,
  marginBottom: 55,

  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    p: {
      color: "$gray300",
      fontSize: "$md",
    },

    "&:last-child": {
      fontWeight: "bold",

      span: {
        fontSize: "$md",
      },

      p: {
        color: "$gray100",
        fontSize: "$xl",
      },
    },
  },
});
