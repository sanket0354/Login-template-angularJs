/**
 * Created by Sanket on 2017-07-14.
 */

home.directive('passwordValidationDirective', function () {
    return {
        require: 'ngModel',
        scope: false,
        link: function (scope, element, attr, mCtrl) {
            function passwordValidation(pass) {
                if (/[a-z]+/.test(pass) && /[A-Z]+/.test(pass) && /[0-9]+/.test(pass) && /[!*@*#*.*]+/.test(pass)) {
                    mCtrl.$setValidity('charE', true);
                } else {
                    mCtrl.$setValidity('charE', false);
                }

                if (/[a-z]+/.test(pass)){
                    scope.smallLetterCheck = scope.correct;
                }else{
                    scope.smallLetterCheck = scope.wrong;
                }

                if (/[A-Z]+/.test(pass)){
                    scope.capitalLetterCheck = scope.correct;
                }else{
                    scope.capitalLetterCheck = scope.wrong;
                }

                if (/[0-9]+/.test(pass)){
                    scope.numberCheck = scope.correct;
                }else{
                    scope.numberCheck = scope.wrong;
                }

                if (/[!*@*#*.*]+/.test(pass)){
                    scope.specialLetterCheck = scope.correct;
                }else{
                    scope.specialLetterCheck = scope.wrong;
                }

                return pass;
            }
            mCtrl.$parsers.push(passwordValidation);
        }
    };
});