function readPackage(pkg) {
  if (pkg.name === 'sharp' || pkg.name === 'workerd') {
    pkg.pnpm = {
      ...pkg.pnpm,
      neverBuilt: false,
    };
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
