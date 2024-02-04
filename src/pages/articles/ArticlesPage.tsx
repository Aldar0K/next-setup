import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Link from 'next/link';

type Article = { id: string; title: string; subtitle: string };

export const getStaticProps = (async context => {
  const response = await fetch('http://localhost:8000/articles', {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer'
    }
  });
  const articles = (await response.json()) as Article[];

  return {
    props: {
      articles
    },
    revalidate: 10
  };
}) satisfies GetStaticProps;

export const ArticlesPage = ({ articles }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <ul>
      {articles.map(article => (
        <li key={article.id}>
          <Link href={`/articles/${article.id}`}>{article.title}</Link>
        </li>
      ))}
    </ul>
  );
};
