import * as React from "react";

type Action = { type: "toggle" } | { type: "open" } | { type: "close" };
type Dispatch = (action: Action) => void;
type State = { isOpen: boolean };
type DrawerProviderProps = { children: React.ReactNode };

const DrawerContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const drawerReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "toggle": {
      return { isOpen: !state.isOpen };
    }
    case "open": {
      return { isOpen: true };
    }
    case "close": {
      return { isOpen: false };
    }
  }
};

const DrawerProvider = ({ children }: DrawerProviderProps) => {
  const [state, dispatch] = React.useReducer(drawerReducer, { isOpen: false });

  const value = { state, dispatch };
  return (
    <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
  );
};

const useDrawer = () => {
  const context = React.useContext(DrawerContext);
  if (context === undefined) {
    throw new Error("useCount must be used within a DrawerProvider");
  }
  return context;
};

export { DrawerProvider, useDrawer };
