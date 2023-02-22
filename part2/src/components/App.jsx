import React from "react";
import notes from "../notes";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";

function App() {
  return (
    <div>
    <Header />
    {notes.map(x => ( <Note 
        key = {x.key}
        title = {x.title}
        content = {x.content}
     />
     ))}
    <Footer />
    </div>
  );
}

export default App;
