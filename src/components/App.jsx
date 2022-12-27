import { useState } from 'react';
import { Notification } from 'components/Notification/Notification';
import { Statistics } from 'components/Statistics/Statistics';
import { FeedbackOptions } from 'components/FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

const options = ["good", "neutral", "bad"];

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const total = good + neutral + bad;
  const positiveFeedbackPercenntage = Math.floor((good * 100) / total) || 0;

   const updateFeedback = type => {
     switch (type) {
       case "good":
         setGood(prevState => prevState + 1);
         break;
       case "neutral":
         setNeutral(prevState => prevState + 1);
         break;
       case "bad":
         setBad(prevState => prevState + 1);
         break;
       default:
         console.log('Sorry, this type is not processed');
    }
  };

  return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={updateFeedback}
          />
        </Section>
        <Section title="Statistics">
          {total > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedbackPercenntage}
            />
          ) : (
            <Notification message={'There is no feedback'} />
          )}
        </Section>
      </>
    );
}
