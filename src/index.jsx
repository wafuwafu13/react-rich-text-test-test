import React, { useEffect } from "react";
import p5 from "p5";

const GenLettersByDragCanvas = (props) => {
  window.generateLettersByDragCanvasLetters = props.letters;
  window.generateLettersByDragCanvasHeight = props.height;
  window.generateLettersByDragCanvasWidth = props.width;
  window.generateLettersByDragCanvasFont = props.font;
  window.generateLettersByDragCanvasFontSizeMin = props.fontSizeMin;
  window.generateLettersByDragCanvasBackgroundColor = props.backgroundColor;

  const text = (p) => {
    let x = 0;
    let y = 0;
    let stepSize = 100;

    let font = window.generateLettersByDragCanvasFont || "Georgia";
    let letters = window.generateLettersByDragCanvasLetters;
    let fontSizeMin = window.generateLettersByDragCanvasFontSizeMin || 10;

    let counter = 0;

    p.setup = () => {
      p.createCanvas(
        window.generateLettersByDragCanvasHeight || 500,
        window.generateLettersByDragCanvasWidth || 500
      );
      p.background(window.generateLettersByDragCanvasBackgroundColor);
      p.cursor(p.HAND);

      x = p.mouseX;
      y = p.mouseY;

      p.textFont(font);
      p.textAlign(p.LEFT);
      p.fill(0);
    };

    p.draw = () => {
      let d = p.dist(x, y, p.mouseX, p.mouseY);
      p.textSize(fontSizeMin + d / 2);
      let newLetter = letters.charAt(counter);

      stepSize = p.textWidth(newLetter);

      if (d > stepSize) {
        var angle = p.atan2(p.mouseY - y, p.mouseX - x);

        p.translate(x, y);
        p.text(newLetter, 0, 0);

        counter++;
        if (counter >= letters.length) counter = 0;

        x = x + p.cos(angle) * stepSize;
        y = y + p.sin(angle) * stepSize;
      }
    };

    p.mousePressed = () => {
      x = p.mouseX;
      y = p.mouseY;
    };

    p.keyPressed = () => {
      if (p.key == "s") p.saveCanvas('GenLettersByDragCanvas', "png");
    };
  };

  useEffect(() => {
    new p5(text);
  }, [text]);
  return <></>;
};

export default GenLettersByDragCanvas;
