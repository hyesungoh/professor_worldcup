package net.myh.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import net.myh.model.Professor;

@Mapper
public interface ProfessorMapper {
    @Select("select * from professor")
    List<Professor> getAll();

    @Select("select d.id,p.professorName,p.major from department d join professor p on d.id=p.departmentId where d.id=#{departmentId}")

    @Select("select * from professor where departmentId=#{departmentId} order by firstCount desc;")
    List<Professor> getRanking(@Param("departmentId") int departmentId); //학부별로 순위 출력

    @Insert("INSERT INTO Professor VALUES (#{id}, #{professorName}, #{departmentId}, #{major}, #{firstCount})")
        // 삽입
    int insertUserProfile(@Param("id") int id, @Param("professorName") String professorName,
                          @Param("departmentId") int departmentId, @Param("major") String major, @Param("firstCount") int firstCount);

    @Update("UPDATE Professor SET professorName=#{professorName} WHERE professorName=#{id}")
        // 수정
    int postUserProfile(@Param("id") int id, @Param("professorName") String professorName);

    @Update("update professor set firstCount=firstCount+1 where professorName=#{professorName}")
        // 수정
    int postWinner(@Param("professorName") String professorName);

    @Delete("DELETE from Professor WHERE id=#{id}")
        // 삭제
    int deleteUserProfile(@Param("id") int id);
}