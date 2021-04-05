import {Entity, model, property} from '@loopback/repository';

@model()
export class Quote extends Entity {
  @property({
    type: 'string',
    required: true,
  })
  quote: string;

  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  _id?: number;

  @property({
    type: 'string',
  })
  author?: string;

  @property({
    type: 'string',
  })
  editor?: string;

  @property({
    type: 'date',
  })
  writing?: string;

  @property({
    type: 'string',
    required: true,
  })
  language: string;

  @property({
    type: 'number',
    default: 0,
  })
  favoritedTimes?: number;


  constructor(data?: Partial<Quote>) {
    super(data);
  }
}

export interface QuoteRelations {
  // describe navigational properties here
}

export type QuoteWithRelations = Quote & QuoteRelations;
