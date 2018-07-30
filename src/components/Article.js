import React, {Component} from "react";
import CommentsBox from "./CommentsBox";

class Article extends Component {
   state = {
           isOpen: true
       };

    render() {
        const {article} = this.props;
        console.log('---', this.props);
        const articleBody = this.state.isOpen && <section>{article.text}</section>;
        return (
            <div className="article_box">
                <h1>{article.title}
                    <button onClick={this.clickHandler}>close</button>
                </h1>
                {articleBody}
                <CommentsBox />
            </div>
        )
    }

    clickHandler = () => {
        console.log('clicked');
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article