"use server"


const postUser = async (formData)=>{

    let details = {
        username: formData.username,
        email: formData.email,
        password: formData.password,
    }

  
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(details)
  };
  
    const query = await fetch(`${process.env.SERVER}/api`, settings)
    const response = await query.json()
  
    return response
  }

  export default postUser;