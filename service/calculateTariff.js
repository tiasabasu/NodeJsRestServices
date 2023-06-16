// const {MONTHLY_SOLAR_GENERATION_PER_KW} = require('constants.js');

this.UNITS_PER_KW_PER_YEAR = 1400;
this.ANNUAL_DEGRADATION_PERCENTAGE = 0.007;
this.TARIFF_PER_KW = 8.5 ;
this.TARIFF_ESCALATION_PERCENTAGE_PER_ANNUM = 0.03 ;
this.SOLAR_SYSTEM_SIZE_KW = 7 ;
this.MONTHLY_SOLAR_GENERATION_PER_KW =  116;



this.getSystemSizeRequired = function(averageMonthlyConsumption){

    var systemSizeRequired = Math.ceil(averageMonthlyConsumption/this.MONTHLY_SOLAR_GENERATION_PER_KW);
    return systemSizeRequired;

}

this.getSavings = function (averageMonthlyConsumption){

let output = [];
let tmp;

for (let i = 1; i <= 25; i++) {

    var systemSizeRequired = Math.ceil(averageMonthlyConsumption/this.MONTHLY_SOLAR_GENERATION_PER_KW);
    // console.log('systemSize : ' + systemSizeRequired );

    var annualDegradationPercent = this.ANNUAL_DEGRADATION_PERCENTAGE*(i-1);
    // console.log('annualDegradationPercent : ' + annualDegradationPercent );

    var unitsProduced = systemSizeRequired * this.MONTHLY_SOLAR_GENERATION_PER_KW * 12 * (1-this.ANNUAL_DEGRADATION_PERCENTAGE*(i-1)) ;
    // console.log('Units produced : ' + unitsProduced );

    var tariff = this.TARIFF_PER_KW * Math.pow(1+ this.TARIFF_ESCALATION_PERCENTAGE_PER_ANNUM,i-1)
    // console.log('Tariff: ' + tariff );

    var savings = unitsProduced * tariff;
    // console.log('Svings: ' + savings );

    tmp = {
            year : i,
            systemSize : systemSizeRequired,
            unitsProduced : unitsProduced.toFixed(2),
            tariff : tariff.toFixed(2),
            savings : savings.toFixed(2)
    };

    output.push(tmp);
}

return output   ;

}

