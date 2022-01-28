import React from 'react';
import { useState } from 'react';
import * as C from './App.styles';
import {Item} from './types/item';
import {ListItem} from './components/listItem'
import {AddArea} from './components/addArea'

const App = () =>{
  const[list,setlist] = useState<Item[]>([
    {
        id: 1, 
        name: 'Aulas de NextJs com o Josimar',
        done: false
    },
    {
      id: 2, 
      name: 'Aulas de ReactJs',
      done: true
    },
    {
    id: 3, 
    name: 'Ler "Javascript Orientado ao Objeto"',
    done: false
  },
  ]);

  const handleAddTask = (taskName:string) =>{
    let newList = [...list];
    newList.push({
      id: list.length+1,
      name: taskName,
      done: false,
    });
   setlist(newList);
  }
  return (
    <C.Container>
      <C.area>
        <C.Header>Lista de Tarefas</C.Header>

        <AddArea onEnter={handleAddTask}/>

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </C.area>
    </C.Container>
  );

}

export default App;
