function interes_simple(valor = "monto",capital = null, interes = null , periodos = 1,monto = null){
  switch (valor) {
    case "monto": // m = c*(1+i*n)
    console.log("monto");
      return capital*(1+interes*periodos);
      break;
    case "capital": // c = m/(1+in)
    console.log("capital");
      return monto/(1+interes*periodos);
      break;
    case "interes": // i = ((m/c)-1)/n
    console.log("interes");
      return ((monto/capital)-1)/periodos;
      break;
    case "periodos": // n = ((m/c)-1)/i
    console.log("periodos");
      return ((monto/capital)-1)/interes;
      break;
    default:
      return null;
  }
}

console.log(interes_simple(valor = "monto",capital = 100, interes = 0.1));
