import * as React from "react";

type Action = { type: "toggle" } | { type: "open" } | { type: "close" };
type Dispatch = (action: Action) => void;
type State = { isOpen: boolean };
type DialogProviderProps = { children: React.ReactNode };

const DialogContext = React.createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

const dialogReducer = (state: State, action: Action) => {
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

const DialogProvider = ({ children }: DialogProviderProps) => {
  const [state, dispatch] = React.useReducer(dialogReducer, { isOpen: false });

  const value = { state, dispatch };
  return (
    <DialogContext.Provider value={value}>{children}</DialogContext.Provider>
  );
};

const useDialog = () => {
  const context = React.useContext(DialogContext);
  if (context === undefined) {
    throw new Error("useDialog must be used within a DialogProvider");
  }
  return context;
};

export { DialogProvider, useDialog };
