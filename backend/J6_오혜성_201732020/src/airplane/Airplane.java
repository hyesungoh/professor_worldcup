// J6, 오혜성, 201732020

package airplane;
import java.util.Scanner;

// airplane.Airplane 객체
abstract class Airplane {
    // 필드
    private String id;
    private String type;

    // ID setter
    public void setID(String id){
        this.id = id;
    }

    // ID getter
    public String getID(){
        return this.id;
    }

    // Type setter
    public void setType(String type){
        this.type = type;
    }

    // Type getter
    public String getType(){
        return this.type;
    }

    // 추상 메소드 생성
    abstract void takeoff();
    abstract void landing();
    abstract void flight();
    abstract void showInfo();

    // 생성자
    public Airplane(String id, String type) {
        setID(id);
        setType(type);
    }
}

// airplane.Airliner 클래스
class Airliner extends Airplane {
    // 필드
    private int passenger;

    // Passenger setter
    public void setPassenger(int passenger){
        this.passenger = passenger;
    }

    // Passenger getter
    public int getPassenger(){
        return this.passenger;
    }

    // 추상 메소드 오버라이딩
    public void takeoff(){
        System.out.printf("%s %s가 이륙합니다.\n", this.getType(), this.getID());
    }
    public void flight(){
        System.out.printf("%s %s가 비행합니다.\n", this.getType(), this.getID());
    }
    public void landing(){
        System.out.printf("%s %s가 착륙합니다.\n", this.getType(), this.getID());
    }
    public void showInfo(){
        System.out.printf("식별 번호: %s\n비행기 타입: %s\n탑승 인원수: %d\n",
                this.getID(), this.getType(), this.getPassenger());
    }

    // id를 매개변수로 갖는 생성자
    public Airliner(String id){
        // 슈퍼 클래스의 생성자 이용
        super(id, "여객기");
        this.setPassenger(0);
    }

    // id, passenger을 매개변수로 갖는 생성자
    public Airliner(String id, int passenger){
        // 슈퍼 클래스의 생성자 이용
        super(id, "여객기");
        this.setPassenger(passenger);
    }
}

// Weapon 인터페이스를 사용하는 airplane.Fighter 클래스
class Fighter extends Airplane implements Weapon {
    // 필드
    private boolean isStealth;

    // Stealth true setter
    public void stealthOn() {
        this.isStealth = true;
    }

    // Stealth false setter
    public void stealthOff() {
        this.isStealth = false;
    }

    // Stealth getter
    public boolean getStealth() {
        return this.isStealth;
    }

    // 부모 클래스의 추상 메소드 오버라이딩
    public void takeoff(){
        System.out.printf("%s %s가 이륙합니다.\n", this.getType(), this.getID());
    }
    public void flight(){
        System.out.printf("%s %s가 비행합니다.\n", this.getType(), this.getID());
    }
    public void landing(){
        System.out.printf("%s %s가 착륙합니다.\n", this.getType(), this.getID());
    }

    // 인터페이스의 추상 메소드 오버라이딩
    public void loadWeapon(){
        System.out.printf("%s 무기 장착\n", this.getID());

        // 반복문을 이용하여 무기 출력
        for (int i=0; i < this.weaponList.length; i++) {
            System.out.printf("%s 무기가 장착되었습니다.\n", this.weaponList[i]);
        }
    }

    // 인터페이스의 추상 메소드 오버라이딩
    public void showWeapon(){
        System.out.printf("%s 무기 목록\n", this.getID());

        // 반복문을 이용하여 인덱스와 무기 출력
        for (int i=0; i < this.weaponList.length; i++) {
            System.out.printf("%d: %s\n", i+1, this.weaponList[i]);
        }
    }

    // 인터페이스의 추상 메소드 오버라이딩
    public void selectWeapon(){
        Scanner sc = new Scanner(System.in);

        // 무기의 인덱스 번호를 선택
        System.out.printf("무기를 선택하시오: ");
        int weaponIndex = sc.nextInt() - 1;

        // 삼항연산자를 이용해 출력에 필요한 부사를 선택
        String weaponAd = weaponIndex == 1 ? "가" : "이";
        String weaponUsage = weaponIndex == 2 ? "투하" : "발사";

        // 선택한 무기 출력
        System.out.printf("%s%s %s되었습니다\n", this.weaponList[weaponIndex], weaponAd, weaponUsage);
    }

    // 출력 메소드
    public void showInfo() {
        System.out.printf("식별 번호: %s\n비행기 타입: %s\n스텔스 모드: %s\n",
                this.getID(), this.getType(), this.getStealth());
    }

    // id를 매개변수로 갖는 생성자
    public Fighter(String id){
        super(id, "전투기");
        stealthOff();
    }

    // id, isStealth를 매개변수로 갖는 생성자
    public Fighter(String id, boolean isStealth) {
        super(id, "전투기");
        if (isStealth) stealthOn();
        else stealthOff();
    }
}