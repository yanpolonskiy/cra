import React from 'react';
import Article from '../Article.jsx';
import './style.css';

export default function ArticleList({ articles }) {
  const articleElements = articles.map((x, index) => (
    <li key={x.id} className="article-list__li">
      <Article articles={x} defaultOpen={index === 0} />
    </li>
  ));
  return <ul>{articleElements}</ul>;
}
