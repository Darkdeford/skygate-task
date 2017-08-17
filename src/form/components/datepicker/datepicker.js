import datepickerTemplate from './datepicker.html';

class DatepickerController {
    constructor() {
        this.datepicker = null;
    }
}

export default class DatepickerComponent {
    constructor() {
        this.template = datepickerTemplate;
        this.controller = DatepickerController;
        this.bindings = {};
        return this;
    }
}

