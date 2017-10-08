/**
 * Created by Sanket on 2017-07-14.
 */

home.controller("homeLoginController", function($scope){

    $scope.showRectangle = false; //show the password validation rectangle when the password field in signup is focused
    $scope.showPassConfirmRectangle = false;
    $scope.showEmailValidationRectangle = false;
    $scope.correct = "<span class='glyphicon glyphicon-ok-sign'></span>"; //correct glyphicon
    $scope.wrong = "<span class='glyphicon glyphicon-remove-sign'></span>"; //wrong glyphicon
    $scope.capitalLetterCheck = $scope.wrong; //Capital Letter Check Sign up
    $scope.numberCheck = $scope.wrong;  //number Check Sign up
    $scope.smallLetterCheck = $scope.wrong; //Small Letter Check Sign up
    $scope.specialLetterCheck = $scope.wrong; //Special Character Check Sign up
    $scope.passMatch = false;

});

