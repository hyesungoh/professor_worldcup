package net.myh.controller;

import java.util.List;
import java.util.HashMap;
import java.util.Map;

import javax.annotation.PostConstruct;

import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import jdk.internal.org.jline.utils.Log;
import net.myh.mapper.ProfessorMapper;
import net.myh.model.Professor;
import net.myh.model.major;


@CrossOrigin(origins = "*")
@RestController // RestController 하고 Ctrl+Space 한 뒤 Enter
public class ProfessorController {
	// 컨트롤러 용 mapper 하나 선언
	private ProfessorMapper mapper;

	// 컨트롤러 실행 시 인터페이스 mapper와 컨트롤러 mapper 연결
	public ProfessorController(ProfessorMapper mapper) {
		this.setMapper(mapper);
	}

	@GetMapping("/user/{id}")
	public List<major> getUserProfileAll(@PathVariable("id") int departmentId) {
		return mapper.getProfessor(departmentId);
	}

	@GetMapping("/result")
	public List<Professor> getAll() {
		return mapper.getAll();
	}

	@RequestMapping(value = "/user/winner", method = RequestMethod.POST)
	@ResponseBody
	public String getWinner(@RequestBody Map<String, Professor> winner){ // 주소에 들어오는 변수명=PathVariable 안에 들어오는 변수명
		mapper.postWinner(winner.get("professor").getProfessorName());
		return winner.get("professor").getProfessorName(); // 이 부분은 프론트에서 확인해주어야 함
	}

	@PutMapping("user/{id}") // @Path는 주소에 넘길 값을 의미, 값을 넣을때는 put을 사용
	public void putUserProfile(@PathVariable("id") int id, @RequestParam("professorName") String professorName,
			@RequestParam("departmentId") int departmentId, @RequestParam("major") String major,
			@RequestParam("firstCount") int firstCount) {
		mapper.insertUserProfile(id, professorName, departmentId, major, firstCount);
	}

	@PostMapping("user/{id}") // @Path는 주소에 넘길 값을 의미, 값을 넣을때는 put을 사용
	public void postUserProfile(@PathVariable("id") int id, @RequestParam("professorName") String professorName) {
		mapper.postUserProfile(id, professorName);

	}

	@DeleteMapping("user/{id}")
	public void deleteUserProfile(@PathVariable("id") int id) {
		mapper.deleteUserProfile(id);
	}

	public void setMapper(ProfessorMapper mapper) {
		this.mapper = mapper;
	}
}