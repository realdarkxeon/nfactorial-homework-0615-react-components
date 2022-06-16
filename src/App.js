//импортируем стили
import "./App.css";

import { useState } from "react";
import { Content } from "./components/content";
import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { DefaultContext } from "./context";

export default function App() {

  const [fan, setFan] = useState("");

  const handleCreateFan = ({name}) => {
      setFan(name);
  };

  const [selector, setSelector] = useState("Characters");

  const handleSelectorChange = (event) => {
      setSelector(event.target.value);
  };

  return (
    <DefaultContext.Provider value={{selector, handleSelectorChange, fan, handleCreateFan}}>
      <Header />
      <hr />
      <Content />
      <Footer />
    </DefaultContext.Provider>
  );
}
