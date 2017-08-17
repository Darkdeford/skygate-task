import formTemplate from './form.html';
class FormController {
    constructor() {
        this.form = {};
    }

    submitForm($event) {
        $event.preventDefault();
        this.sendForm.$setSubmitted();
        if (this.sendForm.$valid) {
            console.log('form', this.form);
            //todo send form to backend
            //$http.post('someEndpoint).then... it should be in some service
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

