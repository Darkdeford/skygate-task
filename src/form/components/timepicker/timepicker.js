import timepickerTemplate from './timepicker.html';

class TimepickerController {
    constructor() {
        this.timepicker = null;
        this.d = 10;
    }
}

export default class TimepickerComponent {
    constructor() {
        this.template = timepickerTemplate;
        this.controller = TimepickerController;
        this.bindings = {
            form: '='
        };
        return this;
    }
}

