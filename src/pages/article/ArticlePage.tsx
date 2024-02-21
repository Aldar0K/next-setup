import { baseUrl } from '@/shared/api';
import { REVALIDATE_DELAY } from '@/shared/const';
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from 'next';
import { ArticleJsonLd, NextSeo } from 'next-seo';

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
  return (
    <>
      <NextSeo
        title={article.title}
        description={article.subtitle}
        canonical={`https://next-setup-seven.vercel.app/articles/${article.id}`}
        openGraph={{
          title: article.title,
          description: article.subtitle,
          url: `https://next-setup-seven.vercel.app/articles/${article.id}`,
          type: 'article',
          article: { tags: [article.title], publishedTime: new Date().toISOString() }
        }}
      />
      <ArticleJsonLd
        type='Article'
        url={`https://next-setup-seven.vercel.app/articles/${article.id}`}
        title={article.title}
        description={article.subtitle}
        images={[]}
        datePublished={new Date().toISOString()}
        authorName={undefined}
      />
      <div className='flex flex-col gap-[15px]'>
        <h2>{article.title}</h2>
        <p>{article.subtitle}</p>
      </div>
    </>
  );
};
