import posts from './_posts.js';

const contents = JSON.stringify(
  posts.map((post) => {
    const { id, slug, title, content } = post;
    return { id, slug, title, content };
  })
);

export function get(req, res) {
  res.writeHead(200, {
    'Content-Type': 'application/json',
  });

  res.end(contents);
}
