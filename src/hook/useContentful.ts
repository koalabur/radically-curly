export default async function UseContentful(query: unknown) {
  const res = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE}/environments/master`,
    {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${process.env.CONTENTFUL_CDP}`,
      },
      body: JSON.stringify({ query }),
    }
  );

  const data = await res.json();

  return data;
}
