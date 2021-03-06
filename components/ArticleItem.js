import Link from "next/link";
import articleStyles from "../styles/Article.module.css";

const ArticleItem = (article) => {
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.articleStyles}</h3>
      </a>
    </Link>
  );
};

export default ArticleItem;
