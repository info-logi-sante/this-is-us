export const SupprimerUtilisateur = (liste, selection) => {
  console.log(liste);
  console.log(selection);

  const result = [];

  liste.forEach((user) => {
    selection.forEach((selectedUser) => {
      if (user.name === selectedUser) {
        result.push(user);
      }
    });
  });

  return liste.filter((x) => !result.includes(x));
};
