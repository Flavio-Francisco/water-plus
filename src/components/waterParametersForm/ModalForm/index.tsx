import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";

interface Iprops {
  showModalParm: boolean;
  handleCloseModalParm: () => void;
  title: string;
  children: React.ReactNode;
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
  handleCloseModalParm,
  title,
  showModalParm,
  children,
}: Iprops) {
  return (
    <React.Fragment>
      <Dialog
        maxWidth={"xl"}
        fullScreen
        open={showModalParm}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleCloseModalParm}
        aria-describedby="alert-dialog-slide-description"
        className="w-10/12 mx-auto max-sm:w-full"
      >
        <DialogTitle className=" mt-3 text-center text-lg font-bold ">
          {title}
        </DialogTitle>
        <DialogContent className="p-4">{children}</DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModalParm}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

