import React from 'react';

type CombinedContextType = {
  user: any;
  match: any;
  myMatches:any;
  setUser: any;
  setMatch: any;
  setMyMatches: any;
};

export const CombinedContext = React.createContext<CombinedContextType | undefined>(undefined);