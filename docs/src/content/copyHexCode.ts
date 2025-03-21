import colorPalettes from "./colorPalettes";

type colorPaletteType = {
  class: string;
  hexCode: string;
  name: string;
  tone: string;
};

const printColorPalette = (colorPalettes: colorPaletteType[]) => {
  const colorWrapper = document.querySelector("#testWrapper");

  if (!colorWrapper) {
    console.log("Can't find en element with id colorPaletteWrapper");
    return;
  }

  colorPalettes.map((color: colorPaletteType) => {
    colorWrapper.innerHTML += `
      <div class="${color.class}" data-id="${color.hexCode}">
        <span style="${
          /\b10\b/.test(color.class) ? "color: #30363c;" : "color: #ffffff;"
        }">${color.tone}</span>
      </div>
    `;
  });
};

(() => {
  printColorPalette(colorPalettes);
})();

const getHexCode = (e: Event) => {
  clearText();
  const target = e.currentTarget as HTMLElement;
  const circleObject = colorPalettes.find(
    (item) => item.hexCode === target.dataset.id
  );
  const newCode = circleObject?.hexCode;
  if (!newCode) {
    return;
  } else {
    navigator.clipboard.writeText(newCode);
    target.innerHTML = "Hex code copied!";
    target.style.fontSize = "10px";

    const className = target.className;

    if (/\b10\b/.test(className)) {
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

const clearText = () => {
  const allCircles = document.querySelectorAll(".color-circle");
  const allColorPalettes = colorPalettes;
  allCircles.forEach((circle) => {
    if (circle.innerHTML === "Hex code copied!") {
      const circleDataId = circle.getAttribute("data-id");

      allColorPalettes.forEach((color) => {
        if (circleDataId === color.hexCode) {
          circle.innerHTML = `${color.tone}`;
          return;
        } else {
          return;
        }
      });
    }
  });
};
