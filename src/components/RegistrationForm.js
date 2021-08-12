import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

import Button from "./Button";

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

const Submit = styled(Button)`
  background-image: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 50%,
    ${color.accent} 50%,
    ${color.accent} 50%
  );

  &:hover {
    color: ${color.primary};
    border-color: ${color.accent};
    cursor: pointer;
  }
`;

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, event) => {
    const { action, method } = event.target;

    console.log(data);
  };

  return (
    <Form action="https://google.com" method="POST" onSubmit={handleSubmit(onSubmit)}>
      <p>* indicates a required field</p>
      <Label htmlFor="firstName">First Name *</Label>
      <Input
        type="text"
        name="firstName"
        placeholder="First name"
        {...register("firstName", { required: true })}
      />
      <Label htmlFor="lastName">Last Name</Label>
      <Input type="text" name="lastName" placeholder="Last name" {...register("lastName")} />
      <Label htmlFor="email">Email address *</Label>
      <Input
        type="email"
        name="email"
        placeholder="email@york.ac.uk"
        {...register("email", { required: true })}
      />
      <Submit type="submit">Sign up</Submit>
    </Form>
  );
};
