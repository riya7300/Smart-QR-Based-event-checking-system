import axios from "axios";
import {useEffect, useState} from "react";

function Dashboard(){

    const [events,setEvents] = useState([]);
    const [name,setName] = useState("");

    const token =
        localStorage.getItem("token");

    useEffect(()=>{
        fetchEvents();
    },[]);

    const fetchEvents = async()=>{

        const res =
            await axios.get(
                "http://localhost:5000/events"
            );

        setEvents(res.data);
    };

    const createEvent = async()=>{

        await axios.post(
            "http://localhost:5000/events",
            {name},
            {
                headers:{authorization:token}
            }
        );

        fetchEvents();
    };

    return(
        <div>

            <h2>Dashboard</h2>

            <input
                placeholder="Event Name"
                onChange={e=>setName(e.target.value)}
            />

            <button onClick={createEvent}>
                Create Event
            </button>

            <ul>
                {events.map(e=>(
                    <li key={e._id}>
                        {e.name}
                    </li>
                ))}
            </ul>

            <a href="/scanner">
                Open Scanner
            </a>

        </div>
    );
}

export default Dashboard;
