import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ThumbsUp, Send } from 'lucide-react';
import { Review } from './AppStore';

interface AppReviewsProps {
  reviews: Review[];
  averageRating: number;
  totalReviews: number;
  ratingCounts: {
    1: number;
    2: number;
    3: number;
    4: number;
    5: number;
  };
}

export default function AppReviews({ reviews, averageRating, totalReviews, ratingCounts }: AppReviewsProps) {
  const [newReview, setNewReview] = useState({ rating: 0, comment: '' });
  const [hoveredStar, setHoveredStar] = useState(0);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the review to a backend
    console.log('New review:', newReview);
    // Reset form
    setNewReview({ rating: 0, comment: '' });
  };

  // Calculate rating percentages
  const getRatingPercentage = (count: number) => (count / totalReviews) * 100;

  return (
    <div className="space-y-8">
      {/* Rating Overview */}
      <div className="grid grid-cols-1 tablet:grid-cols-2 gap-8">
        {/* Average Rating */}
        <div className="flex items-center gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-gray-900 dark:text-white mb-2">
              {averageRating.toFixed(1)}
            </div>
            <div className="flex items-center gap-1 justify-center mb-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${
                    star <= averageRating
                      ? 'text-yellow-400 fill-yellow-400'
                      : 'text-gray-300 dark:text-gray-700'
                  }`}
                />
              ))}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400">
              {totalReviews.toLocaleString()} reviews
            </div>
          </div>
        </div>

        {/* Rating Bars */}
        <div className="space-y-2">
          {[5, 4, 3, 2, 1].map((rating) => (
            <div key={rating} className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400 w-8">
                {rating}★
              </span>
              <div className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${getRatingPercentage(ratingCounts[rating as keyof typeof ratingCounts])}%` }}
                  className="h-full bg-yellow-400"
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 w-16 text-right">
                {ratingCounts[rating as keyof typeof ratingCounts]}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Write Review Form */}
      <form onSubmit={handleSubmitReview} className="space-y-4">
        <div className="flex items-center gap-2 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.button
              key={star}
              type="button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setNewReview({ ...newReview, rating: star })}
              onMouseEnter={() => setHoveredStar(star)}
              onMouseLeave={() => setHoveredStar(0)}
              className="focus:outline-none"
            >
              <Star
                className={`w-8 h-8 ${
                  star <= (hoveredStar || newReview.rating)
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300 dark:text-gray-700'
                }`}
              />
            </motion.button>
          ))}
        </div>
        
        <textarea
          value={newReview.comment}
          onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
          placeholder="Write your review..."
          className="w-full p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 
                   dark:border-gray-700/50 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
          rows={4}
        />
        
        <motion.button
          type="submit"
          className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-500 rounded-xl text-white 
                   font-semibold disabled:opacity-50"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={!newReview.rating || !newReview.comment}
        >
          <span className="flex items-center gap-2">
            Submit Review
            <Send className="w-4 h-4" />
          </span>
        </motion.button>
      </form>

      {/* Reviews List */}
      <div className="space-y-6">
        {reviews.map((review) => (
          <motion.div
            key={review.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 bg-gray-50 dark:bg-gray-800/50 rounded-2xl"
          >
            <div className="flex items-start gap-4">
              <img
                src={review.userImage}
                alt={review.userName}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    {review.userName}
                  </h4>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {new Date(review.date).toLocaleDateString()}
                  </span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-4 h-4 ${
                        star <= review.rating
                          ? 'text-yellow-400 fill-yellow-400'
                          : 'text-gray-300 dark:text-gray-700'
                      }`}
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {review.comment}
                </p>
                <button className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400 
                                 hover:text-gray-700 dark:hover:text-gray-200 transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  Helpful ({review.helpful})
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 