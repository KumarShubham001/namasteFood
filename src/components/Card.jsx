const Card = () => {
    return (
        <div className="card restro-item-card">
            <div className="card-image">
                <div className="img" style={{backgroundImage: 'url("https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/4fe8d129-44fd-469e-9eda-a1416a6dffcd_36014.JPG")'}} ></div>
            </div>
            <div className="card-contents">
                <h2 className="card-title restro-name">Chinese Wok</h2>
                <span className="card-content restro-rating">4✨</span>
                <h4 className="card-subtitle restro-cuisine">Chinese, Asian</h4>
                <span className="card-content restro-location">Pune</span>
            </div>
        </div>
    )
}

export default Card;