import { useState } from 'react';

const pilatesSchedule = [
    {id: 1, day: "Monday", time: "9:00 AM", type: "Matt"},
    {id: 2, day: "Tuesday", time: "11:00 AM", type: "Matt"},
    {id: 3, day: "Wednsday", time: "9:00 AM", type: "Matt"},
    {id: 4, day: "Thursday", time: "5:00 PM", type: "Matt"},
    {id: 5, day: "Friday", time: "6:00 PM", type: "Matt"},
    {id: 6, day: "Saturday", time: "8:00 AM", type: "Matt"},
    {id: 7, day: "Sunday", time: "10:00 AM", type: "Matt"},
    {id: 8, day: "Monday", time: "12:00 PM", type: "Matt"},
    {id: 9, day: "Tuesday", time: "9:00 AM", type: "Matt"},
    {id: 10, day: "Wednsday", time: "8:00 AM", type: "Matt"}

]

export default function Schedule(){
    return (
        <section>
            <h1> CoreLab Class Schedule </h1>
            <ul>
                {pilatesSchedule.map((cls) => (
                    <li key={scheduleClass.id}>
                        <strong>{scheduleClass.day}</strong> = {scheduleClass.time} ({scheduleClass.type}) 
                   </li>
                ))}
            </ul>
        </section>
    );
}