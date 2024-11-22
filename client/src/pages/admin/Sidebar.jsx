import { Separator } from '@/components/ui/separator';
import { Book, ChartNoAxesColumn, SquareLibrary } from 'lucide-react';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname.split('/')[2];
  return (
    <div className="flex max-sm:flex-col">
      <div className=" lg:block w-[250px] max-sm:h-fit max-sm:p-10 max-sm:w-full  space-y-8 border-r border-gray-300 dark:border-gray-700  p-5 sticky top-0  h-screen">
        <div className="space-y-4 max-sm:bg-white p-10  ">
          <Link
            to="dashboard"
            className={`flex items-center  gap-2 hover:bg-slate-100 p-2 rounded-md hover:transition-all duration-300  ease-in-out ${
              currentPath == 'dashboard' && 'bg-slate-100'
            }`}
          >
            <ChartNoAxesColumn size={22} />
            <h1>Dashboard</h1>
          </Link>
          <Link
            to="course"
            className={`flex items-center  gap-2 hover:bg-slate-100 p-2 rounded-md hover:transition-all duration-300  ease-in-out ${
              currentPath == 'course' && 'bg-slate-100'
            }`}
          >
            <Book size={22} />
            <h1>Courses</h1>
          </Link>
        </div>

        <Separator className="hidden max-sm:block" />
      </div>
      <div className="flex-1 p-10 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Sidebar;
