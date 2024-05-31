export default function NewsDetailPage({ params }) {
  const newsId = params.id;
  return (
    <>
      <h1>News Page</h1>
      <p>{newsId}</p>
    </>
  );
}
