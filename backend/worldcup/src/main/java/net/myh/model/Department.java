package net.myh.model;

public class Department {
    int departmentId;
    String professorName;
    String major;

    public Department(int departmentId, String professorName, String major) {
        super();
        this.departmentId = departmentId;
        this.professorName = professorName;
        this.major = major;
    }

    public int getDepartmentId() {
        return departmentId;
    }

    public void setDepartmentId(int departmentId) {
        this.departmentId = departmentId;
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
