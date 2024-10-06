"use client"
import React from "react";
import { useForm } from "react-hook-form";
import SideBar from "@/Component/SideBar"
export default function StudentForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
   
  };

  
    
      return (
        <>
        <SideBar></SideBar>
        <div className="max-w-[60%] mx-auto p-5 bg-white shadow-md rounded-lg mt-8">
          <h2 className="text-xl font-bold mb-4">Add Student</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block mb-1" htmlFor="name">Name:</label>
                <input
                  id="name"
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.name && <span className="text-red-500">{errors.name.message}</span>}
              </div>
    
              <div className="flex-1">
                <label className="block mb-1" htmlFor="class">Class:</label>
                <input
                  id="class"
                  type="number"
                  {...register("class", { required: "Class is required" })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.class && <span className="text-red-500">{errors.class.message}</span>}
              </div>
            </div>
    
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block mb-1" htmlFor="dob">Date of Birth:</label>
                <input
                  id="dob"
                  type="date"
                  {...register("dob", { required: "Date of birth is required" })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.dob && <span className="text-red-500">{errors.dob.message}</span>}
              </div>
    
              <div className="flex-1">
                <label className="block mb-1" htmlFor="contactNumber">Contact Number:</label>
                <input
                  id="contactNumber"
                  type="tel"
                  {...register("contactNumber", {
                    required: "Contact number is required",
                    pattern: {
                      value: /^\d{10}$/,
                      message: "Contact number must be 10 digits",
                    },
                  })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.contactNumber && <span className="text-red-500">{errors.contactNumber.message}</span>}
              </div>
            </div>
    
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block mb-1" htmlFor="srNumber">SR Number:</label>
                <input
                  id="srNumber"
                  type="number"
                  {...register("srNumber", { required: "SR Number is required" })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.srNumber && <span className="text-red-500">{errors.srNumber.message}</span>}
              </div>
    
              <div className="flex-1">
                <label className="block mb-1" htmlFor="rollNo">Roll No:</label>
                <input
                  id="rollNo"
                  type="text"
                  {...register("rollNo", { required: "Roll No is required" })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.rollNo && <span className="text-red-500">{errors.rollNo.message}</span>}
              </div>
            </div>
    
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block mb-1" htmlFor="fatherName">Father's Name:</label>
                <input
                  id="fatherName"
                  type="text"
                  {...register("fatherName", { required: "Father's Name is required" })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.fatherName && <span className="text-red-500">{errors.fatherName.message}</span>}
              </div>
    
              <div className="flex-1">
                <label className="block mb-1" htmlFor="motherName">Mother's Name:</label>
                <input
                  id="motherName"
                  type="text"
                  {...register("motherName", { required: "Mother's Name is required" })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.motherName && <span className="text-red-500">{errors.motherName.message}</span>}
              </div>
            </div>
    
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block mb-1" htmlFor="aadharCardNo">Aadhar Card No:</label>
                <input
                  id="aadharCardNo"
                  type="text"
                  {...register("aadharCardNo", { required: "Aadhar Card No is required" })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.aadharCardNo && <span className="text-red-500">{errors.aadharCardNo.message}</span>}
              </div>
    
              <div className="flex-1">
                <label className="block mb-1" htmlFor="bankAccountHolder">Bank Account Holder:</label>
                <input
                  id="bankAccountHolder"
                  type="text"
                  {...register("bankAccountHolder", { required: "Bank Account Holder is required" })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.bankAccountHolder && <span className="text-red-500">{errors.bankAccountHolder.message}</span>}
              </div>
            </div>
    
            <div className="flex space-x-4">
              <div className="flex-1">
                <label className="block mb-1" htmlFor="accountHolderAadhar">Account Holder Aadhar:</label>
                <input
                  id="accountHolderAadhar"
                  type="text"
                  {...register("accountHolderAadhar", { required: "Account Holder Aadhar is required" })}
                  className="w-full p-2 border border-gray-300 rounded"
                />
                {errors.accountHolderAadhar && <span className="text-red-500">{errors.accountHolderAadhar.message}</span>}
              </div>
            </div>
    
            <button
              type="submit"
              className="w-full p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Add Student
            </button>
          </form>
        </div>
        </>
      );
    }
    

