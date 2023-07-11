import React, { useContext } from 'react'
import { Provider } from 'react-redux'; 
import { store } from './redux/store';
import NavigationScreens from './NavigationScreens';
import { ListContext } from './context/TodoListContext';

export default function App() {
  const list = useContext(ListContext)
  return (
    <ListContext.Provider value={list}>
      <Provider store={store}>
        <NavigationScreens/>
      </Provider>
    </ListContext.Provider>
  )
}