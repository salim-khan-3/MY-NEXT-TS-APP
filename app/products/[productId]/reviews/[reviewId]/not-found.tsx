import { headers } from "next/headers";

const NotFound = () => {
  const headerList = headers();
  const pathname = headerList.get("x-pathname") || "";

  const parts = pathname.split("/");
  const productId = parts[2] || "unknown";
  const reviewId = parts[4] || "unknown";

  return (
    <div className="p-10 text-center">
      <h2 className="text-2xl font-bold text-red-600">
        Reviews {reviewId} not found for product {productId}
      </h2>
      <p className="text-gray-500 mt-2">
        Could not find requested resource.
      </p>
    </div>
  );
};

export default NotFound;
