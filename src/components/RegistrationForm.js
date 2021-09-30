import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import ReactHtmlParser from "react-html-parser";
import sanitizeHtml from "sanitize-html";

import { useMailchimp, Status } from "../hooks/useMailchimp";

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

const StatusMessage = styled.p`
  font-weight: 700;

  margin-top: 1em;
`;

const SuccessMessage = styled(StatusMessage)`
  color: ${color.accent};
`;

const ErrorMessage = styled(StatusMessage)`
  color: #f46868;
`;

export const RegistrationForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const { subscribe, status, error } = useMailchimp(
    "https://cybersoc.us19.list-manage.com/subscribe/post?u=bca9c90623794e8e8411b9eda&amp;id=1cb4855721",
  );

  const onSubmit = async (data) => {
    console.log("data:", data);

    subscribe(data);
  };

  useEffect(() => {
    if (status == Status.SUCCESS) {
      reset({
        FNAME: "",
        LNAME: "",
        EMAIL: "",
      });
    }
  }, [status]);

  return (
    <Form method="POST" onSubmit={handleSubmit(onSubmit)}>
      <p>* indicates a required field</p>
      <Label htmlFor="FNAME">First Name *</Label>
      <Input
        type="text"
        name="FNAME"
        placeholder="First name"
        {...register("FNAME", { required: true })}
      />
      <Label htmlFor="LNAME">Last Name</Label>
      <Input type="text" name="LNAME" placeholder="Last name" {...register("LNAME")} />
      <Label htmlFor="EMAIL">Email address *</Label>
      <Input
        type="email"
        name="EMAIL"
        placeholder="email@york.ac.uk"
        {...register("EMAIL", { required: true })}
      />
      {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
      <div style={{ position: "absolute", left: -5000 }} aria-hidden="true">
        <Input
          type="text"
          name="b_bca9c90623794e8e8411b9eda_1cb4855721"
          {...register("b_bca9c90623794e8e8411b9eda_1cb4855721")}
          tabIndex="-1"
          value=""
        />
      </div>
      <Submit type="submit" value="Sign up" />
      {status == Status.ERROR && (
        <ErrorMessage>{ReactHtmlParser(sanitizeHtml(error))}</ErrorMessage>
      )}
      {status == Status.SUCCESS && (
        <SuccessMessage>Thanks for signing up to our mailing list!</SuccessMessage>
      )}
    </Form>
  );
};
