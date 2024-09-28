import React from "react";

const Page = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-semibold">Welcome Back, Admin</h1>
      <p className="text-sm font-normal text-gray-500 mt-1">
        Manage products and track customer orders here.
      </p>

      <div className="grid grid-cols-3 gap-8 mt-10">
        <div className="col-span-3 lg:col-span-2">
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* <TotalSalesCard /> */}
            {/* <TotalCustomersCard /> */}
          </div>
          <div className="flex flex-col gap-8 mt-8">
            {/* <TrendingProductsCard /> */}
            {/* <LatestOrders /> */}
            {/* <TopProductsCard /> */}
          </div>
        </div>
        <div className="col-span-3 lg:col-span-1">
          {/* <AllCategoriesCard /> */}
        </div>
      </div>
    </div>
  );
};

export default Page;
