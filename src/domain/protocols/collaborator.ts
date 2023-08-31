import { SocialMediaPlatform } from ".";

export interface Collaborator {
  name: string;
  role: string;
  connect?: SocialMediaPlatform[];
}
