function dataConfig(dates,numbers){
  return({
    labels: dates,
    datasets: [
      {
      fill: true,
      label: 'My First dataset',
      backgroundColor: '#FFEFEF',
      borderColor: '#BB1515',
      pointBackgroundColor: '#BB1515',
      pointRadius: [0,2,2,2,2,2,2],
      data: numbers,
      lineTension: 0,
      borderWidth: 0.5
    }
  ]
  })
}

export default dataConfig;
