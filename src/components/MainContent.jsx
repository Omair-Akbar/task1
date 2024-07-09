import React, { useEffect, useState } from 'react'
import { LuPlus,LuMinus } from "react-icons/lu";


const MainContent = () => {

  const [name, setName] = useState("");
  const [btnActive, setBtnActive] = useState(false);
  let [list, setList] = useState([])

  const increaseCount = (id) => {
    setList(list.map(product =>
      product.id === id  ? { ...product, counter: product.counter + 1 } : product 
    ));
  };

 const decreaseCount = (id,count) => {
  
    setList(list.map(product =>
      product.id === id && count > 1 ? {  ...product, counter: product.counter - 1 } : product 
    ));
  };

  useEffect(()=>{ 
    if(name.length > 3)setBtnActive(true)
    else setBtnActive(false)
  },[name])


  const addProduct = () => {
    let id = list.length
    list.push({id:id,name:name,counter:1})
    setName("")
  }

  return (
    <div className="flex-1 flex items-start sm:w-[100vh] rounded-sm mt-10 lg:w-[120vh] justify-center">
      <div className="bg-white shadow-lg w-full max-w-4xl p-8">
        <h1 className="text-2xl font-semibold mb-4">Add Products</h1>
        <div className='flex flex-row gap-1  items-center'>
          <div className='w-full'>
            <label
              className='flex'
              htmlFor='inputProduct'>Product</label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              id='inputProduct'
              name='name'
              type="text"
              placeholder="e.g. Product ABC"
              className="w-full h-10 p-2 mb-4 border border-gray-400 rounded outline-none focus:border-gray-600"
            />
          </div>
      {
        btnActive?          <button onClick={addProduct} className="bg-blue-500 rounded mt-2 text-white h-10 w-22 px-4 py-2">Add</button>
:          <button className="bg-gray-200 rounded mt-2 text-black h-10 w-22 px-4 py-2">Add</button>

      }
        </div> 
            {
            
            list?
            list.map((product,index)=>(
              <div key={index} className='my-2  p-4 border border-black-0 w-full flex flex-row items-center justify-between'>
                <p className=''>{product.name}</p>
                <div className='flex items-center flex-row gap-3'>
                  <button onClick={()=>increaseCount(product.id)}><LuPlus className=' text-lg text-slate-800'/></button>
              <p className=' flex justify-center items-center bg-slate-300 rounded h-8 w-8'>{product.counter}</p>
              <button onClick={()=>decreaseCount(product.id, product.counter)}><LuMinus className=' text-lg text-zinc-800'/></button>
              </div>
              </div>
            ))
            
            
            
            
            :<div className="flex items-center justify-center flex-col mt-8">
             {/* You can replace this with an appropriate image */}
             <img
               className="w-26 h-16 text-gray-400"
               src='logoo.png'
               alt=' '
             />
   
           <p className="text-center mt-2 text-gray-600">No products have been added.</p>
           </div>
                    }
      </div>
    </div>
  )
}

export default MainContent
