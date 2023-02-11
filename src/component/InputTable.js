import React, {useState} from 'react'
import "./InputTable.css"

const bookOb ={
    title:'',
    author:'',
    isbn:'',
}

function InputTable() {
 
    const [modal,setmodal] =useState(bookOb)
    const [bookList,setBookList] =useState([])

    const changeHandler =(e) => {
        const value= e.target.value
        setmodal(modal => ({
            ...modal,
            [e.target.name]:value
        }))
    }
    

    const addbook=() => {
        let listItems=bookList;

        const item ={
            id:bookList.length,
            ...modal
        }

        listItems =[...bookList,item]
        setBookList(listItems)
    }
    const deletRow= (id) =>{
    const eliminate =bookList.filter(item => item.id !=id)
    setBookList(eliminate)
    }

    const deletAll =() =>{
        setBookList([])
    }

    return(
        <>
    < div className='form'>
        <h1>BookList Management Form</h1>
        <div className='input_table'>
            Title:
        <input type="text" name="title"  onChange={changeHandler} value={modal.title}/>
            Author:
        <input type="text" name="author"  onChange={changeHandler} value={modal.author}/>
            ISBN:
        <input type="text" name="isbn" onChange={changeHandler} value={modal.is
        }/>
        </div>
        
            <button className='bt' onClick={addbook}>Add</button>
     </div>  


            <div className='dp_table'>
                <table>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>ISBN</th>
                        <th>Delete</th>

                    </tr>
                    {bookList && bookList.map((row,index) =>
                    <tr>
                        <td>{row.title}</td>
                        <td>{row.author}</td>
                        <td>{row.isbn}</td>
                        <td onClick={()=>deletRow(row.id)} style={{color: "red"}}>Delete</td>
                        

                    </tr>
                    )}

                    
                </table>
                <button className='rm_bt' onClick={deletAll}>Remove All</button>
            </div>
            
            </>
    )
}

export default InputTable;
