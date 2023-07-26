class EachFilterStruct {
  name: string = "";
  value?: string = "";
  selected: boolean = false;
}

class FilterOverView {
  length: EachFilterStruct[] = [
    { selected: false, name: "Short" },
    { selected: false, name: "Medium" },
    { selected: false, name: "Long" },
  ];
  include: EachFilterStruct[] = [
    { selected: false, name: "Incured" },
    { selected: false, name: "Industry" },
    { selected: false, name: "Limits" },
  ];
}

class FilterSpatialInfo {
  include: EachFilterStruct[] = [
    { selected: false, name: "Name" },
    { selected: false, name: "Country" },
    { selected: false, name: "City" },
    { selected: false, name: "Post Code" },
  ];
}

export class DashboardFilter {
  overView = new FilterOverView();
  comparison: EachFilterStruct[] = [
    { selected: false, name: "Insured Name" },
    { selected: false, name: "Insured City" },
    { selected: false, name: "Insured Past code" },
    { selected: false, name: "UW Name" },
    { selected: false, name: "Droker Name" },
    { selected: false, name: "Industry" },
  ];
  spatialInfo = new FilterSpatialInfo();
}