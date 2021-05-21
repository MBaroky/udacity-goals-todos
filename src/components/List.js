import React from 'react'

const List = (props) =>{
    return (
        <ul>
           { props.list.map(item => (
               <li
               key={item.id}>
               <span
               style={{
                   textDecoration : item.complete? 'line-through' : 'none'
               }}
               onClick={()=>props.toggle && props.toggle(item.id)}>{item.name}</span>
               <button
               onClick={()=>props.remove(item)}>
                X
                </button>
               </li>
            )) }
        </ul>
    )
}

export default List