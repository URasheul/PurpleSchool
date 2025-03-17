'use client';

import cn from "classnames";
import Form from "next/form";

import { SubmitHandler, useForm } from "react-hook-form";

import { Button, Input, Textarea } from "@/components";
import styles from "./CommentForm.module.css";
import { apiHandler } from "@/api/ApiClient";
import { CommentFormProps } from "./CommentForm.props";


interface IFormData {
	name: string;
	comment: string;
}


export function CommentForm({ id }:CommentFormProps) {

	const { register, handleSubmit, formState, reset} = useForm<IFormData>();	
	
	const submitForm: SubmitHandler<IFormData> = async (data) => {
		
			const response = await apiHandler.postComment(id, data.name, data.comment);				
			reset();		
	}

	const nameError= formState.errors.name;	
	const commentError= formState.errors.comment;		

	return (		
		<Form onSubmit={handleSubmit(submitForm)} action={''} className={cn(styles.form, {[styles.formError]:commentError || nameError})}>						
				{nameError && <span role="alert" className={cn(styles.errorText)}>{nameError.message}</span>}			
				<Input aria-label="Введите имя" {...register("name", {required: {value: true, message: 'Заполните имя'}})} 
				placeholder="Имя" 
				className={cn({[styles.error] : nameError, [styles.errorName]: nameError && !commentError})}/>
				{commentError && <span role="alert" className={cn(styles.errorText)}>{commentError.message}</span>}			
				<Textarea aria-label="Введите комментарий" {...register("comment", {required: {value: true, message: 'Введите комментарий'}})} 
				className={cn({[styles.error] : commentError, [styles.errorComment]: nameError && !commentError})} placeholder="Комментарий"/>
			<Button className={styles.submit}>Отправить</Button>			
		</Form>		
	)
}
