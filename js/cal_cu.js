function calculateCalories() {
    const age = parseFloat(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value); // ใช้ค่าซม. ไม่แปลงเป็นเมตร
    const activityLevel = document.getElementById('activity').value;
    
    // ตรวจสอบว่าข้อมูลครบถ้วน
    if (!age || !weight || !height || !gender || !activityLevel) {
        document.getElementById('calories-result').textContent = 'กรุณากรอกข้อมูลที่จำเป็นทั้งหมด';
        return;
    }

    // การคำนวณ BMR (Basal Metabolic Rate)
    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'female') {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    // ปรับ BMR ตามระดับกิจกรรม
    let calorieNeed;
    switch (activityLevel) {
        case 'sedentary':
            calorieNeed = bmr * 1.2;
            break;
        case 'light':
            calorieNeed = bmr * 1.375;
            break;
        case 'moderate':
            calorieNeed = bmr * 1.55;
            break;
        case 'active':
            calorieNeed = bmr * 1.725;
            break;
        case 'very-active':
            calorieNeed = bmr * 1.9;
            break;
    }

    // แสดงผลลัพธ์
    document.getElementById('calories-result').textContent = `ความต้องการแคลอรีต่อวันของคุณคือ ${calorieNeed.toFixed(2)} แคลอรี`;
}