
function InputField(props) {
    this._props = props;
    this._props.addEventListener("change", this.validate.bind(this));
}

InputField.prototype.deletePrompt = function() {
        this._props.style.border = "1px solid #c9c9c9";
}

InputField.prototype.validate = function() {
    this.deletePrompt();
    if (this._props.id === "userMessage") return true;
    if (!this.validateElement(this._props)) {
        this.createPrompt();
        return false;
    }
    return true;
}

InputField.prototype.validateElement = function(elem) {
    return (elem.value.match(elem.getAttribute("pattern")));
}

InputField.prototype.createPrompt = function() {
    this._props.style.border = "1px solid red";
}


//!!


function FormSubmit(props) {
    this._props = props;
    this._select = new InputField(this._props.querySelector("#Location"));
    this._inputArr = [
        new InputField(this._props.querySelector("#userName")),
        new InputField(this._props.querySelector("#userEmail")),
        new InputField(this._props.querySelector("#userSubject")),
        new InputField(this._props.querySelector("#userCompany")),
        new InputField(this._props.querySelector("#userMessage"))
    ];
    this.button = this._props.querySelector("#btnSend");
    this.button.addEventListener("click", this.validate.bind(this));
}

FormSubmit.prototype.validate = function(e) {
    e.preventDefault();
    this._inputArr.forEach(elem => {
        this.validateInput(elem);
    });
    this.validateSelect();
}

FormSubmit.prototype.validateSelect = function () {
    this._select.deletePrompt();
    if (document.getElementById('Location').value== "Please Select"){
        this._select.createPrompt();
        return false; 
    }  
    return true;  
}

FormSubmit.prototype.validateInput = function(inputField) {
    inputField.deletePrompt();
    if (!inputField._props.value) {
        inputField.createPrompt();
        return false;
    } else if (!inputField._props.value.match(inputField._props.getAttribute("pattern"))) {
        inputField.createPrompt();
        return false;
    }
    return true;

}

//!

const submit = new FormSubmit(document.querySelector("#sendForm"));