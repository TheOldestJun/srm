import styles from "./Modal.module.scss";
import { useState } from "react";

import StyledInput from "../StyledInput/StyledInput";
import Button from "../Button/Button";

export default (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async () => {
    alert(email, password);
  };
  return (
    <>
      <div className={styles.modalBackground}></div>
      <div className={styles.modal}>
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
