import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Button from '../ui/Button';

const schema = yup.object().shape({
  text: yup.string().required('Comment cannot be empty').min(3, 'Comment must be at least 3 characters'),
});

const CommentForm = ({ onSubmit, loading }) => {
  const { 
    register, 
    handleSubmit, 
    reset,
    formState: { errors } 
  } = useForm({
    resolver: yupResolver(schema)
  });

  const handleFormSubmit = (data) => {
    onSubmit(data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4 mb-8">
      <div>
        <label htmlFor="comment" className="sr-only">Your comment</label>
        <textarea
          id="comment"
          rows="3"
          {...register('text')}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          placeholder="Write your comment..."
        />
        {errors.text && (
          <p className="mt-1 text-sm text-red-600">{errors.text.message}</p>
        )}
      </div>
      <div className="flex justify-end">
        <Button 
          type="submit" 
          disabled={loading}
          className="px-4 py-2"
        >
          {loading ? 'Posting...' : 'Post Comment'}
        </Button>
      </div>
    </form>
  );
};

export default CommentForm;