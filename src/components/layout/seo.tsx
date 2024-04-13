const titleSufix = " | TGD Studio";

interface SeoProps {
  title: string;
  description?: string;
  media?: {
    image?: string;
    url?: string;
  };
}

const Seo = ({ title, description, media }: SeoProps): JSX.Element => {
  const descriptionContent =
    description ??
    "A TGD é uma empresa junior de jogos. E está pronta para reunir a sua matilha para a sua próxima aventura em jogos.";
  const imageContent =
    media?.image ??
    "https://img.itch.zone/aW1nLzkwODU4NDcucG5n/original/biEzHp.png";
  const urlContent = media?.url ?? "https://the-guardian-dog-studio.github.io/TGD-Website-Client/";

  return (
    <>
      {
        // Primary Meta Tags
      }
      <title>{title + titleSufix}</title>
      <meta name="title" content={title + titleSufix} />
      <meta name="description" content={descriptionContent} />
      <meta
        name="keywords"
        content="jogos, desenvolvimento de jogos, Call of The Racket, Super Hakai, empresa júnior, Universidade Federal do Ceará"
      />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="pt-BR" />
      <meta name="revisit-after" content="15 days" />
      <meta name="author" content="TGD Studio Team" />

      {
        // Open Graph / Facebook
      }
      <meta property="og:type" content="website" />
      <meta property="og:url" content={urlContent} />
      <meta property="og:title" content={title + titleSufix} />
      <meta property="og:description" content={descriptionContent} />
      <meta property="og:image" content={imageContent} />

      {
        //  Twitter
      }
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={urlContent} />
      <meta property="twitter:title" content={title + titleSufix} />
      <meta property="twitter:description" content={descriptionContent} />
      <meta property="twitter:image" content={imageContent} />
    </>
  );
};

export default Seo;
