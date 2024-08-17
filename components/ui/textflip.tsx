"use client";
import React, { useEffect, useState } from "react";

interface WordFlipProps {
  words: string[];
  typingSpeed?: number;
  pauseTime?: number;
  className?: string;
  cursorClassName?: string;
  cursorSymbol?: string;
  loop?: boolean;
  startDelay?: number;
}

const WordFlip: React.FC<WordFlipProps> = ({
  words,
  typingSpeed = 150,
  pauseTime = 1000,
  className = "text-2xl font-bold",
  cursorClassName = "blinking-cursor",
  cursorSymbol = "|",
  loop = true,
  startDelay = 500,
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (isFinished) return;

    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      const updateText = isDeleting
        ? currentWord.substring(0, displayedText.length - 1)
        : currentWord.substring(0, displayedText.length + 1);

      setDisplayedText(updateText);

      if (!isDeleting && updateText === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && updateText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prevIndex) => {
          if (prevIndex + 1 < words.length) {
            return prevIndex + 1;
          } else if (loop) {
            return 0;
          } else {
            setIsFinished(true);
            return prevIndex;
          }
        });
      }
    };

    const typingTimeout = setTimeout(
      handleTyping,
      isDeleting ? typingSpeed / 2 : typingSpeed
    );

    return () => clearTimeout(typingTimeout);
  }, [
    displayedText,
    isDeleting,
    words,
    currentWordIndex,
    typingSpeed,
    pauseTime,
    loop,
    isFinished,
  ]);

  useEffect(() => {
    const startTimeout = setTimeout(() => setDisplayedText(""), startDelay);

    return () => clearTimeout(startTimeout);
  }, [startDelay]);

  return (
    <div
      className={`flex flex-row justify-center items-center h-16 ${className}`}
    >
      <span>{displayedText}</span>
      {!isFinished && <span className={cursorClassName}>{cursorSymbol}</span>}
    </div>
  );
};

export default WordFlip;
