import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom"
import { useAuthState } from "react-firebase-hooks/auth"
import { auth, db, logout} from "../../Firebase"
import { query, collection, where, getDocs} from "firebase/firestore"

const Dash = () => {
  const[name, setName] = useState("");
  const navigate = useNavigate();
  const [user, loading] = useAuthState(auth);
  const fetchUserName = async () => {
    try{
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occurred while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/login");
    fetchUserName();
  })

  return (
    <div className='dashboard'>
      <div className='dashboard-container'>
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <button className='dashboard-btn' onClick={logout}>Logout</button>
      </div>
    </div>
  )
}

export default Dash