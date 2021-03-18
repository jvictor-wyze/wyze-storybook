import React, { useState } from "react";
import styles from "./Button.module.css";

export const Button = ({ text, color }) => {
  return (
    <button className={`${styles.button} ${styles[color]}`}> {text} </button>
  );
};
