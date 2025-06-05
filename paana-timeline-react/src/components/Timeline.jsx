import React, { useEffect, useState } from 'react';

function Timeline() {
  const [events, setEvents] = useState({});

  useEffect(() => {
    fetch('/explorer.json')
      .then(res => res.json())
      .then(setEvents)
      .catch(console.error);
  }, []);

  return (
    <div className="space-y-6">
      {Object.keys(events).sort().map(year => (
        <div key={year}>
          <h2 className="text-xl font-bold text-blue-700">{year}</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
            {events[year].map((ev, idx) => (
              <li key={idx} className="bg-white p-4 rounded shadow border border-gray-200">
                <h3 className="font-semibold">{ev.name}</h3>
                <p className="text-sm text-gray-700">{ev.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Timeline;