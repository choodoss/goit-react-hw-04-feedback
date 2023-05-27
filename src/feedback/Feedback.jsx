import { useState } from 'react';
import { FeadbackSection } from './Feedback.styled';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistic from './Statistic/Statistic';
import Section from './Section/Section';
import Notification from './Notification/Notification';


export default function Feedback() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleStat = ({ currentTarget: { name } }) => {
        if (name === 'good') setGood(state => state + 1);
        if (name === 'neutral') setNeutral(state => state + 1);
        if (name === 'bad') setBad(state => state + 1);
    };

    const totalFeedback = good + neutral + bad;
    const positiveFeedback = Math.floor((good / totalFeedback) * 100);

    return (
        <FeadbackSection>
            <Section title="Please leave feedback" />
            <FeedbackOptions options={{ good, neutral, bad }} onLeaveFeedback={handleStat} />
            <Section />
            <Section title="Statistics" />
            {totalFeedback ? (
                <>
                    <Statistic good={good} neutral={neutral} bad={bad} total={totalFeedback} positivePercentage={positiveFeedback} />
                </>
            ) : (
                <Notification message="There is no feedback" />
            )}
            <Section />
        </FeadbackSection>
    );
}