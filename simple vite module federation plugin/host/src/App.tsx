import { lazy, Suspense } from "react";
// @ts-ignore
import RemoteApp from "remote/RemoteApp";
import "./App.css";

// @ts-ignore
const RemoteButton = lazy(async () => import("remote/RemoteButton"));

function App() {
  return (
    <>
      <h1>Host Vite + React</h1>
      <hr />
      <h2>Whole Remote application</h2>
      <RemoteApp />
      <hr />
      <Suspense fallback={<p>Loading Remote button ...</p>}>
        <RemoteButton />
      </Suspense>
    </>
  );
}

export default App;
