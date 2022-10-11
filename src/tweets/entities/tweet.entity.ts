import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type TweetDocument = Tweet & Document;

export type TweetProps = {
  content: string;
  screen_name: string;
};

@Schema()
export class Tweet {
  constructor(props: TweetProps) {
    Object.assign(this, props);
  }

  @Prop({ required: true })
  content: string;

  @Prop({ required: true })
  screen_name: string;
}

export const TweetSchema = SchemaFactory.createForClass(Tweet);
