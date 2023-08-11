import { PressKitSection, Quote } from "@/components";
import { Link } from "@/domain/protocols";

interface ArticleContent {
  text: string;
  author: string;
  cite: Link;
}

interface ArticlesSectionProps {
  title: string;
  content: ArticleContent[];
}

const ArticlesSection = ({
  title,
  content,
}: ArticlesSectionProps): JSX.Element => {
  return (
    <PressKitSection id="selected-articles" title={title}>
      <ul>
        {content.map((article) => (
          <li key={article.author} className="mb-2 ml-4 md:ml-8">
            <Quote
              text={article.text}
              cite={{
                authorName: article.author,
                ...article.cite,
              }}
            />
          </li>
        ))}
      </ul>
    </PressKitSection>
  );
};

export default ArticlesSection;
