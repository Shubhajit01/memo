import { Type, type Static } from '@sinclair/typebox';
import { type RxJsonSchema } from 'rxdb';

export const MemoModel = Type.Object({
	id: Type.String({ maxLength: 50 }),
	name: Type.String(),
	body: Type.Optional(Type.String()),
	userId: Type.String(),
	_createdAt: Type.Number(),
	_updatedAt: Type.Number()
});

export interface Memo extends Static<typeof MemoModel> {}

export const MemoCollection = {
	...MemoModel,
	version: 0,
	primaryKey: 'id',
	additionalProperties: false
} as RxJsonSchema<Memo>;
