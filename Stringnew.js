function s(str) {
  if(str.substring(0,3)==='new')
  {
    return str;
  }
  return false;
}

console.log(s("new Durga "))
console.log(s("Durgavishalini"))
