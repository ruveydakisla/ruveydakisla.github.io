import { join } from "path";

export default {
  output: "export",
  images: {
    domains: [
      "media.dev.to",
      "avatars.githubusercontent.com",
      "github-readme-stats.vercel.app",
      "github-readme-streak-stats.herokuapp.com",
      "stardev.io",
      "github-profile-summary-cards.vercel.app",
      "github-profile-trophy.vercel.app",
    ],
    dangerouslyAllowSVG: true,
  },
  basePath: process.env.NODE_ENV === "production" ? "" : "",
  trailingSlash: true,
};
