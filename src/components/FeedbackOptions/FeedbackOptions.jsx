import PropTypes from 'prop-types';
import { IconContext } from "react-icons";
import { BsEmojiSmile, BsEmojiNeutral, BsEmojiFrown } from "react-icons/bs";
import { Button, Container } from './FeedbackOptions.styled';

const listOfIcons = [<BsEmojiSmile/>, <BsEmojiNeutral/>, <BsEmojiFrown/>];

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Container>
            {options.map((option, idx) => <Button key={idx} type="button" onClick={() => onLeaveFeedback(option)}><IconContext.Provider value={{
                size: 20 }}>{listOfIcons[idx]}</IconContext.Provider>{option}</Button>)}
        </Container>)    
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
}