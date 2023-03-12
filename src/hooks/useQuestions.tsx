import { useReducer, useEffect, useState } from 'react';
import { fetchQuestions } from 'utils/api';

type ItemType = {
  description: string,
  isIt: boolean,
  selected: boolean,
  id: number,
}

type RoundType = {
  id: number,
  roundName: string,
  usesImages: boolean,
  items: ItemType[],
}

type UseQuestionsReturnType = {
  round?: RoundType | null,
  totalRounds: number,
  selectItem: Function,
}

type Action =
 | { type: 'load', results: RoundType[] }
 | { type: 'selectItem', itemId: number }

function useQuestions(roundId?: string) : UseQuestionsReturnType {
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  function reducer(state: RoundType[], action: Action): RoundType[] {
    switch (action.type) {
      case 'load':
        return action.results;
      case 'selectItem':
        return state.map((r) => ({
          ...r,
          items: (roundId && r.id === +roundId - 1) ? r.items.map((i) => ({
            ...i,
            selected: i.id === action.itemId ? true : i.selected,
          })) : r.items,
        }));
      default:
        return [];
    }
  }

  const [questions, dispatch] = useReducer(reducer, []);

  useEffect(() => {
    if (!isLoaded) {
      fetchQuestions()
        .then((response) => response.json())
        .then((data: RoundType[]) => {
          const processedQuestions = data.map((r, roundIndex) => ({
            ...r,
            id: roundIndex,
            items: r.items.map((item, index) => ({
              ...item,
              selected: false,
              id: index,
            })),
          }));

          setIsLoaded(true);
          dispatch({
            type: 'load',
            results: processedQuestions,
          });
        });
    }
  }, [isLoaded]);

  const round: RoundType | null = (roundId && questions) ? questions[+roundId - 1] : null;

  const selectItem = (itemId: number) => {
    dispatch({
      type: 'selectItem',
      itemId,
    });
  };

  return {
    round,
    totalRounds: questions.length,
    selectItem,
  };
}

export default useQuestions;
