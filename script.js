const nationalId = document.getElementById('nationalId');
const dateOfBirth = document.getElementById('dateOfBirth');
const age = document.getElementById('age');
const area = document.getElementById('area');
const yourGender = document.getElementById('gender');

function showNationalIDInfo() {
    const id = nationalId.value;
    const birthCentury = id[0];
    const year = id.substring(1, 3);
    const month = id.substring(3, 5);
    const day = id.substring(5, 7);
    const placeCode = id.substring(7, 9);
    const gender = id[12];
    const codeToPlaces = {
        '01': 'Cairo',
        '02': 'Alexandria',
        '03': 'Port Said',
        '04': 'Suez',
        11: 'Damietta',
        12: 'Dakahlia',
        13: 'Sharkia',
        14: 'Qalyubia',
        15: 'Kafr El Sheikh',
        16: 'Gharbia',
        17: 'Menoufia',
        18: 'Beheira',
        19: 'Ismailia',
        21: 'Giza',
        22: 'Beni Suef',
        23: 'Fayoum',
        24: 'Minya',
        25: 'Assiut',
        26: 'Sohag',
        27: 'Qena',
        28: 'Aswan',
        29: 'Luxor',
        31: 'Red Sea',
        32: 'New Valley',
        33: 'Matrouh',
        34: 'North Sinai',
        35: 'South Sinai',
        88: 'Outside the Republic',
    };

    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();

    let fullYear = 0;

    if (birthCentury == 2) {
        fullYear = 19 + year;
    } else if (birthCentury == 3) {
        fullYear = 20 + year;
    }

    const birthDate = '◾️ Your date of birth is ' + fullYear + '-' + month + '-' + day;
    dateOfBirth.innerHTML = birthDate;

    const calcAge = '◾️ Your age is ' + (currentYear - fullYear);
    age.innerHTML = calcAge;

    const areaCode = '◾️ You were born in ' + codeToPlaces[placeCode];
    area.innerHTML = areaCode;

    if (gender % 2 == 0) {
        yourGender.innerHTML = '◾️ Your Gender is Female';
    } else {
        yourGender.innerHTML = '◾️ Your Gender is Male';
    }
}