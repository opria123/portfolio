import React from "react";

export interface Context {
  showModal?: boolean,
}

/**
 * Application state interface
 */
export interface AppState {
  context?: Context;
  updateState: (newState: Partial<AppState>) => void;
}

/**
 * Default application state
 */
const defaultState: AppState = {
  context: {showModal: false},
  updateState: (newState?: Partial<AppState>) => {},
};

/**
 * Creating the Application state context for the provider
 */
export const Context = React.createContext<AppState>(defaultState);