export default function extract({ special }) {
  return special.map((element) => {
    const {
      id, name, description = 'Описание недоступно', icon,
    } = element;
    return {
      id, name, description, icon,
    };
  });
}
