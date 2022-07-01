import styles from "../styles/Login.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setLogIn,
  setGlobalEmail,
  setGlobalName,
  setGlobalRole,
  setGlobalRoleId,
} from "../store/userSlice";

import StyledInput from "../components/StyledInput/StyledInput";
import Button from "../components/Button/Button";
import prisma from "../prisma";
import axios from "axios";

export default ({ roles }) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/auth", {
      email,
      password,
    });
    if (res.data.status === "error") {
      alert(res.data.message);
    } else {
      //by server response set global state
      const { email, roleId, name } = res.data;
      const currentUserRole = roles.find((role) => {
        return role.id == roleId;
      }).title;
      dispatch(setLogIn());
      dispatch(setGlobalEmail(email));
      dispatch(setGlobalName(name));
      dispatch(setGlobalRole(currentUserRole));
      dispatch(setGlobalRoleId(roleId));
    }
  };
  return (
    <>
      <div className={styles.background}></div>
      <div className={styles.window}>
        <h2>Добро пожаловать в систему</h2>
        <form onSubmit={submit} className={styles.form}>
          <StyledInput
            type='email'
            id='email'
            placeholder='Ваша электронная почта'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <StyledInput
            type='password'
            id='password'
            placeholder='Введите пароль'
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button height='40px'>Войти</Button>
        </form>
      </div>
    </>
  );
};

export async function getServerSideProps() {
  let roles = await prisma.role.findMany();
  return {
    props: {
      roles,
    },
  };
}
