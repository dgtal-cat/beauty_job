import React from 'react';
import ReactDOM from 'react-dom';
import Article from './components/Article';
import articles from './fakeProps'

ReactDOM.render(<Article article={articles[0]}/>, document.getElementById('root'));