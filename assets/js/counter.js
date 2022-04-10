const getDateDiff = (d1, d2) => {
    const date1 = new Date(d1);
    const date2 = new Date(d2);

    const diffDate = date1.getTime() - date2.getTime();

    return Math.abs(diffDate / (1000 * 3600 * 24));
}

const startDate = "2022-02-24";
const endDate = "2022-05-24";
const period = getDateDiff(startDate, endDate);

let today = new Date();
let complete = getDateDiff(startDate, today);

let percent = complete / period * 100;
if (percent > 100) percent = 100;

$(".purecounter").attr("data-purecounter-end", percent);