package com.itkissi.studentManagement.controller;

import com.itkissi.studentManagement.exception.StudentNotFoundException;
import com.itkissi.studentManagement.model.Student;
import com.itkissi.studentManagement.repository.StudentRepository;
import com.itkissi.studentManagement.service.StudentService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/student")
@CrossOrigin("http://localhost:3000")
public class StudentController {

    @Autowired
    private StudentService studentService;

    @Autowired
    private StudentRepository studentRepository;

    @PostMapping("/add")
    public String add( @RequestBody Student student){
        studentService.saveStudent(student);
        return "Student added successfully";
    }

    @GetMapping("/students")
    public List<Student> getAll()
    {
        return studentService.getStudents();
    }

    @GetMapping("/getStudent/{id}")
    public Student getStudentById(@PathVariable("id") int id)
    {
        return  studentService.findStudentById(id)
                .orElseThrow(()-> new StudentNotFoundException(id));
    }
    @PutMapping("/edit/{id}")
    public Student update(@RequestBody Student studentUpdated,@PathVariable("id") int id)
    {
        return studentService.findStudentById(id)
                        .map( student -> {
                            student.setName(studentUpdated.getName());
                            student.setUsername(studentUpdated.getUsername());
                            student.setEmail(studentUpdated.getEmail());
                            return studentService.saveStudent(student);
                        }).orElseThrow(()-> new StudentNotFoundException(id));
    }
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable("id") int id)
    {
        if(studentService.findStudentById(id)==null)
        {
            throw new StudentNotFoundException(id);
        }
        studentService.deleteStudent(id);

        return "Student with id "+ id +" deleted successfully";
    }

}
