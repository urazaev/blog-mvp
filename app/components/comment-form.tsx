"use client";
import React, { useState, useEffect } from "react";

const CommentForm = ({ articleId }: { articleId: string }) => {
  const [comment, setComment] = useState("");
  const [savedComments, setSavedComments] = useState<string[]>([]);
  const storagePattern = `tb-test-app-${articleId}`;

  useEffect(() => {
    try {
      const storedComments = localStorage.getItem(storagePattern);
      if (storedComments) {
        const comments = JSON.parse(storedComments);
        setSavedComments(comments);
      }
    } catch (error) {
      console.error("Failed to parse comments from localStorage", error);
    }
  }, [storagePattern]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedComments = [...savedComments, comment];
    localStorage.setItem(storagePattern, JSON.stringify(updatedComments));
    setSavedComments(updatedComments);
    setComment("");
  };

  return (
    <div>
      {" "}
      {savedComments.length > 0 ? (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Previous Comments</h2>
          <ul>
            {savedComments.map((c, index) => (
              <li key={index} className="mb-2">
                {c}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      <form onSubmit={handleSubmit} className="mt-5">
        <label htmlFor="comment" className="text-xl font-semibold">
          Your Comment
        </label>
        <textarea
          id="comment"
          name="comment"
          rows={4}
          className="w-full border border-gray-300 rounded-lg p-2 mb-4"
          placeholder="Your comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CommentForm;
