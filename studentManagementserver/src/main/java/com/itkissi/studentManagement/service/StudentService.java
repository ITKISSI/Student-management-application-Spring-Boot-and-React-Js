package com.itkissi.studentManagement.service;

import com.itkissi.studentManagement.model.Student;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.Optional;


public interface StudentService {

    public Student saveStudent(Student student);

    public List<Student> getStudents();
    public void deleteStudent(int id);

    public Optional<Student> findStudentById(int id);
}
