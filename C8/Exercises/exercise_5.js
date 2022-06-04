function insert_Row()
{
    const table = document.getElementById('sampleTable');
    const row = table.insertRow(0);
    const row1 = row.insertCell(0);
    const row2 = row.insertCell(1);

    row1.innerHTML = 'row 1';
    row2.innerHTML = 'row 2'

}