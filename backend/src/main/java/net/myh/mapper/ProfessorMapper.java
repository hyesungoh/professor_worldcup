package net.myh.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import net.myh.model.Professor;
import net.myh.model.major;

@Mapper
public interface ProfessorMapper {
	@Select("select professorName, major from professor Where departmentId = #{departmentId} order by major ASC")
	List<major> getProfessor(@Param("departmentId") int departmentId);

	@Insert("INSERT INTO Professor VALUES (#{id}, #{professorName}, #{departmentId}, #{major}, #{firstCount})") // 삽입
	int insertUserProfile(@Param("id") int id, @Param("professorName") String professorName,
			@Param("departmentId") int departmentId, @Param("major") String major, @Param("firstCount") int firstCount);

	@Update("UPDATE Professor SET professorName=#{professorName} WHERE id=#{id}") // 수정
	int postUserProfile(@Param("id") int id, @Param("professorName") String professorName);

	@Delete("DELETE from Professor WHERE id=#{id}") // 삭제
	int deleteUserProfile(@Param("id") int id);
}