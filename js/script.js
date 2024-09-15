function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // แปลงจากเซนติเมตรเป็นเมตร
    if (!weight || !height) {
        document.getElementById('bmi-result').innerHTML = 'กรุณากรอกน้ำหนักและส่วนสูงที่ถูกต้อง';
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);

    let bmiText = `ค่าดัชนีมวลกาย (BMI) ของคุณคือ ${bmi}`;
    let resultText = '';

    if (bmi < 18.5) {
        resultText = 'คุณมีน้ำหนักน้อยกว่ามาตรฐาน';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText = 'คุณมีน้ำหนักอยู่ในเกณฑ์ปกติ';
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText = 'คุณมีน้ำหนักเกินมาตรฐาน';
    } else {
        resultText = 'คุณมีภาวะอ้วน';
    }

    document.getElementById('bmi-result').innerHTML = `${bmiText}<br>${resultText}`;
}


function navigateToGoal(goal) {
    switch (goal) {
        case 'bmi-cal':
            document.getElementById('bmi-cal').scrollIntoView({ behavior: 'smooth' });
            break;
        case 'goals':
            document.getElementById('goals').scrollIntoView({ behavior: 'smooth' });
            break;
        default:
            alert('Unknown goal');
            break;
    }
}

function navigateToGoal(cal) {
    
}