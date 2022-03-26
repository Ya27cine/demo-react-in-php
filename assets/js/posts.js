
import React from "react";
import ReactDOM from "react-dom";
import LikeButton from "./components/LikeButton";

document.querySelectorAll("span.react-like").forEach(function (span) {
    const likes = +span.dataset.likes;
    const isLiked = +span.dataset.isLiked === 1;

    ReactDOM.render(<LikeButton likes={likes} isLiked={isLiked} />, span);
});





//   return React.createElement('button', { className: 'btn btn-link', onClick: this.handleClick },
//             this.state.likes,
//             " ",
//             React.createElement('i', { className: this.state.isLiked ? "fa fa-thumbs-up" : "fa fa-thumbs-o-up" }),

//             " ",
//             this.state.isLiked ? "Je n'aime plus  !" : "J'aime  !"
//         );
