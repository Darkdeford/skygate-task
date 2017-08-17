import formTemplate from './form.html';
class FormController {
    constructor() {
        this.form = {};
    }

    submitForm($event) {
        $event.preventDefault();
        console.log('this', this);

        if (this.sendForm.$valid) {
            console.log('form', this);
            //todo send form to backend
            this.sendForm.$setPristine();
            this.sendForm.$setUntouched();
        }
    }
}

export default class FormComponent {
    constructor() {
        this.template = formTemplate;
        this.controller = FormController;
        this.bindings = {};
        return this;
    }
}

