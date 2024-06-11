"use server"


const getAllProducts = async ()=>{

  
    const settings = {
      method: 'GET',
      headers: {
          'Content-Type': 'application/json',
      },
  };
  
    const query = await fetch(`${process.env.SERVER}/api/get-product/`, settings, {cache: 'no-store'})
    const response = await query.json()
  
    return response
  }

  export default getAllProducts;