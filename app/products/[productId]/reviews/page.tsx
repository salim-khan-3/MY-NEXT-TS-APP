import { notFound } from "next/navigation";

interface ReviewPageProps {
  params: {
    productId: string;
    reviewId: string;
  };
}


const ReviewsPage = ({params}: ReviewPageProps) => {
    const reviewId = Number(params.reviewId);

    if(isNaN(reviewId) || reviewId < 1 || reviewId > 5){
        notFound()
    }

    return (
        <div>
            <h1>Review {reviewId} for Product {params.productId}</h1>
             <p className="mt-4 text-gray-600">
        This is review number {reviewId}.
      </p>
        </div>
    );
};

export default ReviewsPage;