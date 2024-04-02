import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";
import { useState, useEffect } from "react";
import css from './App.module.css'
const App = () => {
    const [clicks, setClicks] = useState(()=>{
    const savedClicks = JSON.parse(localStorage.getItem("saved-clicks"));
    if (savedClicks !== null) {
      return savedClicks;
    }
    return(
        {good: 0,
	neutral: 0,
	bad: 0,
    })
    });

    useEffect(() => {
    localStorage.setItem("saved-clicks", JSON.stringify(clicks));
    }, [clicks]);
    
    const updateFeedback = feedbackType  => {
        setClicks({
            ...clicks,
            [feedbackType ]: clicks[feedbackType] + 1,
        });

    }
     const resetFunction = ()  => {
         setClicks({ good: 0,
	neutral: 0,
	bad: 0,})

    }
    

    const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
    const positivePercent = Math.round((clicks.good / totalFeedback) * 100);

    return (
        <div className={css.container}>
        <Description />
            <Options
                resetFunction={resetFunction}
                updateFeedback={updateFeedback}
                clicks={clicks}
                totalFeedback={totalFeedback}
                
            />
            {totalFeedback ? <Feedback
                clicks={clicks}
                totalFeedback={totalFeedback}
                positivePercent={positivePercent}
            /> : <Notification />
                
        }
                 
        </div>
        
    )
}

export default App;