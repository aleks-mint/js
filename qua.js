class QuarterGeneratot {
  static id = 1;
  static dates = [];
  
  static generate() {
      var date = new Date();
      let _date;
      
      if (date instanceof Date) {
        _date = date;
      } else if (!isNaN(Date.parse(date))) {
        _date = new Date(date);
      }

      let newDate = {
        id: this.id
      }

      const mounth = _date.getMonth();
      const year = _date.getFullYear();
      // 0 - Январь, 1 - Февраль и т.д.
      
      if (mounth == 11 || mounth == 0 || mounth == 1) {
        newDate.name =  `1 квартал ${year}`;
        newDate.StartDate = `${year}-12-1`;
        newDate.EndDate = `${year + 1}-02-28`;
      } else if (mounth >= 2 && mounth <= 4) {
        newDate.name =  `2 квартал ${year}`;
        newDate.StartDate = `${year}-12-1`;
        newDate.EndDate = `${year}-02-28`;
      } else if (mounth >= 5 && mounth <= 7) {
        newDate.name =  `3 квартал ${year}`;
        newDate.StartDate = `${year}-12-1`;
        newDate.EndDate = `${year}-02-28`;
      } else if (mounth >= 8 && mounth <= 10) {
        newDate.name =  `4 квартал ${year}`;
        newDate.StartDate = `${year}-12-1`;
        newDate.EndDate = `${year}-02-28`;
      }
      
      this.dates.push(newDate);

      this.id++;

      return this.dates;
  }
}
