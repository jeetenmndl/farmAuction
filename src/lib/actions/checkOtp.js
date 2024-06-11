"use server"


const checkOtp = async (username, otp)=>{

    let details = {
        username: username,
        otp: otp,
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

  export default checkOtp;