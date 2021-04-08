package net.myh.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import net.myh.entity.Professor;
import net.myh.entity.Department;
import net.myh.repository.ProfessorRepository;

@RestController
public class ProfessorController {

	@Autowired
	ProfessorRepository professorRepository;

	@GetMapping("professors")
	public List<Professor> professors() {
		return professorRepository.findAll(); // professor table과 department table을 조인한 결과값 전체 출력
	}

	@GetMapping("/professor/{id}")
	public Professor getProfessorProfile(@PathVariable("id") int id) { // 교수 ID로 조회한 값 출력
		return professorRepository.findById(id).get();
	}

	@PostMapping("professor")
	public boolean insert(@RequestBody Professor professor) {
		professorRepository.save(professor);
		return true;
	}

	@PutMapping("professor")
	public boolean update(@RequestBody Professor professor) {
		professorRepository.save(professor);
		return true;
	}

	@DeleteMapping("professor/{id}")
	public boolean delete(@PathVariable("id") int id) {
		professorRepository.deleteById(id);
		return true;
	}

}