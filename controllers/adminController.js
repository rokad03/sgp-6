import Admin from "../models/Admin.js"
export const AdminLogin=async(req,res)=>{

    const { email, password } = req.body;
  
    try {
      // Find the user with the given email
      const user = await Admin.findOne({ email: email });
  
      if (user) {
        // Compare the provided password with the stored hashed password
        
  
        if (password==user.password) {
          res.send({ message: "Login Successful", user: user, success: true });
        } else {
          res.send({ message: "Password did not match" });
        }
      } else {
        res.send({ message: "User Not Registered" });
      }
    } catch (error) {
      console.error(error);
      res.send({ message: 'Internal Server Error' });
    }
  }
