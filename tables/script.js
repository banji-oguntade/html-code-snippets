document.getElementById('addRow').addEventListener('click', function() {
    var table = document.getElementById('table');
    var row = table.insertRow(-1);
    for (var i = 0; i < table.rows[0].cells.length; i++) {
        row.insertCell(-1).innerHTML = 'New Data';
    }
});

document.getElementById('addColumn').addEventListener('click', function() {
    var table = document.getElementById('table');
    var header = table.rows[0].insertCell(-1);
    header.innerHTML = 'New Header';
    for (var i = 1; i < table.rows.length; i++) {
        table.rows[i].insertCell(-1).innerHTML = 'New Data';
    }
});

document.getElementById('removeRow').addEventListener('click', function() {
    var table = document.getElementById('table');
    table.deleteRow(-1);
});

document.getElementById('removeColumn').addEventListener('click', function() {
    var table = document.getElementById('table');
    for (var i = 0; i < table.rows.length; i++) {
        table.rows[i].deleteCell(-1);
    }
});