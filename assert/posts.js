

class LikeButton extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            likes: props.likes || 0,
            isLiked: props.isLiked || false,
        }
    }

    handleClick = () => {
        const isLiked = this.state.isLiked;
        const likes = this.state.likes + (isLiked ? -1 : 1);

        this.setState({ likes, isLiked: !isLiked });
    }

    render() {
        return <button className="btn btn-link" onClick={this.handleClick}>
            {this.state.likes}&nbsp;
            <i className={this.state.isLiked ? "fa fa-thumbs-up" : "fa fa-thumbs-o-up"}></i>&nbsp;
            {this.state.isLiked ? "Je n'aime plus  !" : "J'aime  !"}
        </button>
    }
}

document.querySelectorAll('span.react-like').forEach(function (span) {
    ReactDOM.render(React.createElement(LikeButton), span)
});












  return React.createElement('button', { className: 'btn btn-link', onClick: this.handleClick },
            this.state.likes,
            " ",
            React.createElement('i', { className: this.state.isLiked ? "fa fa-thumbs-up" : "fa fa-thumbs-o-up" }),

            " ",
            this.state.isLiked ? "Je n'aime plus  !" : "J'aime  !"
        );
