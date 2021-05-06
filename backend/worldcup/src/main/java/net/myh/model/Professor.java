package net.myh.model;

public class Professor {
	int id;
	String professorName;
	int departmentId;
	String major;
	int firstCount;

	public Professor(int id, String professorName, int departmentId, String major, int firstCount) {
		super();
		this.id = id;
		this.professorName = professorName;
		this.departmentId = departmentId;
		this.major = major;
		this.firstCount = firstCount;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getProfessorName() {
		return professorName;
	}

	public void setProfessorName(String professorName) {
		this.professorName = professorName;
	}

	public int getDepartmentId() {
		return departmentId;
	}

	public void setDepartmentId(int departmentId) {
		this.departmentId = departmentId;
	}

	public String getMajor() {
		return major;
	}

	public void setMajor(String major) {
		this.major = major;
	}

	public int getFirstCount() {
		return firstCount;
	}

	public void setFirstCount(int firstCount) {
		this.firstCount = firstCount;
	}

}