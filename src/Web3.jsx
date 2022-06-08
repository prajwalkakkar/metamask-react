import * as React from "react";
import { useState, useEffect } from "react";
import CButton from "./Button.jsx";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

function Web3() {
 const [walletConnect, setWalletConnect] = useState();
 const [open, setOpen] = useState(false);
 const [account, setAccount] = useState();
 const [loading, setLoading] = useState(false);
 const [userBalance, setUserBalance] = useState();

 const handleClose = (event, reason) => {
  if (reason === "clickaway") {
   return;
  }
  setOpen(false);
 };

 const action = (
  <React.Fragment>
   <IconButton
    size="small"
    aria-label="close"
    color="inherit"
    onClick={handleClose}>
    <CloseIcon fontSize="small" />
   </IconButton>
  </React.Fragment>
 );

 const clearAccount = () => {
  setAccount();
  console.log("clearAccount");
 };

 const connectWallet = async () => {
  if (!window.ethereum) return setOpen(true);

  try {
   setLoading(true);
   const accounts = await window.ethereum.request({
    method: "eth_requestAccounts",
   });

   setAccount(() => accounts[0]);
   setLoading(false);
  } catch (err) {
   console.log("error at wallet connection", err);
  }
 };

 return (
  <div>
   <CButton
    func={connectWallet}
    account={account}
    loading={loading}
    disconnect={clearAccount}
   />
   <div>
    <Snackbar
     open={open}
     autoHideDuration={6000}
     onClose={handleClose}
     action={action}>
     <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
      No Wallet Found
     </Alert>
    </Snackbar>
   </div>
  </div>
 );
}

export default Web3;
