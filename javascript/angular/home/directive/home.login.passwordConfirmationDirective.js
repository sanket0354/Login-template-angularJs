home.directive('passwordConfirmationDirective', function () {

    return {
        require: 'ngModel',
        scope: false,
        link: function (scope, element, attr, mCtrl) {
          function passwordConfirmation(pass) {
            return (scope.passMatch = (scope.signUpPassword == pass));
          }
            mCtrl.$parsers.push(passwordConfirmation);
        }
    };

});
