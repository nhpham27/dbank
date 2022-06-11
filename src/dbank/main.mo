import Debug "mo:base/Debug";
import Time "mo:base/Time";
import Float "mo:base/Float";

actor DBank {
    stable var currentValue: Float = 300;
    let startTime = Time.now();
    public func topUp(amount: Float) {
        currentValue += amount;
        Debug.print(debug_show(currentValue));
    };

    public func widthraw(amount: Float) {
        let tempValue: Float = currentValue - amount;
        if(tempValue >= 0){
            currentValue -= amount;
        } else {
            Debug.print("Withdraw amount exeed current value!");
        }
    };

    public query func checkBalance(): async Float {
        return currentValue;
    };

    public func compound() {
        let currentTime = Time.now();
        let timeElapsedNS = currentTime - startTime;
        let timeElapsedS = timeElapsedNS/1000000000;
        currentValue := currentValue * (1.01 ** Float.fromInt(timeElapsedS));
    };
}