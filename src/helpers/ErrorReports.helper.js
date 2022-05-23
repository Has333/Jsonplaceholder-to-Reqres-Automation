import fs from 'fs';

const dateInfo = new Date();
const date = dateInfo.getFullYear()+'-'+(dateInfo.getMonth()+1)+'-'+dateInfo.getDate();
const time = dateInfo.getHours()+":"+dateInfo.getMinutes()+":"+dateInfo.getSeconds();
const dateTime = date+' T '+time;

class ErrorReports {
    create(errorData){
        let stack = errorData.stack
        let error = errorData

        fs.writeFile(`src/reports/errors-report-${date}.txt`, 
        `{ error: "${error}", dataHora: "${dateTime}", stack: "${stack}" }`, 
        function(err) {
            if (err) {
                console.log(err);
            } else {
                return;
            }
        })
    }
}

const ReportsHelper = new ErrorReports();
export { ReportsHelper }

