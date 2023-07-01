import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { useRef, useState } from "react";
import { debounce } from "lodash";
import Wheel from "./index";

// const colors = ["red", "green", "blue", "black", "skyblue", "gray", "purple"];

const spin = keyframes`
  0% {
    transform:  rotate(0deg);
  }
  100% {
    transform:  rotate(360deg);
  }
`;

const SpinnedCircle = styled.div`
  width: 100%;
  height: 100%;
  cursor: pointer;
  touch-action: none;
`;

export default function SpinWheel({ colors, handleColorChange }) {
  const degreesPerColor = 360 / colors.length;

  const draggableRef = useRef(null);
  const rotateRef = useRef(null);
  const [dragActive, setDragActive] = useState(false);
  const [rotateActive, setRotateActive] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [angle, setAngle] = useState(0);
  const [rotation, setRotation] = useState(0);
  const R2D = 180 / Math.PI;

  const debouncedHandleColorChange = debounce((color) => {
    handleColorChange(color);
    console.log("Top color is", color);
  }, 500);

  const handleDragStart = (e) => {
    // e.preventDefault();
    let clientX, clientY;

    if (e.type === "touchstart") {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const { left, top } = draggableRef.current.getBoundingClientRect();
    const offsetX = clientX - left;
    const offsetY = clientY - top;
    setDragOffset({ x: offsetX, y: offsetY });
    setDragActive(true);
  };

  const handleDragMove = (e) => {
    // e.preventDefault();
    let clientX, clientY;

    if (e.type === "touchmove") {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    if (dragActive) {
      const { clientX, clientY } = e;
      const { left: draggableLeft, top: draggableTop } =
        draggableRef.current.getBoundingClientRect();
      const { width: draggableWidth, height: draggableHeight } =
        draggableRef.current.getBoundingClientRect();
      const {
        left: containerLeft,
        top: containerTop,
        width: containerWidth,
        height: containerHeight,
      } = rotateRef.current.getBoundingClientRect();
      let x, y;

      if (
        clientX - dragOffset.x > containerLeft &&
        clientX + draggableWidth - dragOffset.x < containerWidth + dragOffset.x
      ) {
        x = clientX - dragOffset.x - containerLeft;
      }
      if (
        clientY - dragOffset.y > containerTop &&
        clientY + draggableHeight - dragOffset.y <
          containerHeight + dragOffset.y
      ) {
        y = clientY - dragOffset.y - containerTop;
      }

      draggableRef.current.style.left = x + "px";
      draggableRef.current.style.top = y + "px";
    }
  };

  const handleDragStop = () => {
    setDragActive(false);
  };

  const handleLeave = () => {
    if (dragActive) {
      setDragActive(false);
    }
    if (rotateActive) {
      setRotateActive(false);
    }
  };

  const handleRotateStart = (e) => {
    // e.preventDefault();
    let clientX, clientY;

    if (e.type === "touchstart") {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    const { top, left, height, width } =
      rotateRef.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    const startAngle = R2D * Math.atan2(y, x);
    setAngle(startAngle);
    setRotateActive(true);
  };

  const handleRotateMove = (e) => {
    // e.preventDefault();
    let clientX, clientY;

    if (e.type === "touchmove") {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }

    if (rotateActive) {
      const { top, left, height, width } =
        rotateRef.current.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      const currentAngle = R2D * Math.atan2(y, x);
      const rotationAmount = currentAngle - angle;
      setRotation((prevRotation) => prevRotation + rotationAmount);
      setAngle(currentAngle);

      // let adjustedRotation = rotation % 360;
      // adjustedRotation = 360 - adjustedRotation;
      // const colorIndex =
      //   Math.floor(adjustedRotation / degreesPerColor) % colors.length;
      // const topColor = colors[colorIndex];
      // console.log("Top color is", topColor);

      let adjustedRotation = rotation % 360;
      adjustedRotation = 360 - adjustedRotation + 20;
      if (adjustedRotation < 0) adjustedRotation += 360;
      const colorIndex =
        Math.floor(adjustedRotation / degreesPerColor) % colors.length;
      const topColor = colors[colorIndex];

      debouncedHandleColorChange(topColor);
      // console.log("Top color is", topColor);
    }
  };

  const handleRotateStop = () => {
    setAngle((prevAngle) => prevAngle + rotation);
    // setRotation(0);
    setRotateActive(false);
  };

  return (
    <SpinnedCircle
      ref={rotateRef}
      onMouseDown={handleRotateStart}
      onMouseMove={handleRotateMove}
      onMouseUp={handleRotateStop}
      onMouseLeave={handleLeave}
      onTouchStart={handleRotateStart}
      onTouchMove={handleRotateMove}
      onTouchEnd={handleRotateStop}
    >
      <div
        id="draggable"
        ref={draggableRef}
        style={{
          width: "100%",
          height: "100%",
          transform: `rotate(${rotation}deg)`,
        }}
        onMouseDown={handleDragStart}
        onMouseMove={handleDragMove}
        onMouseUp={handleDragStop}
        onTouchStart={handleDragStart}
        onTouchMove={handleDragMove}
        onTouchEnd={handleDragStop}
      >
        <Wheel lineWeight={4} colors={colors} />
      </div>
    </SpinnedCircle>
  );
}
