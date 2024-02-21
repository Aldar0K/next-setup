import { baseUrl } from '@/shared/api';
import { REVALIDATE_DELAY } from '@/shared/const';
import { GetStaticProps, InferGetStaticPropsType } from 'next';
import { NextSeo } from 'next-seo';
import Link from 'next/link';

type Article = { id: string; title: string; subtitle: string };

export const getStaticProps = (async context => {
  const response = await fetch(`${baseUrl}/articles`, {
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
    revalidate: REVALIDATE_DELAY
  };
}) satisfies GetStaticProps;

export const ArticlesPage = ({ articles }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <NextSeo
        title='Articles'
        description='Articles page'
        openGraph={{
          title: 'Articles',
          description: 'Articles page',
          url: `https://next-setup-seven.vercel.app/articles`,
          article: {
            tags: ['articles', ...articles.map(article => article.title)],
            publishedTime: new Date().toISOString()
          }
        }}
      />

      <ul className='flex flex-col gap-[10px]'>
        {articles.map(article => (
          <li key={article.id}>
            <Link href={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};
