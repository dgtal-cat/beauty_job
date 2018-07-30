import React from 'react';
import ReactDOM from 'react-dom';
import ArticleList from './components/ArticleList';
import articles from './fakeProps'
import 'bootstrap/dist/css/bootstrap.css'

ReactDOM.render(<ArticleList articles={articles}/>, document.getElementById('root'));