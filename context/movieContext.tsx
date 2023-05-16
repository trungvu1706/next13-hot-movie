'use client'

import { Movie } from '@/interface'
import React, { Dispatch, createContext, useReducer } from 'react'

type StateType = {
  searchText: string | null
}

type ActionType = {
  type: string
}

const initialState: StateType = {
  searchText: null,
}

const reducer = (state: StateType, action: ActionType) => {
  console.log('this is state', state, action)
  switch (action.type) {
    case 'SET_DATA':
      return { ...state, searchText: state.searchText }

    default:
      return state
  }
}

export const MovieContext = createContext<{
  state: StateType
  dispatch: Dispatch<ActionType>
}>({ state: initialState, dispatch: () => null })

export const MovieContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <MovieContext.Provider value={{ state, dispatch }}>
      {children}
    </MovieContext.Provider>
  )
}
