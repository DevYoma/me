import styles from './blog.module.scss';

interface Article {
  id: number;
  title: string;
  description: string;
  published_at: string;
  url: string;
  tag_list: string[];
}

async function getArticles() {
  const res = await fetch('https://dev.to/api/articles?username=devyoma', {
    next: { revalidate: 3600 } // Revalidate every hour
  });
  
  if (!res.ok) {
    throw new Error('Failed to fetch articles');
  }
  
  return res.json() as Promise<Article[]>;
}

export default async function BlogPage() {
  const allArticles = await getArticles();

  // For now, let's just show everything. 
  // We can add a filter here like:
  // const featuredArticles = allArticles.filter(a => [ID1, ID2].includes(a.id));
  
  const articles = allArticles;

  return (
    <div className={styles.blogContainer}>
      <h1>Things I have written</h1>
      
      <div className={styles.articleList}>
        {articles.map((article) => (
          <article key={article.id} className={styles.article}>
            <span className={styles.date}>
              {new Date(article.published_at).toLocaleDateString('en-US', {
                month: 'short',
                day: 'numeric',
                year: 'numeric'
              })}
            </span>
            <h2>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </h2>
            <p className={styles.description}>{article.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
