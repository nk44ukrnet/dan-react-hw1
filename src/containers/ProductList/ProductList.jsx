import Container from "../Container/Container.jsx";
import './ProductList.scss';

export default function ProductList({children}) {

    return (
        <Container>
            <div className="product-list">
                {children}
            </div>
        </Container>
    );
};