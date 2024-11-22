import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { useGetCreatorCourseQuery } from '@/features/api/courseApi';
import { Edit, Loader2 } from 'lucide-react';
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const CourseTable = () => {
  const { data, isLoading, refetch } = useGetCreatorCourseQuery();
  const navigate = useNavigate();
  useEffect(() => {
    refetch();
  }, []);

  if (isLoading)
    return (
      <div className="h-screen min-w-screen flex justify-center items-center">
        <Loader2 className="w-28 h-28 animate-spin" />
      </div>
    );

  return (
    <div>
      <Button onClick={() => navigate(`create`)}>Create a new course</Button>
      <Separator className="my-6" />
      <Table>
        <TableCaption>A list of your recent courses.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Price</TableHead>
            <TableHead className="text-center">Status</TableHead>
            <TableHead>Title</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.courses.map((course) => (
            <TableRow key={course._id} className="cursor-pointer">
              <TableCell className="font-medium">
                {course?.coursePrice || 'NA'}
              </TableCell>
              <TableCell className="flex justify-center">
                {' '}
                <Badge
                  className={`${
                    course.isPublished
                      ? 'bg-[#22c55e] hover:bg-[#166534]'
                      : 'bg-[#dc2626] hover:bg-[#991b1b]'
                  }`}
                >
                  {course.isPublished ? 'Published' : 'Draft'}
                </Badge>{' '}
              </TableCell>
              <TableCell>{course.courseTitle}</TableCell>
              <TableCell className="text-right">
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => navigate(`${course._id}`)}
                >
                  <Edit />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CourseTable;
