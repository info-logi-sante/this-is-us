import { memo } from "react";
import { StyledRootScrollbar, StyledScrollbar } from "./styles";

function Scrollbar({ children, sx, ...other }) {
  return (
    <StyledRootScrollbar>
      <StyledScrollbar timeout={500} clickOnTrack={false} sx={sx} {...other}>
        {children}
      </StyledScrollbar>
    </StyledRootScrollbar>
  );
}

export default memo(Scrollbar);
