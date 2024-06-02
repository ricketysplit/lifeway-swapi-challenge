"use client";

import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import { useState } from "react";

type ButWaitTheresMoreProps = {
  text: string;
  children: React.ReactNode;
};

const ButWaitTheresMore = ({ text, children }: ButWaitTheresMoreProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <div
        data-testid="but-wait-theres-more"
        className="shadow-sm mb-4 p-3 rounded border-2 border-slate-300"
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <div className="text-xl text-center">{text}</div>
      </div>
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: "none",
        }}
        open={open}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "center",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        disableRestoreFocus
      >
        <div className="p-3">{children}</div>
      </Popover>
    </div>
  );
};

export default ButWaitTheresMore;
