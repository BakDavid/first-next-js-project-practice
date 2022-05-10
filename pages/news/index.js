import Link from "next/link";

// our-domain.com/news
function NewsPage() {
  return (
    <>
      <h1>NewsPage</h1>
      <ul>
        <li>
          <Link href="/news/nextjs-framework">NextJS Framework</Link>
        </li>
        <li>Something Framework</li>
      </ul>
    </>
  );
}

export default NewsPage;
