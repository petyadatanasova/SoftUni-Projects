function attachEventsListeners() {
    let button = document.getElementById('convert');
    button.addEventListener("click", convert);

    function convert() {

        let input = Number(document.getElementById('inputDistance').value);

        let selectedOptionFrom = document.getElementById('inputUnits').value;
        let number = 0;
        switch (selectedOptionFrom) {
            case "m": number = input;
                break;
            case 'km': number = input * 1000;
                break;
            case 'cm': number = input * 0.01;
                break;
            case 'mm': number = input * 0.001;
                break;
            case 'mi': number = input * 1609.34;
                break;
            case 'yrd': number = input * 0.9144;
                break;
            case 'ft': number = input * 0.3048;
                break;
            case 'in': number = input * 0.0254;
                break;
        }

        let selectedOptionTo = document.getElementById('outputUnits').value;
        switch (selectedOptionTo) {
            case "m": number = number;
                break;
            case 'km': number = number / 1000;
                break;
            case 'cm': number = number / 0.01;
                break;
            case 'mm': number = number / 0.001;
                break;
            case 'mi': number = number / 1609.34;
                break;
            case 'yrd': number = number / 0.9144;
                break;
            case 'ft': number = number / 0.3048;
                break;
            case 'in': number = number / 0.0254;
                break;
        }
        let resultOutput = document.getElementById('outputDistance');

        resultOutput.value = number;

    }
}