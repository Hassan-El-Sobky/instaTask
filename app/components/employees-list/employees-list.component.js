angular
  .module('appModule')
  .component('employeesList', {
    templateUrl: 'components/employees-list/employees-list.html',
    controller: EmployeesListComponent,
    controllerAs: 'EmployeesListComponentVm',
    bindings: {
      employeesList: '<',
    },
  });

function EmployeesListComponent($scope,$location,$rootScope,$sce) {
    $scope.filter='';
      $rootScope.$on('$locationChangeSuccess', function(event){
     $scope.filter=$location.search().filter;
          console.log($scope.filter);
})
      console.log($location);
    $scope.highlight = function(text) {
    if (!$location.$$search.filter) {
        return $sce.trustAsHtml(text);
    }
    // console.log(text);
      return $sce.trustAsHtml(text.replace(new RegExp($location.$$search.filter, 'gi'), '<span class="highlightedText">$&</span>'));
};
}
