// J6, 오혜성, 201732020

package airplane;

// Weapon 인터페이스
public interface Weapon {
    // 상수 문자열 배열 생성
    String[] weaponList = {"미사일", "레이저", "폭탄"};

    // 추상 클래스 생성
    void loadWeapon();
    void showWeapon();
    void selectWeapon();
}
