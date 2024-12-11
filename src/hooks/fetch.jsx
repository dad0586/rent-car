import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [data, setData] = useState(null); // Ma'lumotlarni saqlash
    const [loading, setLoading] = useState(true); // Yuklanish holati
    const [error, setError] = useState(null); // Xatolik holati

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true); // Yuklanish boshlanadi
                const response = await axios.get(url); // API chaqiruvi
                setData(response.data); // Ma'lumotlarni saqlash
            } catch (err) {
                setError(err.message); // Xatolikni boshqarish
            } finally {
                setLoading(false); // Yuklanish tugadi
            }
        };

        fetchData();
    }, [url]); // url o'zgarganda effektni qayta bajarish

    return { data, loading, error }; // Hook natijalarini qaytarish
};

export default useFetch;
