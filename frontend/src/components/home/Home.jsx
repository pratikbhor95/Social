import React, { useState, useEffect } from 'react';
import { getPosts, createPost, votePost } from '../../services/api';
import PostCard from './PostCard';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [newPost, setNewPost] = useState({ title: '', content: '' });

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const data = await getPosts();
      setPosts(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleCreatePost = async (e) => {
    e.preventDefault();
    try {
      await createPost(newPost);
      setNewPost({ title: '', content: '' });
      fetchPosts(); // Refresh posts
    } catch (err) {
      alert(err.message);
    }
  };

  const handleVote = async (postId, dir) => {
    try {
      await votePost(postId, dir);
      fetchPosts(); // Refresh posts to see updated vote count
    } catch (err) {
      alert(err.message);
    }
  };

    return (
    <div className="max-w-2xl mx-auto py-8 px-4">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Post Feed</h2>

      <div className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-md border border-gray-100 dark:border-neutral-700 mb-10">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Create a New Post</h3>
        <form onSubmit={handleCreatePost} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            value={newPost.title}
            onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
            required
          />
          <textarea
            placeholder="What's on your mind?"
            value={newPost.content}
            onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-neutral-600 dark:bg-neutral-700 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none min-h-[100px]"
            required
          />
          <button 
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition-colors duration-200"
          >
            Post
          </button>
        </form>
      </div>

      {loading ? (
        <div className="flex justify-center py-10">
          <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
        </div>
      ) : error ? (
        <div className="bg-red-50 text-red-600 p-4 rounded-lg text-center mb-6">
          {error}
        </div>
      ) : (
        <div className="space-y-6">
          {posts.length === 0 ? (
            <p className="text-center text-gray-500 dark:text-neutral-400 py-10">No posts yet. Be the first to post!</p>
          ) : (
            posts.map((postData) => (
              <PostCard key={postData.post.id} postData={postData} onVote={handleVote} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Home;