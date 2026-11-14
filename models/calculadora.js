function somar(a1, a2) {
  if (typeof a1 != "number" || typeof a2 != "number") {
    return "Error";
  }
  return a1 + a2;
}
exports.somar = somar;
