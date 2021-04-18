import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form"

const AddTeacher = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imageURL, setImageURL] = useState(null)

    const onSubmit = data => {
        const eventData = {
            name: data.name,
            designation: data.designation,
            img: imageURL
        };
        console.log(eventData);
        fetch('https://still-beyond-51979.herokuapp.com/addTeacher', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(eventData)
        })
        .then(res => res.json())
        .then(success=>{
            if(success){
                alert('Teacher added successfully')
            }
        })
    }


    const handleImageUpload = event => {
        console.log(event.target.files[0]);
        const imageData = new FormData();
        imageData.set('key', 'ef2890659b56f6e074699c708b63ac7d')
        imageData.append('image', (event.target.files[0]))

        axios.post('https://api.imgbb.com/1/upload',
            imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="pe-5">
            <form onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Teacher's Name" class="form-control" {...register("name")} />
                <br />
                <input placeholder="Designation" class="form-control" {...register("designation", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <input type="file" className="form-control" onChange={handleImageUpload} />
                <input className="btn btn-danger" type="submit" />
            </form>
        </div>
    );
};

export default AddTeacher;