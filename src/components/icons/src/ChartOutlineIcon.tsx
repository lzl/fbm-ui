import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const Icon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path fill-opacity=".86" fill-rule="evenodd" d="M19,4 C19.5522847,4 20,4.44771525 20,5 L20,19 C20,19.5522847 19.5522847,20 19,20 L5,20 C4.44771525,20 4,19.5522847 4,19 L4,5 C4,4.44771525 4.44771525,4 5,4 L19,4 Z M18,6 L6,6 L6,18 L18,18 L18,6 Z M9.29136793,10.1714286 C9.5675103,10.1714286 9.79136793,10.3952862 9.79136793,10.6714286 L9.79136793,16.9857143 C9.79136793,17.2618567 9.5675103,17.4857143 9.29136793,17.4857143 L8.16187107,17.4857143 C7.88572869,17.4857143 7.66187107,17.2618567 7.66187107,16.9857143 L7.66187107,10.6714286 C7.66187107,10.3952862 7.88572869,10.1714286 8.16187107,10.1714286 L9.29136793,10.1714286 Z M12.5503616,7.42857143 C12.826504,7.42857143 13.0503616,7.65242905 13.0503616,7.92857143 L13.0503616,16.9857143 C13.0503616,17.2618567 12.826504,17.4857143 12.5503616,17.4857143 L11.4208648,17.4857143 C11.1447224,17.4857143 10.9208648,17.2618567 10.9208648,16.9857143 L10.9208648,7.92857143 C10.9208648,7.65242905 11.1447224,7.42857143 11.4208648,7.42857143 L12.5503616,7.42857143 Z M15.8093553,12 C16.0854977,12 16.3093553,12.2238576 16.3093553,12.5 L16.3093553,16.9857143 C16.3093553,17.2618567 16.0854977,17.4857143 15.8093553,17.4857143 L14.6798585,17.4857143 C14.4037161,17.4857143 14.1798585,17.2618567 14.1798585,16.9857143 L14.1798585,12.5 C14.1798585,12.2238576 14.4037161,12 14.6798585,12 L15.8093553,12 Z" />
  </SvgIcon>
);

export default Icon;