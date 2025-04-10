import { createSignal } from "solid-js";
import type { colorPaletteType } from "../utilities/types/types";
import colorPalettes from "../utilities/data/colorPalettes";

const ColorCircle = (props: { color: colorPaletteType }) => {
  const [hexCodeCopied, setHexCodeCopied] = createSignal(false);

  const copyHexCode = async () => {
    if (hexCodeCopied()) {
      return;
    }

    await navigator.clipboard.writeText(props.color.hexCode);
    setHexCodeCopied(true);
    setTimeout(() => setHexCodeCopied(false), 1000);
  };

  return (
    <div
      class={props.color.class}
      data-hex-code={props.color.hexCode}
      onClick={copyHexCode}
      style={{
        color: /\b(10|20|30)\b/.test(props.color.class) ? "#30363c" : "#ffffff",
      }}
    >
      {hexCodeCopied() ? "Hex code copied" : props.color.tone}
    </div>
  );
};

export const CircleGrid = () => {
  return (
    <div id="colorPaletteWrapper" class="color-palette-wrapper">
      {colorPalettes.map((color) => (
        <ColorCircle color={color} />
      ))}
    </div>
  );
};
