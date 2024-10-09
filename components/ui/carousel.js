// components/ui/carousel/index.js
'use client';
import React, { useState } from "react";

export const Carousel = ({ children }) => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent((prev) => (prev + 1) % React.Children.count(children));
  };

  const previous = () => {
    setCurrent((prev) => (prev - 1 + React.Children.count(children)) % React.Children.count(children));
  };

  return (
    <div>
      {React.Children.map(children, (child, index) => (
        <div style={{ display: index === current ? "block" : "none" }}>{child}</div>
      ))}
    </div>
  );
};

export const CarouselContent = ({ children }) => <div>{children}</div>;
export const CarouselItem = ({ children }) => <div>{children}</div>;
export const CarouselNext = ({ onClick }) => <button onClick={onClick}>Next</button>;
export const CarouselPrevious = ({ onClick }) => <button onClick={onClick}>Previous</button>;
