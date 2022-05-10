import { useRouter } from "next/router";

// our-domain.com/news/something-important
export default function DetailPage() {
  const router = useRouter();

  console.log(router.query.newsId);

  return <h1>DetailPage</h1>;
}
