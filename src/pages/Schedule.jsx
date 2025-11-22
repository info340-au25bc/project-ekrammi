import { Link } from "react-router-dom";
const pilatesSchedule = [
    {id: 1, day: "Monday", time: "9:00 AM", type: "Matt"},
    {id: 2, day: "Tuesday", time: "11:00 AM", type: "Reformer"},
    {id: 3, day: "Wednsday", time: "9:00 AM", type: "Matt"},
    {id: 4, day: "Thursday", time: "5:00 PM", type: "Reformer"},
    {id: 5, day: "Friday", time: "6:00 PM", type: "Reformer"},
    {id: 6, day: "Saturday", time: "8:00 AM", type: "Reformer"},
    {id: 7, day: "Sunday", time: "10:00 AM", type: "Matt"},
    {id: 8, day: "Monday", time: "12:00 PM", type: "Reformer"},
    {id: 9, day: "Tuesday", time: "9:00 AM", type: "Matt"},
    {id: 10, day: "Wednsday", time: "8:00 AM", type: "Matt"}

]
export default function Schedule(){
    return(
        <div>
            <section>
                <h1> CoreLab Schedule </h1>
                <h2> CoreLab Instructors </h2>
                <ul>
                {pilatesSchedule.map((scheduleClass) => (
                    <li key={scheduleClass.id}>
                        <strong>{scheduleClass.day}</strong> = {scheduleClass.time} ({scheduleClass.type}) 
                   </li>
                ))}
            </ul>
            </section>
        </div>
    );
}