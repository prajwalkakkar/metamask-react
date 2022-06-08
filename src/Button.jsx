import Button from "@mui/material/Button";
import LoadingButton from "@mui/lab/LoadingButton";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";

function CButton({ func, account, loading, disconnect }) {
 return (
  <div>
   <LoadingButton
    size="large"
    variant="contained"
    endIcon={<AccountBalanceWalletIcon />}
    loading={loading}
    onClick={func}>
    {account
     ? `${account.slice(0, 4)}...${account.slice(-4)}`
     : "Connect To Wallet"}
   </LoadingButton>

   {account ? (
    <Button id="dis" onClick={disconnect} size="small">
     Disconnect
    </Button>
   ) : null}
  </div>
 );
}

export default CButton;
