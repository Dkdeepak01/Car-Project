import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-auto";
import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import tailwindcss from "tailwindcss";

const config = defineConfig({
  plugins: [
    svelte({
      preprocess: preprocess({
        postcss: {
          plugins: [tailwindcss],
        },
      }),
    }),
  ],
  kit: {
    // Specify the adapter here
    adapter: adapter(),
    // target has been removed, so no need to specify it
  },
});

export default config;
