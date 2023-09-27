import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { singleProduct } from "../../features/slices/productsSlice";
import { Link, useParams } from "react-router-dom";

const ProductCard = ({ id, name, text, img, price, colors }) => {
  const dispatch = useDispatch();
  const { type } = useParams();

  return (
    <Link to={`/filteredProducts/${type}/${id}`} className="cursor-pointer">
      <Card className="w-96" onClick={() => dispatch(singleProduct(id))}>
        <CardHeader color="blue" className="relative h-96">
          <img src={img} alt="Product" className="h-full w-full object-cover" />
        </CardHeader>
        <CardBody className="text-center">
          <Typography variant="h6" className="mb-2 font-bold">
            {name}
          </Typography>
          <Typography>{text}</Typography>
        </CardBody>
        <CardFooter divider className="flex items-center justify-between py-3">
          <Typography variant="body" className="font-semibold">
            {price}$
          </Typography>
          <div className="flex gap-1">
            {colors?.map((color, index) => (
              <i
                className="fas fa-map-marker-alt fa-sm mt-[3px] rounded-full p-2 mr-4 "
                key={index}
                style={{ backgroundColor: color }}
              ></i>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ProductCard;
