import React from "react";
import propTypes from "prop-types";

class Burger extends React.Component {

    static propTypes = {
        details: propTypes.shape({
            image: propTypes.string,
            name: propTypes.string, 
            price: propTypes.number, 
            desc: propTypes.string, 
            status: propTypes.string
        }),
        index: propTypes.string,
        addToOrder: propTypes.func,
    }


    handleClick = () => {
        this.props.addToOrder(this.props.index);
    };

    render() {
        const {image, name, price, desc, status} = this.props.details;
        const isAvailable = status === 'available';

        return (
            <li className="menu-burger">
                <div className="image-container">
                    <img src={image} alt={name} />
                </div>

                <div className="burger-details">
                    <h3 className="burger-name">
                        {name}
                        <span className="price">{price} ₽</span>
                    </h3>
                    <p>{desc}</p>
                    <button 
                    className="buttonOrder" 
                    disabled={!isAvailable}
                    onClick={() => this.props.addToOrder(this.props.index)}>
                        {isAvailable ? 'Заказать' : 'Временно нет'}
                    </button>
                </div>
            </li>
        );
    };
};

export default Burger;