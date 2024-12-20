import React, { useEffect, useState } from 'react'
import CarCard from '../../components/card';
import useFetch from '../../hooks/fetch';
import "./main.scss"


const Category = () => {

    const url = `http://localhost:3000/products`
    const { data, loading, error } = useFetch(url);

    if (loading) return <p>Yuklanmoqda...</p>;
    if (error) return <p>Xatolik:" {error}</p>;

    return (
        <>
            <div className="container">
                <div className='category'>
                    {
                        data?.slice(0, 8).map((item, key) => (
                            <CarCard car={item} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Category;