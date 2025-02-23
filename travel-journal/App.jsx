import Header from "./components/Header";
import Entry from "./components/Entry";

import entries from "./data";

export default function App() {
  const entryElements = entries.map((entry) => {
    return <Entry key={entry.id} entry={entry} />;
  });

  return (
    <>
      <Header />
      <main className="container">{entryElements}</main>
    </>
  );
}
