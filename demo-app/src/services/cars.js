const baseUrl = 'http://localhost:3050/cars';

const getCollectionURL = () => baseUrl;

const getElementURL = carId => 
    `${getCollectionURL()}/${encodeURIComponent(carId)}`;


export const getAllCars = async () => {

    const res = await fetch(getCollectionURL());
    const cars = await res.json();
    //return cars;

    //slowing down the response to mimic slow network behavior :)
    return new Promise(resolve => 
        setTimeout(() => 
            resolve(cars), 1000));
        
};

export const createCar = async (car) => {
    const res = await fetch(getCollectionURL(), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car),
    });
    const savedCar = await res.json();
    return savedCar;
};

export const replaceCar = async (car) => {
    const res = await fetch(getElementURL(car.id), {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(car),
    });
    const savedCar = await res.json();
    return savedCar;
};

export const deleteCar = async (carId) => {
    await fetch(getElementURL(carId), {
        method: 'DELETE'
    });

}