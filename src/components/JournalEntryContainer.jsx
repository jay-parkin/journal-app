import { useEffect, useState } from "react";
import { useJournalEntriesData } from "../context/EntriesContext";
import EntryForm from "./EntryForm";
import ViewEntry from "./ViewEntry";

export default function JournalEntryContainer({ entryId }) {
  let [isEditing, setIsEditing] = useState(false);
  let journalEntriesData = useJournalEntriesData();

  let [currentJournalEntry, setCurrentJournalEntry] = useState();

  useEffect(() => {
    // on componentDidMount, retrieve journal entry with id of {entryId}
    // form {journalEntryData}
    // and set that into {currentJournalEntry}
    let currentEntry = journalEntriesData.find((entry) => entry.id == entryId);
    setCurrentJournalEntry(currentEntry);
  }, []);

  if (isEditing) {
    return (
      <>
        <EntryForm entryId={currentJournalEntry.id} />;
        <button onClick={() => setIsEditing(false)}>Finish Editing</button>
      </>
    );
  } else {
    return (
      <>
        <ViewEntry journalEntry={currentJournalEntry} />;
        <button onClick={() => setIsEditing(false)}>Finish Editing</button>
      </>
    );
  }
}
