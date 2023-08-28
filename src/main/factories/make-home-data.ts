import home from "@/database/home.json";
import {
  AboutProtocol,
  ContactData,
  Game,
  NavigationLink,
  SocialMediaPlatform,
} from "@/domain/protocols";
import { removeDoubleSlashes } from "@/utils";

interface DataWithTitle<T> {
  title: string;
  data: T;
}

interface HomeData {
  navigation: DataWithTitle<NavigationLink[]>;
  featuredGame: { bannerUrl: string };
  games: ({ url: string } & Pick<Game, "name" | "banner">)[];
  about: AboutProtocol;
  contact: DataWithTitle<ContactData>;
  socialMedia: DataWithTitle<SocialMediaPlatform[]>;
}

const makeHomeData = (): HomeData => {
  return {
    navigation: {
      title: home.navigation["mobile-title"],
      data: home.navigation.links,
    },
    featuredGame: {
      bannerUrl: removeDoubleSlashes(home["featured-game"].bannerUrl, false),
    },
    games: home.games.map((game) => ({
      name: game.name,
      url: "/games/" + game.slug,
      banner: {
        url: game.bannerUrl,
        alt: game.name + " banner",
      },
    })),
    about: home.about,
    contact: {
      title: "Contato",
      data: home.contact.email,
    },
    socialMedia: {
      title: home["social-media-title"],
      data: home["social-media"],
    },
  };
};

export { makeHomeData };
