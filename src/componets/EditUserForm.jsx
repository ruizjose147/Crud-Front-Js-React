import React from 'react'
import { useForm } from 'react-hook-form'

const EditUserForm = (props) => {

    //console.log(props.curretUser)
    
    const {register, errors, handleSubmit, setValue} = useForm({
        defaultValues: props.curretUser
    });

    setValue('name', props.curretUser.name);
    setValue('username', props.curretUser.username);

    const onSubmit = (data, e) => {
        console.log(data)

        props.updateUser(props.curretUser.id, data)

        //limpiar campos
        e.target.reset();
    }
    
    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" name="name" {
                ...register(
                    'name', {required: true, message: "campo Requerido"}
                )
            }/>
            <div>
                {errors?.name?.message}
            </div>
            <label>Username</label>
            <input type="text" name="username" {
                ...register(
                    'username', {required: true, message: "ampo Requerido"}
                )
            }/>
            <div>
                {errors?.username?.message}
            </div>
            <button>Edit user</button>
        </form>
    );
}

export default EditUserForm;