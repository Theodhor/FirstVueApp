const propsConfig = function(){
  return(
   {
      legend: {
        display: false
      },
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        yAxes: [{
          color: 'black',
          gridLines: {
            color: 'rgba(0,0,0,1)',
            display: false,
            lineWidth: 2
          },
          ticks: {
            fontSize: 8,
            fontFamily: 'Roboto-light',
            min: 0,
            max: 40000,
            stepSize: 10000,
            userCallback: function(value) {
              if(value<35000){
                value = value.toString().split(/(?=(?:...)*$)/).join('.');
                return value;
              }
            }
          }
        },
      ],
        xAxes: [{
          color: 'black',
          gridLines: {
            color: 'rgba(0,0,0,1)',
            display: false,
            lineWidth: 2
          },
          ticks: {
            fontSize: 8,
            fontFamily: 'Roboto-light',
            callback: function(tick, index) {
              return (index < 1 || index > 6) ? '' : tick;
            }
          }
        }]
      }
    }
  )
}

export default propsConfig;
