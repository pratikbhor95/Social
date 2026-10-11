import React from 'react';

const PostCard = ({ postData, onVote }) => {
  const { post, votes } = postData;

  const handleVote = (dir) => {
    onVote(post.id, dir);
  };

  return (
    <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-neutral-700 mb-4">
      <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{post.title}</h3>
      <p className="text-gray-600 dark:text-neutral-300 mb-4">{post.content}</p>
      <div className="flex items-center justify-between text-sm text-gray-500 dark:text-neutral-400 mb-4">
        <span>By: <span className="font-medium">{post.owner.email}</span></span>
        <span className="bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full font-semibold">
          {votes} {votes === 1 ? 'vote' : 'votes'}
        </span>
      </div>
      <div className="flex gap-2">
        <button 
          onClick={() => handleVote(1)}
          className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-colors duration-200"
        >
          Upvote
        </button>
        <button 
          onClick={() => handleVote(0)}
          className="flex-1 bg-gray-100 dark:bg-neutral-700 hover:bg-gray-200 dark:hover:bg-neutral-600 text-gray-700 dark:text-white font-semibold py-2 rounded-lg transition-colors duration-200"
        >
          Downvote
        </button>
      </div>
    </div>
  );
};

export default PostCard;
