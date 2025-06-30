"use client"
import { useGetCategoriesQuery } from "@/redux/api/categoryApi";
const SubHeader = () => {
  const { data, isLoading } = useGetCategoriesQuery(undefined);
  if (isLoading) {
    return;
  }

  return (
    <div className="bg-white h-[40px] flex items-center justify-between px-[80px] text-sm text-gray-700 border-b customShadow">
      <div className="flex items-center space-x-6">
        <button className="flex items-center text-black font-semibold">
          <i className="ri-menu-line mr-2 text-teal-500"></i>
          Categories
        </button>
        {data?.data?.slice(0,4)?.map((item: any) => (
          <span className="text-[14px] hidden lg:inline" key={item?.id}>{item?.name}</span>
        ))}
      </div>

      <div className="flex items-center space-x-6 text-gray-500">
        <button className="flex items-center hover:text-black">
          <i className="ri-truck-line mr-1 text-base"></i>
          TRACK ORDER
        </button>
        <button className="flex items-center hover:text-black">
          <i className="ri-question-line mr-1 text-base"></i>
          HELP CENTER
        </button>
        <button className="flex items-center text-teal-500 font-medium hover:text-teal-600">
          <i className="ri-store-2-line mr-1 text-base"></i>
          SELL WITH US
        </button>
      </div>
    </div>
  );
};

export default SubHeader;
