function addDays(date, days) {
  var result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}


function generateQuartals() {
  ans = [];
  begin_date = {
    id: 1,
	  name: "4 квартал 2021", 
	  StartDate: "2021-09-1",
	  EndDate: "2021-11-30"
  };
  
  var date = new Date();
  var start_date = new Date(this.begin_date.StartDate);
  
  var id = 1;
  
  newDate = {
    id: 1,
    name: "",
    StartDate: "",
    EndDate: ""
  }
  
  while (start_date <= date) {
    newDate = {
      id: 1,
      name: "",
      StartDate: "",
      EndDate: ""
    }
    
    const mounth = start_date.getMonth();
    const year = start_date.getFullYear();
      
    if (mounth == 11) {
      newDate.name =  `1 квартал ${year+1}`;
      newDate.StartDate = `${year}-12-1`;
      newDate.EndDate = `${year + 1}-02-28`;
    } else if (mounth == 0 || mounth == 1) {
      newDate.name =  `1 квартал ${year}`;
      newDate.StartDate = `${year-1}-12-1`;
      newDate.EndDate = `${year}-02-${daysInMonth(2, year)}`;
    } else if (mounth >= 2 && mounth <= 4) {
      newDate.name =  `2 квартал ${year}`;
      newDate.StartDate = `${year}-03-1`;
      newDate.EndDate = `${year}-05-31`;
    } else if (mounth >= 5 && mounth <= 7) {
      newDate.name =  `3 квартал ${year}`;
      newDate.StartDate = `${year}-06-1`;
      newDate.EndDate = `${year}-08-31`;
    } else if (mounth >= 8 && mounth <= 10) {
      newDate.name =  `4 квартал ${year}`;
      newDate.StartDate = `${year}-09-1`;
      newDate.EndDate = `${year}-11-30`;
    }
     
    newDate.id = id;  
    id++;
    
    ans.push(newDate);
    start_date = new Date(addDays(newDate.EndDate, 1));
      
  }
  return ans;
}

console.log(generateQuartals("2023.12.1"))
