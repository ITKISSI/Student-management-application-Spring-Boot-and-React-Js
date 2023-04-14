package com.itkissi.studentManagement.exception;

public class StudentNotFoundException extends RuntimeException{


    public StudentNotFoundException(Integer id)
    {
        super("Could not found a student with the id "+id);
    }
}
