import { transformSlots } from "astro/jsx-runtime";
import colorPalettes from "./data/colorPalettes";
import type { colorPaletteType } from "./types/types";

const printColorPalette = (colorPalettes: colorPaletteType[]) => {
  const colorWrapper = document.querySelector("#colorPaletteWrapper");

  if (!colorWrapper) {
    console.log("Can't find en element with id colorPaletteWrapper");
    return;
  }

  colorPalettes.map((color: colorPaletteType) => {
    colorWrapper.innerHTML += `
      <div class="${color.class}" data-id="${
      color.hexCode
    }" onmouseover="this.querySelector('span').innerHTML='${color.hexCode}'"
      onmouseout="this.querySelector('span').innerHTML='${color.tone}'"
      style="cursor: pointer;">
        <span  style="${
          /\b(10|20|30)\b/.test(color.class)
            ? "color: #30363c;"
            : "color: #ffffff;"
        }">${color.tone}</span>
      </div>
    `;
  });
};

(() => {
  printColorPalette(colorPalettes);
})();

const getHexCode = (e: Event) => {
  const target = e.currentTarget as HTMLElement;
  const targetedSpan = target.querySelector("span");
  const clickedCircle = colorPalettes.find(
    (item) => item.hexCode === target.dataset.id
  );
  const hexCode = clickedCircle?.hexCode;
  if (!hexCode || !targetedSpan) {
    return;
  } else {
    navigator.clipboard.writeText(hexCode);
    targetedSpan.innerText = "Hex code copied";
    target.style.fontSize = "10px";
    const className = target.className;
    clearCopyText();

    if (/\b(10|20|30)\b/.test(className)) {
      target.style.color = "#30363c";
    } else {
      target.style.color = "#ffffff";
    }
  }
};

const circles = document.querySelectorAll(".color-circle");
circles.forEach((btn) => {
  btn.addEventListener("click", getHexCode);
});

const clearCopyText = () => {
  const allCircles = document.querySelectorAll(".color-circle");
  const allColorPalettes = colorPalettes;
  allCircles.forEach((circle) => {
    if (circle.innerHTML === "Hex code copied") {
      const circleDataId = circle.getAttribute("data-id");

      allColorPalettes.forEach((color) => {
        if (circleDataId === color.hexCode) {
          setTimeout(() => (circle.innerHTML = `${color.tone}`), 1000);

          return;
        } else {
          return;
        }
      });
    }
  });
};
