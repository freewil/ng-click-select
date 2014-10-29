/**
 * ngClickSelect
 *
 * @author Anders D. Johnson
 * @url https://github.com/adjohnson916/ng-click-select
 * @license MIT
 */
(function(angular) {

  /**
   * @ngdoc module
   * @name ngClickSelect
   * @description ngClickSelect
   */
  var ngClickSelect = angular.module('ngClickSelect', []);

  /**
   * @ngdoc directive
   * @name ngScope.directive:ngClickSelect
   * @restrict AC
   * @example
     <doc:example>
       <doc:source>
          <input type="text" ng-click-select />
       </doc:source>
     </doc:example>
     <doc:example>
       <doc:source>
          <textarea class="ng-click-select"></textarea>
       </doc:source>
     </doc:example>
   *
   * @description
   * Directive to select contents of text input when clicked.
   */
  ngClickSelect.directive('ngClickSelect', function () {
    return {
      restrict: 'AC',
      link: function (scope, element, attrs) {
        element.bind('click', function () {
          element.select();
        });
      }
    }
  });

  return ngClickSelect;

})(window.angular);
