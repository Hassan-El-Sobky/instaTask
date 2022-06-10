angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees,$location) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.searchInput = $location.$$search.filter;

  activate();

  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
      });
  }
  homePageVm.handleSearchEvent = function (input) {
    homePageVm.searchInput = input;

    if (input) {
      $location.path('/').search({ filter: input });
    } else {
      $location.url($location.path());
    }
  };
}
