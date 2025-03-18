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
            { label: "Design System Overview", slug: "overview" },
          ],
        },
        {
          label: "Components",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Components Overview", slug: "components" },
            { label: "Badges", slug: "components/badges" },
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
