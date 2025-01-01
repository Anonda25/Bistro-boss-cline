
const FoodCard = ({items}) => {
    const { name, price, image, recipe } = items;
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure>
                <img
                    src={image}
                    alt="Shoes" />
            </figure>
            <p className="absolute bg-slate-900 text-white right-6 px-4">${price}</p>
            <div className="card-body flex flex-col items-center">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-outline border-0 border-orange-500 hover:text-orange-500  bg-slate-200 border-b-4 mt-4">Add to Card </button>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;