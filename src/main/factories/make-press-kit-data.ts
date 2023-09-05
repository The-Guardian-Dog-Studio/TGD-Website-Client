import { pressKit } from "@/database";
import { makeTeamData } from "@/main/factories";

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
  contact,
  history,
  description,
  "video-policy": videoPolicy,
} = pressKit;

const makePressKitData = () => ({
  siteUrl,
  navigation: {
    title: navigationTitle,
    data: navigationData.map((link) => ({
      ...link,
      url: `/press-kit${link.url}`,
    })),
  },
  repeatedSections,
  factsheet,
  projects,
  videos,
  images,
  logos,
  awards,
  articles,
  team: makeTeamData(),
  contact,
  history,
  description,
  videoPolicy,
});

export { makePressKitData };
