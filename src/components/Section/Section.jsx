import PropTypes from 'prop-types';
import { StyledSection, Title } from './Section.styled';

export const Section = ({ title, children }) => {
    return (<StyledSection>
        <div>
        {title && <Title>{title}</Title>}
        {children}
        </div>
    </StyledSection>)
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}
