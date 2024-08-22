import CardContainer from "../Card-container";
import Search from "../Search";

const AppContent = () => {
    return (
        <div className="app-body">
            <Search />
            <div className="restaurant-cards">
                <h1 className="title">Top restaurants chain in pune:</h1>
                <CardContainer />
            </div>
        </div>
    );
};

export default AppContent;
