"use client";

import { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

export function GlobalProvider({ children }) {
    const [timeline, setTimeline] = useState([]);

    // ADD CALL / TEXT / VIDEO
    const addTimeline = (type, friendName) => {
        const newEntry = {
            id: Date.now(),
            type,
            title: `${type} with ${friendName}`,
            date: new Date().toLocaleString(),
        };

        setTimeline((prev) => [newEntry, ...prev]);
    };

    return (
        <GlobalContext.Provider value={{ timeline, addTimeline }}>
            {children}
        </GlobalContext.Provider>
    );
}

// custom hook
export const useGlobal = () => useContext(GlobalContext);