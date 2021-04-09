package net.myh.model;

public class major {
	String professorName;
	String major;

	public major(String professorName, String major) {
		super();
		this.professorName = professorName;
		this.major = major;
	}

	public String getProfessorName() {
		return professorName;
	}

	public void setProfessorName(String professorName) {
		this.professorName = professorName;
	}

	public String getMajor() {
		return major;
	}

	public void setMajor(String major) {
		this.major = major;
	}
}
