import React from "react";
import { avatarUser } from "../../assets/img";
const AddComment: React.FunctionComponent = () => {
    return (
        <div className="addcomment-block">
            <div className="addcomment-block__main">
                <img src={avatarUser} alt="avatarUser" />
                <textarea name="comment"></textarea>
            </div>
            <button>
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7.39969 6.32015L15.8897 3.49015C19.6997 2.22015 21.7697 4.30015 20.5097 8.11015L17.6797 16.6002C15.7797 22.3102 12.6597 22.3102 10.7597 16.6002L9.91969 14.0802L7.39969 13.2402C1.68969 11.3402 1.68969 8.23015 7.39969 6.32015Z" fill="#262626" stroke="#262626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M10.1104 13.6496L13.6904 10.0596" stroke="#262626" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </span>
                <span>Send</span>
            </button>
        </div>
    );
};

export default AddComment;