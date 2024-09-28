import { createContext, useContext, useState } from "react";

// Create the context
// 		SomeContextVariable = createContext(defaultValue);
const JournalEntriesContext = createContext([]);
const JournalEntriesSetterContext = createContext(null);

// function SomeExample(){
// 	const journalData = useContext(JournalEntriesContext);
// }

// Create custom hooks to access the context data
export function useJournalEntriesSetter() {
  return useContext(JournalEntriesSetterContext);
}

export function useJournalEntriesData() {
  console.log("Passing data around!");

  let currentJournalData = useContext(JournalEntriesContext);
  if (currentJournalData == 0) {
    console.log("No Entries to show!");
  }

  return useContext(JournalEntriesContext);
}

// Create the context provider

export default function JournalEntriesProvider(props) {
  let [journalEntries, setJournalEntries] = useState([]);
  return (
    // content being shared with all childs
    // <JournalEntriesContext.Provider value={[journalEntries, setJournalEntries]}>
    <JournalEntriesContext.Provider value={[journalEntries, setJournalEntries]}>
      {/* { let [journalEntries, setJournalEntries] = useJournalEntriesData() } */}
      <JournalEntriesSetterContext.Provider
        value={setJournalEntries}
      ></JournalEntriesSetterContext.Provider>
      {props.children}
    </JournalEntriesContext.Provider>
  );
}
