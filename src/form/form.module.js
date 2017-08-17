import DatepickerComponent from './components/datepicker/datepicker';
import TimepickerComponent from './components/timepicker/timepicker';
import FormComponent from './form';

export default angular.module('skygate-form', ['moment-picker'])
    .component('datepicker', new DatepickerComponent())
    .component('timepicker', new TimepickerComponent())
    .component('skygateForm', new FormComponent());
