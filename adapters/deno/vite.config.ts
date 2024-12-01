import { denoServerAdapter } from "@qwik.dev/router/adapters/deno-server/vite";
import { extendConfig } from "@qwik.dev/router/vite";
import baseConfig from "../../vite.config.ts";

export default extendConfig(baseConfig, () => {
  return {
    build: {
      ssr: true,
      rollupOptions: {
        input: ["src/entry.deno.ts", "@qwik-city-plan"],
      },
      minify: false,
    },
    plugins: [
      denoServerAdapter({
        ssg: {
          include: ["/"], //Only root/first page for demonstration
          origin: "https://yoursite.dev",
        },
      }),
    ],
  };
});
