"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

const CURSOR_COLORS: { [key: string]: string } = {
  h1: "green-400",
  button: "orange-500",
  default: "sky-500",
};

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const [cursorColor, setCursorColor] = useState("sky-500");
  const [clicked, setClicked] = useState(false);

  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const rotation = useRef(0);
  const rotationSpeed = useRef(0.5);

  useEffect(() => {
    let animationFrameId: number;

    const updateCursor = () => {
      // Smooth interpolation for cursor position
      currentPos.current.x +=
        (targetPos.current.x - currentPos.current.x) * 0.1;
      currentPos.current.y +=
        (targetPos.current.y - currentPos.current.y) * 0.1;

      // Update rotation
      rotation.current = (rotation.current + rotationSpeed.current) % 360;

      // Update cursor and icon positions
      if (cursorRef.current && iconRef.current) {
        cursorRef.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px)`;
        iconRef.current.style.transform = `translate(${currentPos.current.x}px, ${currentPos.current.y}px) rotate(${rotation.current}deg)`;
      }

      animationFrameId = requestAnimationFrame(updateCursor);
    };

    updateCursor();

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };

      // Adjust rotation speed based on mouse movement speed
      const dx = e.movementX;
      const dy = e.movementY;
      const movementSpeed = Math.sqrt(dx * dx + dy * dy);
      rotationSpeed.current = 0.5 + Math.min(movementSpeed * 0.05, 2);

      // Gradually return to base rotation speed
      setTimeout(() => {
        rotationSpeed.current = 0.5;
      }, 500);
    };

    const handleMouseDown = () => {
      setClicked(true);
      setTimeout(() => setClicked(false), 800);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const tagName = target.tagName.toLowerCase();
      setCursorColor(CURSOR_COLORS[tagName] || CURSOR_COLORS["default"]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className={`fixed pointer-events-none z-50 rounded-full w-3 h-3 bg-${cursorColor}`}
        style={{
          left: 0,
          top: 0,
          transform: `translate(-50%, -50%)`,
        }}
      ></div>

      <div
        ref={iconRef}
        className={`fixed pointer-events-none z-[100] rounded-full w-8 h-8`}
        style={{
          left: 0,
          top: 0,
          transform: `translate(-50%, -50%)`,
        }}
      >
        <Image
          alt="cur"
          src="/astronaut.png"
          height={100}
          width={100}
          objectFit="cover"
        />
      </div>
    </>
  );
};

export default CustomCursor;
