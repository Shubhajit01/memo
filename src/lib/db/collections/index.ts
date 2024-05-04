import { type RxCollection, type RxCollectionCreator } from 'rxdb';
import { type Memo, MemoCollection } from './memo';

export interface AppCollections {
	memo: RxCollection<Memo>;
}

export const appCollections = {
	memo: {
		schema: MemoCollection
	}
} satisfies Record<keyof AppCollections, RxCollectionCreator>;
