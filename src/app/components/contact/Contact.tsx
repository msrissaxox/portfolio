import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"


type Inputs = {
  firstName: string
  lastName: string
  message: string
  email: string
  exampleRequired: string
  example: string
}


export default function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);


  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
    <label>First Name: </label>
    <input {...register("firstName", {required: 'This is required'})} placeholder="Marissa" />
    <label>Last Name: </label>
    <input {...register("lastName", {required: 'This is required'})} placeholder="Lamothe" />
    {/* <input {...register("email" placeholder="john.smith@aol.com", { required: true })} />  */}
    <label>Email: </label>
    <input {...register("email", {required: 'Email Address is required'})}  />
    <label>Message: </label>
    <input {...register("message")} placeholder="Let's work together." />


      {/* include validation with required or other standard HTML validation rules */}
      {/* <input {...register("exampleRequired", { required: true })} /> */}
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}


      <input type="submit" />
    </form>
  )
}