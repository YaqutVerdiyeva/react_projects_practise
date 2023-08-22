import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(false);
  const [modal, setModal] = useState(false);

  const openSideBar = () => {
    setSideBar(true);
    console.log(sideBar);
  };
  const closeSideBar = () => {
    setSideBar(false);
  };
  const openModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <AppContext.Provider
      value={{
        sideBar,
        modal,
        openModal,
        closeModal,
        openSideBar,
        closeSideBar,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppContext, AppProvider };
