import { GamePlatform } from ".";

export interface Game {
  name: string;
  slug: string;
  description: string;
  banner: {
    url: string;
    alt: string;
  };
  platforms?: GamePlatform[];
}
