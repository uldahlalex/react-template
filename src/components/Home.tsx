import {useEffect, useState} from "react";
import {useAtom} from "jotai";
import {Product, Root} from "../models/DummyJsonAPI.ts";
import {useNavigate} from "react-router-dom";

export default function Home() {

    const [products, setProducts] = useState<Product[]>([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(response => response.json())
            .then((data: Root) => {
                if (data.products && data.products.length > 1)
                    setProducts(data.products as any[])
            })
    },[])

    return (
        <div>
            <h1 className="menu-title text-5xl m-5">The react template</h1>
            <p className="font-bold">This is a template for a react project with Jotai, Typescript, DaisyUI, Vite (& more)</p>

            <h1 className="menu-title mt-10 flex">Products from an API</h1>
            {
                products.length > 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {products.map(product => (
                        <div onClick={e => navigate('/products/'+product.id)} key={product.id} className="card bordered">
                            <div className="card-body">
                                <h2 className="card-title">{product.title}</h2>
                                <p className="text-lg">${product.price}</p>
                            </div>
                        </div>
                    ))}
                </div>

            )
            }

        </div>
    );
}