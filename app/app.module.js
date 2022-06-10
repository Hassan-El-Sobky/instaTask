import Vue from 'vue';
import 'ngVue';
import 'ngVue/build/plugins.js';
import PerformancePageComponent from './pages/performance-page.vue';
import PerformanceChartComponent from './components/vue-components/performance-chart.vue';
import notfoundpage from './pages/notfound-page.vue';
// import notfoundComponent from './components/vue-components/NotfoundComponent.vue';
import FilterComponent from './components/vue-components/FilterComponent.vue';
angular.module('appModule', [
  'ui.router',
  'ngVue',
  'ngVue.plugins',
]);

angular.module('appModule').directive('vPerformancePage', (createVueComponent) => {
  return createVueComponent(Vue.component('performancePageComponent', PerformancePageComponent));
});

angular.module('appModule').directive('vPerformanceChart', (createVueComponent) => {
  return createVueComponent(Vue.component('performanceChartComponent', PerformanceChartComponent));
});

angular.module('appModule').directive('vFilterComponent', (createVueComponent) => {
  return createVueComponent(Vue.component('FilterComponent',FilterComponent));
});
angular.module('appModule').directive('vNotfoundPage', (createVueComponent) => {
  return createVueComponent(Vue.component('notfoundPage', notfoundpage));
});

// angular.module('appModule').directive('vNotfoundComponent', (createVueComponent) => {
//   return createVueComponent(Vue.component('notfoundComponent', notfoundComponent));
// });