function attachEventsListeners() {

    let inputs = Array.from(document.querySelectorAll('input[type=text]'));
    let buttons = Array.from(document.querySelectorAll('input[type=button]'));

    for (const button of buttons) {
        button.addEventListener('click', convert);

    }
    function convert(e) {
        let number = Number(e.target.parentElement.querySelector('input[type=text]').value);
        let unit = e.target.id;

        switch (unit) {
            case 'daysBtn':
                populate(number);
                break;
            case 'hoursBtn':
                populate(number / 24)
                break;
            case 'minutesBtn':
                populate(number / 24 / 60)
                break;
            case 'secondsBtn':
                populate(number / 24 / 60 / 60)
                break;

        }
        function populate(value) {
            inputs.shift().value = value;
            let currentValue = value * 24;
            for (const input of inputs) {
                input.value = currentValue;
                currentValue = currentValue * 60;
            }
        }


    }
}