// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "OpenAQ Design System",
      logo: {
        src: "./src/assets/logo.svg",
        replacesTitle: true,
      },

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
        Head: "/src/components/Head.astro",
      },
      social: {
        github: "https://github.com/withastro/starlight",
      },
      customCss: ["./src/styles/main.scss"],
      sidebar: [
        {
          label: "Overview",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Color", slug: "overview/color" },
            { label: "Typography", slug: "overview/typography" },
            { label: "Icons", slug: "overview/icons" },
          ],
        },
        {
          label: "Components",
          items: [
            // Each item here is one entry in the navigation menu.
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
            // Each item here is one entry in the navigation menu.
            { label: "Utilities Overview", slug: "utilities" },
          ],
        },
      ],
    }),
  ],
});
