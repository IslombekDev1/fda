import { useDispatch } from "react-redux";
import React, { useState } from "react";
import { auth, provider } from "../../../firebase/firebaseconfig";
import { instance } from "../../../api/instance";
import { FcGoogle } from "react-icons/fc";
import { useHistory } from "react-router-dom";
//        hook

const Create = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [formData, setFormData] = useState({
    name: "",
    avatar: "",
    email: "",
    password: "",
  });
  const createAccauntWithGoogle = () => {
    auth.signInWithPopup(provider)
      .then(response => console.log(response))
      .catch(err => console.log(err));
  };

  const createUserEmail = (e) => {
    e.preventDefault();
    //         jo'natish uchun
    instance.post("/users", formData)
      .then((response) => {
        if (response.data) {
          // send to store
          dispatch(
            { 
              user: response.data,
              type: "CREATE_USER" 
            }
          )
            history.push("/")
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="auth-create">
      <button onClick={() => createAccauntWithGoogle()} className="auth-google-btn">
        <FcGoogle /> Google orqali kirish
      </button>
      <form className="auth-form" onSubmit={createUserEmail}>
        <input
          type="text"
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          placeholder="Name"
        />
        <input
          type="url"
          onChange={(e) => setFormData({ ...formData, avatar: e.target.value })}
          placeholder="Avatar"
        />
        <input
          type="email"
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Email"
        />
        <input
          type="password"
          onChange={(e) =>
            setFormData({ ...formData, password: e.target.value })
          }
          placeholder="Password"
        />
        <button type="submit">Ro'yxatdan o'tish</button>
      </form>
    </div>
  );
};

export default Create;
