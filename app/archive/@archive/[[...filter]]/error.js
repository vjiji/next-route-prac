"use client";

export default function FilterErrorPage({ error }) {
  return (
    <div id="error">
      <h2>에러 페이지</h2>
      <p>{error.message}</p>
    </div>
  );
}
