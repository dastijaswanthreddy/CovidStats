$.ajax({
    type: 'get',
    url: 'https://api.covid19api.com/summary',
    success: function(response){
        // console.log(response.Countries);
        const Countries=response.Countries;
        for(var i=0;i<Countries.length;i++)
        {
            var tablerow=`<tr>
                            <td>${Countries[i].Country}</td>
                            <td>${Countries[i].TotalConfirmed}</td>
                            <td>${Countries[i].TotalConfirmed-Countries[i].TotalRecovered}</td>
                            <td>${Countries[i].TotalRecovered}</td>
                            <td>${Countries[i].TotalDeaths}</td>
                          </tr>`
            $('#tbody').append(tablerow);
        }
        $('#covidtable').DataTable();
    },
    error: function(response){
        console.log(response);
    }
})