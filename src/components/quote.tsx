import { Link } from "@/components";
import { Link as LinkProtocol } from "@/domain/protocols";

type Cite = {
  authorName?: string;
} & LinkProtocol;

interface QuoteProps {
  text: string;
  cite?: Cite;
}

const Quote = ({ text, cite }: QuoteProps): JSX.Element => {
  return (
    <blockquote>
      <p>{text}</p>
      {cite && (
        <footer>
          {cite.authorName && `- ${cite.authorName}, `}
          <cite>
            <Link noPrefix href={cite.url} className="text-brand-blue">
              {cite.text}
            </Link>
          </cite>
        </footer>
      )}
    </blockquote>
  );
};

export default Quote;
