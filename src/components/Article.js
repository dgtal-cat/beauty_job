import React, {Component} from "react";
import CommentsBox from "./CommentsBox";

class Article extends Component {
   state = {
           isOpen: true
       };

    render() {
        const {article} = this.props;
        console.log('---', this.props);
        const articleBody = this.state.isOpen && <section className="text-primary">{article.text}</section>;
        return (
            <div className="container">
                <div className="jumbotron">
                    <h1 className="h1 text-lg-center">{article.title}
                    <button className="btn-outline-primary" onClick={this.clickHandler}>
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