import './Heading.scss';
import Container from "../../containers/Container/Container.jsx";

export default function Heading({children}) {
    return (
        <Container>
            <h2 className="heading-pseudo">
                {children}
            </h2>
        </Container>
    );
};