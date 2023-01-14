import {atom} from 'jotai';
import {atomWithStorage} from 'jotai/utils';

export type ImageObject = {
    url: string;
    description: string;
}

export const modalAtom = atom<boolean>(false);
export const imageObjectAtom = atomWithStorage<
ImageObject[]
>(
    'imageObject',
    []);