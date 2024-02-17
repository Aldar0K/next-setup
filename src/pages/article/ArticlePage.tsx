import { baseUrl } from '@/shared/api';
import { REVALIDATE_DELAY } from '@/shared/const';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';

type Article = { id: string; title: string; subtitle: string };

export const getStaticPaths = (async context => {
  const response = await fetch(`${baseUrl}/articles`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer'
    }
  });
  const articles = (await response.json()) as Article[];

  const paths = articles.map(post => ({
    params: { id: post.id }
  }));

  return {
    paths,
    fallback: 'blocking'
  };
}) satisfies GetStaticPaths;

export const getStaticProps = (async context => {
  const response = await fetch(`${baseUrl}/articles/${context.params?.id}`, {
    headers: {
      'Content-Type': 'application/json',
      Authorization: 'Bearer'
    }
  });
  const article = (await response.json()) as Article;

  return {
    props: { article },
    revalidate: REVALIDATE_DELAY
  };
}) satisfies GetStaticProps<{
  article: Article;
}>;

export const ArticlePage = ({ article }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return <div>{article.title}</div>;
};
