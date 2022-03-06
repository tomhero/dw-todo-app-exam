import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import type { AppDispatch } from '@redux/store';
import { RootState } from '@redux/reducers';

// NOTE : Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
