class CommentBox extends React.Component {
    render() {
        return (
            <ul id="nav">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">blog</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        );
    }
}
class CommentList extends React.Component {
    render() {
        return (
            <div className="commentBox">
                <h1>Comments</h1>
                <CommentList />
                <CommentForm />
            </div>
        );
    }
}

ReactDOM.render(
    React.createElement(CommentBox, null),
    document.getElementById('content'),

);