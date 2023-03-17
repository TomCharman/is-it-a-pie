import { useReducer } from 'react';
import { useQuery } from 'react-query';
import {
  getConfig, getRound,
} from 'utils/api';

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

type Config = {
  numberOfRounds: number,
}

type Selections = Record<number, Set<number>>
const initialSelections: Selections = {};

type Action =
 | { type: 'selectItem', itemId: number }

function useQuestions(roundId?: number) : UseQuestionsReturnType {
  const {
    data: config,
    isSuccess: isConfigSuccess,
  } = useQuery<Config>({
    queryKey: ['config'],
    queryFn: getConfig,
  });

  const { data: roundData } = useQuery<RoundType>({
    queryKey: ['round', `${roundId}`],
    queryFn: () => getRound(roundId!),
    enabled: !!roundId && isConfigSuccess,
  });

  function reducer(state: Selections, action: Action): Selections {
    // eslint-disable-next-line no-console
    console.log(`ACTION: ${action.type}`, state, action);

    switch (action.type) {
      case 'selectItem': {
        if (!roundId) return state;

        const newSet = state[roundId] ? new Set<number>(state[roundId]) : new Set<number>();

        if (newSet.has(action.itemId)) {
          newSet.delete(action.itemId);
        } else {
          newSet.add(action.itemId);
        }

        return {
          ...state,
          [roundId]: newSet,
        };
      }
      default:
        return state;
    }
  }

  const [selections, dispatch] = useReducer(reducer, initialSelections);

  const selectItem = (itemId: number) => {
    dispatch({
      type: 'selectItem',
      itemId,
    });
  };

  const round: RoundType | undefined = roundData && roundId ? {
    ...roundData,
    items: roundData?.items.map((item, index) => ({
      ...item,
      selected: selections[roundId] && selections[roundId].has(index),
    })),
  } : undefined;

  return {
    round,
    totalRounds: config?.numberOfRounds ?? 0,
    selectItem,
  };
}

export default useQuestions;
