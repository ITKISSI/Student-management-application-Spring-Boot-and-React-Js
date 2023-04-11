package com.itkissi.studentManagement.controller;

import com.itkissi.studentManagement.model.Student;
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


    @PostMapping("/add")
    public String add( @RequestBody Student student){
        studentService.saveStudent(student);
        return "Student added successfully";
    }

    @GetMapping("/getAll")
    public List<Student> getAll()
    {
        return studentService.getStudents();
    }
    @PutMapping("/update")
    public String update(@RequestBody Student student)
    {
        Student studentUpdated = studentService.findStudentById(student.getId()).orElseThrow(EntityNotFoundException::new);

        studentUpdated.setName(student.getName());
        studentUpdated.setUsername(student.getUsername());
        studentUpdated.setEmail(student.getEmail());
        studentService.saveStudent(studentUpdated);
        return "Student updated successfully";
    }
    @DeleteMapping("/delete/{id}")
    public String delete(@PathVariable("id") int id)
    {
        studentService.findStudentById(id).orElseThrow(EntityNotFoundException::new);
        studentService.deleteStudent(id);
        return "Student deleted successfully";
    }

}
