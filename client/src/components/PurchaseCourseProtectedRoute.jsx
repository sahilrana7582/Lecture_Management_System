import { useGetCourseDetailWithStatusQuery } from '@/features/api/purchaseApi';
import { Loader2 } from 'lucide-react';

import { useParams, Navigate } from 'react-router-dom';

const PurchaseCourseProtectedRoute = ({ children }) => {
  const { courseId } = useParams();
  const { data, isLoading } = useGetCourseDetailWithStatusQuery(courseId);

  if (isLoading)
    return (
      <div className="h-screen min-w-screen flex justify-center items-center">
        <Loader2 className="w-28 h-28 animate-spin" />
      </div>
    );

  return data?.purchased ? (
    children
  ) : (
    <Navigate to={`/course-detail/${courseId}`} />
  );
};
export default PurchaseCourseProtectedRoute;
