import React, { useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import * as _ from "lodash";

const StyledBtn = styled.button`
  position: relative;
  padding: 6px 12px;
  font-size: ${({ size }) =>
    _.get(size, "fontSize") ? size.fontSize + "px" : "14px"};
  color: ${({ color }) => (color ? color : "white")};
  background-color: ${({ bgColor }) => (bgColor ? bgColor : "white")};
  border: none;
  border-radius: 6px;
  overflow: hidden;
  cursor: pointer;
  :focus {
    outline: none;
  }
`;

const Ripple = styled.span`
  position: absolute;
  width: 0px;
  height: 0px;
  background-color: #4d5157;
  border-radius: 50%;
  transform: translate(-50%, -50%);
  pointer-events: none;
  &.animate {
    @keyframes animate {
      0% {
        width: 0px;
        height: 0px;
        opacity: 0.1;
      }
      100% {
        width: 300px;
        height: 300px;
        opacity: 0.1;
      }
    }
    animation: animate 0.5s linear 1;
  }
`;

function Btn(props) {
  const { bgColor, color, large, small, medium, text } = props;
  const refRipple = React.createRef();
  const getSize = ({ small, medium, large }) => {
    if (small) {
      return {
        fontSize: 10,
      };
    }
    if (medium) {
      return {
        fontSize: 14,
      };
    }
    if (large) {
      return {
        fontSize: 18,
      };
    }
  };
  const handleClick = (event) => {
    let x = event.clientX - event.target.offsetLeft;
    let y = event.clientY - event.target.offsetTop;
    refRipple.current.style.top = y + "px";
    refRipple.current.style.left = x + "px";
    refRipple.current.classList.toggle("animate");

    setTimeout(() => {
      refRipple.current.classList.toggle("animate");
    }, 500);
  };
  return (
    <StyledBtn
      size={getSize({ small, medium, large })}
      color={color}
      bgColor={bgColor}
      onClick={(event) => {
        handleClick(event);
      }}
    >
      {text || "BUTTON"}
      <Ripple ref={refRipple} className="btn--ripple" />
    </StyledBtn>
  );
}

Btn.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  large: PropTypes.bool,
  small: PropTypes.bool,
  medium: PropTypes.bool,
};

export default Btn;
