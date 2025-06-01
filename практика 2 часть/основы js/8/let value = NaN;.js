let value = NaN;
value &&= 10; // value остается NaN (NaN && 10 → NaN)
value ||= 20; // value = 20 (NaN || 20 → 20)
value &&= 30; // value = 30 (20 && 30 → 30)
value ||= 40; // value остается 30 (30 || 40 → 30)
alert(value); // Выведет 30