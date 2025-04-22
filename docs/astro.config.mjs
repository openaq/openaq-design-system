// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import solidJs from "@astrojs/solid-js";

// https://astro.build/config
export default defineConfig({
  site: "https://openaq.github.io",
  base: "/openaq-design-system/",
  integrations: [
    starlight({
      title: "OpenAQ Design System",
      logo: {
        src: "./src/assets/svg/logo.svg",
        replacesTitle: true,
      },
      disable404Route: true,
      customCss: ["./src/styles/main.scss"],
      head: [
        {
          tag: "link",
          attrs: {
            rel: "icon",
            href: "/favicon.ico",
            sizes: "16x16 32x32",
          },
        },
      ],
      components: {
        ThemeSelect: "/src/components/ThemeSelect.astro",
      },
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],

      sidebar: [
        {
          label: "OpenAQ Design System",
          items: [{ label: "Home", slug: "index" }],
        },
        {
          label: "Overview",
          items: [
            { label: "About Overview", slug: "overview/about" },
            { label: "Color", slug: "overview/color" },
            { label: "Typography", slug: "overview/typography" },
            { label: "Icons", slug: "overview/icons" },
          ],
        },
        {
          label: "Components",
          items: [
            { label: "About Components", slug: "components/about" },
            { label: "Badges", slug: "components/badges" },
            { label: "Bubbles", slug: "components/bubbles" },
            { label: "Buttons", slug: "components/buttons" },
            { label: "Cards", slug: "components/card" },
            { label: "Chips", slug: "components/chips" },
            { label: "Horizontal-rule", slug: "components/horizontal-rule" },
            { label: "Inputs", slug: "components/inputs" },
          ],
        },
        {
          label: "Utilities",
          items: [
            { label: "About Utilities", slug: "utilities/about" },
            { label: "Colors", slug: "utilities/colors" },
            { label: "Typography", slug: "utilities/typography" },
          ],
        },
      ],
    }),
    solidJs(),
  ],
});
