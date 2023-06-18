"use client";

import React, { Dispatch, createContext, useReducer } from "react";

type StateType = {
  visible: boolean;
};

type ActionType = {
  type: string;
};

const initialState: StateType = {
  visible: false,
};

const reducer = (state: StateType, action: ActionType) => {
  switch (action.type) {
    case "TOGGLE":
      return { ...state, visible: !state.visible };
    default:
      return state;
  }
};

export const MenuContext = createContext<{
  state: StateType;
  dispatch: Dispatch<ActionType>;
}>({ state: initialState, dispatch: () => null });

export const MenuContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MenuContext.Provider value={{ state, dispatch }}>
      {children}
    </MenuContext.Provider>
  );
};
