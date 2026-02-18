import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    id: "/",
    name: "LibyUI",
    short_name: "LibyUI",
    description:
      "A modern UI component library built with React and TypeScript",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    screenshots: [
      {
        src: "/screenshot-desktop",
        sizes: "1280x720",
        form_factor: "wide",
        label: "LibyUI desktop view",
      },
      {
        src: "/screenshot-mobile",
        sizes: "375x667",
        label: "LibyUI mobile view",
      },
    ],
    protocol_handlers: [
      {
        protocol: "web+libyui",
        url: "/?protocol=%s",
      },
      {
        protocol: "web+libyuicomponent",
        url: "/components/%s",
      },
      {
        protocol: "web+libyuidocs",
        url: "/docs/%s",
      },
    ],
    icons: [
      {
        src: "/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
