export default (() => {
  const cells = ['', '', '', '', '', '', '', '', ''];
  const content = document.getElementById('tbody');
  const tableArray = (val1, val2, val3) => {
    const row = document.createElement('tr');
    row.className = 'table-success';
    const column = document.createElement('td');
    column.innerText = val1;
    const column2 = document.createElement('td');
    column2.innerText = val2;
    const column3 = document.createElement('td');
    column3.innerText = val3;

    row.appendChild(column);
    row.appendChild(column2);
    row.appendChild(column3);
    return content.appendChild(row);
  };

  return { cells, tableArray };
})();
