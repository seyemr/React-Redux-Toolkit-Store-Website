import React, { useState } from "react";
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
} from "@material-tailwind/react";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { login } from "../../features/slices/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
    const initialState = {
        name: "",
        password: "",
        image: "",
    };
    const [values, setValues] = useState(initialState);

    const onChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
    };

    const dispatch = useDispatch();

    return (
        <div className="grid grid-cols-1 items-center  justify-items-center h-screen">
            <Card className="w-96  ">
                <CardHeader
                    color="blue"
                    className="mb-4 grid bg-blue-600 rounded-lg h-28 place-items-center"
                >
                    <Typography size="h-3" color="white">
                        Giriş Yap
                    </Typography>
                </CardHeader>
                <CardBody className="flex flex-col gap-7">
                    <Input
                        className=""
                        label="Name"
                        size="lg"
                        type="text"
                        name="name"
                        value={values.name}
                        onChange={onChange}
                    />
                    <Input
                        label="Password"
                        size="lg"
                        type="password"
                        name="password"
                        value={values.password}
                        onChange={onChange}
                    />
                    <Input
                        label="Image URL address"
                        size="lg"
                        type="text"
                        name="image"
                        value={values.image}
                        onChange={onChange}
                    />
                </CardBody>
                <CardFooter className="pt-7 cursor-pointer grid justify-center">
                    <Button
                        className="border to-blue-700 btn bg-blue-600 hover:to-blue-800"
                        color="blue"
                        onClick={() => dispatch(login(values))}
                        block
                    >
                        Giriş Yap
                    </Button>
                    <Typography size="sm" className="mt-6 flex justify-center">
                        Resim İsteğe Bağlıdır
                    </Typography>
                </CardFooter>
            </Card>
        </div>
    );
};

export default Login;
