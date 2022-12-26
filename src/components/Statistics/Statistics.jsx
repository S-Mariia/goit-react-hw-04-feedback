import PropTypes from 'prop-types';
import { List, Item, Wrap } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (<>
        <List>
        <Item>Good: <Wrap>{good}</Wrap></Item>
        <Item>Neutral: <Wrap>{neutral}</Wrap></Item>
        <Item>Bad: <Wrap>{bad}</Wrap></Item>
        <Item>Total: <Wrap>{total}</Wrap></Item>
        <Item>Positive feedback: <Wrap>{positivePercentage}%</Wrap></Item>
        </List>
    </>);
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired,
}
