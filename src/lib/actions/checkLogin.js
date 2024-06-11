"use server"


const checkLogin = async (formData)=>{

    let details = {
        username: formData.username,
        password: formData.password,
    }

  
    const settings = {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(details)
  };
  
    const query = await fetch(`${process.env.SERVER}/api/login/`, settings)
    const response = await query.json()
  
    return response
  }

  export default checkLogin