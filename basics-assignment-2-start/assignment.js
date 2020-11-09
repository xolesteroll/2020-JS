const task3Element = document.getElementById('task-3');

function textAlert() {
    alert('HOWDOYOUDO?');
}

function nameAlert(name) {
    alert(name);
}

function concatStrings(greet, name, bye) {
    alert(greet + name + bye);
}

task3Element.addEventListener('click', textAlert);

textAlert();
nameAlert('Anton');
concatStrings('Hello', 'my friend', 'go to hell');