import { Image, Link } from "@/domain/protocols";

export interface Tab {
  title: string;
  content: string;
  link?: Link;
}

export interface AboutProtocol {
  banner: Image;
  tabs: Tab[];
}
