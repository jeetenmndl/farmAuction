"use server"


const postItem = async (formData,responseImage, username)=>{

    let details = {
        product_name: formData.name,
        product_price: formData.startingBid,
        product_category: formData.category,
        product_description: formData.description,
        location: formData.location,
        product_img: responseImage[0],
       owner_user: username,

    }

  
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(details)
  };
  
    const query = await fetch(`${process.env.SERVER}/api/product/`, settings)
    const response = await query.json()
  
    return response
  }

  export default postItem;