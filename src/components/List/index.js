import React, { useRef, useState } from 'react'
import { Checkbox, InputAdornment, TextField } from '@material-ui/core'
import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import styles from './styles.module.scss'
import { addToDo, deleteToDo, markStateToDo, updateToDo } from '../../actions'
import { useDispatch } from 'react-redux'
import WrappedEditable from '../../utils/WrappedEditable'
import FlipMove from 'react-flip-move';

const List = ({checkedToDoList=[],uncheckedToDoList=[]}) => {
    const [newItem, setnewItem] = useState('')
    const dispatch = useDispatch()
    const text = useRef('');


    const handleChange = (event) => {
        setnewItem(event.target.value);
    };

    const handleCheckbox = (event, el) => {
        dispatch(markStateToDo({
            ...el,
            completed_at: event.target.checked ? new Date().toISOString() : null
        }))
    };

    const AddItem = (event) => {
        const item = (event.target.value || '').trim();
        if (item.length > 1) {
            dispatch(addToDo(item))
            setnewItem('')
        }
    }

    const RemoveItem = (element,index) => {
        dispatch(deleteToDo(element.id))
    }

    const updateItem = (e,el) => {
        const item = (text.current || '').trim();
        console.log('disp', item);

        if (item.length > 1) {
            dispatch(updateToDo({
                ...el,
                description: item
            }))
        }
    }

    const ListRender = ({el,index,checked}) => {
        return (<>
            <Checkbox
                checked={Boolean(el.completed_at)}
                onChange={e => handleCheckbox(e, el)}
                inputProps={{ 'aria-label': 'primary checkbox' }}
            />
            {checked ?
                <strike className={styles.Edit} style={{color:'#828282'}}>{el.description}</strike>
                :
                <WrappedEditable 
                    className={styles.Edit}
                    html={el.description}
                    onFocus={e => text.current = el.description}
                    onBlur={e => updateItem(e,el)}
                    onChange={e => text.current = e.target.value} 
                    onKeyDown={(ev) => {
                        if (ev.key === 'Enter') {
                        ev.preventDefault()
                        updateItem(ev,el)
                        }
                    }} />
            }
            <span 
            className={styles.Delete} 
            onClick={e => RemoveItem(el,index)} >
            <DeleteIcon />
            </span>
            </>)
    }

    return (
        <div className={styles.Container}>
            <TextField 
            fullWidth
            color="secondary" 
            placeholder={'Add to list'} 
            value={newItem} 
            onChange={handleChange} 
            InputProps={{
                startAdornment: <InputAdornment position="start">
                    <AddIcon style={{color: '#EB5757'}} />
                </InputAdornment>,
              }}
            onKeyDown={(ev) => {
                if (ev.key === 'Enter') {
                  ev.preventDefault()
                  AddItem(ev)
                }
              }}
            />
            <div>
            <FlipMove>
                {uncheckedToDoList.map((el,index) => (
                    <div key={el.id} className={styles.Item}>
                        <ListRender el={el} inedx={index} checked={false}></ListRender>
                    </div>
                ))}
            </FlipMove>
            <FlipMove>
                {checkedToDoList.map((el,index) => (
                    <div key={el.id} className={styles.Item}>
                        <ListRender el={el} inedx={index} checked={true}></ListRender>
                    </div>
                ))}
            </FlipMove>
            </div>
        </div>
    )
}

export default List
