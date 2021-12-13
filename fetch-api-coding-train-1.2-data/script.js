getData();

async function getData() {
    const response = await fetch('ZonAnn.Ts+dSST.csv');
    const data = await response.text();
    console.log(data);

    const rows = data.split('\n').slice(1); //splits data by newline, and slices the header row
    rows.forEach(elt => { // forEach applies to each element of the array
        const row = elt.split(',');
        const year = row[0];
        const temp = row[1];
        console.log(year, temp);
    });
    
}