import React, {
  SyntheticEvent,
  useState,
  useEffect,
  PropsWithRef,
} from "react";
import { Navigate, useParams } from "react-router-dom";

import { Product } from "../interfaces/product";
import Wrapper from "./Wrapper";

const ProductsEdit = (props: PropsWithRef<any>) => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [redirect, setRedirect] = useState(false);

  const { id } = useParams();
  useEffect(() => {
    (async () => {
      const response = await fetch(`http://localhost:8000/api/products/${id}`);
      const product: Product = await response.json();

      setTitle(product.title);
      setImage(product.image);
    })();
  }, [id]);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();

    await fetch(`http://localhost:8000/api/products/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title,
        image,
      }),
    });

    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to={"/admin/products"} />;
  }

  return (
    <Wrapper>
      <form onSubmit={submit}>
        <div className="form-group mt-2">
          <label>Title</label>
          <input
            defaultValue={title}
            type="text"
            className="form-control"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group mt-2">
          <label>Image</label>
          <input
            defaultValue={image}
            type="text"
            className="form-control"
            name="image"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <button className="btn btn-outline-secondary mt-2">Save</button>
      </form>
    </Wrapper>
  );
};

export default ProductsEdit;
