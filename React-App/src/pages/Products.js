import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

function Products() {
  const { isLoading, error, data } = useFetch(
    "http://localhost:1337/api/products"
  );

  if (isLoading) return <h1>Loading...</h1>;
  if (error) return <h1>Error : {error.message}</h1>;

  return (
    <div className="container mx-auto p-12">
      <ul className="grid grid-cols-4 gap-4">
        {data.data?.map((product) => (
          <li
            className="bg-gray-100 p-4 rounded-md flex flex-col"
            key={product.id}
          >
            <h2 className="text-xl">{product.attributes.name}</h2>
            <code className="text-blue-500">
              {product.attributes.price.toLocaleString("de-DE", {
                style: "currency",
                currency: "EUR",
              })}
            </code>
            <Link
              to={`/products/${product.id}`}
              className="ml-auto bg-gray-500 px-2 text-white rounded-full"
            >
              Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Products;
