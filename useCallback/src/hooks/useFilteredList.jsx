import { useMemo } from 'react';

function useFilteredList(list) {
  // Memoizziamo la lista filtrata in base all'età
  const filteredList = useMemo(() => {
    return list.filter(item => item.age > 18);
  }, [list]); // La lista viene memorizzata solo se cambia

  return filteredList;
}

export default useFilteredList;
