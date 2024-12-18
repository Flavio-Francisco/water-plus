import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { Breakpoint, SxProps, Theme } from "@mui/material";

interface Iprops {
  open: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
  maxWidth?: false | Breakpoint | undefined;
  fullWidth?: boolean | undefined;
  keepMounted?: boolean | undefined;
  sx?: SxProps<Theme> | undefined;
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

const ModalTsx: React.FC<Iprops> = ({
  onClose,
  open,
  children,
  maxWidth,
  fullWidth,
  className,
  keepMounted,
  sx,
}) => {
  return (
    <React.Fragment>
      <Dialog
        className={className}
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        TransitionComponent={Transition}
        keepMounted={keepMounted}
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
        sx={sx}
      >
        <DialogContent>{children}</DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default ModalTsx;
