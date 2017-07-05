define(function () {
    var classlike = function () {
        this.value = 1;
    }

    classlike.prototype.up = function () {
       this.value++;
    };

    classlike.prototype.print = function () {
       console.log(this.value);
    };

    // 객체가 아닌 생성자 함수를 반환한다.
    return classlike;
});