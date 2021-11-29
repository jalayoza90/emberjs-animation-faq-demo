import { helper } from '@ember/component/helper';

export default helper(
  function questionnaireHelper(positional /*, named*/) {
    
  const [val1, val2] = positional;
  console.log(val1 , val2);
  if(val1.question_type == val2) {
    return val1.question_type === val2;
  } else if( val1.identifier.includes(val2) == true) {
    return true;
  } else {
    return false;
  }

}
);

  