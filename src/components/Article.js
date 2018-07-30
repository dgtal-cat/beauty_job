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
            <div className="container">
                <div className="jumbotron">
                    <h1 className="display-3">{article.title}
                    <button className="btn-dark" onClick={this.clickHandler}>
                        {this.state.isOpen ? 'close' : 'open'}
                    </button>
                    </h1>
                {articleBody}
                <CommentsBox />
                </div>
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