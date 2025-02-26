import { useState } from "react";

type Alarm = {
    id: string;
    time: string;
    label: string;
    isOn: boolean;
};

const initialAlarms: Alarm[] = [
    { id: crypto.randomUUID(), time: "07:00 AM", label: "Despertar", isOn: true },
    { id: crypto.randomUUID(), time: "08:30 AM", label: "Reunión", isOn: false },
    { id: crypto.randomUUID(), time: "10:00 AM", label: "Ejercicio", isOn: true },
];

export default function AlarmView() {
    const [alarms, setAlarms] = useState<Alarm[]>(initialAlarms);

    const toggleAlarm = (id: string) => {
        setAlarms((prev) =>
            prev.map((alarm) =>
                alarm.id === id ? { ...alarm, isOn: !alarm.isOn } : alarm
            )
        );
    };

    const deleteAlarm = (id: string) => {
        setAlarms((prev) => prev.filter((alarm) => alarm.id !== id));
    };

    return (
        <div className="min-h-screen bg-gray-900 p-4">
            <h1 className="text-3xl font-bold mb-4">Alarms</h1>
            <ul className="space-y-4">
                {alarms.map((alarm) => (
                    <li key={alarm.id} className="flex items-center justify-between p-4 bg-gray-800 rounded-lg">
                        <div>
                            <p className={`text-2xl ${alarm.isOn ? "text-blue" : "text-gray-500"}`}>{alarm.time}</p>
                            <p className={`${alarm.isOn ? "text-blue" : "text-gray-500"}`}>{alarm.label}</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <button onClick={() => toggleAlarm(alarm.id)} className="text-xl">
                                {alarm.isOn ? "🔔" : "🔕"}
                            </button>
                            <button onClick={() => deleteAlarm(alarm.id)} className="text-red-500">
                                🗑️
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
