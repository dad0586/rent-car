import { useParams } from "react-router-dom";
import useFetch from "../../hooks/fetch";
import { Rate } from "antd";



const CarDetails = () => {
    const { id } = useParams;
    const { data: car, loading, error } = useFetch(`http://localhost:3000/products/${id}`);
    if (loading) return <p> Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <>
            <div className="car-details">
                <h1>{car?.name}</h1>
                <img src={car?.image} alt={car?.name} />
                <p>Price: {car?.price}$/day</p>
                <p>Fuel: 90L</p>
                <p>Transmission: Manual</p>
                <p>Seats: 2 People</p>
                <Rate allowHalf disabled value={car?.rating} />
            </div>
        </>
    )
}
export default CarDetails;