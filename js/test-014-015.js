const num = 3;

    (num > 2) ? console.log(1): console.log(0);

    switch (num) {
      case 3:
        console.log(1);
        break;
      default:
        console.log(0);
        break;
    }

    let i = 0;
    while (i < num) {
      i++;
      console.log(i);
    }

    console.log('-----');

    do {
      i++
      console.log(i);
    } while (i < num);

    console.log('-----');
    
    for (let i = 0; i < num; i++) {
      if (i===2) {
        continue;
      }
      console.log(i);    
    }