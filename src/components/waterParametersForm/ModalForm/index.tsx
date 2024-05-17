import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

interface Iprops {
  handleCloseModalParm: () => void;
  showModalParm: boolean;
  children: React.ReactNode;
  title: string;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ModalForm({
  children,
  handleCloseModalParm,
  showModalParm,
  title,
}: Iprops) {
  return (
    <React.Fragment>
      <Dialog
        maxWidth={"lg"}
        open={showModalParm}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseModalParm}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{title}</DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModalParm}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
