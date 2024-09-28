import { useEffect, useState } from "react";
import JournalEntriesProvider, {
  useJournalEntriesData,
} from "../context/EntriesContext";

export default function LatestXPosts({ limit }) {
  let journalEntries = useJournalEntriesData();

  let [sortedAndTrimmedPostList, setProcessedPostList] = useState([]);

  useEffect(() => {
    // Detect and changes to the context data of journal entries
    // And process the context data into a sorted trimmed post list
    let tempListCopy = [...journalEntries];

    tempListCopy.sort[
      (a, b) => {
        if (a.lastEdited < b.lastEdited) {
          return 1;
        } else if (a.lastEdited > b.lastEdited) {
          return -1;
        } else {
          return 0;
        }
      }
    ];

    if (limit && limit > 0 && tempListCopy > limit) {
      // cuts the array down to the size if its already above that size
      tempListCopy.length = limit;
    }

    setProcessedPostList(tempListCopy);
  }, [journalEntries]);

  return (
    <>
      {sortedAndTrimmedPostList.map((entry) => {
        return <JournalEntriesContainer key={entry.id} entryId={entry.id} />;
      })}
    </>
  );
}
