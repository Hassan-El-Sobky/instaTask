angular
  .module('appModule')
  .controller('homeController', homePageController);

function homePageController(Employees,$location) {
  const homePageVm = this;
  homePageVm.employees = [];
  homePageVm.pageCount = 0;
  homePageVm.currentPage=0;
  homePageVm.Loader=false;
  homePageVm.searchInput = $location.$$search.filter;

  activate();

  function activate() {
    Employees.getEmployees()
      .then(({ data }) => {
        homePageVm.employees = homePageVm.employees.concat(data.employees);
        homePageVm.pageCount=data.pages;
        homePageVm=data.current_page;
        console.log(homePageVm.pageCount);
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
  homePageVm.loadMore=function(){
       if(homePageVm.pageCount>=homePageVm.currentPage){
        homePageVm.Loader=true;
        Employees.loadMoreEmployees(++homePageVm.currentPage)
        .then(({ data }) => {
          if (data) {
            homePageVm.Loader=false;
            homePageVm.employees = homePageVm.employees.concat(data.employees);
          }
        });
       }
  }
}
