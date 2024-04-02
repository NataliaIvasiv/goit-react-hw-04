import css from './Feedback.module.css'
const Feedback = ({ clicks , positivePercent}) => {

    return (
        <div>
            <p className={css.feedbackItem}>Good: {clicks.good}</p>
            <p className={css.feedbackItem}>Neutral: {clicks.neutral}</p>
            <p className={css.feedbackItem}>Bad: {clicks.bad}</p>
            <p className={css.feedbackItem}>Positive: {positivePercent}%</p>
            
        </div>
    )
}
export default Feedback;