import React from 'react';
import Article from './Article.jsx';

export default function ArticleList({ articles }) {
  const articleElements = articles.map(x => (
    <li key={x.id}>
      <Article articles={x} />
    </li>
  ));
  return <ul>{articleElements}</ul>;
}
