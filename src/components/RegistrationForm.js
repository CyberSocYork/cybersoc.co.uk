import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import { color } from "../theme/config";

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  color: ${color.text};
  font-weight: 700;
  margin-bottom: 0.5em;
`;

const Input = styled.input`
  padding: 0.5em 1em;
  margin-bottom: 1em;

  font-size: 20px;
  font-family: "Cabin", Arial, Helvetica, sans-serif;
  color: ${color.text};

  background-color: ${color.secondary};

  border: 3px solid ${color.secondary};
  outline: none;

  transition: all 0.175s ease;

  &:active,
  &:focus {
    border-color: ${color.accent};
    background-color: ${color.primary};
  }
`;

const Submit = styled.input`
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 50%,
    ${color.accent} 50%,
    ${color.accent} 50%
  );

  background-color: rgba(0, 0, 0, 0);

  background-size: 200%;

  color: ${color.text};
  font-family: "Cabin", Arial, Helvetica, sans-serif;
  font-size: 20px;

  border: 5px solid white;
  display: inline-block;
  font-weight: 700;
  margin: 0;
  padding: 0.5em 1.2em;
  text-align: center;
  text-decoration: none !important;
  transition: ease background-position 0.3s, ease all 0.175s;

  &:hover,
  &:active {
    color: ${color.primary};
    border-color: ${color.accent};
    cursor: pointer;
    background-position: -100% 100%;
  }
`;

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const URL =
    "https://cybersoc.us19.list-manage.com/subscribe/post?u=bca9c90623794e8e8411b9eda&amp;id=1cb4855721";

  const onSubmit = async (data, event) => {
    const { action, method } = event.target;

    console.log(data);

    const formData = new URLSearchParams(Object.entries(data)).toString();

    const res = await fetch(action, {
      method: method,
      body: formData,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });

    console.log(res);
  };

  return (
    <Form action={URL} method="POST" onSubmit={handleSubmit(onSubmit)}>
      <p>* indicates a required field</p>
      <Label htmlFor="FNAME">First Name *</Label>
      <Input
        type="text"
        name="FNAME"
        placeholder="First name"
        {...register("firstName", { required: true })}
      />
      <Label htmlFor="LNAME">Last Name</Label>
      <Input type="text" name="LNAME" placeholder="Last name" {...register("lastName")} />
      <Label htmlFor="EMAIL">Email address *</Label>
      <Input
        type="email"
        name="EMAIL"
        placeholder="email@york.ac.uk"
        {...register("email", { required: true })}
      />
      <Submit type="submit" value="Sign up" />
    </Form>
  );
};
