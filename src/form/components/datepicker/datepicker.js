import datepickerTemplate from './datepicker.html';

class DatepickerController {
    constructor() {
        this.datepicker = null;
        this.minDate = moment();
    }
}

export default class DatepickerComponent {
    constructor() {
        this.template = datepickerTemplate;
        this.controller = DatepickerController;
        this.bindings = {
            form: '='
        };
        return this;
    }
}

