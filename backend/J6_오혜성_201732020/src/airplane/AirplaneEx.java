// J6, 오혜성, 201732020

package airplane;

public class AirplaneEx {
    public static void main(String args[]){
        // 각 생성자를 이용해 객체 생성
        Airliner airliner = new Airliner("A100", 300);
        Fighter fighter = new Fighter("F300", false);

        // 여객기 객체 출력 시작
        airliner.showInfo();
        System.out.println();

        airliner.takeoff();
        airliner.flight();
        airliner.landing();
        System.out.println();
        // 여객기 객체 출력 종료

        // 전투기 객체 출력 시작
        fighter.showInfo();
        System.out.println();

        fighter.loadWeapon();
        System.out.println();

        fighter.takeoff();
        fighter.flight();
        fighter.showWeapon();
        fighter.selectWeapon();
        System.out.println();

        fighter.landing();
        // 전투기 객체 출력 종료
    }
}
