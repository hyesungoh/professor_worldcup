package net.myh.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import net.myh.entity.Professor;

public interface ProfessorRepository extends JpaRepository<Professor, Integer> {

}
