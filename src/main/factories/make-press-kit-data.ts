import { pressKit } from "@/database";

const repeatedSections = ["description", "history", "video-policy"] as const;
const {
  "site-url": siteUrl,
  "navigation-title": navigationTitle,
  navigation: navigationData,
  factsheet,
  projects,
  videos,
  images,
  logos,
  "awards-and-recognition": awards,
  "selected-articles": articles,
  team,
  contact,
  history,
  description,
  "video-policy": videoPolicy,
} = pressKit;

const makePressKitData = () => ({
  siteUrl,
  navigation: {
    title: navigationTitle,
    data: navigationData,
  },
  repeatedSections,
  factsheet,
  projects,
  videos,
  images,
  logos,
  awards,
  articles,
  team,
  contact,
  history,
  description,
  videoPolicy,
});

export { makePressKitData };
