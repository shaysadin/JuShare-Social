import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { deleteComment } from "../utils/postActions";

function ReusableDialog({
  title,
  action,
  item,
  open,
  handleClose,
  handleAgree,
  handleDisagree,
}) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{`${title}`}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {`Are you sure you want to ${action} this ${item}?`}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleDisagree} color="primary">
          No
        </Button>
        <Button onClick={handleAgree} color="primary">
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default ReusableDialog;


