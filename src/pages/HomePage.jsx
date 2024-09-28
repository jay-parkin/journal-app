import EntryForm from "../components/EntryForm";
import LatestPage from "./LastestPage";

export default function HomePage() {
  return (
    <>
      <h1>Journal Home Page</h1>
      {/* New post form: */}
      <EntryForm />

      {/* Latest X amount of posts: */}
      <LatestPage limit={3} />
    </>
  );
}
