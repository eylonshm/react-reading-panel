import styled from "styled-components";
import { PanelDirection } from "./settings/settings.types";
import { PanelDirections } from "../../constants";

export const PanelButton = styled.button`
  height: 35px;
  width: 35px;
  border-radius: 50%;
  border: initial;
  background: #e2e1e1;
  color: black;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div<{ direction?: PanelDirection }>`
  display: flex;
  flex-direction: ${(props) =>
    props.direction === PanelDirections.VERTICAL ? "column" : "row"};
  align-items: center;
  background: white;
  padding: 5px 2px;
  border-radius: 10px;
  gap: 10px;
`;
