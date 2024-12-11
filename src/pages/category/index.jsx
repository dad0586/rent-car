import React, { useEffect, useState } from 'react'
import CarCard from '../../components/card';
import useFetch from '../../hooks/fetch';


const Category = () => {

    const url = `http://localhost:3000/products`
    const { data, loading, error } = useFetch(url);

    if (loading) return <p>Yuklanmoqda...</p>;
    if (error) return <p>Xatolik: {error}</p>;

    return (
        <>
            <div className="container">
                <div className="header">
                    <div>

                        {
                            data?.map((item, key) => (
                                <CarCard car={item} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Category;