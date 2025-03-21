import colorPalettes from "./colorPalettes";

type colorPaletteType = {
  class: string;
  hexCode: string;
  name: string;
  tone: string;
};

const printColorPalette = (colorPalettes: colorPaletteType[]) => {
  const colorWrapper = document.querySelector("#testWrapper");
  console.log("HEJ!", colorPalettes);

  if (!colorWrapper) {
    console.log("Can't find en element with id colorPaletteWrapper");
    return;
  }

  colorPalettes.map((color: colorPaletteType) => {
    colorWrapper.innerHTML += `
      <div class="${color.class}" data-id="${color.hexCode}">
        <span style="color: white">${color.tone}</span>
      </div>
    `;
  });
};

const getHexCode = (e: Event) => {
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
    target.style.color = "white";
    target.style.fontSize = "10px";
  }
};

(() => {
  printColorPalette(colorPalettes);
})();

const circles = document.querySelectorAll(".circle");
circles.forEach((btn) => {
  btn.addEventListener("click", getHexCode);
});
