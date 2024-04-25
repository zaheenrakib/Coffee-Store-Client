import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const EditCoffee = () => {

    const coffee = useLoaderData();

    const { _id, name, quantity, supplier, taste, category, deatils, photo } = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const deatils = form.details.value;
        const photo = form.photo.value;

        const updatedCoffee = { name , quantity , supplier , taste , category , deatils , photo }

        console.log(updatedCoffee);

        //send data to the server
        fetch(`http://localhost:5000/coffee/${_id}`,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedCoffee)
        })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if(data.modifiedCount> 0){
                Swal.fire({
                    icon:'success',
                    title: 'Coffee Updated Successfully',
                    showConfirmButton: false,
                    icon: 'success',
                    confirmButtonText: "Cool",
                    timer: 1500
                })
            }
         })

    }


    return (
        <div className='bg-[#dbd8d1] p-24'>
            <h3 className='text-3xl text-red-400 font-extrabold'>Update Coffee: {name} </h3>
            <form onSubmit={handleUpdateCoffee}>
                {/* Form Name and Quantitiy row */}
                <div className='md:flex mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span>Coffee Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='name' defaultValue={name} placeholder='Coffee Name' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label'>
                            <span>Available Quantity</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='quantity' defaultValue={quantity} placeholder='Available Quantity' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                {/* Form Suppler and row */}
                <div className='md:flex mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span>Supplier Name</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='supplier' defaultValue={supplier} placeholder='Supplier' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label'>
                            <span>Taste</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='taste' defaultValue={taste} placeholder='Taste' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                {/* Form category and deatils row */}
                <div className='md:flex mb-8'>
                    <div className='form-control md:w-1/2'>
                        <label className='label'>
                            <span>CateGory</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='category' defaultValue={category} placeholder='CateGory' className='input input-bordered w-full' />
                        </label>
                    </div>
                    <div className='form-control md:w-1/2 ml-4'>
                        <label className='label'>
                            <span>Details</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='details' defaultValue={deatils} placeholder='Details' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                {/* Form Photo url row */}
                <div className='mb-8'>
                    <div className='form-control w-full'>
                        <label className='label'>
                            <span>Photo URL</span>
                        </label>
                        <label className='input-group'>
                            <input type="text" name='photo' defaultValue={photo} placeholder='Photo URL' className='input input-bordered w-full' />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Coffee" className="btn btn-block" />
            </form>
        </div>
    );
};

export default EditCoffee;<h2>edit coffee</h2>