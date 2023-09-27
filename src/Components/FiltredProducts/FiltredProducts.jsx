import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import { Button } from "@material-tailwind/react";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import Error from "../Error/Error";
import {
  filterProducts,
  filterGender,
  sortByPrice,
  filterByColor,
  filterBySize,
} from "../../features/slices/productsSlice";

const FilteredProducts = () => {
  const products = useSelector((state) => state.products.filteredProducts);
  const error = useSelector((state) => state.products.error);
  const { type } = useParams();
  const genderButtons = ["Erkek", "Kadın"];
  const colorButtons = [
    "red",
    "green",
    "purple",
    "yellow",
    "orange",
    "blue",
    "black",
    "brown",
  ];
  const sizeButtons = ["S", "M", "L", "XL"];
  const dispatch = useDispatch();

  return (
    <div className="pt-16">
      <div className="pl-14">
        <h1 className="text-gray-600 text-4xl font-inter font-bold tracking-normal leading-none">
          {type}
        </h1>
        <div className="flex items-center justify-between py-8">
          <div className="flex items-center">
            {genderButtons.map((item, index) => (
              <div key={index} className="mr-4">
                <Button
                  color="gray"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="text-black hover:bg-gray-300 duration-300 ease-in-out"
                  onClick={() => dispatch(filterGender(item))}
                >
                  {item}
                </Button>
              </div>
            ))}
            <Button
              color="gray"
              size="lg"
              variant="outlined"
              ripple={true}
              className="text-black hover:bg-gray-300 duration-300 ease-in-out mr-4"
              onClick={() => dispatch(sortByPrice())}
            >
             Yüksek Ücret
            </Button>
            <Menu>
              <MenuHandler>
                <Button
                  color="gray"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="text-black hover:bg-gray-300 duration-300 ease-in-out"
                >
                  Bir renk seçin
                </Button>
              </MenuHandler>
              <MenuList>
                {colorButtons.map((item, index) => (
                  <MenuItem
                    style={{ color: item }}
                    key={index}
                    onClick={() => dispatch(filterByColor(item))}
                  >
                    {item}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
            <Menu>
              <MenuHandler>
                <Button
                  disabled={type === "Çantalar" || type === "Ayakkabılar"}
                  color="gray"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="text-black mx-3 hover:bg-gray-300 duration-300 ease-in-out"
                >
                  Bir beden seçin
                </Button>
              </MenuHandler>
              <MenuList>
                {sizeButtons.map((item, index) => (
                  <MenuItem
                    key={index}
                    onClick={() => dispatch(filterBySize(item))}
                  >
                    {item}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </div>
          <div className="pr-14">
            <Button
              color="gray"
              size="lg"
              variant="outlined"
              ripple={true}
              className="text-black hover:bg-gray-300 duration-300 ease-in-out"
              onClick={() => dispatch(filterProducts(type))}
            >
              Filtreyi Temizleyin
            </Button>
          </div>
        </div>
      </div>
      {error ? (
        <Error />
      ) : (
        <div className="grid grid-cols-4 justify-items-center py-8 gap-12">
          {products
            .filter((product) => product.type === type)
            .map((product, index) => (
              <div key={index} className="">
                <ProductCard
                  id={product.id}
                  name={product.name}
                  text={product.text}
                  img={product.img}
                  price={product.price}
                  colors={product.color}
                />
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default FilteredProducts;
